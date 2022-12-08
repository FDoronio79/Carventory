# Carventory

Team:

* Jessica Lora - Sales microservice and Inventory bullet points 4-6
* Filamer Doronio - Service microservice  and Inventory bullet points 1-3


## Design
The CarCar website/project is set up with three domains interacting with each other, these domains are:
  - Inventory
  - Services
  - Sales


## Set Up

- [ ] Fork this repository
- [ ] Clone forked repository onto local computer: `git clone`
- [ ] Run these 3 commands on local computer to run the project on Docker:
  - [ ] `docker volume create beta-data`
  - [ ] `docker-compose build`
  - [ ] `docker-compose up`
----------------------------
**Check that all Docker containers are running:**
![Docker Container](/ghi/app/public/Docker.png)

----------------------------
**To view project in web browser:**
http://localhost:3000/
![Carventory](/ghi/app/src/images/Carventory.gif)

----------------------------
==**Preventing errors when creating data:**==

-An error occurs if you have two Sales Persons or Customers with the same name.

-An error occurs for any numerical IDs if you type a really long number. Try only four digits.

----------------------------
**To test APIs on API client (Insomnia)**

Manufacturer information
| Actions      | Method | URL  | Required JSON |
| :---        | :----       | :---          |  :---     |
| List manufacturers    | GET      | http://localhost:8100/api/manufacturers/  |       |
| Create a manufacturer   | POST        | http://localhost:8100/api/manufacturers/     | `{"name": "Chrysler"}`     |
| Get a specific manufacturer    | GET       | http://localhost:8100/api/manufacturers/:id/  |       |
| Update a specific manufacturer   | PUT        | http://localhost:8100/api/manufacturers/:id/     |   `{"name": "Chrysler"}`    |
| Delete a specific manufacturer   | DELETE       | http://localhost:8100/api/manufacturers/:id/ |       |
---------------
Vehicle model information
| Actions      | Method | URL  | Required JSON |
| :---        | :----       | :---          |  :---     |
| List vehicle models | GET      | http://localhost:8100/api/models/ |       |
| Create a vehicle model  | POST        | http://localhost:8100/api/models/     | `{"name": "Sebring", "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg320px-Chrysler_Sebring_front_20090302.jpg", "manufacturer_id": 1}`     |
| Get a specific vehicle model    | GET       | http://localhost:8100/api/models/:id/ |       |
| Update a specific vehicle model  | PUT        | http://localhost:8100/api/models/:id/    |   `{"name": "Sebring", "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302jpg320px-Chrysler_Sebring_front_20090302.jpg"}`    |
| Delete a specific vehicle model   | DELETE       | http://localhost:8100/api/models/:id/|       |
---------------
Automobile information
| Actions      | Method | URL  | Required JSON |
| :---        | :----       | :---          |  :---     |
| List automobiles | GET      | http://localhost:8100/api/automobiles/ |       |
| Create an automobile | POST        | http://localhost:8100/api/automobiles/  | `{"color": "red", "year": 2012, "vin": "1C3CC5FB2AN120174", "model_id": 1}`    |
| Get a specific automobile    | GET       | http://localhost:8100/api/automobiles/:vin/   | *you query an automobile by its VIN.     |
| Update a specific automobile  | PUT        | http://localhost:8100/api/automobiles/:vin/  |   `{"color": "red", "year": 2012}`    |
| Delete a specific automobile   | DELETE       | http://localhost:8100/api/automobiles/:vin/       |
---------------
Services information
| Actions      | Method | URL  | Required JSON |
| :---        | :----       | :---          |  :---     |
| List Appointments   | GET      | http://localhost:8080/api/appointments/ |       |
| Create an Appointment | POST        | http://localhost:8080/api/appointments/    | `{"vin": "Create Vin", "customer_name": "Jessica Nora", "reason": "Car broke", "technician": <number>}`  |
| Get a specific Appointment | GET       | http://localhost:8080/api/appointments/<int:pk>/ |  *Enter id/pk in URL     |
| Update a specific Appointment  | PUT        | http://localhost:8080/api/appointments/<int:pk>/   |  `{"status": boolean}`     |
| Delete a specific Appointment  | DELETE       | http://localhost:8080/api/salesrecords/ |       |
| List Technicians  | GET       | http://localhost:8080/api/technicians/|       |
| Create a Technician  | POST       | http://localhost:8080/api/technicians/ |  `{"name": "Jenny Lora", "employee_number": "485745"}`    |
| Get a specific Technician  | GET       | http://localhost:8080/api/technicians/<int:pk>/ |   *Enter id/pk in URL      |
| Get a specific Automobile(Vin)  | GET       | http://localhost:8080/api/appointments/<str:pk>/|   *Enter id/pk in URL      |
---------------
Sales information
| Actions      | Method | URL  | Required JSON |
| :---        | :----       | :---          |  :---     |
| List Sales Person   | GET      | http://localhost:8090/api/salesrecords/ |       |
| Create a Sales Person | POST        | http://localhost:8090/api/salesrecords/     | `{"salesPerson": 2, "customer": 1, "vin": 3, "price": 5000}`  |
| List Customers   | GET       | http://localhost:8090/api/customers/  |       |
| Create a Customer  | POST        | http://localhost:8090/api/customers/     |   `{"name": "Dennis Reynolds", "address": "123 Paddys Pub Dr, Philly, PA, 88403", "phoneNumber": "485-495-3824"}`    |
| List Sales Records  | GET       | http://localhost:8090/api/salesrecords/ |       |
| Create a Sales Record  | POST       | http://localhost:8090/api/salesrecords/ |  `{"salesPerson": 2, "customer": 1, "vin": 3, "price": 5000}`     |
| List Sales Records  | GET       | http://localhost:8090/api/salesrecords/ |       |
| List Available Automobiles  | GET       | http://localhost:8090/api/availablevins/ |       |
| List Sales Records  | GET       | http://localhost:8090/api/salesrecord/{employeeNumber}/ |       |

**------------------------------------------**
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

**------------------------------------------**
## Service microservice

The **Service microservice** backend utilizes 3 django models. The models being **AutoMobileVO**, **Technician**, and **Appointment**. The AutoMoibleVO model polls from the Inventory bounded context specifically from the Automobile model in Inventory to poll for a VIN.

A customer who has an appointment with a VIN that matches one in the Inventory database will be assigned VIP status which will indicate to provide the appointment with "VIP treatment".

A user is able to cancel an appointment which in turn deletes the appointment or mark the status as finished which will remove the appointment from the active **Service Appointment List** and add it to the VIN's **Service History**.

On the **Service History Page** a user is able to look up a specific VIN number and view all the previous appointments that were completed for that specific VIN.

Please view the picture below for more details:
![Diagram](/ghi/app/public/Service_Microservice_Planning.png)

### Screenshots of Services Website
List of Appointments:
![Create Appointment](/ghi/app/src/images/Appointments.png)

Create Appointments:
![Create Appointment](/ghi/app/src/images/New_appointment.png)

Service History:
![Create Appointment](/ghi/app//src/images/Service_history.png)
**------------------------------------------**
## Sales microservice

The **Sales microservice** backend utilizes 4 django models. The models being **AutomobileVO**, **SalesPerson**, **Customer**, and **SalesRecord**. The AutomoibleVO model polls from the Inventory bounded context. When an Automobile instance is created in Inventory, an AutomobileVO instance will be created in Sales.

A user is able to create a sales person on the **New Sales Person Page**. A user can also create a Customer on the **New Customer Page**. Additionally, a user can create a Sales Record on the **New Sales Record Page** by entering all the required information. 

On the **Sales Record Page** a user can view all the sales records in the database. On the **Sales Record of Sales Person** a user can view all the sales records of a specific sales person.

Please view the picture below for more details:
![Diagram](/ghi/app/public/Sales_Project_Beta.png)


### Screenshots of Sales Website
Create a Sales Person:
![Create Appointment](/ghi/app/src/images/New_sales_person.png)

Create a Customer:
![Create Appointment](/ghi/app/src/images/New_customer_form.png)

Create a Sales Record:
![Create Appointment](/ghi/app/src/images/New_sale.png)

List Sales Records:
![Create Appointment](/ghi/app/src/images/Sales_records.png)

Show Sales Records for Specific Sales Person:
![Create Appointment](/ghi/app/src/images/Sales_person_record.png)