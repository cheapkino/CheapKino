from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from session.models import Session

import math


class Cheap(APIView):
    price = 0
    price_student = 0
    price_child = 0

    def get(self, request, pk):
        session = get_object_or_404(Session, id=pk)

        # count places in hall
        current_seats = session.seats.filter(user__isnull=False).count()
        all_seats = session.seats.all().count()

        # count lowed price
        self.compute(session.price, session.price_student, session.price_child,
                     current_seats, all_seats, session.movie.rating)

        lowed_prices = {
            'price': self.price,
            'price_student': self.price_student,
            'price_child': self.price_child
        }

        return Response(lowed_prices, status=status.HTTP_200_OK)

    def compute(self, price, price_student, price_child, current_seats, all_seats, rating):
        # print initial values
        self.print(price, price_student, price_child,
                   current_seats, all_seats, rating)

        self.price = self._compute(price, rating, current_seats, all_seats)
        self.price_student = self._compute(price_student, rating, current_seats, all_seats)
        self.price_child = self._compute(price_child, rating, current_seats, all_seats)

        # print lowed prices
        print(self)

    # MAIN formula for computing lowed price (ceil to nearest decimal)
    def _compute(self, price, rating, current_seats, all_seats):
        init = price * (1 - (1 - rating/10) * current_seats / all_seats)

        return 10 * math.ceil(init / 10)

    def print(self, price, price_student, price_child, current_seats, all_seats, rating):
        print('--- prices: {} {} {}'.format(price, price_student, price_child))
        print('--- places: {}, {}'.format(current_seats, all_seats))
        print('--- rating: {}'.format(rating))

    def __str__(self):
        return '--- lowed prices: {} {} {}'.format(self.price, self.price_student, self.price_child)
