from django.contrib import admin
from django.urls import path , include 
from rest_framework import urls , routers
from . import views


post_router = routers.DefaultRouter()

post_router.register(r'posts',views.PostViewSet)

urlpatterns = [
    path('api/',views.api_quick_start, name='handle_data'),
    path('full_scan/',views.api_full_start , name= "full_start"),
    path('ip_addr/',views.get_system_ip , name="show_address"),
    path('data_spider/',views.send_spider_data, name="dataspider"),
    path('data_description/',views.send_description_data, name="datasdescription"),
    path('download_report/', views.download_file)
]
