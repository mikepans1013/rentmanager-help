# Left Trim Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Left-Trim.htm

This function displays a text string with the white space removed from the left side of the string.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.LeftTrim()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [LeftTrim( "Value" )]

 Value

 Enter the string that should be examined. It can be a literal value or the value returned by another function.

 [LeftTrim(" Space before string")]

 Displays the string without the leading white space:  Space before string .

 Script Example

 The following script shows one way the function can be used:

 12345[System.LeftTrim(" 67890")]

 Displays the completed string without the leading white space:  1234567890 .
