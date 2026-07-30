# Current Status Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Current-Status.htm

This function displays the asset status assigned to the entity. Asset statuses are displayed on the asset's details page.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Asset

 [Asset().CurrentStatus()]

 Displays the status assigned to the asset.

 Home

 [Home().CurrentStatus()]

 Displays the status assigned to the home.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [CurrentStatus( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the status information.

 If no date is specified, today's date is used by default.

 [CurrentStatus(" 7/21/2026 ")]

 Displays the associated status as of 7/21/2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Asset().CurrentStatus()]

 Displays the status of the asset as of today's date.

 [Asset().CurrentStatus("11/22/ 2026 ")]

 Displays the status of the asset as of November 22, 2026 .

 [Tenant().Lease(1).Asset().CurrentStatus()]

 Displays the status of the asset at the tenant's first additional lease as of today's date.

 [Tenant("101").Home().CurrentStatus("10/20/ 2026 )]

 Displays the status of the home of the tenant with account number 101 as of October 20, 2026 .
