# Payments Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Payments.htm

This function displays a list of payments from the selected tenant. The function creates a separate line for each payment that includes the date and amount of each transaction.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Lease

 [Tenant().Lease().Payments()]

 Displays information from the tenant's View Transactions pop-up for the specified lease.

 Owner

 [Owner().Payments()]

 Displays information from the owner's Management Company pop-up.

 PrimaryOwner

 [ Class(). PrimaryOwner.Payments()]

 Displays information from the primary owner's Management Company pop-up.

 Tenant

 [Tenant().Payments()]

 Displays information from the tenant's View Transactions pop-up.

 Reservation

 [ Class(). Reservation(ReservationCount - 1).Payments]

 Displays a list of payments found on the most recent reservation's Transaction tab.The function creates a separate line for each payment that includes the date and amount of each transaction.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Payments( "FromDate" , "ToDate" , "Format" )]

 FromDate

 Specify the date on or after which to examine payments made. If no date is specified, the function uses the beginning of time.

 [Payments("1/1/ 2026 ")]

 Displays the number of payments made on or after January 1, 2026 .

 ToDate

 Specify the date on or before which to examine payments made. If no date is specified, the function uses the end of time.

 [Payments("","6/1/ 2026 ")]

 Displays the number of payments made on or before June 1, 2026 .

 Format

 List details of each posted payment using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays a list of the dates, descriptions, and amounts of the payments, separated by tabs:

 "\t$_Date\t$_ChargeTypeDescription\t$_Amount\n"

 Variables

 The following variables may be used in the Format parameter:

 Variable
 Description

 $_Amount

 Displays the amount of the payment.

 $_ChargeType

 Displays the shortened charge type name if the payment is a credit.

 $_ChargeTypeDescription

 Displays the text in the charge type's Description field if the payment is a credit.

 $_Comment

 Displays the Comment entered on the payment.

 $_Date

 Displays the date the payment was posted.

 $_Description

 Displays the text in the transaction’s Description field if the payment is a credit.

 $_DepositNumber

 Displays the deposit number associated with the transaction.

 $_Reference

 Displays the Reference entered on the transaction.

 Payments("1/1/ 2026 ","","$_Comment\t$_Amount\n")

 Displays a new line with a customized list of the comment and amount, separated by a tab, for each payment from January 1, 2026 to the end of time.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().Payments()]

 Displays the dates and amounts of every payment ever received from the selected tenant lease.

 [Owner().Payments("1/1/ 2026 ","12/31/ 2026 )"]

 Displays the dates and amounts of every payment received in 2026 from the owner.

 [Tenant().Payments("","8/1/ 2026 ","\t$_Date\t$_Comment\t$_Amount\t$_Reference\n")]

 Displays the dates, comments, amounts, and references of every payment received from the beginning of time up to August 1, 2026 from the tenant.

 The output displays as shown below:

 [Tenant().Reservation(ReservationCount - 1).Payments]

 Displays a list of payments made by the guest for the most recent reservation.
