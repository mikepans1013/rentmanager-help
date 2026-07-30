# Add an Inventory Item

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Inventory-Items-Add.htm

Inventory items are products and services you sell and for which you submit an invoice, issue, or purchase order. They can be tracked items (tangible items that you hold in stock) or non-tracked items (such as services you provide or items you sell but do not stock or track). Maintain a list of inventory items in Rent Manager to ensure consistency when entering data and make it easier to search for items that are in use.

 Related Privileges

 Group
 Privilege
 Column

 Sales/Invoicing
 Items
 Add, View

 For more information, refer to Control User Access .

 To add inventory items, do the following:

 -
 Go to arrow_forward Accounting arrow_forward General arrow_forward Inventory Items .
The Inventory Items page displays.

 -
 Click Add Inventory Item .

 -
 In the Inventory Item Information section, enter the following information:

 Field
 Description

 Name

 A descriptive name to identify the product or service.

 Description

 Additional information or an explanation about the inventory item's purpose.

 Location

 Where the items are stored. For example, if you keep several types of light bulbs in storage, you might create an inventory item for one size bulb and enter Box 4 to identify where these specifics bulbs are kept.

 Purchase Order Workflow

 If the item is part of a purchase order workflow, such as buying and installing new carpet between tenants, select the workflow from the drop-down. For more information, refer to Purchase Order Workflows (Page) .

 -
 In the Charges section, enter the following information:

 Field
 Description

 Default Cost

 The price that is applied by default when this inventory item is used. This is usually the price you paid to purchase the item.

 Markup

 If you charge additional markup beyond the base cost of products and services, enter the dollar amount, or check Markup as Percentage and enter a percentage in this field.

 -
 In the Inventory section, enter the following information:

 Field
 Description

 Track Inventory

 If the item is held in stock and counted, check this option. For more information, refer to Set Up Tracking for Inventory Items .

When this option is checked, the Inventory Transactions pop-up on the item's details page displays transaction history, and you can manually adjust the inventory or view each event (invoice, purchase order, service issue, etc.) that affected this item.

 Track Cost of Goods Sold

 This field is available if Track Inventory is checked. Cost of Goods Sold (COGS) tracks the cost of sales for inventory items, increasing asset accounts as items are received and increasing expense accounts as they’re sold.

 Related Preferences

 This options is available only if Track Cost of Goods Sold (COGS) is enabled in system preferences. For more information, refer to P.O./Inventory (System Preferences) .

 Reorder Quantity

 This field is available if Track Inventory is checked. Enter the minimum number of items to keep in stock. When the quantity of this item drops below this value, the status of the item changes to Reorder and displays in blue to notify you that the item needs to be reordered.

 -
 In the Miscellaneous section, choose from the following options:

 Field
 Description

 Active Item

 If this item is active, check this option.

Active items are available for use with purchase orders, estimates, service issues, etc.

Inactive items remain in the system but are not selectable.

 Taxable

 If the item is subject to sales tax, check this option.

 -
 In the Account Links section, enter the following information:

 Field
 Description

 Income Charge Type

 The charge type that displays on service issues, invoices, etc. when this inventory item is added. This charge should be linked to an income account that collects the money received from the sales of your inventory items.

 Expense Chart Account

 The account that is expensed whenever this inventory item is purchased. For example, this expense account would be used if this item is included in a purchase order or vendor bill from a service issue.

 Asset Chart Account

 The asset account that increases when the bill created as a link to purchase orders is paid. This option is available only if Track Cost of Goods Sold is enabled.

 COGS Chart Account

 The expense account that is increased after invoice or owner bill links are created. This option is available only if Track Cost of Goods Sold is enabled.

 -
 In the User Defined Fields section, enter a Value for any user-defined fields you need for this inventory item.

 -
 Click Save & Close to complete the inventory item creation process and close the pop-up. Alternatively, click Save & New to finish adding the item and refresh the pop-up to create another item.
