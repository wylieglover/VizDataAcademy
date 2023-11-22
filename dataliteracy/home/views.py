from django.http import HttpResponse
from django.template import loader
from django.contrib.staticfiles import finders
from django.shortcuts import render

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