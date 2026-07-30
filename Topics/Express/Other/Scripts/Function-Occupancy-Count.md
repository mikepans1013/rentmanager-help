# Occupancy Count Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Occupancy-Count.htm

This function displays the total number of contacts as of a specified date for the selected property as shown on the View Contacts page of each tenant at the property.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.OccupancyCount()]

 Displays information found on the View Contacts page of each tenant at the asset's financial property.

 Property

 [Property().OccupancyCount()]

 Displays information found on the View Contacts page of each tenant at the property.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [OccupancyCount( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the occupancy count. If no date is specified, today's date is used by default.

 [OccupancyCount("12/01/ 2026 ")]

 Displays the occupancy count as of December 1, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Property().OccupancyCount()]

 Displays the number of contacts as of today at the selected property.

 [Tenant().Lease(1).Property().OccupancyCount("04/01/ 2026 ")]

 Displays the number of contacts at the first property associated with the tenant's second lease as of April 1, 2026 .

 [Tenant().Home().FinancialProperty.OccupancyCount("03/17/ 2026 ")]

 Displays the number of contacts at the financial property of the selected tenant's home-type asset, as of March 17, 2026 .
