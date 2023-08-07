from rest_framework import serializers
from .models import *

class Quick_Scan_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Quick_Scan
        fields = ['start_quick_scan']

