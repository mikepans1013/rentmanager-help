# Quote List Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Quote-List.htm

The QuoteList function displays rent quote information linked to a prospect account, including the property, unit, lease term, and amount.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Prospect

 [Prospect.QuoteList()]

 Displays a list of rent quotes associated with the prospect.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Prospect.QuoteList( "ExcludeExpired" , "Format" , "Index" , "Currency" )]

 ExcludeExpired

 Specify True to examine only active rent quotes. Specify False to examine all rent quotes. If no parameter is specified, all rent quotes are examined.

 [Prospect.QuoteList(True)]

 Displays information about active rent quotes associated with the prospect.

 Format

 List details of each rent quote using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays the property, unit, date the quote was created, lease term, amount, and expiration date variables separated by tabs:

 "\t$_Property\t$_Unit\t$_DateQuoted\t$_LeaseTerm\t$_Rent\t$_AdditionalRecurring\t$_TotalRecurring\t$_ExpirationDate"

 Variables

 The following variables may be used in the Format parameter.

 Variable
 Description

 $_AdditionalRecurring

 Displays the dollar amount of any non rent amount recurring charges on the rent quote.

 $_DateQuoted

 Displays the date the quote was created.

 $_ExpirationDate

 Displays the date the quote expired or is set to expire.

 $_LeaseTerm

 Displays the lease term offered for the quote.

 $_Property

 Displays the property associated with the quote.

 $_Rent

 Displays the dollar amount on the associated rent quote.

 $_TotalRecurring

 Displays the total dollar amount of the rent recurring charge and any additional recurring charges on the rent quote.

 $_Unit

 Displays the unit associated with the quote.

 Index

 An index allows you to return information about a specific rent quote by using a number to identify each rent quote listed. For example, if there are three rent quotes listed, they are referenced by indexes 0, 1, and 2. You can specify which rent quote you want Rent Manager to return information about by referencing an index in your script. If no index is specified, all rent quotes are listed.

 Currency

 Determine if the amounts that display should show as a currency value.

 [QuoteList("","","","Currency")]

 Display the amounts in the quote list with a currency symbol, comma separators, and two digits to the right of a decimal (e.g., $1,650.00).

 Script Examples

 The following scripts show various ways the function can be used:

 [Prospect.QuoteList(False)]

 Displays information about all rent quotes associated with the prospect in the default formatting.

 [Prospect.QuoteList(False,"\t$_Unit\t$_DateQuoted\t$_Rent\n")]

 Displays a new line with a customized list of the unit name, quote creation date, and rent amount offered (separated by tabs) for all rent quotes associated with the prospect.

 [Prospect.QuoteList(True,"\t$_DateQuoted\t$_LeaseTerm\t$_ExpirationDate\n")]

 Displays a new line with a customized list of the quote creation date, lease term, and expiration date (separated by tabs) for active rent quotes associated with the prospect.
