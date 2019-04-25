from django.urls import path

from movie.views import MoviesView, MovieView
from movie.views import ReviewsView

urlpatterns = [
    path('', MoviesView.as_view()),
    path('<int:pk>/', MovieView.as_view()),
    path('<int:pk>/review/', ReviewsView.as_view())
]