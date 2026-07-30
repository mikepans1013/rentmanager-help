# Balance Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Balance.htm

This function displays an account's balance as of a specified date.

 Classes that utilize this function and the location from which the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Lease

 [Lease().Balance()]

 Displays information from the selected lease as found on the tenant's Transactions tile.

 Owner

 [Owner().Balance]

 Displays information found on the owner's Mgmt Company pop-up.

 PrimaryOwner

 [ Class(). PrimaryOwner.Balance]

 Displays information found on the primary owner's Mgmt Company pop-up.

 Reservation

 [ Class(). Reservation().Balance]

 Displays information on the reservation's details page on the Transactions tab.

 Tenant

 [Tenant().Balance()]

 Displays information found on the tenant's Transactions pop-up.

 Vendor

 [Vendor().Balance()]

 Displays information found on the vendor's Transactions pop-up.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Balance( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the balance.

 If you do not enter a date, Rent Manager examines transactions from the beginning of time until the end of time.

 If you enter today's date, any transactions from the beginning of time up to and including that date are calculated as part of the balance. Future transactions entered on the account are not included.

 If you enter a future date, any transactions from the beginning of time up to and including that date are calculated as part of the balance.

 [Balance("1/1/ 2026 ")]

 Displays the account balance as of January 1, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Vendor().Balance()]

 Displays the balance of the vendor.

 [Tenant().Balance(" 7/21/2026 ")]

 Displays the balance of the tenant as of 7/21/2026 .

 [Tenant().Lease().Balance()]

 Displays the balance of the tenant's first lease.

 [Owner().Balance(" 7/21/2026 ")]

 Displays the balance of the owner as of 7/21/2026 .
