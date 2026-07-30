# Add a Pre-Existing Loans Payable Loan

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Loans-Payable-Add-Pre-Existing.htm

With loans payable in Rent Manager , you can track information about outstanding loan payments and loan transactions. When you add a loan, Rent Manager calculates the amount due for both principal and interest payments, including the split between the two as you pay down your loan. You can also record additional costs such as escrow, insurance, and closing costs. The loans payable tool can be used to record many types of loans, including commercial, residential, and automotive loans.

 When you are already paying down a loan that you want to add into Rent Manager , you can use the Pre-existing Loan option to enter information about payments you've already made. This way, your Rent Manager records and amortization calculations match the real-world status of your loan.

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Journal entries
 Add

 Payables
 Loans Payable
 Add, View, Edit

 For more information, refer to Control User Access .

 Step 1: Enter Basic Loan Details

 To add a preexisting loan payable, do the following:

 -
 Go to arrow_forward Payables arrow_forward Loans Payable arrow_forward Loans Payable .
The Loans Payable page displays.

 -
 Click Add Loan .
The Add Loan pop-up displays.

 -
 At the top, check Pre-existing Loan .

 -
 In the Loan Details tile, enter the following information:

 Field
 Description

 Name

 A name to help you identify the loan in Rent Manager . The name must be unique from other existing loan names.

 Loan Number

 The number assigned to the loan by the lender.

 Property

 The property on which financial transactions associated with the loan are recorded.

 Asset Link

 An optional link to an asset in Rent Manager . For example, if the loan is for a manufactured home that you enter into Rent Manager as an asset, link the asset here. This link does not affect financial reporting. For more information, refer to Assets (Page) .

 Vendor (Lender)

 The financial institution that provided the loan and receives payments from you. You must add the lender as a vendor account in Rent Manager and assign the vendor to the property associated with the loan. For more information, refer to Vendors (Page) .

 Step 2: Add General Ledger and Bank Accounts

 In the Chart Accounts tile, choose the general ledger (GL) and bank accounts where monthly loan payments are recorded.

 Field
 Description

 Principal Account

 The GL account used to track payments related to the principal portion of the loan.

 Interest Account

 The GL account used to track payments related to the interest portion of the loan.

 Bank Account

 The bank account used to make payments on the loan.

 Step 3: Set Up Loan Payment Schedule

 More Information

 When adding loan information, some fields automatically calculate and display a value based on options you select in earlier steps. This workflow includes descriptions of all fields. However, you may not need to enter information in all of the fields described here.

 In these sections, enter information to determine when loan payments are due and how much is due for each payment.

 Loan Dates

 In the Loan Dates tile, enter the following information about important dates that determine the frequency and duration of loan payments:

 Field
 Description

 Maturity Date

 The date on which the final loan payment is due.

 More Information

 Unlike new and refinanced loans, this date is not automatically populated for preexisting loans and must be entered manually. A preexisting loan's amortization schedule does not consider the Maturity Date when calculating the monthly principal; the final principal payment is determined by the Origination Date and the value entered in the Terms (Months) field.

 For example, if a preexisting loan's Origination Date is 05/01/ 2026 and the Term (Months) value is 6 , the final principal payment in the calculated amortization schedule will be on or before 11/01/ 2026 regardless of the date entered in the Maturity Date field.

 Next Payment Date

 The date on which the next payment is due.

 Origination Date

 The date on which the lender delivered the loan funds. For loans that are not interest only, this is typically the date on which interest begins to accrue.

 Term (Months)

 The amount of time you have to pay off the loan, entered in months.

 Principal

 In the Principal section, enter the following information about the original principal amount of the loan and the amount you still have left to pay:

 Field
 Description

 Original Principal Amount

 The principal amount of the loan when the funds were first delivered to you by your lending institution. This includes all costs that are associated with the principal amount of your loan, which might include brokerage fees, insurance, or closing costs.

 Remaining Principal Amount

 The principal amount you still owe as of the time you enter the loan into Rent Manager . Amortization and interest calculations use this amount as the starting point to determine how much you still owe on the principal and how much your monthly payments need to be.

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

 This method divides the annual rate by 360 to get a daily rate, then multiples that rate by the actual number of days in a given month.

 Actual/Actual

 This method divides the annual rate by the actual number of days in a given year to get a daily rate, then multiplies that rate by the actual number of days in a given month.

 Interest Type

 Defines the loan as either Fixed Rate or Variable Rate . Fixed rate loans use the same interest rate for each term, while variable rate loans use rates that change on intervals specified by your lender.

 Warning

 The Interest Type can only be selected when creating a loan and cannot be changed after the loan is set up in Rent Manager .

 Interest Rate (%)/Initial Interest Rate (%)

 For Fixed Rate loans, the interest rate that applies for the full loan term. For Variable Rate loans, this is the initial rate for that is used until adjusted by your lender.

 Interest-Only Loan

 Indicate that this is a loan for which you are required to pay only interest (and not principal) for either the full term or part of the term.

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

 By default, Rent Manager calculates an estimated monthly principal and interest payment amount and allocates that amount to the Principal and Interest GL accounts selected in the Chart Accounts section. The Principal + Interest amount is not always the same as your Total Monthly Payment Amount . Your total allocations must match your Total Monthly Payment .

 To add additional payments and itemize the allocations, click Add Allocation to add as many line items as needed. Then, select a GL Account and enter an Amount for each line item. The dollar total of all allocations in the Amount column must match the Total Monthly Payment amount.

 Preview Amortization Schedule

 After you enter all required information, you can click Preview Amortization Schedule on the bottom of the wizard to view an example of how the balance changes over time. If you need to make changes to the schedule, on the Amortization Schedule pop-up, use the Click Here link to change the Interest Method and Monthly Principal + Interest until the schedule matches your loan. When finished, click Update to apply the changes directly to the add wizard.

 More Information

 Because this schedule is what determines how much money Rent Manager records for your monthly payments, it is important to use Preview Amortization Schedule before saving your loan. Make sure the schedule matches your real world loan paperwork as closely as possible.

 By default, Rent Manager calculates an estimated monthly principal and interest payment amount and allocates that amount to the Principal and Interest GL accounts selected in the Chart Accounts section. The Principal + Interest amount is not always the same as your Total Monthly Payment Amount . Your total allocations must match your Total Monthly Payment .

 To add additional payments and itemize the allocations, click Add Allocation to add as many line items as needed. Then select a GL Account and enter an Amount for each line item. The dollar total of all allocations in the Amount column must match the Total Monthly Payment amount.

 Step 4: Set Up Loan Automation

 More Information

 Before you can set up loan automation, you must enable Loans Payable task automation in system preferences. For more information, refer to Task Automation (System Preferences) .

 To have Rent Manager automatically post monthly payments for this loan, in the Loan Automation section, check Automate loan payments . Then, enter the day of the month on which you want payments to post. You can also enter an email address that receives notifications when automated posting occurs.

 Step 5: Add Loan Documents

 In the Loan Documents section, click Upload to attach any loan-related documents to the Rent Manager record for the loan, or click Paste to attach an image from your clipboard.

 Step 6: Save the Loan

 After all information is entered and correct, you can save the loan. Before saving, you can view an example of the amortization schedule for the loan, click Preview Amortization Schedule .

 To finalize everything and start the schedule in Rent Manager , click Save and Finish .
