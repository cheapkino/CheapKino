from django.contrib import admin
from cinema.models import City, Cinema, Hall

# admin.site.unregister(City)


@admin.register(City)
class CityAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', )


@admin.register(Cinema)
class CinemaAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'address', 'city', )


@admin.register(Hall)
class HallAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'cinema', )
