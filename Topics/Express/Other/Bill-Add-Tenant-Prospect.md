# Add a One-Time Tenant/Prospect Bill

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Bill-Add-Tenant-Prospect.htm

Rent Manager allows you to track and pay bills received from vendors who have invoiced you for services. Alternatively, if a tenant or prospect paid expenses that are normally covered by the property management company, such as application fees or in-unit appliance replacements, you can add that bill from the tenant or prospect to Rent Manager to track the financials and to pay the bill to reimburse the tenant or prospect.

 It is important to note that bills can only be created for tenant and prospect accounts that have open credits. If nothing populates on the bill during creation, you can go back to the tenant or prospect account to clear allocations from the credit if needed. For more information, refer to Clear Transaction Allocations .

 More Information

 This topic goes over how to add a bill to a tenant or prospect account. To learn how to add a bill for a vendor or owner account, refer to Add a One-Time Vendor/Owner Bill .

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Bills
 Add, View

 For more information, refer to Control User Access .

 Step 1: Add Bill Details

 To add a tenant or prospect bill, do the following:

 -
 Go to arrow_forward Payables arrow_forward Bills arrow_forward Add Bill .

 -
 In the section for the bill's general information, enter the information into the available fields described below.

 Field
 Description

 Tenant
Prospect

 To determine the type of entity for which accounts can be selected, select Tenant or Prospect .

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

 The date on which this bill expenses the general ledger (GL) account on an accrual accounting basis. The field defaults to the same date as the Bill Date .

 Due Date

 The date by which the bill must be paid. This date automatically populates based on the selected bill Terms and the Bill Date entered. Alternatively, manually enter a custom due date.

 Memo

 An optional message or reference for the bill. To select a saved comment to use as the memo, click .

 Step 2: Select Payment Details

 In the section for bill payment and files, enter or select the information. The available fields are described in the table below.

 Field
 Description

 Default Bank

 Related Privileges

 This field populates with only banks and credit cards to which you have access. Your access to banks and credit cards can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 The bank from which this bill payment is deducted. Select <Property Default> to deduct the payment from the bank selected as the Default Bank account on the property's details page.

 Payment Method

 The method by which the bill is paid. Each payment method is described below.

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

 Step 3: Allocate Bill Line Items

 The total open credits on the account displays in the line items. Bills can only be created for tenant and prospect accounts that have open credits. If nothing displays in this section, the tenant or prospect credit is already allocated to something else and must be cleared before continuing.

 Alternatively, you can add new credits to the account by, on the right side of the pop-up, click . For more information, refer to Add a Credit to a Bill .

 The available columns are described in the table below.

 Column
 Description

 Date

 The date on which the credit was entered in Rent Manager .

 Property

 The property associated with the credit.

 Unit

 If applicable, the specific unit associated with the credit. This column is blank unless the tenant leases multiple units.

 Description

 An optional note or comment that provides further context for this credit.

 Open Amount

 The dollar amount of the credit for this line item only.

 Once an Allocated Amount is added for all line items, you can click at the top of the page next to the Amount field to populate the total of all line item amounts in this section.

 Allocated Amount

 The dollar amount allocated to pay back to the tenant or prospect.

 Step 4: Save the Bill

 Once you have established your line items, click Save & Close to complete the bill creation process and close the pop-up. Alternatively, click Save & New to finish adding the bill and refresh the pop-up to add another bill.
