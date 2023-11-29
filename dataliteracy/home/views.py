from django.shortcuts import render, redirect, get_object_or_404
from django.template import loader
from django.http import HttpResponse
from django.views.generic import CreateView, DetailView
from django.contrib.auth.decorators import login_required  #For function based view protection
from django.contrib.auth.mixins import LoginRequiredMixin  #For class based view protection
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, authenticate
from .forms import SignUpForm
from django.contrib.staticfiles import finders
from .models import Classroom, StudentClassroom, TeacherClassroom, UserData
from helpers import random_str
from itertools import chain


def serve_css(request):
    css_path = finders.find('css/styling.css')
    if css_path:
        with open(css_path, 'rb') as f:
            response = HttpResponse(f.read(), content_type='text/css')
        return response
    else:
        return HttpResponse(status=404)

def home(request):
  return render(request, 'missionStatement.html')

def contributors(request):
  return render(request, 'contributors.html')

def sponsors(request):
  return render(request, 'sponsors.html')

def contact(request):
  return render(request, 'contact.html')

def reviews(request):
  return render(request, 'reviews.html')

def graphing(request):
  return render(request, 'graphing.html')

def barGraphing(request):
  return render(request, 'barGraphing.html')

def lineGraphing(request):
  return render(request, 'lineGraphing.html')

def pieGraphing(request):
  return render(request, 'pieGraphing.html')

def histoGraphing(request):
  return render(request, 'histoGraphing.html')

def bubbleGraphing(request):
  return render(request, 'bubbleGraphing.html')

def boxGraphing(request):
  return render(request, 'boxGraphing.html')

def dotGraphing(request):
  return render(request, 'dotGraphing.html')

def lesson1(request,class_id):
  return render(request, 'lesson1.html')

def SignUp_View(request):
  if request.method == 'POST':
    form = SignUpForm(request.POST)
    if form.is_valid():
      form.save()
      print(form.cleaned_data)
      username = form.cleaned_data.get('username')
      raw_password = form.cleaned_data.get('password1')
      role = form.cleaned_data.get('role')
      user = authenticate(username=username, password=raw_password, role=role)
      x = UserData.objects.create(user=user, role=role)
      
      login(request, user)
      return view_class(request)
  else:
    form = SignUpForm()
  return render(request, 'signup.html', {'form': form})


def create_class(request):
  if request.method =="POST":
    title = request.POST["title"]
    description = request.POST["description"]
    join_code = random_str()


    c = Classroom.objects.create(title=title, description=description, owner=request.user, join_code=join_code)
    TeacherClassroom.objects.create(user=request.user, classroom=c)

    return redirect("dashboard")
  else:
    return render(request, "createClass.html")
  
def view_class(request):
  print(request.user.username)
  account = UserData.objects.get(user=request.user)
  role = account.role
  print(role)
  if request.user.username == "":
    return HttpResponse("Hello")

  s = StudentClassroom.objects.filter(user=request.user)
  t = TeacherClassroom.objects.filter(user=request.user)
  classrooms = list(chain(s, t))

  return render(request, "dashboard.html" , {
    "classrooms": classrooms
  })

def join_class(request):
  if request.method =="POST":
    join_code = request.POST["join_code"]


    classroom = Classroom.objects.get(join_code=join_code)
    StudentClassroom.objects.create(user=request.user, classroom=classroom)

    return redirect(f"/{join_code}/")
  else:
    return render(request, "dashboard.html")
  
def course_view(request, class_id):
  classroom = get_object_or_404(Classroom, join_code=class_id)
  user = UserData.objects.get(user=request.user)

  context = {
    "classroom": classroom,
    "user_data": user,
  }
  return render(request, "insideClass.html", context)