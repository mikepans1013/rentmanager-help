# Year Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Year.htm

This function returns the year component of a date value. A non-date value returns a value of 1 .

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.Year()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Year( "Value" )]

 Value

 Enter a date to return the year component value.

 [Year("3/18/2016")]

 Displays the value 2016 .

 Script Examples

 The following scripts show various ways the function can be used:

 [System.Year("4/21/2014")]

 Displays the value 2014 .

 [System.Year(System.Date)]

 Displays the year component of the current date.

 [System.Year(InsuranceExpirationDate)]

 Displays the year the vendor's insurance expires as entered on the vendor's details page in the Miscellaneous tile.
