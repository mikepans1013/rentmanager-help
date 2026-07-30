# Amenity Reservation Request Scripts

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Script-Amenity-Reservation-Request.htm

There are several automated notifications which can be configured to send an email or text message when an amenity reservation request is submitted via Tenant Web Access (TWA) or updated. Reservation request scripting functions allow you to pull data entered in Rent Manager or Tenant Web Access directly into the body of the email or text you are sending via automated notifications.

 Available Functions

 From an amenity reservation automated notification, update the Email Body and Text Message fields to include the desired reservation request script functions from the table below.

 Function
 Description

 Description

 [Description]

 The details entered in the Description field of the reservable amenity.

 Display Name

 [DisplayName]

 The display name of the amenity the tenant is requesting to reserve, as it displays in both Rent Manager and Tenant Web Access (TWA) .

 Name

 [Name]

 The name of the reservable amenity the tenant is requesting to reserve, as it displays in Rent Manager .

 Reason

 [Reason]

 The reason that the Status of the amenity reservation request was changed. Only amenity reservation requests that were denied or canceled display a reason.

 Request Date

 [RequestDate]

 The date on which the tenant has requested the reservable amenity.

 Request Time

 [RequestTime()]

 The time for which the tenant has requested the reservable amenity.

 Tenant First Name

 [TenantFirstName]

 The first name of the tenant making the amenity reservation request.

 Tenant Last Name

 [TenantLastName]

 The last name of the tenant making the amenity reservation request.

 Web User Email Address

 [WebUserEmailAddress]

 The email address associated with the Tenant Web Access account of the tenant who submitted the amenity reservation request.

 Web User First Name

 [WebUserFirstName]

 The first name associated with the Tenant Web Access account of the tenant who submitted the amenity reservation request.

 Web User Last Name

 [WebUserLastName]

 The last name associated with the Tenant Web Access account of the tenant who submitted the amenity reservation request.
