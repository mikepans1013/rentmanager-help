# Payables Privilege Group

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Privileges/Payables.htm

Payables privileges provide access to bill paying features, such as adding and updating bills, adding and updating credit card transactions, adding vendors and updating vendor transactions, adjusting Vendor 1099 reports, and using AvidInvoice and AvidPay functions.

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

 Bills

 Add, view, edit, or delete a bill. Allocate the bill amount among various expense accounts, rental units, and properties.

 Bill terms

 Add, view, edit, or delete payment due terms for bills (such as Immediately , Net 15 , and so on) using Terms .

 Allow user to pay bills

 Allows a user to access the Pay Bills page. This privilege separates the user's ability to pay bills from the ability to write a check not linked to a bill.

 In addition, if a bill must be approved to be paid, a user must also have the Approve all bills and/or Approve bills – tier 1 privilege.

 Related Preferences

 To enable the bill approval feature in Rent Manager , you must enable the Require bills to be approved before they can be paid system preference in Checks/Bills General (System Preferences) .

 Allow user to pay bills that exceed PO amount

 Allows a user to pay bills that exceed the amount on a purchase order linked to the bill.

 Approve bills less than or equal to tier 1

 Allows a user to approve bills up to the Tier 1 amount set in the Bill Approval Maximums section of Checks/Bills General (System Preferences) .

 Approve bills less than or equal to tier 2

 Allows a user to approve bills up to the Tier 2 amount set in the Bill Approval Maximums section of Checks/Bills General (System Preferences) .

 Approve bills less than or equal to tier 3

 Allows a user to approve bills up to the Tier 3 amount set in the Bill Approval Maximums section of Checks/Bills General (System Preferences) .

 Approve all bills

 Allows a user to approve all bills, regardless of the bill amount.

 Override owner bill approval

 Allows a user to bypass owner bill approval in Owner Web Access and approve bills in the owner's absence.

 Credit card transactions

 Add, view, edit, or delete credit card transactions (charges and credits).

 Vendor credits

 Add, view, edit, or delete Vendor Credits .

 Vendors

 Add, view, edit, or delete Vendors .

 Allow to delete vendor contacts

 Allows a user to delete a contact from the vendor.

 View private vendors

 Allows a user to see private vendors (those vendors with the Private field checked on Vendor Details ) in the Vendor List. With this privilege, a user may select this vendor for processes such as writing checks, paying bills, creating POs, entering credit card transactions, running payables reports, or setting management company preferences.

 View complete vendor SSNs

 Allows a user to view the entire social security number for vendors by clicking . The default is to mask all numbers except for the last four digits (XXX-XX-9999).

 Use 1099 adjustment tool

 Allows a user to modify the 1099 status on one or many checks at the same time (subject to property access restrictions).

 Submit user's own AvidPay check batches

 Allows a user to post their check batches generated in Rent Manager to AvidPay for actual payment.

 Export 1099

 Allows a user to export vendor or owner 1099 information to a file that can be electronically filed with the IRS.

 Submit other users' AvidPay check batches

 Allows a user to post the check batches of other users generated in Rent Manager to AvidPay for actual payment.

 View AvidPay Cleared Checks

 Allows a user to view AvidPay's images and payment history of cleared checks in that check's Detail page.

 AvidInvoice

 Allows a user to import invoice batches from AvidInvoice into Rent Manager .

 Pay AvidInvoice Bills

 Allows a user to pay the bills imported from AvidInvoice.

 Recurring Bills

 Allows a user to open the Recurring Bills register to perform accounts payable tasks such as entering recurring bills, posting recurring bills, and deleting recurring bills.

 Post recurring bills

 Allows a user to post recurring bills.

 Smart Receipts

 Allows a user to add, view, edit, or delete receipts from the Smart Receipts page.

 Smart Bills

 Allows a user to access and upload files to the Smart Bills page.

 Smart Bill Inboxes

 Allows a user to add, view, edit or delete smart bills inboxes. For more information, refer to Manage Smart Bills Inboxes (Pop-Up)

 View all users' manually uploaded Smart Bills

 Allows a user to see all smart bills that are manually uploaded by other users.

 Loans Payable

 Add, view, edit, or delete loans from the loans payable tool. For more information, refer to Loans Payable (Page) .

 Post Loans Payable

 Allows a user to post loans payable payments. For more information, refer to Post Loans Payable .
