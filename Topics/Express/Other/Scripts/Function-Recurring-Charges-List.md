# Recurring Charges List Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Recurring-Charges-List.htm

This function displays a list of the recurring charges from the tenant's most recent lease renewal offer or from a prospect's most recent rent quote.

 The default output of the function when used in the Renewal Offer class displays below. The Format parameter can be used to customize this output, as shown in the last example in this topic.

 The default output of the function when used in the Rent Quotes class displays below.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Renewal Offer

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).RecurringChargesList()]

 Displays information found in the tenant's Renewal Offer Information page.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Lease.LeaseRenewalOfferCount() - 1) . This allows you to return data for the most recent lease renewal offer created for the tenant.

 Rent Quotes

 [Prospect().RentQuotes().RecurringChargesList()]
Displays information found on the prospect's Rent Quotes tile.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 Format

 [RecurringChargesList( "Format" )]

 More Information

 The Format parameter is available for this function only when used in the Renewal Offer class.

 List details of each recurring charge using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays a list of the charge types, amounts, dates, and comments of the recurring charges, separated by tabs:

 "\n$_ChargeType\t$_Amount\t$_FromDate\t$_ToDate\t$_Comment"

 Variables

 The following variables may be used in the Format parameter:

 Variable
 Description

 $_ChargeType

 Displays the shortened charge type name.

 $_Amount

 Displays the amount of the recurring charge.

 $_FromDate

 Displays the start date on which the recurring charge becomes active.

 $_ToDate

 Displays the end date on which the recurring charge ends.

 $_Comment

 Displays the Comment entered on the recurring charge.

 $_ChargeTypeDescription

 Displays the description of the recurring charge's charge type.

 $_Level

 Displays the level of the recurring charge (e.g., Property ).

 [RecurringChargesList("\t$_Amount\t$_ChargeType\n")]

 Displays a new line with a customized list of the Amount and Charge Type for each recurring charge.

 Currency

 [RecurringChargesList( "Currency" )]

 More Information

 The Currency parameter is only available for this function when used in the Rent Quotes class.

 [RecurringChargesList("Currency")]

 Display the recurring charge amounts with currency sign and thousands separator (comma) and two digits to the right of the decimal (e.g., $2000.00).

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).RecurringChargesList()]

 Display the recurring charges established in the tenant's most recent renewal offer.

 [Tenant().Lease().RenewalOffer().RecurringChargesList()]

 Display the list of recurring charges from the tenant's oldest lease renewal offer.

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).RecurringChargesList("$_ChargeType\t$_Amount\n")]

 Display only the charge type and amount—separated by a tab—of the recurring charges established in the tenant's most recent renewal offer. A line break is also added after each recurring charge and amount combination.

 The output displays as shown below:

 [Prospect().RentQuotes().RecurringChargesList()]

 Display the list of recurring charges from the prospects oldest rent quote.
