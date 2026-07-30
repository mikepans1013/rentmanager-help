# Charges List Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Charges-List.htm

This function displays each charge linked to the selected account within a specified date range. Each charge can be displayed on a separate line and shown as a string of one or more specified charge data fields.

 The default output of the function displays below. The Format parameter can be used to customize this output, as shown in the last example in this topic.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Lease

 [Tenant().Lease().ChargesList()]

 Displays information from the tenant's View Transactions pop-up for the specified lease.

 Owner

 [Owner().ChargesList()]

 Displays information from the owner's Management Company pop-up.

 PrimaryOwner

 [ Class(). PrimaryOwner.ChargesList()]

 Displays information from the primary owner's Management Company pop-up.

 Tenant

 [Tenant().ChargesList()]

 Displays information from the tenant's View Transactions pop-up.

 Reservation

 [Tenant().Reservation(ReservationCount - 1).ChargeList()]

 Displays a list of charges found on the most recent reservation's Transaction tab.

 More Information

 For the Reservation class, the ChargesList function works the same as other classes but in the script syntax is written as the singular version ChargeList.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager will use default values.

 [ChargesList( "FromDate" , "ToDate" , "Format" )]

 FromDate

 Specify the date on or after which to examine charges posted. If no date is specified, the function uses the beginning of time.

 [ChargesList("1/1/ 2026 ")]

 Displays the charges posted on or after January 1, 2026 .

 ToDate

 Specify the date on or before which to examine charges posted. If no date is specified, the function uses the end of time.

 [ChargesList("","6/1/ 2026 ")]

 Displays the charges posted on or before June 1, 2026 .

 Format

 List details of each posted charge using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays a list of the dates, descriptions, and amounts of the charges, separated by tabs:

 "\t$_Date\t$_Description\t$_Amount\n"

 Variables

 The following variables may be used in the Format parameter:

 Variable
 Description

 $_Amount

 Displays the amount of the charge.

 $_ChargeType

 Displays the shortened charge type name.

 $_Comment

 Displays the Comment entered on the charge.

 $_Date

 Displays the date the charge was posted.

 $_Description

 Displays the text in the transaction’s Description field.

 $_Reference

 Displays the Reference entered on the transaction.

 ChargesList("","","\t$_Amount\t$_ChargeType\n")

 Displays a new line with a customized list of the Amount and Charge Type for each charge.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().ChargesList()]

 Displays a new line with the default formatted text string for each charge linked to the current tenant.

 [Owner().ChargesList("01/01/ 2026 ")]

 Displays a new line with the default formatted text string for each charge that was charged on or after January 1, 2026 to the current owner.

 [Tenant().Lease().ChargesList("01/01/ 2026 ",”01/31/ 2026 ”)]

 Displays a new line with the default formatted text string for each charge that was posted from January 1, 2026 to January 31, 2026 to the current tenant's first-listed lease.

 [Tenant().ChargesList("","","\t$_Date\t$_Amount\t$_ChargeType\t$_Comment\n")]

 Displays a new line with a customized list of the Date , Amount , Charge Type , and Comment for each charge that was charged to the current tenant.

 The output displays as shown below:

 [Tenant().Reservation(ReservationCount - 1).ChargeList]

 Displays a list of charges found on the most recent reservation's Transaction tab.
