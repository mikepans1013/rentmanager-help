# Right Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Right.htm

This function displays a specified number of characters (including white spaces) from the right side of a string.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.Right()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Right( "Value","Length" )]

 Value

 Enter the string that should be examined. It can be a literal value contained within double quotation marks or the value returned by another script function (with no quotes).

 [Right("test string","6")]

 Displays part of the literal value test string based on the value in the Length parameter.

 [Right(Contact.Birthdate,"4")]

 Displays all or part of the primary contact's Birthday based on the value in the Length parameter.

 Length

 Enter the number of characters (including white spaces) to display from the Value parameter.

 [Right("test string","6")]

 Displays 6 characters from the right of the Value parameter. In this case, string displays.

 Script Examples

 The following scripts show various ways the function can be used:

 [System.Right("12/24/ 2026 - Tenant meeting","14")]

 Displays a value of Tenant meeting .

 [System.Right(Contact.FederalTaxID,"4")]

 Displays the last four digits of the Social Security Number or Tax ID of the primary contact of the selected tenant.

 [System.Right("5203 Sunrise View Cir., Liberty Twp., OH 45044",System.IndexOf("5203 Sunrise View Cir., Liberty Twp., OH 45044","."))]

 Displays Liberty Twp., OH 45044 . IndexOf is used as the Length parameter of the Right function, and the period after Cir. is used to locate where to stop returning text.
