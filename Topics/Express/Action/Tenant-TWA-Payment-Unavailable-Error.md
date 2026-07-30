# Payment Type Unavailable Message in Tenant Web Access (TWA)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Tenant-TWA-Payment-Unavailable-Error.htm

When using Zego ePay to make payments in Tenant Web Access (TWA) , tenants and prospects can sometimes encounter a Payment Type Unavailable error. In most cases, this error indicates that the payment type the tenant is attempting to use (e.g., ACH , Debit Card , Discover ) is not enabled in system preferences. This error can typically be resolved by having the tenant or prospect submit payment with a payment type that is already enabled, or by enabling the payment type they are attempting to use.

 Warning

 ePay payment types (known as account types in Rent Manager ) must be set up with Zego prior to changing settings in your Rent Manager database. To review and update the payment types available for your account, contact Zego directly.

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

 To enable ePay payment types in Rent Manager , do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward ePay arrow_forward Advanced .

 -
 In the Account Types tile, enable the relevant account type(s).

 -
 Click Save .
The active account types are updated. The affected tenant(s) or prospect(s) can now make their ePay payment in TWA.

 More Information

 If your tenants and prospects continue to encounter this error after enabling the relevant account type, contact Zego directly for additional support.
