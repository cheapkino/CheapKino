from rest_framework import serializers

from movie.models import Movie, Review


class MovieSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = ('post_date', 'text', 'movie',)

    def create(self, validated_data):
        user =

