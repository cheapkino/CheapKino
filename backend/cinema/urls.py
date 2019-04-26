from django.urls import path

from cinema.views import CinemasView, CinemaView

urlpatterns = [
    path('', CinemasView.as_view()),
    path('<int:pk>/', CinemaView.as_view())
]
