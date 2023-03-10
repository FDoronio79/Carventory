# Generated by Django 4.0.3 on 2022-09-12 22:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AutoMobileVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vin', models.CharField(max_length=17)),
            ],
        ),
        migrations.CreateModel(
            name='Technician',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('employee_number', models.SmallIntegerField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vin', models.CharField(max_length=17)),
                ('customer_name', models.CharField(max_length=200)),
                ('date_time', models.DateTimeField(blank=True, null=True)),
                ('reason', models.TextField(blank=True, null=True)),
                ('complete', models.BooleanField(default=False, null=True)),
                ('vip_status', models.BooleanField(default=False, null=True)),
                ('technician', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='technician', to='service_rest.technician')),
            ],
        ),
    ]
