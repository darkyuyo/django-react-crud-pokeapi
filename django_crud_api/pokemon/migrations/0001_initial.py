# Generated by Django 5.1.5 on 2025-01-23 17:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pokemon',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('numero', models.IntegerField()),
                ('tipo1', models.CharField(max_length=50)),
                ('tipo2', models.CharField(blank=True, max_length=50)),
            ],
        ),
    ]
