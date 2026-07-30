# Add a Memorized Issue

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Issues-Memorized-Add.htm

To reduce time adding issues for common tasks, you can create memorized issues to use as templates. Memorized issues allow you to save time by quickly populating general issue information (e.g., title, description, priority, and so on) for maintenance requests and tasks that are regularly created, such as replacing light bulbs or checking smoke detectors. You can either add a new template from scratch or create one using an existing issue.

 Related Privileges

 Group
 Privilege
 Column

 Service Manager
 Issues
 Add, View

 For more information, refer to Control User Access .

 Step 1: Create Memorized Issue

 To add a new memorized issue, do the following:

 -
 Go to arrow_forward Services arrow_forward Service Manager arrow_forward Memorized Issues .
The Memorized Issues page displays.

 More Information

 To add a memorized issue from an existing issue, go to   arrow_forward Services arrow_forward Service Manager arrow_forward Issues , then select an issue from the list. On the action bar, click to save the issue as memorized.

 -
 Click Add Memorized Issue .

 -
 In the Memorized Service Issue tile, enter the information below.

 Field
 Option

 Allowed to Enter

 If checked, signifies service technicians are allowed to enter the unit for all issues created from the memorized issue.

 Related Preferences

 This option displays only if the Allowed To Enter option is checked in system preferences. For more information, refer to Service Issue General Options (System Preferences) .

 Memorized Issue Description

 A short internal description of the memorized issue, which displays on the Memorized Issues page.

 Memorized Issue Name

 The internal name for the memorized issue template. This name displays when loading a memorized issue in the Add Issue wizard.

 Pets

 If checked, there is a pet in the unit for all issues created from the memorized issue.

 Related Preferences

 This option displays only if the Pets option is checked in system preferences. For more information, refer to Service Issue General Options (System Preferences) .

 Signature on File

 If checked, there is a tenant signature on file for all issues created from the memorized issue.

 Related Preferences

 This option displays only if the Signature on File option is checked in system preferences. For more information, refer to Service Issue General Options (System Preferences) .

 Status

 The issue status (e.g., New , In progress , On Hold ) assigned to issues created from the memorized issue.

 Title

 The default name for issues created from the memorized issue.

 Step 2: Add Details

 In the Details tile, enter the information that populates by default for new issues created from the memorized issue below.

 Field
 Option

 Assigned To User

 The Rent Manager user automatically assigned to issues created from the memorized issue.

 More Information

 If a user is set up as the default assignee for service issues in system preferences, their name automatically populates in this field. For more information, refer to Service Issue General Options (System Preferences) .

 Category

 The classification assigned to issues created from the memorized issue.

 Priority

 The urgency with which issues created from the memorized issue need to be completed.

 Project

 The project that issues created from the memorized issue are a part of. For more information, refer to Workflow Projects and Templates .

 Vendor

 The vendor to complete the work outlined in the Work Orders section for issues created from the memorized issue. Selecting a vendor in this field removes the Vendor field in the Work Orders section. If work orders are to be completed by multiple vendors, leave this field blank.

 Step 3: Add Description

 In the Description tile, enter the description and resolution message that populate by default for new issues created from the memorized issue below.

 Field
 Option

 Description

 The work that needs to be completed in order for issues created from the memorized issue to be considered resolved.

 Resolution

 The action that was taken to resolve issues created from this memorized issue.

 Step 4: Link the Memorized Issue

 In the Links tile, add any entities that are associated to the memorized issue. From the entity type section, click Add Link . This automatically adds other associated entities where possible. For example, adding a tenant automatically adds the property, unit, and owner associated with their active lease(s).

 More Information

 When an issue is created from a memorized issue, a history/note item is automatically added to each linked entity. In addition, the links can be used to invoice tenants or owners from included work orders and generate data found in the Reported Issues by Unit report, which displays the number of issues linked to tenants or units. If more than one tenant is linked to an issue, you cannot add an invoice to the issue. For more information, refer to Reported Issues by Unit (Report) .

 Step 5: Set Up Work Orders

 In the Work Order tile, add the work order items for new issues created from the memorized issue. To create a new work order item, click Add Item , then enter the work order information below. When finished, click Add Item & Close or click Add Another Item to add another work order item.

 In the Add Work Order Item pop-up Details tile, enter the following information:

 Field
 Description

 Description

 Additional information about the item, such as the measurement used to determine the cost of the item.

 Inventory Item

 The parts or labor that are included in the work order. If you have default values for the Description , Cost , or Sales Price entered on the item's details page, that information populates by default. For more information, refer to Inventory Items (Page) .

 After you select an item, you can click View Inventory Items to view the item's details page, or click the drop-down and select Item Cost Detail to view cost information for the item.

 Job

 If job costing is enabled, the name of any jobs associated with the work order. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Property

 The property associated with the cost of the work order.

 Unit

 The name of the unit associated with the work order.

 Vendor

 The vendor responsible for fulfilling the work order.

 More Information

 If a vendor was selected in the Details section, this field does not display and the selected vendor is associated with all work order line items.

 In the Add Work Order Item pop-up Billing Information tile, enter the following information:

 Field
 Description

 Cost

 The base cost of the inventory items included in the work order. By default, this amount is calculated using the Cost field from the inventory item details page.

 Qty

 The total number of this item used to fulfill the work order.

 Sale Price

 The dollar amount the tenant or owner pays for the inventory item. By default, this amount is calculated by adding the Cost field and the Markup field from the inventory item details page.

 Total

 The total dollar amount charged for all of the inventory items in the work order using the following formula:

 Total = Sale Price * Quantity

 In the Billing Information tile's Item Links section, choose from the following options to create transactions linked to this work order.

 Option
 Description

 Bill

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Bills
 Add, View

 For more information, refer to Control User Access .

 Creates a bill to pay for this item. You can create a Vendor Bill if the property intends to pay for the work order, or you can create a Vendor Bill & Owner Bill if the management company intends to pay the vendor and then be reimbursed by the property owner. For more information, refer to Add a One-Time Vendor/Owner Bill .

 Related Preferences

 If the Vendor is the same one selected when the Set an in-house maintenance company option is enabled in system preferences, the created vendor bill uses the item's Sale Price instead of Cost . This only occurs when Vendor Bill is selected, not when Vendor Bill & Owner Bill is selected. For more information, refer to Service Issue General Options (System Preferences) .

 Purchase Order

 Related Privileges

 Group
 Privilege
 Column

 POs/Estimates
 Purchase orders
 Add, View

 For more information, refer to Control User Access .

 Creates a purchase order for this item. For more information, refer to Purchase Orders (Page) .

 Tenant Invoice

 Related Privileges

 Group
 Privilege
 Column

 Sales/Invoicing
 Invoices
 Add, View

 For more information, refer to Control User Access .

 Creates an invoice if you want the tenant to pay for this item. For more information, refer to Invoices (Page) .

 Step 6: Add a Checklist

 Add to-do tasks for issues created from the memorized issue. To create a new checklist item, click Add Checklist Item , or, if you have an existing checklist template, add items directly from that template by clicking the drop-down arrow to the right of Add Checklist Item and select Add From Template . For more information on creating and managing checklist templates, refer to Checklist Template Details (Pop-Up) .

 In the Add Checklist Item pop-up, enter the work order item information below and when finished, click Save & Close to close the pop-up.

 Column
 Description

 Description

 The task that must be performed for the checklist item.

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

 The user assigned to perform the task. Selecting a user in this field item causes the issue to show on the user's open issue list, as well as on the user's dashboard if the Service Issues Due dashboard tile has been added to their layout via the dashboard designer.

 Warning

 The checklist cannot be advanced to the next item unless a user is selected for that item.

 Step 7: Add UDFs

 In the UDFs tile, click View All UDFs to update the values for each user-defined field (UDF). Required UDFs are marked with an asterisk (*) and must have a Value entered to create the recurring issue. Click OK to close the pop-up.

 The list of UDFs displays only issue-type UDFs. For more information, refer to User Defined Fields (Page) .

 Step 8: Save the Memorized Issue

 On the Memorized Issue page, click Save to finalize any additional changes.
The memorized issue is saved as a template.
