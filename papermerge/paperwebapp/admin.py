from django.contrib import admin
from .models import files,BookmarkModel
# Register your models here.
@admin.register(files)
class Filesadmin(admin.ModelAdmin):
    list_display=['Name','Uploadfiles','UpTime']

@admin.register(BookmarkModel)
class Bookmarkmodeladmin(admin.ModelAdmin):
    list_display = ['id','files']