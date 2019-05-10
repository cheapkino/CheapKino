from rest_framework import generics
from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly

from movie.models import Review
from movie.serializers import ReviewSerializer


class ReviewsView(generics.ListCreateAPIView):
    permission_classes = (DjangoModelPermissionsOrAnonReadOnly, )

    def get_queryset(self):
        return Review.objects.all()

    def get_serializer_class(self):
        return ReviewSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ReviewView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (DjangoModelPermissionsOrAnonReadOnly, )

    def get_queryset(self):
        return Review.objects.all()

    def get_serializer_class(self):
        return ReviewSerializer
