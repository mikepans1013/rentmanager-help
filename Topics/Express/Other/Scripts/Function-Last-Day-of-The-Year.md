# Last Day of Year Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Last-Day-of-The-Year.htm

This function returns the last date in the year of the specified date. If no date parameter is specified, it returns the date of the last day in the current year.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.LastDayOfYear()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [LastDayOfYear( "Date" )]

 Date

 Specify the date to return the last date in that year.

 [LastDateOfYear("5/27/ 2026 ")]

 Displays the value 12/31/ 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [System.LastDayOfYear()]

 Displays the date of the last day in the current year.

 [System.LastDayOfYear("2/10/ 2026 ")]

 Displays the value 12/31/ 2026 , as it is the last day in the year of the specified date.

 [System.LastDayOfYear(Lease.MoveInDate)]

 Displays the date of the last day in the year of the current tenant's Move In date for the first lease listed.
