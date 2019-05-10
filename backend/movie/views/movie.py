from rest_framework import generics, filters
from rest_framework.pagination import PageNumberPagination

from movie.models import Movie
from movie.serializers import MovieSerializer

from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly


class MoviesView(generics.ListCreateAPIView):
    permission_classes = (DjangoModelPermissionsOrAnonReadOnly, )

    filter_backends = (filters.OrderingFilter, )

    # pagination with PageNumberPagination
    pagination_class = PageNumberPagination
    pagination_class.page_size = 10

    # ordering filter
    ordering_fields = ('rating', )
    ordering = ('-premiere', 'title', )

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
