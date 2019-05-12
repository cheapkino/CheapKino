from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny

from cinema.models import Hall
from cinema.serializers import HallSerializer


class HallsView(generics.ListCreateAPIView):

    def get_queryset(self):
        return Hall.objects.filter(cinema=self.kwargs['pk'])

    def get_serializer_class(self):
        return HallSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return AllowAny(),

        elif self.request.method == 'POST':
            if User.objects.filter(username=self.request.user.username, groups=(2,)):
                return IsAuthenticated(),

            return IsAdminUser(),


class HallView(generics.RetrieveUpdateDestroyAPIView):

    def get_queryset(self):
        return Hall.objects.filter(cinema=self.kwargs['pk2'], id=self.kwargs['pk'])

    def get_serializer_class(self):
        return HallSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return AllowAny(),

        elif self.request.method in ('PUT', 'DELETE', ):
            if User.objects.filter(username=self.request.user.username, groups=(2, )):
                return IsAuthenticated(),

            return IsAdminUser(),
