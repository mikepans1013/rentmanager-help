# Number Suffix Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Number-Suffix.htm

This function returns the text suffix for a numeric value. Note that the numeric value itself is not returned, and a literal number or an appropriate function to return a number should precede this function.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.NumberSuffix()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [NumberSuffix( "Value" )]

 Value

 Enter the numeric value to be evaluated.

 [NumberSuffix("5")]

 Returns the value ”th”.

 Script Examples

 The following scripts show various ways the function can be used:

 [System.NumberSuffix("3")]

 This returns the value rd .

 [System.NumberSuffix(RentDueDay)]

 Given a Rent Due Day of the first of each month, this returns 1st .
