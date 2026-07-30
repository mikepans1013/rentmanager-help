# Modify Recurring Charges

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Recurring-Charges-Modify.htm

On the Modify Recurring Charges page, you can update the dollar amounts of your recurring charges in a batch. This tool can be used to make corrections to a batch of recurring charges or to quickly enter escalations. Recurring charges can be modified by entering an amount or flat rate, creating a calculation, or using consumer price index (CPI) adjustments.

 Related Privileges

 Group
 Privilege
 Column

 Recurring Charges/Market Rent
 Batch modify recurring charges
 Enabled

 For more information, refer to Control User Access .

 Step 1: Establish Filters

 To modify recurring charges in a batch, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Recurring Charges arrow_forward Modify Recurring Charges .
The Modify Recurring Charges page displays.

 -
 In the Filters section, select from the following criteria to determine which recurring charges display on the page:

 Field
 Description

 Properties

 The properties where recurring charges are being changed.

 Charge Type

 The charge type of the recurring charges to display. A charge type must be selected.

 More Information

 Do not select a common area maintenance (CAM) charge type in this field. Commercial recoverable expenses (CRE) recurring charges are the result of calculations performed when the CAM charges are posted and, therefore, cannot be modified in this manner.

 Unit Type

 A unit type to display recurring charges for units that match that type.

 User Defined Fields

 Recurring charges can be filtered by tenant-, unit-, or property-type user defined fields (UDFs). Select a UDF from the drop-down list and enter a value in the second field to display all associated recurring charges. For example, applying a property-level UDF displays all unit, property, and tenant active recurring charges that match the UDF value and the Charge Type selected.

 Charges to include

 The entity type(s) to display recurring charges set at the selected level(s).

 Property

 Recurring charges that are set at the property level and inherited by tenants.

 Tenant

 Recurring charges that are set at the individual tenant level.

 Unit

 Recurring charges that are set at the unit level and inherited by tenants.

 Unit Type

 Recurring charges that are set at the unit-type level and inherited by tenants.

 Current Amount

 A recurring charge amount to filter charges with an amount that meets the criteria.

 >=

 All recurring charges that are greater than or equal to the number entered display.

 <=

 All recurring charges that are less than or equal to the number entered display.

 =

 All recurring charges that are equal to the number entered display.

 Lease Date

 A date range to display recurring charges for tenants who have leases beginning or ending during that time period.

 Month

 Recurring charges for tenants who have leases beginning during the selected month display. Or select Lease End to display recurring charges for tenants who have leases ending during the selected month.

 -
 To add a history/note item regarding the recurring charge modification to each tenant's details page, check Add changes to history .

 - Click Apply .
All recurring charges that match the filter criteria display in the list.

 Step 2: Update the Amount of the Charge

 Once the recurring charges you wish to update are displayed on the page, you have multiple options to chose from to modify the amount of the charge. Choose one of the following methods to modify the charge:

 Method
 Description

 Use CPI

 The New Amount is calculated using the data from your consumer price index (CPI) page and the recurring charge on the tenant's account. The CPI Value for the Year and Month that matches the Begin using new charges on field is divided by the CPI Value for the Year and Month that matches the recurring charge's From Date field to get a new value. The new value is then multiplied by the Current Amount to get the New Amount . For more information, refer to Consumer Price Index (CPI) (Page) .

 For example, if the Begin using new charges on is 03/01/2025, the first Value comes from the CPI listed for the Year 2025 and the Month March. If the From Date on the recurring charge is 06/01/2022, the second Value comes from the CPI listed for the Year 2022 and the Month June. The first Value is divided by the second Value and then multiplied by the Current Amount to get the New Amount .

 Enter Calculation

 User either a flat rate or one of the following calculations for the new amount. The system variable C always represents the Current Amount of the recurring charge.

 Flat Rate

 To change all selected recurring charges to a new flat rate, enter the dollar amount of the new charge.

 For example, to update all selected recurring charges to a New Amount of $650, enter 650 .

 Add to Current Amount

 To add an amount to the selected recurring charges, enter a plus ( + ) followed by the dollar amount of the increase.

 For example, to add $150 to the Current Amount of all selected recurring charges, enter C+150 . Each recurring charge now displays a new amount that is $150 more than its current amount.

 Multiply Current Amount

 To multiply an amount by a number, enter an asterisk (*) followed by the number to multiply by. This is commonly used to calculate percentage increases.

 For example, to increase the Current Amount of all selected recurring charges by 20 percent, enter C*1.20 . Each recurring charge now displays a new amount that is 20 percent more than its current amount.

 Based on your selection, in the list of recurring charges, the New Amount column immediately previews the new calculated recurring charge amount.

 Step 3: Update the Recurring Charges

 To select the charges to update and apply the changes, do the following:

 -
 In the Begin using new charges on field, enter the date on which the new recurring charges begin. To begin the new charges as of today, uncheck the box next to this field.

 -
 In the list of recurring charges, review the information to ensure it meets your needs. The following columns are available:

 Column
 Description

 Tenant

 The name of the tenant associated with the lease.

 Property

 The property where the tenant rents.

 Unit

 The unit the tenant rents.

 Account

 The tenant's system-generated account number.

 Current Comment

 The comment entered on the most recent posting of the recurring charge.

 New Comment

 A new comment to replace the Current Comment . This column defaults to the Current Comment but can be edited as needed.

 Lease Start

 The start date of the tenant's current lease.

 Lease End

 The end date of the tenant's current lease.

 Current Amount

 The current dollar amount that the tenant pays for the recurring charge.

 New Amount

 The new dollar amount that the recurring charge is updated to. This amount defaults to the Current Amount and can be edited as needed.

 -
 Click Modify .

 -
 Click OK on the confirmation pop-up.
The old recurring charge is updated with a To Date one day before the specified date and then creates new recurring charges that begin on the specified date. The From Date for these recurring charges is then updated to match the Begin using new charges on date, if that option is checked. Otherwise, the old recurring charge is updated with a To Date one day before today and then creates new recurring charges with a From Date of today.
