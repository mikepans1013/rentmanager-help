# Work Order Count Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Work-Order-Count.htm

This function displays the number of line items on the work orders that have inventory items specified for the selected issue.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Service Manager

 [ServiceManager().WorkOrderCount()]

 Displays information found on the Work Orders Table tile on the issue's details page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [WorkOrderCount( "ServiceIssueID" , "PropertyShortNames" , "UnitNames" , "ItemNames" , "VendorNames" )]

 ServiceIssueID

 Select the service issue with this Issue ID. If this parameter is not specified, it defaults to the oldest/first issue on the linked account.

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [WorkOrderCount("23")]

 Displays the number of line items in the work order for service issue number 23.

 PropertyShortNames

 Enter the short name of the property specified on the work order. Multiple property names may be separated by commas.

 [WorkOrderCount("","RIVER")]

 Displays the number of line items in the work order that specify RIVER in the Property column.

 UnitNames

 Enter the name of the unit specified on the work order. Multiple unit names may be separated by commas.

 [WorkOrderCount("","","17")]

 Displays the number of line items in the work order that specify 17 in the Unit column.

 ItemNames

 Enter the inventory item specified on the work order. Multiple items may be separated by commas.

 [WorkOrderCount("","","","Labor")]

 Displays the number of line items in the work order that specify the inventory item Labor in the Item column.

 VendorNames

 Enter the name of the vendor specified on the work order. Multiple vendor names may be separated by commas.

 [WorkOrderCount("","","","","Home Depot,Lowe's")]

 Displays the number of line items in the work order that specify Home Depot and Lowe's in the Vendor column.

 Script Examples

 The following scripts show various ways the function can be used:

 [ServiceManager().WorkOrderCount()]

 Displays the number of line items with inventory items in the work order for the selected service issue.

 [ServiceManager(57).WorkOrderCount()]

 Displays the number of line items with inventory items in the work order for service issue number 57.

 [Unit().ServiceManager(1).WorkOrderCount()]

 Displays the number of line items with inventory items in the work order for the second oldest service issue, as sorted by opened date, at the selected unit.

 [Tenant().ServiceManager().WorkOrderCount("","","","","Home Depot")]

 Displays the number of line items with Home Depot as the vendor in the oldest service issue for the selected tenant.

 [$i = 0; while($i<WorkOrderCount("223"), echo(WorkOrder("223",$i) & linefeed); $i=$i+1]

 Displays all line items with inventory items in the work order for service issue number 223 in their default format.
