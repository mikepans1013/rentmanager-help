# Lower Case Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Lower-Case.htm

This function displays a text string in lowercase.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.LowerCase()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [LowerCase( "Value" )]

 Value

 Enter the string that should be examined. It can be a literal value or the value returned by another function.

 [LowerCase("ToGgLe CaSe")]

 Displays the text string in lowercase:  toggle case .

 Script Examples

 The following scripts show various ways the function can be used:

 [System.LowerCase("National Holiday")]

 Displays the text string in lowercase:  national holiday .

 [System.LowerCase(FullName)]

 Displays zbornak, dorothy , given the selected tenant is named Dorothy Zbornak.
