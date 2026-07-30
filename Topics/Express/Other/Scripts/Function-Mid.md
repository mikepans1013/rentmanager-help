# Mid Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Mid.htm

This function displays a portion of a given value starting at a specified character and running for a specified number of characters.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.Mid()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Mid( "Value" , "Start" , "Length" )]

 Value

 Enter the string that should be examined. It can be a literal value or the value returned by another function.

 [Mid("Ohio Buckeyes")]

 Displays the value Ohio Buckeyes .

 Start

 Enter the index number of the first character to begin the display.

 More Information

 This parameter starts with an index of 1 , which differs from most Rent Manager parameters that use an index of 0 .

 [Mid("Ohio Buckeyes","6")]

 Displays the value Buckeyes because B is the sixth character (including white space) from the left.

 Start

 Enter the index number of the first character to begin the display.

 More Information

 This parameter starts with an index of 1 , which differs from most Rent Manager parameters that use an index of 0 .

 [Mid("Ohio Buckeyes","6")]

 Displays the value Buckeyes because B is the sixth character (including white space) from the left.

 Length

 Enter the total number of characters to display.

 [Mid("Ohio Buckeyes","6","4")]

 Displays the value Buck because B is the sixth character (including white space) from the left, and the total number of characters to display is four.

 Script Examples

 The following scripts show various ways the function can be used:

 [System.Mid(System.Date,1,4)]

 Displays 1/31 , given that today's date (the system date) is January 31, 2026 , and four characters should be returned.

 [System.Mid(System.Format(System.Date,"Medium Date"),4,3)]

 Displays Jan , given the selected date is formatted as 31-Jan- 26 .
