from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated

from movie.models import Review
from movie.serializers import ReviewSerializer
from movie.permissions import IsOwner


class ReviewsView(generics.ListCreateAPIView):

    def get_queryset(self):
        return Review.objects.filter(movie=self.kwargs['pk'])

    def get_serializer_class(self):
        return ReviewSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_permissions(self):
        if self.request.method == 'GET':
            return AllowAny(),

        elif self.request.method == 'POST':
            if User.objects.filter(username=self.request.user.username, groups=(1, )):
                return IsAuthenticated(),

            return IsAdminUser(),


class ReviewView(generics.RetrieveUpdateDestroyAPIView):

    def get_queryset(self):
        return Review.objects.filter(id=self.kwargs['pk'], movie=self.kwargs['pk2'])

    def get_serializer_class(self):
        return ReviewSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return AllowAny(),

        elif self.request.method in ('PUT', 'DELETE', ):
            if User.objects.filter(username=self.request.user.username, groups=(1,)):
                return IsAuthenticated(), IsOwner(),

            return IsAdminUser(),
