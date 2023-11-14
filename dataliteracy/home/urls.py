from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.home, name='home'),
    path('home/templates/contributors.html', views.contributors, name='contributors'),
    path('home/templates/contact.html', views.contact , name='contact'),
    path('home/templates/reviews.html', views.reviews , name='reviews'),
    path('home/templates/sponsors.html', views.sponsors , name='sponsors'),
    path('home/templates/graphing.html', views.graphing , name='graphing'),
    path('home/templates/barGraphing.html', views.barGraphing , name='barGraphing'),
    path('home/templates/lineGraphing.html', views.lineGraphing , name='lineGraphing'),
    path('home/templates/pieGraphing.html', views.pieGraphing , name='pieGraphing'),
    path('home/templates/missionStatement.html', views.missionStatement , name='missionStatement'),
    path('home/templates/graphing.html', views.graphing , name='graphing'),
    path('home/templates/histoGraphing.html', views.histoGraphing , name='histoGraphing')

]