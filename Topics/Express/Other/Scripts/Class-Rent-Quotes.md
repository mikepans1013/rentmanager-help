# Rent Quotes Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Rent-Quotes.htm

The RentQuotes class examines rental quote information on a prospect account and is preceded by the Prospect class.

 Example

 [Prospect.RentQuotes().DateQuoted]

 Result

 Displays the date that the prospect's rent quote was created.

 Class Parameter

 This class can be passed a single, optional parameter: an index.

 Index

 An index allows you to return information about a specific rent quote on an account by using a number to identify each quote listed. For example, if there are three quotes listed on a prospect's account, they are referenced by indexes 0, 1, and 2. You can specify which quote you want Rent Manager to return information about by referencing an index in your script. If no index is specified, Rent Manager defaults to an index of 0, which represents the first quote in the prospect's Rent Quotes tile.

 [Prospect.RentQuotes(1).LeaseTerm]

 Displays the lease term of the second rent quote listed on the prospect's account.

 [Prospect.RentQuotes(2).ExpirationDate]

 Displays the expiration date of the third rent quote listed on the prospect's account.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Function
 Description

 Additional Recurring

 [Prospect.RentQuotes().AdditionalRecurring]

 Displays the total of all selected recurring charges in the rent quote and any included other rentable items (ORIs), excluding the Rent amount.

 Date Quoted

 [Prospect.RentQuotes().DateQuoted]

 Displays the date the rent quote was created.

 Expiration Date

 [Prospect.RentQuotes().ExpirationDate]

 Displays the date the rent quote expired or is set to expire.

 Expired

 [Prospect.RentQuotes().Expired]

 Displays True if the rent quote has passed its expiration date. Otherwise, displays False .

 Lease Term

 [Prospect.RentQuotes().LeaseTerm]

 Displays the duration of the lease offered for the rent quote.

 Move In Date

 [Prospect.RentQuotes().MoveInDate]

 Displays the Move In date for the rent quote.

 One-Time Charge Amount

 [Prospect.RentQuotes().OneTimeChargeAmount]

 Displays the total amount of all one-time charges in the rent quote.

 One-Time Charge Count

 [Prospect.RentQuotes().OneTimeChargeCount]

 Displays the number of one-time charges in the rent quote.

 One-Time Charges List

 [Prospect.RentQuotes().OneTimeChargesList]

 Displays a list with the charge type and amount of all one-time charges in the rent quote.

 ORI Property

 [Prospect.RentQuotes().ORIProperty()]

 Displays the name of the property associated with the other rentable item (ORI) unit on the rent quote.

 ORI Unit

 [Prospect.RentQuotes().ORIUnit()]

 Displays the unit name of the other rentable item (ORI) associated with the rent quote.

 Recurring Charge Count

 [Prospect.RentQuotes().RecurringChargeCount]

 Displays the number of selected recurring charges in the rent quote.

 Recurring Charges List

 [Prospect().RentQuotes().RecurringChargesList()]

 Displays information found on the prospect's Rent Quotes tile.

 Rent

 [Prospect.RentQuotes().Rent]
Displays the dollar amount of the rent quote.

 Rent Quote Property

 [Prospect.RentQuotes().RentQuoteProperty]

 Displays the property that the prospect received the rent quote for.

 Rent Quote Unit

 [Prospect.RentQuotes().RentQuoteUnit]

 Displays the unit that the prospect received the rent quote for.

 Reserved

 [Prospect.RentQuotes().Reserved]

 Displays True if a unit is reserved in association with this rent quote. Otherwise, displays False .
