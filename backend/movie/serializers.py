from rest_framework import serializers

from movie.models import Movie, Review, Genre

from user.serializers import UserSerializer


class GenreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = ('id', 'name', )


class MovieSerializer(serializers.ModelSerializer):
    genre = GenreSerializer(read_only=True)
    genre_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Movie
        fields = ('poster', 'title', 'description', 'premiere', 'duration', 'rating', 'genre', 'genre_id',)

    def create(self, validated_data):
        # popping id from json
        genre_id = validated_data.pop('genre_id')
        genre = Genre.objects.get(id=genre_id)

        # creating object
        movie = Movie.objects.create(genre=genre, **validated_data)

        return movie


class ReviewSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True)

    class Meta:
        model = Review
        fields = ('id', 'post_date', 'text', 'movie', 'owner', )

