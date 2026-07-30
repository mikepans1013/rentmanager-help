# Set Up eChecks

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/eChecks-Set-Up.htm

Safeguard eChecks allow you to write checks and pay bills electronically through Rent Manager and deliver the payment to the intended recipient(s) through email. The email includes a link that allows the recipient(s) to retrieve and print the check themselves on any printer, removing the need for you to use physical check stock.

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 Step 1: Sign Up for an eChecks Account

 eChecks is a licensed feature by Safeguard . To use eChecks , you must enable eChecks in Rent Manager and set up an account with Safeguard .

 To enable eChecks and sign up for a Safeguard account, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward eChecks .

 -
 Select Enable eChecks .

 -
 Click Sign up for eChecks account .
The eChecks Signup pop-up displays.

 -
 Enter the following account information to create your Safeguard account.

 Field
 Description

 Account Email

 The Safeguard account email used for logging into the Safeguard website. This email must be unique from any other Safeguard account. Enter the same email address in the Confirm Account Email field.

 More Information

 The email you enter to associate with a Safeguard account cannot be changed without creating a new Safeguard account.

 Account Number

 The bank account number from which eChecks are processed. If, in the Setup Bank field, you selected a bank that has MICR information, this field is not editable.

 Address

 The address associated with the account. By default, the address for the management property defined in system preferences displays. If necessary, enter another address.

 Bank Phone Number

 The phone number for the bank.

 Billing Property

 The property address to be billed for reordering checks.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Billing Vendor

 The vendor to be the payee when reordering Safeguard eChecks .

 Company Address

 The address of the bank account owner; potentially the property management company's address. If, in the Setup Bank field, you selected a bank that has MICR information, this field is not editable.

 Company Name

 The name of the bank account owner; potentially the property management company's name. If, in the Setup Bank field, you selected a bank that has MICR information, this field is not editable.

 Expense Account

 The general ledger (GL) account for the bank to be expensed for reordering eChecks .

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 First eCheck Check #

 The first number to be used on eChecks generated from the selected bank account.

 For your reference, the next check number to be used for standard checks for the selected Setup Bank is displayed.

 Name

 The First Name and Last Name of the account owner. By default, the first name associated with the user account populates. If necessary, enter another name.

 Phone Number

 The contact phone number for the Safeguard account owner.

 Routing Number

 The bank’s unique routing number. If, in the Setup Bank field, you selected a bank that has MICR information, this field is not editable.

 Setup Bank

 The bank, selected from the drop-down list, from which eChecks can be processed.

 More Information

 Other banks can be set up to process eChecks after the initial setup.

 -
 Click Sign Up .
The account creation request is sent to Safeguard .

 Step 2: Establish System Preferences

 Once Safeguard creates your eChecks account, they send a confirmation notification to the email address entered when creating the account. Before you can use eChecks to make payments, you need to establish settings in system preferences.

 To set eChecks system preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward eChecks .

 -
 In the eChecks Default Settings section, establish how to process and reorder eChecks .

 Field
 Description

 Automatically process eChecks when paying

 Owner bills

 Automatically sends eChecks to recipients when owner checks are saved or owner bills are paid. If left unchecked, you need to manually post eChecks for processing.

 Tenant bills

 Automatically sends eChecks to recipients when tenant checks are saved or tenant bills are paid. If left unchecked, you need to manually post eChecks for processing.

 Vendor bills

 Automatically sends eChecks to recipients when vendor checks are saved or vendor bills are paid. If left unchecked, you need to manually post eChecks for processing.

 Automatically reorder checks

 Allows Rent Manager to automatically process an eChecks reorder when there are not enough eChecks to process an eChecks posting or the remaining number falls below the Threshold amount .

 If left unchecked, you need to reorder eChecks manually.

 Threshold Amount

 The number of eChecks available that trigger an eChecks reorder from Safeguard . When the number of eChecks available is less than the number entered, Rent Manager prompts a reorder.

 Total # checks to reorder

 The number of eChecks to reorder from Safeguard .

 Notification Email

 The email to receive eChecks notifications.

 -
 In the eChecks Enabled Bank(s) section, add additional banks from which eChecks can be processed and enable other banks for eChecks processing.

 -
 Click Save to accept your changes.
 Safeguard eChecks can be used to process bills and checks.

 Next Steps

 Now that you set up Safeguard eChecks , you are ready to pay bills, write checks, and process owner payments using the feature. The recommended next steps are described in the table below.

 Action
 Description

 Pay bills

 eChecks can be used to pay bills by selecting the Payment Method of eChecks .

 For more information, refer to Add a One-Time Tenant/Prospect Bill and Add a One-Time Vendor/Owner Bill .

 Write checks

 eChecks can be used to process vendor and owner checks by selecting the eChecks option when creating the check.

 For more information, refer to Write a Vendor/Owner Check .

 Process owner distributions

 eChecks can be used to process and distribute owner payments by going to the owner's details page and setting their default Payment Method to eChecks , or by manually selecting the Payment Method of eChecks when calculating checks.

 For more information, refer to Owner Details (Page) and Pay Owners .

 Refund security deposits

 eChecks can be used to refund tenant security deposits by setting the Refund Via option to eChecks and entering the tenant's email address in the eCheck Email field.

 For more information, refer to Refund a Security Deposit .

 Post eChecks

 If you did not select all entity types for the Automatically process eChecks when paying system preference, eChecks are set up to be manually processed for any unselected entity type(s). Writing an eCheck or paying a bill with an eCheck is recorded in Rent Manager but the payment is not processed by Safeguard until you post eChecks .

 For more information, refer to Post eChecks .

 Reorder eChecks

 If you did not establish any options for the Automatically reorder checks system preference, eChecks need to be manually reordered when you run out or do not have enough to complete an eChecks posting.

 For more information, refer to Reorder eChecks .
