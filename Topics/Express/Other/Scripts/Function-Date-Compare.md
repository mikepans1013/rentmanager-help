# Date Compare Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Date-Compare.htm

This function compares two dates. It returns 0 if the dates are equal, -1 if Date1 is less than Date2, and 1 if Date1 is greater than Date2.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.DateCompare()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [DateCompare( "Date1","Date2" )]

 Date1

 This is the first date in the comparison.

 [DateCompare("3/19/ 2026 ","3/19/ 2026 ")]

 Displays the value 0 .

 Date2

 This is the second date in the comparison.

 [DateCompare("3/19/ 2026 ","3/27/ 2026 ")]

 Displays the value -1 .

 Script Examples

 The following scripts show various ways the function can be used:

 [System.DateCompare("1/13/ 2026 ","1/13/ 2026 ")]

 Displays a value of 0 .

 [System.DateCompare("1/30/ 2026 ","1/20/ 2026 ")]

 Displays a value of 1 .

 [System.DateCompare("1/20/ 2026 ","1/30/ 2026 ")]

 Displays a value of -1 .
