# Maximum Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Maximum.htm

This function compares two numeric values and displays the larger value. If neither of the values are numeric, it displays 0 .

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.Maximum()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Maximum( "Value1","Value2" )]

 Value1

 This is the first string for the comparison.

 [Maximum("0.45","0.25")]

 Displays Value1 ( 0.45 ), as it is larger than Value2.

 Value2

 This is the second string for the comparison.

 [Maximum("4","23")]

 Displays Value2 ( 23 ), as it is larger than Value1.

 Script Examples

 The following scripts show various ways the function can be used:

 [System.Maximum("100",Balance)]

 Displays the larger value after comparing the value 100 and the current Balance .

 [System.Maximum(LastPaymentAmount,SecurityDepositHeld)]

 Displays the larger value after comparing the Last Payment Amount and the Security Deposit Held .

 [System.Maximum("Janus","Mars")]

 Displays 0 because the values are not numeric.
