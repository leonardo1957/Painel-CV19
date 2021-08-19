from django.db import models

import uuid
from django_extensions.db.models import TimeStampedModel

class CovidModel(TimeStampedModel):
    id = models.UUIDField(db_column='ID',
                          primary_key=True,
                          default=uuid.uuid4,
                          editable=False,
                          unique=True)

    city = models.CharField(
        db_column="CITY",
        max_length=50,
        null=False,
        blank=False)

    date = models.DateField(
        db_column="DATE",
    )

    state = models.CharField(
        db_column="STATE",
        max_length=3,
        null=False,
        blank=False)

    estimated_population = models.IntegerField(
        db_column="ESTIMATED_POPULATION",
        null=False,
        blank=False)

    last_available_confirmed = models.IntegerField(
        db_column="LAST_AVAILABLE_CONFIRMED",
        null=False,
        blank=False)

    new_deaths = models.IntegerField(
        db_column="NEW_DEATHS",
        null=False,
        blank=False)

    new_confirmed = models.IntegerField(
        db_column="NEW_CONFIRMED",
        null=False,
        blank=False)

    last_available_deaths = models.IntegerField(
        db_column="LAST_AVAILABLE_DEATHS",
        null=False,
        blank=False)

    last_available_death_rate = models.FloatField(
        db_column="LAST_AVAILABLE_DEATH_RATE",
        null=False,
        blank=False)
