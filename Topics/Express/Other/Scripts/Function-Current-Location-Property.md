# Current Location Property Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Current-Location-Property.htm

This function displays the property at which the asset is located.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Asset

 [Asset().CurrentLocationProperty()]

 Displays the property to which the asset is linked.

 Home

 [ Class(). Home().CurrentLocationProperty()]

 Displays the property to which the home-type asset is linked.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [CurrentLocationProperty( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the property information. If no date is specified, today's date is used by default.

 [CurrentLocationProperty(" 7/21/2026 ")]

 Displays the associated property as of 7/21/2026 .

 Script Examples

 The following are examples of this function in scripts:

 [Asset().CurrentLocationProperty()]

 Displays the property to which the asset is linked as of today's date.

 [Asset().CurrentLocationProperty("10/30/ 2026 ")]

 Displays the property to which the asset is linked as of October 30, 2026 .

 [Tenant().Asset(1).CurrentLocationProperty()]

 Displays the property associated with the first additional asset associated with the tenant as of today's date.

 [Tenant("101").Home().CurrentLocationProperty("11/6/ 2026 ")]

 Displays the property associated with the home of the tenant with account number 101 as of November 6, 2026 .
