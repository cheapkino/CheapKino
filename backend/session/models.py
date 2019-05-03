from django.contrib.auth.models import User
from django.db import models

from cinema.models import Cinema, Movie, Hall, Seat


class Session(models.Model):
    date = models.DateTimeField()
    price = models.IntegerField()
    price_student = models.IntegerField(default=price)
    price_child = models.IntegerField(default=price)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name='sessions')
    hall = models.ForeignKey(Hall, on_delete=models.CASCADE, related_name='sessions')

    def __str__(self):
        return '{} at {} on {}'.format(self.movie, self.hall, self.date)


class SeatReserve(models.Model):
    seat = models.ForeignKey(Seat, on_delete=models.CASCADE, related_name='reserved')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='seats', null=True, default=None)
    session = models.ForeignKey(Session, on_delete=models.CASCADE, related_name='seats')

    class Meta:
        verbose_name = 'Seat (reserved)'
        verbose_name_plural = 'Seats (reserved)'

    def __str__(self):
        if self.user:
            return '{} seat for {}'.format(self.seat, self.user)

        else:
            return 'empty seat {}'.format(self.seat)

