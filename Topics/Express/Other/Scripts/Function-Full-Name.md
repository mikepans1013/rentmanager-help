# Full Name Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Full-Name.htm

This function displays the full name ( First Name and Last Name or Company Name if Company is checked) of the selected tenant.

 Related Preferences

 If the Format Names by Last Name, First Name option in General Report Options (System Preferences) is checked, the full name displays as Last Name , First Name ).

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Contact

 [ Class(). Contact().FullName()]

 Displays information from the View Contacts page.

 Contact by Type

 [ Class(). ContactByType().FullName()]

 Displays information from the View Contacts page for the specified contact type.

 Screening

 [ Class(). Contact().Screening.FullName]

 Displays information from the View Contacts page of the screening's correlating contact.

 Tenant

 [Tenant().FullName]

 Displays information from the tenant's View Contacts page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [FullName( "IncludeMiddleName" )]

 Warning

 The IncludeMiddleName parameter listed below only applies when this function is used with the Contact and ContactByType classes. If using this function with the Screening or Tenant classes, there are no available parameters.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().FullName]

 Displays the first and last name of the selected tenant.

 [Tenant().Contact().FullName("True")]

 Displays the first, middle, and last name of the primary contact of the selected tenant.

 [Tenant().ContactByType("Caretaker").FullName()]

 Displays the first and last name of the first contact of the Caretaker type for the selected tenant.
