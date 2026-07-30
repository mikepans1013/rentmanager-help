# Inventory Item Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Inventory-Item-Details.htm

Inventory items are products you sell or services you provide. In Rent Manager , you can maintain a list of products and services for which you can submit an invoice, issue, bill, or purchase order. Maintaining such a list of items helps to ensure consistency when entering data and makes it easier to search for items when they are used in various places. On the inventory item's details page, you are able to view and update information about an inventory item.

 Related Privileges

 Group
 Privilege
 Column

 Sales/Invoicing
 Items
 View, Edit

 For more information, refer to Control User Access .

 To view the details for an inventory item, go to arrow_forward Accounting arrow_forward General arrow_forward Inventory Items and select the desired inventory items.

 General

 This tile displays the Name , Description , Location , and Purchase Order Workflow for the selected item.

 Field
 Description

 Name

 The short name of the inventory item (e.g. Light bulbs ).

 Description

 Details to describe the inventory item.

 Location

 The physical location of the inventory item, such as the bin number.

 Purchase Order Workflow

 The specified sequence of tasks to be performed in the review, approval, and fulfillment of purchase orders, and the user assigned to each sequential task.

 Charges

 This tile displays the Default Cost , Markup , and if the value entered in Markup is to be applied as a percentage ( Markup as percentage ).

 Field
 Description

 Default Cost

 The purchase price (the price you pay) per unit or item. This cost is automatically entered when the item is received from a purchase order.

 Markup

 The additional percentage or fixed amount that is added to the cost of the product or service as a markup.

 Markup as percentage

 If checked, the value entered in Markup is to be applied as a percentage.

 For example, if the value in Markup is 10.00 :

 - If this option is checked, the markup would be an additional 10% of the Default Cost .

 - If this option is not checked, the markup would be $10 added to the Default Cost .

 Inventory

 This tile displays whether the item should be held in stock, its finances are tracked, and optionally set with a reorder threshold.

 Field
 Description

 Track Inventory

 Flags the item as a tracked item that is held in stock, counted, and optionally set with a reorder threshold.

 When an item is tracked, the Inventory Transactions tile displays transaction history and lets you manually adjust the inventory as well as quickly view and access each event (invoice, purchase order, service issue, etc.) that affected this item.

 Track Cost of Goods Sold

 Allows journal entries to be created that increase the cost of goods sold expense account and reduce the inventory on the balance sheet when these items are sold to tenants or owners.

 Reorder Quantity

 This field becomes available if Track Inventory is checked. When the quantity of this item becomes less than the specified value, the status of the item is changed to Reorder and displayed in blue to signal it is time to reorder.

 Miscellaneous

 This tile displays whether the item is active and if it is subject to sales tax.

 Field
 Description

 Active Item

 Indicate that the inventory item is active and can be used when creating purchase orders, estimates, or service issues.

 More Information

 Since items that have an inventory greater than zero or that are included in estimates/POs cannot be deleted, making the item inactive is a useful alternative. The item remains in the system but can no longer be selected. In addition, you can always go back to an inactive item and make it active again.

 Taxable

 If checked, sales tax is applied to this item.

 Account Links

 This tile displays the Income Charge Type that displays on service issues, invoices, etc., and the account that is expensed whenever the inventory item is purchased ( Expense Chart Account ).

 Field
 Description

 Income Charge Type

 The charge type that displays on service issues, invoices, etc. This charge type should be linked to an income account that collects the money received from the sales of your inventory items.

 Expense Chart Account

 The account that is expensed whenever this inventory item is purchased.

 For example, this expense account is used if this item is included in a purchase order or vendor bill from a service issue.

 UDFS

 This tile displays all of the inventory related user defined fields (UDFs) that are used to track information that Rent Manager does not track by default. User-defined fields display on this tile based on when a value was added to the UDF. The order in which the user-defined fields display may not match the order that displays in the User Defined Fields pop-up or on the User Defined Fields page. This tile displays up to six UDFs with values.

 Inventory Transactions

 This tile allows you to view the item's transaction history as well as the event (invoice, purchase order, service issue, etc.) that affected the item.

 Field
 Description

 Date

 The date the transaction took place.

 Property

 The property at which the inventory transaction was recorded.

 Type

 The description of transaction (e.g. Manual Increase ).

 Quantity

 The total amount of inventory.
