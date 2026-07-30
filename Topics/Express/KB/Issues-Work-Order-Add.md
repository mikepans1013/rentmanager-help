# Add a Work Order

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Issues-Work-Order-Add.htm

Work orders are billable items associated with property maintenance, repairs, and upgrades, such as labor hours and material costs. Create work orders to track maintenance and repair expenses. You can add work orders when you create new issues, memorized issues, and recurring issues. You can also add work orders to existing issues of all types.

 Related Privileges

 Group
 Privilege
 Column

 Service Manager
 Issues
 View, Edit

 Recurring issues
 View, Edit

 For more information, refer to Control User Access .

 Add a Work Order to an Issue

 To add a work order to a one-time issue, do the following:

 -
 Go to arrow_forward Services arrow_forward Service Manager arrow_forward Issues and select an issue from the list.
 The Issue details page displays.

 -
 In the Work Order tile, click Add Item .

 -
 In the Details section, enter the following information:

 Field
 Description

 Inventory Item

 The parts or labor that are included in the work order. If you have default values for the Description , Cost , or Sales Price entered on the item's details page, that information populates by default. For more information, refer to Inventory Items (Page) .

 After you select an item, you can click View Inventory Items to view the item's details page, or click the drop-down and select Item Cost Detail to view cost information for the item.

 Description

 An optional explanation about the work order. By default, this field populates with the description on the inventory item details page.

 Property

 The name of the property associated with the work order. If you linked a property on the issue's details page in the Issue Links tile, that information populates by default.

 Unit

 The name of the unit associated with the work order. If you linked a unit on the issue's details page in the Issue Links tile, that information populates by default.

 Vendor

 The vendor responsible for fulfilling the work order. If a vendor is selected on the issue's details page, this field does not display.

 Job

 If job costing is enabled, the name of any jobs associated with the work order. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 -
 In the Billing Information section, enter the following information about the quantity and price of the item:

 Field
 Description

 Qty

 The total number of this item used to fulfill the work order.

 Cost

 The base cost of the inventory items included in the work order. By default, this amount is calculated using the Cost field from the inventory item details page.

 Sale Price

 The dollar amount the tenant or owner pays for the inventory item. By default, this amount is calculated by adding the Cost field and the Markup field from the inventory item details page.

 Total

 The total dollar amount charged for all of the inventory items in the work order using the following formula:

 Total = Sale Price * Quantity

 -
 In the Item Links section, choose from the following options to create transactions linked to this work order. This section displays only after you select a vendor in the Details section.

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

 Check to create a bill to pay for this item. You can create a Vendor Bill if the property intends to pay for the work order, or you can create a Vendor Bill & Owner Bill if the management company intends to pay the vendor and then be reimbursed by the property owner. For more information, refer to Bills (Page) .

 Related Preferences

 If the Vendor is the same one selected when the Set an in-house maintenance company option is enabled in system preferences, the created vendor bill uses the item's Sale Price instead of Cost . This only occurs when Vendor Bill is selected, not when Vendor Bill & Owner Bill is selected. For more information, refer to Service Issue General Options (System Preferences) .

 Tenant Invoice

 Related Privileges

 Group
 Privilege
 Column

 Sales/Invoicing
 Invoices
 Add, View

 For more information, refer to Control User Access .

 Check to create an invoice if you want the tenant to pay for this item. For more information, refer to Invoices (Page) .

 Purchase Order

 Related Privileges

 Group
 Privilege
 Column

 POs/Estimates
 Purchase orders
 Add, View

 For more information, refer to Control User Access .

 Check to create a purchase order for this item. For more information, refer to Purchase Orders (Page) .

 - Click OK .
 The item is added to the Work Order tile, and you can repeat the process to add as many items as needed.

 Add a Work Order to a Memorized Issue

 To add a work order to a memorized issue, do the following:

 -
 Go to arrow_forward Services arrow_forward Service Manager arrow_forward Memorized Issues and select an issue from the list.
 The Memorized Issue details page displays.

 -
 In the Work Order tile, click Add Item .

 -
 In the Work Order tile, enter the following information:

 Field
 Description

 Property

 The name of the property associated with the work order.

 Unit

 The name of the unit associated with the work order.

 Item

 The name of the inventory items used to fulfill the work order. For more information, refer to Inventory Items (Page) .

 Description

 An optional explanation about the work order. By default, this field populates with the description on the inventory item details page.

 QTY

 The total number of this item used to fulfill the work order.

 Cost

 The base cost of the inventory items included in the work order. By default, this amount is calculated using the Cost field from the inventory item details page.

 Sale Price

 The dollar amount the tenant or owner will pay for the inventory item. By default, this amount is calculated by adding the Cost field and the Markup field from the inventory item details page.

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

 If applicable, check to link this line item to a purchase order. For more information, refer to Purchase Orders (Page) .

 Creating a PO prevents you from creating a Vendor Bill or an Owner Bill for this work order.

 Invoice Tenant

 Related Privileges

 Group
 Privilege
 Column

 Sales/Invoicing
 Invoices
 Add, View

 For more information, refer to Control User Access .

 If applicable, check to create and link an invoice to charge the tenant the Sale Price of the work order. For more information, refer to Invoices (Page) .

 Vendor Bill

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Bills
 Add, View

 For more information, refer to Control User Access .

 If applicable, check to create and link a bill expensing the property for the Cost of the work order. For more information, refer to Bills (Page) .

 Owner Bill

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Bills
 Add, View

 For more information, refer to Control User Access .

 If applicable, check to create and link a bill expensing the property's owner for the Sale Price of the work order. For more information, refer to Bills (Page) .

 -
 Click Add Item and repeat to add as many work order items as needed.

 -
 Click Save .
 The work order is added, and any linked bills or invoices display in your list of bills or transactions.

 Add a Work Order to a Recurring Issue

 To add a work order to a recurring issue, do the following:

 -
 Go to arrow_forward Services arrow_forward Service Manager arrow_forward Recurring Issues and select an issue from the list.
 The Service Manager Recurring Issue details page displays.

 -
 In the Work Order tile, click Add Item .

 -
 In the Work Order tile, enter the following information:

 Field
 Description

 Property

 The name of the property associated with the work order.

 Unit

 The name of the unit associated with the work order.

 Vendor

 The vendor responsible for fulfilling the work order. If a vendor is selected in the issue's Details tile, this field does not display in the Work Order tile.

 Item

 The name of the inventory items used to fulfill the work order. For more information, refer to Inventory Items (Page) .

 Description

 An optional explanation about the work order. By default, this field populates with the description on the inventory item details page.

 QTY

 The total number of this item used to fulfill the work order.

 Cost

 The base cost of the inventory items included in the work order. By default, this amount is calculated using the Cost field from the inventory item details page.

 Sale Price

 The dollar amount the tenant or owner will pay for the inventory item. By default, this amount is calculated by adding the Cost field and the Markup field from the inventory item details page.

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

 If applicable, check to link this line item to a purchase order. For more information, refer to Purchase Orders (Page) .

 Creating a PO prevents you from creating a Vendor Bill or an Owner Bill for this work order.

 Invoice Tenant

 Related Privileges

 Group
 Privilege
 Column

 Sales/Invoicing
 Invoices
 Add, View

 For more information, refer to Control User Access .

 If applicable, check to create and link an invoice to charge the tenant the Sale Price of the work order. For more information, refer to Invoices (Page) .

 Vendor Bill

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Bills
 Add, View

 For more information, refer to Control User Access .

 If applicable, check to create and link a bill expensing the property for the Cost of the work order. For more information, refer to Bills (Page) .

 Owner Bill

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Bills
 Add, View

 For more information, refer to Control User Access .

 If applicable, check to create and link a bill expensing the property's owner for the Sale Price of the work order. For more information, refer to Bills (Page) .

 -
 Click Add Item and repeat to add as many work order items as needed.

 -
 Click Save .
The work order is added, and any linked bills or invoices display in your list of bills or transactions.
