from django.db import models

from django.contrib.auth.models import User


class Genre(models.Model):
    name = models.CharField(max_length=99, null=False)


class Movie(models.Model):
    poster = models.CharField(max_length=99, null=False)
    title = models.CharField(max_length=99, null=False)
    description = models.CharField(max_length=255, null=False)
    premiere = models.DateField(null=True)
    duration = models.IntegerField(null=False)
    rating = models.DecimalField(null=True, max_digits=4, decimal_places=2)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)


class ReviewManager(models.Manager):
    def for_user(self, user):
        return self.filter(owner=user)


class Review(models.Model):
    post_date = models.DateTimeField(null=True)
    text = models.CharField(max_length=999, null=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)

    objects = ReviewManager()

