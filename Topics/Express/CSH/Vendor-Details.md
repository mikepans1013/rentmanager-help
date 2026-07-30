# Vendor Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Vendor-Details.htm

Vendors are the people and businesses that you pay in exchange for certain products and services. Track vendor activity to accurately manage your accounts payables in Rent Manager . On the Vendor details page, you can view and manage general vendor information, such as company information, associated properties, phone numbers, insurance expirations, tax information, and other miscellaneous information.

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Vendors
 View, Edit

 For more information, refer to Control User Access .

 To view and manage a vendor's details, go to arrow_forward Payables arrow_forward Vendors and select a vendor from the list.

 The following tiles display by default. If a custom layout is applied to your details page, you might not see all of the following tiles. For more information about creating and assigning layouts, refer to My Layouts (Page) and System Layouts (Page) .

 Addresses

 Displays addresses associated with the vendor. If additional addresses are entered for this vendor, select one from the tabs at the top of the tile or use the arrows to view additional tabs. You can also add, delete, or manage vendor addresses. Select View on Map to display the location on Google Maps.

 Bill Settings

 Options set in this tile affect payments to vendors.

 Field
 Description

 Account Number

 The account number for this vendor, which can be used in vendor filters and correspondence scripting.

 Default Account

 The default general ledger (GL) account for recording transactions with this vendor.

 When you create bills or write checks to this vendor, Rent Manager uses this account as the allocated expense account by default (unless the Auto Fill Check/Bill Information option is checked).

 Terms

 Specify when payment is due for this vendor from the drop-down list. New bills created for this vendor default to the term that you select here.

If you select <Default> , this field populates with the Default Terms specified in system preferences. For more information, refer to Bill Terms (Page) .

 Payment Method

 The default payment method used to pay this vendor. When you create bills or write checks to this vendor, Rent Manager selects this payment method, though it can be overridden.

 eChecks Email

 The email address that receives notifications about eChecks payments.

 Auto-Fill Check/Bill Information

 Automatically populates new checks or bills for this vendor with the same property, bill terms, expense account, and amount as the last check or bill written to the vendor. Auto-filled fields can be updated if needed.

 An auto-filled expense account overrides the Default Account set in this tile.

 Comment

 An optional comment about this vendor that can be used in vendor filters.

 Contacts

 This tile displays the contact information for the vendor account and any additional contacts associated with the account. If more than one contact is associated with the account, they display in a list. The contact designated as Primary displays first.

 General

 Information about the vendor and the properties they work on.

 Field
 Description

 Name

 The name of your main point of contact at this vendor.

 Payee

 The name to use when writing checks to this vendor (if the name differs from the Name field).

 Email

 The contact email address for this vendor. The email subscription status displays as (active), (partially unsubscribed), or (unsubscribed).

 To view and configure the subscription status for emails associated with the vendor's account, click Manage Subscriptions . For more information, refer to Unsubscribe From Emails .

 Associated Properties

 The property or properties that the vendor can service. Reduce data entry errors by limiting the properties that can be selected on bills associated with this vendor.

 Active

 Indicates the vendor is active. Inactive vendors cannot be selected throughout the program for items like service issues, bills, checks, and so on, but allows you to maintain any historical data related to the vendors.

 Private

 Limits which users can view this vendor. Private vendors are only visible to users with the Payables privilege to View private vendors .

 History/Notes

 The most recent history/note items on the vendor's account. History/notes record information about interactions and communication with vendors, such as phone conversations or explanations of transactions. Notes are created automatically for system actions, such as the initial account set up or service requests. You can also add additional notes from the tile.

 Field
 Description

 Date

 The date the history/note was created.

 Type

 The category the history/note falls into (e.g., Service Issue , Email , Call , Visit , etc.)

 Note

 Information about the history/note describing the event, interaction, or message.

 Miscellaneous

 Miscellaneous vendor information, including the expiration dates of insurance and workers comp.

 Field
 Description

 Category

 A user-created category that can be used in vendor filters.

 Contact Name

 The name of your main point of contact at this vendor.

 Display Color

 A color to help identify vendors of certain types, groups, or any other specifications you prefer. The color displays as a bar to the left of the vendor in some areas of Rent Manager , such as the Vendors page.

 Insurance Expiration Date

 The date on which the vendor's insurance expires.

 More Information

 If you try to complete a task that involves a vendor with expired insurance or workers' compensation (e.g., creating service issues, writing checks/bills, creating purchase orders, etc.), a warning message displays stating that you must either correct these expired items or select a new vendor.

 This vendor is a user

 The Rent Manager user linked to the vendor who is reimbursed for any personal charges using Smart Receipts in rmAppSuite Pro . For example, if an employee spends their own money on parts for a maintenance issue, you can create a bill in from rmAppSuite Pro to reimburse the employee for their purchase. For more information, refer to Smart Receipts .

 Workers Comp Expiration Date

 The date on which workers' compensation expires for this vendor.

 Phone Numbers

 Phone numbers associated with the vendor. You can set the default phone number for the vendor to display on reports. Additionally, check the box under T to indicate if a phone number can receive text message.

 Recent Transactions

 The most recent transactions processed for the vendor's account, including bills received and payments made. You can record payments to vendors, create bills, and write checks to vendors from this tile.

 Field
 Description

 Type

 The category the transaction falls into (e.g., Bills , Credits , Checks , etc.).

 Date

 The date the transaction posted to the account.

 Reference

 If entered, an additional note about the transaction, such as the check number or payment method (ACH, ePay, etc).

 Information

 Information, such as the affected bank account or the check number that paid the transaction, associated with the transaction.

 Comment

 A comment or note about the transaction, such as the nature of the service issue the vendor addressed.

 Amount

 The total dollar amount of the transaction.

 Tax Information

 Tax-related information for the vendor.

 Field
 Description

 1099 SocSec #/Tax #

 The social security number (SSN) or tax ID number (TIN) of the vendor. Click to display the complete SSN or TIN.

 Related Privileges

 To view the full social security number, the following privilege is required:

 Group
 Privilege
 Column

 Payables
 View complete vendor SSNs
 Enabled

 For more information, refer to Control User Access .

 1099 Category

 The IRS-based category of the vendor. If <System Default> is selected, this field populates with the category specified in system preferences.

 1099 Vendor

 Includes this vendor when generating vendor 1099s. When new bills, checks, or credit card transactions are created for this vendor, the 1099 box is automatically checked.

 UDFs

 User-defined fields display on this tile based on when a value was added to the UDF. The order in which the user-defined fields display may not match the order that displays in the User Defined Fields pop-up or on the User Defined Fields page. This tile displays up to six vendor-type UDFs with values and used to track information that Rent Manager does not track by default.

 Workflow Project

 Related Privileges

 Group
 Privilege
 Column

 Service Manager
 Workflow Projects
 View

 For more information, refer to Control User Access .

 If the vendor is linked to an active workflow, this tile displays each stage of that workflow process and the number of steps that are completed for each stage. Additionally, you can view each step and its assigned user by clicking to display the Workflow Project Overview .

 This tile displays only if the associated workflow project was created from a template with the Show workflow projects on vendor details option enabled. For more information, refer to Workflow Template Details (Pop-Up) .
