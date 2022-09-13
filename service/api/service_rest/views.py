from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.shortcuts import render
import json

from common.json import ModelEncoder

from .models import AutoMobileVO, Technician, Appointment


class AutoMobileVOEncoder(ModelEncoder):
    model = AutoMobileVO
    properties = ["vin"]


class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "name",
        "employee_number"
    ]


class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "vin",
        "customer_name",
        "date_time",
        "reason",
        "status",
        "vip_status"
    ]

    def get_extra_data(self, o):
        return {
            "name": o.technician.name,
            "employee_number": o.technician.employee_number,
        }


class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "vin",
        "customer_name",
        "date_time",
        "reason",
        "status",
        "vip_status"
    ]
    encoders = {
        "technician": TechnicianDetailEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()

        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            technician_id = content["technician"]
            technician = Technician.objects.get(id=technician_id)
            content["technician"] = technician

            try:
                automobile = AutoMobileVO.objects.get(vin=content["vin"])
                if automobile:
                    content["vip_status"] = True
            except AutoMobileVO.DoesNotExist:
                    content["vip_status"] = False
        except Technician.DoesNotExist:
            response = JsonResponse(
                {"message": "FUCKKKKKKK MANNNNN"},
                status=400,
            )
            return response
        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianDetailEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
        except:
            response = JsonResponse(
                {"message": "Error creating technician"},
                status=400,
            )
            return response
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianDetailEncoder,
            safe=False,
        )


@require_http_methods(["DELETE", "GET"])
def api_show_technician(request, pk):
    if request.method == "GET":
        hat = Technician.objects.get(id=pk)
        return JsonResponse(
            hat,
            encoder=TechnicianDetailEncoder,
            safe=False,
        )

    else:
        count, _ = Technician.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
