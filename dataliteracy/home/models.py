from django.db import models
from django.conf import settings
from django.contrib.auth.models import User


# Create your model here.

class UserData(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    ROLE_CHOICES = [
        ('STUDENT', 'Student'),
        ('TEACHER', 'Teacher'),
    ]
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

    def __str__(self):
        return self.user.username

class Classroom(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()
    join_code = models.CharField(max_length=7)
    owner =  models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)


class StudentClassroom(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    classroom = models.ForeignKey("Classroom", on_delete=models.CASCADE)


class TeacherClassroom(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    classroom = models.ForeignKey("Classroom", on_delete=models.CASCADE)

