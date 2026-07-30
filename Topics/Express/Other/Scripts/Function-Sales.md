# Sales Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Sales.htm

This function displays the sales total entered for the tenant's selected commercial lease for the month immediately preceding the specified or calculated date. If no retail sales exist for that month, Rent Manager continues looking at prior month(s) until it finds a month with sales data. If none is found, it returns a blank for this script.

 Related Preferences

 To view sales information, the Track tenant retail sales option must be enabled in Commercial (System Preferences) .

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below:

 Class
 Syntax

 Lease

 [Tenant().Lease().Sales()]

 Displays information found click Sales on the lease's details pop-up.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Sales( "AsOfDate" , "MonthsToOffset" )]

 AsOfDate

 Specify the date for which to examine the amount of sales. Rent Manager begins looking at the month immediately preceding this date and continues searching backward until it finds a month with sales.

 [Sales("12/15/ 2026 ")]

 Retrieves the sales amount for the month preceding December 15, 2026 for the first commercial lease listed for the current tenant.

 MonthsToOffset

 Specify the number of months before or after the AsOfDate for which to examine the amount of sales. Offset values may be positive (e.g., 3 ) or negative (e.g., -3 ).

 [Sales("","-2")]

 Retrieves the sales amount for the month that is two months prior to today for the first commercial lease listed for the current tenant.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease(1).Sales()]

 Displays the sales total entered for the most recent month with sales data for the first additional commercial lease listed for the selected tenant.

 [Tenant().Lease().Sales("11/12/ 2026 ")]

 Displays the sales total entered for the most recent month with sales data preceding 11/12/ 2026 for the first commercial lease listed for the selected tenant.

 [Tenant().Lease().Sales("","-4")]

 Displays the sales total entered for the most recent month with sales data preceding four months ago for the first commercial lease listed for the selected tenant.

 [Tenant().Lease().Sales("12/15/ 2026 ","-4")]

 Displays the sales total entered for the most recent month with sales data preceding four months before 12/15/ 2026 for the first commercial lease listed for the selected tenant.
