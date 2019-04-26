from django.contrib.auth.models import User
from django.db import models

from cinema.models import Cinema, Movie, Hall


class Session(models.Model):
    # list of statuses for status field
    STATUSES = (('P', 'PAST'),
                ('C', 'CURRENT'),
                ('F', 'FUTURE'),
                ('C', 'CANCEL'))

    date = models.DateTimeField(null=False)
    price = models.IntegerField(null=False)
    price_student = models.IntegerField(null=True)
    price_child = models.IntegerField(null=True)
    status = models.CharField(max_length=7, choices=STATUSES, default='FUTURE', null=False)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    cinema = models.ForeignKey(Cinema, on_delete=models.CASCADE)

    def __str__(self):
        return '{} at {} on {}'.format(self.movie, self.cinema, self.date)


class Row(models.Model):
    number = models.IntegerField()
    hall = models.ForeignKey(Hall, on_delete=models.CASCADE)

    def __str__(self):
        return self.number


class Seat(models.Model):
    number = models.IntegerField()
    row = models.ForeignKey(Row, on_delete=models.CASCADE)

    def __str__(self):
        return self.number


class SeatReserve(models.Model):
    seat = models.ForeignKey(Seat, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    session = models.ForeignKey(Session, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Seat (reserved)'
        verbose_name_plural = 'Seats (reserved)'

    def __str__(self):
        return '{} {}'.format(self.seat, self.user)
