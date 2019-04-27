from django.urls import path

from .views import SessionsView

urlpatterns = [
    path('', SessionsView.as_view())
]