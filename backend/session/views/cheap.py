from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from session.models import Session

import math


class Cheap(APIView):

    def get(self, request, pk):
        session = get_object_or_404(Session, id=pk)

        # count places in hall
        current_seats = session.seats.filter(user__isnull=False).count()
        all_seats = session.seats.all().count()

        print('--- prices: {} {} {}'.format(session.price, session.price_student, session.price_child))
        print('--- places: {}, {}'.format(current_seats, all_seats))
        print('--- rating: {}'.format(session.movie.rating))

        # count lowed price
        price = self.compute(session.price, session.movie.rating, current_seats, all_seats)
        price_student = self.compute(session.price_student, session.movie.rating, current_seats, all_seats)
        price_child = self.compute(session.price_child, session.movie.rating, current_seats, all_seats)

        print('--- lowed prices: {} {} {}'.format(price, price_student, price_child))

        lowed_prices = {
            'price': price,
            'price_student': price_student,
            'price_child': price_child
        }

        return Response(lowed_prices, status=status.HTTP_200_OK)

    # MAIN formula for computing lowed price (ceil to nearest decimal)
    def compute(self, price, rating, current_seats, all_seats):
        init = price * (1 - (1 - rating/10) * current_seats / all_seats)

        return 10 * math.ceil(init / 10)
