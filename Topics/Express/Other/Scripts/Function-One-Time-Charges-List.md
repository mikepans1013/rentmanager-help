# One Time Charges List Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-One-Time-Charges-List.htm

The OneTimeChargesList function displays a list of one time charges associated with a rent quote, including the charge type and amount.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Rent Quotes

 [Prospect.RentQuotes().OneTimeChargesList()]

 Displays a list of one-time charges associated with a prospect's rent quote.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Prospect.RentQuotes.OneTimeChargesList( "Currency" )]

 Currency

 Determine if the amount that displays should show as a currency value.

 [OneTimeChargesList("Currency")]

 Display the one-time charge amounts with a currency symbol, comma separators, and two digits to the right of a decimal (e.g., $2,000.00).

 Script Examples

 The following scripts show various ways the function can be used:

 [Prospect.RentQuotes.OneTimeChargesList("Currency")]

 Displays a new line for each one-time charge associated with the first rent quote listed on the prospect's account and the amounts formatted as currency.

 [Prospect.RentQuotes(1).OneTimeChargesList()]

 Displays a new line for each one-time charge associated with the second rent quote listed on the prospect's account.
