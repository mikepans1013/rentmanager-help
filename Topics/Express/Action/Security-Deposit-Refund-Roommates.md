# Refund a Security Deposit Between Roommates

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Security-Deposit-Refund-Roommates.htm

When a tenant and/or their roommate(s) move out, you can use the security deposit refund tool to refund their security deposit or apply the deposit (partially or completely) to new or existing charges. You can also use this tool while they are still occupying the property to apply part of a held security deposit toward an open charge. Some state and municipal governments require that security deposits held accrue interest, which must be returned to tenants and roommates when you refund security deposits.

 If you are contracted with one of Rent Manager 's integration partners Zego or Rentable, security deposit refunds can be processed through either integration.

 More Information

 If the security deposits for the tenant's property are held in a separate trust (or escrow) bank account, the process of fully or partially refunding a security deposit is different. For more information, refer to Refund a Security Deposit to Roommates from Escrow .

 This topic covers how to refund security deposits for roommates that are set up as contacts on a tenant account. If you have roommates set up as individual tenants in an account group, security deposits need to be refunded for each account individually. For more information, refer to Refund a Security Deposit .

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

 To manually refund a security deposit (and the security deposit interest) to a tenant or prospect and their roommate(s) , do the following:

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
 In the first tile's Payee field, select the primary tenant or prospect being refunded their portion from the drop-down list.

 -
 In the first tile for general refund information, enter or select information in the available fields.

 Field
 Description

 Address

 The address that prints on the refund check. By default, this field displays the address on the tenant’s or prospect's account with Default checked.

 Bank Account

 The bank from which you want this refund to be issued. Generally, this is the operating bank account where the security deposits are held.

 If the security deposit refund is processed via Zego Resident Payout, only ePay banks with non-zero IDs established in system preferences display. For more information, refer to Tenant ePay (System Preferences) .

 If the security deposit refund is processed via Rentable, Rentable Trust displays.

 More Information

 The selected account must be enabled in the property's Bank Settings field to process successfully. For more information, refer to Property Details (Page) .

 Check #/Invoice #

 The number to associate with the check or invoice. This field changes based on the selection made in the Refund Via field.

 If Resident Payout is selected in the Refund via field, the required Email field displays, prepopulated with the payee's established email address.

 Date

 The security deposit refund transaction date.

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
 In the Charge Type section's Amount to Refund column, enter the desired amount to return to the primary tenant or prospect selected in the Payee field.

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

 -
 Repeat these steps for all roommates who are receiving part of the security deposit refund.
