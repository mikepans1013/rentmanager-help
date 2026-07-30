# Recurring Issue Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Issues-Recurring-Details.htm

Recurring issues are issues that repeat on a scheduled basis. For example, you can use recurring issues to set a reminder, such as posting monthly late payment notices or replacing smoke alarm batteries yearly. This tool allows you to create issue templates which generate single issues automatically based on a schedule you designate.

 On the Service Manager Recurring Issue details page, you can view and update information about a recurring issue.

 Related Privileges

 Group
 Privilege
 Column

 Service Manager
 Recurring issues
 View, Edit

 For more information, refer to Control User Access .

 To view a recurring issue's details page, go to arrow_forward Services arrow_forward Service Manager arrow_forward Recurring Issues and select a recurring issue from the list.

 Once a recurring issue is created, click to view information about the creation date, time, and user, as well as the updated date, time, and user. If the recurring issue is part of a make ready process, click Make Ready to open the Make Ready Details page. For more information, refer to Make Ready Details (Page) .

 Recurrence

 On this tile, information about the circumstances under which this recurring issue is posted.

 Field
 Description

 Last Post Date

 If this recurring issue has previously posted, the date of the last post displays.

 Next Post Date

 The date on which the issue generated from this recurring issue should be posted for the first time. By default, the current date displays.

 Posts Left

 By default, a recurring issue is set to Unlimited , and has no end date. Enter a value in the Posts Left field if you want to specify how many times the issue should be posted.

 Due Date

 The expected date by which to have the issue resolved from the posting date. If a due date isn't necessary, select No Due Date . The selections Immediately and 1st of Month do not require further input.

 To create a different due date, select X Day(s) , X Week(s) , or X Month(s) . and specify the number of days, weeks, or months in the following field.

 Post Every

 The time period to be used when determining how often the issue should be posted. Enter a number and then click the drop-down list to select Day(s) , Week(s) , or Month(s) .

 For example, the defaults of 1 and Month(s) indicate once every month. Selecting 2 and Week(s) would indicate once every two weeks.

 Post Day

 If the Post Every field is set to month(s), this field becomes editable.

 Enter the day of the month ( 1-31 ) on which the post should occur.

 Notification Email

 If you have the Rent Manager Online Task Automation feature enabled for recurring issues in Task Automation system preferences, enter the email address that receives an email notification for each successful or failed automatic posting of this issue. If entering more than one email address, separate each with a semi-colon (;). For more information, refer to Task Automation (System Preferences) .

 Recurring Issue Information

 On this tile, general information about the issue can be viewed or edited.

 Field
 Description

 Category

 The type of category assigned to the issue.

 Priority

 The urgency you assign to an issue.

 Status

 The current progress of an issue.

 Assigned To User

 The active user assigned to complete or monitor this issue.

 More Information

 A default value may populate this field.

 Assigned to users can be specified at a system level in Service Issue General Options system preferences or at a property level, based upon your selection in the Assign Service Issues field on the Property details page. Rent Manager populates the property-level assigned user into this field after you create issue property Links . For more information, refer to Service Issue General Options (System Preferences) .

 Selecting an Assigned To User on this issue tile overrides either the default system- or property-level user for this issue.

 Vendor

The single vendor to complete the work defined on the Work Orders tile.

 Details

 This tile displays additional information about the recurring issue.

 Field
 Description

 Title

 A one-line summary to act as the title of the recurring issue. This displays in the comment area on a vendor or owner bill created from the service order.

 Description

 The work that needs to be completed in order for the issue to be considered resolved.

 Links

 Issue links help associate maintenance work to properties, units, tenants or prospects, and owners for reporting and record-keeping purposes. Establishing these links for each issue enhances your ability to track repeat issues using the Issue History in Rent Manager , which displays all issues that share links with the current issue. For example, if the current issue is linked to tenant Orga Itsuka, the Issue History displays a list of every other service issue linked to Orga Itsuka.

 Issue links also allow you to keep a more detailed historical record on each linked account with history/notes. When links are added to an issue, a history note is automatically added to the History/Notes page for the linked entity. The tenant or prospect, unit, property, and/or owner accounts displays a note for each linked issue.

 In addition, the links can be used for invoicing tenants or owners on the Work Orders tile and generating the information found in the Reported Issues by Unit report which shows the number of issues linked to tenants or units. For more information, refer to Reported Issues by Unit (Report) .

 To email a linked entity from the issue, click to open the Compose Email pop-up with the entity's email address automatically populated in the To field and the service issue title in the Subject .

 Work Order

 On the Work Order tile, view or edit the details of each billable item – the parts and labor charges associated with service issues.

 Column
 Description

 Property

 The name of the property associated with the work order. If you linked a property on the issue's details page in the Issue Links tile, that information populates by default.

 Unit

 The name of the unit associated with the work order. If you linked a unit on the issue's details page in the Issue Links tile, that information populates by default.

 Vendor

 The vendor responsible for fulfilling the work order. If a vendor is selected on the issue's details page, this field does not display.

 Item

 The parts or labor that are included in the work order. If you have default values for the Description , Cost , or Sales Price entered on the item's details page, that information populates by default. For more information, refer to Inventory Items (Page) .

 After you select an item, you can click View Inventory Items to view the item's details page, or click the drop-down and select Item Cost Detail to view cost information for the item.

 Description

 An optional explanation about the work order. By default, this field populates with the description on the inventory item details page.

 QTY

 The total number of this item used to fulfill the work order.

 Cost

 The base cost of the inventory items included in the work order. By default, this amount is calculated using the Cost field from the inventory item details page.

 Sale Price

 The dollar amount the tenant or owner pays for the inventory item. By default, this amount is calculated by adding the Cost field and the Markup field from the inventory item details page.

 Total

 The total dollar amount charged for all of the inventory items in the work order using the following formula:

 Total = Sale Price * Quantity

 PO

 Related Privileges

 Group
 Privilege
 Column

 POs/Estimates
 Purchase orders
 Add, View

 For more information, refer to Control User Access .

 Creates a purchase order for this item. For more information, refer to Purchase Orders (Page) .

 Invoice Tenant

 Related Privileges

 Group
 Privilege
 Column

 Sales/Invoicing
 Invoices
 Add, View

 For more information, refer to Control User Access .

 Creates an invoice if you want the tenant to pay for this item. For more information, refer to Invoices (Page) .

 Vendor Bill

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Bills
 Add, View

 For more information, refer to Control User Access .

 Create a bill to pay for this item. You can create a Vendor Bill if the property intends to pay for the work order. For more information, refer to Bills (Page) .

 Owner Bill

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Bills
 Add, View

 For more information, refer to Control User Access .

 Creates a bill to pay for this item. You can create a Vendor Bill & Owner Bill if the management company intends to pay the vendor and then be reimbursed by the property owner.

 Check List Items

 The Check List tile allows you to manage the various to-do list of steps (called items) associated with an issue. For example, you may have an issue titled Fix bathroom sink , which requires your manager to authorize the purchase of a replacement part for the sink, your front office clerk to order the part, and the maintenance technician to install the new part, among other steps. To do this, you can create a checklist item for each step of the process. When a step is finished and marked as completed in Rent Manager , you can advance the issue to another user in the process. If you have created any checklist templates, you can choose to add a predetermined checklist to the service issue.

 To add, manage, advance, or delete a checklist item, click to open the Checklist Items pop-up.

 User Defined Fields

 User defined fields (UDFs) track optional information relating to issues and recurring issues. The UDFs tile lets you view issue-type UDFs for the currently selected issue and enter or edit each value. To view the complete list of user defined fields of the Issue type, click .
