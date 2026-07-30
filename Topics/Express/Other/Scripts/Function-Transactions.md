# Transactions Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Transactions.htm

This function displays each linked transaction within a specified date range.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Lease

 [Tenant().Lease().Transactions()]

 Displays information found on the lease holder's Transactions page.

 Owner

 [Owner().Transactions()]

 Displays information found on the owner's Management Company page.

 PrimaryOwner

 [ Class(). PrimaryOwner.Transactions()]

 Displays information found on the primary owner's Management Company page.

 Tenant

 [Tenant().Transactions()]

 Displays information found on the tenant's Transactions page.

 Reservation

 [ Class(). Reservation(ReservationCount - 1).Transactions]

 Displays a list of charges, payments, and transactions, found on the most recent reservation.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Transactions( "FromDate" , "ToDate" , "Format" )]

 FromDate

 Specify the date on or after which to examine transactions. If no date is specified, the function uses the beginning of time.

 [Transactions("7/15/ 2026 ")]

 Displays a list of all transaction data from July 15, 2026 to the end of time.

 ToDate

 Specify the date on or before which to examine transactions. If no date is specified, the function uses the end of time.

 [Transactions("","11/30/ 2026 ")]

 Displays a list of all transaction data from the beginning of time to November 30, 2026 .

 Format

 List details of each transaction using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays a list of the dates, descriptions, and amounts of the transactions, separated by tabs:

 "$_Date\t$_Description\t$_Amount\n"

 Variables

 The following variables may be used in the Format parameter.

 Variable
 Description

 $_Amount

 Displays the amount of the transaction.

 $_ChargeType

 Displays the shortened charge type name.

 $_ChargeTypeDescription

 Displays the charge type description.

 $_Comment

 Displays the Comment entered on the transaction.

 $_Comment25

 Displays only the first twenty-five characters of the Comment entered on the transaction.

 $_Date

 Displays the date the transaction was posted.

 $_Description

 Displays the text in the transaction’s Description field.

 $_Reference

 Displays the Reference entered on the transaction.

 Transactions("01/01/ 2026 ","","$_Description\t$_Amount\n")

 Displays a new line with a customized list of the description and amount, separated by a tab, for each transaction from January 1, 2026 , to the end of time.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Transactions()]

 Displays a new line with Date , Description , and Amount separated by tabs for each transaction linked to the current tenant.

 [Tenant().Lease().Transactions()]

 Displays a new line with Date , Description , and Amount separated by tabs for each transaction linked to the first lease listed for the current tenant.

 [Owner().Transactions("1/1/ 2026 ",”1/31/ 2026 ”)]

 Displays a new line with Date , Description , and Amount separated by tabs for each transaction that was posted to the current owner from January 1, 2026 , to January 31, 2026 .

 [Tenant().Lease().Transactions("","","$_Date\t$_Amount\t$_Description\n")]

 Displays a new line with a customized list of the date, amount, and description for each transaction that was posted to the first lease listed for the current tenant.

 The output displays as shown below:

 [Tenant().Reservation(ReservationCount - 1).Transactions]

 Displays a list of charges, credits, and payments linked to the guest for the most recent reservation.

 Displays a new line with the default formatted text string (date, description, and amount separated by tabs) for each transaction linked to the most recent reservation for the guest.
