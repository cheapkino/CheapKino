# Generated by Django 2.2 on 2019-05-03 11:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cinema', '0009_auto_20190503_1112'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hall',
            name='length',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='hall',
            name='width',
            field=models.IntegerField(),
        ),
    ]
