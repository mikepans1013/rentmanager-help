# Refund a Security Deposit Held in Escrow

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Security-Deposit-Refund-Escrow.htm

When a tenant or prospect is moving out, you can use the security deposit refund tool to refund their security deposit or apply the deposit (partially or completely) to new or existing charges. You can also use this tool while they are still occupying the property to apply part of a held security deposit toward an open charge.

 If you keep your security deposits in a separate trust (or escrow) account, the process for refunding security deposits has specific steps to ensure the financial transfers are properly recorded.

 If you are contracted with one of Rent Manager 's integration partners Zego or Rentable, security deposit refunds can be processed through either integration.

 More Information

 If the security deposits for the tenant's property are held in the property's operating bank account, the process of refunding a full or partial security deposit is different. For more information, refer to Refund a Security Deposit .

 If you are refunding security deposits between roommates who are set as contacts on a main tenant or prospect account, the process of refunding a full or partial security deposit from escrow is different. For more information, refer to Refund a Security Deposit to Roommates from Escrow .

 Related Preferences

 Ensure you have defined a Tenant check pass-through account in system preferences, as this determines how reports display security deposit refunds. For more information, refer to General Ledger System Accounts (System Preferences) .

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

 Step 2: Refund the Deposit

 Once the deposit has been transferred out of the trust (or escrow) account, you can use Rent Manager 's deposit refund tool to return the deposit or a portion of it to the tenant or prospect.

 Related Preferences

 Ensure you have defined a Tenant check pass-through account in system preferences, as this determines how reports display security deposit refunds. For more information, refer to General Ledger System Accounts (System Preferences) .

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 Prospects
 View, Edit

 Receivables
 Tenant Transactions
 Add

 Refund security deposits with a bill
 Enabled

 Refund security deposits with a check
 Enabled

 Banks/Checks
 Write checks from banks that are not default
 Enabled

 For more information, refer to Control User Access .

 More Information

 If the security deposit refund is processed via one of Rent Manager 's integration partners, such as Zego Resident Payout or Rentable Security Deposits, there may be minor variations in the user interface.

 To manually refund a security deposit (and the security deposit interest) to a tenant or prospect, do the following:

 -
 Depending on whom you are refunding security deposit to, go to the following page:

 Entity Type
 Description

 Tenant

   arrow_forward Rental Info  arrow_forward General  arrow_forward Tenants and select a tenant account.

 Prospect

   arrow_forward Rental Info arrow_forward General arrow_forward Prospects and select a prospect account.

 The details page for tenant or prospect displays.

 -
 On the action bar to the right, click arrow_forward Refund Security Deposit .

 -
 In the first tile for general refund information, enter or select information in the available fields.

 Field
 Description

 Address

 The address that prints on the refund check. By default, this field displays the address on the tenant’s or prospect's account with Default checked.

 Bank Account

 The bank from which you want this refund to be issued. Since you have already transferred the security deposits from escrow into your operating bank account, select your operating bank.

 If the security deposit refund is processed via Zego Resident Payout, only ePay banks with non-zero IDs established in system preferences display. For more information, refer to Tenant ePay (System Preferences) .

 If the security deposit refund is processed via Rentable, Rentable Trust displays.

 More Information

 The selected account must be enabled in the property's Bank Settings field to process successfully. For more information, refer to Property Details (Page) .

 Warning

 It is best practice to transfer the funds out of escrow and into your operating account before refunding a security deposit, as this leaves a cleaner financial record and helps to prevent potential discrepancies.

 In some states or municipalities, it is illegal to refund a security deposit directly from the trust account. If you are refunding the full amount to the tenant and have not transferred the funds out of escrow, research your local laws or consult with a lawyer before you select a trust account in this field for performing a refund.

 Check #/Invoice #

 The number to associate with the check or invoice. This field changes based on the selection made in the Refund Via field.

 If Resident Payout is selected in the Refund via field, the required Email field displays, prepopulated with the payee's established email address.

 Date

 The security deposit refund transaction date.

 Payee

 The person receiving the security deposit refund. By default, the field populates with the primary tenant or prospect name.

 Refund Via

 The method by which to refund the tenant or prospect's security deposit and interest. Each option is described below.

 Bill

 A bill is generated to be paid to the tenant or prospect.

 Check

 A check is generated from the account selected in the Bank Account field.

 eChecks

 Rent Manager sends a printable, electronic check to the eCheck Email field that displays when this option is selected.

 Related Preferences

 This option displays only if Safeguard eChecks is enabled in your system preferences. For more information, refer to eChecks (System Preferences) .

 Rentable

 The security deposit refund is processed through integration partner Rentable. If selected, only deposit amounts held by Rentable display. If all deposits are held by Rentable, this field cannot be edited. For more information, refer to Set Up Security Deposits with Rentable .

 Resident Payout

 The security deposit refund is processed through integration partner Zego via the Resident Payout feature. To use this feature, Resident Payout must be enabled in system preferences. For more information, refer to Zego Resident Payout .

 Unit

 The unit associated with the security deposit.

 -
 If the tenant also accrues security deposit interest to be refunded, check the Include Interest option. The interest accrued for the tenant automatically calculates and displays in the Charge Type section. If a Rentable security deposit is refunded, the interest does not display and is handled by Rentable.

 Related Preferences

 The Interest Calculation , Rate , and Rate Percent fields populate with the information established in system preferences or on the property's details page. This option displays only if security deposit interest is enabled for the tenant's property. For more information, refer to Security Deposit Interest Options (System Preferences) and Interest Options for Security Deposits (Pop-Up) .

 -
 In the Charge Type section's Amount to Refund column, if you are only refunding part of the deposit, enter the desired amount to return to the tenant or prospect.

 -
 In the Apply To Current Charges section's Allocation column, you can enter the amount of the refund to apply to each open charge posted to the tenant or prospect's account. To automatically apply the full amount to all open charges, click Auto Allocate .

 -
 In the Apply to New Charges section, you can add new charges to apply the refund amount to by clicking Add Item , such as charges for damages found during a move-out inspection. Then, enter the following information:

 Column
 Description

 Amount

 The total dollar amount to charge the tenant or prospect, paid from their security deposit and interest specified in the Amount to Refund column.

 Charge Type

 The charge type to apply to the new charge. Each charge type is linked to one of the general ledger (GL) accounts from your chart of accounts.

 Comment

 A note providing context about the charge. The comment displays on the tenant or prospect's list of transactions in Rent Manager and on the their Tenant Web Access account.

 -
 In the Attachments tile, upload or paste any related documents or images to the security deposit refund, such as a copy of the physical check.

 -
 In the tile for the refund summary at the top, review the following information to verify everything is allocated correctly:

 Field
 Description

 Allocated

 The total dollar amount of the security deposit and interest refund amount being applied to new and/or existing charges.

 Amount Returned to Tenant/Prospect

 The final dollar amount of the refund the tenant or prospect receives after charge allocations are deducted.

 If you change the value in this field to a lower amount, the difference remains as security deposit held and the other amounts in this section update accordingly.

 Left

 The amount of the security deposit held after processing the refund.

 Refund

 The total dollar amount to process as a refund, before any of the refund is allocated to charges.

 -
 Click Save to apply the refund.
The security deposit is allocated to any specified charges and the rest is refunded to the tenant or prospect.

 More Information

 Alternatively, if you have a Refund Via method of Check selected, click Save and Print Check to immediately print the tenant or prospect's refund check. For more information, refer to Print Checks .
