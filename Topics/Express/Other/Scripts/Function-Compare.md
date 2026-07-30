# Compare Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Compare.htm

This function compares the values of two text strings. The function returns 0 if the strings are equal, -1 if String1 is less than String2 alphabetically, and 1 if String1 is greater than String2 alphabetically, where uppercase letters and letters at the end of the alphabet are considered greater.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.Compare()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Compare( "String1" , "String2" )]

 String1

 This is the first string in the comparison.

 [Compare("Roy Jones","Roy Jones")]

 Displays the value 0 .

 String2

 This is the second string in the comparison.

 [Compare("Bob Smith","Bob Smythe")]

 Displays the value -1 .

 Script Examples

 The following scripts show various ways the function can be used:

 [System.Compare("A","A")]

 Displays a value of 0 .

 [System.Compare("A","a")]

 Displays a value of 1 .

 [System.Compare("a","Z")]

 Displays a value of -1 .

 [System.Compare("z","a")]

 Displays a value of 1 .

 [System.Compare("a","z")]

 Displays a value of -1 .
