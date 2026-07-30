# Round Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Round.htm

This function evaluates a number and rounds it to the specified decimal place. Non-numeric values return a value of 0 .

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.Round()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [System.Round( "Value" , "Decimal" )]

 Value

 Specify the numeric value to process.

 [System.Round("42.357",1)]

 This displays the value 42.4 .

 Decimal

 This is the number of decimal places in the displayed value. Enter a value between 0 and 28 .

 Script Examples

 The following scripts show various ways the function can be used:

 [System.Round("7.4",0)]

 Displays a value of 7 .

 [System.Round("33.355",2)]

 Displays a value of 33.36 .
