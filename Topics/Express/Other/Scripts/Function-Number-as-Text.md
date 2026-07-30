# Number as Text Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Number-as-Text.htm

This function converts the specified numeric value into written text including decimals represented as xx/100. Non-numeric values return a value of ZERO AND 00/100 .

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.NumberAsText()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [NumberAsText( "Value" )]

 Value

 Specify the numeric value that should be written as text.

 [NumberAsText("67.23")]

 This returns the value SIXTY SEVEN AND 23/100 .

 Script Examples

 The following scripts show various ways the function can be used:

 [System.NumberAsText("101")]

 Displays ONE HUNDRED ONE AND 00/100 .

 [System.NumberAsText("345.67")]

 Displays THREE HUNDRED FORTY FIVE AND 67/100 .

 [System.NumberAsText(Tenant.Balance)]

 Displays the tenant’s ending balance as a written value.
