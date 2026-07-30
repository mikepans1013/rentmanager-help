# Total Accounts Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Total-Accounts.htm

This function displays the number of tenant accounts associated with the selected unit as of a specified date.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Unit

 [Unit().TotalAccounts()]

 Displays information found on the Occupancy tile on the Unit details page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [TotalAccounts( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the number of accounts.

 If no date is specified, today's date is used by default.

 [TotalAccounts("12/15/ 2026 ")]

 Displays the total number of tenant accounts associated with the unit as of December 15, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().Unit().TotalAccounts()]

 Displays the number of accounts for the unit of the first lease listed for the current tenant as of today.

 [Tenant().Lease(1).Unit().TotalAccounts()]

 Displays the number of accounts for the unit of the first additional lease listed for the current tenant as of today.

 [Tenant().Lease().Unit().TotalAccounts("1/1/ 2026 ")]

 Displays the number of accounts for the unit of the first lease listed for the current tenant as of 1/1/ 2026 .
