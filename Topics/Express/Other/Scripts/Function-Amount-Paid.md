# Amount Paid Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Amount-Paid.htm

This function displays the total amount paid by all tenants of a property.

 Classes that utilize this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.AmountPaid()]

 Displays information found View Transactions page for the tenants of the financial property of the asset.

 Property

 [Property().AmountPaid()]

 Displays information found View Transactions page for the tenants of the specified property.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [AmountPaid( "FromDate" , "ToDate" , "ChargeTypes") ]

 More Information

 Entering parameters for the AmountPaid function determines how the script will examine the data in the following ways:

 -
 If you enter a ToDate, it examines payments on or before that date.

 -
 If you enter a FromDate, it examines payments on or after that date.

 -
 If you enter both, it examines all payments in the date range.

 -
 If you don't enter ToDate and FromDate parameters, the function examines payments from today only.

 FromDate

 Specify the date on or after which to examine payments made. If no date is specified, the function uses today's date.

 [AmountPaid("1/1/ 2026 ")]

 Displays the total amount of payments made on or after January 1, 2026 .

 ToDate

 Specify the date on or before which to examine payments made. If no date is specified, the function uses today's date.

 [AmountPaid("","6/1/ 2026 ")]

 Displays the total amount of payments made on or before June 1, 2026 .

 ChargeTypes

 Specify the charge type(s) you wish to examine. If no charge types are specified, all charge types that have been allocated display. Each charge type should be separated by a comma.

 [AmountPaid("1/1 2026 ","","RC,LC")]

 Examines the amounts of payments made for Rent Charge (RC) and Late Charge (LC) charge types since January 1, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Property().AmountPaid()]

 Displays the total amount paid today by all tenants of the property:

 [Tenant().Property.AmountPaid("3/1/ 2026 ")]

 Displays the total amount paid since March 1, 2026 by all tenants of the selected tenant's default property.

 [Asset().FinancialProperty.AmountPaid("2/1/ 2026 ","3/31/ 2026 ")]

 Displays the total amount paid between February 1, 2026 and March 31, 2026 by all tenants of the asset's financial property.

 [Property().AmountPaid("1/1/ 2026 ","2/28/ 2026 ","RC")]

 Displays the total Rent Charge (RC) amount paid between January 1, 2026 and February 28, 2026 by all tenants of the property.

 [Tenant().Lease().Property.AmountPaid("4/1/ 2026 ")]

 Displays the total amount paid since April 1, 2026 by all tenants of the property of the tenant's first listed lease.

 [Tenant().Lease(1).Property.AmountPaid("","","RC")]

 Displays the total Rent Charge (RC) amount paid today by all tenants of the property of the tenant's first additional lease.
