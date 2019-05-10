from django.db import models

from django.contrib.auth.models import User


class Genre(models.Model):
    name = models.CharField(max_length=99)

    def __str__(self):
        return self.name


class Movie(models.Model):
    poster = models.CharField(max_length=999)
    title = models.CharField(max_length=99)
    description = models.CharField(max_length=999)
    premiere = models.DateField(null=True)
    duration = models.IntegerField(null=True)
    rating = models.DecimalField(max_digits=4, decimal_places=2, default=0)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)

    def __str__(self):
        return '{} ({} {} out of 10)'.format(self.title, self.genre, self.rating)


class ReviewManager(models.Manager):
    def for_user(self, user):
        return self.filter(owner=user)


class Review(models.Model):
    post_date = models.DateTimeField()
    text = models.CharField(max_length=999)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)

    objects = ReviewManager()

    def __str__(self):
        return '{} about {} at {}'.format(self.owner, self.movie, self.post_date)


