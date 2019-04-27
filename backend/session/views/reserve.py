from rest_framework import generics

from session.models import SeatReserve
from session.serializers import ReserveSerializer


class ReservesView(generics.ListAPIView):

    def get_queryset(self):
        return SeatReserve.objects.all()

    def get_serializer_class(self):
        return ReserveSerializer


class ReserveView(generics.UpdateAPIView):

    def get_queryset(self):
        return SeatReserve.objects.all()

    def get_serializer_class(self):
        return ReserveSerializer

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)

