# Inventory Valuation Summary (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Inventory-Valuation-Summary.htm

The Inventory Valuation Summary report displays a listing of the inventory items associated with your selected properties, providing information about the amount of each item on hand, the total amount paid to procure these items, the average amount paid for each item, and the total sale value of the items on hand. This report can be used in conjunction with the cost of goods sold (COGS) tool to determine the value of your items versus what you paid for them.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Inventory Valuation Summary .

 For more information, refer to Control User Access .

 To view the Inventory Valuation Summary report, do the following:

 -
 Go to arrow_forward Accounting arrow_forward PO/Inventory arrow_forward Inventory Valuation Summary .
The Reports: Inventory Valuation Summary page displays.

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

 Include Inactive

 Check to display inventory items that have Active Item unchecked on the Inventory Item details page.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Item

 The Name of each inventory item as it is entered on the inventory item's details page.

 Quantity On Hand

 The quantity of the item on hand as of the report date.

 Total Cost

 The total amount paid to acquire the quantity on hand, calculated using the following formula:

 Asset Cost = Quantity On Hand x Average Cost

 More Information

 The Cost used in this calculation is the true amount paid for each item on hand through purchase orders or manual increases on the Inventory Transactions tile, and is not necessarily the Default Cost on the item's Charges tile.

 Average Cost Per Item

 The average amount paid to acquire one of the items, calculated using the following formula:

 Average Cost = Asset Cost / Quantity On Hand

 Total Sale Price

 The total resale value of the current quantity of the items, calculated using the following formula:

 Retail Value = (Default Cost + Markup) x Quantity On Hand

 Report Totals

 The Report Totals subreport provides the total amount paid and the total resale value for all inventory items displayed in the report.
