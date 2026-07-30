# Add a Purchase Order

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Purchase-Order-Add.htm

Purchase orders (POs) are used to request permission to purchase items, prevent unauthorized purchases, and maintain a historical record of items purchased. All purchase orders are assigned statuses to identify rejected, approved, pending approval, or closed POs. You can also define PO workflows to automate the assignment of POs to selected users for review, approval, and fulfillment.

 Related Privileges

 Group
 Privilege
 Column

 POs/Estimates
 Purchase orders
 Add, View

 For more information, refer to Control User Access .

 To add a purchase order, do the following:

 -
 Go to   arrow_forward Payables arrow_forward General arrow_forward Purchase Orders .
The Purchase Orders page displays.

 -
 Click Add Purchase Order .

 -
 To set the date, workflow, and other general information for the PO, enter the following information:

 Field
 Description

 PO #

 The number to identify the purchase order. By default, the purchase order number is internally generated and numbered sequentially.

 Related Preferences

 To edit this field, Allow changing PO# must be enabled, and user privilege below must be enabled.

 Group
 Privilege
 Column

 POs/Estimates
 Change PO numbers
 Enabled

 For more information, refer to P.O./Inventory (System Preferences) .

 Request Date

 The date the purchase order was created. By default, today's date populates.

 Related Preferences

 If Lock purchase order dates is enabled, this field cannot be edited. For more information, refer to P.O./Inventory (System Preferences) .

 Issue Date

 The date when the associated service issue was created.

 Description

 If applicable, a brief description of the purchase order that displays on the Purchase Orders page.

 Workflow

 The PO workflow assigned to this purchase order. If a workflow is not assigned, the field is blank. For more information, refer to Purchase Order Workflows (Page) .

 Assigned To

 The user who the purchase order is currently assigned to. By default, the user who created the purchase order is assigned.

 -
 To link the purchase order to a tenant, prospect, or vendor, enter the following information:

 Field
 Description

 Tenant/Prospect/Owner

 The tenant, prospect, or owner account the purchase order is associated with.

 Tenant/Prospect/Owner will be invoiced

 If applicable, check Tenant/Prospect/Owner will be invoiced to generate an invoice for that account. For more information, refer to Invoice Details (Page) .

 Vendor

 The vendor from whom you intend to purchase the item(s). A vendor must be selected to save a purchase order.

 Billing Address

 If entered, the Default billing address entered in system preferences automatically populates this field. For more information, refer to P.O./Inventory (System Preferences) .

 You can click to select a property and copy the billing address entered on the property's details page, or you can manually enter a billing address.

 Shipping Address

 If entered, the Default shipping address entered in system preferences automatically populates this field. For more information, refer to P.O./Inventory (System Preferences) .

 You can click to select a property and copy the shipping address entered on the property's details page, or you can manually enter a shipping address.

 -
 To add the price and items associated with the purchase order, click Add Item to add as many line items as needed and enter the following information:

 Column
 Description

 Property

 The property associated with each Item in the purchase order.

 Unit

 If applicable, the unit associated with each Item in the purchase order.

 Job

 If job costing is enabled, optionally associate this purchase order with a specific job. Any transactions created for this item through the purchase order will be assigned to this job. For more information, refer to Jobs (Page) .

 Related Preferences

 By default, job costing is not tracked in Rent Manager . The feature must first be enabled through General Options (System Preferences) .

 Item

 The inventory item(s) purchased via this purchase order.

Once an item is selected, the Cost and Memo fields populate with the item’s information. For more information, refer to Inventory Items (Page) .

 Quantity

 The quantity of the Item to purchase. The Total updates when the quantity is entered or changed.

 Cost

 The purchase price you pay per Item .

 Memo

 The item’s description, as entered on the Inventory Item details page.

 Total

 The total cost of this line item, using the following formula:

 Total = Quantity * Cost

 -
 Click Save to create the purchase order and display its details page. Alternatively, click Save & New to create another purchase order, or click Save & Close to create the purchase order without opening its details page.
The purchase order is created.
