# Current Location Unit Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Current-Location-Unit.htm

This function displays the unit to which the entity is currently linked.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Asset

 [Asset().CurrentLocationUnit()]

 Displays the unit to which the asset is currently linked.

 Home

 [ Class(). Home().CurrentLocationUnit()]

 Displays the unit to which the home-type asset is currently linked.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [CurrentLocationUnit( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the unit information. If no date is specified, today's date is used by default.

 CurrentLocationUnit(" 7/21/2026 ")

 Displays the associated unit as of 7/21/2026 .

 Script Examples

 The following are examples of this function in scripts:

 [Asset().CurrentLocationUnit()]

 Displays the unit to which the asset is linked as of today's date.

 [Asset().CurrentLocationUnit("10/12/ 2026 ")]

 Displays the unit to which the asset was linked as of October 12, 2026 .

 [Tenant().Lease(1).Asset().CurrentLocationUnit()]

 Displays the unit associated with the asset at the tenant's first additional lease as of today's date.

 [Tenant("101").Home().CurrentLocationUnit("11/16/ 2026 )]

 Displays the unit associated with the home of the tenant with account number 101 as of November 16, 2026 .
