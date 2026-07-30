# Set Up Zego ePay

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/ePay-Set-Up.htm

Zego ePay automatically transfers money either from ePay payments you made or that you receive from others in the real world and deposits them into the actual bank account(s). By enabling ePay in Rent Manager , you can utilize the feature to make or collect payments electronically, such as rent payments in Tenant Web Access (TWA) , application fees in Apply Now , owner distributions through Owner Web Access (OWA) , and more options directly in Rent Manager .

 More Information

 ePay is a licensed feature by Zego . To use Zego ePay , you must set up an account with Zego and enter that information into Rent Manager . For more information, contact sales@rentmanager.com .

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

 Step 1: Enable ePay and General System Preferences

 To enable ePay in Rent Manager , do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward ePay arrow_forward General .

 -
 Select Enable ePay .
The Merchant Information and General sections display.

 -
 In the Merchant Information section, enter your Zego account credentials in the following fields:

 Field
 Description

 Merchant ID

 The unique, numerical account identifier provided by Zego .

 Password

 The password provided by Zego .

 Username

 The account name provided by Zego .

 -
 In the General section, optionally select from the following options:

 Field
 Description

 Disable "Payment by Phone"

 If selected, users cannot accept one-time ePay payments on phone calls.

 Have Zego manage platform fees

 If selected, Zego automatically collects its platform fees for online processing directly from different kinds of ePay transactions. The fee amount is determined by your contract with Zego .

 Warning

 If this option is not selected, you are responsible for collecting platform fees from transactions and must pay those fees when invoiced by Zego .

 -
 Click Save .

 Step 2: Advanced System Preferences

 With ePay enabled, you need to establish the payment methods you want to accept and how ePay payments should be deposited by doing the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward ePay arrow_forward Advanced .

 -
 In the Account Types section, select the payment types you want to accept for ePay payments. If a selected account type is not enabled with Zego , payments cannot be processed using that method via ePay .

 More Information

 Zego also offers the CashPay  feature, which allows tenants and prospects to pay rent and other charges in cash at more than 25,000 retail locations within the United States. The Cash Pay option can be selected only if you have that feature enabled on your Zego account.

 For more information, refer to Zego CashPay .

 -
 In the Deposit Options section, select one of the following options:

 Option
 Description

 Automatically deposit ePay payments

 Check to allow ePay payments to automatically deposit in Rent Manager . These deposits display in the Bank Registers page.

 If unchecked, ePay payments display in the Make ePay Deposit page, and you must manually deposit them in Rent Manager .

 More Information

 If this option is selected, Rent Manager deposits ePay transactions in real time. As a result, your physical bank statements and Zego deposit batches do not match your real-time deposits.

 If you change the status of this option, a pop-up that asks if you wish to automate ePay deposits displays.

 Related Preferences

 Click Yes to update the Automatically deposit ePay payments field in system web preferences to match your setting in this window. For more information, refer to Web Access ePay (System Web Preferences) .

 Managed Deposits

 Check to manage ePay deposits on your own. ePay payments are displayed in the Make ePay Deposit page and must be manually deposited.

 Related Preferences

 If you wish to have Rent Manager automatically deposit payments shown in the Make ePay Deposit page as soon as Zego has verified the money is in your bank account, enable ePay Deposit Reconciliation in system preferences. For more information, refer to Task Automation (System Preferences) .

 Separate deposits (Credit Cards, ACH)

 Check to separate deposits based on the type of account used to make the payment. All credit card payments are included in one deposit, and all ACH payments are included in another.

 If Separate deposits is enabled, set the cutoff times for ACH and credit card (CC) payments to be considered part of a day's ePay deposits. All ePay deposits of the same account type that occur after the cutoff time are prevented from combining with other deposits made that day.

 More Information

 It is recommended that you enter a cutoff time that matches Zego ’s cutoff time, adjusted to your local time zone.

 Zego 's cutoff time is 7:00PM Eastern Time (ET) for your ACH payments and 7:45PM ET for your credit card payments. For example, these times adjusted for Pacific Time (PT) would be 4:00PM and 4:45PM respectively.

 -
 Click Save .

 Step 3: Security System Preferences

 Related Privileges

 Group
 Privilege
 Column

 ePay

 Set up ePay Password
 Enabled

 For more information, refer to Control User Access .

 Next, you need to establish an ePay password to control who can perform ePay -related tasks and process transactions by doing the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward ePay arrow_forward Security .

 -
 In the Password section, click Set Password .
The Set ePay  Password pop-up displays.

 -
 In the New Password and Confirm New Password fields, enter the desired ePay password including all of the specified requirements.

 Warning

 There is no way for Rent Manager to retrieve your ePay password (as part of PCI-DSS security requirements). Therefore, it is imperative that you choose your password carefully and remember it.

 -
 Click Save .
The ePay password is set.

 -
 If you use more than one Rent Manager database location and want to use the same ePay password, click Push Password and select the desired location(s) to receive these password settings, then click Save .

 -
 To set up of a threshold of days before purging the token used to securely relay ePay account information, select Enable Data Retention Policy and enter a value in the Number of days to retain ePay data before it is purged field.

 Warning

 It is not recommended that you enable or alter this setting without speaking to your Zego representative.

 Step 4: Enable ePay for Properties

 Finally, to utilize ePay , each property needs to have the option enabled and settings established to control how those payments are processed.

 More Information

 If you use ePay but need to deposit different charges to separate bank accounts, you can set up charge type banks on the property level to automatically route payments to an account that is not the property's default. For more information, refer to Set Up Charge Type Banks for ePay .

 To enable ePay for your properties, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select a property from the list.
The property's details page displays.

 -
 Click arrow_forward ePay  Settings .

 -
 If prompted, enter the ePay Password to authenticate your ePay account and click Authenticate .
The ePay Setting pop-up displays.

 -
 Select Enable ePay for this Property .

 -
 By default, Use settings from System Preferences is selected and all fields are populated with options selected in system preferences. Alternatively, you can establish property-specific settings by unchecking this option. For more information, refer to Set Up Property ePay .

 -
 Click Save .
The ePay account information is saved to the property.

 Next Steps

 Now that you have set up ePay , you are ready to establish settings to pay bills, collect payments, and receive owner contributions electronically. The recommended next steps are described in the table below.

 Action
 Description

 Applications

 Apply Now allows prospective tenants to submit an online application and automates the process of receiving rental applications, collecting application fees through ePay , and screening prospects.

 For more information, refer to Tenant Web Access Apply Now ePay (System Web Preferences) .

 Deposits

 The Web Access ePay page allows you to determine if ePay payments can either be deposited automatically into the bank register or combined into a single deposit for the full amount of payments for that day.

 For more information, refer to Web Access ePay (System Web Preferences) .

 Owners

 Owners can accept payments and make contributions using ePay . ePay accounts can be managed directly from the owner's details page. If you have the PayDirect feature with Zego , you can also utilize ePay to pay out owner distributions.

 For more information, refer to Owner ePay (System Preferences) and Owner ePay Settings (Pop-Up) .

 Tenants and prospects

 Tenants and prospects can make payments via Tenant Web Access (TWA) and Apply Now . Additionally, you can input account-level ePay information to be used with recurring ePay batch postings.

 For more information, refer to Set Up ePay for Tenants and Prospects .

 Vendors

 If you have the PayDirect feature with Zego , you can utilize ePay to pay vendor bills.

 For more information, refer to Vendor ePay (System Preferences) and Vendor ePay Settings (Pop-Up) .
