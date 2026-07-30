# Write a Check for Multiple Properties

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Checks-Write-Multiple-Properties.htm

Entering checks into Rent Manager lets you track when they were written, which properties were expensed, and for how much. Vendor checks are typically written to pay a third party for products and services rendered to your business or the properties you manage. Owner checks are typically written to pay an owner for weekly or monthly distributions. For more information, refer to Write a Vendor/Owner Check .

 This topic covers writing vendor and owner checks and utilizing the Disburse Amount action to automatically allocate the expenses across multiple properties. Splitting or disbursing the amount by property divides a total amount among selected properties based on a specified calculation method. This is useful for situations such as having one large expense that was applied to multiple properties.

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Checks
 Add, View

 Accounting
 General ledger accounts
 View

 For more information, refer to Control User Access .

 Step 1: Add Check Details

 To write a new check for a vendor or owner in Rent Manager , do the following:

 -
 Go to   arrow_forward Payables arrow_forward Checks  arrow_forward Write Check .
The Write Check pop-up displays.

 -
 In the section for the check's general information, enter the information into the available fields described below.

 Field
 Description

 Bank

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's Details page. To write checks that are not drawn from a property's Default Bank , you also need the following privilege:

 Group
 Privilege
 Column

 Banks/Checks
 Write checks from banks that are not default
 Enabled

 For more information, refer to Control User Access and User Details (Page) .

 The bank account from which funds are drawn. After a bank is selected, its current Balance displays.

 Date

 The date on which the check was issued to the payee. This date should match your real-world financial records to prevent any issues with reconciliation.

 No.

 The check number that matches the number on the physical check written in the real world.

 Related Preferences

 In the Check Numbers section of system preferences, enable Next Check Number so each new check from the selected bank account defaults to the next number.

 In the Checks/Bills General section of system preferences, you can also enable the option Enforce sequential check numbers . If Enforce sequential check numbers is enabled but the user does not have the Override sequential check number enforcement option enabled, the No. field is unavailable. For more information, refer to Check Numbers (System Preferences) and Checks/Bills General (System Preferences) .

 Owner, Vendor, Tenant, or Prospect

 The entity type ( Vendor or Owner ) receiving the check, followed by the account name in the field below. After selecting the account, the address displays below.

 If you have previously created a check for this recipient and would like to use that same information, click Fill from history and select the check to pull information from. Rent Manager Express refreshes and populates the current check with the expense line items and total amount from the selected check.

 Amount

 The total amount of this check. Alternatively, leave this field blank, and Rent Manager calculates the total from line items in the Expenses section. Click to update this Amount after adding line items.

 Payee Information

 The address to which the check is sent, which populates when the account receiving the check is selected. Optionally, you can change the address by clicking and manually entering the address.

 Memo

 An optional note for this check. Check memos display in the Comment column on the vendor account's Vendor Transactions page.

 -
 In the check's summary section, enter the information in the available fields described below.

 Field
 Description

 Check will be printed

 Allows the check to be printed from Rent Manager . If this option is not selected, the check cannot be printed from Rent Manager . For more information, refer to Print Checks .

 Avid Pay

 An automatic bill payment integration provided by AvidXchange using the Post AvidPay tool in Rent Manager . For more information, refer to Post AvidPay (Page) .

 Related Preferences

 This option displays only if you have AvidPay set up in the AvidXchange Settings section of system preferences. For more information, refer to AvidXchange (System Preferences) .

 Attachments

 Click Upload Files to attach any related images or documents from your network or computer to the check.

 Step 2: Use Disburse Amount

 Splitting or disbursing the amount by property divides a total amount among selected properties based on a specified calculation method. This is useful for situations such as having one large expense that was applied to multiple properties. For more information, refer to Disburse Amount .

 To disburse an amount to multiple properties on the check, do the following:

 -
 In the section for expense line items, click   Disburse Amount .

 -
 In the Type field, select Property .

 -
 In the Property drop-down list, select each property that should receive a portion of the transaction amount. Alternatively, in the Group field, select a property group to automatically select the properties that are part of that group.

 -
 In the GL Account field, select the general ledger account being expensed or credited for the transaction. This GL account is applied to each line item.

 -
 In the Disbursal Method field, select how the total amount is split between the properties. Each method is described in the table below.

 Option
 Description

 Evenly

 Split the Amount evenly across the selected properties.

 For example, if you have three properties expensed with $750.00, three expense line items are created for an amount of $250.00 each (one for each property).

 Duplicate

 Apply the full Amount value to each selected property.

 For example, if you have four properties that had the same work done and it was $700.00 for each property, four expense line items are created for an amount of $700.00 each (one for each property).

 Percent of Square Footage

 Split the Amount between each selected property based on its percentage of square footage compared to the total square footage of all the selected properties. The square footage of each property is located in the Total Sq Ft field on the property's details page. For more information, refer to  Property Details (Page) .

 More Information

 If a property does not have a value entered for Total Sq Ft , the total square footage of each active unit at the property determines the property's total square footage. The unit's Square Footage is located on the Miscellaneous section of each unit's details page. For more information, refer to Unit Details (Page) .

 For example, consider a scenario where you have a total Amount of $1,200.00 and select two properties. Property A is 2,000 square feet and Property B is 1,000 square feet. Since Property A has two-thirds of the total square footage, it is allocated two-thirds of the total amount. This results in a two line items: one for Property A for $800.00, and one for Property B for $400.00.

 Percent of User Defined Field

 Split a specified percent of the Amount between each property based on the value of a selected user defined field (UDF) compared to the total of all values in that UDF for all selected properties. If selected, choose the property-type UDF to use from the User Defined Field drop-down list. The UDF values for each property must be numeric. For more information, refer to Property User Defined Fields (Pop-Up) .

 For example, consider a scenario where you have a total Amount of $900.00, you selected two properties, and selected a numeric UDF named # of buildings . Property A has 2 buildings and Property B has 1 building. Since Property A has two-thirds of the total UDF value, Property A is allocated two-thirds of the total amount. This results in a two line items: one for Property A for $600.00, and one for Property B for $300.00.

 Relative Percent of Units in a Property

 Split the Amount between each selected property based on its percentage of the number of active units compared to the total number of active units of all the selected properties.

 For example, consider a scenario where you have a total Amount of $1,000.00 and selected all of your properties. If you have a total of 800 active rental units between all the selected properties, and Property A has 200 of those active units, the line item for Property A is allocated an amount of $250.00 (twenty-five percent of the total amount).

 -
 In the Amount field, enter the total dollar amount to be divided among the properties unless you selected a Disbursal Method of Duplicate . If you selected Duplicate , enter the amount to expense or credit on each line item.

 -
 In the Memo field, add a comment to provide further context about the transactions. The memo is added to each line item.

 -
 If these items should be counted towards a 1099 tax form, check Is 1099 .

 -
 Click Disburse .
A line item is added for each selected property with the specified GL account and the amounts are calculated based on your Disbursal Method .

 -
 In the expense line item section, the following columns display:

 Column
 Description

 Property

 The property to be expensed by the vendor or owner.

 Unit

 If applicable, the specific unit to be expensed by the owner or vendor. If the expense applies only to the property as a whole, leave this field blank.

 Expense Account

 The GL account used to track this line item's expense. For example, if the line item is for landscaping at a property, you would select the expense account used for that type of maintenance work (such as 5101 - Maintenance & Landscaping ).

 1099

 Check this option if this line item should be reported as a 1099 expense for self-employed individuals (such as independent contractors, consultants, and so on).

 More Information

 These expenses are included on account's Owner 1099 or Vendor 1099 reports. For more information, refer to Owner 1099 (Report) or Vendor 1099 (Report) .

 Job

 If applicable, the job-costing project with which this expense is associated.

 For example, if you are tracking a renovation project in Rent Manager and this bill is from a vendor assisting with those renovations, select that job from the list. For more information, refer to Jobs (Page) .

 Related Preferences

 This column displays only if Enable job costing is checked in the General Options section of system preferences. For more information, refer to General Options (System Preferences) .

 Memo

 An optional note or comment that provides further context for this expense.

 Amount

 The dollar amount expensed for this line item only.

 Once an Amount is added for all line items, you can click at the top of the page next to the Amount field to populate the total of all line item amounts in this section.

 -
 Click Save .
The check is created.
Optionally, click Save & Finish to complete the check creation process and close the pop-up. To save the check and refresh the pop-up to add another check, click Save & New .
