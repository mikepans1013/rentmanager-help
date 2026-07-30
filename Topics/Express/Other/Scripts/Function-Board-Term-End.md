# Board Term End Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Board-Term-End.htm

This function displays the end date of the contact's term on the board of a property with the Property Type of Association selected on the property's details page.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Contact

 [ Class(). Contact().BoardTermEnd()]

 Displays information on the association-type property's Board Members pop-up.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [BoardTermEnd( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the contact's board term end date.

 If no date is specified, today's date is used by default.

 [BoardTermEnd("3/14/ 2026 ")]

 Displays the Term End date of the board member as of March 14, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Contact().BoardTermEnd()]

 Displays the term end date of the tenant's primary contact on the board as of today.

 [Tenant().Contact(1).BoardTermEnd("6/1/ 2026 ")]

 Displays the term end date of the tenant's first additional contact as of June 1, 2026 .
