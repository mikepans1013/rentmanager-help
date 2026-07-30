# Recurring Journal Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Journals-Recurring-Details.htm

Recurring journals are journal entries that are used on a recurring basis (daily, weekly, or monthly) to perform money transfers between general ledger (GL) accounts. Recurring journals are saved as templates and can be posted manually as often as needed or be configured to post automatically using Task Automation . All recurring journals in your database are listed in the Recurring Journals page, and from there you can view the details of any recurring journal.

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Recurring journals
 View, Edit

 For more information, refer to Control User Access .

 To view a recurring journal's details page, go to   arrow_forward Accounting arrow_forward Journals arrow_forward Recurring Journals and select a recurring journal from the list.

 At the top right of the page, click to view information regarding when and by which user the recurring journal was created and updated.

 Information

 The Information section contains basic contact and administrative items for the recurring journal.

 Field
 Description

 Reference

 A short note or reference to identify the purpose of this journal entry.

 Start Date

 The date this recurring journal should first be posted.

 End Date

 The date this recurring journal should no longer post new one-time journals.

 Frequency

 The number of times a new one-time journal should be created from this template. For example, 1 Month(s) means post once every month; 2 Month(s) means post once every two months; 3 Month(s) means post once every three months (quarterly).

 Number Left

 How many more times this journal should be posted.

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

 Period Adjustment

 Notates that this journal entry is an adjusting entry. This allows for the entry to optionally be excluded from financial reports.

 Details

 The Details section contains the credit and debit entries for the recurring journal.

 Column
 Description

 Account

 The GL account to adjust with this journal entry.

 Property

 The property involved in the account adjustment.

 Unit

 If applicable, the unit associated with the account adjustment.

 Job

 If applicable, the name of the job to track the journal entry. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Debit

 The amount you wish to debit the specified account. Debits increase asset and expense accounts.

 Credit

 The amount you wish to credit the specified account. Credits increase income, equity, and liability accounts.

 Memo

 An optional additional message regarding this account adjustment (e.g., Asset Depreciation , Security Deposit Transfer , Company Payroll ).

 Summary

 The Summary section displays information regarding credits, debits, and whether the journal entry is balanced.

 Field
 Description

 Memo

 A longer note to provide further information about the purpose of the journal entry transaction (e.g., Security Deposit Transfer ).

 Last Post

 The date the recurring journal was last posted.

 Next Post

 The next date the recurring journal is to be posted. This is calculated for you by applying one cycle of the Frequency – Period value to the date of the Last Post . For example, the Next Post Date of a recurring journal last posted on August 17 of this year with a one-month frequency would be September 17 of this year.

 Automate

 If enabled, automatically posts this journal based on the posting schedule in the Information section. The journal is automatically posted as a new one-time journal at the designated times.

 Related Preferences

 If task automation is not enabled for recurring journals in the Task Automation system preferences, a warning displays at the bottom of the page when you try to save. For more information, refer to Task Automation (System Preferences) . Task Automation is available for Rent Manager Online users only.

 Notification Email

 The email address that receives a notification for each successful or failed automatic posting of this journal. If entering more than one email address, separate each with a semicolon (;).

 Total Debit

 The total amount of debit entries in the journal.

 Total Credit

 The total amount of credit entries in the journal.

 Balance

 If the Total Debit and Total Credit are equal, In Balance displays. If they are not equal, Not In Balance displays.
