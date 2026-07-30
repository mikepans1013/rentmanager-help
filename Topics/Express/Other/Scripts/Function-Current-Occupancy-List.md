# Current Occupancy List Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Current-Occupancy-List.htm

This function displays a complete list of active contacts, which are separated by commas, for the selected tenant.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Tenant

 [Tenant().CurrentOccupancyList()]

 Displays information shown on the tenant's Contacts tile.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [CurrentOccupancyList( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the complete list of active contacts, separated by commas.

 If no date is specified, today's date is used by default.

 A date during the tenant's occupancy period must be entered in this parameter to return results. If the provided date or default current date is outside the tenant's occupancy period, this parameter returns nothing.

 [CurrentOccupancyList("1/1/ 2026 ")]

 Displays the complete list of active contacts as of January 1, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().CurrentOccupancyList()]

 Displays the list of active contacts associated with the current tenant on today's date.

 [Tenant(13).CurrentOccupancyList("01/01/ 2026 ")]

 Displays the list of active contacts associated with the tenant with the system-generated account ID number 13 on January 1, 2026 .
