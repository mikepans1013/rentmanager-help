# Set Up Charge Type Banks for ePay

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/ePay-Set-Up-Charge-Type-Banks.htm

If you use ePay but need to deposit different charges to separate bank accounts, such as an operating account and an account for held security deposits, you can set up charge type banks on the property level to automatically route payments to an account that is not the property's default.

 Checks scanned and processed through ePay are considered Check 21 transactions. Check 21 transactions must be equal to or less than the charge amount and cannot be split between banks. Non-Check 21 transactions can be any amount and split by charge type to be deposited in multiple banks. CashPay and Lockbox transactions are not processed through charge type banks.

 More Information

 Before utilizing charge type banks for ePay payments, you must acquire ePay bank IDs from Zego for any of your bank accounts that are involved in ePay transactions. Only banks assigned an ePay ID can be used to receive tenant ePay payments.

 Step 1: Add ePay IDs to Charge Type Banks

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 Tenants
 Tenants
 View

 ePay

 Access ePay Settings
 Enabled

 Setup and perform ePay operations
 Enabled

 For more information, refer to Control User Access .

 Before you can use ePay with a bank account, you must first assign the bank account an ePay bank ID by doing the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward ePay arrow_forward Tenant ePay arrow_forward General .

 -
 In the System Defaults section, enter the ePay ID provided by Zego for each applicable Bank Account .

 -
 Click Save .
The bank account(s) with an assigned ePay ID can be used to collect ePay payments.

 Step 2: Assign Property Charge Type Banks

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Edit

 Property Bank Settings
 View, Edit

 For more information, refer to Control User Access .

 Once you have ePay bank IDs assigned for all applicable accounts, you can assign a property charge type bank for collecting ePay payments by doing the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select a property.
The property's details page displays.

 -
 In the Charge Type Banks tile, click .
The Charge Type Bank pop-up displays.

 -
 For each Charge Type , select the applicable ePay bank account for that charge type in the Bank column.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 -
 Click Save .
All future standard and ePay payments to that charge type are deposited to the selected bank account.
