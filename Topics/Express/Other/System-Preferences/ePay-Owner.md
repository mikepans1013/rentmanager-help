# Owner ePay (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/ePay-Owner.htm

Adjust these preferences to control default bank accounts, warning limits, and platform charges that should be applied against owner contributions processed using ePay .

 More Information

 You can enable, disable, or adjust ePay settings for individual owners through the owner's account. For more information, refer to Owner ePay Settings (Pop-Up) .

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 Owners
 Owners
 View

 ePay

 Access ePay Settings
 Enabled

 Setup and perform ePay operations
 Enabled

 For more information, refer to Control User Access .

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward ePay arrow_forward Owner ePay .
The System Preferences: ePay - Owner ePay page displays.

 -
 Select the option to Enable ePay for Owners .

 -
 Edit the settings as desired. Each setting is described in the headings below.

 -
 Click Save .
The system preference configuration is updated.

 General

 In this section, you can assign ePay IDs to participating banks for receiving owner ePay payments and set a warning limit when receiving an owner's ePay payment equal to or beyond the specified threshold.

 Option
 Description

 Platform Fee Information

 Click this link to view a disclaimer about the application of platform fees. Rent Manager cannot provide specific guidance on the implementation of platform fees as these requirements vary by contract and local, state, and federal laws.

 ePay Banks

 Assign ePay IDs provided by Zego to any of your bank accounts that are involved in owner ePay transactions, such as withdrawals and contributions. Only banks assigned an ePay ID can be used to complete owner ePay transactions.

 Warning Limit

 Enter a value to display a warning message when an ePay transaction involving an owner is equal to or beyond the specified threshold. For example, to have a warning display whenever a user attempts to process an owner ePay  transaction that is five hundred dollars or more, enter 500 .

 Zego Platform Fees

 Platform fees are collected for transactions that are processed differently than traditional methods, such as cash or checks. Electronic payments in Rent Manager are processed through Zego ePay , and platform fees are collected by Zego . The fields below customize how the platform fees are collected.

 Related Preferences

 If the Have Zego manage platform fees option is enabled in system preferences, the fields below are replaced by a list of platform fees Zego automatically collects directly from the ePay transaction. Click Update ePay Fees to generate the most up-to-date platform fee information directly from Zego . For more information, refer to General ePay (System Preferences) .

 Option
 Description

 Charge platform fees in Owner Web Access for

 Check the following options to determine how platform fees are charged on owner contributions in Owner Web Access (OWA) . Enter the flat fee dollar amount(s) in the field(s) to the right. Optionally, check Percentage and enter a value to charge a percentage of the amount collected instead of a flat fee.

 ACH

 Check to charge platform fees on owner ACH contributions in OWA.

 Credit Cards

 Check to charge platform fees on owner credit card contributions in OWA.

 Debit Cards

 Check to charge platform fees on owner debit card contributions in OWA.

 Charge platform fees in Rent Manager for

 Check the following options to determine how platform fees are charged on owner contributions in OWA. Enter the flat fee dollar amount(s) in the field(s) to the right. Optionally, check Percentage and enter a value to charge a percentage of the amount collected instead of a flat fee.

 ACH

 Check to charge platform fees on owner ACH contributions in Rent Manager .

 Credit Card

 Check to charge platform fees on owner credit card contributions in Rent Manager .

 Debit Cards

 Check to charge platform fees on owner debit card contributions in Rent Manager .

 Liability Account

 Select a liability general ledger account to track platform fees charged for owner ePay contributions. This account prevents platform fees from being wrongly recorded as income. When a tenant pays a platform fee, this account's balance increases. When you are charged by Zego for the platform fee, this account's balance decreases.
