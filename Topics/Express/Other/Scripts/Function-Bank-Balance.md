# Bank Balance Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Bank-Balance.htm

This function displays the total bank balance of all active ownerships of the selected owner and property as of a specified date. Active ownerships are determined by the Contract Start and Contract End dates on the owner's Ownership pop-up. Optionally, a parameter allows the balances of inactive ownerships to be included.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Owner

 [Owner().BankBalance()]

 Displays information found on the owner's Checks page.

 Primary Owner

 [Property().PrimaryOwner.BankBalance()]

 Displays information found on the owner's Checks page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [BankBalance( "FromDate" , "IsIncludeInactiveContracts" )]

 FromDate

 Specify the date on or after which to examine bank balances. If no date is specified, the function uses today's date.

 [BankBalance("1/1/ 2026 ")]

 Displays the total bank balance of the owner's ownerships active as of January 1, 2026 .

 IsIncludeInactiveContracts

 Specify whether to include the bank balances of inactive ownerships. By default, True is used, meaning both active and inactive bank balances are calculated. False means only active ownerships are calculated.

 [BankBalance("","False")]

 Displays the total bank balance of only active ownerships as of today.

 Script Examples

 The following scripts show various ways the function can be used:

 [Owner().BankBalance()]

 Displays the total bank balance of active ownerships of the current owner as of today.

 [Property().PrimaryOwner.BankBalance()]

 Displays the total bank balance of active ownerships of the primary owner on the current property's Owners tile as of today.

 [Owner().BankBalance("1/1/ 2026 ","true")]

 Displays the total bank balance of active and inactive ownerships of the current owner as of January 1, 2026 .

 [Property().Owner(1).BankBalance()]

 Displays the total bank balance of active ownerships of the first additional owner alphabetically for the current property as of today.

 [Property(102).Owner().BankBalance()]

 Displays the total bank balance of active ownerships of the first owner alphabetically of the property with the system generated account ID number 102 as of today.
