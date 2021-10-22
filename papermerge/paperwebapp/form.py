from .models import files
from django import forms
from django.contrib.auth.models import User

from django.contrib.auth.forms import AuthenticationForm


class FilesForm(forms.ModelForm):
    class Meta:
        model = files
        fields = ['Uploadfiles']


class LoginForm(AuthenticationForm): 
    username = forms.CharField()
    username.widget = forms.TextInput(attrs={'class':'form-control','placeholder': 'Username'})
    password = forms.CharField()
    password.widget = forms.PasswordInput(attrs={'class':'form-control','placeholder': 'Password'})       