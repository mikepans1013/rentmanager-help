# Set Up ePay for Vendors

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/ePay-Set-Up-Vendor.htm

Zego ePay automatically transfers money either from ePay payments you make to others or that you receive from others in the real world and deposits it into the actual bank(s).

 The vendor ePay automatically debits your bank or credit card account, deposits funds into the vendor’s account, and records the transaction in Rent Manager .

 More Information

 ePay is a licensed feature by Zego . To use Zego ePay , you must set up an account with Zego and enter that information into Rent Manager . Once you have ePay enabled in Rent Manager , you also need the PayDirect feature enabled in your Zego account to process vendor and owner transactions. For more information, contact sales@rentmanager.com .

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Vendors
 View, Edit

 ePay

 Setup and perform ePay operations
 Enabled

 For more information, refer to Control User Access .

 Step 1: Enable System Preferences

 In order to begin using ePay to pay vendors, the specific system preferences must be enabled.

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

 System Preference
 Description

 Advanced ePay

 Select preferences to control the types of ACH, credit card, and debit card accounts that you can accept and how the deposits of ePay payments are tracked in Rent Manager . For more information, refer to Advanced ePay (System Preferences) .

 Batch ePay

 Select preferences to control how multiple ePay payments are processed. For more information, refer to Batch ePay (System Preferences) .

 General ePay

 Enable Zego ePay and enter your Zego account credentials. For more information, refer to General ePay (System Preferences) .

 Network ePay

 Users with a firewall or proxy server must enter information about the proxy server to utilize the ePay module and work with the merchant service providers. For more information, refer to Network ePay (System Preferences) .

 Security ePay

 Rent Manager allows you to purge inactive data from the system, establish password parameters, and set your ePay password. For more information, refer to Security ePay (System Preferences) .

 Vendor ePay

 Select preferences to control vendor ePay transactions. Specify which bank account(s) are set up for ePay transactions and whether a warning limit should be set for these transactions. This system preference is required and must be enabled before vendor ePay can be used. For more information, refer to Vendor ePay (System Preferences) .

 Step 2: Add ePay Information to Vendor Account

 Each vendor who wants to receive bill payments through ePay processing must have payment information entered on the ePay Settings pop-up. The information entered remains on the vendor’s account to be used in future ePay  transactions.

 To add ePay information to a vendor account, do the following:

 -
 Go to arrow_forward Payables arrow_forward General arrow_forward Vendors and select a vendor.
The vendor's details page displays.

 -
 Click arrow_forward ePay  Settings .

 -
 If prompted, enter the ePay password to authenticate your ePay account and press Authenticate .

 -
 Select Turn on account on file .
The fields in the pop-up are now editable.

 -
 In the Account Information section, enter the following information.

 Field
 Description

 Account Number

 The account number associated with the vendor's ACH account.

 Account Type

 The vendor's ACH account that receives electronic payment when you pay bills associated with this vendor through ePay .

 First Name

 The first name of the vendor associated with the account.

 Last Name

 The last name of the vendor associated with the account.

 Routing Number

 The routing number associated with the vendor's ACH account.

 -
 In the Billing Address section, enter the billing address details associated with the ePay account. Alternatively, click Fill From Vendor to populate this field with the vendor's default address.

 -
 Click Save .
The ePay account information is saved to the vendor's account.
