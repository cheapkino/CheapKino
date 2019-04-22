from django.urls import path

from cinema.views import CinemaView

urlpatterns = [
    path('', CinemaView.as_view())
]
