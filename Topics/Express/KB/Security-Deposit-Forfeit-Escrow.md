# Forfeit a Security Deposit Held in Escrow

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Security-Deposit-Forfeit-Escrow.htm

There can be multiple reasons that a tenant's security deposit would be forfeited, such as breaking their lease, not paying rent, or causing damage to their unit. This topic guides you through forfeiting a security deposit for a tenant at a property that holds tenant security deposits in a separate bank account, often called a trust or escrow account.

 More Information

 If the security deposits for the tenant's property are held in the property's operating bank account, the process of forfeiting a security deposit is different. For more information, refer to Forfeit a Security Deposit in your Operating Bank Account .

 Step 1: Transfer Funds from Escrow

 Before you proceed, you must transfer the funds for the security deposit from the escrow account and into your operating bank account. You can transfer these funds either via journal entry or writing a check. Regardless of the method used in Rent Manager , you must also transfer these funds from the escrow account to the operating account in the real world.

 More Information

 If you transferred the funds in the real world via a check, you must record the transfer in Rent Manager by writing a check in Rent Manager as well, as opposed to recording it as a journal entry.

 Option 1: Journal Entry

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

 The date on which the security deposit was moved from the escrow bank to the operating bank in the real world.

 Journal

 The system-generated number of the journal entry.

 Rent Manager automatically generates a number to identify this journal entry. This field always displays <NEW>  when creating a new journal entry.

 Memo

 Additional details regarding the purpose of the journal entry transaction (e.g., Security deposit transfer ).

 To select a memorized comment to use as the memo, click .

 Period Adjustment

 If checked, this journal is marked as adjusting entry and therefore can be excluded from financial reports as needed.

 -
 In the section below, click Add Item to add a line item for this transfer.

 -
 For this line item, enter information in the available columns as described below.

 Column
 Description

 Account

 The property's trust (or escrow) bank account where the security deposit is currently located.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 Credit

 The amount of the security deposit. This decreases that amount from the escrow bank account.

 Memo

 An optional note about the line item specifically, such as Removing security deposit from escrow bank .

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

 The operating bank account that the security deposit is being moved into.

 Debit

 The amount of the security deposit. This increases that amount for the operating bank account.

 Memo

 An optional note about the line item specifically, such as Moving security deposit into operating bank .

 Property

 The property associated with the tenant's lease. This should be the same as the first line item's Property .

 Unit

 The unit associated with the tenant's security deposit. This should be the same as the first line item's Unit .

 -
 Click Save & Close .
 The journal entry is created and the amount of the security deposit is moved from the property's trust (or escrow) account and into the operating account.

 Option 2: Write a Check

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

 The total amount of the security deposit to move from escrow to operating.

 Bank

 The property's trust (or escrow) bank account where the security deposit is currently located.

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

 The property's operating bank account that the security deposit is being moved into.

 Warning

 The only time you would select a bank account in this column for a check is when performing a security deposit transfer. For any other instance of writing a vendor check, you select the expense GL account that tracks the expense.

 Property

 The property associated with the tenant's lease.

 Unit

 The property associated with the security deposit.

 -
 Click Save & Close .
 The check is created and the amount of the security deposit is moved from the property's trust (or escrow) account and into the operating account.

 Step 2: Forfeit the Deposit

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 Receivables
 Tenant Transactions
 Add

 Refund security deposits with a bill
 Enabled

 For more information, refer to Control User Access .

 To forfeit a security deposit, do the following:

 -
 Depending on whom is forfeiting a security deposit, go to the following page:

 Entity Type
 Description

 Tenant

   arrow_forward Rental Info  arrow_forward General  arrow_forward Tenants and select a tenant account.

 Prospect

   arrow_forward Rental Info arrow_forward General arrow_forward Prospects and select a prospect account.

 The details page for tenant or prospect displays.

 -
 On the action bar to the right, click arrow_forward Refund Security Deposit .
The Refund Security Deposit pop-up displays.

 -
 In the first tile's Date field, enter the date of the forfeiture. Because this is a full forfeiture and nothing will be refunded, you do not need to make any changes to the other fields on this tile.

 More Information

 Although no refund is being issued, it is recommended that in the Refund Via field you select Bill . Selecting Check requires that you select the operating bank in the Bank Account field before proceeding. Regardless of your selection, the forfeiture is processed the same way.

 -
 In the Apply To New Charges section, click Add Item .

 -
 In the available columns, enter the following information:

 Columns
 Description

 Amount

 The full amount of the security deposit as displayed in the Deposit Held field at the top of the pop-up.

 Charge Type

 The charge type that your company uses specifically for security deposit forfeitures.

 More Information

 Security deposit forfeitures should have their own unique charge type. If you do not yet have a charge type dedicated to forfeited security deposits, it needs to be created. For more information, refer to Add a Charge Type .

 Comment

 An optional note that provides additional context about the forfeiture, such as Security Deposit Forfeiture or the reason for the forfeiture.

 Warning

 Some states allow you to apply the security deposit to existing charges when processing a forfeiture or partial refund. Check with your local laws before entering any amounts in the Apply To Current Charges section.

 The Refund Summary section now displays that the entire deposit is allocated and no amount is returned to the tenant or prospect.

 -
 Click Save .
Transactions are applied to the tenant or prospect's account showing the forfeiture charge and the held security deposit's credit being allocated to that charge.
