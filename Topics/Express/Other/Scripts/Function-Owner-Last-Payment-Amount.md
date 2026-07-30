# Owner Last Payment Amount Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Owner-Last-Payment-Amount.htm

This function displays the total amount of the last distribution payment for all ownerships of the selected owner as of the specified date.

 Classes that utilize this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Owner

 [Owner().OwnerLastPaymentAmount()]

 Displays information found on the owner's Checks page.

 Primary Owner

 [Property().PrimaryOwner.OwnerLastPaymentAmount()]

 Displays information found on the owner's Checks page of the property's primary owner.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [OwnerLastPaymentAmount( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the last distribution payment amount. If no date is specified, today's date is used by default.

 [OwnerLastPaymentAmount("1/31/ 2026 ")]

 Displays the last distribution payment amount as of January 31, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Owner().OwnerLastPaymentAmount()]

 Displays the total amount of the last distribution payment for the selected owner as of today.

 [Property().PrimaryOwner.OwnerLastPaymentAmount()]

 Displays the total amount of the last distribution payment for the primary owner on the selected property's Owners page as of today.

 [Owner().OwnerLastPaymentAmount("2/1/ 2026 ")]

 Displays the total amount of the last distribution payment for the selected owner as of February 1,  2026 .
