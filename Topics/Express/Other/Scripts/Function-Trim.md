# Trim Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Trim.htm

This function displays a text string with the white space removed from both the left and right sides of the string.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.Trim()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Trim( "Value" )]

 Value

 Enter the string that should be examined. It can be a literal value or the value returned by another function.

 [System.Trim(" Spaces before and after string ")]

 Displays the string without the leading and trailing white space: Spaces before and after string .

 Script Examples

 The following scripts show various ways the function can be used:

 12345[System.Trim(" 67890 ")]

 Displays the completed string without the leading and trailing white space: 1234567890 .

 [System.Trim(Tenant.Address.FullAddress)]

 Displays the tenant's address with all leading and trailing spaces removed.
