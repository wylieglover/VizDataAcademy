from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.home, name='home'),
    path('home/templates/contributors.html', views.contributors, name='contributors'),
    path('home/templates/contact.html', views.contact , name='contact'),
    path('home/templates/reviews.html', views.reviews , name='reviews'),
    path('home/templates/sponsors.html', views.sponsors , name='sponsors'),
    path('home/templates/graphing.html', views.graphing , name='graphing')
]