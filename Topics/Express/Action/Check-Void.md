# Void a Check

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Check-Void.htm

You can void a check to reverse the expense transaction while maintaining the original check for your records. When a check is voided, a reversal check is created for the exact amount of the original check, but shows a negative value. The Comment of both checks also reads VOID .

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Checks
 View, Edit

 Void Checks
 Enabled

 For more information, refer to Control User Access .

 To void a check, do the following:

 -
 Go to   arrow_forward Payables arrow_forward Checks arrow_forward Checks .
The Checks page displays.

 -
 For the check you wish to void, click arrow_forward Void .
The Confirm Void pop-up displays.

 -
 If this check paid a bill, the Bill Options drop-down displays. Choose one of the following options to determine what to do with the bill:

 Option
 Description

 Delete Bills

 The bill is deleted from Rent Manager . This action is permanent and cannot be undone. It is recommended you only select this option if the bill was created in error, or you intend to recreate the bill.

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

 The bills that were fully paid by this check are also voided on the date selected in the Date Check should be reversed field.

 More Information

 If a check only partially pays the full balance of a bill, Rent Manager cannot change the associated bill when voiding the check. The check can still be voided and the bill updated manually. For more information, refer to Bill Details (Page) .

 -
 In the Date Check should be reversed field, enter the date on which the bill should be voided. Any bills that were fully paid by this check are also voided on the selected date.

 -
 Click Accept .

 More Information

 If the check was issued using AvidXchange 's AvidPay feature, it can be voided only if it has one of the following AvidPay Statuses : Processing , Pending Approval , Held , Wire Needed , Error , Void , Void After Issued .

 -
 Click OK  on the pop-up.
The check is voided and now displays in red on the Checks page.
