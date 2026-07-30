# Amount Charged Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Amount-Charged.htm

This function displays the total amount charged to all the tenants of the property.

 Classes that utilize this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.AmountCharged()]

 Displays information found in the View Transactions pop-up of the tenants for the asset's financial property.

 Property

 [Property().AmountCharged()]

 Displays information found in the View Transactions pop-up for the tenants of the specified property.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [AmountCharged( "FromDate" , "ToDate" , "ChargeTypes" )]

 More Information

 Entering parameters for the AmountCharged function determines how the script examines the data in the following ways:

 -
 If you enter a ToDate, it examines charges on or before that date.

 -
 If you enter a FromDate, it examines charges on or after that date.

 -
 If you enter both a ToDate and FromDate, it examines all charges in the date range.

 -
 If you don't enter ToDate and FromDate parameters, the function only examines charges from today .

 FromDate

 Specify the date on or after which to examine charges posted. If no date is specified, the function uses today's date.

 [AmountCharged("1/1/ 2026 ")]

 Displays the total amount of charges posted on or after January 1, 2026 .

 ToDate

 Specify the date on or before which to examine charges posted. If no date is specified, the function uses today's date.

 [AmountCharged("","6/1/ 2026 ")]

 Displays the total amount of charges posted on or before June 1, 2026 .

 ChargeTypes

 Specify the charge type(s) you wish to examine. If no charge types are specified, all charge types that have been allocated display. Each charge type should be separated by a comma.

 [AmountCharged("1/1 2026 ","","RC,LC")]

 Examines the posted charge amounts for Rent Charge (RC) and Late Charge (LC) charge types since January 1, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Property().AmountCharged()]

 Displays the total amount charged today for all tenants of the property.

 [Tenant().Property.AmountCharged("3/1/ 2026 ")]

 Displays the total amount charged since 3/1/ 2026 for all tenants of the selected tenant's default property.

 [Asset().FinancialProperty.AmountCharged("2/1/ 2026 ","3/31/ 2026 ")]

 Displays the total amount charged from 2/1/ 2026 to 3/31/ 2026 for all tenants of the asset's financial property.

 [Property().AmountCharged("1/1/ 2026 ","2/28/ 2026 ","RC")]

 Displays the total Rent Charge (RC) amount charged from 1/1/ 2026 to 2/28/ 2026 for all tenants of the property.

 [Tenant().Lease().Property.AmountCharged("4/1/ 2026 ")]

 Displays the total amount charged since 4/1/ 2026 for all tenants of the property of the tenant's first listed lease.

 [Tenant().Lease(1).Property.AmountCharged("","","RC")]

 Displays the total Rent Charge (RC) amount charged today for all tenants of the property of the tenant's first additional lease.
