from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from session.models import Session


@api_view(['GET'])
def get_data(request, pk):
    session = Session.objects.get(id=pk)

    number = sum([1 for seat in session.seats.all() if seat.user])

    res = {
        'rating': session.movie.rating,
        'current_places': number,
        'all_places': len(session.seats.all()),
        'price': session.price,
        'price_student': session.price_student,
        'price_child': session.price_child
    }

    return Response(res, status=status.HTTP_200_OK)

