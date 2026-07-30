# Reverse Transactions Dated Before Accounting Close

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Transactions-Reverse-Before-Account-Close.htm

Transactions such as bills, checks, and credit card transactions can be reversed by creating a journal entry dated after the most recent accounting close date that impacts the appropriate general ledger (GL) accounts. If a transaction in your real-world financial account is reversed, you also need to reverse that transaction in Rent Manager . If the transaction date is before the accounting close date, it must be reversed by creating a journal entry dated after the accounting close date.

 Warning

 Rent Manager uses double-entry bookkeeping to track all accounting records. You can save a journal entry only if the debits equal credits by property. If you also include units, the debits and credits must match per unit as well.

 It is recommended that only users with accounting experience use journal entries.

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Journal entries
 Add, View

 For more information, refer to Control User Access .

 To reverse a transaction dated before the accounting close, do the following:

 -
 Go to arrow_forward Accounting arrow_forward Journals arrow_forward  Journals .
The Journals page displays.

 -
 Click   Add Journal .
The Add Journal pop-up displays.

 -
 Enter the following general information.

 Field
 Description

 Journal

 The system-generated number of the journal entry.

 Rent Manager automatically generates a number to identify this journal entry. This field always displays < NEW >  when creating a new journal entry.

 Reference

 Additional information, such as a check or money order number, related to the journal entry.

 Date

 The date after the accounting close date.

 Basis

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Set journal basis (cash or accrual)
 Enabled

 For more information, refer to Control User Access .

 The accounting method for the journal entry (cash, accrual, or both).

 Period Adjustment

 Optionally, check to exclude the entry from financial reports as needed.

 Attachments

 To attach any files, images, or documents associated with the journal entry, click Upload Files .

 Memo

 Additional details regarding the purpose of the journal entry transaction (e.g., Security deposit transfer ).

 To select a memorized comment to use as the memo, click .

 -
 Select the GL accounts impacted by this journal entry. For each line item you need to add, click   Add Item and enter the following information.

 Field
 Description

 Account

 The GL account to adjust with this journal entry.

 Property

The property that this transaction is associated with.

 Unit

 If applicable, the unit associated with the account adjustment.

 Debit

 The dollar amount of the original transaction debited to this line item's GL account. Debits increase asset and expense accounts.

 Credit

The dollar amount of the original transaction credited to this line item's GL account. Credits increase income, equity, and liability accounts.

 Job

 If applicable, the name of the job to track the journal entry. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Memo

 An optional additional message regarding this account adjustment (e.g., Reverse Transaction , Security Deposit Transfer , Company Payroll ).

 -
 Click Save .
The journal entry is created, and the transaction is processed for the selected GL accounts on your accounting basis.
