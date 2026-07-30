# eChecks (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/eChecks.htm

Safeguard eChecks allow you to write checks and pay bills electronically through Rent Manager and deliver the payment to the intended recipient(s) through email. These system preferences are used to establish default settings for eChecks payments and set up automation options.

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 To set these system preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward eChecks .
The System Preferences: eChecks page displays.

 -
 If you have not yet enabled eChecks in Rent Manager , select Enable eChecks . To disable the integration, uncheck this option.

 More Information

 If you are enabling eChecks in your database, in the General section, click Sign up for eChecks Account and fill out the requested details. For more information, refer to Set Up eChecks .

 -
 If eChecks are enabled, edit the settings as desired. Each setting is described in the headings below.

 -
 Click Save .
The system preference configuration is updated.

 General

 To sign up for your eChecks account when enabling the eChecks integration in  Rent Manager , click Sign up for eChecks Account and fill out the requested details. For more information, refer to Set Up eChecks .

 More Information

 If you utilize multiple database locations and have eChecks enabled in a different location, you can check Use credentials from main location . This uses the same account for the current location. This option displays only if you are enabling eChecks on a location other than the Default location. For more information, refer to Change Locations .

 If you are already signed up for a Safeguard eChecks account, this section is blank.

 eChecks Account Information

 This section displays the Safeguard Account Email used for logging into the Safeguard website. This email must be unique from any other Safeguard account and cannot be changed without creating a new account. To verify that Rent Manager and Safeguard are connected properly, click Test Settings .

 eChecks Reorder Payment Information

 This section sets the entities and bank account associated with reordering eChecks . For each bank set up to use eChecks , you must have enough digital checks to complete your eChecks payments. For more information, refer to Reorder eChecks .

 Each option is described below.

 Option
 Description

 Billing Property

 The property to be expensed when eChecks are reordered.

 Billing Vendor

 The Safeguard vendor account to be paid when eChecks are reordered. If you do not have a dedicated Safeguard vendor account in Rent Manager , you need to create one. For more information, refer to Add a Vendor .

 Expense Account

 The general ledger (GL) account expensed when eChecks are reordered.

 Default Settings

 This section sets automatic procedures for eChecks and the email that receives notifications. Each option is described below.

 Field
 Description

 Automatically process eChecks when paying

 eChecks are automatically posted and emailed to recipients of the selected entity type(s) when a check is saved or a bill is paid using eChecks .

 More Information

 If you do not set up automatic processing for an entity type, eChecks need to be posted manually. For more information, refer to Post eChecks .

 Owner bills

 Automatically send eChecks to recipients when owner checks are saved or owner bills are paid.

 Tenant bills

 Automatically send eChecks to recipients when tenant checks are saved or tenant bills are paid.

 Vendor bills

 Automatically send eChecks to recipients when vendor checks are saved or vendor bills are paid

 Automatically reorder checks

 If enabled, Rent Manager automatically processes an eChecks reorder when there are not enough eChecks to process an eChecks posting or the remaining number falls below the value entered in the Threshold amount field.

 More Information

 If you do not set up automatic eChecks reordering, eChecks need to be manually reordered when your account runs out. For more information, refer to Reorder eChecks .

 Threshold Amount

 The number of eChecks available that trigger an eChecks reorder from Safeguard . When the number of eChecks available is less than the number entered, Rent Manager prompts a reorder.

 Total # checks to reorder

 The number of eChecks that are automatically reordered from Safeguard when the total is below the entered Threshold Amount .

 Notification Email

 The email to receive eChecks notifications, including status updates when an eCheck is processed and emailed by Safeguard , cashed by the recipient, or expired after 90 days without being redeemed.

 eChecks enabled bank(s)

 This section determines the bank account(s) that can be used to process eChecks payments.

 Warning

 eChecks banks cannot be deleted directly from this page. To remove an eChecks bank account, log in to the Safeguard portal and archive the bank account, or contact Safeguard directly to remove the account for you. Once the bank account is removed from Safeguard , contact support@rentmanager.com to process the removal of the account from Rent Manager .

 To add a new eChecks bank, click Add Item and, in the eChecks Banks pop-up, enter information in the fields described below:

 Field
 Description

 Bank Account

 The bank account that you want eCheck payments to be made from.

 Bank Account Information

 Verify the bank information for the selected Bank Account . If you selected a bank that has MICR information, any fields with MICR values are not editable from this pop-up. For more information on managing bank account information, refer to Set Up MICR for Checks and Deposits .

 Account Number

 The bank account number from which eChecks are processed.

 Bank Phone Number

 The phone number of the selected bank.

 Company Address

 The address of the bank account owner; potentially the property management company's address.

 Company Name

 The name of the bank account owner; potentially the property management company's name.

 Routing Number

 The bank’s unique routing number.

 First eChecks Check #

 The first number to be used on eChecks generated from the selected bank account. For reference, the next check number to be used for standard checks for the selected Bank Account displays.
