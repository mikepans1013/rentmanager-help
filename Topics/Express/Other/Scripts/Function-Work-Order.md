# Work Order Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Work-Order.htm

This function displays information from the line items that have an inventory item on the work order specified for the selected issue.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Service Manager

 [ServiceManager().WorkOrder()]

 Displays information found on the Work Orders Table tile of the issue.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [WorkOrder( "ServiceIssueID" , "WorkOrderIndex" , "PropertyShortNames" , "UnitNames" , "ItemNames" , "VendorNames" , "Format" )]

 ServiceIssueID

 Select the service issue with this Issue ID . If this parameter is not specified, it defaults to the oldest/first issue on the linked account.

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [WorkOrder("223")]

 Displays information from the line items in the work order for service issue number 223.

 WorkOrderIndex

 Enter the index value of the work order line item you want to display. The first line item in the work order has an index value of 0 , the second line item has an index value of 1 , and so on.

 [WorkOrder("223","1")]

 Displays information from the first additional line item on the work order for service issue number 223.

 PropertyShortNames

 Enter the short name of the property specified on the work order. Multiple property names may be separated by commas.

 [WorkOrderCount("","RIVER")]

 Displays the number of line items in the work order that specify RIVER in the Property column.

 UnitNames

 Enter the name of the unit specified on the work order line item .

 [WorkOrder("223","","","12A")]

 Displays information from the first work order line item to specify the unit number 12A in the Unit column for service issue number 223.

 ItemNames

 Enter the inventory item specified on the work order line item .

 [WorkOrder("223","","","","Parts")]

 Displays information from the first work order line item to specify the inventory item Parts in the Item column for service issue number 223.

 VendorNames

 Enter the name of the vendor specified on the work order line item .

 [WorkOrder("223","","","","","Home Depot")]

 Displays information from the first work order line item to specify Home Depot in the Vendor column for service issue number 223.

 Format

 List details of each work order using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays the name of the Property, Unit, Item, Description, and Quantity variables separated by tabs:

 "\t$_Property\t$_Unit\t$_Item\t$_Description\t$_Qty\n"

 Variables

 The following variables may be used in the Format parameter.

 Variable
 Description

 $_Property

 Displays the short name of the Property assigned to the work order line item.

 $_Unit

 Displays the name of the Unit assigned to the work order line item.

 $_Item

 Displays the inventory Item assigned to the work order line item.

 $_Description

 Displays the Description assigned to the work order line item.

 $_Vendor

 Displays the name of the Vendor assigned to the work order line item.

 $_Qty

 Displays the quantity assigned to the work order line item.

 $_CostPrice

 Displays the Cost assigned to the work order line item.

 $_TotalCostPrice

 Displays the total cost amount of all inventory items associated with the work order line item.

 Total Cost Price = Cost x Quantity

 $_SalePrice

 Displays the Sale Price per inventory item on the work order line item.

 $_TotalSalePrice

 Displays the Total sale amount of all inventory items associated with the work order line item.

 Total Sale Price = Sales Price x Quantity

 $_HasInvoiceLink

 Displays True if the Invoice Tenant option is checked on the work order line item. Displays False if it is not checked.

 $_HasVendorBill

 Displays True if the Vendor Bill option is checked on the work order line item. Displays False if it is not checked.

 $_HasOwnerBill

 Displays True if the Owner Bill option is checked on the work order line item. Displays False if it is not checked.

 $_HasPOLink

 Displays True if the PO option is checked on the work order line item. Displays False if it is not checked.

 WorkOrder("","","","","","","$_Property\t$_Unit\t$_Vendor\t$_TotalCostPrice\n")

 Displays a new line with a customized list of the property, unit, vendor, and total cost, separated by tabs, for the selected work order line item.

 Script Examples

 The following scripts show various ways the function can be used:

 [ServiceManager().WorkOrder()]

 Displays information from the first line item in the work order for the selected service issue.

 [ServiceManager(57).WorkOrder()]

 Displays information from the first line item in the work order for service issue number 57.

 [Unit().ServiceManager(1).WorkOrder()]

 Displays information from the first line item in the work order for the selected unit's second-oldest service issue.

 [ServiceManager().WorkOrder("223","1","","","","","$_Vendor\n")]

 Displays the name of the vendor on the first additional work order line item on service issue number 223.

 [$i = 0; while($i<WorkOrderCount("223"), echo(WorkOrder("223",$i) & linefeed); $i=$i+1]

 Displays all line items with inventory items in the work order for service issue number 223 in their default format.
