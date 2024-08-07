import json
import os
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import generics

from backend import settings
from .models import Data
from .serializers import DataSerializer

# Create your views here.

class DataList(generics.ListCreateAPIView):
    queryset = Data.objects.all()
    serializer_class = DataSerializer

def hikes_list(request):
    """
    View function to return a list of hikes from a JSON file.
    """
    # Construct the full path to the JSON file
    json_file_path = os.path.join(settings.BASE_DIR,'api')
    json_file_path = os.path.join(json_file_path, 'hikes.json')
    try:
        # Open and read the JSON file
        with open(json_file_path, 'r') as file:
            data = json.load(file)
        return JsonResponse(data, safe=False)
    except FileNotFoundError:
        return JsonResponse({'error': 'File not found'}, status=404)
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Error decoding JSON'}, status=500)