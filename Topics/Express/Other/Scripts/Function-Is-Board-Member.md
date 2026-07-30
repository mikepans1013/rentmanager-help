# Is Board Member Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Is-Board-Member.htm

This function displays whether or not a contact is an active board member by outputting 1 if it is true, and 0 if it is false. The result displays as true if the specified date falls on or between the contact's Term Start and Term End dates on an association-type property's Board Members pop-up.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Contact

 [ Class(). Contact().IsBoardMember()]

 Displays a 1 for true or 0 for false, based on information on the Board Members tab on the association-type property's Board Members pop-up.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [IsBoardMember( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the contact's board member status. If no date is specified, today's date is used by default.

 [IsBoardMember("3/14/ 2026 ")]

 Displays 1 if the contact is an active board member as of March 14, 2026 , and 0 if they are not.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Contact().IsBoardMember()]

 Displays 1 if the tenant's primary contact is an active board member as of today, and 0 if they are not.

 [Tenant().Contact(1).IsBoardMember("6/1/ 2026 ")]

 Displays 1 if the tenant's second contact is an active board member as of June 1, 2026 , and 0 if they are not.
