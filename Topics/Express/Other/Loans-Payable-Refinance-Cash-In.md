# Loans Payable Cash-In Refinance

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Loans-Payable-Refinance-Cash-In.htm

When you refinance a loan, you can record the updated loan information so that Rent Manager accurately calculates your monthly interest and principal payments under the new loan terms. If you need to replace an existing loan with a new cash-in loan agreement (where a lump sum payment is made in order to increase equity and reduce the loan amount), you can use the Refinance option to change the loan's equity, amount, interest rate, and term. This way, your Rent Manager records and amortization calculations match the real-world status of your loan.

 The records related to your previous loan are marked as Closed and remain in Rent Manager for historical and financial reporting reasons.

 More Information

 This process is for the Cash-In refinance option. For information on the Cash-Out and Rate-and-Term refinance options, refer to Loans Payable Rate-and-Term Refinance and Loans Payable Cash-Out Refinance .

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Journal entries
 Add

 Banks/Checks
 Checks
 Add

 Payables
 Loans Payable
 Add, View, Edit

 For more information, refer to Control User Access .

 Related Preferences

 Before you can refinance a loan, you must select a Loans payable refinance clearing account in system preferences. For more information, refer to General Ledger System Accounts (System Preferences) .

 Step 1: Select Refinance Type

 To set up a cash-in refinance in Rent Manager , do the following:

 -
 Go to arrow_forward Payables arrow_forward Loans Payable arrow_forward Loans Payable and select a loan from the list.
The loan's details page displays.

 -
 At the top of the details page, click Refinance .

 -
 In the Refinance Type drop-down, select Cash-In .

 Step 2: Review New Loan Basic Details

 In the Loan Details section, review the following information. These fields display the same information as the previous loan, but they can be updated as needed.

 Field
 Description

 New Loan's Name

 A new name to help you identify the refinanced loan in Rent Manager . The name must be unique from other existing loan names, and it must be different from the previous loan's name.

 Loan Number

 The number assigned to the loan by the lender.

 Property

 The property on which financial transactions associated with the loan are recorded. The property cannot be changed when refinancing a loan.

 Asset Link

 An optional link to an asset in Rent Manager . For example, if the loan is for a manufactured home that you enter into Rent Manager as an asset, link the asset here. This link does not affect financial reporting. For more information, refer to Assets (Page) .

 Vendor (Lender)

 The financial institution that provided the loan and receives payments from you. You must add the lender as a vendor account in Rent Manager and assign the vendor to the property associated with the loan. For more information, refer to Vendors (Page) .

 Step 3: Review General Ledger and Bank Accounts

 In the Chart Accounts section, review the general ledger (GL) and bank accounts where monthly loan payments are recorded. These fields display the same information as the previous loan, but they can be updated as needed.

 Field
 Description

 Principal Account

 The GL account used to track payments related to the principal portion of the loan.

 Interest Account

 The GL account used to track payments related to the interest portion of the loan.

 Bank Account

 The bank account used to make payments on the loan.

 Step 4: Set Up New Loan Payment Schedule

 More Information

 When adding loan information, some fields automatically calculate and display a value based on options you select in earlier steps. This workflow includes descriptions of all fields. However, you may not need to enter information in all of the fields described here.

 In these sections, enter information to determine when payments are due for the refinanced loan and how much is due for each payment.

 Loan Dates

 In this section, enter the following information about important dates that determine the frequency and duration of loan payments:

 Field
 Description

 Origination Date

 The date on which the lender refinanced the loan. For loans that are not interest only, this is typically the date on which interest begins to accrue.

 First Payment Date

 The date on which the first payment on the refinanced loan is due.

 Term (Months)

 The amount of time you have to pay off the loan, entered in months.

 Maturity Date

 The date on which the final loan payment is due. This date is automatically calculated based on the other fields in this section.

 Principal

 In this section, enter the New Loan's Total Principal Amount , which is the total dollar amount of the remaining principal. This is the amount, minus interest and the Lump Sum Payment which is the amount you contributed to lower your new loan's principal, that you are expected to pay back by the Maturity Date . The principal amount can include additional financed costs. The amount in this field must match the sum of the current loan's remaining principal and any additional financed costs.

 If you need to itemize the journal entries for any additional costs that are included in your principal amount, such as insurance, click Add Cost to add as many line items as needed. Then select a GL Account and enter an Amount for each line item.

 More Information

 When you enter additional line items in this section, the amounts are not recorded twice in your journal entries. The journal entry records the liability of the full New Loan's Total Principal Amount , debits each additional account listed here for the entered amount, and debits the Asset Account for the remaining balance.

 Interest

 To set up information about interest rates on the loan, enter the following information:

 Field
 Description

 Interest Method

 The method used to calculate interest between monthly payments. The following methods are available:

 30/360

 This method assumes 30 days in a month and 360 days in a year.

 30/365

 This method assumes 30 days in a month and 365 days in a year.

 Actual/360 (365/360)

 This method divides the annual rate by 360 to get a daily rate, then multiples that rate by the actual number of days in a given month.

 Actual/365 (365/365)

 This method divides the annual rate by 365 to get a daily rate, then multiplies that rate by the actual number of days in a given month.

 Actual/Actual

 This method divides the annual rate by the actual number of days in a given year to get a daily rate, then multiplies that rate by the actual number of days in a given month.

 Interest Type

 Defines the loan as either Fixed Rate or Variable Rate . Fixed rate loans use the same interest rate for each term, while variable rate loans use rates that change on intervals specified by your lender.

 Warning

 The Interest Type can be selected only during the initial setup of the refinanced loan and cannot be changed after the loan is set up in Rent Manager .

 Interest Rate (%)/Initial Interest Rate (%)

 For Fixed Rate loans, the interest rate that applies for the full loan term. For Variable Rate loans, this is the initial rate for that is used until adjusted by your lender.

 Interest-Only Loan

 Indicates that this is a loan for which you are required to pay only interest (and not principal) for either the full term or part of the term.

 When this option is checked, the Full Term and Set Term options display.

 Full Term

 The loan is interest only for the entire term of the loan.

 Set Term

 The loan is interest only for a set portion of the term. Enter the Interest-Only Start Date and Interest-Only End Date to represent the portion of the full term for which the loan is interest only.

 Monthly Payment

 To specify your monthly loan payment, method, and payment allocations, enter the following information:

 Add the Total Monthly Payment

 The amount is typically the same each month and includes payments toward both the principal and interest owed. However, the balance of those two changes as you pay down the loan.

 Field
 Description

 Total Monthly Payment

 The total dollar amount you pay toward the loan each month.

 Payment Method

 The method used to record payments toward this loan. The following options are available:

 Journal

 A journal entry that records which GL accounts are debited and which are credited by the payment.

 Check

 A physically routed payment drawn against deposited funds from the payer to the payee.

 EFT

 An electronic funds transfer for any type of digital payment including, but not limited to, a credit or debit card.

 ACH

 An automated transfer handled by your real-world bank that uses the automated clearing house network for additional security.

 Loan includes a balloon payment

 Indicates that the loan includes a balloon payment, which is a large, one-time payment due at the end of the loan. Then, enter the Balloon Payment Date , which is the date the payment is due.

 Add Additional Allocations

 By default, Rent Manager calculates an estimated monthly principal and interest payment amount and allocates that amount to the Principal Account and Interest Account selected in the Chart Accounts section. The Principal + Interest amount is not always the same as your Total Monthly Payment Amount . Your total allocations must match your Total Monthly Payment .

 To add additional payments and itemize the allocations, click Add Allocation to add as many line items as needed. Then, select a GL Account and enter an Amount for each line item. The dollar total of all allocations in the Amount column must match the Total Monthly Payment amount.

 Preview Amortization Schedule

 After you enter all required information, you can click Preview Amortization Schedule on the bottom of the wizard to view an example of how the balance changes over time. If you need to make changes to the schedule, on the Amortization Schedule pop-up, use the Click Here link to change the Interest Method and Monthly Principal + Interest until the schedule matches your loan. When finished, click Update to apply the changes directly to the add wizard.

 More Information

 Because this schedule is what determines how much money Rent Manager records for your monthly payments, it is important to use Preview Amortization Schedule before saving your loan. Make sure the schedule matches your real world loan paperwork as closely as possible.

 Step 5: Set Up Closing Transaction

 If you have not already recorded closing costs associated with the loan in Rent Manager , such as down payment, appraisal fees, or title insurance, you can enter them here. For a cash-in refinance, the Lump Sum Payment cannot be removed as a closing expense.

 Field
 Description

 Payment Method

 The method used to record closing transaction payments. The following methods are available:

 Journal

 A journal entry that records which GL accounts are debited and which are credited by the payment.

 Check

 A physically routed payment drawn against deposited funds from the payer to the payee.

 EFT

 An electronic funds transfer for any type of digital payment including, but not limited to, a credit or debit card.

 ACH

 An automated transfer handled by your real-world bank that uses the automated clearing house network for additional security.

 Bank Account

 The bank account used to make payments on closing transaction costs.

 Date

 The date on which the closing transaction costs were paid.

 Memo

 An optional note explaining the transaction that displays on the payment method's details page.

 For each additional closing expense you need to record, click Add Item . Then, select a GL Account and enter an Amount for each line item.

 Step 6: Set Up Loan Automation

 More Information

 Before you can set up loan automation, you must enable Loans Payable task automation in system preferences. For more information, refer to Task Automation (System Preferences) .

 To have Rent Manager automatically post monthly payments for this loan, in the Loan Automation section, check Automate loan payments . Then, enter the day of the month on which you want payments to post. You can also enter an email address that receives notifications when automated posting occurs.

 Step 7: Add Loan Documents

 In the Loan Documents section, click Upload Files to attach any loan-related documents to the Rent Manager record for the loan.

 Step 8: Save the Loan

 After all information is entered and correct, you can save the loan. Before saving, you can view an example of the amortization schedule for the loan, click Preview Amortization Schedule .

 To finalize everything and start the new schedule in Rent Manager , click Save .
