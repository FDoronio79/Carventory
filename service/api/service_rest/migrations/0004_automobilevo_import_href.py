# Generated by Django 4.0.3 on 2022-09-13 20:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0003_alter_appointment_status_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='automobilevo',
            name='import_href',
            field=models.CharField(blank=True, max_length=200, null=True, unique=True),
        ),
    ]