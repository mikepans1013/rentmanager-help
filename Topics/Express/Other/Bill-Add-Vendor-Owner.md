# Add a One-Time Vendor/Owner Bill

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Bill-Add-Vendor-Owner.htm

Rent Manager allows you to track and pay bills received from vendors who have invoiced you for services. Alternatively, if an owner paid expenses that are normally covered by their contract with the fee-based management company, you can add that bill from the owner to Rent Manager to track the financials and to pay the bill to reimburse the owner.

 More Information

 This topic goes over how to add a bill to a vendor or owner account. To learn how to add a bill for a tenant or prospect account, refer to Add a One-Time Tenant/Prospect Bill .

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Bills
 Add, View

 For more information, refer to Control User Access .

 More Information

 When billing a vendor assigned to a master meter, the Master Meter Bill toggle displays. For more information, refer to Add a Master Meter Bill .

 Step 1: Add Bill Details

 To add a bill to Rent Manager , do the following:

 -
 Go to arrow_forward Payables arrow_forward Bills arrow_forward Add Bill .
The Add Bill pop-up displays.

 -
 In the section for the bill's general information, enter the information into the available fields described below.

 Field
 Description

 Property

 The property to be expensed by the vendor or owner.

 Vendor
Owner
Tenant
Prospect

 To determine the type of entity for which accounts can be selected, select Vendor or Owner . Then in the associated field, select the vendor or owner account that receives the payment for this bill.

 If the selected account has any past bills in Rent Manager , you can click Fill from bill history to automatically copy information from the past bill you select and import it into the new bill. The information imported includes the Amount , Default Bank , and any line items on the bill.

 More Information

 If the bill information auto-populates when you select the vendor, the information is pulled from the Bill Settings section of the vendor's details page. This occurs only if the option Auto-Fill Check/Bill Information is checked for that vendor.

 Amount

 The total dollar amount expensed on the bill.

 Alternatively, if you have multiple lines on the bill, click to populate the total of all fields in the line items' Amount column.

 Terms

 The amount of time given before the bill is considered due. The bill term determines the bill's Due Date based on the entered Bill Date .

 For example, a bill term of Immediately would set both fields to the same date, while NET 15 would set the due date for fifteen days after the bill date. The options available depend on the bill terms that are created in your Rent Manager database. For more information, refer to Bill Terms (Page) .

 Bill Date

 The date on which the bill was issued. If this bill reflects a physical bill you received, select the date stated on the real-world bill itself.

 Invoice #

 If applicable, the bill's reference number or invoice number.

 Post Date

 The date on which this bill expenses the GL account on an accrual accounting basis. The field defaults to the same date as the Bill Date .

 Due Date

 The date by which the bill must be paid. This date automatically populates based on the selected bill Terms and the Bill Date entered. Alternatively, manually enter a custom due date.

 Memo

 An optional message or reference for the bill that displays on certain reports that can be sent to vendors, such as Bill Worksheet .

 Step 2: Select Payment Details

 In the section for bill payment and files, enter or select the information. The available fields are described in the table below.

 Field
 Description

 Approve

 Related Privileges

 To approve a bill for payment, the privileges required depend on the amount of the bill and your system preferences in Checks/Bills General (System Preferences) .

 Group
 Privilege
 Column

 Payables
 Approve bills less than or equal to tier 1
 Enabled

 Approve bills less than or equal to tier 2
 Enabled

 Approve bills less than or equal to tier 3
 Enabled

 Approve all bills
 Enabled

 For more information, refer to Control User Access .

 If bill approval is enabled for your database, check this box when the bill can be paid.

 Bill approval is a tool in your database that prevents users from paying bills in Rent Manager until the owner has authorized that the bill can be paid, and allows you to establish which users can approve bills for payment based on the dollar amount of the bill.

 Related Preferences

 This option displays only if Require bills to be approved before they can be paid is checked in the Checks/Bills section of system preferences. For more information, refer to Checks/Bills General (System Preferences) .

 Default Bank

 Related Privileges

 This field populates with only banks and credit cards to which you have access. Your access to banks and credit cards can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 The bank from which this bill payment is deducted. Select <Property Default> to deduct the payment from the bank selected as the Default Bank account on the property's details page.

 Payment Method

 The method by which the bill is paid. Click the drop-downs below for more information about each payment method.

 Check

 A physically-routed payment drawn against deposited funds from the payer to the payee.

 EFT

 An electronic funds transfer for any type of digital payment including, but not limited to, a credit or debit card.

 Debit

 A preauthorized payment which allows a bank to pay a certain amount directly to a bank or company at regular intervals.

 ePay

 An integrated service offered by Zego to automate electronic funds transfer.

 Related Preferences

 This option displays only if Enable ePay is checked in the ePay section of system preferences. For more information, refer to General ePay (System Preferences) .

 ACH

 An automated transfer handled by your bank that uses the automated clearing house network for additional security.

 AvidPay

 An automatic bill payment integration provided by AvidXchange using the Post AvidPay tool in Rent Manager . For more information, refer to Post AvidPay (Page) .

 Related Preferences

 This option displays only if you have AvidPay set up in the AvidXchange Settings section of system preferences. For more information, refer to AvidXchange (System Preferences) .

 eChecks

 Related Preferences

 This option displays only if Enable eChecks is checked in the eChecks section of system preferences and you have an eChecks account set up. For more information, refer to eChecks (System Preferences) .

 A digital check that is delivered to the payee via email, at which point the payee can retrieve and print the check.

 Attachments

 Click Upload Files to attach any related images or documents from your network or computer to the bill in Rent Manager , such as a digital copy of the original bill.

 Links

 If applicable, the purchase order linked to this bill. If no purchase order is linked, you can click Link Existing PO  to add one.

 Step 3: Add Bill Line Items

 In the section for expense line items, enter or select the bill information for the property into the available columns. To add any additional line items, click Add Detail . Alternatively, click Disburse Amount to have Rent Manager automatically calculate and distribute the total bill amount between properties, units, or GL accounts into individual line items.
The available columns are described in the table below.

 Column
 Description

 Property

 The property to be expensed by the vendor or owner.

 Unit

 If applicable, the specific unit to be expensed by the owner or vendor. If the expense applies only to the property as a whole, leave this field blank.

 Expense Account

 The GL account used to track this line item's expense. For example, if the line item is for landscaping at a property, you would select the expense account used for that type of maintenance work (such as 5101 - Maintenance & Landscaping ).

 1099

 Check this option if this line item should be reported as a 1099 expense for self-employed individuals (such as independent contractors, consultants, and so on).

 More Information

 These expenses are included on account's Owner 1099 or Vendor 1099 reports. For more information, refer to Owner 1099 (Report) or Vendor 1099 (Report) .

 Job

 If applicable, the job-costing project with which this expense is associated. If this expense is not tied to a project or the project is not being tracked in Rent Manager 's job costing tool, leave this field blank.

 For example, if you are tracking a renovation project in Rent Manager and this bill is from a vendor assisting with those renovations, select that job from the list. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Memo

 An optional note or comment that provides further context for this expense.

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

 Amount

 The dollar amount expensed for this line item only.

 Once an Amount is added for all line items, you can click at the top of the page next to the Amount field to populate the total of all line item amounts in this section.

 Step 4: Save the Bill

 Once you have established your line items, click Save and Close to complete the bill creation process and close the pop-up. Alternatively, click Save and New to finish adding the bill and refresh the pop-up to add another bill.
