# Banks/Checks Privilege Group

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Privileges/Banks-Checks.htm

Banks/Checks privileges provide access to banking features such as viewing Bank Registers , creating or editing Deposits , printing or modifying Checks , using Digital Signatures , reconciling transactions, and working with Positive Pay files and templates.

 Related Privileges

 Group
 Privilege
 Column

 System
 Manage assigned users and privileges
 View, Edit

 Manage all users and privileges
 View, Edit

 For more information, refer to Control User Access .

 To manage these privileges, do the following:

 -
 Go to arrow_forward Administration , then go to Users arrow_forward Users . Select a user and click the Privileges tab.

 -
 Click next to the privilege group to expand the privilege list.

 -
 To enable a privilege, check the box. Each privilege is described below.

 -
 Click Save .

 Privilege Descriptions

 Each privilege is described below.

 Privilege
 Description

 View bank registers

 Provides access to transactions and deposits displayed in the Bank Register .

 Related Privileges

 This field populates with only banks and credit cards to which you have access. Your access to banks and credit cards can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 View Reconciliation Register

 Provides access to saved or completed reconciliations displayed in the Reconciliation Register .

 Bank deposits

 Add, edit, and/or delete Deposits .

 Checks

 Add, view, edit, and/or delete Checks .

 Print checks

 Provides access to the Print Checks page and the ability to print checks already created in Rent Manager .

 Print blank checks

 Provides access to print blank checks from the Print Checks page. These specify a check number and bank account number but do not specify a vendor or an amount.

 Write checks from banks that are not default

 Write checks using a bank account that is not the property's default bank as specified on the Property Details page.

 Related Preferences

 If you enable Warn if bank account used on checks/bills is not the property default in Checks/Bills General (System Preferences) , Rent Manager warns if the bank account selected is not the property default.

 Void Checks

 Allows a user to void a Check .

 More Information

 When voiding a bill that has a linked check, this privilege allows the Void the checks on the selected reversal date option to display.

 Override sequential check number enforcement

 Allows a user to override the sequential check numbering option on the Check and the Print Checks page.

 Related Preferences

 To use this privilege, the Enforce sequential check numbers option in Checks/Bills General (System Preferences) must be checked. You can then set check numbers in Check Numbers (System Preferences) .

 Digital signatures

 Add, view, edit, and/or delete Digital Signatures (.jpg, .gif, or .bmp files) that are used in place of a written signature when printing checks.

 Override digital signature limit

 Allows a user to apply digital signatures on checks over the amount specified in system preferences.

 Related Preferences

 To use this privilege, the Prevent digital signatures on checks over option in Checks/Bills General (System Preferences) must be checked, and a value must be entered in the correlating number field.

 Step three deposits

 Add, edit, and/or delete transactions entered on the Other Items tab of a Deposit .

 Reconciled transactions

 Add, edit, and or delete a reconciled transaction. Also provides access to the Bank Reconciliation and Credit Card Reconciliation features.

 Create Positive Pay Exports

 Add, edit, and/or delete Positive Pay formats that result in generating a file that tells a bank which checks were written on an account and should be honored. The user is also able to export a positive pay file to a specified location.

 Scan batches of tenant/prospect checks

 Provides the ability to use a check scanner to scan multiple checks from multiple tenants and prospects at a time to post as one payment batch.

 View other users’ open check scan batches

 View check scanner batches created by other users.

 Scan vendor/owner checks

 Allows a user to scan multiple checks from multiple vendors and owners at a time to post as one payment batch.

 Edit MICR details and amounts of scanned checks

 Allows a user to edit MICR fields ( Routing # , Account # , Check # ) and Amount when scanning tenant, prospect, vendor, and owner checks.
