# Upper Case Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Upper-Case.htm

This function returns a text string converted to upper case text.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.UpperCase()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [UpperCase( "Value" )]

 Value

 Enter the string that should be examined. It can be a literal value or the value returned by another function.

 [UpperCase("Total Due")]

 Displays the value TOTAL DUE .

 Script Examples

 The following scripts show various ways the function can be used:

 [System.UpperCase("Bubbles and Barks")]

 Displays the text string in uppercase:  BUBBLES AND BARKS .

 [System.UpperCase(FullName)]

 Displays ZBORNAK, DOROTHY , given the selected tenant is named Dorothy Zbornak.
