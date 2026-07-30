# Manually Add Next Month's Loan Payment

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Loans-Payable-Payment-Next-Months-Add.htm

Rent Manager 's loan payable tool allows you to keep track of all balance changes as you pay off your outstanding loans. Each time you make a loan payment in the real world, you can add a record of the payment in Rent Manager using the post loans tool. As an alternative to using the post loans payable page, you can manually record next month's loan payments by writing a check or creating a journal entry if you wish to pay a future loan payment or manually add a payment instead. Writing a check for next month's payment is a great option to use if the payment was made in real life with a check. Optionally, you may decide to use a journal entry to reflect credits that represent any over payments made on the loan's balance.

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Post Loans Payable
 Enabled

 Loans Payables
 View

 For more information, refer to Control User Access .

 Option 1: Write a Check

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Checks
 Add, View

 For more information, refer to Control User Access .

 More Information

 The default payment method for recording loan payments with the loans payable tool is the payment method you selected when creating the loan. If you selected Journal when you created the loan and want to record a loan payment with a check, on the Payment Info section, click and set the Payment Method field to Check , EFT, or ACH .

 To add next month's payment to a loan with a check, do the following:

 -
 Go to   arrow_forward Payables arrow_forward Loans Payable arrow_forward Loans Payable and select the loan you want to add a monthly payment to.
The Loan Payable details page displays.

 -
 At the top of the page, click the arrow on Extra Payment and select Add Monthly Payment .

 -
 In the section for the check's general information, review the information in the following fields.

 Field
 Description

 Property

 The name of the property that is financially impacted by the loan payment.

 Bank

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 The bank account used to pay the loan. The default bank that displays is the account selected on the loan's details page in the Bank Account field.

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Write checks from banks that are not default
 Enabled

 For more information, refer to Control User Access .

 Date

 The date on which the check is to be issued to pay next month's loan payment. For example, if you wrote a check in the real world to cover the next month's payment, the date written on both the real life check and the check you enter in Rent Manager should be prior to or the same as the Next Payment Date .

 No.

 Related Preferences

 If Enforce sequential check numbers is enabled in system preferences, the following privilege is required to edit the check number:

 Group
 Privilege
 Column

 Banks/Checks
 Override sequential check number enforcement
 Enabled

 For more information, refer to Control User Access and Checks/Bills General (System Preferences) .

 The check number that matches the number on the physical check written in the real world to pay the loan. If the transaction was processed as an electronic check or draft, you can enter EFT or ACH as needed.

 Related Preferences

 To ensure each new check from the selected bank account defaults to the next number, enable the Next Check Number option. For more information, refer to Check Numbers (System Preferences) .

 Vendor

 The vendor receiving the check for the loan payment, followed by the account name in the field below.

 If you have previously created a check for this vendor and would like to use that same information, click Fill from history and select the property from which the previous check was written. Rent Manager Express refreshes and populates the current check with information from the selected check.

 Amount

 The total amount of this check. Alternatively, leave this field blank, and Rent Manager calculates the total from line items in the expenses section. Click to update this Amount after adding line items.

 Address

 The address to which the check is sent, which populates when the account receiving the check is selected. Optionally, you can change the address by clicking and manually entering the address.

 Memo

 An optional note for this check. Check memos display on the vendor's Vendor Transactions page in the Comment column.

 -
 In the check's summary section, enter or select the information in the available fields described below.

 Field
 Description

 Check will be printed

 Allows the check to be printed from Rent Manager . If this option is not selected, the check cannot be printed from Rent Manager . For more information, refer to Print Checks .

 Avid Pay

 An automatic bill payment integration provided by AvidXchange using the Post AvidPay tool in Rent Manager . For more information, refer to Post AvidPay (Page) .

 Related Preferences

 This option displays only if you have AvidPay set up in system preferences. For more information, refer to AvidXchange (System Preferences) .

 Attachments

 To attach any related images or documents from your network or computer to the check, click Upload Files .

 -
 In the section for expense line items, enter the check information for the property in the available columns.

 The available columns are described in the table below.

 Column
 Description

 Property

 The property to be expensed by the vendor to pay the loan.

 Unit

 If applicable, the specific unit to be expensed by the vendor for the loan payment. If the expense applies only to the property as a whole, leave this field blank.

 Expense Account

 The GL account to track this line item's expense. Theses accounts default to the Principle Account and Interest Account selected on the loan's details page in the Chart Accounts section. A line for each account displays in this section. Additionally, a line item displays for any costs entered on the loan's Payment Info pop-up, in the Monthly Escrow/Other Costs section.

 Memo

 An optional note or comment that provides further context for this expense used to categorize the loan payment.

 Amount

 The dollar amount expensed for this line item only. The monthly payment due on this loan automatically populates in each applicable line item.

 Once an Amount is added for all line items, you can click at the top of the page next to the Amount field to populate the total of all line item amounts in this section.

 -
 Click Save .
Next month's loan payment is applied to the loan's payable loan with a check.

 Option 2: Create a Journal Entry

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Journal entries
 Add, View

 For more information, refer to Control User Access .

 More Information

 The default payment method for recording loan payments with the loans payable tool is the payment method you selected when creating the loan. If you selected Check when you created the loan and want to record a loan payment with a journal entry, in the Payment Info section, click and set the Payment Method field to Journal .

 To add next month's payment to a loan with a journal entry, do the following:

 -
 Go to   arrow_forward Payables arrow_forward Loans Payable arrow_forward Loans Payable and select the loan you want to add a monthly payment to.
The Loan Payable details page displays.

 -
 At the top of the page, click the arrow on Extra Payment and select Add Monthly Payment .

 -
 In the journal's general information section, enter information in the following fields.

 Field
 Description

 Journal

 The system-generated number of the journal entry used to record the loan payment.

 Reference

 A short note to identify the purpose of the journal entry.

 Date

 The date on which this journal entry takes effect to cover the loan payment. For example, if you made a payment in the real world to cover next month's loan installment, the date indicated on both the real life payment and the journal entry in Rent Manager should be the same as or prior to the Next Payment Date .

 Basis

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Set journal basis (cash or accrual)
 Enabled

 For more information, refer to Control User Access .

 The accounting method for how the journal entry affects financial reports.

 Cash

 The journal entry affects only reports run in a cash accounting basis. All transactions are recorded when cash is paid or received, and unpaid invoices and expenses are not included in financial reports.

 Accrual

 The journal entry affects only reports run in an accrual accounting basis. All transactions are recorded as they are incurred, and unpaid invoices and expenses are included in financial reports.

 Both

 The journal entry affects all reports. This option is selected by default.

 Attachments

 To attach any relevant documents or images to the journal entry, click Upload Files .

 Memo

 A longer note to provide further information about the purpose of the journal entry transaction (e.g., Loan Payment for office mortgage ).

 Balance

 If the Total Debit and Total Credit are equal, In Balance displays. If they are not equal,   Not In Balance displays.

 Total Debit

 The total amount of debit entries in the journal.

 Total Credit

 The total amount of credit entries in the journal.

 Reconciled

 If the journal entry was reconciled, Reconciled displays at the top in red. The date of the reconciliation displays when you hover over it.

 -
 In the section that displays the journals debits and credits, enter information in the following fields.

 Column
 Description

 Account

 The GL account to adjust with this journal entry. Theses accounts default to the Principle Account , Bank Account , and Interest Account selected on the loan's details page in the Chart Accounts section. A line for each account displays in this section. Additionally, a line item displays for any costs entered on the loan's Payment Info pop-up, in the Monthly Escrow/Other Costs section.

 Property

 The property associated with the loan.

 Unit

 If applicable, the unit associated with the loan.

 Debit

 The amount that pays the next month's payment. This amount decreases the principle GL account.

 Credit

 The amount that is paid from the specified account. Credits increase income, equity, and liability accounts.

 Memo

 An optional additional message regarding this account adjustment (e.g., Mortgage Adjustment or Interest Payments ).

 -
 Click Save .
Next month's loan payment is applied to the loan's payable loan with a journal entry.
