from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import *
from .serializer import *
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response

# Create your views here.

@api_view(['POST'])
def api_quick_start(request):
    if request.method == 'POST':
        quick_scan_start = request.data.get('quick_scan_start')

        if quick_scan_start is None:
            return Response({"error": "Invalid data format. 'quick_scan_start' field with true/false expected."}, status=400)

        # Assuming you want to store the data or perform some operation with it, you can do it here.
        # For this example, we'll just return the received value in the response.
        print("quick_scan" , quick_scan_start)
        return Response({"quick_scan_start": quick_scan_start})