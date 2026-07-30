# Board Member Status Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Board-Member-Status.htm

This function displays the status of the contact on the board of a property with the Property Type of Association selected on the property's Board Members pop-up. A status of Past , Current , or Future displays based on the board member's Term Start and Term End dates on the association-type property's Board Members pop-up.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Contact

 [ Class(). Contact().BoardMemberStatus()]

 Displays a status based on information on the association-type property's Board Members pop-up.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [BoardMemberStatus( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the board member's status.

 If no date is specified, today's date is used by default.

 [BoardMemberStatus("3/14/ 2026 ")]

 Displays the status of the board member as of March 14, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Contact().BoardMemberStatus()]

 Displays the status of the primary contact of a tenant as a board member as of today.

 [Tenant().Contact(1).BoardMemberStatus("6/1/ 2026 ")]

 Displays the status of the first additional contact of a tenant as a board member as of June 1, 2026 .
