import bcrypt as bcrypt

from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate

from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from user.serializers import UserSerializer


class UserCreateView(generics.CreateAPIView):

    def get_queryset(self):
        return User.objects.all()

    def get_serializer_class(self):
        return UserSerializer


class UserListView(generics.ListAPIView):

    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        return User.objects.all()

    def get_serializer_class(self):
        return UserSerializer
