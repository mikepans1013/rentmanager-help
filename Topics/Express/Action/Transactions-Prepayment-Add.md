# Add a Prepayment

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Transactions-Prepayment-Add.htm

If a tenant or prospect makes a payment before a corresponding charge is posted to their account, you can record it as a prepayment, which applies automatically to future charges. For example, if a tenant pays rent a month early, or if a prospect pays an application fee before you post the charge, you can record a prepayment to track these payments.

 You add prepayments the same way as regular payments, with the addition of specifying how the prepayment is allocated. Prepayments can be allocated toward specific future charges or left unallocated to cover any future charges. If a prospect or tenant makes a payment that exceeds the open charges on their account, it can also be recorded as overpayment when you add the prepayment to their account.

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View

 Prospects
 View

 Receivables
 Tenant transactions
 Add

 Take tenant payments
 Enabled

 For more information, refer to Control User Access .

 To add a prepayment or overpayment to a tenant or prospect account, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Payments arrow_forward Receive Payment .

 -
 In the Receive Payments pop-up, choose a tenant or prospect account by making selections in the following fields:

 Field
 Description

 Properties

 Limit the results in the Tenant field to display only tenants and/or prospects at the selected properties.

 Status

 Limit the results in the Tenant field to display only tenants and/or prospects with the selected account status(es). Prospects display only if the Prospect option is checked in this field.

 Tenant

 Enter the name, unit, or account number of the tenant or prospect account from whom you are receiving the payment.

 After you select a tenant or prospect, the account scoreboard displays at the top of the pop-up, and the other sections of the pop-up can now be edited.

 -
 In the Payment Info section, enter the following information:

 Field
 Description

 Date

 The date on which the payment posts to the account.

 Reference #

 The following forms of payment to describe the transaction are available to select:

 Cash

 Record a CashPay payment.

 MO

 Record a money order payment.

 CC

 Record a credit card payment.

 Check

 Manually type the check number into the Reference # field to record a check payment.

 More Information

 If, in the Payment Summary section, the Process via ePay option is selected, this field displays ePay and cannot be edited.

 Amount

 The amount of the prepayment. If the number entered in the Amount field exceeds the current open charges on the account, the Prepay Allocations pop-up displays after you save the payment.

 Memo

 A comment describing or explaining the prepayment. The comment displays on the tenant or prospect's View Transactions pop-up in Rent Manager and on the Transactions page in Tenant Web Access , as well as on reports such as tenant statements.

 -
 If applicable, in the Payment Summary section, check View Receipt to generate a PDF export of the payment receipt, and/or check Process via ePay to process the payment through your ePay provider.

 -
 Click Add Payment .

 -
 In the Initial Prepay Unit field, select the unit or rentable asset that this prepayment is associated with. If the tenant has multiple leases, or if the prospect has multiple reserved units, choose the unit to be the first unit that the prepayment applies to.

 More Information

 If Process via ePay is unchecked and the unit or rentable asset lease was already chosen in the Payment Info section, this field is unavailable and the Restrict automatic allocations to the selected Unit option is automatically selected.

 -
 If the tenant has multiple leases, or if the prospect has multiple reserved units, check Restrict automatic allocations to the selected Unit to apply the future payment allocations to only the unit selected in the Initial Prepay Unit field.

 -
 If you want the prepayment to be applied to future charges of specific charge types, in the row(s) for the charge type(s), add the Amount you want to allocate. You can allocate the prepayment to multiple charge types, as long as the total amount allocated does not exceed the payment amount available.

 More Information

 If you manually process a payment that exceeds the open charges on a tenant or prospect's account, this is considered to be an overpayment. For example, if a tenant has open charges totaling $1,200 and makes a payment of $1,500, there is an overpayment of $300. You can then opt to preallocate the remaining $300 to specific charge types.

 If a Tenant Web Access (TWA) user makes an online payment that exceeds the open charges on their account, any excess amount is automatically applied to the next open charge. Online payments cannot be preallocated to specific charge types, and must be manually allocated to individual charges. For more information, refer to Clear Transaction Allocations and Apply Credits to Open Charges .

 -
 If you allocated the prepayment to specific charge types, click Allocate . Otherwise, click Do Not Allocate .
The Prepay Allocations pop-up closes and the prepayment applies to future charges the next time they post to the account.

 More Information

 After the prepayment or overpayment is added, the Prepay Unit field displays on the Payment Details page, indicating the unit the allocations are associated with.
