# Minimum Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Minimum.htm

This function compares two numeric values and displays the smaller value. If neither of the values are numeric, it displays 0 .

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.Minimum()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Minimum( "Value1","Value2" )]

 Value1

 This is the first string for the comparison.

 [Minimum("0.15","0.35")]

 Displays Value1 ( 0.15 ), as it is smaller than Value2.

 Value2

 This is the second string for the comparison.

 [Minimum("23","4")]

 Displays Value2 ( 4 ), as it is smaller than Value1.

 Script Examples

 The following scripts show various ways the function can be used:

 [System.Minimum(LastPaymentAmount,SecurityDepositHeld)]

 Displays the smaller value after comparing the Last Payment Amount and the Security Deposit Held .

 [System.Minimum("100",Balance)]

 Displays the smaller value after comparing the value 100 and the current Balance .

 [System.Minimum("Janus","Mars")]

 Displays 0 because the values are not numeric.
