from django.contrib.auth.models import User
from rest_framework import serializers

from session.models import Session, SeatReserve
from movie.serializers import MovieSerializer
from cinema.serializers import HallSerializer, SeatSerializer
from movie.models import Movie
from cinema.models import Hall
from user.serializers import UserSerializer


class SessionSerializer(serializers.ModelSerializer):
    movie = MovieSerializer(read_only=True)
    hall = HallSerializer(read_only=True)
    movie_id = serializers.IntegerField(write_only=True)
    hall_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Session
        fields = '__all__'

    def create(self, validated_data):
        # pop and search movie
        movie_id = validated_data.pop('movie_id')
        movie = Movie.objects.get(id=movie_id)

        # pop and search cinema
        hall_id = validated_data.pop('hall_id')
        hall = Hall.objects.get(id=hall_id)

        session = Session.objects.create(movie=movie, hall=hall, **validated_data)

        for row in session.hall.rows.all():
            for seat in row.seats.all():
                reserve = SeatReserve.objects.create(seat=seat, session=session)
                reserve.save()

                # print(str(reserve) + ' created!')

        return session


class ReserveSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = SeatReserve
        fields = '__all__'

