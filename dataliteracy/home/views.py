from django.shortcuts import render, redirect
from django.template import loader
from django.http import HttpResponse
from django.views.generic import CreateView, DetailView
from django.contrib.auth.decorators import login_required  #For function based view protection
from django.contrib.auth.mixins import LoginRequiredMixin  #For class based view protection
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, authenticate
from .forms import SignUpForm
from django.contrib.staticfiles import finders

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

def missionStatement(request):
  return render(request, 'missionStatement.html')

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

def SignUp_View(request):
  if request.method == 'POST':
    form = SignUpForm(request.POST)
    if form.is_valid():
      form.save()
      print(form.cleaned_data)
      username = form.cleaned_data.get('username')
      raw_password = form.cleaned_data.get('password1')
      user = authenticate(username=username, password=raw_password)
      login(request, user)
      return home(request)   
  else:
    form = SignUpForm()
  return render(request, 'signup.html', {'form': form})