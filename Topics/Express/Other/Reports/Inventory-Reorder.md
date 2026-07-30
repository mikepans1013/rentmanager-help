# Inventory Reorder (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Inventory-Reorder.htm

The Inventory Reorder report displays the inventory items associated with selected properties that have on-hand quantities which have fallen below the Reorder Qty threshold configured on the Inventory tile, and therefore need to be reordered.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Inventory Reorder .

 For more information, refer to Control User Access .

 To view the Inventory Reorder report, do the following:

 -
 Go to arrow_forward Accounting arrow_forward PO/Inventory arrow_forward Inventory Reorder .
The Reports: Inventory Reorder page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 This report is organized by Items Needed to be reordered, or Other Items that have enough inventory on hand. Information about the inventory items are organized into columns. The columns that display in the report are described below.

 Information about each item is organized into columns.

 Column
 Description

 Item

 The Name of each item as it is entered on the Inventory tile. The total amount of items listed in the report displays at the bottom of this column.

 Reorder Quantity

 The on hand quantity threshold below which the item needs to be reordered as entered in the Reorder Qty field on the Inventory tile.

 Quantity On Hand

 The quantity of the item on hand as of the report date as displayed in the Quantity field of the Inventory Item scoreboard.

 Order Amount

 The number of items that need to be ordered in order to reach the Reorder Quantity threshold, before taking into account the number of items On Order .

 More Information

 For items that display below Other Items , this number is less than or equal to zero.

 On Order

 The number of items that are on order through purchase orders by the As of Date . For more information, refer to Purchase Order Details (Page) .

 Quantity Needed

 The number of items that need to be ordered in order to reach the Reorder Quantity threshold, calculated using the following formula:

 Quantity Needed = Reorder Quantity - On Hand - On Order

 More Information

 For items that display below Other Items , this number is less than or equal to zero.
