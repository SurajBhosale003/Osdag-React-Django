from django.db import models

# Create your models here.
class DesignSave(models.Model):
    DesignId = models.AutoField(primary_key=True)
    DesignName = models.CharField(max_length=1000)
    PhotoFileName = models.CharField(max_length=1000)