# Tenant Lockbox ePay (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/ePay-Tenant-Lockbox.htm

The Zego Pay Lockbox integration is a way for tenants to submit physical payments to a PO box as opposed to a property management company’s direct address. It alleviates manual data entry for payments, reduces the risk of handling payments in the office, and provides another option for tenants who prefer physical payment.

 Once the payment arrives at the PO Box, Zego uses the information provided on the envelope, payment, and any other information enclosed to locate the tenant's account in the correct Rent Manager database. They require shared data to ensure the payments are posted to the correct accounts.

 This system preference allows you to enable and configure the feature for your database.

 More Information

 To use the Zego Pay Lockbox integration you must have an account with Zego and you also must contact Zego prior to enabling the feature in Rent Manager to setup your PO Box.

 Related Preferences

 To access the system preferences for Zego Pay Lockbox, you need to have Enable ePay checked in system preferences. For more information, refer to General ePay (System Preferences) .

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

 Set up and perform ePay operations
 Enabled

 Tenants/Prospects
 Tenants
 View

 For more information, refer to Control User Access .

 To set these system preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward ePay arrow_forward Tenant ePay arrow_forward Lockbox .
The System Preferences: Tenant ePay - Lockbox page displays.

 -
 Check Enable Lockbox to integrate Zego Pay Lockbox with Rent Manager .
The Authorize Lockbox pop-up displays.

 -
 Check Allow data to be shared with Zego , then click OK . This grants Zego the ability to post payments to the correct tenant accounts.

 More Information

 If you have multiple Rent Manager locations, this setting needs to be enabled on each individual location with the Zego Pay Lockbox functionality. Click to view Zego 's phone number, which you can call for more information about Zego Pay Lockbox.

 -
 Edit the settings as desired. Each setting is described in the headings below.

 -
 Click Save .
The system preference configuration is updated.

 Lockbox

 In this section's Properties field, select each property with Zego Pay Lockbox functionality. Only active properties enabled for ePay display in the list. For more information, refer to Property ePay Settings (Pop-Up) .

 More Information

 Zego Pay Lockbox can be enabled or disabled on the property's details page by checking or unchecking the Enable Lockbox field. This field overrides the system preference setting for that specific property. For more information, refer to Property Details (Page) .

 Payment Options

 In this section, determine tenants' Zego Pay Lockbox payment options.

 Option
 Description

 Accept over payments

 If checked, allows tenants to make payments that are greater than their current balance through Zego Pay Lockbox.

 Accept partial payments

 If checked, allows tenants to make payments that are less than their current balance through Zego Pay Lockbox.

 Statement Return Address

 In this section, choose the address that displays at the top of the Tenant Statement (Option 2) - Lockbox report. For more information, refer to Statement (Option 2) - Lockbox (Report) .

 Option
 Description

 Management Company Billing Address

 The return address pulls from the management company property's address that is checked as Billing on the property's details page. The management company property is established in system preferences. For more information, refer to Management Company (System Preferences) .

 Property Address Type

 The return address pulls from the property on the tenant's primary lease. The address entered on the property's details page for the selected address type displays on the statement. If no address is entered for the selected address type on a property, a return address does not display on the statement.

 If you select <Use Default Address> , the address type checked as Default on the property's details page displays on the statement.

 If you select <Use Billing Address> , the address type checked as Billing on the property's details page displays on the statement.
