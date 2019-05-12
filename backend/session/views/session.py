from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny

from cinema.models import Cinema
from movie.models import Movie
from session.models import Session
from session.permissions import IsOwner
from session.serializers import SessionSerializer

import datetime


class SessionsView(generics.ListCreateAPIView):

    def get_queryset(self):
        # get today`s sessions
        now = datetime.datetime.now()
        queryset = Session.objects.filter(date__day=now.day, date__month=now.month, date__year=now.year)

        # filters around movie or cinema
        movie_id = self.request.query_params.get('movie', None)
        cinema_id = self.request.query_params.get('cinema', None)

        # movie filter
        if movie_id:
            movie = get_object_or_404(Movie, id=movie_id)
            queryset = queryset.filter(movie=movie)

        # cinema filter
        elif cinema_id:
            cinema = get_object_or_404(Cinema, id=cinema_id)
            queryset = queryset.filter(hall__cinema=cinema)

        return queryset

    def get_serializer_class(self):
        return SessionSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return AllowAny(),

        elif self.request.method == 'POST':
            if User.objects.filter(username=self.request.user.username, groups=(2, )):
                return IsAuthenticated(),

            return IsAdminUser(),


class SessionView(generics.RetrieveUpdateDestroyAPIView):

    def get_queryset(self):
        return Session.objects.all()

    def get_serializer_class(self):
        return SessionSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return AllowAny(),

        elif self.request.method in ('PUT', 'DELETE', ):
            if User.objects.filter(username=self.request.user.username, groups=(2, )):
                return IsAuthenticated(),

            return IsAdminUser(),
