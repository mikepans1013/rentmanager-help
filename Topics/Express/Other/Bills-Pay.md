# Pay Bills

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Bills-Pay.htm

Rent Manager allows you to track and pay bills received from vendors who have invoiced you for services. Alternatively, if an owner paid expenses that are normally covered by their contract with the fee-based management company, you can add that bill from the owner to Rent Manager to track the financials and to pay the bill to reimburse the owner.

 Once you pay the bill in real life, you can then mark the bill as paid in Rent Manager via the Pay Bills page, including tenant and prospect bills, such as security deposit refunds issued out via a tenant bill. You can also mark multiple bills as paid simultaneously, or enter custom amounts to partially pay a bill. Furthermore, the Pay Bills page allows you to filter all open bills by property, vendor, bill and due dates, invoice numbers associated with work orders, and even by job.

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Allow user to pay bills
 Enabled

 If you are paying a bill for the property management company, you also need the following privilege:

 Group
 Privilege
 Column

 Receivables
 Take owner Payments
 Enabled

 For more information, refer to Control User Access .

 Step 1: Open and Filter the Pay Bills List

 If you have a long list of bills in your database, you can narrow down which bills display in the list by using the filters on the left. Once you enter or select the desired filter criteria, the list displays only the bills that match your selections. Each filter is described in the table below.

 To start the bill pay process and filter the list, do the following:

 -
 Go to arrow_forward Payables arrow_forward Bills arrow_forward Pay Bills .

 -
 Filter the list of bills to pay to narrow down how many bills display.

 Option
 Description

 Saved Filters

 Select a previously-saved filter from the list. Alternatively, click to set up a new advanced filter. To save the advanced filter for future use, click Save And Apply .

 Search

 Enter the desired search criteria to display results that include the criteria.

 Show Quick Filters

 Click to display the additional filter options described below.

 Bill Date

 Includes only bills with a Bill Date that falls within the selected date range.

 Due Date

 Includes only bills with a Due Date that falls within the selected date range.

 Invoice #

 Only bills that match or include the specified Invoice # entered on the bill's details page display.

 Job

 Only bills that are associated with a specified Job selected on the bill's details page display.

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Property
Owner

 To display only bills that expense specific properties , select the Property tab and check each property to include in the list. Alternatively, in the Group field, select a property group to automatically filter by all properties in that group.

 To display only bills that expense properties that are part of specific ownerships , select the Owner tab and check each owner to include in the list. Alternatively, in the Group field, select an owner group to automatically filter by all properties that belong to the owners in that group.

 Vendor
Owner
Tenant
Prospect

 Click the dynamic field name (which defaults to Vendor ) and select the type of entity for which to display bills. Then in the field below, select an account to view only bills from that tenant, vendor, owner, or prospect.

 -
 In the Saved Filters drop-down, select a previously-saved filter from the list. Alternatively, click to set up a new advanced filter. You can apply the filter once by clicking Apply , or save the advanced filter for future use by clicking Save And Apply .

 -
 To pay all bills with the same bank or credit card click Default Bank/CC .

 In the Set New Bank/Credit Card field, select a specific bank or credit card to populate the Bank column for all bills on the page. To populate the Bank column with the default bank Default Bank account set up for the bill's associated property, select <Property Default> . When finished, click Set New Bank/CC . To revert to the default option selected on the individual bill, click Reset to Bill Default .

 Step 2: Select Bills and Payment Methods

 To select which bills to pay and how to pay them, do the following:

 -
 If the Apv column displays, bills must be approved by a Rent Manager user with sufficient privileges before they can be selected for payment. When Apv is selected, the associated bill is approved for payment.

 Related Preferences

 The Apv column displays if the option Require bills to be approved before they can be paid is enabled in system preferences. For more information, refer to Set Up Bill Approval .

 -
 If the Owner Apv column displays, bills must be approved by an owner user with sufficient privileges before they can be selected for payment. When Owner Apv is selected, the associated bill is approved for payment.

 Related Preferences

 The Owner Apv column displays if the option Enabled owner bill approval is enabled in system preferences. For more information, refer to Set Up Bill Approval .

 -
 In the Bank column, select the bank or credit card to be expensed to pay the associated bill. Select <Property Default> to automatically expense the bank established as the Default Bank on the property's details page, or select <Bill Default> to expense whichever account is selected as the Default Bank on the bill's details page.

 More Information

 When paying bills for multiple properties, all the selected properties need access to all of the selected banks. For example, if you are paying a bill linked to property A and property B, and <Property Default> is selected, both property A and B need access to the other's default bank in order for the bill to be paid. For more information, refer to Property Details (Page) .

 Related Preferences

 Credit cards can only be selected to pay bills if the option Allow bill payments with credit cards is enabled in system preferences. For more information, refer to Checks/Bills General (System Preferences) .

 Related Privileges

 This field populates with only banks and credit cards to which you have access. Your access to banks and credit cards can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 -
 Verify the bill information in the following columns. By default, some columns display only if added via .

 Default Column
 Description

 A (Attachments)

 displays if a file is attached to the bill. Click the icon to download or view the attachment.

 Amount

 The total dollar amount expensed on the bill.

 Amount Due

 The amount of the bill that remains to be paid after any partial payments were applied. If no payments are applied, the Amount Due column reflects the same value as Amount .

 Amount Due = Amount – Applied vendor credits or previous payments

 Bill Date

 The date on which the bill was issued.

 Due Date

 The date by which the bill must be paid.

 Invoice #

 The bill's reference number or invoice number.

 Pay Method

 Related Privileges

 Group
 Privilege
 Column

 ePay

 Process Vendor ePay
 Enabled

 For more information, refer to Control User Access .

 The method by which the bill is paid.

 Vendor

 The name of the vendor, owner, tenant, or prospect who the bill is issued to.

 Available Column
 Description

 Approved By

 If bill approval is enabled in system preferences, the name of the owner or user who approved the bill to be paid.

 Approved Date

 If bill approval is enabled, the date on which the bill was approved to be paid.

 Date Created

 The date on which the bill was created in Rent Manager .

 Detail Memo

 The text entered in the bill's Memo field to provide further context or information.

 Memo

 The text entered in the bill's Memo column for each line item, providing further context or information about each expense.

 Owner

 The owner(s) of the properties expensed in the bill.

 Owner Balance

 The combined bank balance of all properties within an ownership.

 When bills are checked in the Pay column, the amount of the bill is deducted from the owner's bank balance in the next line, and a running balance displays. This column displays blank if the bill is paid by multiple ownerships or your property management company.

 Payee Name

 If the bill is issued to a vendor, the name entered in the Payee field on the Vendor details page.

 Post Date

 The date on which this bill expenses the general ledger (GL) account on an accrual accounting basis.

 Properties

 The full name(s) of the properties expensed in the bill's line items.

 Property Short Names

 The abbreviated name(s) of the property or properties expensed in the bill, as established on the property's details page in the Short Name field.

 Unit

 If applicable, the unit(s) expensed in this bill's line items.

 -
 In the Pay Method column, choose how each selected bill should be paid from the available options described in the table below.

 Option
 Description

 ACH

 An automated transfer handled by your real world bank that uses the automated clearing house network for additional security.

 AvidPay

 An automatic bill payment integration provided by AvidXchange using the Post AvidPay tool in Rent Manager . For more information, refer to Post AvidPay (Page) .

 Related Preferences

 This option displays only if you have AvidPay set up in system preferences. For more information, refer to AvidXchange (System Preferences) .

 Check

 A physically-routed payment drawn against deposited funds from the payer to the payee.

 Debit

 A preauthorized payment which allows a bank to pay a certain amount directly to a bank or company at regular intervals.

 eChecks

 A digital check that is delivered to the payee via email, at which point the payee can retrieve and print the check.

 Related Preferences

 This option displays only if Enable eChecks is enabled system preferences and you have an eChecks account set up. For more information, refer to eChecks (System Preferences) .

 EFT

 An electronic funds transfer for any type of digital payment including, but not limited to, a credit or debit card.

 ePay

 An integrated service offered by Zego to automate electronic funds transfer. To process outbound payments using ePay , you must have the PayDirect feature enabled with Zego . For more information, refer to Zego PayDirect .

 Related Preferences

 This option displays only if Enable ePay is enabled in system preferences. For more information, refer to General ePay (System Preferences) .

 Step 3: Pay Bills

 To pay the selected bills, do the following:

 -
 If there are any vendor credits for the vendor bill, you can select arrow_forward Apply Vendor Credits to use that credit to cover part or all of the bill's amount. A vendor credit is available to use for the bill if displays in the Has Credit column. For more information, refer to Pay Bills with a Vendor Credit .

 -
 In the Amount To Pay column, enter the dollar amount to pay towards each selected bill. The amount defaults to the associated bill's total amount due after any partial payments or vendor credits are applied, if applicable.

 More Information

 If you are making a partial payment for a bill that has multiple line items (such as a separate line item for each property), select arrow_forward Bill Allocations . A pop-up displays that allows you to specify which line items to apply payment to, and how much to allocate to each one. Once your allocations are set, click Save .

 -
 Click Pay Bills .

 -
 On the Payment Info pop-up, enter the information about the payment.

 Option
 Description

 Choose which Bank/Credit Card to apply to selected bills

 The bank(s) or credit card(s) used to pay the selected bills. By default, <Use Bank/CC Assigned on Register> is selected. This option applies the bank or credit card listed on the Pay Bills page, in the Bank column.

 Comment

 An optional note that provides further context for this payment. The note displays in the Comment column on Vendor Transactions pop-up and in the check's Memo field.

 To select a memorized comment, click .

 Consolidate By Vendor

 Combines bills from a specific vendor into a single payment. The selected bills with the same Vendor , Bank , and Pay Method are paid together with a single check or payment transaction.

 Mark check(s) to be printed

 Indicates you want to print the check(s) from Rent Manager for the bill(s) being paid.

 Payment Date

 The date on which the payment was issued. This date should match your real-world financial records to prevent any issues with reconciliation. By default, the current date populates.

 -
 Click Pay to create payment transactions in Rent Manager . Or, if Mark check(s) to be printed is selected, click Pay & Print Checks to pay bills and open the Print Checks pop-up to print the checks immediately.
The bills are marked as paid and can be located on the Bills page when Show unpaid bills only is unchecked.
