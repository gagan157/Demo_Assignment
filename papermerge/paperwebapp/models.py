from django.db import models
import datetime

from django.db.models.base import Model

# Create your models here.
class files(models.Model):
    Name = models.CharField(max_length=500,null=True)
    Uploadfiles = models.FileField(upload_to="paperwebapp/files",null=True)
    UpTime = models.DateTimeField(default=datetime.datetime.now)

    def __str__(self) :
        return str(self.Name)


class BookmarkModel(models.Model):
    files = models.OneToOneField(files,on_delete=models.CASCADE,null=True)
    