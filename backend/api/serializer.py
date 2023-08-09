from rest_framework import serializers
from .models import *

class Quick_Scan_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Quick_Scan
        fields = ['start_quick_scan']

class Full_Scan_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Full_Scan
        fields = ['start_full_scan']

class Spider_data_Serializer(serializers.ModelSerializer):
    class Meta:
        model = spider_data
        feilds = '__all__'

class ip_addr_Serailizer(serializers.ModelSerializer):
    class Meta:
        model = get_ip_addr
        fields = ['ip_addr']

class Get_Description_Serializer(serializers.ModelSerializer):
    class Meta:
        model = get_description
        fields = "__all__"

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"
        