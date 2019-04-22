from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from cinema.models import Cinema

from cinema.serializers import MovieSerializer


class CinemaView(generics.ListCreateAPIView):

    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        return Cinema.objects.all()

    def get_serializer_class(self):
        return MovieSerializer
