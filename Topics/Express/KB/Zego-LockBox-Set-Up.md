# Set Up Zego Pay Lockbox

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Zego-LockBox-Set-Up.htm

The Zego Pay Lockbox integration provides an alternative way for tenants to submit physical payments, such as checks or money orders. Instead of mailing or dropping off payments at a front office, payments are mailed to a P.O. box that is managed by Zego . Zego then processes the payments and uploads them directly to the tenant's account in Rent Manager . The integration reduces the amount of time your office and employees spend on handling and processing physical payments as well as the risk of incorrect data entry related to those payments.

 More Information

 This feature is licensed and must be purchased separately. For more information, contact Zego directly.

 Step 1: Enable Zego Pay Lockbox

 To use the Zego Pay Lockbox integration you must have an account with Zego and you must contact Zego to have your account enabled for Zego Pay Lockbox. From there, you can set up the integration within Rent Manager .

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 ePay

 Access ePay Settings
 Enabled

 Setup and perform ePay operations
 Enabled

 For more information, refer to Control User Access .

 Related Preferences

 To access the system preferences for Zego Pay Lockbox, you need to have Enable ePay checked in system preferences. For more information, refer to General ePay (System Preferences) .

 To enable Zego Pay Lockbox, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward ePay arrow_forward Tenant ePay arrow_forward Lockbox .

 -
 Check Enable Lockbox .
The Authorize Lockbox pop-up displays to inform you that property and tenant information must be shared with Zego to use this integration.

 -
 To proceed, check Allow data to be shared with Zego and click OK .
The pop-up closes.

 More Information

 Once the payment arrives at the P.O. box, Zego uses the information provided on the envelope, payment, and any other information enclosed to locate the tenant's account in the correct Rent Manager database. They require shared data to ensure the payments are posted to the correct accounts.

 -
 Enter or select the following information:

 Option
 Description

 Properties

 Check to enable the desired properties with Zego Pay Lockbox functionality.

 More Information

 Zego Pay Lockbox can also be enabled or disabled by the Lock Box Enabled field on the property's details page.

 In addition, only properties marked as Active on the details page and enabled for ePay display in the list. For more information, refer to Property ePay Settings (Pop-Up) .

 Accept partial payments

 Allows tenants to make payments that are less than their current balance through Zego Pay Lockbox.

 Accept over payments

 Allows tenants to make payments that are greater than their current balance through Zego Pay Lockbox.

 Statement Return Address

 The address that displays on Tenant Statement (Option 2) - Lockbox at the top.

 More Information

 On the property's details page, the Default and Billing checkboxes display below the address types. These checkboxes are separate from any address type with a matching name. When selecting an address to use as the return address, confirm if you need the address type checked as Default or Billing or a single address type for all properties.

 Management Company Billing Address

 The return address pulls from the management company property's address that is checked as Billing . The management company property is established in system preferences.

 Property Address Type

 The return address pulls from the property on the tenant's primary lease. The address entered on the property's details page for the selected address type displays on the statement. If no address is entered for the selected address type on a property, a return address does not display on the statement.

 If you select <Use Default Address> , the address type checked as Default displays on the statement.

 If you select <Use Billing Address> , the address type checked as Billing displays on the statement.

 -
 Click Save
 Zego Pay Lockbox is enabled.

 Step 2: Establish System Settings

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 ePay

 Access ePay Settings
 Enabled

 Setup and perform ePay operations
 Enabled

 For more information, refer to Control User Access .

 The following settings must be enabled to use Zego Pay Lockbox.

 Deposit Options

 Zego follows the deposit settings in the ePay - Advanced system preferences Deposit Options section. Check to make sure your preferred deposit setup is enabled. For more information, refer to Advanced ePay (System Preferences) .

 Default Bank Account

 Payments processed through Zego Pay Lockbox are associated with the bank account set up in the Tenant ePay - General system preferences. For more information, refer to Tenant ePay (System Preferences) .

 More Information

 If a property has Use settings from System Preferences unchecked and a different bank listed in the Bank Account field on the property's ePay Setting pop-up, Zego uses that as the default bank for the property. For more information, refer to Property ePay Settings (Pop-Up) .

 Account Groups

 Tenants within account groups are able to submit payments through Zego Pay Lockbox. If your account group payments apply to all charges within the group, ensure Automatically apply account group credits is checked in system preferences. For more information, refer to Payment Options (System Preferences) .

 Step 3: Configure Tenants for Lockbox

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View

 For more information, refer to Control User Access .

 While your system settings manage most of how Zego Pay Lockbox operates, there are tenant-specific considerations to be aware of when using this integration with daily late fees and tenants with multiple leases.

 Warning

 Zego only has access to tenant data. If a prospect sends a payment to the P.O. box address, the payment is returned because Zego is unable to process information to prospect accounts.

 More Information

 Zego only has access to primary leases. If a tenant has multiple leases on the account, it may take longer to connect back to the correct tenant or may be sent back as unable to be located. If this occurs, contact Zego for assistance.

 Tenants with Per-Day Late Fees

 Per-day late fees monitor open charges that have a rent charge type applied. Once a payment is allocated to the full amount of the open rent charge, Rent Manager posts the accumulated per-day late fees to the account. Since Zego Pay Lockbox payments are submitted before daily late fees post, there is not a way for Zego to increase the payment to the account for the daily late fee charge.

 When Zego receives a payment, it may take one or more business days to be processed. Payments are not added to Rent Manager until processing is complete, which can potentially result in a tenant accruing per-day late fees for a payment they made on time. For example, a tenant begins accruing per-day late fees on the second of the month. They send a rent check on May 1 and it is received by Zego that evening, but it is not processed and added to their account until May 2. Since the payment in Rent Manager is dated May 2 (the date it was processed), the tenant is charged a per-day late fee despite having their payment being received on time.

 To avoid possible processing issues like these, it is recommended to manually manage per-day late fees for tenants who use Zego Pay Lockbox payments. For more information, refer to .

 Next Steps

 Once your Zego account is assigned a P.O. box address, and the system preference settings are enabled in your database, the Zego Pay Lockbox processes the payments. For more information on this process, refer to Process Zego Pay Lockbox Payments .
