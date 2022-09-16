from django.contrib import admin
from .models import AutoMobileVO, Technician, Appointment

@admin.register(AutoMobileVO)
class AutomobileVOAdmin(admin.ModelAdmin):
    pass

@admin.register(Technician)
class TechnicianAdmin(admin.ModelAdmin):
    pass

@admin.register(Appointment)
class AppointmentsAdmin(admin.ModelAdmin):
    pass