# Abs Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Abs.htm

This function returns the absolute value of the given number or the value returned by another script function. If an alphabetic text value is used, the function returns a value of zero.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.Abs()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Abs( "Value" )]

 Value

 Specify the value for which to retrieve the absolute value. It can be a literal value contained within double quotes or the value returned by another script function (with no quotes).

 [Abs("-523.76")]

 Displays the value 523.76.

 [Abs(Balance)]

 Displays the absolute value of the account balance.

 Script Examples

 The following scripts show various ways the function can be used:

 [System.Abs("-450.25")]

 Displays the value 450.25 .

 [System.Abs(Tenant.Balance)]

 Displays the absolute value of the tenant's Balance , since the value entered is a script function.

 [System.Abs("Eight")]

 Displays the value 0 , since the value entered is an alphabetic string.
