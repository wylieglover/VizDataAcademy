from django.http import HttpResponse
from django.template import loader

def home(request):
  template = loader.get_template('missionStatement.html')
  return HttpResponse(template.render())

def contributors(request):
  template = loader.get_template('contributors.html')
  return HttpResponse(template.render())

def sponsors(request):
  template = loader.get_template('sponsors.html')
  return HttpResponse(template.render())

def contact(request):
  template = loader.get_template('contact.html')
  return HttpResponse(template.render())

def reviews(request):
  template = loader.get_template('reviews.html')
  return HttpResponse(template.render())

def graphing(request):
  template = loader.get_template('graphing.html')
  return HttpResponse(template.render())

def barGraphing(request):
  template = loader.get_template('barGraphing.html')
  return HttpResponse(template.render())

def lineGraphing(request):
  template = loader.get_template('lineGraphing.html')
  return HttpResponse(template.render())

def pieGraphing(request):
  template = loader.get_template('pieGraphing.html')
  return HttpResponse(template.render())

def missionStatement(request):
  template = loader.get_template('missionStatement.html')
  return HttpResponse(template.render())

def graphing(request):
  template = loader.get_template('graphing.html')
  return HttpResponse(template.render())

def histoGraphing(request):
  template = loader.get_template('histoGraphing.html')
  return HttpResponse(template.render())

def bubbleGraphing(request):
  template = loader.get_template('bubbleGraphing.html')
  return HttpResponse(template.render())

def boxGraphing(request):
  template = loader.get_template('boxGraphing.html')
  return HttpResponse(template.render())

def dotGraphing(request):
  template = loader.get_template('dotGraphing.html')
  return HttpResponse(template.render())