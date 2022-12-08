# CarCar

Team:

* Jessica Lora - Sales microservice and Inventory bullet points 4-6
* Filamer Doronio - Service microservice  and Inventory bullet points 1-3


## Design
The CarCar website/project is set up with three domains interacting with each other, these domains are:
  - Inventory
  - Services
  - Sales

## Inventory

The Inventory domain maintains the inventory of CarCar. The backend portion contains 3 models which use ForeignKeys to interact with one another. These models are **Manufacturer**, **VehicleModel**, and **Automobile**.

The **Manufacturer** model has the following attribute:
  - Name

The **VehicleModel** model has the following attributes:
  - Name
  - Picture URL (This will display a picture of the vehicle model on the front-end)
  - Manufacturer (This relates back to the Manufacturer model)

The **Automobile** Model has the following attributes:
  - Color
  - Year
  - Vin (This is used by the Service and Sales microservices to poll for VINs in the current inventory)
  -  Model (This relates back to the VehicleModel model)

On the front-end a user is able to create manufacturers, vehicle models, and automobiles. Users are also able to view the list of current manufacturers, vehicle models, and automobiles that is provided by CarCar.

## Service microservice

The **Service microservice** backend utilizes 3 django models. The models being **AutoMobileVO**, **Technician**, and **Appointment**. The AutoMoibleVO model polls from the Inventory bounded context specifically from the Automobile model in Inventory to poll for a VIN.

A customer who has an appointment with a VIN that matches one in the Inventory database will be assigned VIP status which will indicate to provide the appointment with "VIP treatment".

A user is able to cancel an appointment which in turn deletes the appointment or mark the status as finished which will remove the appointment from the active **Service Appointment List** and add it to the VIN's **Service History**.

On the **Service History Page** a user is able to look up a specific VIN number and view all the previous appointments that were completed for that specific VIN.

Please view the picture below for more details:
![Diagram](/ghi/app/public/Service_Microservice_Planning.png)

### Screenshots of Services Website
List of Appointments:
![Create Appointment](/ghi/app/public/List_Appointments.png)

Create Appointments:
![Create Appointment](/ghi/app/public/Create_Appointment.png)

Service History:
![Create Appointment](/ghi/app/public/Service_History.png)


## Sales microservice

Explain your models and integration with the inventory
microservice, here.