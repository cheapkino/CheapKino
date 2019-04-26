from rest_framework import serializers

from movie.models import Movie, Review

from user.serializers import UserSerializer


class MovieSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True)

    class Meta:
        model = Review
        fields = ('id', 'post_date', 'text', 'movie', 'owner', )

