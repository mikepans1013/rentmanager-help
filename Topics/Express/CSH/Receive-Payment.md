# Receive Payment (Pop-Up)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Receive-Payment.htm

After a tenant or prospect makes a payment in the real world, this payment can be entered in Rent Manager using the Receive Payment pop-up. This allows you to record payments and prepayments and apply credits to the selected tenant or prospect account. You can receive payments from only one tenant or prospect account at a time using this pop-up, but you can add each payment to payment batches to process several payments at once.

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
 Take tenant payments
 Enabled

 For more information, refer to Control User Access .

 To access the Receive Payment pop-up, go to arrow_forward Receivables arrow_forward Payments arrow_forward Receive Payment .

 At the top of the pop-up, use the Properties , Status , and Tenant fields to select a tenant or prospect account. The page updates with information for the chosen account, organized into the following sections.

 Payment Info

 The Payment Info section includes fields to enter details about the tenant or prospect payment. Each field is described below.

 Field
 Description

 Amount

 The full dollar amount of the payment you received.

 Date

 The date the tenant is making the payment.

 Memo

 A brief comment about this payment, such as how it was applied. Payment memos display in the Comment column of the prospect or tenant's View Transactions pop-up.

 Reference

 The payment method of this payment. Select a payment method, such as Cash , MO (money order), or CC (credit card), or enter another method such as a check number or ACH .

 Related Preferences

 You can customize the list of available payment methods in system preferences. For more information, refer to Payment Options (System Preferences) .

 More Information

 If, in the Payment Summary section, the Process via ePay option is selected, this field displays ePay and cannot be edited.

 Open Charges

 The Open Charges section displays the tenant's current open charges. In the section header, the following options are available.

 Option
 Description

 Account Group Items

 The open charges for all tenants in the account group display. An additional Account column specifies the tenant associated with each open charge.

 This option displays only for tenant accounts that are part of an account group. For more information, refer to Manage Account Groups .

 Collapse Invoices

 A single line item displays for the combined total of items on an invoice. Otherwise, a separate line for each item on the invoice displays.

 The columns that display in this section are described below.

 Column
 Description

 Amount Due

 If applicable, the dollar amount due for the charge after any partial payments are applied.

 Amount Paid

 If a partial payment is allocated to the charge, the dollar amount of that partial payment displays.

 Current Payment

 The dollar amount you are currently applying to the charge.

 Date

 The date the charge, credit, or payment posted to the account. Past due dates display in red.

 Description

 The description as entered on the associated charge type for the transaction.

 New Late Fees

 If the tenant or prospect is charged late fees on the payment in the row, enter the late fee, in whole dollar amounts, in this field.

 Original Amount

 The total dollar amount of the charge before any partial payments are applied.

 Pay?

 A displays if the charge is currently selected to be paid.

 Reference

 A unique number or phrase to help further identify the charge. If the charge is linked to an invoice, the invoice number displays.

 Payment Summary

 The Payment Summary section includes additional payment options and an overview of the payment's information. Each field is described below.

 Field
 Description

 Amount Due

 If applicable, the total dollar amount due for all open charges after any partial payments are applied.

 Amount Paid

 If partial payments are allocated to any charges, the total dollar amount of those partial payments displays.

 Current Payment

 The total dollar amount of the payment as entered in the Payment Info section in the Amount field.

 Original Amount

 The total dollar amount of all open charges before any partial payments are applied.

 Overpayment

 If the amount of the payment exceeds the total Amount Due , the exceeded amount displays. This field displays only when making a payment for a positive amount. The overpaid amount can then be applied as prepay allocations in the Prepay Allocations pop-up or left to be applied as a credit at a later time.

 Overpayment = Amount - Amount Due

 Payment Notes

 Any history/note items with the Show on payments tab option enabled display. If there are no items with this option checked, this field does not display.

 Process via ePay

 Process the payment as an ePay payment. This option is available only if the prospect or tenant account is set up for ePay . When this option is checked, the Reference field is automatically updated to ePay and cannot be edited.

 View Receipt

 Prints a receipt for the tenant or prospect after accepting the payment.
