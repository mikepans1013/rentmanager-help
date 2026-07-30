# Manually Increase or Decrease Inventory

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Inventory-Manually-Increase-or-Decrease.htm

Efficient inventory control starts with tracking your inventory items, which allows you to view the quantity of an item at any time. An inventory item is designated as being tracked when, on the Inventory Item details page, the Track Inventory field is checked.

 When linked to certain Rent Manager features, inventory item quantities are updated in real time. For example, stock is automatically increased when items are received via a purchase order and automatically decreased when items are issued via an issue or invoice. You can also manually increase or decrease tracked item quantities at any time.

 Manually updating your inventory is meant for initial setup to enter your beginning inventory of goods before new sales or purchases are made. When you manually increase or decrease inventory through this process, financial data, including Cost of Goods Sold (COGS), are not affected.

 Related Privileges

 Group
 Privilege
 Column

 Sales/Invoicing
 Inventory Transactions
 View, Edit

 Items
 View

 Manually Adjust Inventory Items
 Enabled

 For more information, refer to Control User Access .

 Increase Inventory

 When you manually increase inventory, financial data is not affected, which is why it is ideal for setting up inventory stock you already own. For example, if you already own 10 cans of paint you may not remember where you purchased the paint or how much you paid for it. In a situation like this, you might not want it to display on financial reports (like the Profit & Loss ) because it was before you started tracking inventory costs. If the paint is purchased via a purchase order, however, the cost is tracked because the purchase is linked to an expense account in the purchase order.

 To manually increase inventory, do the following:

 -
 Go to arrow_forward Accounting arrow_forward General arrow_forward Inventory Items and select an item from the list.
The Inventory Item details page displays.

 -
 On the Inventory Transactions tile, click .
The Inventory Transactions pop-up displays.

 -
 In the top right, click Increase Inventory .
The Increase Inventory pop-up displays.

 -
 Enter the following information:

 Option
 Description

 Item

 The item for which you wish to increase quantity. By default, the currently selected item displays.

 Date

 The date of the transaction. By default, today's date populates.

 Quantity

 The item quantity to be added to the current total Remaining Quantity .

 Cost

 The dollar amount (not including Markup ) it cost you to buy the item.

 Notes

 A comment to be added on the Inventory Transactions pop-up in the Type column for this item.

 Property

 The property, if applicable, that tracks the item increase.

 Related Preferences

 This column displays only if Track inventory by property is enabled in system preferences. For more information refer to P.O./Inventory (System Preferences) .

 -
 Click Save .
The increase is added as a new line on the Inventory Transactions pop-up.

 More Information

 The Price that displays on the Inventory Transactions pop-up represents the amount you charge the property when it uses that item. When you manually increase the inventory, there is no charge being applied to a property, so the Price and Total Price display as 0.00 .

 Decrease Inventory

 Similar to increasing inventory, when you manually decrease inventory, financial data is not affected and can be used when doing audits on your inventory stock. For example, if you are doing an inventory count and realize that you have fewer of an item than you expected, you can manually decrease your inventory in Rent Manager because you might not want this change to display on financial reports (like the Profit & Loss ). If the item was used via an invoice or work order, however, the cost is tracked because the item is linked to an expense account.

 To manually decrease inventory, do the following:

 -
 Go to arrow_forward Accounting arrow_forward General arrow_forward Inventory Items and select an item from the list.
 The Inventory Item details page displays.

 -
 On the Inventory Transactions tile, click .
The Inventory Transactions pop-up displays.

 -
 In the top right, click Decrease Inventory .
The Decrease Inventory pop-up displays.

 -
 Enter the following information:

 Option
 Description

 Item

 The item for which you wish to decrease quantity. By default, the currently-selected item displays.

 Date

 The date of the transaction. By default, today's date populates.

 Quantity

 The item quantity to be subtracted from the current total Remaining Quantity .

 Price

 The price per item using the following formula:

 Cost + Markup = Price

 COGS

 The cost of the manual decrease, calculated as follows:

 COGS = Item Cost * Quantity

 If the decrease quantity exceeds the quantity of the item on hand, the COGS value does not go any higher than item’s cost multiplied by the quantity on hand. For example, if an item costs $90 and you have 10 on hand, a manual decrease of 15 (bringing the item into a negative on hand quantity) has only a COGS value of $900 ( 90*10 ).

 Manually decreasing inventory does not result in a journal entry or expense account increase. The transaction needs to be recorded manually.

 Related Preferences

 This column displays only if Track Cost Of Goods Sold (COGS) is enabled in system preferences. For more information refer to P.O./Inventory (System Preferences) .

 Notes

 A comment to be added on the Inventory Transactions pop-up in the Type column for this item.

 Property

 The property, if applicable, that tracks the item decrease.

 Related Preferences

 This column displays only if Track inventory by Property is enabled in system preferences. For more information refer to P.O./Inventory (System Preferences) .

 -
 Click Save .
The decrease is added as a new line on the Inventory Transactions pop-up.
