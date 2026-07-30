# Add a Master Meter Bill

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Bills-Add-Master-Meter.htm

Master meter bills are vendor bills created to track and pay utility costs for properties with established master meters. Bills of this type are similar to standard vendor bills, but they have unique columns in their expense allocations grid. For information about the standard expense allocations grid, refer to Add a One-Time Vendor/Owner Bill .

 More Information

 Before you can create a master meter bill, you must first create a master meter. For more information, refer to Add Master Meters .

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Bills
 Add, View

 For more information, refer to Control User Access .

 To create a master meter bill, do the following:

 -
 Go to arrow_forward Payables arrow_forward Bills arrow_forward Add Bill .
The Add Bill pop-up displays.

 -
 Make sure the account type is set to Vendor , then select the vendor associated with the master meter.

 More Information

 When a vendor assigned to master meter is selected, the Master Meter Bill field displays at the top left of the expense allocations grid. To revert the bill to an ordinary vendor/owner bill, toggle this option.

 -
 In the Bill Information tile, enter information into the available fields described below.

 Field
 Description

 Amount

 The total dollar amount expensed on the bill.

 Alternatively, if you have multiple lines on the bill, click to populate the total of all fields in the line items' Amount column.

 Bill Date

 The date on which the bill was issued. If this bill reflects a physical bill you received, select the date stated on the real-world bill itself.

 Due Date

 The date by which the bill must be paid. This date automatically populates based on the selected bill Terms and the Bill Date entered. Alternatively, manually enter a custom due date.

 Invoice #

 If applicable, the bill's reference number or invoice number.

 Memo

 An optional message or reference for the bill that displays on certain reports that can be sent to vendors, such as Bill Worksheet .

 Post Date

 The date on which this bill expenses the general ledger (GL) account on an accrual accounting basis. The field defaults to the same date as the Bill Date .

 Property

 The property to be expensed when the bill is paid. If more than one property is being expensed on the bill, select <Multiple properties> and manually select the property for each line item.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Terms

 The amount of time given before the bill is considered due. The bill term determines the bill's Due Date based on the entered Bill Date .

 For example, a bill term of Immediately would set both fields to the same date, while NET 15 would set the due date for fifteen days after the bill date. The options available depend on the bill terms that are created in your Rent Manager database. For more information, refer to Bill Terms (Page) .

 -
 In the Payment & Attachments tile, enter or select information in the available fields described below.

 Field
 Description

 Attachments

 Any images or documents relevant to the master meter bill, such as an photo of the meter reading. To upload a file, click Upload or to paste an image from your clipboard, click Paste .

 Default Bank

 The bank from which this bill payment is deducted. Select <Property Default> to deduct the payment from the bank selected as the Default Bank account on the property's details page.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 Payment Method

 The method by which the bill is paid.

 ACH

 An automated transfer handled by your bank that uses the automated clearing house network for additional security.

 AvidPay

 An automatic bill payment integration provided by AvidXchange using the Post AvidPay tool in Rent Manager . For more information, refer to Post AvidPay (Page) .

 Related Preferences

 This option displays only if you have AvidPay set up in the AvidXchange Settings section of system preferences. For more information, refer to AvidXchange (System Preferences) .

 Check

 A physically-routed payment drawn against deposited funds from the payer to the payee.

 Debit

 A preauthorized payment which allows a bank to pay a certain amount directly to a bank or company at regular intervals.

 eChecks

 A digital check that is delivered to the payee via email, at which point the payee can retrieve and print the check.

 Related Preferences

 This option displays only if Enable eChecks is checked in the eChecks section of system preferences and you have an eChecks account set up. For more information, refer to eChecks (System Preferences) .

 EFT

 An electronic funds transfer for any type of digital payment including, but not limited to, a credit or debit card.

 ePay

 An integrated service offered by Zego to automate electronic funds transfer.

 Related Preferences

 This option displays only if Enable ePay is checked in the ePay section of system preferences. For more information, refer to General ePay (System Preferences) .

 -
 Toggle Master Meter Bill .

 -
 Fill in the columns of the expense allocation grid for each property associated with the master meter. You can have multiple expense line items.

 Column
 Description

 Amount

 The portion of the overall utility expense amount to allocate to this property.

 Billing Period

 The month and year that the meter reading is billed for.

 More Information

 When adding a master meter bill for the first time, the Billing Period is based on the read date. If the read date is in the first 15 days of the month, the month from the read date displays. If the read date is in the last 15 days of the month, the following month displays.

 When adding subsequent bills for a master meter, the Billing Period populates with the month following the most recent posted billing period. For example, if the most recent billing period was January 2026 , the billing period for the next bill automatically displays February 2026 .

 Consumption

 The utility usage for the unit of measurement of the meter.

 Expense Account

 The general ledger (GL) account from your chart of accounts to track this expense. By default, the value in the Expense Account column displays.

 Memo

 An optional message or reference for the expense item. To select a saved comment to use as the memo, click .

 Property

 The short name of the property linked to the utility.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Read Date

 The date on which the meter reading was taken. The current date displays by default.

 Utility

 The utility being billed (e.g., Water or Electricity ). Only utilities that have a master meter enabled for the selected property display.

 More Information

 If the selected utility is connected to another utility (e.g., a water utility is the source for sewer utility readings), a line item for each linked utility is added automatically. The Read Date , Billing Period , and Consumption columns are disabled for the added line items, since they should always match the linked utility.

 -
 To complete the bill creation process, select one of the following options:

 Option
 Description

 Save

 Create the bill and close the Add Bill pop-up. The newly created bill is listed on the Bills page.

 Save & Close

 Create the bill and open the bill's details page.

 Save & New

 Create the bill and refresh the Add Bill pop-up to create another bill.

 Save & Post RUBS

 Create the bill and open the RUBS: Review & Post Charges pop-up to select options and verify amounts for posting ratio utility billing system (RUBS) charges. For more information, refer to Post a RUBS Master Meter Bill .
