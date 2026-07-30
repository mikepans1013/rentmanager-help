# First Day of Year Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-First-Day-of-Year.htm

This function displays the first date in the year of the specified date. If no date parameter is specified, it returns the date of the first day in the current year.

 This function can be utilized by the following classes:

 Class
 Syntax

 System

 [System.FirstDayOfYear()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [FirstDayOfYear( "Date" )]

 Date

 Specify the date to return the first date in that year.

 [FirstDayOfYear("9/18/ 2026 ")]

 Displays the value 1/1/ 2026 , as it is the first day in the year of the specified date.

 Script Examples

 The following scripts show various ways the function can be used:

 [System.FirstDayOfYear()]

 Displays the first date of the current year.

 [System.FirstDayOfYear("2/10/ 2026 ")]

 Displays the value 1/1/ 2026 , as it is the first day in the year of the specified date.

 [System.FirstDayOfYear(Lease.MoveInDate)]

 Displays the first date in the year of the tenant's Move In date.
