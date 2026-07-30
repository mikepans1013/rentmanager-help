# Set Up ePay for Tenants and Prospects

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/ePay-Set-Up-Tenants-Prospects.htm

Zego ePay automatically transfers money either from ePay payments you make to others or that you receive from others in the real world and deposit them into the actual bank(s). Before you can set up ePay for tenant and prospect payments, you need to enable ePay in Rent Manager and establish various preferences. For more information, refer to Set Up Zego ePay .

 Zego ePay can be used for tenants and prospects who want to electronically do the following:

 -
 Receive any payments related to a tenant lease, such as rent charges, garage fees, or damages.

 -
 Receive application or reservation fees for prospects using Apply Now .

 More Information

 ePay is a licensed feature by Zego . To use Zego ePay , you must set up an account with Zego and enter that information into Rent Manager . For more information, contact sales@rentmanager.com .

 Set Up ePay Payments in Rent Manager

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 Tenants/Prospects
 Tenants
 View, Edit

 Prospects
 View, Edit

 ePay

 Access ePay Settings
 Enabled

 Setup and perform ePay operations
 Enabled

 For more information, refer to Control User Access .

 In order to begin using ePay to collect recurring payments (also called batch payments) from tenants and prospects, you must establish system preferences for how those batches are processed and enter ePay payment information for those accounts. Entering ePay payment information on accounts can expedite the process of accepting one-time payments via ePay , but one-time payment information can also be entered at the time of accepting the payment.

 Step 1: Establish System Preferences

 To set up batch ePay preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward ePay arrow_forward Batch .

 -
 In the General section, select a Batch Calculation method to determine how much money is charged when ePay payment batches are processed:

 Option
 Description

 Full Balance

 Tenants and prospects are charged for their entire account balance.

 To limit the amount charged with this option selected, select Never Charge More Than and enter the maximum dollar amount that tenants and prospects can be charged when recurring ePay payments are posted.

 Selected Charges

 Tenants and prospects are charged the total amount for unpaid charges associated with the Charge Types selected from the drop-down list.

 To limit the amount charged with this option selected, select Never Charge More Than and enter the maximum dollar amount that tenants and prospects can be charged when recurring ePay payments are posted.

 Set Amount

 Tenants and prospects are always charged the value entered in the Amount field.

 -
 In the Send Receipts After Batch section, select the receipt(s) that should be sent to the tenant or prospect:

 Option
 Description

 Email Decline

 If checked, a letter is automatically emailed to tenants or prospects for failed transactions in a batch. Select the letter template to use for the declined letter.

 Email Success Receipt

 If checked, a confirmation letter is automatically emailed to tenants or prospects for successful transactions in a batch. Select the letter template to use for the confirmation letter.

 Optionally, check Attach invoices so that when invoices are paid by an ePay payment, that invoice is be attached to the confirmation email.

 -
 Click Save .
Future ePay batch payments are processed using the selected options.

 More Information

 If desired, set up an automation schedule for recurring ePay to post payments on a regular basis. For more information, refer to Add a Recurring ePay Automation Schedule .

 Step 2: Enter Account ePay Information

 To use ePay batches or recurring ePay in Rent Manager , you need to acquire bank account or card information from tenants and prospects to use with ePay . Once you have that information, establish ePay settings for their accounts by doing the following:

 -
 Navigate to the desired entity whose ePay information you need to enter.

 Entity
 Navigation

 Prospect

 Go to arrow_forward Rental Info arrow_forward General arrow_forward Prospects and select a prospect.

 Tenant

 Go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select a tenant.

 -
 On the action bar to the right, select arrow_forward ePay  Settings .

 -
 If prompted, enter your ePay password and click Authenticate .

 -
 Select Turn on tenant account on file or Turn on prospect account on file .

 -
 In the Default Account Information tile, enter information in the following fields:

 Field
 Description

 Account Number

 The full bank account number. This field displays only if, in the Account Type field, ACH - Checking or ACH - Savings is selected.

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

 CVV2

 The credit or debit card's three-digit card security code. This field displays only if, in the Account Type field, Credit Card or Debit Card is selected.

 Card Number

 The full credit or debit card number. This field displays only if, in the Account Type field, Credit Card or Debit Card is selected.

 Exp Month

 The expiration month of the credit or debit card. This field displays only if, in the Account Type field, Credit Card or Debit Card is selected.

 Exp Year

 The expiration year of the credit or debit card. This field displays only if, in the Account Type field, Credit Card or Debit Card is selected.

 First Name

 The first name associated with the bank account or card.

 Last Name

 The last name associated with the bank account or card.

 Routing Number

 The full routing number for the bank account. This field displays only if, in the Account Type field, ACH - Checking or ACH - Savings is selected.

 More Information

 To add an additional ePay account to be used as an alternative to the default method, click Add Secondary Account Information . For more information, refer to Add a Secondary Tenant ePay Account .

 -
 In the Billing Address tile, click Fill from Tenant or Fill from Prospect to populate the address marked Billing on the tenant or prospect account. Alternatively, manually enter an address.

 -
 In the Reminders tile's Posting Day field, enter the day of the month that the tenant or prospect's ePay payments should be posted. Rent Manager displays a reminder on the day you enter.

 -
 To use the account's ePay information when processing batch ePay payments, in the ePay Batch Settings tile, select Include Tenant in ePay Batch Postings using default account information or Include Prospect in ePay Batch Postings using default account information .

 Warning

 If a tenant is enrolled in Flexible Rent through Flex, you cannot process payments for their account using recurring ePay . For more information, refer to Flexible Rent .

 -
 Establish how the account is charged in ePay batches by entering information in the following fields:

 Field
 Description

 Batch Calculation

 The amount charged to the tenant or prospect when an ePay payment batch is posted. Each option is described below.

 Full Balance

 The tenant or prospect is charged the entirety of their account balance, including future-dated charges.

 Selected Charges

 The tenant or prospect is charged only for transactions of the charge type(s) selected in the ePay  Charge Types drop-down list.

 Set Amount

 The tenant or prospect is charged a specified dollar amount.

 Use Property Settings

 The tenant or prospect is charged the amount established in their associated property's ePay settings. For more information, refer to Property ePay Settings (Pop-Up) .

 Current Balance

 The tenant or prospect is charged the total dollar amount of any transactions dated on or before the current date.

 Never charge more than

 The maximum dollar amount to collect from this tenant or prospect when ePay batch payments are posted. This option displays only if, in the Batch Calculation drop-down list, Full Balance or Selected Charges is selected.

 Send Confirmation

 The tenant or prospect receives an email confirmation when an ePay payment batch is posted.

 -
 Click Save .
The tenant or prospect's payment information and ePay batch settings are saved.

 Set Up ePay for Online Payments

 Related Privileges

 Group
 Privilege
 Column

 System
 System Web Preferences
 Enabled

 ePay

 Access ePay Settings
 Enabled

 Setup and perform ePay operations 
 Enabled

 For more information, refer to Control User Access .

 Tenant Web Access (TWA) is a web portal that allows tenants and prospects to make payments for any charges on their account, such as rent, violation fees, and pet deposits. Before tenants and prospects can make online ePay payments, you need to enable TWA. For more information, refer to Set Up Web Portal Suite .

 More Information

 This feature is licensed as part of Web Portal Suite and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 To set up Tenant Web Access (TWA) preferences and accept payments, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Web Preferences arrow_forward Tenant Web Access arrow_forward Page Setup arrow_forward Make a Payment .

 -
 Select Allow Making Payments .

 -
 If prospects should not be able to make payments in TWA, select Exclude from prospects . With this option enabled, prospects are still able to make a payment during the application process.

 -
 Customize how the payment page displays in TWA using the following options:

 Option
 Description

 Custom Message

 Text that displays at the top of the payment page for all TWA users.

 Menu Title

 The name of the payment tab that displays in TWA.

 Title

 The name of the payment page that displays in TWA.

 -
 Click Save .
Tenants (and prospects if Exclude from prospects is not selected) can make ePay payments in TWA.

 Set Up ePay for Application Fees

 Related Privileges

 Group
 Privilege
 Column

 System
 System Web Preferences
 Enabled

 ePay

 Access ePay Settings
 Enabled

 Setup and perform ePay operations 
 Enabled

 For more information, refer to Control User Access .

 Apply Now allows prospective tenants to submit an online application and automates the process of receiving rental applications, collecting application fees, and screening prospects. Before prospects can submit applications and pay fees online, you need to enable Apply Now and create application templates. For more information, refer to Apply Now Applications .

 More Information

 This feature is licensed as part of Web Portal Suite and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 To set up Apply Now preferences and accept application fees, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Web Preferences arrow_forward Tenant Web Access arrow_forward Apply Now arrow_forward ePay .

 -
 Select Enable ePay .

 -
 If prompted, enter your ePay password.

 -
 Customize how payments are processed using the following options:

 Option
 Description

 Additional Application Fees

 If applicable, you can create more platform fees using this table by clicking Add Item .

 For each additional application fee, enter a Description , the Charge Type for the fee, and the Fee Amount .

 Application Fee Amount

 The amount for application fees completed online. This amount can be overridden in the settings of each application template.

 Application Fee Charge Type

 The charge type associated with application fees. This charge type can be overridden in the settings of each application template.

 Do not require payment for application to be submitted

 If checked, allow applicants to submit an Apply Now application without paying the above application fees.

 In the Pay Later Message field, optionally edit the default message to display to applicants who do not pay upon application submission, such as an explanation about your organization's policies for handling an application that is not accompanied by payment.

 Financial Property

 The property that receives Apply Now application fees by default, such as the management company. If Apply Now fees should be received by the property that the prospect applied to, leave this field blank. This property can also be overridden on individual application templates.

 Have Zego manage platform fees

 If checked, allow Zego to automatically collect its platform fees for online processing directly from applications. Instead of manually setting up platform fee charges, set the platform fees in the available fields described below.

 Related Preferences

 This option is available only if the system preference option to Have Zego manage platform fees is enabled. For more information, refer to General ePay (System Preferences) .

 ACH platform fee amount

 The platform fee amount for processing an ACH (automated clearing house) payment to pay the application fee online. Optionally, check Percentage and enter a value to charge a percentage of the amount collected instead of a flat fee.

 CC platform fee amount

 The platform fee amount for using a credit card to pay the application fee online. Optionally, check Percentage and enter a value to charge a percentage of the amount collected instead of a flat fee.

 Override System Preferences Default Payment Types

 If checked, allow different forms of payment for Apply Now applications than the defaults specified in system preferences. After checking the box, check which payment types to allow.

 Related Preferences

 Payment methods that are not selected in system preferences are not selectable; however, additional payment methods can be removed as desired. For more information, refer to Advanced ePay (System Preferences) .

 Platform fee charge type

 The charge type associated with platform fees.

 Require a disclaimer for ePay transactions

 If checked, include a disclaimer for ePay transactions associated with the application process. Applicants will be required to check the box next to the disclaimer to verify they read the message before submitting the application fee payment.

 -
 Click Save .
 ePay is enabled for Apply Now and can be used to collect application fees.

 More Information

 If application fees are different for individual properties or application template types, such as commercial properties or guarantor applications, you can establish ePay settings on the property and/or application level. For more information, refer to Property Application Settings (Pop-Up) and Set Up Apply Now Application Settings .

 Next Steps

 Now that you have set up ePay for tenants and prospects, you are ready to start collecting payments. The recommended next steps are described in the table below.

 Action
 Description

 AutoPay

 TWA offers an automatic payment feature called AutoPay which allows users with TWA accounts to set up recurring payments for their rent or other charges. These preferences allow you to enable AutoPay and designate on which day(s) of the month automatic payments can be submitted.

 For more information, refer to Tenant Web Access AutoPay (System Web Preferences) .

 Process manual ePay payments

 If a tenant or prospect has ePay payment information entered on their account, you can process ePay payments manually from their account's details page.

 For more information, refer to Process a Manual ePay Payment .

 Recurring ePay

 Recurring ePay allows you to pull payments from tenants and prospects based on the account information set up on their account's ePay Settings pop-up. This is useful for tenants who may not want to submit payments through TWA but still want to pay electronically.

 For more information, refer to Post Recurring ePay and Recurring ePay Automation Schedules (Page) .

 Set up ePay deposits

 When payments are made via ePay , the funds are automatically processed and deposited into your actual bank account(s) by Zego . To ensure that your financial data in Rent Manager  matches your real world finances, you can either manually deposit ePay payments or set up Task Automation settings for ePay deposit reconciliation.

 For more information, refer to Make ePay Deposits and Reconcile ePay Deposits ..
