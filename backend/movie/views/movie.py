from rest_framework import generics, filters
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAdminUser, AllowAny

from movie.models import Movie
from movie.serializers import MovieSerializer


class MoviesView(generics.ListCreateAPIView):

    filter_backends = (filters.OrderingFilter, )

    # pagination with PageNumberPagination
    pagination_class = PageNumberPagination
    pagination_class.page_size = 10

    # ordering filter
    ordering_fields = ('rating', )
    # default filtering
    ordering = ('-premiere', 'title', )

    def get_queryset(self):
        return Movie.objects.all()

    def get_serializer_class(self):
        return MovieSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return AllowAny(),

        elif self.request.method == 'POST':
            return IsAdminUser(),


class MovieView(generics.RetrieveUpdateDestroyAPIView):

    def get_queryset(self):
        return Movie.objects.all()

    def get_serializer_class(self):
        return MovieSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return AllowAny(),

        elif self.request.method in ('PUT', 'DELETE', ):
            return IsAdminUser(),

