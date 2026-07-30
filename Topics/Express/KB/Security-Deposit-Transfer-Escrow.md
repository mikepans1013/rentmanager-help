# Transfer a Security Deposit from a Payment into an Escrow Account

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Security-Deposit-Transfer-Escrow.htm

If you have a separate trust account to hold your tenants' security deposits, then it is essential that all security deposit payments you received are stored in this bank account. However, if you have a tenant who sends you a single payment that pays multiple other charges in addition to the security deposit (such as pet fees and prorated rent), you cannot split that single payment into two different accounts during the deposit process. Instead, you deposit the entire payment into the property's operating bank account, then you transfer the security deposit amount out of the operating account and into the trust (or escrow) account using a check or journal entry.

 More Information

 Funds display as security deposits on reports if the following conditions are met:

 -
 The charge type(s) you use to record security deposits are set up as security deposit charge types in system preferences. For more information, refer to Security Deposit General Options (System Preferences) .

 -
 The security deposit charge is created on the tenant's account and a payment is allocated to the charge.

 -
 The unit selected in the Unit field is linked to same unit where the security deposit is being held.

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 Prospects
 View, Edit

 For more information, refer to Control User Access .

 More Information

 Before transferring the security deposit to escrow, you must first deposit the whole payment into the operating bank account. When depositing the payment, ensure that the Bank Account field has the option <Use Property Default> selected. For more information, refer to Make a Bank Deposit .

 Option 1: Transfer via Journal

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Journal entries
 Add, View

 For more information, refer to Control User Access .

 To transfer funds using a journal entry, do the following:

 -
 Go to arrow_forward Accounting arrow_forward Journals arrow_forward Journals .
The Journals page displays.

 -
 Click Add Journal .
The Add Journal pop-up displays.

 -
 In the top tile, enter the following information:

 Field
 Description

 Attachments

 To attach any files, images, or documents associated with the journal entry (such as a photo of the deposit slip), click Upload or   Paste .

 Basis

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Set journal basis (cash or accrual)
 Enabled

 For more information, refer to Control User Access .

 The accounting method for the journal entry (cash, accrual, or both). It is best practice to select Both in most scenarios.

 Date

 The date on which the security deposit was deposited into the escrow bank in the real world.

 Journal

 The system-generated number of the journal entry.

 Rent Manager automatically generates a number to identify this journal entry. This field always displays <NEW>  when creating a new journal entry.

 Memo

 Additional details regarding the purpose of the journal entry transaction (e.g., Security deposit transfer ).

 To select a memorized comment to use as the memo, click .

 Period Adjustment

 If checked, this journal is marked as adjusting entry and therefore can be excluded from financial reports as needed.

 Reference

 A short note to identify the purpose of the journal entry, such as the method of payment. For example, if the security deposit was part of a check payment, enter that check's number.

 -
 In the section below, click Add Item to add a line item for this transfer.

 -
 For this line item, enter information in the available columns as described below.

 Column
 Description

 Account

 The property's operating bank account where the security deposit is currently located.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 Credit

 The amount of the security deposit. This decreases that amount from the operating bank account.

 Memo

 An optional note about the line item specifically, such as Removing security deposit from operating bank .

 Property

 The property associated with the tenant's lease.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Unit

 The unit associated with the tenant's security deposit.

 -
 Click Add Item to add another line item.

 -
 For this second line item, enter information in the available columns as described below.

 Column
 Description

 Account

 The property's trust (or escrow) bank account that the security deposits is being moved into.

 Debit

 The amount of the security deposit. This increases that amount for the escrow bank account.

 Memo

 An optional note about the line item specifically, such as Moving security deposit into escrow bank .

 Property

 The property associated with the tenant's lease. This should be the same as the first line item's Property .

 Unit

 The unit associated with the tenant's security deposit. This should be the same as the first line item's Unit .

 -
 Click Save & Close .

 The journal entry is created and the amount of the security deposit is moved from the property's operating bank account and into the trust (or escrow) account.

 Option 2: Transfer via Check

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Checks
 Add, View

 For more information, refer to Control User Access .

 To transfer funds by writing a check, do the following:

 -
 Go to arrow_forward Payables arrow_forward Checks arrow_forward Write Checks .
The Write Check pop-up displays.

 -
 In the first tile, enter the general information for the check as specified below.

 Field
 Description

 Amount

 The total amount of the security deposit to transfer from operating to escrow.

 Bank

 The property's operating bank account where the security deposit is currently located.

 Date

 The date on which the security deposit was transferred in the real world.

 Memo

 Additional details regarding the purpose of the check (e.g., Security deposit transfer ).

 To select a memorized comment to use as the memo, click .

 No.

 The check number used to identify this transfer. If you transferred the funds in the real world using a check, enter that check's number.

 Vendor, Owner, Tenant, or Prospect

 Ensure the option  Vendor is selected, then select your property management company's vendor account.

 Related Preferences

 The property management vendor account is determined by your selection in system preferences in the Associated Vendor field. For more information, refer to Management Company (System Preferences) .

 -
 Optionally, in the Attachments field, click   Upload or   Paste to attach any files, images, or documents associated with the check (such as a copy of the inspection that warranted a forfeiture).

 -
 In the section below, enter information in the available columns as described below.

 Column
 Description

 Amount

 The total amount of the security deposit to transfer from escrow to the operating account.

 Expense Account

 The property's escrow bank account that the security deposit is being moved into.

 Warning

 The only time you would select a bank account in this column for a check is when performing a security deposit transfer. For any other instance of writing a vendor check, you select the expense GL account that tracks the expense.

 Property

 The property associated with the tenant's lease.

 Unit

 The property associated with the security deposit.

 -
 Click Save & Close .

 The check is created and the amount of the security deposit is moved from the property's operating bank account and into the trust (or escrow) account.
