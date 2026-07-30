# P.O./Inventory (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/PO-Inventory.htm

These system preferences allow you to set up default values for purchase orders (POs) and inventory transactions.

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 To set these system preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward P.O./Inventory .
The System Preferences: P.O./Inventory page displays.

 -
 Edit the settings as desired. Each setting is described in the headings below.

 -
 Click Save .
The system preference configuration is updated.

 General

 In this section, set your default values for purchase orders (POs) and determine automatic actions when completing POs and inventory transactions.

 Option
 Description

 Action when using an item would cause negative inventory

 If a user performs an action that results in the an inventory item's on-hand count dropping below zero (such as adding the item to a PO), Rent Manager displays a pop-up informing the user this will result in negative inventory. Choose what Rent Manager does when this occurs.

 Warn

 The user receives only a pop-up warning, but is allowed to dismiss the warning and proceed.

 Prevent

 The user receives the pop-up warning and is not allowed to proceed until the quantity is changed to prevent negative inventory.

 Allow changing PO#

 Check to allow PO numbers to be changed either when creating new purchase orders or editing existing purchase orders. By default, PO numbers are numbered sequentially. With this option enabled, users must also have the privilege below in order to change a PO number.

 Related Privileges

 Group
 Privilege
 Column

 POs/Estimates
 Change PO numbers
 Enabled

 For more information, refer to Control User Access .

 Allow to create a linked Bill without an approved P.O.

 Check to allow the user to create a linked bill even if the PO has not yet been approved. For more information, refer to Add a Bill or Invoice to a Purchase Order .

 Default billing address

 Enter the full address to be used as the default PO Billing Address (address to which to send bills for purchased items).

 Default PO workflow for inventory items

 Select the workflow to automatically assign to POs that include inventory items with the PO Workflow  set to Use System Preference Default . This field can be left blank to manually assign workflows at a later time. For more information, refer to Purchase Order Workflows (Page) .

 Default shipping address

 Enter the full address to be used as the default PO Shipping Address (address to which to ship purchased items).

 Lock purchase order dates

 Check to prevent the alteration of the Request Date and Issue Date on the PO's details page at any time, even during creation. By default, both fields populate the date of the PO's creation in Rent Manager .

 Purchase order prefix

 Enter the alphanumeric characters that precede the PO number on a purchase order. For example, PO # .

 Show Property and Unit

 In this section, you can select where the property and unit information displays in the System Purchase Order custom form that can be printed from the PO's details page. These settings apply only to the system default form and do not apply to any user-created custom forms.

 Option
 Description

 For each line item on the PO printout

 Check to display the property and unit for every line item on the PO printout.

 In the header of the PO printout

 Check to display the name of the property and unit only in the header of the PO printout.

 Tracking

 In this section, you can select how to track the finances, such as cost of goods sold (COGS), of inventory items.

 To allow the user to transfer the assignment of inventory items from one property to another, check the Track inventory by property option. If left unchecked, the property remains unassigned when you perform a transfer.

 To allow Rent Manager to track the cost of selling inventory items to tenants and/or owners, check the Track Cost of Goods Sold (COGS) option. Then configure the following options:

 Option
 Description

 Default asset account

 Select the asset general ledger (GL) account that is used to show the value of inventory items on hand.

 More Information

 The default asset account should be an Other Current Asset type account. To track the inventory value of each item individually, it is recommended that you create a separate asset account for each item as subaccounts of this default account.

 Default COGS account

 Select the expense account that is used to track the cost of goods sold.

 Inventory valuation method

 Select the method that is used to determine how the cost for sold goods is calculated:

 Average Cost

 Calculates COGS using the average cost of all of the items on hand and values them at that mean price. For example, over the course of several months, you made multiple light bulb purchases that totaled to 35 light bulbs for a combined cost of $100 and then sold 20 of them to tenants. Rent Manager calculates COGS using the average cost of the light bulbs ($2.86) for all 20 of the light bulbs sold, bringing your total COGS expense to $57.20.

 Average cost of all light bulbs: $100 / 35 = $2.86

 Total COGS for 20 light bulbs sold: 20 * $2.86 = $57.20

 FIFO

 First In, First Out (FIFO) calculates COGS by assuming the oldest inventory is sold first. For example, you bought 10 light bulbs in January for $3/each and 15 more in March for $3.50/each and then in April sold 20 to your tenants. Rent Manager calculates your COGS using the cost of the first 10 light bulbs you bought in January ($3) for the first 10 you sold, and then uses the cost of the next oldest inventory you bought in March ($3.50) for the next 10 you sold, bringing your total COGS expense to $65.00.

 Cost of first 10 light bulbs: 10 * $3.00 = $30.00

 Cost of next 10 light bulbs: 10 * $3.50 = $35.00

 Total COGS for 20 light bulbs: $30 + $35 = $65.00

 LIFO

 Last In, First Out (LIFO) calculates COGS by assuming the newest inventory is sold first. For example, you bought 15 light bulbs in January for $3/each and got 10 more on sale in March for $2/each and then in April sold 20 to your tenants. Rent Manager calculates your COGS using the cost of the last 10 light bulbs you bought in March ($2) for the first 10 you sold, and then uses the cost of the next newest inventory you bought in January ($3) for the next 10 you sold, bringing your total COGS expense to $50.00.

 Cost of last 10 light bulbs: 10 * $2.00 = $20.00

 Cost of next 10 light bulbs: 10 * $3.00 = $30.00

 Total COGS for 20 light bulbs sold: $20+ $30 = $50.00

 Property for COGS journal

 Select the property that is linked to the journal entry created for the following COGS bill or invoice links:

 More Information

 Only properties to which you have access display. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Owner bill/invoice

 When a bill or invoice involving inventory items with COGS enabled is linked to an owner, choose the property that is used in the corresponding journal entry.

 Tenant invoice

 When an invoice involving inventory items with COGS enabled is linked to a tenant, choose the property that is used in the corresponding journal entry.
