from django.db import models  

# Create your models here.

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=200)


class SalesPerson(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    employeeNumber = models.IntegerField(null=True, blank=True)

class Customer(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    phoneNumber = models.CharField(max_length=200, null=True, blank=True)
    

class SalesRecord(models.Model):
    salesPerson = models.ForeignKey(SalesPerson, related_name="salesPerson", on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, related_name="customer", on_delete=models.CASCADE)
    vin = models.ForeignKey(AutomobileVO, related_name="automobilevin", on_delete=models.CASCADE)
    price = models.IntegerField(null=True, blank=True)
