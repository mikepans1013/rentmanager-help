# User Defined Field Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-User-Defined-Field.htm

This function displays the information defined for the specified user defined field of the selected entity, as shown on the UDFs tile.

 More Information

 Some UDF  Field Type options work differently in scripting. Depending on the type of UDF selected from the User Defined Fields section of the Insertable Fields list, some UDFs may display differently.

 For example, UDFs with a Field Type of Image use the ImageUserDefinedField function to display picture in the script's output.

 [ServiceManager(92).ImageUserDefinedField("Bathroom Photo","","2",True)]

 Displays the image for the issue-type image UDF "Bathroom Photo" of service issue 92, scaled to 2 inches high and proportional width.

 Alternatively, you can use the UserDefinedField function for UDFs with a Field Type of Encrypted Text , but the script's output displays the sensitive information only if the user has the appropriate permissions.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Asset

 [Asset().UserDefinedField()]

 Displays the information in the specified user defined field for the asset.

 Contact

 [ Class(). Contact().UserDefinedField()]

 Displays the information in the specified user defined field for the contact.

 Current User

 [CurrentUser.UserDefinedField()]

 Displays the information in the specified user defined field for the current user.

 Eviction

 [Eviction.UserDefinedField()]

 Dispalys the information in the specified user defined field for the eviction

 Home

 [ Class(). Home().UserDefinedField()]

 Displays the information in the specified user defined field for the home-type asset.

 Job

 [Job().UserDefinedField()]

 Displays the information in the specified user defined field for the current job.

 Lease

 [Tenant().Lease().UserDefinedField()]

 Displays the information in the specified user defined field for the tenant's lease.

 Loan

 [Tenant().Loan(Tenant.TenantLoanCount()-1).UserDefinedField()]

 Displays the information in the specified user defined field for the tenant's loan.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Tenant.TenantLoanCount() - 1) . This allows you to return data for the most recent loan created for the tenant.

 Owner

 [Owner().UserDefinedField()]

 Displays the information in the specified user defined field for the owner.

 Owner Prospect

 [OwnerProspect().UserDefinedField()]

 Displays the information in the specified user defined field for the owner prospect.

 Primary Owner

 [Property().PrimaryOwner.UserDefinedField()]

 Displays the information in the specified user defined field for the property's primary owner.

 Property

 [Property().UserDefinedField()]

 Displays the information in the specified user defined field for the property.

 Prospect

 [Prospect().UserDefinedField()]

 Displays the information in the specified user defined field for the prospect.

 Service Manager

 [ServiceManager().UserDefinedField()]

 Displays the information in the specified user defined field for the issue.

 System

 [System.UserDefinedField()]

 Displays the information in the specified system-level user defined field.

 Tenant

 [Tenant().UserDefinedField()]

 Displays the information in the specified user defined field for the tenant.

 Unit

 [Unit().UserDefinedField()]

 Displays the information in the specified user defined field for the unit.

 Vendor

 [Vendor().UserDefinedField()]

 Displays the information in the specified user defined field for the vendor.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [UserDefinedField( "Name" )]

 Name

 Specify the name of the UDF to display.

 [UserDefinedField("Driver's License Number")]

 Displays the information defined in the "Driver's License Number" UDF.

 More Information

 For UDFs with a Field Type of Image , you should instead use the ImageUserDefinedField function.

 This function uses different parameters than the UserDefinedField function, as described below.

 Parameter
 Description

 Width

 Specify the width of the image. If a height parameter value is not specified after the width, the image is scaled proportionately.

 Height

 Specify the height of the image. If a width parameter value is not specified before the height, the image is scaled proportionately.

 IsInches

 Enter the value False if the width and height are in pixels and True if they are in inches. If no parameter value is specified, the function defaults to False .

 In addition to True and False , this parameter also accepts the following alternate input options:  T and F , Yes and No , and Y and N . The options T , Yes , and Y all behave the same as True , while F , No , and N all behave the same as False .

 Script Examples

 The following scripts show various ways the function can be used:

 [Prospect().UserDefinedField("Car Model")]

 Displays the information in the prospect-type UDF "Car Model" for the prospect.

 [Tenant().Loan(Tenant.TenantLoanCount()-1).UserDefinedField("Door Number")]

 Displays the information in the loan-type UDF "Door Number" for the tenant's most recent loan.

 [Unit(122).UserDefinedField("Nearest Cross Street")]

 Displays the information in the unit-type UDF "Nearest Cross Street" for the unit with the system-generated account ID 122.

 [Eviction.UserDefinedField("Priority")]

 Displays the information in the in the eviction-type UDF "Priority" for the tenant's most recent eviction.
