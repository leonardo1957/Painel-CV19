from django.urls import path
from .views import CovidView

app_name = 'covid'

urlpatterns = [
    path('covid', CovidView.as_view()),
]
