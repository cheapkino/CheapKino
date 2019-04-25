from rest_framework import generics
from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly

from cinema.models import Cinema

from cinema.serializers import CinemaSerializer


class CinemasView(generics.ListCreateAPIView):

    permission_classes = (DjangoModelPermissionsOrAnonReadOnly, )

    def get_queryset(self):
        return Cinema.objects.all()

    def get_serializer_class(self):
        return CinemaSerializer


class CinemaView(generics.RetrieveAPIView):

    permission_classes = (DjangoModelPermissionsOrAnonReadOnly, )

    def get_queryset(self):
        return Cinema.objects.all()

    def get_serializer_class(self):
        return CinemaSerializer
