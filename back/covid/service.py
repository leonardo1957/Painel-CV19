import requests
from .models import CovidModel


HEADER = {"Authorization": "Token c9d23b109021e3a78170b8d02e5014a21bb7a571",}

class CovidService():
    def get_all_by_date(self, date):
        return CovidModel.objects.filter(date=date)
