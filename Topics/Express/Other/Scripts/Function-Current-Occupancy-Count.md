# Current Occupancy Count Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Current-Occupancy-Count.htm

This function displays the total number of active contacts for the selected tenant.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Tenant

 [Tenant().CurrentOccupancyCount()]

 Displays information shown on the tenant's View Contacts page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [CurrentOccupancyCount( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the total number of active contacts. If no date is specified, today's date is used by default.

 A date during the tenant's occupancy period must be entered in this parameter to return results. If the provided date or default current date is outside the tenant's occupancy period, this parameter returns 0 .

 [CurrentOccupancyCount("1/1/ 2026 ")]

 Displays the total number of active contacts as of January 1, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().CurrentOccupancyCount()]

 This displays the number of active contacts associated with the current tenant on today's date.

 [Tenant(13).CurrentOccupancyCount("01/01/ 2026 ")]

 This displays the number of active contacts associated with the tenant with the system-generated account ID number 13 on January 1, 2026 .
