# CarCar

Team:

* Jessica Lora - Sales microservice and Inventory bullet points 4-6
* Filamer Doronio - Service microservice  and Inventory bullet points 1-3


## Design

## Service microservice

The **Service microservice** backend utilizes 3 django models. The models being **AutoMobileVO**, **Technician**, and **Appointment**. The AutoMoibleVO model polls from the Inventory bounded context specifically from the Automobile model in Inventory to poll for a VIN.

A customer who has an appointment with a VIN that matches one in the Inventory database will be assigned VIP status which will indicate to provide the appointment with "VIP treatment".

A user is able to cancel an appointment which in turn deletes the appointment or mark the status as finished which will remove the appointment from the active **Service Appointment List** and add it to the VIN's **Service History**.

On the **Service History Page** a user is able to look up a specific VIN number and view all the previous appointments that were completed for that specific VIN.

Please view the picture below for more details:
![Semantic description of image](/ghi/app/public/Service_Microservice_Planning.png)

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
