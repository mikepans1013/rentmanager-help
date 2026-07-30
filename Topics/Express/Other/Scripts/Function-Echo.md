# Echo Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Echo.htm

Echo can be used to display the value stored in a variable. This can be valuable in troubleshooting the calculation of variable values at different points in an advanced script. For example, you may have a While loop that repeatedly redefines the value of a variable. Echo could be used to force the output of this redefined variable at different points in the script to ensure all calculations related to that variable are working properly.

 In a multistatement script, Rent Manager displays the result only of the last statement as output. Script statements are separated by semicolons. For more information about multistatement scripts, refer to Scripting .

 This function forces Rent Manager to immediately display the value identified in this function's parameter. Echo is mainly used to force the display of output within a multistatement script that would not otherwise print anything to the screen. This is typical with advanced scripts that use the If and While functions.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.Echo()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Echo( "Value" )]

 Value

 This is the value to display. It can be static characters, the result of a script function, or a variable that stores a value.

 [Echo("Rent past due.")]

 Displays the phrase Rent past due.

 Script Examples

 The following scripts show various ways the function can be used:

 [System.Echo("SIGN YOUR NAME HERE")]

 Displays the phrase SIGN YOUR NAME HERE .

 [$i = 0 ; ""]
[While($i<Tenant.ContactCount,
 Echo(Contact($i).Email) ;
 Echo(System.LineFeed) ;
 $i=$i+1) ; ]

 Displays the email address of every contact associated with the currently selected tenant and then follows that email address with a line break so that each email is printed on a separate line. Without the Echo functions in this While loop, Rent Manager would have determined the email address of each contact without actually displaying them to the screen.

 [$var=System.If(Balance>0,"You have an outstanding balance.","You have no open charges.");""] [System.Echo($var)]

 If the tenant has a balance due on their account, $var stores the value You have an outstanding balance. and the echo displays it.

 If the tenant has no balance due on their account, $var stores the value You have no open charges. and the echo displays it.
