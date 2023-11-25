from django.contrib import admin
from .models import UserData
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin

#Register your models here
class UserDataInLine(admin.StackedInline):
    model = UserData
    can_delete = False
    verbose_name_plural = 'UserDatas'

class CustomizedUserAdmin (UserAdmin):
    inlines = (UserDataInLine, )

admin.site.unregister(User)
admin.site.register(User, CustomizedUserAdmin)

admin.site.register(UserData)

