from django.db import models

class AutoMobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True, null=True, blank=True)
    vin = models.CharField(max_length=17)

class Technician(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    employee_number = models.SmallIntegerField(null=True, blank=True)

class Appointment(models.Model):
    vin = models.CharField(max_length=17)
    customer_name = models.CharField(max_length=200)
    date_time = models.DateTimeField(null=True, blank=True)
    reason = models.TextField(null=True, blank=True)
    status = models.BooleanField(default=False, null=True, blank=True)
    vip_status = models.BooleanField(default=False, null=True, blank=True)
    technician = models.ForeignKey(
        Technician,
        related_name="technician",
        on_delete=models.CASCADE
    )

