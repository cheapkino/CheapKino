from django.urls import path

from .views import UserListView, UserCreateView
from .views import login, logout


urlpatterns = [
    path('', UserListView.as_view()),
    path('register/', UserCreateView.as_view()),
    path('login/', login),
    path('logout/', logout)
]
