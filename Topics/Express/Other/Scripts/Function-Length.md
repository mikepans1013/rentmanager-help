# Length Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Length.htm

This function displays the number of characters (including spaces) in a string.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.Length()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Length( "Value" )]

 Value

 Enter the string that should be examined. It can be a literal value or the value returned by another function.

 [Length("abcdefg")]

 Displays 7 , as that is how many characters are in this string.

 Script Examples

 The following scripts show various ways the function can be used:

 [System.Length("New Tenants:")]

 Displays 12 , as that is how many characters are in this string.

 [System.Length(Pet.Name)]

 Displays 5 , given the selected pet is named Clove.
