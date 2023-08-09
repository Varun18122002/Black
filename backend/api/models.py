from django.db import models
import uuid

# Create your models here.

class Quick_Scan(models.Model):
    start_quick_scan = models.BooleanField()

class Full_Scan(models.Model):
    start_full_scan = models.BooleanField()

class spider_data(models.Model):
    data_spider = models.JSONField()

class get_ip_addr(models.Model):
    ip_addr = models.TextField()

class get_description(models.Model):
    description = models.JSONField()

class generate_uuid(models.Model):
    id = models.UUIDField(primary_key=True , default= uuid.uuid4 , editable=False)
    device = models.CharField(max_length=200)

class Post(models.Model):  # search button
    title = models.CharField(max_length=220)
    def __str__(self):
        return str(self.title)