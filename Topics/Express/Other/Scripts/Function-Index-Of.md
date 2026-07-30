# Index Of Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Index-Of.htm

This function finds the first occurrence of the Value2 parameter within the Value1 parameter and returns the index value of Value2's place in the string. If Value2 is not found, the function displays a value of 0 . For example, the following script displays a value of 10 . The first letter of Snider (Value2) is at the tenth position, which includes punctuation and spacing, in the string.

 [System.IndexOf("Peabody, Snider, and Associates","Snider")]

 Typically, this function is used as a parameter of the Left , Right , or Mid function because it allows you to find the correct place to separate text.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.IndexOf()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [IndexOf( "Value1","Value2" )]

 Value1

 This is the first string for the comparison.

 [IndexOf("wxyzx","x")]

 This script locates x (Value2) within Value1 and displays 2 , which is its position in the string.

 More Information

 This parameter starts with an index of 1 , which differs from most Rent Manager parameters that use an index of 0 .

 Value2

 This is the second string for the comparison.

 [IndexOf("wxyzx","w")]

 This script locates w (Value2) within Value1 and displays 1 , which is its position in the string.

 More Information

 This parameter starts with an index of 1 , which differs from most Rent Manager parameters that use an index of 0 .

 Script Examples

 The following scripts show various ways the function can be used:

 [System.IndexOf("Peabody, Snider, and Associates","Snider")]

 Displays a value of 10 . The first letter of Snider (Value2) is at the tenth position, which includes punctuation and spacing, in the string.

 [System.Left("1440 Toro Dr., Toro, NM 41234",System.IndexOf("1440 Toro Dr., Toro, NM 41234","."))]

 Displays 1440 Toro Dr. IndexOf is used as the Length parameter of the Left function, and the period after Dr. is used to locate where to stop returning text.

 [System.Left(Address.Street1(),IndexOf(Address.Street1()," "))]

 Displays the house number of the current address, and follows that house number with a space. IndexOf is used as the Length parameter of the Left function, and the space is used to locate the place to stop returning values.
