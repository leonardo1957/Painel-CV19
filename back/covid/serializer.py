from rest_framework import serializers
from .models import CovidModel

class CovidSerializer(serializers.ModelSerializer):

    class Meta:
        model = CovidModel
        exclude = ('id', )