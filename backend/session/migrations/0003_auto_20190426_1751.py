# Generated by Django 2.2 on 2019-04-26 17:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('session', '0002_row_seat_seatreserve'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='seatreserve',
            options={'verbose_name': 'Seat (reserved)', 'verbose_name_plural': 'Seats (reserved)'},
        ),
    ]
