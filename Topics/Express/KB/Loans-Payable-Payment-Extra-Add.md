# Add an Extra Loans Payable Payment

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Loans-Payable-Payment-Extra-Add.htm

Rent Manager 's loans payable tool allows you to keep track of all balance changes as you pay off your outstanding loans. If you make an extra payment outside of your typical monthly loan payments, you can add a record of the payment in Rent Manager . For example, if an owner makes a contribution that you want to add to the loan, you can add that contribution amount as an additional payment. Extra payments made on a loans payable loan can be recorded with either a check or journal entry.

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Post Loans Payable
 Enabled

 Loans Payables
 View

 Banks/Checks
 Checks
 Add, View

 Accounting
 Journal entries
 Add, View

 For more information, refer to Control User Access .

 Option 1: Write a Check

 More Information

 The default payment method for recording loan payments with the loans payable tool is the payment method you selected when creating the loan. If you selected Journal when you created the loan and want to record a loan payment with a check, on the Payment Info section, click and set the Payment Method field to Check , EFT, or ACH .

 To add an extra loan payment to your loan with a check, do the following:

 -
 Go to arrow_forward Payables arrow_forward Loans Payable arrow_forward Loans Payable and select the loan you want to add an extra payment to.
The Loan Payable details page displays.

 -
 At the top of the page, click Extra Payment .

 -
 In the tile for the check's general information, review the information in the following fields.

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

 The date on which the check is to be issued to cover the extra loan payment. This date should match the date on the check you wrote in the real world for the extra loan payment.

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

 The check number that matches the number on the physical check written in the real world to pay the loan.

 Related Preferences

 To ensure each new check from the selected bank account defaults to the next number, enable the Next Check Number option. For more information, refer to Check Numbers (System Preferences) .

 Vendor

 The vendor receiving the check for the loan payment. If you have previously created a check for this vendor and would like to use that same information, click Fill from history and select the property from which the previous check was written. Rent Manager refreshes and populates the current check with information from the selected check.

 Payee Information

 The Payee name and address marked as Default , as entered on the vendor's details page.

 Amount

 The total amount of this check payment. If the payment needs only one line item, you can enter the check's total value in this field to add it to the Amount column for the automatically created line item. If the payment has multiple line items, create each line item and enter Amount values, then click to update this field to the total value of all line items.

 Address

 The address to which the check is sent, which populates when the account receiving the check is selected. Optionally, you can change the address by clicking and manually entering the address.

 Memo

 An optional note for this check. Check memos display on the vendor's Vendor Transactions page in the Comment column.

 -
 In the check's summary tile, enter or select the information in the available fields described below.

 Field
 Description

 Check will be printed

 Allows the check to be printed from Rent Manager . If this option is not selected, the check cannot be printed from Rent Manager . For more information, refer to Print Checks .

 Avid Pay

 An automatic bill payment integration provided by AvidXchange using the Post AvidPay tool in Rent Manager . For more information, refer to Post AvidPay (Page) .

 Related Preferences

 This option displays only if you have AvidPay set up in the AvidXchange Settings section of system preferences. For more information, refer to AvidXchange (System Preferences) .

 Attachments

 Click Upload Files to attach any related images or documents from your network or computer to the check.

 -
 In the tile for expense line items, enter or select the check information for the property in the available columns.

 The available columns relevant to the loan are described in the table below.

 Column
 Description

 Property

 The property to be expensed by the vendor to pay the loan.

 Unit

 If applicable, the specific unit to be expensed by the owner or vendor for the loan payment. If the expense applies only to the property as a whole, leave this field blank.

 Expense Account

 The GL account to adjust with this journal entry. This defaults to the Principal account selected on the loan's details page in the Chart Accounts tile.

 Memo

 An optional note or comment that provides further context for this expense used to categorize the loan payment.

 Amount

 The dollar amount expensed for this line item only. If the payment consists of only one line item, this column populates with the value entered in the Amount field at the top of the pop-up.

 -
 Click Save .
The extra loan payment is applied to the loans payable loan with a check.

 Option 2: Create a Journal Entry

 More Information

 The default payment method for recording loan payments with the loans payable tool is the payment method you selected when creating the loan. If you selected Check when you created the loan and want to record a loan payment with a journal entry, in the Payment Info section, click and set the Payment Method field to Journal .

 To add an extra payment to a loan with a journal entry, do the following:

 -
 Go to arrow_forward Payables arrow_forward Loans Payable arrow_forward Loans Payable and select the loan you want to add a extra payment to.
The Loan Payable details page displays.

 -
 At the top of the page, click Extra Payment .

 -
 In the journal's general information tile, enter information in the following fields.

 Field
 Description

 Journal

 The system-generated number of the journal entry used to record the loan payment.

 Reference

 An internal note or identifier for the journal entry.

 Date

 The date on which this journal entry takes effect to cover the loan payment. This should match the date the payment was made in the real world.

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

 The journal entry affects all reports.

 Attachments

 Click Upload Files to attach any relevant documents or images to the journal entry.

 Memo

 A longer note to provide further information about the purpose of the journal entry transaction (e.g., Extra Loan Payments ).

 Balance

 If the Total Debit and Total Credit are equal, In Balance displays. If they are not equal, Not In Balance displays.

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

 The GL accounts to adjust with this journal entry. These default to the Principal Account and Bank Account selected on the loan's details page in the Chart Accounts tile.

 Property

 The property associated with the loan.

 Unit

 If applicable, the unit associated with the loan.

 Debit

 The amount that pays the Remaining Principal . Debits increase asset and expense accounts.

 Credit

 The amount that is paid from the specified account. Credits increase income, equity, and liability accounts.

 Memo

 An optional additional message regarding this additional loan payment (e.g., Mortgage Adjustment or Owner Contributed Funds ).

 -
 Click Save .
The extra loan payment is applied to the loans payable loan with a journal entry.
