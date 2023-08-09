from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import *
from .serializer import *
from rest_framework.decorators import api_view
from rest_framework import viewsets
from rest_framework.response import Response
import socket
import json
from asgiref.sync import async_to_sync
import subprocess


python_path = "./test.py"

# Create your views here.

@api_view(['POST','GET'])
def api_quick_start(request):
    if request.method == 'POST':
        quick_scan_start = request.data.get('quick_scan_start')

        if quick_scan_start == True:
            try:
                from api import mainprogram
                print("quick_scan" , quick_scan_start)

            except Exception as e:
                return JsonResponse(f"Error : {e}" , safe=False)

        # Assuming you want to store the data or perform some operation with it, you can do it here.
        # For this example, we'l Error: /apl just return the received value in the response.
        if quick_scan_start is None:
            return Response({"error": "Invalid data format. 'quick_scan_start' field with true/false expected."}, status=400)

        return Response({"quick_scan_start": quick_scan_start})

@api_view(['POST','GET'])
def api_full_start(request):
    if request.method == 'POST':
        full_scan_start = request.data.get('full_scan_start')

        if full_scan_start is None:
            return Response({"error": "Invalid data format. 'full_scan_start' field with true/false expected."}, status=400)

        # Assuming you want to store the data or perform some operation with it, you can do it here.
        # For this example, we'll just return e received value in the response.
        print("full_scan" , full_scan_start)
        return Response({"full_scan_start": full_scan_start})
      
    
@api_view(['GET'])
def get_system_ip(request):
    if request.method == 'GET':
        try:
            hostname = socket.gethostname()
            ip_address = socket.gethostbyname(hostname)
            ip_address_serializer = ip_addr_Serailizer(ip_address, many=True)
            print(f"System IP address: {ip_address}")
            return Response(ip_address)
        except Exception as e:
            return Response({"Error:", str(e)})
    
@api_view(['GET'])
def send_spider_data(request):
    if request.method == 'GET':
        try:
            response_data = open('./test_data.json').read()
            jsonData = json.loads(response_data)
            print(jsonData)
            return Response(jsonData)
        except Exception as e:
            return Response({"Error :", str(e)}) 


@api_view(['GET'])
def send_description_data(request):
    if request.method == 'GET':
        try:
            describe_data = open('./Windows_json_file.json').read()
            JsonData = json.loads(describe_data)
            print(JsonData)
            return JsonResponse(JsonData)
        except Exception as e:
            return Response({"Error :", str(e)}) 

import mimetypes

@api_view(['GET'])
def download_file(request):
    if request.method == 'GET':
    # fill these variables with real values
        fl_path = 'scan_report.txt'
        filename = 'Black_scan.txt'

        fl = open(fl_path, 'r')
        mime_type, _ = mimetypes.guess_type(fl_path)
        response = HttpResponse(fl, content_type=mime_type)
        response['Content-Disposition'] = "attachment; filename=%s" % filename
        return response
    
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer