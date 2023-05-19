from django.conf.urls import url
from viteproject import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    url(r'^design$', views.save_designAPI),
    url(r'^design/([0-9]+)',views.save_designAPI),
    url(r'^design/savefile',views.SaveFile)

    
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
