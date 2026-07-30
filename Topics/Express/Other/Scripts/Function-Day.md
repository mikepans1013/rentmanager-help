# Day Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Day.htm

This function displays the numeric day from a specified date.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.Day()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Day( "Value" )]

 Value

 Specify the date for which to return the numeric day.

 [Day("1/25/ 2026 ")]

 Displays the value 25 .

 Script Examples

 The following scripts show various ways the function can be used:

 [System.Day("6/6/ 2026 ")]

 Displays the value 6 .

 [System.Day(System.Date)]

 Displays the numeric day of today's date.
