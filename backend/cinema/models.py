from django.db import models

from movie.models import Movie


class City(models.Model):
    name = models.CharField(max_length=99, null=False)

    class Meta:
        verbose_name = 'City'
        verbose_name_plural = 'Cities'

    def __str__(self):
        return self.name


class Cinema(models.Model):
    name = models.CharField(max_length=99, null=False)
    address = models.CharField(max_length=99, null=False)
    city = models.ForeignKey(City, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Hall(models.Model):
    name = models.CharField(max_length=99, null=False)
    cinema = models.ForeignKey(Cinema, on_delete=models.CASCADE, related_name='halls')
    width = models.IntegerField(max_length=99, null=False, default=5)
    length = models.IntegerField(max_length=99, null=False, default=4)

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
