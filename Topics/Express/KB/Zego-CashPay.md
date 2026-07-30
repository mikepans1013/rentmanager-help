# Zego CashPay

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Zego-CashPay.htm

Rent Manager 's integrated partner Zego offers the CashPay feature, which allows tenants and prospects to pay their rent and other charges in cash at more than 25,000 retail locations within the United States. CashPay payments are immediately reflected within your Rent Manager database. Using CashPay removes the need to handle cash at your office, which reduces liability and risk and allows tenants and prospects to pay during convenient retail hours. This feature also eliminates the data entry associated with money order payments. Before receiving CashPay payments or distributing account numbers to tenants or prospects, you must enable CashPay in system preferences.

 More Information

 ePay is a licensed feature by Zego . To use Zego ePay , you must set up an account with Zego and enter that information into Rent Manager . Once you have ePay enabled in Rent Manager , you also need the CashPay feature enabled in your Zego account. For more information, contact sales@rentmanager.com .

 Enable CashPay

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

 To enable CashPay , do the following:

 -
 Go to   arrow_forward   Administration , then go to Preferences arrow_forward System Preferences arrow_forward ePay arrow_forward Advanced .
The System Preferences: ePay -Advanced page displays.

 -
 In the Account Types section, select Cash Pay .

 More Information

 Account types must first be setup with Zego before they are available to enable in Rent Manager . For more information, contact Zego .

 -
 In the Deposit Options section, select one of the following options:

 More Information

 If the Deposit Options have already been set up for use with another Zego product, you can skip this step.

 Option
 Description

 Managed Deposits

 Manage ePay deposits on your own. ePay payments are displayed in the Make ePay Deposit page and must be manually deposited.

 Related Preferences

 If you wish to have Rent Manager automatically deposit payments shown in the Make ePay Deposit page as soon as Zego has verified the money is in your bank account, enable ePay Deposit Reconciliation in system preferences. For more information, refer to Task Automation (System Preferences) .

 Separate deposits (Credit Cards, ACH)

 Separate deposits based on the type of account used to make the payment. All credit card payments are included in one deposit, and all ACH payments are included in another.

 If Separate deposits is enabled, set the cutoff times for ACH and credit card (CC) payments to be considered part of a day's ePay deposits. All ePay deposits of the same account type that occur after the cutoff time are prevented from combining with other deposits made that day.

 More Information

 It is recommended that you enter a cutoff time that matches Zego ’s cutoff time, adjusted to your local time zone.

 Zego 's cutoff time is 7:00PM eastern time for your ACH payments and 7:45PM eastern time for your credit card payments. These times adjusted for pacific time, for example, would be 4:00PM and 4:45PM respectively.

 Automatically deposit ePay payments

 Allow ePay payments to automatically deposit in Rent Manager . These deposits display in the Bank Registers page.

 If left unchecked, ePay payments display in the Make ePay Deposit page, and you must manually deposit them in Rent Manager .

 If this option is selected, Rent Manager deposits ePay transactions in real time. As a result, your physical bank statements and Zego deposit batches do not match your real-time deposits.

 Related Preferences

 If you change the status of this option, a pop-up that asks if you wish to automate ePay deposits displays. Click Yes to update the Automatically deposit ePay payments field in system web preferences to match your setting in this page. For more information, refer to Web Access ePay (System Web Preferences) .

 -
 After making your selections, click Save .

 Establish CashPay  System Preferences

 To determine how CashPay operates in your Rent Manager database, do the following:

 -
 Go to   arrow_forward   Administration , then go to Preferences arrow_forward System Preferences arrow_forward ePay arrow_forward Cashpay .
The System Preferences: ePay Cashpay page displays.

 -
 Check any of the following options.

 Option
 Description

 Send the following balance as the amount due:

 The balance amount the tenant should pay with CashPay .

 Total balance

 The total amount of all charges including future charges.

 Current balance

 The current balance due as of today's date.

 Sum the balance of all tenants in an account group

 Check to ensure that the total amount due for the tenant is the sum balance of all the tenants in the account group. For more information, refer to Manage Account Groups .

 Allow partial payments

 If checked, allow tenants to pay less than the amount due.

 Allow payments over amount due

 If checked, allow tenants to pay more than the amount due.

 Understand How CashPay  Works

 CashPay allows tenants more flexibility to pay their rent and other charges related to their account. Once enabled for use in your Rent Manager , a unique account number is generated by Zego that links the tenant's CashPay payment to their account. Once the tenant has been given their CashPay account number, they can visit locations where CashPay is accepted and use the service as needed. The process changes depending on the type of CashPay offering you have selected with Zego .

 Next Steps

 After enabling CashPay in your database, you must assign a CashPay account number to the accounts of the tenants or prospects who wish to use this service. This process depends on which CashPay version your business utilizes: the free Basic version or the paid Affinity version. For more information, refer to Assign a CashPay Account Number .
