from rest_framework import generics

from movie.models import Movie
from movie.serializers import MovieSerializer

from rest_framework.permissions import DjangoModelPermissions, DjangoModelPermissionsOrAnonReadOnly


class MoviesView(generics.ListCreateAPIView):

    permission_classes = (DjangoModelPermissionsOrAnonReadOnly, )

    def get_queryset(self):
        return Movie.objects.all()

    def get_serializer_class(self):
        return MovieSerializer


class MovieView(generics.RetrieveUpdateDestroyAPIView):

    permission_classes = (DjangoModelPermissionsOrAnonReadOnly, )

    def get_queryset(self):
        return Movie.objects.all()

    def get_serializer_class(self):
        return MovieSerializer
