# Tenant Consumption History (Pop-Up)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/MU-Tenant-Consumption-History.htm

Rent Manager Metered Utilities lets you bill tenants for usage of utilities such as gas, electric, water, and sewer. Every month or billing period, individual meter readings are entered and utility consumption charges are calculated and billed to the appropriate tenant. The consumption history allows you to view the rate of consumption for a unit or tenant over time.

 The top of the Tenant Consumption History pop-up displays the tenant's name and account number. Additionally, the consumption and amount totals and averages display at the bottom of the pop-up.

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View

 Utilities
 Metered Utilities

 Enabled

 For more information, refer to Control User Access .

 To view a tenant's consumption information, go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select a tenant from the list. Then, on the action bar to the right, click arrow_forward MU History .

 More Information

 If a tenant's meter was swapped during a billing period, that consumption history entry is divided into two line items ( New Meter and Old Meter ) with meter-specific details in each corresponding column. If the unit is currently in the swap meter process, Pending displays. For more information, refer to Swap Meters .

 Filter Options

 The following filter options are available on the pop-up:

 Option
 Description

 Post Date

 The From and/or To dates to filter unit consumption posted during the selected period.

 Search

 Enter information into this field to narrow the list to match your search criteria.

 Unit

 If the tenant has multiple leases, optionally select a different unit from the drop-down list to view that unit's consumption.

 Utility

 The type of utility (e.g., Water , Sewer , Electric ) to view. This field defaults to <All Utilities> .

 Column Descriptions

 The following columns are available on this pop-up. Columns can be added or removed from this pop-up by clicking .

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

 Comments

 An additional note about the utility charge as entered in the Utility Charge Transaction Memo field when posting utilities.

 Consumption

 The utility usage in the unit of measurement of the meter. The result is calculated using the following formula:

 Consumption = Current Reading – Previous Reading

 More Information

 If a tenant's meter was swapped during a billing period, this column displays the sum of the New Meter and Old Meter consumption.

 Current Reading

 The meter reading amount that was entered for the reading represented by this consumption history item.

 If the reading was estimated, displays next to the current reading amount. If the reading was part of a rollover, displays next to the current reading amount. If the reading was off-cycle, displays next to the current reading amount.

 Meter Type

 The name of the meter type that is used to determine the utility charge amount based upon consumption. For more information, refer to Meter Types (Page) .

 Post Date

 The date that the meter reading was posted in Rent Manager .

 Previous Reading

 The amount from the last meter reading that was taken before this consumption history item was added. If no previous reading exists, the value defaults to 0 .

 Previous Reading Date

 The date on which the last meter reading took place

 Property

 The property associated with the meter readings.

 Unit

 The unit associated with the meter readings.

 Utility

 The type of utility (e.g., Water , Sewer , Electric ).

 Available Column

 Description

 Consumption Range

 The name of the consumption group based on a defined consumption range established on the High/Low Settings pop-ups' Consumption Groups tab. Once utilities are posted, this column cannot be updated, even if ranges are modified.

 Current Reading Date

 The date the Current Reading was recorded.

 Exception Reason

 The exception reasons (e.g., Water Leak , Recent Move In/Out , Faulty Appliance ) established on the High/Low Settings pop-ups' Exception Reasons tab. You can click the reason to open the Meter Exception Details pop-up. Once utilities are posted, this column cannot be updated, even if reasons are modified.

 Images

 A indicates an image is available for the associated meter reading. Click the icon to view the image.

 Meter UoM

 The unit of measurement (e.g., Gallons , Cubic Feet (CF) ) used on the meter for tracking utility usage.

 Note

 An additional note about the utility charge as entered in the Utility Charge Transaction Memo field when posting utilities.

 Other, Other 2, etc.

 Optional user-defined fields that can be used as with Metered Utilities Plus scripting. For more information, refer to Meter Readings Setup (Page) .

 Row Actions

 The following row actions are available in this pop-up.

 Action
 Descriptions

 Post

 Related Privileges

 Group
 Privilege
 Column

 Utilities
 Post utility information
 Enabled

 For more information, refer to Control User Access .

 Apply consumption-based utility fees to the tenant's account. For more information, refer to Post Utilities .

 Rollback

 Related Privileges

 Group
 Privilege
 Column

 Utilities
 Rollback utility readings
 Enabled

 For more information, refer to Control User Access .

 Warning

 Rolling back a posting does not automatically undo any payment or deposit that was made related to that posting. Any payment that was made toward that posting automatically becomes an unapplied credit on the tenant's Transactions pop-up because the charges it was allocated to are removed.

 Undo the tenant’s meter reading posting for an individual utility. Only the tenant’s most recent posting for the individual utility may be rolled back. If a utility reading (e.g., Sewer ) is tied to a source utility (e.g., Water ), the record may be rolled back by only rolling back the source utility (in this example, Water ).

 More Information

 This roll backs the meter reading posting of a single utility for a single tenant. To rollback meter readings for multiple properties, refer to Roll Back a Posting .
