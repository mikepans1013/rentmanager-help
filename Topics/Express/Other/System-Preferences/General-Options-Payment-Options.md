# Payment Options (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/General-Options-Payment-Options.htm

These options affect payment collection, such as displaying warning in certain circumstances, enabling discounts, setting the default payment amount, and setting options for payment receipts.

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
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward General Options arrow_forward Payment Options .

 -
 Edit the settings as desired. Each setting is described below.

 -
 Click Save to apply your changes.

 Preference Descriptions

 This preference group is divided into multiple sections. Each setting is described within the corresponding section below.

 General

 This section determines general settings for accepting payments in Rent Manager .

 Option
 Description

 Enable warnings if processing payment or charge prior to previous post

 Check to enable pop-up warnings if a payment or charge date occurs prior to a previous post. Backdating a transaction for which a tenant has no open receivables displays a transaction window where you can allocate the payment to a charge type. If you backdate a payment prior to a previous post, you will also have to process management fees (if any are due).

 Enable payment discounts on payment screen

 Check to display the Payment Discount button in the tenant Payments tab in Rent Manager 12 . Click to process an early payment credit for tenants who receive a discount when paying early.

 Use Enter key to move between fields on payment screen

 Check to allow the ability to tab from field to field on the Payments tab with the Enter key as well as the Tab key in Rent Manager 12 . This option is convenient for users who want to use the number pad on the keyboard. If this option is unchecked, only the Tab key can be used to tab.

 Show reference # on payment screen

 Check to create a Reference # column for open charges on the Receive Payments pop-up and display the transaction Reference # the user entered on the Transaction Detail pop-up. If this option is unchecked, no Reference # column displays.

 Default payment to full amount owed

 Check to auto-fill the Amount field with the total amount due when making a payment (sum of all open charges in the Open Receivables section of the tenant's details page).

 Automatically apply account group credits

 Check to create a prepayment for an account group member when that member is making an overpayment. While this option is enabled, if a new charge is subsequently applied to another member of the account group, Rent Manager will allocate the credit from the original group member to the other group member.

 Payment Receipts

 The options in this section determine how payment receipts are printed and what information displays on receipts.

 Option
 Description

 Use receipt printer format

 Check to print payment receipts using the receipt printer format (2.75" paper or wider). If this option is unchecked, the receipt format defaults to letter-sized paper.

 Use management company information

 Check to populate receipts with management company information rather than property-specific info. If enabled, Rent Manager uses the management company's Name , Address , and Office Phone Number .

 Always print a receipt

 Check to print a receipt by default when receiving a payment.

 Use numbered receipts

 Check to number each printed payment receipt beginning with the value entered in the Starting number field.

 Show charges paid

 Check to have the receipt include a Charges Paid section. The Date (charge date), Unit (if the tenant has a payment being allocated to more than one lease), Description , Total Charge , and Amt Paid display.

 Show unposted per day late fees to date

 Check to have the receipt include the total amount of per day tenant late fees and/or property late fees, if applicable, that have accumulated for each tenant as of the current date.

 Show payment comment

 Check to have the receipt include the Memo entered on the tenant's payment.

 Receipt Notes

 Enter a default message that displays at the bottom of all payment receipts.

 Default Banks to Use for the Deposits of Specific Charge Types

 When depositing multiple payments from a single tenant, circumstances may require that funds allocated towards different charge types be deposited to a separate bank account than the rest. For example, if one tenant payment is applied to rent and a different payment from the same tenant is allocated to security deposit charges, and the security deposit charges need to be held in escrow, your security deposit charge type can be linked specifically to the escrow bank account. This feature that divides funds allocated towards different charge types across multiple bank accounts is known as Charge Type Banks.

 More Information

 Rent Manager can perform a split deposit to split a single payment across multiple bank accounts if that payment is a non-Check 21 ePay transaction. Scanned checks processed through ePay are considered Check 21 transactions.

 Use the table to configure the bank accounts to which payments on specific charge types are deposited by default when using charge type banks or performing split deposits.

 To add a new charge type configuration to the table:

 -
 Click Add Item below to add a new Charge Type row.

 -
 In the Bank drop-down list, select one of the bank accounts entered in your chart of accounts.

 -
 In the Charge Type drop-down list, select the charge type that should be deposited into the selected bank by default.

 -
 Click Save .
The charge type's default bank configuration is added to the table.

 -
 Continue adding charge type defaults as desired.
