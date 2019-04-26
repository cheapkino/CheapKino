from django.contrib import admin

from .models import Session, Row, Seat, SeatReserve


@admin.register(Session)
class SessionAdmin(admin.ModelAdmin):
    list_display = ('id', 'date', 'price', 'status', 'movie', 'cinema', )


@admin.register(Row)
class RowAdmin(admin.ModelAdmin):
    list_display = ('id', 'number', 'hall', )


@admin.register(Seat)
class RowAdmin(admin.ModelAdmin):
    list_display = ('id', 'number', 'row', )


@admin.register(SeatReserve)
class RowAdmin(admin.ModelAdmin):
    list_display = ('id', 'seat', 'user', 'session', )
