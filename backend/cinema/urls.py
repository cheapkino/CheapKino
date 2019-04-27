from django.urls import path

from cinema.views import CinemasView, CinemaView, HallsView

urlpatterns = [
    path('', CinemasView.as_view()),
    path('<int:pk>/', CinemaView.as_view()),
    path('<int:pk>/hall/', HallsView.as_view()),

]
