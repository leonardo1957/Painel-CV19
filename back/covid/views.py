import requests
from rest_framework.views import APIView
from .service import CovidService
from rest_framework import serializers, status
from rest_framework.response import Response
from .serializer import CovidSerializer

SERVICE = CovidService()

class CovidView(APIView):
    def post(self, request):
        serializer = CovidSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    def get(self, request):
        data = SERVICE.get_all_by_date(request.query_params.get('date'))
        serializers = CovidSerializer(data, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)