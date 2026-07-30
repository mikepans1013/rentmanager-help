# Checks/Bills General (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/Checks-Bills-General.htm

Checks and bills system preferences allow you to control numerous settings for your payables, such as bill approval, bill and check payments, check numbers, and billable expenses.

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
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Checks/Bills arrow_forward General .
The System Preferences: Checks/Bills - General page displays.

 -
 Edit the settings as desired. Each setting is described in the headings below.

 -
 Click Save .
The system preference configuration is updated.

 Approval

 In this section, determine your check and bill approval preferences.

 Option
 Description

 Require bills to be approved before they can be paid

 If checked, users are prevented from paying bills without approval. Users can approve bills only if the have the privilege(s) listed below, depending on the amount of the bill being approved and the approval amounts established in the Bill Approval Maximums section.

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Approve all bills
 Enabled

 Approve bills less than or equal to tier 1
 Enabled

 Approve bills less than or equal to tier 2
 Enabled

 Approve bills less than or equal to tier 3
 Enabled

 For more information, refer to Control User Access .

 More Information

 This option must be checked before you can give an owner the ability to approve bills in Owner Web Access . For more information, refer to Set Up Bill Approval .

 Require approval before posting RUBS charges

 If checked, master meters bills are required to be approved before ratio utility billing system (RUBS) charges can be posted. This option displays only if there are master meters with assigned RUBS templates.

 Bill Approval Maximums

 In this section, enter the maximum bill amount for each tier. These settings allow you to limit which users can approve bills based on total bill amount before they are paid.

 Option
 Description

 Tier 1

 The maximum bill amount that can be approved by a user with the Approve bills less than or equal to tier 1 privilege Enabled .

 Tier 2

 The maximum bill amount that can be approved by a user with the Approve bills less than or equal to tier 2 privilege Enabled .

 Tier 3

 The maximum bill amount that can be approved by a user with the Approve bills less than or equal to tier 3 privilege Enabled .

 Bills with a total amount greater than this entered value can be approved only by users with the Approve all bills privilege Enabled .

 General

 In this section, determine your general payables settings.

 Option
 Description

 Account Prefix

 The additional text (such as the word Vendor , Account No. , etc) to display in front of the vendor account number on a check's memo.

 A space is not automatically inserted between the prefix and the account number. If you would like a space to show, be sure to include it in this field.

 In order for the prefix to display, the Default memo field to vendor account number option must be enabled. Additionally, on the vendor's details page, the Account Number field must have a number entered.

 Allow bill payments with credit cards

 If checked, allows you to select credit card accounts in the Default Bank field when you pay bills. When writing checks, you can also select a credit card in the Bank field as the account from which to withdraw funds.

 You may also specify a custom Check Reference to display in the No. field on placeholder checks created when paying bills with a credit card (normally reserved for a check number).

 More Information

 Rent Manager tracks expenses paid through credit cards by creating a placeholder check in the database. To differentiate a true check from a credit card payment represented through a check, consider entering a Check Reference message like CC or Credit Cards .

 Automatically select all bills to be paid

 If checked, all bills on the Pay Bills page are automatically selected for payment by default. For more information, refer to Pay Bills .

 If the option Require bills to be approved before they can be paid option is also enabled, only bills that have been approved are automatically selected for payment.

 Check for duplicate reference number on bills

 If checked, when creating bills, Rent Manager  automatically checks the database for any existing bills with the same number in the Invoice # field and displays a warning pop-up informing the user of the duplicate.

 Select one of the following options:

 Do not allow duplicates

 A message displays stating that the selected vendor already has a bill with that invoice number and does not allow you to save. To save a bill, it must have a unique Invoice # for the selected vendor.

 Warn about duplicates

 A message displays stating that the selected vendor already has a bill with that invoice number. Unlike the Do not allow duplicates option, this option allows you to close the warning pop-up and proceed with creating the bill.

 Default memo field to vendor account number

 If checked, use the number entered in the Account Number field on the vendor's details page as the default memo on checks.

 Default Terms

 The default bill term (e.g., 1st of month , Immediately , NET 15 , and so on) specifying when payment is due for vendors, which populates in all bill Terms fields once the vendor has been selected (such as when creating a vendor bill).

 More Information

 You can override the vendor's Default Terms on the vendor's details page. For more information, refer to Vendor Details (Page) .

 Enforce sequential check numbers

 If checked, a warning pop-up displays if a user enters a different check No. than the default, sequential number. This setting can be overridden by users with the following privilege:

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Override sequential check number enforcement
 Enabled

 For more information, refer to Control User Access .

 Related Preferences

 You can set up default next check numbers for each bank account in system preferences. For more information, refer to Check Numbers (System Preferences) .

 Hide bank balance on check

 If checked, bank balances do not display on checks.

 Ignore expired vendor insurance when adding bills

 If checked, bills can be created for vendor(s) with expired insurance. If left unchecked, you receive a warning message stating that you must either update the Insurance Expiration Date field on the vendor's Miscellaneous tile or select a different vendor.

 Ignore expired vendor workers comp when adding bills

 If checked, bills can be created for vendor(s) with expired workers compensation. If left unchecked, you receive a warning message stating that you must either update the Workers Comp Expiration Date field on the vendor's Miscellaneous tile or select a different vendor.

 Prevent bill payments that exceed linked purchase order amount by more than X %

 If checked, users are prevented from making bill payments that exceed linked purchase order amounts by the entered percentage. This option applies only to bill payments with a linked purchase order.

 Users with the following privilege can override this warning and pay bills without resolving the error:

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Allow user to pay bills that exceed PO amount
 Enabled

 For more information, refer to Control User Access .

 Prevent digital signatures on checks over

 If checked, any check over the specified amount is prevented from being signed with digital signatures. This setting can be overridden by users with the following privilege:

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Override digital signature limit
 Enabled

 For more information, refer to Control User Access .

 Prevent vendor credits from being applied across properties

 If checked, all vendor credits are prevented from being applied to bills that are not allocated to the same property as the vendor credit.

 Require two signatures on checks over

 If checked, any check over the provided amount must have two signatures. An additional signature line is printed on the check.

 Select property first on checks/bills

 If checked, users are required to select the property first when writing checks and paying bills.

 Use vendor name instead of payee on check stubs

 If checked, the Vendor Name is used on printed checks instead of the name identified as the Payee on the vendor's details page. If left unchecked, the Payee name is used by default.

 Warn if bank account used on checks/bills is not the property default

 If checked, a warning displays when a check or bill uses a bank account that is not the selected property's default bank. This setting can be overridden by users with the following privilege:

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Write checks from banks that are not default
 Enabled

 For more information, refer to Control User Access .

 Billable Expenses

 In this section, check Enable billable expenses to turn on billable expenses for bills, checks, and credit card transactions to bill back expenses to owners or tenants. Additionally, you can add a markup amount as part of your reimbursement.

 When this option is checked, the following options become available:

 Option
 Description

 Default Billback Entity

 Select whether the Billable To column on checks, bills, and credit card transactions displays an Owner or Tenant by default. This selection also determines if an Owner Search or Tenant Search displays by default when you click in the Billable To column.

 Check Auto to have Rent Manager display the entity that populates based on the following: If the management company property is being billed back, owners display. If any other property is being billed back, tenants display.

 Default Markup

 The dollar amount or percentage that displays by default in the Markup column of each billable expense.
