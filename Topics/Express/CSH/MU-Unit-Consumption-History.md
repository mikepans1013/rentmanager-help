# View Consumption History (Pop-Up)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/MU-Unit-Consumption-History.htm

Rent Manager Metered Utilities lets you bill tenants for usage of utilities such as gas, electric, water, and sewer. Every month or billing period, individual meter readings are entered and utility consumption charges are calculated and billed to the appropriate tenant. The consumption history allows you to view the rate of consumption for a unit or tenant over time.

 The top of the View Consumption History pop-up displays the property, unit, and utility whose history you are viewing. These values update after filtering options are selected. Additionally, the consumption and amount totals and averages display at the bottom of the pop-up.

 Related Privileges

 Group
 Privilege
 Column

 Utilities
 Metered utilities
 Enabled

 Meter types
 View

 For more information, refer to Control User Access .

 To view a unit's consumption history, go to arrow_forward Services arrow_forward Metered Utilities arrow_forward Meter Readings Setup and click arrow_forward View Consumption History on the unit whose history you wish to view.

 More Information

 If a tenant's meter was swapped during a billing period, that consumption history entry is divided into two line items ( New Meter and Old Meter ) with meter-specific details in each corresponding column. For more information, refer to Swap Meters .

 Filter Options

 The following filter options are available on the pop-up:

 Option
 Description

 Post Date

 The From and/or To dates to filter unit consumption posted during the selected period.

 Readings For

 The tenant whose unit consumption displays. If there is history for more than one tenant, this field defaults to <All Tenants> .

 Search

 Enter information into this field to narrow the list to match your search criteria.

 Column Descriptions

 The following columns display on this pop-up. By default, some columns display only if added via .

 Default Column
 Description

 Adjusted Consumption

 The utility usage adjusted to the unit of measurement used for billing. Rent Manager applies the utility's Conversion Formula to the Consumption value to calculate the Adjusted Consumption . If the meter and billing use the same unit of measurement, no conversion formula is applied, and the Consumption and Adjusted Consumption are the same value.

 Amount

 The dollar amount of the utility fee charged to the occupant.

 Billing Period

 The month and year that the meter reading is billed for. If you took the current reading between the first and fifteenth of the month, the current month displays. If you took the current reading on the sixteenth of the month or later, the following month displays. If you need to make a correction, click .

 More Information

 For future meter readings, this field automatically populates with the month after the most recent reading.

 Consumption

 The utility usage in the unit of measurement of the meter. The result is calculated using the following formula:

 Consumption = Current Reading – Previous Reading

 Current Reading

 The meter reading amount that was entered for the reading represented by this consumption history item.

 If the reading was estimated, displays next to the current reading amount. If the reading was part of a rollover, displays next to the current reading amount.

 End Date

 Includes meter readings in the list with a Post Date that falls on or before this date

 Meter Type

 The name of the meter type that is used to determine the utility charge amount based upon consumption. For more information, refer to Meter Types (Page) .

 Post Date

 The date that the meter reading was posted in Rent Manager .

 Previous Reading

 The amount from the last meter reading that was taken before this consumption history item was added. If no previous reading exists, the value defaults to 0 .

 Start Date

 Includes meter readings in the list with a Post Date that falls on or after this date.

 Tenant

 The name of the tenant residing at the unit at the time of the utility charge.

 Available Column

 Description

 Consumption Range

 The name of the consumption group based on a defined consumption range established on the High/Low Settings pop-ups' Consumption Groups tab. Once utilities are posted, this column cannot be updated, even if ranges are modified.

 Exception Reason

 The exception reasons (e.g., Water Leak , Recent Move In/Out , Faulty Appliance ) established on the High/Low Settings pop-ups' Exception Reasons tab. You can click the reason to open the Meter Exception Details pop-up. Once utilities are posted, this column cannot be updated, even if reasons are modified.

 Images

 A indicates an image is available for the associated meter reading. Click the icon to view the image.

 Note

 An additional note about the utility charge as entered in the Utility Charge Transaction Memo field when posting utilities.
