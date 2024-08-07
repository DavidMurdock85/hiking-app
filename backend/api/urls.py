from django.urls import path
from .views import DataList, hikes_list

urlpatterns = [
    path('hikes/', hikes_list, name='hikes_list'),
    path('data/', DataList.as_view(), name='data-list'),
]