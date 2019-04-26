from django.db import models

from movie.models import Movie


class City(models.Model):
    name = models.CharField(max_length=99, null=False)

    class Meta:
        verbose_name = 'City'
        verbose_name_plural = 'Cities'


class Cinema(models.Model):
    name = models.CharField(max_length=99, null=False)
    address = models.CharField(max_length=99, null=False)
    city = models.ForeignKey(City, on_delete=models.CASCADE)


class Hall(models.Model):
    name = models.CharField(max_length=99, null=False)
    cinema = models.ForeignKey(Cinema, on_delete=models.CASCADE)


class Session(models.Model):
    # list of statuses for status field
    STATUSES = (('P', 'PAST'), ('C', 'CURRENT'), ('F', 'FUTURE'), ('C', 'CANCEL'))

    session_date = models.DateTimeField(null=False)
    price = models.IntegerField(null=False)
    price_student = models.IntegerField(null=True)
    price_child = models.IntegerField(null=True)
    status = models.CharField(max_length=7, choices=STATUSES, default='FUTURE', null=False)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    cinema = models.ForeignKey(Cinema, on_delete=models.CASCADE)
