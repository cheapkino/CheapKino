from django.contrib import admin
from cinema.models import City


@admin.register(City)
class CityAdmin(admin.ModelAdmin):

    list_display = ('id', 'name')
