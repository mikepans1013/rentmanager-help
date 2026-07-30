# Issue Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Issues-Details.htm

Issues are created to track work that needs to be done, such as recurring maintenance activities, service requests from tenants, and office tasks that need to be completed by employees. Issues can be linked to tenants, units, and/or properties to maintain a historical record of work performed. Further, issues can be assigned categories, given a priority and status, and assigned to individual users and/or workflow projects. Issues can be associated with purchase orders, invoices, and vendor and owner bills.

 On the Issue details page, you can view and update information about a single issue.

 Related Privileges

 Group
 Privilege
 Column

 Service Manager
 Issues
 View, Edit

 For more information, refer to Control User Access .

 To view an issue's details page, go to arrow_forward Services arrow_forward Service Manager arrow_forward Issues and select an issue from the list.

 View and manage tenant information using the tiles on the Issue details page. The following tiles display by default. If a custom layout is applied to your details page, you might not see all of the following tiles. For more information about creating and assigning layouts, refer to My Layouts (Page) and System Layouts (Page) .

 Issue Summary

 In this section, general information about the issue's dates, status, and title can be viewed or edited. The issue status, priority, and category that describe the current progress of this issue display at the top of the tile.

 Field
 Description

 Assigned To

 The user assigned to complete or monitor this issue. If you do not want to assign a user to the service issue, leave the option value as <Unassigned> .

 If the user account has a phone number, you can click to call the user. If they have a text-enabled number, you can  click to text the user.

 More Information

 A default value may populate this field.

 Assigned to users can be specified at a system level in the Service Issue General Options system preferences or at a property level, based upon your selection in the Assign Service Issues field on the property's details page. Rent Manager populates the property-level assigned user into this field after you create service issue property links on the Links tile.

 Selecting an Assigned To user on this tile overrides either the default system- or property-level user for this service issue.

 Closed

 The date when this issue was closed. The issue status updates to closed when a date is entered in this field. You can click Close Issue to close the issue as of today's date and time.

 More Information

 If the service issue is assigned as a step in a workflow project and, in the workflow project's settings, Steps must be completed in order is enabled, the issue cannot be closed.

 Description

 The work that needs to be completed in order for the issue to be considered resolved.

 Due

 The date by which the issue needs to be completed.

 Lock Issue

 Related Privileges

 Group
 Privilege
 Column

 Service Manager
 Lock issue
 Enabled

 For more information, refer to Control User Access .

 Locks this issue to prevent other users from changing it.

 Opened

 The date the issue was created. This date is used to calculate the age of the issue.

 Scheduled

 The expected date that work on this issue takes place. If you have purchased the Maintenance Schedule licensed feature, you can click Select Time Block to assign the issue to a specific time slot. For more information, refer to Schedule Issue Visits via Maintenance Scheduling .

 Title

 The name of the service issue (e.g., Replace Locks , Check Water Meter , Change Furnace Filters , and so on).

 Issue Links

 You can link records about maintenance work with the properties, units, tenants, prospects, and owners associated with the issue. Issue links keep detailed historical records on each linked account with history/note items. When links are added to an issue, a history/note item is added to the History/Notes pop-up for the linked entities. In addition, you can invoice linked tenants or owners for work and inventory items in the Work Order tile. Linking issues also helps identify repeat issues by adding all service issues linked to a unit to a single pop-up, which you can view by clicking View Unit Issue History , and by generating the Reported Issues by Unit report. For more information, refer to Reported Issues by Unit (Report) .

 Additionally, you can add visibility when a meter is being swapped with another one by linking a pending meter swap. For more information, refer to Swap Meters .

 For each entity type, if the entity has an email address or text-enabled phone number, you can email or text them from this tile by clicking or .

 Issue Resolution

 This tile displays a description of the action taken to resolve the issue.

 Related Privileges

 To close an issue without a resolution, the following privilege is required:

 Group
 Privilege
 Column

 Service Manager
 Close issue without a resolution
 Enabled

 For more information, refer to Control User Access .

 History/Notes

 This tile tracks information that supplements or clarifies what is entered in other fields, such as notes about phone conversations, items on a to-do list, explanations about transactions, and so on.

 Column
 Description

 Date

 The date the history/note item was created.

 Note

 A short explanation of the data recorded by the note.

 Type

 The category of the note.

 Issue Details

 Related Preferences

 Users must have Allowed to Enter , Signature on File , and Has Pets enabled in system preferences before the corresponding options are available to select on individual issues. For more information, refer to Service Issue General Options (System Preferences) .

 On the this tile, general information about the issue can be viewed or edited. To add time to the Hours Worked field to track how much time is spent on the issue, click Add Hours .

 Field
 Description

 Allowed to Enter

 A indicates that the tenant gives permission for service technicians to enter their unit without them present.

 Category

 The issue category to sort and track types of service issues.

 Hours Worked

 The time spent on this issue. The number displayed is calculated by adding the amount of time any rmAppSuite Pro user checked in, any time entered manually via the app, and any time that is added on this page.

 Job

 If job costing is enabled, you can assign this issue to a specific job. All of the charges included in this invoice are tracked by the chosen job. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Pets

 A indicates that the tenant has pets.

 Priority

 The issue priority that describes the urgency of the issue.

 Workflow Project

 If this service issue is part of a workflow project defined in the Workflow Projects page, the name of the workflow project displays. For more information, refer to Workflow Projects and Templates .

 Signature on File

 A indicates that the property management company has the tenant's signature on file.

 Status

 The issue status to describe the current progress of this issue.

 Vendor

 The single vendor to complete the work as defined on the Work Orders tile.

 UDFs

 User defined fields (UDFs) track optional information relating to issues and recurring issues. User-defined fields display on this tile based on when a value was added to the UDF. The order in which the user-defined fields display may not match the order that displays in the User Defined Fields pop-up or on the User Defined Fields page.

 This tile displays up to six UDFs with values. The UDFs tile lets you view issue-type UDFs for the currently selected issue and enter or edit each value. To view the complete list of user defined fields of the Issue type, click .

 Issue Checklist

 In this tile, you can manage to-do lists of steps associated with an issue. For example, you may have an issue titled Fix bathroom sink , which requires your manager to authorize the purchase of a replacement part for the sink, your front office clerk to order the part, and the maintenance technician to install the new part. You can create a checklist item for each step of this process. When a step is finished and marked as completed in Rent Manager , the issue advances to the next user in the process.

 To add a new item to the checklist for this issue, click Add Checklist Item . Alternatively, if you have created any checklist templates, click the drop-down arrow and select Add from Template .

 If the user in the Assigned To field is not the user who is next in the checklist, you can click Advance to assign the next step in the checklist to the User Responsible .

 Field
 Description

 Completed

 Check this box on the currently assigned checklist item to mark it as complete and assign the next step to its responsible user.

 Description

 An explanation of the work required to complete the step.

 User Responsible

 Related Privileges

 This field populates only with users who have the following privilege:

 Group
 Privilege
 Column

 Service Manager

 Issues
 View

 For more information, refer to Control User Access .

 The user who is assigned to complete the step.

 Work Order

 On this tile, you can view, edit, or add details for any billable inventory items used to complete this issue.

 To add items to the work order, click Add Item .

 Column
 Description

 Cost

 The base cost of the inventory items included in the work order. By default, this amount is calculated using the Cost field from the inventory item details page.

 Description

 An optional explanation about the work order. By default, this field populates with the description on the inventory item details page.

 Item

 The name of the inventory items used to fulfill the work order. For more information, refer to Inventory Items (Page) .

 Item Links

 If you chose options to create vendor or owner bills, tenant invoices, or purchase orders for this work order item, or if you added a work order item via a Smart Bill, those items display here. You can create these manually by clicking Create Item Links , or these bills and invoices are created automatically when the issue is finished and a Closed date is added. For more information, refer to Add Links to a Work Order .

 Quantity

 The total number of this item used to fulfill the work order.

 Sales Price

 The dollar amount the tenant or owner will pay for the inventory item. By default, this amount is calculated by adding the Cost field and the Markup field from the inventory item details page.

 Total

 The total dollar amount charged for all of the inventory items in the work order using the following formula:

 Total = Sale Price * Quantity
