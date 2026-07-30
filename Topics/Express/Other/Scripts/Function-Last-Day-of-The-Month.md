# Last Day of Month Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Last-Day-of-The-Month.htm

This function returns the last date in the month of the specified date. If no date parameter is specified, it returns the date of the last day in the current month.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.LastDayOfMonth()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [LastDayOfMonth( "Date" )]

 Date

 Specify the date to return the last date in that month.

 [LastDayOfMonth("3/19/ 2026 ")]

 Displays the value 3/31/ 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [System.LastDayOfMonth()]

 Displays the date of the last day of the current month and year.

 [System.LastDayOfMonth("7/10/ 2026 ")]

 Displays the value 7/31/ 2026 , as it is the last day in the month and year of the specified date.

 [System.LastDayOfMonth(Lease.MoveInDate)]

 Displays the date of the last day in the month and year of the tenant's Move In date.
