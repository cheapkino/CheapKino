# Generated by Django 2.2 on 2019-04-27 11:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cinema', '0004_row_seat'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hall',
            name='cinema',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='halls', to='cinema.Cinema'),
        ),
    ]
