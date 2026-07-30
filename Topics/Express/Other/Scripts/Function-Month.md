# Month Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Month.htm

This function displays the month component of a date value. A non-date returns a value of 1 .

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.Month()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Month( "Value" )]

 Value

 Enter a date to display the month component value.

 [Month("12/12/ 2026 ")]

 This displays the value 12 .

 Script Examples

 The following scripts show various ways the function can be used:

 [System.Month("3/19/ 2026 ")]

 Displays the value 3 .

 [System.Month(System.Date)]

 Displays the month component of the current date.
