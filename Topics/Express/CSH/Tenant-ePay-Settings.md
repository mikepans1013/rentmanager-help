# Tenant ePay Settings (Pop-Up)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Tenant-ePay-Settings.htm

Zego ePay automatically transfers money either from ePay payments you make to others or that you receive from others in the real world and deposit them into the actual bank account(s). By entering a tenant's bank account or card details into Rent Manager , you can process batch payments or utilize recurring ePay automation to collect payment electronically.

 More Information

 If a tenant has active leases at multiple properties, the settings of the tenant's default property are used to process ePay transactions.

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 ePay

 Setup and perform ePay operations
 Enabled

 For more information, refer to Control User Access .

 To view and manage a tenant's ePay information, go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select a tenant from the list. Then, on the action bar to the right, click arrow_forward ePay Settings and enter your ePay Password if prompted.

 Account Information

 This section displays the bank account or card information used when processing ePay payments for this tenant.

 To add an additional ePay account to be used as an alternative to the default method, click Add Secondary Account Information .

 Field
 Description

 Account Type

 The bank account or card used to collect ePay payments. Each option is described below.

 More Information

 The payment options in this field are dependent on your contract with Zego . For example, your company may have the ability to process payments for credit cards but not debit cards. If you are unsure which account types are available to you, contact your Zego representative.

 ACH - Checking/Saving

 Payments are processed using a checking or saving bank account via the automated clearing house (ACH) network.

 Credit Card

 Payments are processed using a credit card.

 Debit Card

 Payments are processed using a debit card.

 Account Number

 The full bank account number. This field displays only if, in the Account Type field, ACH - Checking or ACH - Savings is selected.

 Routing Number

 The full routing number for the bank account. This field displays only if, in the Account Type field, ACH - Checking or ACH - Savings is selected.

 Card Number

 The full credit or debit card number. This field displays only if, in the Account Type field, Credit Card or Debit Card is selected.

 Exp Month

 The expiration month of the credit or debit card. This field displays only if, in the Account Type field, Credit Card or Debit Card is selected.

 Exp Year

 The expiration year of the credit or debit card. This field displays only if, in the Account Type field, Credit Card or Debit Card is selected.

 CVV2

 The credit or debit card's three-digit card security code. This field displays only if, in the Account Type field, Credit Card or Debit Card is selected.

 First Name

 The first name associated with the bank account or card.

 Last Name

 The last name associated with the bank account or card.

 Billing Address

 This section displays the street address associated with the tenant's bank account or card. Click Fill from Tenant to automatically populate the fields with the address marked as Default on the tenant's account.

 More Information

 The Country field displays only if, in the Account Type field, Credit Card or Debit Card is selected. Additionally, the State field displays as State/Province only for Credit Card or Debit Card payment methods.

 Reminders

 This section displays the day of each month that an ePay batched posting is made to this tenant's account along with the most recent date and period for which an ePay payment was posted for this tenant. Rent Manager provides the tenant with a reminder as the Posting Day approaches each month.

 ePay Batch Settings

 This section displays whether the account is enabled for ePay payment batch postings, if a confirmation email is sent to the tenant when payment is processed, and the dollar amount charged for those payments.

 Each field is described below.

 Field
 Description

 Include Tenant in ePay Batch Postings using default account information

 If enabled, the account information entered on this pop-up is used when ePay batch payments including this tenant are processed.

 More Information

 If a tenant is enrolled in Flexible Rent through Flex, you cannot process payments for their account using recurring ePay . For more information, refer to Flexible Rent .

 Send Confirmation

 The tenant receives an email confirmation when an ePay payment batch is posted.

 Related Preferences

 In system preferences, you must determine if a letter is automatically emailed to tenants for declined and/or successful transactions in a batch in order to enable this confirmation option. For more information, refer to Batch ePay (System Preferences) .

 Batch Calculation

 The amount charged to the tenant when an ePay payment batch is posted. Each option is described below.

 Full Balance

 The tenant is charged the entirety of their account balance, including future-dated charges.

 Selected Charges

 The tenant is charged only for transactions of the charge type(s) selected in the ePay Charge Types drop-down list.

 Set Amount

 The tenant is charged a specified dollar amount.

 Use Property Settings

 The tenant is charged the amount established in their associated property's ePay settings. For more information, refer to Property ePay Settings (Pop-Up) .

 Current Balance

 The tenant is charged the total dollar amount of any transactions dated on or before the current date.

 Never charge more than

 The maximum dollar amount to collect from this tenant when ePay batch payments are posted. This option displays only if, in the Batch Calculation drop-down list, Full Balance or Selected Charges is selected.
