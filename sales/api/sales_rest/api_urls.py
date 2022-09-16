from django.urls import path
from .views import api_list_salesPersons, api_list_customers, api_list_salesRecords, api_list_automobileVINS, api_show_employeeSalesRecord

urlpatterns = [
    path("salespersons/", api_list_salesPersons, name="api_list_salesPersons"),
    path("customers/", api_list_customers, name="api_list_customers"),
    path("salesrecords/", api_list_salesRecords, name="api_list_salesrecords"),
    path("availablevins/", api_list_automobileVINS, name="api_list_automobileVINS"),
    path("salesrecord/<int:pk>/", api_show_employeeSalesRecord, name="show_employeeSalesRecord")
]