# Set Up Property ePay

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/ePay-Set-Up-Property.htm

Zego ePay automatically transfers money either from ePay payments you make to others or that you receive from others in the real world and deposit them into the actual bank(s).

 Each property has ePay settings with information needed to process electronic transactions. Zego ePay settings must be enabled for each property that will be involved in ePay transactions for prospect, tenant, vendor, and owner ePay to work correctly.

 More Information

 ePay is a licensed feature from Zego . To use Zego ePay , you must set up an account with Zego and enter that information into Rent Manager . For more information, contact sales@rentmanager.com .

 Step 1: Establish ePay Banks

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

 More Information

 This topic is specific to enabling additional properties for ePay after ePay has already been set up in Rent Manager . If you are setting up ePay for the first time, refer to Set Up Zego ePay .

 Before you can enable ePay for properties or other entities, you need to assign your banks to their respective ePay bank IDs provided by Zego . To assign ePay banks, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward ePay arrow_forward Tenant ePay arrow_forward General .
The System Preferences: Tenant ePay - General page displays.

 -
 In the System Defaults section, enter information in the following fields:

 Option
 Description

 Default Bank Account

 Select the bank account that receives tenant ePay payments.

 More Information

 When using Zego , the ePay Banks section is available. This section allows you to assign ePay IDs (provided by Zego ) to any of your bank accounts that are involved in ePay transactions. Only banks assigned an ePay ID can be used to receive tenant ePay  payments.

 ePay Banks

 Assign ePay IDs (provided by Zego ) to any of your bank accounts that are involved in ePay transactions. Only banks assigned an ePay ID can be used to complete ePay transactions.

 Warning Limit

 Enter a value to display a warning message when receiving a tenant ePay payment equal to or beyond the specified threshold.

 -
 In the Resident Payout section, select Allow security deposit refunds to tenants via electronic payout if you utilize Zego Resident Payout for security deposit refunds. For more information, refer to Zego Resident Payout .

 -
 In the Zego Platform Fees section, enter information in the following fields:

 Option
 Description

 Charge Type

 The charge type to assign for platform fees (i.e., an additional cost for processing payments via ACH or credit cards).

 Charge platform fees in Rent Manager for:

 Check the applicable options to determine if platform fees are charged on that type of tenant ePay payment in Rent Manager :  ACH (automated clearing house), Credit Card , or Debit Card . Then enter the flat fee dollar amount(s) in the field(s) to the right. Optionally, check Percentage and enter a value to charge a percentage of the amount collected instead of a flat fee.

 Charge platform fees in Tenant Web Access for:

 Check the applicable options to determine if platform fees are charged on that type of tenant ePay payment in TWA:  ACH (automated clearing house), Credit Card , or Debit Card . Enter the flat fee dollar amount(s) in the field(s) to the right. Optionally, check Percentage and enter a value to charge a percentage of the amount collected instead of a flat fee.

 -
 Click Save .
Your ePay  bank IDs and platform fees are updated.

 Related Preferences

 To learn more about ePay system preferences, refer to Tenant ePay (System Preferences) .

 Step 2: Add ePay Information at the Property Level

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Edit

 ePay

 Set up and perform ePay operations
 Enabled

 For more information, refer to Control User Access .

 To add ePay information to a property, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select a property from the list.
The property's details page displays.

 -
 Click arrow_forward ePay Settings .

 -
 If prompted, enter the ePay Password to authenticate your ePay account and click Authenticate .

 -
 Select Enable ePay for this Property .

 -
 If this property uses different ePay settings from system preferences, uncheck Use settings from System Preferences to establish settings unique for this property.
The fields in the pop-up are now editable.

 -
 In the General Settings section, enter information into the following fields:

 Related Preferences

 If the Have Zego manage platform fees option is enabled in system preferences, only the Bank Account and ePay Warning Limit fields display. For more information, refer to General ePay (System Preferences) .

 Field
 Description

 Apply fee in Rent Manager / Tenant Web Access to

 The payment method(s) for which platform fees are charged in Rent Manager and/or Tenant Web Access . Depending on your ePay settings, fees can be established for each method by selecting ACH , Credit Card , and/or Debit Card .

 This value can be a flat dollar amount or, if Percentage is checked, a percentage of the total transaction amount.

 Bank Account

 The general ledger (GL) bank account that ePay payments made to this property are deposited into.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to User Details (Page) .

 Additionally, this field populates with only banks that have been set up as ePay banks with an associated ePay ID. These IDs are generated and provided by Zego and must be associated with the desired bank account in system preferences.

 ePay Warning Limit

 If a dollar amount is entered in this field, a warning message displays when processing an ePay payment equal to or more than this amount.

 Fee Type

 The charge type used for platform fee transactions when processing ePay payments for this property.

 -
 In the ePay Batch Settings section's Batch Calculation field, select one of the following options:

 Field
 Description

 Full Balance

 Tenants at this property are charged the entirety of their account balance, including future-dated charges.

 If Never charge more than is checked, the value entered in the field is the maximum dollar amount collected for ePay payments from this property's tenants.

 Selected Charges

 Tenants at this property are charged only for transactions of the selected charge type(s).

 If Never charge more than is checked, the value entered in the field is the maximum dollar amount collected for ePay payments from this property's tenants.

 Set Amount

 Tenants at this property are charged a specified dollar amount.

 -
 Checks need to be endorsed with a name/signature on the back. If no endorsement name is entered and a scanned check is processed using ePay , the property name is added to the back of the scanned check image by default.
To override this default endorsement, in the ePay Check Scanning section, check Override Endorsement and enter your desired endorsement.

 -
 In the Resident Payout section, select Allow security deposit refunds to tenants via electronic payout if you utilize Zego Resident Payout for security deposit refunds. For more information, refer to Zego Resident Payout .

 -
 Click Save .
The ePay account information is saved to the property.
