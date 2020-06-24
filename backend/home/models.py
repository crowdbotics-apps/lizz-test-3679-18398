from django.conf import settings
from django.db import models

# Create your models here.

from django.db import models


class CustomText(models.Model):
    title = models.CharField(max_length=150,)

    def __str__(self):
        return self.title

    @property
    def api(self):
        return f"/api/v1/customtext/{self.id}/"

    @property
    def field(self):
        return "title"


class HomePage(models.Model):
    body = models.TextField()

    @property
    def api(self):
        return f"/api/v1/homepage/{self.id}/"

    @property
    def field(self):
        return "body"


class Location(models.Model):
    "Generated Model"
    roomName = models.TextField()
    roomNumber = models.IntegerField()
    floorNumber = models.IntegerField()


class Event(models.Model):
    "Generated Model"
    dateTime = models.DateTimeField()
    description = models.TextField(null=True, blank=True,)
    location = models.ForeignKey(
        "home.Location",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="event_location",
    )
    title = models.CharField(max_length=256, null=True, blank=True,)
