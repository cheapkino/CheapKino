from rest_framework import generics

from movie.models import Review
from movie.serializers import ReviewSerializer


class ReviewsView(generics.ListCreateAPIView):

    def get_queryset(self):
        return Review.objects.all()

    def get_serializer_class(self):
        return ReviewSerializer

