# Contact Count Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Contact-Count.htm

This function displays a count of contacts associated with the selected tenant or vendor account.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Tenant

 [Tenant().ContactCount()]

 Displays information found on the tenant's View Contacts pop-up.

 Vendor

 [Vendor().ContactCount()]

 Displays information found on the vendor's View Contacts pop-up.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [ContactCount( "IncludeInactive" )]

 IncludeInactive

 Warning

 The IncludeInactive parameter applies to the function only when it is used with the Tenant class. If using this function with the Vendor class, there is no IncludeInactive parameter.

 Specify whether to include inactive contacts. By default, False is used. To include the tenant's inactive contacts, enter True .

 [ContactCount("True")]

 Displays a count of all the tenant's active and inactive contacts.

 Script Examples

 The following scripts show various ways the function can be used:

 [Vendor().ContactCount()]

 Displays a count of contacts associate with the vendor account.

 [Tenant().ContactCount(True)]

 Displays a count of all contacts, including ones marked inactive, that are associated with the tenant account.
