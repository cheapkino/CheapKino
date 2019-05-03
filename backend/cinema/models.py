from django.db import models

from movie.models import Movie


class City(models.Model):
    name = models.CharField(max_length=99)

    class Meta:
        verbose_name = 'City'
        verbose_name_plural = 'Cities'

    def __str__(self):
        return self.name


class Cinema(models.Model):
    name = models.CharField(max_length=99)
    address = models.CharField(max_length=99)
    city = models.ForeignKey(City, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Hall(models.Model):
    name = models.CharField(max_length=99)
    cinema = models.ForeignKey(Cinema, on_delete=models.CASCADE, related_name='halls')
    width = models.IntegerField()
    length = models.IntegerField()

    def __str__(self):
        return '{} ({})'.format(self.name, self.cinema)


class Row(models.Model):
    number = models.IntegerField()
    hall = models.ForeignKey(Hall, on_delete=models.CASCADE, related_name='rows')

    def __str__(self):
        return str(self.number)


class Seat(models.Model):
    number = models.IntegerField()
    row = models.ForeignKey(Row, on_delete=models.CASCADE, related_name='seats')

    def __str__(self):
        return str(self.number)
