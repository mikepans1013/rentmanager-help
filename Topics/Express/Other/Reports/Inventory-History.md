# Inventory History (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Inventory-History.htm

The Inventory History report displays the transaction history of inventory items associated with selected properties that took place during a selected date range, including the cost at which you bought the item or the price you charge others for the item.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Inventory History .

 For more information, refer to Control User Access .

 To view the Inventory History report, do the following:

 -
 Go to arrow_forward Accounting arrow_forward PO/Inventory arrow_forward Inventory History .
The Reports: Inventory History page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Detail or Summary

 This option determines how much information is displayed in the report.

 Option
 Description

 Detail

 A line item for each transaction or quantity change for each inventory item.

 Summary

 The total amount of all transactions and quantity changes as a single row for each inventory item.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Item

 The name of the item as it is entered in the inventory item list.

 The column displays only if Summary is selected in the Detail or Summary section of the report options.

 Date

 The date that the transaction occurred.

 The column displays only if Detail is selected in the Detail or Summary section of the report options.

 Transaction Type

 The type of transaction that occurred including invoices, purchase orders, manual changes to the quantity, quantity transfers, and each work order generated through service issues that impacted the inventory item’s quantity.

 The column displays only if Detail is selected in the Detail or Summary section of the report options.

 Qty.

 The change, positive or negative, in the quantity of the inventory item.

 Cost

 The dollar amount (not including markup) that it cost you to buy the inventory item, which displays only when the amount in the Qty column is positive.

 If you selected the Summary report option, this column displays the average dollar amount (not including markup) that it cost you to buy the inventory item, which displays only if the item was purchased during the date range.

 Price

 The price (cost plus markup) of an individual inventory item, which only appears when the amount in the Qty column is negative.

 If you selected the Summary report option, this column displays the average dollar amount (not including markup) that it cost you to buy the inventory item, which displays only if the item was purchased during the date range.

 Total Cost

 The overall cost of the transaction, which is calculated by multiplying the Qty by the Cost .

 Total Price

 The overall price of the transaction, which is calculated by multiplying the Qty by the Price .
