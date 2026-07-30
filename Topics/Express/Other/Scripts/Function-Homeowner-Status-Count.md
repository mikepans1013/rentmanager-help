# Homeowner Status Count Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Homeowner-Status-Count.htm

The HomeownerStatusCount function displays the total number of homeowner statuses that have been assigned to the home-type asset, as entered in the Homeowner Statuses pop-up.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Home

 [Tenant().Home().HomeownerStatusCount()]

 Displays the number of homeowner statuses associated with the home-type asset.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [HomeownerStatusCount( "FromDate" , "ToDate" )]

 FromDate

 Specify the date on or after which to examine the homeowner status count. If no date is specified, the function uses the beginning of time.

 [HomeownerStatusCount("5/29/ 2026 ")]

 Displays the number of homeowner statuses assigned to the home-type asset on or after May 29, 2026 .

 ToDate

 Specify the date on or before which to examine the homeowner status count. If no date is specified, the function uses the end of time.

 [HomeownerStatusCount("","11/21/ 2026 ")]

 Displays the number of homeowner statuses assigned to the home-type asset on or before November 21, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Home().HomeownerStatusCount("1/1/ 2026 ","12/31/ 2026 ")]

 Displays the number of homeowner statuses assigned to the home-type asset for the 2026 calendar year.

 [Tenant().Home().HomeownerStatusCount("",System.Date)]

 Displays the number of homeowner statuses assigned to the home-type asset from the beginning of time until the current date.
