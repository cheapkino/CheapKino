from django.contrib.auth.models import User

from rest_framework import generics, filters
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny

from cinema.models import Cinema
from cinema.serializers import CinemaSerializer


class CinemasView(generics.ListCreateAPIView):

    filter_backends = (filters.OrderingFilter, )

    ordering = ('name', )
    
    def get_queryset(self):
        return Cinema.objects.all()

    def get_serializer_class(self):
        return CinemaSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return AllowAny(),

        elif self.request.method == 'POST':
            return IsAdminUser(),


class CinemaView(generics.RetrieveUpdateDestroyAPIView):

    def get_queryset(self):
        return Cinema.objects.all()

    def get_serializer_class(self):
        return CinemaSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return AllowAny(),

        elif self.request.method == 'PUT':
            if User.objects.filter(username=self.request.user.username, groups=(2, )):
                return IsAuthenticated(),

            return IsAdminUser(),

        elif self.request.method == 'DELETE':
            return IsAdminUser(),
