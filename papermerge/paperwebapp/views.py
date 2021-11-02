from django.contrib.auth import authenticate
from django.core.files.base import File
from django.http import request, response
from django.http.response import HttpResponse, HttpResponseRedirect
from django.shortcuts import render

import paperwebapp
from .form import FilesForm,LoginForm
from django.contrib.auth import login,logout
from .models import files,BookmarkModel

# Create your views here.
def admin(request):    
    if request.method == "GET":        
        myform = FilesForm()
        if 'search' in request.GET: 
            ser = request.GET['search']
            allfiles = files.objects.filter(Name__icontains=ser)
        
        else:            
            allfiles = files.objects.all()
        data = {'form':myform,'files':allfiles}
        return render(request,'paperwebapp/pannel.html',data)

        
    # return render(request,'paperwebapp/pannel.html',{'files':allfiles})


# def getinfo(request,myid):
#     if request.method == 'POST':
#         inf = files.objects.get(pk=myid)
#         print('work')
#         return render(request,'paperwebapp/pannel.html',{'info':inf})
        
    


def log_in(request):    
    if not request.user.is_authenticated:
        if request.method == 'POST':
            logform = LoginForm(request=request, data=request.POST)
            if logform.is_valid():
                usern=logform.cleaned_data['username']
                passw=logform.cleaned_data['password']
                user = authenticate(username=usern,password=passw)
                if user is not None:
                        login(request,user)
                        return HttpResponseRedirect('/')
        logform = LoginForm()
        return render(request,'paperwebapp/login.html',{'login':logform})
    else:
        return HttpResponseRedirect('/')    


def uploadfile(request):       
    if request.method == 'POST':
        myform = FilesForm(request.POST, request.FILES)      
        if myform.is_valid():           
            upfile = myform.cleaned_data['Uploadfiles']
            name=upfile
            myf=files(Name=name,Uploadfiles=upfile)
            myf.save()
            return HttpResponseRedirect('/')

def delfile(request,myid):
    if request.user.is_authenticated: 
       if request.method == 'POST':
        delo= files.objects.get(pk=myid)
        delo.delete()
        return HttpResponseRedirect('/')


def log_out(request):
    logout(request)
    return HttpResponseRedirect('/')




