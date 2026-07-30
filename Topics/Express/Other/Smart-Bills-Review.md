# Review Smart Bills

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Smart-Bills-Review.htm

Rent Manager 's Smart Bills feature streamlines your invoice management process. With this feature, you can easily upload invoices via a PDF or image format, allowing AI to extract the relevant data and create draft transactions automatically. The Smart Bill Review pop-up allows you to review the details of the invoices your vendors have submitted. Additionally, vendors can send invoices in PDF format directly to a dedicated email inbox for seamless integration into the Smart Bills workflow.

 More Information

 This feature is licensed and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Smart Bills
 Add, View, Edit

 View all users' manually uploaded Smart Bills
 Enabled

 For more information, refer to Control User Access .

 Step 1: Upload and Select a Smart Bill to Review

 More Information

 For Smart Bills emailed in by vendors, only Smart Bills sent to inboxes for which you have access display. Your access to inboxes can be managed from the Manage Smart Bill Inboxes pop-up. For more information, refer to Manage Smart Bills Inboxes (Pop-Up) .

 To review an invoice on the Smart Bills page, do the following:

 -
 Go to arrow_forward Payables arrow_forward Bills arrow_forward Smart Bills .
The Smart Bills page displays.

 -
 If there are no Smart Bills to review, click to add a new invoice.

 -
 Select the invoice you wish to review from the list. Invoices that were manually uploaded or sent in via email from the vendor display in the list.

 Step 2: Review General Smart Bill Information

 The Bill Information tile displays basic details about the Smart Bill, including the associated property, vendor, dollar amount, and due date.

 Review the information in the following fields. If the field is highlighted in green, the information was taken from the invoice. If the field is highlighted in red, it requires information that was not taken from the invoice.

 Field
 Description

 Amount

 The total dollar amount expensed on the Smart Bill.

 Bill Date

 The date the bill was created as stated on the physical bill. If Rent Manager cannot locate a bill date, today's date automatically populates in a green field.

 Due Date

 The latest date this bill must be paid before payment is considered late.

 Invoice #

 If applicable, the bill's reference number or invoice number.

 Memo

 An optional message or reference for the bill that displays on certain reports that can be sent to vendors, such as Bill Worksheet .

 To select a memorized comment to use as the memo, click .

 Post Date

 The date the expense is added on the general ledger on an accrual accounting basis.

 Property

 The property associated with the Smart Bill. If multiple properties are expensed on the bill, select <Multiple properties> .

 Terms

 The specified amount of time given before a bill is considered due (e.g., Immediately , Net Month , 1st of the Month ) taken from the file when uploading the invoice. For more information, refer to Bill Terms (Page) .

 Vendor

 The vendor expensed on the Smart Bill. If Rent Manager cannot locate a matching vendor account, you can link the vendor name to an existing vendor account.

 More Information

 When billing a vendor assigned to a master meter, the Master Meter Bill toggle displays. For more information about the expense columns that display when the toggle is enabled, refer to Add a Master Meter Bill .

 Step 3: Review Payments & Attachments

 The Payments & Attachments tile displays the associated bank account, payment method, attachments, and work order links for the Smart Bill.

 Review and verify information entered into the following fields.

 Field
 Description

 Attachments

 The file uploaded as a Smart Bill. To attach additional related images or documents from your network or computer, click Upload , or to paste an image from your clipboard, click Paste .

 Default Bank

 The bank from which this Smart Bill payment is deducted. Select <Property Default> to deduct the payment from the bank selected as the Default Bank account on the property's details page.

 Related Privileges

 This field populates with only banks and credit cards to which you have access. Your access to banks and credit cards can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 Payment Method

 The method by which the Smart Bill is paid. You can select from the following payment methods:

 ACH

 An automated transfer handled by your bank that uses the automated clearing house network for additional security.

 AvidPay

 An automatic bill payment integration provided by AvidXchange using the Post AvidPay tool in Rent Manager . For more information, refer to Post AvidPay (Page) .

 Related Preferences

 This option displays only if you have AvidPay set up in system preferences. For more information, refer to AvidXchange (System Preferences) .

 Check

 A physically routed payment drawn against deposited funds from the payer to the payee.

 Debit

 A pre-authorized payment which allows a bank to pay a certain amount directly to a bank or company at regular intervals.

 eChecks

 A digital check that is delivered to the payee via email, at which point the payee can retrieve and print the check.

 Related Preferences

 This option displays only if Enable eChecks is checked in system preferences. For more information, refer to eChecks (System Preferences) .

 EFT

 An electronic funds transfer for any type of digital payment including, but not limited to, a credit or debit card.

 ePay

 An integrated service offered by Zego to automate electronic funds transfer.

 Related Preferences

 This option displays only if Enable ePay is checked in system preferences. For more information, refer to General ePay (System Preferences) .

 Work Order Links

 To attach a related work order associated with a service issue to the bill, click Link Work Order .

 Once a work order is linked to a bill, you can click the work order to view it in a separate window. For more information, refer to Add Links to a Bill .

 Step 4: Verify Expense Details

 Verify the information in the following columns. To add any additional line items, click Add Detail . To remove all line items on an unpaid bill, click   Clear Allocations . Alternatively, click Disburse Amount to have Rent Manager automatically calculate and distribute the total bill amount between properties, units, or GL accounts into individual line items.

 More Information

 If the Master Meter Bill toggle is enabled, the expense details display different columns. For more information, refer to Add a Master Meter Bill .

 Column
 Description

 1099

 Indicates whether the expense should be reported as a 1099 expense.

 Amount

 The portion of the overall expense amount allocated to this line item.

 Billable

 If this is a billable expense that should be covered by a tenant or owner, check Billable to create an invoice to bill that owner or tenant so they can reimburse you for the expense. Once checked, the Billable To and Markup fields become available.

 More Information

 To create an invoice directly associated with this expense, click the icon. The information entered into the Billable To and Markup columns automatically populates in the invoice.

 You must click Save before an invoice can be created from the expense.

 Billable To

 First, select the Tenant or Owner tab to determine the type of account receiving the invoice. Then in the field below, select the owner or tenant account that will pay for this expense line item.

 Markup

 If applicable, the amount added to the expense's cost to help cover overhead and profit. Enter a number to charge a flat amount (e.g., 110.00 , 55.75 ) or a percent amount if the markup is a percentage of the line item's Amount (e.g., 40% , 30.5% ).

 Invoice Amount = Line Item Amount + Markup

 For example, if the line item's Amount is 400 and you enter a markup of 50 , the invoice created bills the account for $450. If you enter a markup of 25% , the invoice bills the account for $500, since twenty-five percent of four hundred is one hundred.

 Expense Account

 The general ledger (GL) account used to track the expense.

 Job

 If job costing is enabled, select a job from the drop-down list. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Memo

 An optional message or reference for the line item.

 To select a memorized comment to use as the memo, click .

 Property

 The property expensed by the vendor for this line item. If a single property was selected in the Bill Information tile, this column is read-only and all line items are associated with the selected property.

 Unit

 The specific unit expensed by the vendor.

 Step 5: Post or Save for Later

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Bills
 Add, View

 For more information, refer to Control User Access .

 After reviewing the Smart Bill information, click Post And Close to create a new, unpaid bill on the Bills page. Otherwise, click Save For Later to save any updates and changes made to the Smart Bill without posting it to Rent Manager .

 More Information

 If the Master Meter Bill toggle is enabled and the associated master meter has a RUBS template assigned to it, the option to Post Bill & RUBS Charges is available. For more information, refer to Post a RUBS Master Meter Bill .
