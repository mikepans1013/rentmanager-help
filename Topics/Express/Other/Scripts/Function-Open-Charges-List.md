# Open Charges List Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Open-Charges-List.htm

This function displays open (unpaid) charges of selected charge type(s) as of a specified date for the selected class.

 Each charge can be displayed on a separate line and shown as a string of one or more specified charge data fields. If no fields are specified in the Format parameter, the results display by default the charge date, description, and amount separated by spaces. Additional variables are available to display on each line.

 The default output of the function displays below. The Format parameter can be used to customize this output, as shown in the last example in this topic.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Lease

 [Tenant().Lease().OpenChargesList()]

 Displays information found on the tenant's View Transactions pop-up associated with a specific lease.

 Owner

 [Owner().OpenChargesList()]

 Displays information found on the owner's Management Company pop-up.

 PrimaryOwner

 [ Class(). PrimaryOwner.OpenChargesList()]

 Displays information found on the primary owner's Management Company pop-up.

 Prospect

 [Prospect().OpenChargesList()]

 Displays information found on the prospect's View Transactions pop-up.

 Tenant

 [Tenant().OpenChargesList()]

 Displays information found on the tenant's View Transactions pop-up.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [OpenChargesList( "ChargesAsOfDate" , "ChargeType" , "Format" , "DaysToCheckPrior" , "AsOfDate" )]

 ChargesAsOfDate

 Specify the date on or before which to examine posted open charges. If no date is specified, today's date is used by default.

 [OpenChargesList("5/31/ 2026 ")]

 Retrieves the list of open charges as of May 31, 2026 .

 More Information

 A date must be specified for this parameter in order for the DaysToCheckPrior parameter value to be applied.

 ChargeType

 Specify the short name code of the charge type(s) to examine; each charge type should be separated by a comma. If no parameter is specified, the function examines all charge types.

 [OpenChargesList("","LC,APP")]

 Displays the open charges for the Late Charge (LC) and Application FEE (APP) charge types.

 Format

 List details of each open charge using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays the date, description, and amount variables separated by tabs:

 "\t$_Date\t$_Description\t$_Amount\n"

 Variables

 The following variables may be used in the Format parameter.

 Variable
 Description

 $_Amount

 Displays the amount of the open charge.

 $_AmountLeft

 Displays the amount of the open charge left after payment allocation.

 $_AmountPaid

 Displays the amount of the open charge that has been paid/allocated.

 $_ChargeType

 Displays the shortened charge type name.

 $_ChargeTypeDescription

 Displays the charge type Description .

 $_Comment

 Displays the Comment entered on the open charge.

 $_Comment25

 Displays the first 25 characters of the Comment entered on the open charge.

 $_Date

 Displays the date the open charge was posted.

 $_Description

 Displays the text in the open charge’s Description field.

 $_Reference

 Displays the Reference entered on the open charge.

 $_ShortDate

 Displays the open charge date in a shortened format (mm/dd/yy).

 DaysToCheckPrior

 Specify the number of days before ChargesAsOfDate to begin looking for open charges. This is used to calculate the equivalent of a ChargesFrom date. If no parameter is specified, the function defaults to 0 .

 [OpenChargesList("2/6/ 2026 ","","","5")]

 Retrieves the list of open charges that were posted from February 1, 2026 (which is 2/6/ 2026 – 5 days), to February 6, 2026 .

 More Information

 This parameter is applied only if a date value is provided for the ChargesAsOfDate parameter.

 If no value is specified for this parameter, the function returns open charges that were created on or before the ChargesAsOfDate.

 If a number greater than zero is specified, this function returns open charges that were created between the ChargesAsOfDate and the date resulting from ChargesAsOfDate – DaysToCheckPrior .

 AsOfDate

 Specify the date for which to retrieve the unpaid amount remaining on the charges posted on or before the specified date. If no date is specified, the current date is used. When the default is used, if a charge has been paid (even in the future), only the remaining balance displays as open.

 More Information

 For example, if you create a charge on 1/1/ 2026 and pay it off on 1/31/ 2026 , this charge shows as open if the AsOfDate is less than 1/31/ 2026 .

 If no AsOfDate is specified, the system considers there to be no evaluation date, meaning that payments with a date in the future are still considered.

 [OpenChargesList("","","","0","2/12/ 2026 ")]

 Evaluates the unpaid amount remaining on all charge types as of February 12, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().OpenChargesList()]

 Displays a list in default format for each open charge created as of today linked to the tenant.

 The output displays as shown below:

 [Tenant().Lease(1).OpenChargesList("","RC,LC")]

 Displays a list in default format for each open Rent Charge (RC) and Late Charge (LC) as of today linked to the tenant's first additional lease.

 [Owner().OpenChargesList("2/1/ 2026 ","","","31")]

 Displays a list in default format for each open charge created from January 1, 2026 , (which is 2/1/ 2026 − 31 days) to February 1, 2026 , linked to the owner's account.

 [Tenant().OpenChargesList("", "", "\t$_Date\t$_ChargeType\t$_Amount\t$_AmountPaid\t$_AmountLeft\t$_Comment\n")]

 Displays a new line with a customized list of the date, charge type, amount, amount paid, amount left, and comment for each open charge as of today linked to the tenant.

 The output displays as shown below:

 [Prospect.OpenChargesList("1/1/ 2026 ","RC")]

 Displays a list in default format for each open charge created on or before January 1, 2026 with the charge type RC for the associated prospect account.
