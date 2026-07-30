# Inventory Item Transactions (Pop-Up)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Inventory-Item-Transactions.htm

Efficient inventory control starts with tracking your inventory items, which allows you to view the quantity of an item at any time. An inventory item is designated as being tracked when, on the Inventory Item details page, the Track Inventory field is checked.

 The Inventory Transactions pop-up allows you to view an item's transaction history as well as event (invoice, purchase order, service issue, and so on) that affected the item.

 Tracked items include purchased products and parts which are kept in stock, tracked (counted), and optionally flagged for reorder when the quantity falls below a specified amount. Items kept in stock are considered a current asset on the Balance Sheet . Items that do not need to be tracked are any services or products that don't need to have their transaction history tracked or a minimum quantity kept on hand. These items are used to maintain routine business operations, such as services offered to tenants and owners like plumbing, cleaning, and painting.

 Rent Manager can also calculate the Cost of Goods Sold (COGS) for any tracked inventory items. Doing so results in the creation of journal entries every time bill and invoice links are created in work orders that involve COGS-enabled items. These journals affect the asset and COGS expense account assigned to the inventory item.

 When you track items, Rent Manager does the following for you:

 - Tracks the number of items in stock.

 - Automatically adjusts the item quantities in stock.
 Stock is automatically increased when items are received via a purchase order and automatically decreased when items are issued via a service issue or invoice.

 - Makes data on the Inventory Transactions pop-up available so you can manually adjust item quantities.

 - Automatically updates an item's status based on specific criteria (out of stock, needs to be reordered, and so on).

 Related Privileges

 Group
 Privilege
 Column

 Sales/Invoicing
 Inventory Transactions
 View

 Items
 View

 For more information, refer to Control User Access .

 To view the Inventory Transactions pop-up for an item, go to arrow_forward Accounting arrow_forward General arrow_forward Inventory Items . Select an item from the list, then on the Inventory Transactions tile, click .

 Column Descriptions

 The following columns display in the Inventory Transaction pop-up.

 Column
 Description

 Date

 The date of the transaction.

 Property

 The property, if any whose inventory of this item is affected by the transaction.

 Related Preferences

 This column displays only if Track inventory by property is enabled in system preferences. For more information refer to P.O./Inventory (System Preferences) .

 Type

 The transaction type, such as items received via purchase order, items used via an issue or invoice, manual increase, manual decrease, automatic inventory transfers between properties, and so on. Any notes entered when increasing or decreasing inventory are also appended to the transaction type.

 Quantity

 The number of items added or subtracted as a result of the transaction.

 Cost

 The dollar amount (not including Markup ) it cost you to buy the item.

 Price

 The dollar amount you charged for the item using the following formula:

 Price = Cost + Markup

 Total Cost

 The total dollar amount it cost you to buy the item(s) for each change in inventory using the following formula:

 Total Cost = Quantity * Cost

 Total Price

 The total dollar amount you charged for the item(s) for each change in inventory using the following formula:

 Total Price = Quantity * Price

 Remaining Quantity

 The total number of items in stock as of the transaction date.

 Value

 For items purchased at their default cost, this column is calculated as follows:

 Value = Total Purchased Amount - (Quantity Decreased * Default Cost)

 For items not purchased at their default cost, this column is calculated as follows:

 Value = Total Purchased Amount - (Quantity Decreased * New Cost)

 Related Preferences

 When the system preferences option to Track Cost of Goods Sold (CoGS) is checked and a Inventory valuation method is selected, the value of the column is calculated based on the selected Inventory valuation method . Otherwise, Rent Manager calculates this column based on the FIFO valuation method.

 For more information, refer to P.O./Inventory (System Preferences) .
