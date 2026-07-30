# Bill Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Bill-Details.htm

The Bill details page allows you to view and manage bill information and, when applicable, approve the bill for payment. From this page, you can track and pay one-time bills received from vendors, as well as bills to pay tenants and prospects. Additionally, you can track bills created to reimburse an owner if the owner paid expenses that are normally covered by their contract with your fee-based management company.

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 View bill register
 Enabled

 Payables
 Bills
 View, Edit

 For more information, refer to Control User Access .

 To view a bill's details, go to arrow_forward Payables arrow_forward Bills and select a bill from the list.

 Bill Information

 In this tile, the entity account, amount, term, bill date, and invoice number associated with the bill display.

 Field
 Description

 Amount

 The total dollar amount expensed on the bill.

 Alternatively, if you have multiple line items on the bill, click to populate the total of all fields in the line items' Amount column.

 Bill Date

 The date on which the bill was issued. If this bill reflects a physical bill you received, select the date stated on the real-world bill itself.

 Due Date

 The date by which the bill must be paid. This date automatically populates based on the selected bill Terms and the Bill Date entered. Alternatively, manually enter a custom due date.

 Invoice #

 If applicable, the bill's reference number or invoice number.

 Memo

 An optional message or reference for the bill.

 To select a memorized comment to use as the memo, click .

 Post Date

 The date on which this bill expenses the general ledger (GL) account on an accrual accounting basis. The field defaults to the same date as the Bill Date .

 Property

 The property to be expensed when the bill is paid. If more than one property is being expensed on the bill, select <Multiple properties> and manually select the property for each line item.

 This field displays only if Vendor or Owner is selected for the bill recipient.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Terms

 The amount of time given before the bill is considered due. The bill term determines the bill's Due Date based on the entered Bill Date .

 For example, a bill term of Immediately would set both fields to the same date, while NET 15 would set the due date for fifteen days after the bill date. The options available depend on the bill terms that have been created for your Rent Manager database. For more information, refer to Bill Terms (Page) .

 Vendor
Owner
Tenant
Prospect

 The Vendor , Owner , Prospect , or Tenant account that receives the payment for the bill.

 If the selected account has any past bills in Rent Manager , you can click Fill from bill history to automatically copy information from the past bill you select and import it into the new bill. The information imported includes the Amount , Default Bank , and any line items on the bill.

 Payment & Attachments

 In this tile, information about the bank account, method of payment, files, and service issues associated with the bill display.

 Field
 Description

 Attachments

 Any related images or documents from your network or computer to the bill in Rent Manager , such as a digital copy of the original bill.

 To upload a file, click Upload or to paste an image from your clipboard, click Paste . Once a file has been attached to a bill, you can click the file name to view it.

 Default Bank

 The bank from which this bill payment is deducted. Select <Property Default> to deduct the payment from the bank selected as the Default Bank account on the property's details page.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 Links

 If applicable, the purchase order and/or work order linked to this bill. If no purchase or work order is linked, you can click Link Existing Purchase Order or Link Work Order Items to add one. For more information, refer to Add Links to a Bill .

 Payment Method

 The method by which the bill is paid. The following payment methods are available:

 ACH

 An automated transfer handled by your bank that uses the automated clearing house network for additional security.

 AvidPay

 An automatic bill payment integration provided by AvidXchange using the Post AvidPay tool in Rent Manager . For more information, refer to Post AvidPay (Page) .

 Related Preferences

 This option displays only if AvidPay is enabled in system preferences and you have an AvidXchange account set up. For more information, refer to AvidXchange (System Preferences) .

 Check

 A physically-routed payment drawn against deposited funds from the payer to the payee.

 Debit

 A preauthorized payment which allows a bank to pay a certain amount directly to a bank or company at regular intervals.

 eChecks

 A digital check that is delivered to the payee via email, at which point the payee can retrieve and print the check.

 Related Preferences

 This option displays only if Enable eChecks is enabled in system preferences and you have an eChecks account set up. For more information, refer to eChecks (System Preferences) .

 EFT

 An electronic funds transfer for any type of digital payment including, but not limited to, a credit or debit card.

 ePay

 An integrated service offered by Zego to automate electronic funds transfer.

 Related Preferences

 This option displays only if Enable ePay is checked in the ePay section of system preferences. For more information, refer to General ePay (System Preferences) .

 Expenses/Open Credits

 Vendor and owner bills have an expenses section where line items are expensed. Vendors linked to master meter bill have a master meter expenses section where utility items are expensed. Tenant and prospect bills have an open credits section, where credits that may be refunded back display.

 To have Rent Manager automatically calculate and distribute the total bill amount between properties, units, or GL accounts into individual line items, click Disburse Amount . To add any additional line items, click Add Detail . To remove all line items on an unpaid bill, click Clear Allocations .

 Expenses

 In the expenses section, multiple line items can be expensed, with one item per row.

 Column
 Description

 1099

 Check if the expense should be reported as a 1099 expense.

 Amount

 The portion of the overall expense amount allocated to this line item.

 Billable

 If this is a billable expense that should be covered by a tenant or owner, check Billable to create an invoice to bill that owner or tenant so they can reimburse you for the expense. Once checked, the Create Invoice icon, Billable To fields, and Markup fields become available.

 More Information

 Click to create an invoice directly associated with this bill. The information entered into the Billable To and Markup columns automatically populates in the invoice. Alternatively, if more than one line item is billable, click Create Invoices to add invoices for each item. For more information, refer to Invoice Details (Page) .

 Billable To

 First, select the Tenant or Owner tab to determine the type of account receiving the invoice. Then in the field below, select the owner or tenant account that will pay for this expense line item.

 Markup

 If applicable, the amount added to the expense's cost to help cover overhead and profit. Enter a number to charge a flat amount (e.g., 110.00 , 55.75 ) or a percent amount if the markup is a percentage of the line item's Amount (e.g., 40% , 30.5% ).

 Invoice Amount = Line Item Amount + Markup

 For example, if the line item's Amount is 400 and you enter a markup of 50 , the invoice created bills the account for $450. If you enter a markup of 25% , the invoice bills the account for $500, since 25% of four hundred is one hundred.

 Expense Account

 The general ledger (GL) account used to track the expense.

 Job

 The job associated with the expense. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Memo

 An optional message for this line item.

 To select a memorized comment to use as the memo, click .

 Property

 The property expensed by the vendor or owner for the line item. If a property is selected in the Bill Information tile, this column is read-only.

 Unit

 The specific unit expensed by the vendor or owner.

 Master Meter Expenses

 In the master meter expenses section, multiple line items can be added to account for each property and utility associated with the vendor. Review or enter the following information:

 Column
 Description

 Amount

 The portion of the overall utility expense amount allocated to this property.

 Billing Period

 The month and year that the meter reading is billed for.

 More Information

 When adding a master meter bill for the first time, the Billing Period is based on the read date. If the read date is in the first 15 days of the month, the month from the read date displays. If read date is in the last 15 days of the month, the following month displays.

 When adding subsequent bills for a master meter, the Billing Period populates with the month following the most recent posted billing period. For example, if the most recent billing period was January 2026 , the billing period for the next bill automatically displays February 2026 .

 Consumption

 The utility usage for the unit of measurement of the meter.

 Expense Account

 The general ledger (GL) account from your chart of accounts to track this expense. By default, the Expense Account selected for the property on the utility's Master Meters tile displays.

 Memo

 An optional message for this expense item.

 To select a memorized comment to use as the memo, click .

 Property

 The short name of the property linked to the utility line item. If a property is selected in the Bill Information tile, this column is read-only.

 Read Date

 The date on which the meter reading was taken.

 Utility

 The utility being billed (e.g., Water or Electricity ). Only utilities that have a master meter enabled for the selected property display.

 More Information

 If the master meter associated with this bill uses the ratio utility billing system (RUBS) for expenses, you can click Post RUBS at the top of the page. For more information, refer to Post a RUBS Master Meter Bill . If RUBS was already posted for the bill, you can roll back the posting by clicking Rollback RUBS .

 Open Credits

 Open credits on the selected tenant or prospect account display in this section. Review or enter the following information:

 Column
 Description

 Allocated Amount

 The amount you intend to refund to the tenant or prospect.

 Date

 The date of the open credit.

 Description

 The description and charge type of the credit.

 Open Amount

 The current amount of the credit.

 Property

 The property associated with the open credit.

 Unit

 The unit associated with the open credit.

 If there is not an existing credit on the selected account, on the action bar to the right, click arrow_forward Add Credit .
