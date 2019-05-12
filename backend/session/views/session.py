from rest_framework import generics, filters
from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly

from cinema.models import Cinema
from movie.models import Movie
from session.models import Session
from session.serializers import SessionSerializer

import datetime


class SessionsView(generics.ListCreateAPIView):
    permission_classes = (DjangoModelPermissionsOrAnonReadOnly, )

    def get_queryset(self):
        # get today`s sessions
        now = datetime.datetime.now()

        queryset = Session.objects.filter(date__day=now.day, date__month=now.month, date__year=now.year)

        # filters around movie or cinema
        movie_id = self.request.query_params.get('movie', None)
        cinema_id = self.request.query_params.get('cinema', None)

        # movie filter
        if movie_id:
            movie = Movie.objects.get(id=movie_id)

            if movie:
                queryset = queryset.filter(movie=movie)

        # cinema filter
        elif cinema_id:
            cinema = Cinema.objects.get(id=cinema_id)

            if cinema:
                queryset = queryset.filter(hall__cinema=cinema)

        return queryset

    def get_serializer_class(self):
        return SessionSerializer


class SessionView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (DjangoModelPermissionsOrAnonReadOnly, )

    def get_queryset(self):
        return Session.objects.all()

    def get_serializer_class(self):
        return SessionSerializer
