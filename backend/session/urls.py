from django.urls import path

from .views import SessionsView, SessionView, ReservesView, ReserveView, get_data

urlpatterns = [
    path('', SessionsView.as_view()),
    path('<int:pk>/', SessionView.as_view()),
    path('<int:pk>/reserve/', ReservesView.as_view()),
    path('<int:pk2>/reserve/<int:pk>/', ReserveView.as_view()),
    path('<int:pk>/data/', get_data)
]
