# ORI Unit Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-ORI-Unit.htm

The ORIUnit function displays the name of the other rentable item (ORI) unit included in the prospect's rent quote. This is the name of the ORI unit itself, not the name of the rent quote's associated unit.

 Class
 Syntax

 Rent Quotes

 [Prospect.RentQuotes().ORIUnit()]

 Displays the unit name of the ORI associated with the rent quote.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Prospect.RentQuotes().ORIUnit( "Index" )]

 Index

 Select the ORI on the rent quote to examine. The first-listed ORI item on the rent quote has a value of 0 , the second-listed ORI item has an index value of 1 , and so on. If no Index parameter is specified, the index defaults to 0 .

 [ORIUnit(1)]

 Displays the unit name of the second-listed ORI item on the rent quote, as shown on the prospect's Rent Quotes tile.

 Script Examples

 The following scripts show various ways the function can be used:

 [Prospect().RentQuotes().ORIUnit(2)]

 Displays the unit name of the third-listed ORI item on the rent quote.

 [Prospect().RentQuotes(1).ORIUnit()]

 Displays the unit name of the first-listed ORI item on the prospect's second-listed rent quote.
