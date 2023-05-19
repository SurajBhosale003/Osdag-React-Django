from rest_framework import serializers
from viteproject.models import DesignSave

class DesignSaveSerializer(serializers.ModelSerializer):
    class Meta:
        model=DesignSave
        fields=('DesignId','DesignName','PhotoFileName')