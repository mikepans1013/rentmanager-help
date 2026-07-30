# Memorized Issue Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Issues-Memorized-Details.htm

Memorized issues are templates from which new issues can easily be created. You can either create a new memorized issue, or you can memorize an existing issue, which saves it as a template.

 On the Memorized Issue details page, you can view and update information about a single memorized issue.

 Related Privileges

 Group
 Privilege
 Column

 Service Manager
 Issues
 View, Edit

 For more information, refer to Control User Access .

 To view a memorized issue's details page, go to arrow_forward Services arrow_forward Service Manager arrow_forward Memorized Issues and select a memorized issue from the list.

 Memorized Service Issue

 Related Preferences

 Users must have Allowed to Enter , Signature on File , and Has Pets enabled in system preferences before the corresponding options are available to select on individual issues. For more information, refer to Service Issue General Options (System Preferences) .

 On this tile, general information about the issue can be viewed or edited.

 Field
 Description

 Allowed to Enter

 A indicates that the tenant gives permission for service technicians to enter their unit without them present.

 Memorized Issue Description

 A short description of the memorized issue ( Replace Existing Lock on Front Door , HVAC Preventative Maintenance , Repaint Exterior of Structure , and so on).

 Memorized Issue Name

 The name of the memorized issue ( Move-Out , Pest Control , Worksite Cleanup , and so on).

 Pets

 A indicates that the tenant has pets.

 Signature on File

 A indicates that the property management company has the tenant's signature on file.

 Status

 The issue status to describe the current progress of this issue.

 Title

 A one-line summary to act as the title of issues created from this template. This displays in the comment area on a vendor or owner bill created from this service order.

 Details

 On this tile, general information about the issue's category, project, and priority can be viewed or edited.

 Field
 Description

 Assigned To User

 The active user assigned to complete or monitor this issue.

 More Information

 A default value may populate this field.

 Assigned to users can be specified at a system level in the Service Issue General Options system preferences or at a property level, based upon your selection in the Assign Service Issues field on the property's details page. Rent Manager populates the property-level assigned user into this field after you create issue property links on the Links tile.

 Selecting an Assigned To User on this tile overrides either the default system- or property-level user for this issue.

 Category

 The issue category to sort and track types of service issues.

 Priority

 The issue priority that describes the urgency of the issue.

 Project

 If this issue is part of a project defined in the Service Manager Projects page, the name of the project displays. For more information, refer to Workflow Projects and Templates .

 Vendor

 The single vendor to complete the work as defined on the Work Orders tile.

 Description

 In this tile, more detailed information about the issue displays in the Description field. In the Resolution field, any action that was taken to resolve this issue displays.

 Field
 Description

 Description

 The work that needs to be completed in order for the issue to be considered resolved.

 Resolution

 The action taken to resolve the issue.

 More Information

 Users must have the Service Manager privilege to Close issue without a resolution enabled to close the issue without entering a Resolution . For more information, refer to Control User Access .

 Links

 Issue links help associate maintenance work to properties, units, tenants or prospects, and owners for reporting and record-keeping purposes. Establishing these links for each issue enhances your ability to track repeat issues using the Issue History in Rent Manager , which displays all issues that share links with the current issue. For example, if the current issue is linked to tenant Orga Itsuka, the Issue History displays a list of every other issue linked to Orga Itsuka.

 Issue links also allow you to keep a more detailed historical record on each linked account with history/notes. When links are added to an issue, a history note is automatically added to the History/Notes page for the linked entity. The tenant or prospect, unit, property, and/or owner accounts displays a note for each linked issue.

 In addition, the links can be used for invoicing tenants or owners on the Work Orders tile and generating the information found in the Reported Issues by Unit report which shows the number of issues linked to tenants or units. For more information, refer to Reported Issues by Unit (Report) .

 To email a linked entity from the issue, click to open the Compose Email pop-up with the entity's email address automatically populated in the To field and the issue title in the Subject . To send a text message to a linked entity from the issue, click to open the Send Text pop-up with the entity's name and phone number automatically populated in the Send Text To field.

 Work Order

 On the Work Order tile, view or edit the details of each billable item – the parts and labor charges associated with issues.

 Column
 Description

 Cost

 The base cost of the inventory items included in the work order. By default, this amount is calculated using the Cost field from the inventory item details page.

 Description

 An optional explanation about the work order. By default, this field populates with the description on the inventory item details page.

 Item

 The parts or labor that are included in the work order. If you have default values for the Description , Cost , or Sales Price entered on the item's details page, that information populates by default. For more information, refer to Inventory Items (Page) .

 After you select an item, you can click View Inventory Items to view the item's details page, or click the drop-down and select Item Cost Detail to view cost information for the item.

 Item Links

 The purchase order(s), invoice(s) and/or bill(s) associated with the work order.

 Property

 The name of the property associated with the work order. If you linked a property on the issue's details page in the Issue Links tile, that information populates by default.

 Quantity

 The total number of this item used to fulfill the work order.

 Sale Price

 The dollar amount the tenant or owner pays for the inventory item. By default, this amount is calculated by adding the Cost field and the Markup field from the inventory item details page.

 Total

 The total dollar amount charged for all of the inventory items in the work order using the following formula:

 Total = Sale Price * Quantity

 Unit

 The name of the unit associated with the work order. If you linked a unit on the issue's details page in the Issue Links tile, that information populates by default.

 Vendor

 The vendor responsible for fulfilling the work order. If a vendor is selected on the issue's details page, this column does not display.

 Checklist Items

 The Check List tile allows you to manage the various to-do list of steps (called items) associated with an issue. For example, you may have an issue titled Fix bathroom sink , which requires your manager to authorize the purchase of a replacement part for the sink, your front office clerk to order the part, and the maintenance technician to install the new part, among other steps. To do this, you can create a checklist item for each step of the process. When a step is finished and marked as completed in Rent Manager , you can advance the issue to another user in the process. If you have created any checklist templates, you can choose to add a predetermined checklist to the issue.

 To add, manage, advance, or delete a checklist item, click to open the Checklist Items pop-up.

 User Defined Fields

 User defined fields (UDFs) track optional information relating to issues. The UDFs tile lets you view issue-type UDFs for the currently selected issue and enter or edit each value. To view the complete list of UDFs of the Issue type, click .
