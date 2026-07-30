# Owner Details (Page)

Source: https://rmxhelp.rentmanager.com/MicroContent/Resources/MicroContent/Improve-Search/owner.htm

In Rent Manager , owners are the people or organizations that own the properties you manage. If you are a fee-based management company, you utilize the owner tools in Rent Manager to perform tasks like receive owner contributions, collect management fees, and pay owners their equity distributions.

 The Owner details page lets you view and manage general account and contact information for the currently selected owner. You can also set payment preferences for owner distributions.

 Related Privileges

 Group
 Privilege
 Column

 Owners
 Owners
 View, Edit

 For more information, refer to Control User Access .

 To view an owner's details page, go to arrow_forward Owners arrow_forward General arrow_forward Owners and select an owner from the list.

 The following tiles display by default. If a custom layout is applied to your details page, you might not see all of the following tiles. For more information about creating and assigning layouts, refer to My Layouts (Page) and System Layouts (Page) .

 Addresses

 This tile displays the associated addressed of the owner. To view additional addresses, select one from the tabs at the top of the tile, using the arrows to view additional tabs.

 Check Setup

 The options in this tile affect how owner distributions are made to this owner account and whether funds should be re-allocated based on required bank reserves for each owned property.

 To manually adjust these options for this particular owner, check Override Default and select from the following options:

 Option
 Description

 Separate checks by ownership

 Instead of writing a single check to an owner for their entire portfolio, this option to generates an independent check for each ownership. For example, if the owner's portfolio includes three separate properties, that owner receives three separate checks.

 Balance reserves across ownerships

 Use the owner's profitable properties to cover other owned properties that are operating with a negative or below minimum reserve balance.

 For example, your owner owns both Property A and B. Property A has a required reserve of $500 and a bank balance of $300 and Property B has a required reserve of $500 and a bank balance of $1000. With this option enabled, when you go to make an owner distribution, Rent Manager first transfers $200 (via journal entry) from Property B over to A to help that property reach its required reserve of $500. The remaining funds in Property B (after Property B reserves are considered) are then distributed to the owner.

If this option is unchecked, Rent Manager simply pays out the remaining balance of Property B and Property A continues to operate in debt.

 Balance Account

 The GL account to track the transfer of reserve funds between properties through a journal entry. This is typically linked to an equity account (e.g., 3005 Reserves ).

 Balance Memo

 If applicable, an optional memo for the journal entry created by Rent Manager to transfer reserve funds between properties.

 Related Preferences

 If Override Default is unchecked , the owner's check setup options are defined in system preferences. For more information, refer to Owner Check Template (System Preferences) .

 Comment

 This tile displays an optional comment for the owner. The comment can be added to the Owner Listing report, as well as used in scripts for letter templates and Report Writer .

 Estimates

 This tile displays recorded anticipated costs for parts and labor needed to complete projects, itemize the costs, and provide a total amount due including any markups and/or taxes you add. This tile is available only through a custom layout, for more information, refer to Add a Personal Layout .

 Column
 Description

 Days Old

 The number of days between the current date and the estimate's Create Date as it displays on the Estimates page.

 Estimate #

 The unique system-generated number assigned to the estimate.

 Job

 If applicable, the job Name , as it displays on the job's General tile, associated with the estimate. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Reference

 A user-created identifier for the estimate.

 Status

 The current stage of the estimate. Only active estimates with the status of Draft or Awaiting Approval display.

 Total

 The total dollar amount of all inventory items, including any added markup or tax.

 General

 This tile displays the owner's Name , Display Name , and Tax ID number.

 Field
 Description

 Name

 The name of the owner, which is used when referencing the owner and for correspondence generated to the owner in Rent Manager .

 Display Name

 The name of the owner, which displays on the Owners page. This is helpful if, for example, the owner is a limited liability company (LLC) but you want to see your contact's name instead.

 More Information

 The Display Name is used in Rent Manager for drop-down lists or search fields where an owner can be selected. For example, when running owner reports, the Display Name populates in the Owners to Include report option.

 Tax ID

 The tax identification code for the owner.

 More Information

 If you provide this owner a 1099 form for their taxes, you can optionally use this value for the name on the Owner 1099 and Owner 1099 Copy B reports.

 History/Notes

 This tile displays history/notes items associated with the owner. History/note items let you record information that supplements or clarifies what’s entered in other fields, such as notes about phone conversations, items on a to-do list, or explanations about transactions.

 Column
 Description

 Date

 The date the note was created.

 Type

 The system-generated history/note type. For example, if the history/note is linked to a signable document sent to the owner, the Signable Document type displays.

 Note

 The information to describe the history/note (e.g., Confirmed estimate was received ). If no text is entered, the column displays blank.

 Manage Account

 This tile displays the general ledger (GL) accounts that track owner distributions and contributions.

 Field
 Description

 Draw Account

 The GL account number of the GL account that tracks distributions paid out to this owner. This is typically linked to an equity account (e.g., 3002 Owner Distribution ).

 Contribution Account

 The GL account that tracks contributions made by this owner. This is typically linked to an equity account (e.g., 3003 Owner Contribution ).

 Related Preferences

 If <Use Default> displays for either field, the GL account used is set in system preferences. For more information, refer to Owner Settings (System Preferences) .

 Management Company

 This tile allows you to view charges posted to the owner account and payments received from the owner, which primarily consist of management fee charges, payments associated with the owner, and owner invoices.

 Field
 Description

 Date

 The date the bill, credit, or payment posted to the account.

 Description

 If applicable, the note entered by a user describing the type ( Check Number , etc.) of the transaction.

 Amount

 The total dollar amount of the transaction.

 Balance

 The balance of the owner distribution account after the transaction occurs.

 Miscellaneous

 This tile displays additional contact and payment information for the owner.

 Field
 Description

 Display Color

 A color to help identify owners of certain types, groups, or any other specifications you prefer. The color displays as a bar to the left of the owner in some areas of Rent Manager , such as the Owners page.

 Don't Print Checks

 Prevents Rent Manager from printing a physical check when owner distributions are made to this owner. This is available only for certain payment methods.

 eChecks Email

 The email address that receives notifications about eChecks payments.

 Email Address

 The primary email address used to contact the owner. The email subscription status displays as (active), (partially unsubscribed), or (unsubscribed).

 To view and configure the subscription status for emails associated with the owner's account, click Manage Subscriptions . For more information, refer to Unsubscribe From Emails .

 Payee

 The name checks are made out to.

 Payment Method

 The default method used by Rent Manager to record distribution payments to this owner.

 Phone Numbers

 This tile tracks the contact numbers for the owner organized by phone number types. The number used as the primary contact for this account is marked as Default . Additionally, if a phone number can be used for text messaging, it is marked in the T column.

 UDFs

 User-defined fields display on this tile based on when a value was added to the UDF. The order in which the user-defined fields display may not match the order that displays in the User Defined Fields pop-up or on the User Defined Fields page. This tile displays up to six owner-type UDFs with values and used to track information that Rent Manager does not track by default.

 Workflow Project

 Related Privileges

 Group
 Privilege
 Column

 Service Manager
 Workflow Projects
 View

 For more information, refer to Control User Access .

 If the owner is linked to an active workflow, this tile displays each stage of that workflow process and the number of steps that are completed for each stage. Additionally, you can view each step and its assigned user by clicking to display the Workflow Project Overview .

 This tile displays only if the associated workflow project was created from a template with the Show workflow projects on owner details option enabled. For more information, refer to Workflow Template Details (Pop-Up) .
