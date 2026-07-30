# Reserved Quote Rent Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Reserved-Quote-Rent.htm

The ReservedQuoteRent function displays the rent amount for a prospect's reserved rent quote, with the ability to select if the amount displays as currency.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Prospect

 [Prospect.ReservedQuoteRent()]

 Displays the rent quote amount for a reserved prospect quote.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Prospect.ReservedQuoteRent( "Currency" )]

 Currency

 Determine if the amount that displays should show as a currency value.

 [ReservedQuoteRent("Currency")]

 Display the rent amount associated with a prospect's reserved rent quote with a currency symbol, comma separators, and two digits to the right of a decimal (e.g., $2,000.00).

 Script Examples

 The following scripts show various ways the function can be used:

 [Prospect.ReservedQuoteRent("Currency")]

 Displays the rent amount associated with a prospect's reserved rent quote and the amount formatted as currency.
