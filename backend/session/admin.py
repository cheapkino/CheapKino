from django.contrib import admin

from .models import Session, SeatReserve


@admin.register(Session)
class SessionAdmin(admin.ModelAdmin):
    list_display = ('id', 'date', 'price', 'movie', 'hall', )


@admin.register(SeatReserve)
class RowAdmin(admin.ModelAdmin):
    list_display = ('id', 'seat', 'user', 'session', )
