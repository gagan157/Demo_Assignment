
from django.urls import path
from . import views

urlpatterns = [
   path('',views.admin,name='admin'),
   path('upload/',views.uploadfile,name='upload'),
   path('login/',views.log_in,name='login'),
   path('logout/',views.log_out,name='logout'),
   path('delete/<int:myid>',views.delfile,name='del'),
   # path('info/<int:myid>',views.getinfo,name='info'),
   
   
]