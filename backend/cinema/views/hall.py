from rest_framework import generics

from cinema.models import Hall
from cinema.serializers import HallSerializer


class HallsView(generics.ListCreateAPIView):

    def get_queryset(self):
        return Hall.objects.filter(cinema=self.kwargs['pk'])

    def get_serializer_class(self):
        return HallSerializer

    # def perform_create(self, serializer):
