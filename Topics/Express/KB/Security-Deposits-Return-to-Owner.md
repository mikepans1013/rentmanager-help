# Return Security Deposits to an Owner

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Security-Deposits-Return-to-Owner.htm

If you are holding security deposits for an owner who is no longer using your management company's services, you must return those security deposits that you are holding to the owner or the new management company.

 To do this in Rent Manager , apply security deposits for each tenant to a new charge type, and then write the owner a check for the total amount of the deposits.

 Step 1: Create a New Charge Type

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Charge types
 Add, View

 For more information, refer to Control User Access .

 Before returning security deposits to an owner, you need to add a charge type to indicate that the deposits are being released to the owner. If you already have a charge type for owner deposit returns, proceed to step 2.

 To create a new charge type, do the following:

 -
 Go to arrow_forward Accounting arrow_forward General arrow_forward Charge Types .
The Charge Types page displays.

 -
 Click Add Charge Type .
The Add Charge Type pop-up displays.

 -
 In the Name field, enter a unique label to identify this charge type.

 -
 In the Chart Account field, select the appropriate chart account to report the amount given to the owner from the drop-down list.

 More Information

 To indicate the amount was converted to income for the owner, select an income account. If it is still being held as a liability for the owner, select a liability account.

 -
 If needed, enter or select any further options on the pop-up. For more information, refer to Add a Charge Type .

 -
 Click Save & Close .
The new charge type is created.

 Step 2: Update Tenant Accounts

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 Receivables
 Tenant transactions
 Add

 Refund security deposits with a check
 Enabled

 For more information, refer to Control User Access .

 Tenants who reside at the owner's property must have their accounts updated to reflect the movement of funds. This causes financial reports to display the amount as either income or liability (depending on the charge type) for the owner.

 More Information

 The steps below assume that the funds are in the owner's operating bank; if they are not, first transfer them to the operating bank. This ensures that if any charges are paid off using the security deposits, that income is placed in the operating account and not left in escrow. For more information on transferring funds, refer to Transfer Money Between Bank Accounts .

 To update tenant accounts, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select a tenant who resides at the owner's property from the list.
The tenant's details page displays.

 -
 On the scoreboard at the top, click Refund Deposit .
The Refund Security Deposit pop-up displays.

 -
 In the first tile for general refund information, enter or select information in the available fields.

 Field
 Description

 Address

 The address that prints on the refund check. By default, this field displays the address on the tenant’s or prospect's account with Default checked.

 Bank Account

 The bank from which you want this refund to be issued. Generally, this is the operating bank account for the owner's property.

 Check #/Invoice #

 The number to associate with the check or invoice. This field changes based on the selection made in the Refund Via field.

 Date

 The security deposit refund transaction date.

 Payee

 The person receiving the security deposit refund. By default, the field populates with the primary tenant or prospect name.

 Refund Via

 The method by which to refund the tenant's security deposit and interest to the owner. Each option is described below.

 More Information

 The Bill option is used to generate bills that pay tenants or prospects, and should not be selected when refunding security deposits to owners.

 Check

 A check is generated from the account selected in Bank Account .

 eChecks

 Rent Manager sends a printable, electronic check to the eCheck Email .

 Related Preferences

 This option displays only if Safeguard eChecks is enabled in your system preferences. For more information, refer to eChecks (System Preferences) .

 Unit

 The unit associated with the security deposit.

 -
 Depending on your agreement with the owner, you may need to apply some or all of the amount to outstanding charges. To apply an amount of the deposit to those charges, in the Apply To Current Charges section, enter the applicable amount in the Allocation column, or click Auto Allocate to automatically apply funds to all charges.

 -
 In the Apply To New Charges section, click Add Item .

 -
 In the Charge Type column, select the charge type you created for returning security deposits to the owner.

 -
 In the Amount column, enter the remaining amount to be returned to the owner.

 -
 At the top-right of the pop-up, verify that the Amount Returned To Tenant field displays 0.00 , indicating that you are no longer holding any funds tied to the tenant.

 -
 Click Save .

 -
 Repeat this process for each tenant at the owner's property.

 Step 3: Pay the Owner

 Related Privileges

 Group
 Privilege
 Column

 Owners
 Create payments for owners
 Enabled

 For more information, refer to Control User Access .

 After deposits are released from tenant accounts, you must pay those funds out to the owner.

 To pay the security deposit return to the owner, do the following:

 -
 Go to arrow_forward Owners arrow_forward Owner Payments arrow_forward Manual Owner Pay .
The Manual Owner Pay page displays.

 -
 In the Details section, enter or select information in the following fields:

 Field
 Description

 Amount

 The total dollar amount for all deposits being transferred to the owner.

 Bank

 The owner's operating bank account.

 Date

 The date the payment was made in real life. The current date populates by default.

 Draw Account

 The chart account linked to the charge type you created.

 Property

 The owner's property.

 -
 In the Owner Percentages section's Pay Method column, select the applicable payment method for the owner.

 -
 In the Summary section, enter or select information in the following fields:

 Field
 Description

 Comment

 A brief description of the distribution, such as Security deposit return .

 Write Checks

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Checks
 Add, View

 For more information, refer to Control User Access .

 Creates a check for the owner based on their allocated deposit return.

 -
 Click Pay .
Depending on your method of payment, a check is generated, or an electronic payment is made.
