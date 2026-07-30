# Purchase Order Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Purchase-Order-Details.htm

The Purchase Order details page allows you to view and manage purchase orders (POs). From this page you can generate estimates, bills, and invoices from the PO, add and delete items, and manage history notes associated with the PO.

 Related Privileges

 Group
 Privilege
 Column

 POs/Estimates
 Purchase orders
 View

 For more information, refer to Control User Access .

 To view a purchase order's details, go to   arrow_forward Payables arrow_forward General arrow_forward Purchase Orders and select a PO from the list.

 Details

 In this section, basic contact and administrative items associated with the PO display.

 The following fields are available in this section:

 Field
 Description

 PO #

 The purchase order number. By default, the purchase order number is internally generated and numbered sequentially.

 Related Preferences

 If the Allow changing PO# option is enabled in system preferences, the user privilege below must be enabled to edit the PO number.

 Group
 Privilege
 Column

 POs/Estimates
 Change PO numbers
 Enabled

 For more information, refer to Control User Access .

 Related Preferences

 To edit this field, the Allow changing PO# system preference must be enabled. For more information, refer to P.O./Inventory (System Preferences) .

 Request Date

 The date the purchase order was created. By default, today's date populates.

 Related Preferences

 If the Lock purchase order dates system preference is enabled, this field is unable to be edited. For more information, refer to P.O./Inventory (System Preferences) .

 Requested By

 The name of the user who created the purchase order. This field populates after the purchase order is saved.

 Issue Date

 The date when the associated service issue was created.

 Description

 A brief description of the PO that displays on the Purchase Orders page.

 Workflow

 The PO workflow assigned to this purchase order. Once a workflow is assigned to a purchase order, if a different workflow is assigned, the purchase order is reset to the beginning of the new workflow assigned.

 Status

 The status ( Pending , Approved , Rejected , Fulfilled ) of the PO. If the PO is closed, the last status before the PO was closed displays. For example, if the PO was closed while in the Approved status, the field displays Approved - Closed .

 Assigned To

 The user that the purchase order is currently assigned to.

 Approved By

 The name of the user who approved the purchase order and the date it was approved. This field is populates after the purchase order is approved.

 Summary

 In this section, information regarding addresses, vendors, and tenants displays.

 The following fields are available in this section:

 Field
 Description

 Tenant/Prospect/Owner

 The tenant, prospect, or owner account the purchase order is associated with.

 Tenant/Prospect/Owner will be invoiced

 Related Privileges

 Group
 Privilege
 Column

 Sales/Invoicing
 Invoices
 Add, View

 For more information, refer to Control User Access .

 If applicable, check Tenant/Prospect/Owner will be invoiced to generate an invoice for that account.

 Vendor

 The vendor from whom you intend to purchase the item(s). A vendor must be selected to save a purchase order.

 Billing Address

 If entered, the Default billing address in PO/Inventory system preferences automatically populates this field. For more information, refer to P.O./Inventory (System Preferences) .

 You can click to select a property and copy the billing address entered on the Property details page, or you can manually enter a billing address.

 Shipping Address

 If entered, the Default shipping address in PO/Inventory system preferences automatically populates this field. For more information, refer to P.O./Inventory (System Preferences) .

 You can click to select a property and copy the shipping address entered on the Property details page, or you can manually enter a shipping address.

 Invoice and Bill Links

 In this section, information regarding invoices and bills associated with the PO display.

 The following options are available in this section:

 Option
 Description

 Add Invoice Link

 Related Privileges

 Group
 Privilege
 Column

 Sales/Invoicing
 Invoices
 Add, View

 For more information, refer to Control User Access .

 If a tenant, prospect, or owner was selected and you would like to invoice them, click Add Invoice to generate an invoice for the specified entity.

 Add Bill Link

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Bills
 Add, View

 For more information, refer to Control User Access .

 In the Bills section, click Add to generate a one-time bill with data from the purchase order and a link back to the purchase order. The bill memo auto populates with the Purchase Order # followed by the description. The new bill also displays on the Vendor Transactions page. This option displays only after the purchase order is approved.

 Link Existing Bill

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Bills
 View

 For more information, refer to Control User Access .

 Click Link to search and filter for existing bills to link to the PO. This option displays only after the purchase order is approved.

 Service Issue Link

 Related Privileges

 Group
 Privilege
 Column

 Service Manager
 Issues
 Add, View

 For more information, refer to Control User Access .

 If the PO was generated as part of a service issue, a link to that service issue displays.

 Purchase Order Total and Quantity

 In this section, the total dollar amount of all expense line items and the total number of all Items in the purchase order displays.

 Purchase Order History

 In this section, you can record and review important notes pertaining to the purchase order. The History/Notes pop-up can be quickly accessed by clicking .

 Items

 In this section, information about each product or service line item associated with the purchase order displays.

 Click Add Item to add as many line items as needed and enter the following information:

 Column
 Description

 Property

 The property associated with each Item in the purchase order.

 Unit

 If applicable, the unit associated with each Item in the purchase order.

 Job

 If job costing is enabled, optionally associate this purchase order with a specific job. Any transactions created for this item through the purchase order will be assigned to this job. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Item

 The inventory item(s) purchased via this purchase order.

Once an item is selected, the Cost and Memo fields populate with the item’s information.

 Quantity

 The quantity of the Item to purchase. The Total updates when the quantity is entered or changed.

 Cost

 The purchase price you pay per Item .

 Billed Quantity

 The total number of inventory items that are included in a linked bill.

 Memo

 The item’s description, as entered on the Inventory Item details page.

 Total

 The total cost of this line item, using the following formula:

 Total = Quantity x Cost
