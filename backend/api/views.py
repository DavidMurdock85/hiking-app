from django.shortcuts import render
from rest_framework import generics
from .models import Data
from .serializers import DataSerializer

# Create your views here.

class DataList(generics.ListCreateAPIView):
    queryset = Data.objects.all()
    serializer_class = DataSerializer