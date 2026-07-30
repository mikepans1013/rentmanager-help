# Right Trim Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Right-Trim.htm

This function displays a text string with the white space removed from the right side of the string.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.RightTrim()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [RightTrim( "Value" )]

 Value

 Enter the string that should be examined. It can be a literal value or the value returned by another function.

 [RightTrim("Space after string ")]

 Displays the string without the trailing white space: Space after string .

 Script Examples

 The following scripts show various ways the function can be used:

 [System.RightTrim("12345 ")]67890

 Displays the completed string without the trailing white space: 1234567890 .

 [System.RightTrim("Carriage returns after string. ")]

 Displays the completed string without the trailing white space: Carriage returns after string.
