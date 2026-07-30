# Quote Count Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Quote-Count.htm

The QuoteCount function displays the number of rent quotes linked to a prospect account.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Prospect

 [Prospect.QuoteCount()]

 Displays the number of rent quotes associated with the prospect.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Prospect.QuoteList( "ExcludeExpired" )]

 ExcludeExpired

 Specify True to count only active rent quotes. Specify False to count all rent quotes. If no parameter is specified, all rent quotes are counted.

 [Prospect.QuoteCount(False)]

 Displays the total number of rent quotes associated with the prospect.

 Script Examples

 The following scripts show various ways the function can be used:

 [Prospect.QuoteCount()]

 Displays the total number of active and expired rent quotes associated with the prospect.

 [Prospect.QuoteCount(True)]

 Displays the number of active rent quotes associated with the prospect.
