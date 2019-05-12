from rest_framework import generics
from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly, IsAuthenticated

from movie.models import Review
from movie.serializers import ReviewSerializer
from movie.permissions import IsOwner


class ReviewsView(generics.ListCreateAPIView):
    permission_classes = (DjangoModelPermissionsOrAnonReadOnly, )

    def get_queryset(self):
        return Review.objects.all()

    def get_serializer_class(self):
        return ReviewSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ReviewView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = ()

    def get_queryset(self):
        return Review.objects.all()

    def get_serializer_class(self):
        return ReviewSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return ()

        elif self.request.method in ('PUT', 'PATCH', 'DELETE'):
            return IsAuthenticated(), IsOwner(),
