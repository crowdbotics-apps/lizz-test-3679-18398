# Generated by Django 2.2.13 on 2020-06-24 20:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_event_location'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='title',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
    ]