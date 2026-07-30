# One-Time Charge Amount Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-One-Time-Charge-Amount.htm

The OneTimeChargeAmount function displays the total amount of all one-time charges associated with a prospect's rent quote, with the ability to select which charge types are examined and if the amount displays as currency.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Rent Quotes

 [Prospect.RentQuotes().OneTimeChargeAmount()]

 Displays the total amount of all one-time charges associated with a prospect's rent quote.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Prospect.RentQuotes.OneTimeChargeAmount( "ChargeType" , "Currency" )]

 ChargeType

 Specify the charge type(s) you wish to examine. If no charge types are specified, all charge types are examined. Each charge type should be separated by a comma.

 [OneTimeChargeAmount("RC,DP")]

 Displays the total amount of all one-time charges with a charge type of RC and DP associated with a prospect's rent quote.

 Currency

 Determine if the amount that displays should show as a currency value.

 [OneTimeChargeAmount("","Currency")]

 Display the total amount of all one-time charges associated with a prospect's rent quote with a currency symbol, comma separators, and two digits to the right of a decimal (e.g., $1,650.00).

 Script Examples

 The following scripts show various ways the function can be used:

 [Prospect.RentQuotes.OneTimeChargeAmount("DP","Currency")]

 Displays the total amount of all one-time charges with a charge type of DP associated with the first rent quote listed on the prospect's account and the amounts formatted as currency.

 [Prospect.RentQuotes(1).OneTimeChargeAmount("","Currency")]

 Displays the total amount of all one-time charges associated with the second rent quote listed on the prospect's account and the amounts formatted as currency.
