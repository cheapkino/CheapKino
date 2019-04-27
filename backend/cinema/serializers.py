from rest_framework import serializers

from cinema.models import Cinema, Hall, Row, Seat


class CinemaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cinema
        fields = '__all__'


class HallSerializer(serializers.ModelSerializer):
    cinema = CinemaSerializer(read_only=True)
    cinema_id = serializers.IntegerField(write_only=True)
    width = serializers.IntegerField(write_only=True)
    length = serializers.IntegerField(write_only=True)

    class Meta:
        model = Hall
        fields = ('id', 'name', 'cinema', 'width', 'length', 'cinema_id', )

    def create(self, validated_data):
        # pop and search for cinema
        cinema_id = validated_data.pop('cinema_id')
        cinema = Cinema.objects.get(id=cinema_id)

        hall = Hall.objects.create(cinema=cinema, **validated_data)

        # pop and creating seats
        length, width = validated_data.pop('length'), validated_data.pop('width')
        if length and width:

            for i in range(width):
                row = Row.objects.create(number=i+1, hall=hall)
                print('row ' + str(row) + ' created!')

                for j in range(length):
                    seat = Seat.objects.create(number=j+1, row=row)
                    print('seat ' + str(seat) + ' created!')

                    seat.save()

                row.save()

        hall.save()

        return hall
