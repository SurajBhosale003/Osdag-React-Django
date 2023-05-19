from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from viteproject.models import DesignSave
from viteproject.serializers import DesignSaveSerializer

from django.core.files.storage import default_storage
# Create your views here.

@csrf_exempt
def save_designAPI(request,id=0):
    if request.method == 'GET':
        designSave = DesignSave.objects.all()
        designSaveSerializer = DesignSaveSerializer(designSave,many=True)
        return JsonResponse(designSaveSerializer.data,safe=False)
    elif request.method == 'POST':
        designSave_data = JSONParser().parse(request)
        designSaveSerializer = DesignSaveSerializer(data=designSave_data)
        if designSaveSerializer.is_valid():
            designSaveSerializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method == 'PUT':
        designSave_data = JSONParser().parse(request)
        designSave = DesignSave.objects.get(DesignId = designSave_data['DesignId'])
        designSaveSerializer = DesignSaveSerializer(designSave,data=designSave_data)
        if designSaveSerializer.is_valid():
            designSaveSerializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Fail Update")
    elif request.method=='DELETE':
        designSave = DesignSave.objects.get(DesignId=id)
        designSave.delete()
        return JsonResponse("Delete Successfully",safe=False)


@csrf_exempt
def SaveFile(request):
    file=request.FILES['file']
    file_name = default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)