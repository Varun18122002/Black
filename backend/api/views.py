from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import *
from .serializer import *
from rest_framework.decorators import api_view
from rest_framework import status

# Create your views here.

@api_view(['POST'])
def api_quick_start(request):
    if request.method == 'POST' :
        # data_quick= Quick_Scan.objects.all()
        # data_quick_serializer = Quick_Scan_Serializer(data_quick , many= True)
            
        # return JsonResponse(data_quick_serializer, safe= False)

        data = Quick_Scan.get('start_quick_scan')
        if data is None:
            return Quick_Scan({"error": "Invalid data format. 'value' field with true/false expected."}, status=400)

        # Assuming you want to store the data or perform some operation with it, you can do it here.
        # For this example, we'll just return the received value in the response.
        return Quick_Scan({"start_quick_start": data})
    