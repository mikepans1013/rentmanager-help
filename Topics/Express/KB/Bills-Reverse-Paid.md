# Reverse a Paid Bill

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Bills-Reverse-Paid.htm

When a bill is paid in error, or when a check written to pay a bill needs to be voided, you can use Rent Manager 's payables tools to ensure that the records in your database match the real world. There are two options available to reverse paid bills: deleting the check that pays the bill or voiding the check.

 Warning

 Please speak with your accountant about the financial implications to ensure this is the best course of action for your business.

 Related Preferences

 To delete or void a check, you must have access to the associated bank account. For more information, refer to Limit Access to a Bank or Credit Card .

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 View bank registers
 Enabled

 Checks
 View, Edit, Delete

 Void Checks
 Enabled

 For more information, refer to Control User Access .

 Option 1: Delete the Check

 Deleting a check reverts the paid bill to unpaid status. However, this option results in the permanent deletion of the check and cannot be undone.

 To delete a check that pays a bill, do the following:

 -
 Go to arrow_forward Accounting arrow_forward Banking arrow_forward Bank Register .
The Bank Registers page displays.

 -
 From the Bank drop-down menu, select the bank account associated with the check that paid the bill.

 -
 Select the check you wish to delete.
The check's details page displays.

 -
 On the action bar on the right, click .
The Confirm Delete pop-up displays.

 -
 Click Yes to confirm the deletion.
The check is permanently deleted and the associated bill is now marked as unpaid.

 Option 2: Void the Check

 Voiding a check allows you to reverse a paid bill without permanently deleting the check. This option also allows you to choose how the associated bill is handled. It can be disconnected, voided, or deleted altogether.

 To void a check that pays a bill, do the following:

 -
 Go to arrow_forward Accounting arrow_forward Banking arrow_forward Bank Register .
 The Bank Registers page displays.

 -
 From the Bank drop-down menu, select the bank account associated with the check that paid the bill.

 -
 Select the check you wish to delete.
The check's details page displays.

 -
 On the action bar on the right, click arrow_forward Void .
The Confirm Void pop-up displays.

 -
 If this check paid a bill, the Bill Options drop-down displays. Choose one of the following options to determine what to do with the bill:

 Option
 Description

 Disconnect Bills

 The bill remains in Rent Manager but is no longer linked to this voided check.

 Void Bills

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Bills
 View, Edit

 For more information, refer to Control User Access .

 The bill(s) that were fully paid by this check are also voided on the selected Date Check should be reversed .

 Delete Bills

 The bill is deleted from Rent Manager . This cannot be undone.

 More Information

 If a check only partially pays the full balance of a bill, Rent Manager cannot change the associated bill when voiding the check. When the check is voided, the bill's Amount Due is increased by the check's Amount .

 - Enter the Date Check should be reversed to indicate the date on which the check should be marked as void. If you selected the Void Bills in the previous step, this will also be the date the bill is marked as void.

 -
 Click Accept .

 -
 Click OK  on the pop-up.
The check is voided. It now displays in red on the Checks page and is marked as VOID on the Bank Register .
