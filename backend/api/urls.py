from django.contrib import admin
from django.urls import path , include 
from rest_framework import urls
from . import views


urlpatterns = [
    path('api/',views.api_quick_start, name='handle_data')
]
