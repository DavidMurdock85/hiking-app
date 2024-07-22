import graphene
from graphene_django.types import DjangoObjectType
from .models import Person

class PersonType(DjangoObjectType):
    class Meta:
        model = Person

class Query(graphene.ObjectType):
    all_persons = graphene.List(PersonType)

    def resolve_all_persons(self, info, **kwargs):
        return Person.objects.all()

class CreatePerson(graphene.Mutation):
    class Arguments:
        name = graphene.String()
        age = graphene.Int()
        city = graphene.String()

    person = graphene.Field(lambda: PersonType)

    def mutate(self, info, name, age, city):
        person = Person(name=name, age=age, city=city)
        person.save()
        return CreatePerson(person=person)

class Mutation(graphene.ObjectType):
    create_person = CreatePerson.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)