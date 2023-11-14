from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.home, name='home'),
    path('contributors/', views.contributors, name='contributors'),
    path('contact/', views.contact , name='contact'),
    path('reviews/', views.reviews , name='reviews'),
    path('sponsors/', views.sponsors , name='sponsors'),
    path('graphing/', views.graphing , name='graphing'),
    path('barGraphing/', views.barGraphing , name='barGraphing'),
    path('lineGraphing/', views.lineGraphing , name='lineGraphing'),
    path('pieGraphing/', views.pieGraphing , name='pieGraphing'),
    path('missionStatement/', views.missionStatement , name='missionStatement'),
    path('graphing/', views.graphing , name='graphing'),
    path('histoGraphing/', views.histoGraphing , name='histoGraphing')

]