# Meter Readings (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/MU-Meter-Readings.htm

With Metered Utilities (MU) , you can bill tenants for usage of utilities such as gas, electric, water, and sewer. Every month or billing period, individual meter readings are entered, and utility consumption charges are calculated and billed to the appropriate tenant. On the Meter Readings page, you can enter meter readings of a selected utility for the units of a selected property, then post those readings.

 Warning

 Before you can add meter readings, you must first set up the meters for each applicable unit.

 Related Privileges

 Group
 Privilege
 Column

 Utilities
 Metered utilities
 Enabled

 For more information, refer to Control User Access .

 To view meter readings, go to arrow_forward Services arrow_forward Metered Utilities arrow_forward Meter Readings .

 The Review Meter Exceptions button at the bottom right of the page is accessible only if, on the High/Low Settings pop-up's Approval Workflows tab, Enable Approval Workflow is unchecked or you are assigned as a meter exceptions reviewer or approver. Additionally, based on the settings you establish on the High/Low Settings pop-up, you may receive notifications and warnings (e.g., meter exceptions require review before posting) on this page. For more information, refer to Manage Metered Utilities High/Low Settings .

 Filter Options

 The following filter options are available at the top of the page:

 Filter
 Description

 Billing Period

 The billing period you wish to post or review meter readings for. The billing period available in the drop-down list are limited based on the Utility selected.

 More Information

 In order to Review Meter Exceptions , you must select a single Billing Period . For more information, refer to Meter Exceptions (Page) .

 Property

 The property you wish to post or review meter readings for.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Show consumption exceptions only

 Limits the meter readings to display only meters with consumption ranges defined as exceptions. For more information, refer to Manage Metered Utilities High/Low Settings .

 Show units with no readings only

 Limits the meter readings to display only meters with no utility consumption history.

 Utility

 The utility you wish to post or review meter readings for. The utilities available in the drop-down list are limited based on the Property selected.

 Edit Readings

 This tile displays fields for editing or updating the meter reading for the selected unit.

 More Information

 If a meter reading is flagged as an Estimate Exception and is included in a batch awaiting approval, the reading follows the Reading Lock Options specified in the approval workflow's settings. For more information, refer to Manage Metered Utilities High/Low Settings .

 Option
 Description

 Adjusted Consumption

 The utility usage adjusted to the unit of measurement used for billing. Rent Manager applies the conversion formula to the consumption value to calculate the adjusted consumption. If the meter and billing use the same unit of measurement, no conversion formula is applied, and the consumption and adjusted consumption are the same value.

 If the Current Reading has an Estimate reading type, this field displays as Est. Adjusted Consumption .

 Billing Period

 The month and year that the meter reading is billed for. If you took the current reading between the first and fifteenth of the month, the current month displays. If you took the current reading on the sixteenth of the month or later, the following month displays.

 More Information

 For future meter readings, this field automatically populates with the month after the most recent reading.

 Charge

 The dollar amount that was charged, based on the previous reading. If the Current Reading has an Estimate reading type, this option is Est. Charge .

 Consumption

 The utility usage in the unit of measurement of the meter. The result is calculated using the following formula:

 Consumption = Current Reading – Previous Reading

 If the Current Reading has an Estimate reading type, this field displays as Est. Adjusted Consumption .

 Consumption History

 Previously-recorded meter readings for tenants at the selected unit.

 Current Reading

 The utility usage as of the most recent meter reading. If the meter has a pending swap, this field is disabled.

 More Information

 If meter estimates are enabled, clicking Estimate allows you to Choose an Estimate Method . If reading estimates are not posted successfully due to insufficient funds, Estimate Needed displays and you must manually enter the Est. Consumption for those readings. For more information, refer to Estimate a Metered Utility Reading .

 Default Reading Date

 The date to be used as the default for current readings. After entering a Current Reading for each unit, the Current Reading Date field automatically populates with this date.

 Images

 To attach any images associated with the meter reading (such as a photo of the meter at the time of the reading), click Upload Image or Paste .

 Meter

 The number used to identify the unit's utility meter, such as a serial number.

 Note

 An optional comment providing further information about the reading.

 Occupied By

 The current tenant of the unit.

 Prev. Reading

 The utility usage as of the last meter reading.

 Prev Reading Date

 The date on which the last meter reading took place

 Reading Date

 The date on which the most recent meter reading took place. If the meter has a pending swap, this field is disabled.

 Reading Type

 The category to describe the reading (i.e., Standard , Swap , Off-Cycle , Rollover , Estimated Swap ).

 Route

 The number that represents the order in which this meter is read. The first meter read has a value of 1 , the second a value of 2 , and so on. If no route is selected, 0 displays.

 Service Issue

 If a service issue is associated with a meter swap, a link to the issue displays. For more information, refer to Add an Issue Link .

 Sort By

 The sort method that determines the order in which units display on the Meter Readings tile.

 Meter Number

 The Meter Number column is added and units display in alphanumeric order based on their assigned meter number.

 Route

 The Route column is added and units display in numeric order based on their assigned route number.

 Unit

 Units display in alphanumeric order by unit name.

 Unit

 The unit associated with the meter readings.

 Meter Readings

 This tile displays open and complete meter readings for units at a property.

 More Information

 If a tenant's meter was swapped during a billing period, that consumption history entry is divided into two line items ( New Meter and Old Meter ) with meter-specific details in each corresponding column. If the unit is currently in the swap meter process, Pending displays. To view both line items, click . For more information, refer to Swap Meters .

 Column Descriptions

 The following columns are available in this tile. By default, some columns display only if added via .

 Default Column
 Description

 Adj Consumption

 If applicable, the utility usage after being adjusted to the unit of measurement used for billing this utility's meter type.

 This amount differs from the amount in the Consumption column only if a Conversion Formula is applied to the meter type's charge options.

 Charge

 The total charge amount for the utility consumed at the unit for this meter reading period, based on the charge settings established for the selected meter type.

 Consumption

 The amount of the utility consumed since the previous reading based on the current reading. The adjusted consumption is determined using the following formula:

 Adjusted Consumption = Current Reading – Previous Reading

 More Information

 If a tenant's meter was swapped during a billing period, this column displays the sum of the New Meter and Old Meter consumption.

 Consumption Range

 The name of the consumption group based on a defined consumption range established on the High/Low Settings pop-ups' Consumption Groups tab. If the meter reading has a pending meter exception awaiting approval, displays. If the meter reading has an approved meter exception, displays. For more information, refer to Manage Metered Utilities High/Low Settings .

 Curr Reading

 The total amount of the selected utility consumed at the unit at the time of the current posting. This amount is in the unit of measurement for the utility's meter type. If the reading was estimated, displays next to the current reading amount. If the reading was part of a rollover, displays next to the current reading amount. If the reading was off-cycle, displays next to the current reading amount.

 Curr Read Date

 The date on which the current meter reading was recorded.

 Occupied By

 The tenant occupying the unit. If the unit is currently unoccupied, <Vacant> displays.

 Prev Reading

 The total amount of the selected utility consumed at the unit when meter readings were last posted. This amount is in the unit of measurement for the utility's meter type.

 Prev Read Date

 The date on which the last meter reading was recorded.

 Unit

 The name of the unit.

 Available Column

 Description

 Billing Period

 The month and year that the meter reading is billed for. If you took the current reading between the first and fifteenth of the month, the current month displays. If you took the current reading on the sixteenth of the month or later, the following month displays.

 Billing UoM

 The unit of measurement (e.g., Gallons , Cubic Feet (CF) ) used for billing utility usage.

 Exception Reason

 The exception reasons (e.g., Water Leak , Recent Move In/Out , Faulty Appliance ) established on the High/Low Settings pop-ups' Exception Reasons tab.

 Meter Number

 The unique meter number for each unit. This may be a serial number or other identification number.

 Meter UoM

 The unit of measurement (e.g., Gallons , Cubic Feet (CF) ) used on the meter for tracking utility usage.

 Route

 The number that represents the order in which this meter is read. The first meter read has a value of 1 , the second a value of 2 , and so on. If no route is selected, 0 displays.

 Site Classification

 The name of the unit's site classification as displayed on the unit's details page. For more information, refer to Site Classification .

 Row Actions

 The following row actions are available in this tile.

 Action
 Description

 Cancel Off-Cycle Reading

 Cancel an off-cycle reading with a Pending status.

 Swap Meter/Cancel Swap

 Record the swap meter process for the unit in Rent Manager (e.g., to replace faulty equipment, upgrade to smart meters). If you wish to cancel a Pending meter swap for a unit, click arrow_forward Cancel Swap .
