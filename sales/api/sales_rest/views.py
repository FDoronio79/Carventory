from django.shortcuts import render
from django.http import JsonResponse
from common.json import ModelEncoder
from .models import AutomobileVO, SalesPerson, Customer, SalesRecord

from django.views.decorators.http import require_http_methods
import json



class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["id", "vin"]


class SalesPersonDetailEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["name", "employeeNumber"]


class CustomerDetailEncoder(ModelEncoder):
    model = Customer
    properties = ["name", "address", "phoneNumber"]


class SalesRecordDetailEncoder(ModelEncoder):
    model = SalesRecord
    properties = ["id", "price", "vin", "salesPerson", "customer"]
    encoders = {
        "salesPerson": SalesPersonDetailEncoder(),
        "customer": CustomerDetailEncoder(),
        "vin": AutomobileVODetailEncoder()
    }


#Create a Sales Person
@require_http_methods(["GET", "POST"])
def api_list_salesPersons(request):
    if request.method == "GET":
        salesPersons = SalesPerson.objects.all()
        return JsonResponse(
            {"salesPersons": salesPersons},
            encoder=SalesPersonDetailEncoder,
        )
    else: #POST
        try:
            content = json.loads(request.body)
        except:
            response = JsonResponse(
                {"message": "Error, could not create sales person"},
                status=400,
            )
            return response
        salesPerson = SalesPerson.objects.create(**content)
        return JsonResponse(
            salesPerson, encoder=SalesPersonDetailEncoder, safe=False,
        )



#Create a Customer
@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerDetailEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
        except:
            response = JsonResponse(
                {"message": "Error, could not create customer"},
                status=400,
            )
            return response
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer, encoder=CustomerDetailEncoder, safe=False,
        )


#Create Sales Record
@require_http_methods(["GET", "POST"])
def api_list_salesRecords(request):
    if request.method == "GET":
        salesRecords = SalesRecord.objects.all()
        return JsonResponse(
            {"salesRecords": salesRecords},
            encoder=SalesRecordDetailEncoder
        )
    else:
        content = json.loads(request.body)
        try:
            salesPerson_number = content["salesPerson"]
            salesPerson = SalesPerson.objects.get(employeeNumber=salesPerson_number)
            content["salesPerson"] = salesPerson
        except SalesPerson.DoesNotExist:
            response = JsonResponse(
                {"message": "SalesPerson does not exist"}
            )
            return response
        try:
            customer_name = content["customer"]
            customer = Customer.objects.get(name=customer_name)
            content["customer"] = customer
        except Customer.DoesNotExist:
            response = JsonResponse(
                {"message": "Customer does not exist"}
            )
            return response
        try:
            vin_id = content["vin"]
            vin = AutomobileVO.objects.get(vin=vin_id)
            content["vin"] = vin
        except AutomobileVO.DoesNotExist:
            response = JsonResponse(
                {"message": "AutomobileVO does not exist"}
            )
            return response
        print(f"content : {content}")
        
        salesRecord = SalesRecord.objects.create(**content)
        return JsonResponse(
            salesRecord, encoder=SalesRecordDetailEncoder, safe=False,
        )


#Gets only unsold automobile vins
@require_http_methods(["GET"])
def api_list_automobileVINS (request):
    if request.method == "GET":
        availableVins = []
        salesRecordVin = []
        vins = AutomobileVO.objects.all()
        for vin in vins:
            salesRecords = SalesRecord.objects.filter(vin=vin)
            for record in salesRecords:
                salesRecordVin.append(record.vin)
        for vin in vins:
            if vin not in salesRecordVin:
                availableVins.append(vin)
    return JsonResponse(
            {"availbleVins": availableVins},
            encoder=AutomobileVODetailEncoder, safe=False,
        )



#Get only sales Record for specific Sales Person
@require_http_methods(["GET"])
def api_show_employeeSalesRecord(request, pk):
    if request.method == "GET":
        salesPerson = SalesPerson.objects.get(employeeNumber=pk)
        salesRecord = SalesRecord.objects.filter(salesPerson=salesPerson)
        return JsonResponse(
            {"salesRecords":salesRecord}, encoder=SalesRecordDetailEncoder, safe=False,
        )

