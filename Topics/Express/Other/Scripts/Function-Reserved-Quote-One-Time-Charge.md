# Reserved Quote One-Time Charge Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Reserved-Quote-One-Time-Charge.htm

The ReservedQuoteOneTimeCharge function displays the total amount of all one-time charges associated with a prospect's reserved rent quote, with the ability to select which charge types are examined and if the amount displays as currency.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Prospect

 [Prospect.ReservedQuoteOneTimeCharge()]

 Displays the total amount of all one-time charges associated with a prospect's reserved rent quote.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Prospect.ReservedQuoteOneTimeCharge( "ChargeType" , "Currency" )]

 ChargeType

 Specify the charge type(s) you wish to examine. If no charge types are specified, all charge types are examined. Each charge type should be separated by a comma.

 [ReservedQuoteOneTimeCharge("RC,DP")]

 Displays the total amount of all one-time charges with a charge type of RC and DP associated with a prospect's reserved rent quote.

 Currency

 Determine if the amount that displays should show as a currency value.

 [ReservedQuoteOneTimeCharge("","Currency")]

 Display the total amount of all one-time charges associated with a prospect's reserved rent quote with a currency symbol, comma separators, and two digits to the right of a decimal (e.g., $2,000.00).

 Script Examples

 The following scripts show various ways the function can be used:

 [Prospect.ReservedQuoteOneTimeCharge("DP","Currency")]

 Displays the total amount of all one-time charges with a charge type of DP associated with a prospect's reserved rent quote with the amounts formatted as currency.

 [Prospect.ReservedQuoteOneTimeCharge("","Currency")]

 Displays the total amount of all one-time charges associated with a prospect's reserved rent quote with the amounts formatted as currency.
