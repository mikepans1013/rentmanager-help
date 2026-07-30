# Test Utility Charge Calculation

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/MU-Test-Charge-Calculation.htm

After you set up utility meter types, you can use the Test Calculation action to view details of a sample utility charge calculation to ensure that costs from utility meter readings are accurately charged to tenants.

 Related Privileges

 Group
 Privilege
 Column

 Utilities
 Metered utilities
 Enabled

 Meter types
 View, Edit

 For more information, refer to Control User Access .

 To test a metered utility calculation, do the following:

 -
 Go to arrow_forward Services arrow_forward Metered Utilities arrow_forward Meter Types and select a meter type from the list.
The Meter Type Details page displays.

 -
 Click Test Calculation .

 Charge Calculation Results

 On the Utility Charge Calculation Detail page, review the information in the Options , Meter Type Information , Rate Variables , and Calculations sections. The total charge based on the listed criteria displays next to Calculated Charge .

 Options

 In this section, review the following information. You can edit the fields in this section to rerun the calculation and view an updated Calculated Charge .

 Field
 Description

 Current Reading

 The most recent reading from the meter.

 Previous Reading

 The meter reading prior to the current reading from the meter. If a previous reading does not exist, the value defaults to 0.

 Consumption

 The total utility usage. Rent Manager uses the following formula to calculate consumption:

 Consumption = Current Reading - Previous Reading

 Current Reading Date

 The date the current reading was taken.

 Previous Reading Date

 The date the previous reading was taken.

 Days in Period

 The number of days between the previous and current readings.

 Income Type

 The income type assigned to the meter. Standard meters use the baseline utility charge calculation, and Low income meters allow for the reduced rate based on the tenant.

 ClassCode

 A per-tenant, single capital letter for the class, as entered on the Meter Readings Setup page. This is typically used for customers who receive medical discounts. For example, M for medical.

 Zone

 A comment defining the geographic area, such as the name of the city in which the unit is located, as entered on the Meter Readings Setup page.

 Meter Type Information

 This section displays information about the meter type and charge rates run in the test calculation. The information that displays in this section differs for standard and Metered Utilities Plus meter types.

 Standard Meters

 The following fields display for standard meter types.

 Field
 Description

 Conversion Formula

 The conversion formula used to convert meter readings to actual consumption. In formulas, C represents consumption.

 Adjusted Consumption

 The utility usage adjusted to the unit of measurement used for billing. Rent Manager applies the conversion formula to the consumption value to calculate the adjusted consumption. If the meter and billing use the same unit of measurement, no conversion formula is applied, and the consumption and adjusted consumption are the same value.

 Calculation Method

 How consumption charges are totaled. Standard calculates one charge based on the total consumption of a utility using a single tier. Graduated calculates one charge based on consumption used in multiple tiers as specified by the meter type.

 Calculation Level

 How Rent Manager applies rates when consumption levels span a range. Under means below or less than the level value. For example, a level of 500 using under would include 0-499.99. Equal means up to and including the level value. For example, a level of 500 using equal would include 0-500.

 Minimum Charge

 The minimum charge that is billed if the utility charge is zero or less than this amount. If Per Day is checked, this multiplies the minimum charge amount by the number of days in the meter billing period.

 Flat Charge

 An amount that does not change between billing cycles, such as service charges or deliver fees, and is added to the utility consumption charge.

 Per Day

 A indicates that fees are calculated on a per-day basis.

 MU-Plus Meters

 The following fields display for Metered Utilities Plus meter types.

 Field
 Description

 Base Rate

 The standard rate for billing the tenant for their consumption of the utility, using the following formula:

 Charge Amount = BR (Base Rate) * C (Consumption)

 Base Line

 The allotted amount the tenant can use for the specified utility.

 Excess Rate

 The value to be billed if the tenant uses more than the allotted amount established in Base Line .

 Minimum Charge

 The amount that is billed if the utility charge is zero or less than this amount.

 Per Day

 A indicates that the Minimum Charge amount is multiplied by the number of days in the meter billing period.

 Variables

 This section displays variables used to make calculations for the meter type run in the test calculation. The information that displays in this section differs for standard and Metered Utilities Plus meter types.

 Standard Meters

 The following columns display for standard meter types.

 Column
 Description

 Name

 The name defined for each variable. This name can be used as a reference in the Calculations tile.

 Formula

 If a calculation formula is entered on the Meter Type Details page in the Variables section's Value field, this displays the formula.

 Value

 The value represented by the corresponding variable.

 MU-Plus Meters

 The following columns display for Metered Utilities Plus meter types.

 Column
 Description

 Name

 The name defined for each variable. This name can be used as a reference in the Calculations section.

 Date

 The most recent active date for the variable.

 Standard

 The value of the variable for a Standard type tenant.

 Low Income

 The value of the variable for a Low Income type tenant.

 Description

 An optional column that explains what the variable tracks.

 Calculations

 This section displays the calculated charge for the selected meter type run in the test calculation. The information that displays in this section differs for standard and Metered Utilities Plus meter types.

 Standard Meters

 The following columns display for standard meter types.

 Column
 Description

 From

 The lowest value of consumption for the level.

 To

 The highest value of consumption for the level.

 Consumption

 The utility usage in the unit of measurement of the meter. Rent Manager uses the following formula to calculate consumption:

 Consumption = Current Reading - Previous Reading

 Calculation

 The consumption rate or formula (where C stand for consumption) that represent the amount to charge at this level.

 Value

 The value represented by the corresponding variable.

 Calculated Charge

 The total utility charge that a tenant receives under the conditions entered in the test calculation.

 MU-Plus Meters

 The following columns display for Metered Utilities Plus meter types.

 Column
 Description

 Variable

 The result of the Calculation field is stored in this variable name. Once a variable is declared, it can be used in subsequent rows. For example, if you create a variable called V1 and then a second variable called V2 , you can use V1 in the calculation for V2 . The V2 calculation then uses whatever value is generated by the V1 calculation.

 Calculation

 The calculation used to determine the value of the variable.

 Round

 Rounds the result of the calculation script to the specified decimal place.

For example, rounding to 0 rounds to the nearest whole number, and 2 rounds the value to the nearest hundredth.

 Round Method

 How Rent Manager rounds the calculation result.

 Description

 An explanation of the script in the Calculation field and its purpose in the overall formula.

 Value

 The value represented by the corresponding variable.

 Calculated Charge

 The total utility charge that a tenant receives under the conditions entered in the test calculation.
