# Generated by Django 2.2 on 2019-04-27 11:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cinema', '0003_delete_session'),
    ]

    operations = [
        migrations.CreateModel(
            name='Row',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.IntegerField()),
                ('hall', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='rows', to='cinema.Hall')),
            ],
        ),
        migrations.CreateModel(
            name='Seat',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.IntegerField()),
                ('row', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='seats', to='cinema.Row')),
            ],
        ),
    ]