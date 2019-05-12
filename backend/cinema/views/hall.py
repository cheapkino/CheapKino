from rest_framework import generics
from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly
from cinema.models import Hall
from cinema.serializers import HallSerializer


class HallsView(generics.ListCreateAPIView):
    permission_classes = (DjangoModelPermissionsOrAnonReadOnly, )

    def get_queryset(self):
        return Hall.objects.filter(cinema=self.kwargs['pk'])

    def get_serializer_class(self):
        return HallSerializer


class HallView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (DjangoModelPermissionsOrAnonReadOnly, )

    def get_queryset(self):
        return Hall.objects.filter(cinema=self.kwargs['pk2'], id=self.kwargs['pk'])

    def get_serializer_class(self):
        return HallSerializer

