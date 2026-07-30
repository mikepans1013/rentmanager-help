# Additional Recurring Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Additional-Recurring.htm

The AdditionalRecurring function displays the total value for any additional recurring charges added to a prospect's active rent quote(s), with the ability to select which charge types are examined and if the amount displays as currency. This script evaluates recurring charges associated with any units and other rentable items (ORIs).

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Rent Quotes

 [Prospect.RentQuotes().AdditionalRecurring()]

 Displays the amount of additional recurring charges associated with a prospect's rent quote.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Prospect.RentQuotes().AdditionalRecurring( "ChargeType" , "Currency" )]

 ChargeType

 Specify the charge type(s) you wish to examine. If no charge types are specified, all charge types are examined. Each charge type should be separated by a comma.

 [AdditionalRecurring("RC,DP")]

 Displays the total amount of all additional recurring charges with a charge type of RC and DP associated with a prospect's rent quote.

 Currency

 Determine if the amount that displays should show as a currency value.

 [AdditionalRecurring("","Currency")]

 Display the total amount of all additional recurring charges associated with a prospect's rent quote with a currency symbol, comma separators, and two digits to the right of a decimal (e.g., $1,700.00).

 Script Examples

 The following scripts show various ways the function can be used:

 [Prospect.RentQuotes.AdditionalRecurring("PET","Currency")]

 Displays the total amount of all additional recurring charges with a charge type of PET associated with the first rent quote listed on the prospect's account and the amounts formatted as currency.

 [Prospect.RentQuotes(1).OneTimeChargeAmount("","Currency")]

 Displays the total amount of all additional recurring charges associated with the second rent quote listed on the prospect's account and the amounts formatted as currency.
