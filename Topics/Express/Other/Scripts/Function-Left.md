# Left Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Left.htm

This function displays a specified number of characters (including white spaces) from the left side of a string.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.Left()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Left( "Value","Length" )]

 Value

 Enter the string that should be examined. It can be a literal value or the value returned by another function.

 [Left("Ohio Buckeyes","4")]

 Displays all or part of the literal value Ohio Buckeyes based on the Length parameter.

 Length

 Enter the number of characters (including white spaces) to display from the Value parameter.

 [Left("Ohio Buckeyes","4")]

 Displays four characters from the left of the Value parameter. In this case, Ohio displays.

 Script Examples

 The following scripts show various ways the function can be used:

 [System.Left("12/24/2018 - Tenant meeting","10")]

 Displays a value of 12/24/2018 .

 [System.Left(Address.PostalCode,"5")]

 Displays the first five digits of the postal code of the selected tenant.

 [System.Left(Address.Street1(),IndexOf(Address.Street1(), " "))]

 Displays the house number of the current address and follows that house number with a space. Index Of is used as the Length parameter of the Left function, and the space is used to locate the place to stop returning values.
