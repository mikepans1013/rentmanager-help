# Equal Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Equal.htm

This function compares the values of two text strings to determine whether or not they match. The function displays 1 if the values match and 0 if they do not. The case of alphabetic characters must be the same to return a match.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.Equal()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Equal( "Value1","Value2" )]

 Value1

 This is the first string for the comparison.

 [Equal("Margot Lawson","Margot Lawson")]

 Displays the value 1 , as both strings match exactly.

 Value2

 This is the second string for the comparison.

 [Equal("Margot Lawson","Margaret Lawson")]

 Displays the value 0 , as the strings do not match exactly.

 Script Examples

 The following scripts show various ways the function can be used:

 [System.Equal("A","A")]

 Displays the value 1 .

 [System.Equal("A","a")]

 Displays the value 0 because one character is uppercase and the other is lowercase.

 [System.Equal("a","z")]

 Displays the value 0 .

 [System.Equal("3","3")]

 Displays the value 1 .

 [System.Equal("1","3")]

 Displays the value 0 .
