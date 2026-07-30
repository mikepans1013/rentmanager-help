# Reserved Quote Additional Recurring Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Reserved-Quote-Additional-Recurring.htm

The ReservedQuoteAdditionalRecurring function displays the total amount of any additional recurring charges associated with a prospect's reserved rent quote, with the ability to select which charge types are examined and if the amount displays as currency. This script evaluates recurring charges associated with any units and other rentable items (ORIs).

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Prospect

 [Prospect.ReservedQuoteAdditionalRecurring()]

 Displays the total amount of any additional recurring charges associated with a prospect's reserved rent quote.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Prospect.ReservedQuoteAdditionalRecurring( "ChargeType" , "Currency" )]

 ChargeType

 Specify the charge type(s) you wish to examine. If no charge types are specified, all charge types are examined. Each charge type should be separated by a comma.

 [ReservedQuoteAdditionalRecurring("GB,OL")]

 Displays the total amount of any additional recurring charges with a charge type of GB and OL associated with a prospect's reserved rent quote.

 Currency

 Determine if the amount that displays should show as a currency value.

 [ReservedQuoteAdditionalRecurring("","Currency")]

 Display the total amount of any additional recurring charges associated with a prospect's reserved rent quote with a currency symbol, comma separators, and two digits to the right of a decimal (e.g., $2,000.00).

 Script Examples

 The following scripts show various ways the function can be used:

 [Prospect.ReservedQuoteAdditionalRecurring("GB","Currency")]

 Displays the total amount of any additional recurring charges with a charge type of GB associated with a prospect's reserved rent quote with the amount formatted as currency.

 [Prospect.ReservedQuoteAdditionalRecurring("","Currency")]

 Displays the total amount of any additional recurring charges associated with a prospect's reserved rent quote with the amount formatted as currency.
