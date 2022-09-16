from django.urls import path
from .views import (
    api_detail_appointments, 
    api_list_appointments, 
    api_list_technicians, 
    api_show_technician, 
    api_vin_detail,
    )

urlpatterns = [
    path(
        "appointments/", 
        api_list_appointments, 
        name="api_list_appointments"),
    path("appointments/<int:pk>/", api_detail_appointments, name="api_detail_appointments"),
    path("appointments/<str:pk>/", api_vin_detail, name="api_vin"),
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path("technicians/<int:pk>/", api_show_technician, name="api_technician_detail"),
    
]