# Open Credits Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Open-Credits.htm

This function displays the total amount of open (unapplied) credits at the selected property.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class() .FinancialProperty.OpenCredits()]

 Displays information found on the tenant's View Transactions page for the financial property of the Asset.

 Property

 [Property().OpenCredits()]

 Displays information found on the tenant's View Transactions page of the specified property.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [OpenCredits( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the open credits.

 If no date is specified, today's date is used by default.

 [OpenCredits("1/31/ 2026 ")]

 Displays the open credits amount as of January 31, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Property().OpenCredits()]

 Displays the total amount of open credits for all tenants of the property as of today's date.

 [Asset().FinancialProperty.OpenCredits("5/1/ 2026 ")]

 Displays the total amount of open credits as of May 1, 2026 for all tenants of the asset's financial property.
