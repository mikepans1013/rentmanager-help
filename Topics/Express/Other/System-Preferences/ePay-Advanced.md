# Advanced ePay (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/ePay-Advanced.htm

Advanced ePay settings allow you to control the types of automated clearing house (ACH) and credit card accounts that can be used in payments as well as how the deposits of ePay payments are tracked by Rent Manager .

 Warning

 When setting up ePay for the first time, a Zego representative schedules a call to help you configure these system preferences and acquire additional information to enable the feature. It is not recommended that you adjust any of these settings prior to that call.

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

 For more information, refer to Control User Access .

 To set these system preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward ePay arrow_forward Advanced .
The System Preferences: ePay - Advanced page displays.

 -
 Edit the settings as desired. Each setting is described in the headings below.

 -
 Click Save .
The system preference configuration is updated.

 Account Types

 In this section, you can select the available ePay account options for your tenants and owners. Contact Zego if you do not know which accounts to select. They can confirm the valid account types for you.

 More Information

 If you are licensed for the CashPay feature with Zego , a Cash Pay field displays in the Account Types section, and you can set the CashPay  daily cutoff time. Setting the cutoff time to the local equivalent of Zego ’s cutoff time of 2:59AM Eastern is recommended.

 Deposit Options

 In this section, you may select how the deposits of ePay payments are tracked by Rent Manager .

 Option
 Description

 Automatically deposit ePay payments

 Check to allow ePay payments to automatically deposit in Rent Manager . These deposits display on the Bank Registers page. This option is not available if Managed Deposit is selected.

 If left unchecked, ePay payments display on the Make ePay Deposit page, and you must manually deposit them in Rent Manager .

 More Information

 If this option is selected, Rent Manager deposits ePay transactions in real time. As a result, your physical bank statements and Zego deposit batches do not match your real-time deposits.

 Related Preferences

 If you change the status of this option, a pop-up asks if you wish to automate ePay deposits. Click Yes to update the Automatically deposit ePay payments field in system web preferences to match your setting on this page. For more information, refer to Web Access ePay (System Web Preferences) .

 Managed Deposits

 Check to manage ePay deposits on your own. ePay payments are displayed on the Make ePay Deposit page and must be manually deposited.

 Related Preferences

 If you wish to have Rent Manager automatically deposit payments shown in the Make ePay Deposit page as soon as Zego has verified the money is in your bank account, enable ePay Deposit Reconciliation in system preferences. For more information, refer to Task Automation (System Preferences) .

 Separate deposits (Credit Cards, ACH)

 Check to separate deposits based on the type of account used to make the payment. All credit card payments are included in one deposit, and all ACH payments are included in another.

 If enabled, set the cutoff times for ACH and credit card (CC) payments to be considered part of a day's ePay deposits. All ePay deposits of the same account type that occur after the cutoff time are prevented from combining with other deposits made that day and instead count towards the next day.

 More Information

 It is recommended that you enter a cutoff time that matches Zego ’s cutoff time, adjusted to your local time zone.

 Zego 's cutoff time is 7:00PM eastern time for your ACH payments and 7:45PM eastern time for your credit card payments. These times adjusted for pacific time, for example, would be 4:00PM and 4:45PM respectively.
