from rest_framework import generics

from session.models import Session
from session.serializers import SessionSerializer


class SessionsView(generics.ListCreateAPIView):

    def get_queryset(self):
        return Session.objects.all()

    def get_serializer_class(self):
        return SessionSerializer


class SessionView(generics.RetrieveUpdateDestroyAPIView):

    def get_queryset(self):
        return Session.objects.all()

    def get_serializer_class(self):
        return SessionSerializer
