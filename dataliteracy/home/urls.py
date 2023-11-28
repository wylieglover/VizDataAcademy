from django.urls import path
from django.views.generic import RedirectView
from . import views
#
urlpatterns = [
    #Redirect from www.vizdataacademy.com to www.vizdataacademy.com/home
    path('', RedirectView.as_view(url='/home', permanent=True), name='home_redirect'),
    #Redirect from vizdataacademy.com to vizdataacademy.com/home
    path('', RedirectView.as_view(url='/home', permanent=True), name='home_redirect_no_www'),
    path('home/', views.home, name='home'), 
    path('serve-css/', views.serve_css, name='serve-css'),
    path('home/contributors/', views.contributors, name='contributors'),
    path('home/contact/', views.contact , name='contact'),
    path('home/reviews/', views.reviews , name='reviews'),
    path('home/sponsors/', views.sponsors , name='sponsors'),
    path('home/bar-graph/', views.barGraphing , name='barGraphing'),
    path('home/line-graph/', views.lineGraphing , name='lineGraphing'),
    path('home/pie-chart/', views.pieGraphing , name='pieGraphing'),
    path('home/histogram/', views.histoGraphing , name='histo-graph'),
    path('home/bubble-graph/', views.bubbleGraphing , name='bubbleGraphing'),
    path('home/box-plot/', views.boxGraphing , name='boxGraphing'),
    path('home/scatter-plot/', views.dotGraphing , name='dot-graph'),
    path('home/graphing/', views.graphing , name='graphing'),
    path('signup/', views.SignUp_View , name='signup'),
    path('create/', views.create_class , name='create'),
    path('dashboard/', views.view_class, name="dashboard"),
    path("<str:class_id>/", views.course_view, name="course"),



]
