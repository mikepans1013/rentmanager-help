# First Day of Month Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-First-Day-of-Month.htm

This function displays the first date in the month of the specified date. If no date parameter is specified, it returns the date of the first day in the current month.

 This function can be utilized by the following classes:

 Class
 Syntax

 System

 [System.FirstDayOfMonth()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [FirstDayOfMonth( "Date" )]

 Date

 Specify the date to return the first date in that month.

 [FirstDayOfMonth("9/18/ 2026 ")]

 Displays the value 9/1/ 2026 , as it is the first day in the month of the specified date.

 Script Examples

 The following scripts show various ways the function can be used:

 [System.FirstDayOfMonth()]

 Displays the date of the first day of the current month and year.

 [System.FirstDayOfMonth("2/10/ 2026 ")]

 Displays the value 2/1/ 2026 , as it is the first day in the month and year of the specified date.

 [System.FirstDayOfMonth(Lease.MoveInDate)]

 Displays the date of the first day in the month and year of the tenant's Move In date.

 [System.FirstDayOfMonth(System.DateAdd("m",1))]

 Displays the date as the first day of the month after the current month.
