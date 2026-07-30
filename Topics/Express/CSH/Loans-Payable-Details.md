# Loan Payable Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Loans-Payable-Details.htm

The loans payable tool provides the ability to set up the terms and conditions of loans financed by your property management company, such as mortgages or auto-loans. The Loan Payable details page allows you to track outstanding balances, manage details, and record payments. The principal and interest split is automatically calculated on payments, and additional costs such as escrow or insurance can be added to the transactions. Amortization schedules can also be reviewed so you can make sure the schedule still matches the amortization provided by your lender and quickly view the total amount left on the loan.

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Loans Payable
 View, Edit

 For more information, refer to Control User Access .

 A loan payable's details page allows you to view and update information about an individual loan. To view a loan's information, go to arrow_forward Payables arrow_forward Loans Payable arrow_forward Loans Payables and select a loan from the list.

 Loan Details

 Information about the loan, including the associated property, total principal, and duration of its term, display in this section.

 Field
 Description

 Name

 The internal name for the loan that displays to Rent Manager users. This name must be unique.

 Loan Number

 The identifier for the loan. This field should match the loan number on any associated loan paperwork from the lender.

 Property

 The property on which the loan's financial impact is recorded. This value is defined when creating a loan and cannot be edited.

 Asset

 The asset associated with the loan, such as a storage unit.

 Original Principal

 The total dollar amount loaned. This value is defined when creating a loan and cannot be edited.

 Term (Months)

 The duration of the loan in months. This value is defined when creating a loan and cannot be edited.

 Origination Date

 The date that the lender distributed the loan amount to the borrower. This is typically the same as the date interest begins accruing.

 Maturity Date

 The date on which the final loan payment is due.

 Payment Info

 The financial and setup information of the loan, display in this section. To edit the information that displays in this field and view additional details, click . For more information, refer to Loans Payable Payment Info (Pop-Up) .

 Field
 Description

 Lender

 The vendor account (i.e., financial institution) providing the loan and collecting payments.

 Payment Method

 The method ( ACH , Check , EFT , or Journal ) by which loan payments are processed.

 Due Day

 The day of the month that monthly payments are due to the lender. If you enter 31 in this field, payments are always due on the final day of the month.

 Interest Rate (%)

 The percentage of interest paid between monthly payments.

 Monthly Principal + Interest

 The total amount of monthly payments based on the principal and interest percentage.

 Monthly Escrow/Other Costs

 If applicable, the total amount of escrow charges for monthly payments, such as insurance and taxes.

 Interest Type

 The calculation method for the loan's interest (i.e., Fixed or Variable ). Fixed interest rates are consistent for the entire loan term, while variable interest rates change on set intervals.

 Interest Method

 The way interest is calculated between monthly payments.

 30/360

 Calculates interest as if there are 30 days in the month and 360 days in the year.

 30/365

 Calculates interest as if there are 30 days in the month and 365 days in the year.

 Actual 360 (360/365)

 Calculates interest using the actual number of days in the month and as if there are 360 days in the year.

 Actual 365 (365/365)

 Calculates interest using the actual number of days in the month and as if there are 365 days in the year.

 Actual/Actual

 Calculates interest using the actual number of days in the month and actual number of days in the year.

 History/Notes

 The most recent history/note items on the loan, display in this section. History/notes record information about updates to the loan's schedule, automation settings, or journal adjustments. You can add a history/note item by clicking Add Note .

 Column
 Description

 Date

 The date the history/note item was created.

 Type

 The history/note type. For example, if the history/note item was created by a user performing an action, the item has a System type. If the history/note item was manually added by a user, the item has a Note type.

 Note

 The information to describe the history/note item (e.g., Spoke with lender about refinancing options ). If no text is entered, the column displays blank.

 Chart Accounts

 The general ledger (GL) accounts associated with the loan financials display in this section.

 Field
 Description

 Principal Account

 The GL account used to track the principal amount of the loan. This account is selected when creating the loan and cannot be edited.

 Interest Account

 The GL account used to track the interest portion of monthly loan payments.

 Bank Account

 The bank account used to pay the loan.

 Comment

 An optional comment to provide additional information about the loan. To display this comment at the top of the details page, check Show on Comment Banner .

 Loan Documents

 Click Upload Files to browse your computer or network for a file to attach to the loan, such as a copy of the physical loan documents. Multiple files can be selected by holding Shift or Ctrl on your keyboard, and clicking the desired files. If using a Mac, hold Command on your keyboard and click the desired files to perform the same action.

 If necessary, click to remove the attachment from the document.

 Transactions & Amortization

 This section displays the transactions or amortization schedule linked to the loan depending on if Transactions or Amortization is selected. For more information, refer to Loans Payable Transactions & Amortization (Pop-Up) .

 To correct or make adjustments to any transactions that affect the principle or interest of the loan, click Add Journal Adjustment/True-Up . The adjustment journal displays a link to the journal entry on the Transactions tab on this tile.

 Transactions Tab

 The following columns display on the Transactions tab.

 Column
 Descriptions

 Payment Date

 The date, in a MM/DD/YY format, that the monthly payment was made. Additionally, the loan's payment type displays (e.g., journal adjustment, principal entry, closing transaction, etc.).

 Amount

 The monthly payment amount of the loan using the following equation:

 Payment = (Monthly Principal + Interest) + Monthly Escrow/Other Costs

 Escrow/Other Payments

 If insurance and taxes are managed by a lender, the escrow amount that is paid in addition to the loan's principal and interest. This payment amount changes when escrow funding is evaluated each year.

 Interest

 The amount of the payment that is applied to the loan's interest.

 Principal

 The amount of the payment that is applied to the loan's principal.

 Remaining Principal

 The total amount of the loan's unpaid principal.

 Amortization Tab

 The following columns display on the Amortization tab.

 Column
 Description

 Date

 The date the loan payment is due.

 Amount

 The total amount of the loan payment.

 Interest

 The amount of the payment that is applied to the loan's interest.

 Principal

 The amount of the payment that is applied to the loan's principal.

 Remaining Principal

 The total amount of the loan's unpaid principal.
