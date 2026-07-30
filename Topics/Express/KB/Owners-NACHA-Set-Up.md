# Set Up Rent Manager to Pay Owners with NACHA

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Owners-NACHA-Set-Up.htm

When you pay owners using Rent Manager , you can make these payments via the ACH network by exporting NACHA files that can be sent to your owners' banks. NACHA is a file type that contains specific payment instructions to banks for processing electronic transfer of funds using automated clearing house (ACH). After you set up your bank and your owner's bank in Rent Manager , you can quickly generate NACHA files to pay your owners.

 Step 1: Set Up Your ODFI Banks

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View

 Accounting
 General ledger accounts
 View, Edit

 Owners
 Configure NACHA Bank
 Enabled

 For more information, refer to Control User Access .

 In the ACH workflow, the Originating Depository Financial Institution (ODFI) is the bank that initiates a transaction. It is the bank from which you make your payments. You must set up your ODFI bank in Rent Manager before your can make NACHA payments.

 Add NACHA ODFI Bank

 To add your ODFI bank in Rent Manager , do the following:

 -
 Go to   arrow_forward   Administration arrow_forward System Preferences arrow_forward Owners arrow_forward NACHA Settings .

 -
 Click Add Item .

 -
 In the pop-up, enter the following information:

 Field
 Description

 ODFI Bank Name

 The name of the banking institution you use as your ODFI bank.

 Immediate Origin #

 Identifies the company using the NACHA file to make a payment. This is usually a ten-digit number using a 1 followed by the company's federal tax ID.

 Company ID

 This number is normally identical to the Immediate Origin # and is used by the bank to identify your company.

 Individual Identification #

 An internal account number used to link all parts of the NACHA process for this transaction. This number can be up to fifteen characters.

 Banks

 The bank-type GL accounts you want linked to this ODFI bank.

 More Information

 If you need to link an ODFI bank to a GL account after you set up the ODFI bank, go to the details page for the GL account and select the bank in the ODFI Banks drop-down. Each GL account can only be linked to only one ODFI bank at a time.

 -
 To use a balanced file format, check the box. A balanced NACHA file format includes offsetting entries of credits and debits so that the totals in the file are balanced. An unbalanced file format does not use offsetting entries. Check with your ODFI bank and your owner's bank about which file format they accept.

 -
 Click OK .
 The pop-up closes.

 -
 Click Save .

 Enter ODFI bank Routing Number

 To enter the Magnetic ink character recognition (MICR) routing number on the ODFI bank's Chart of Account Details page, do the following:

 -
 Go to arrow_forward Chart of Accounts and select the bank account in which your ODFI bank is linked.

 -
 In the MICR Information section, in either the Checks and Deposits section, enter the ODFI bank's Routing Number . To be able to pay owners with NACHA files, your ODFI bank must have a routing number entered in the MICR Information section. For more information, refer to Set Up MICR for Checks and Deposits .

 -
 Click Save .
The ODFI bank is set up and ready to use for payments to owners.

 Step 2: Set Up Your Owner's Banks

 Related Privileges

 Group
 Privilege
 Column

 Owners
 Owners
 View, Edit

 Configure NACHA Bank
 Enabled

 For more information, refer to Control User Access .

 After you set up your bank that originates NACHA payments, you must also set up your owners' banks to receive NACHA payments and select NACHA as your payment method for this owner.

 Owner Bank

 To set up owner banks for NACHA payments, do the following:

 -
 Go to arrow_forward Owners arrow_forward General arrow_forward Owners and select an owner from the list.

 -
 On the action bar to the right, click arrow_forward   NACHA Bank .

 -
 Enter the following information:

 Field
 Description

 Account Type

 Determines if this ACH payment is made to the recipient’s checking or savings account.

 Payee Name

 The name of the payment recipient.

 Account Number

 The recipient's account number for the account type you selected.

 Routing

 The recipient's routing number, which identifies the institution where the account is held.

 Payee Type

 Determines if you are paying an individual or a corporation.

 -
 Click Save .

 Owner Payment Method

 To set NACHA as your owner payment method, do the following:

 -
 Go to arrow_forward Owners arrow_forward General arrow_forward Owners and select an owner from the list.

 -
 In the Miscellaneous tile, set the Payment Method to NACHA .

 -
 Click Save .
The set up is now complete, and you can now make payments to this owner using NACHA files.

 Next Steps

 Now that you have set up your ODFI and owner banks, you are ready to start using NACHA in Rent Manager to pay your owners. The recommended next steps are described in the table below.

 Action
 Description

 Create a NACHA File

 If you transfer owner distributions using NACHA, you can create a copy of the NACHA file so it can be processed with your bank. A NACHA file can be generated even if you deleted the original NACHA file that was created when you made the owner distribution. When you pay a check using NACHA, the file can be downloaded later by viewing the check from the owner's details page. For more information, refer to Create a NACHA File .

 Pay Owners

 Fee-based management companies manage properties on behalf of owners in exchange for management fees. After managed ownerships' receivables (including management fees) are collected and expenses are paid, you can perform a full equity distribution for each of your owners. For more information, refer to Pay Owners .
