from django.db import models

from django.contrib.auth.models import User


class Genre(models.Model):
    name = models.CharField(null=False)


class Movie(models.Model):
    poster = models.CharField(null=False)
    title = models.CharField(null=False)
    description = models.CharField(null=False)
    premiere = models.DateField(null=True)
    duration = models.IntegerField(null=False)
    rating = models.DecimalField(null=True, decimal_places=2)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)


class Review(models.Model):
    post_date = models.DateTimeField(null=True)
    text = models.CharField(null=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)