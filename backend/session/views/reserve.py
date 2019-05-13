from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny

from session.models import SeatReserve
from session.serializers import ReserveSerializer


class ReservesView(generics.ListAPIView):

    def get_queryset(self):
        return SeatReserve.objects.all()

    def get_serializer_class(self):
        return ReserveSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return AllowAny(),

        elif self.request.method == 'POST':
            if User.objects.filter(username=self.request.user.username, groups=(2, )):
                return IsAuthenticated(),

            return IsAdminUser(),


class ReserveView(generics.UpdateAPIView):

    def get_queryset(self):
        return SeatReserve.objects.all()

    def get_serializer_class(self):
        return ReserveSerializer

    def perform_update(self, serializer):
        if User.objects.filter(username=self.request.user.username, groups=(1, )):
            serializer.save(user=self.request.user)

        else:
            serializer.save()

    def get_permissions(self):
        if self.request.method == 'GET':
            return AllowAny(),

        elif self.request.method in ('PUT', 'DELETE', ):
            return IsAuthenticated(),

