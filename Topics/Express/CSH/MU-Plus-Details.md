# MU Plus Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/MU-Plus-Details.htm

Metered Utilities Plus (MU-Plus) meter types provide a customizable method for developing meter types that calculate tenant billing for utility consumption. Whereas Standard meter types perform basic, tier-based consumption calculations, MU Plus meter types perform blended rates, medical/income discounts, charge tenants different rates at the same property, rate zones, and almost any kind of complex billing calculations.

 Related Privileges

 Group
 Privilege
 Column

 Utilities
 Meter Types
 View, Edit

 For more information, refer to Control User Access .

 To view a Metered Utilities Plus meter type, go to   arrow_forward Services arrow_forward Metered Utilities arrow_forward Meter Types and select a meter with the MU Plus type from the list.

 Meter Type Information

 This section displays general information about the meter.

 Field
 Description

 Comment

 Any additional information about this meter type.

 Consumption Group

 The meter type's assigned consumption group, which sets ranges for your meter readings to track usage levels. It marks any readings falling within the low and high numbers set on a range which allows you to quickly identify reading errors and improve reporting processes. These ranges display on reports and in rmAppSuite Pro . Each meter type can only be assigned to one consumption group.

 To configure consumption group settings, click Manage Consumption Groups . For more information, refer to Manage Metered Utilities High/Low Settings .

 Meter Type

 The MU Plus billing strategy for utility charges.

 Name

 The full name of the meter (e.g., Electricity ).

 Short Name

 An abbreviated descriptor to use as labels or headings in some reports (e.g., ELEC ).

 Utility Type

 The category that best matches this utility ( Unassigned , Water/Sewer , Gas , Electric , Other ). Selecting a Utility Type enables the Default Meter Unit of Measure (UoM) and Billing Unit of Measure (UoM) fields. The Utility Type selected determines what unit options are available in each field. If the type selected is <Unassigned> , the Default Meter Unit of Measure (UoM) and Billing Unit of Measure (UoM) fields are disabled.

 More Information

 If the meter type is assigned to a consumption group, this field defaults to the group's designated Utility Type .

 Billing Unit of Measure (UoM)

 The unit of measurement displayed on utility bills to indicate the consumption amount (e.g. Gallons , Cubic Feet (CF) , Kilo-Watt Hour (kWH) ).

 Default Meter Unit of Measure (UoM)

 The unit of measurement used by the meter (e.g. Gallons , Cubic Feet (CF) , Kilo-Watt Hour (kWH) ).

 Fixed Rates

 This section displays base rates and minimum charge amounts, which are used to determine values in the Calculations section.

 Field
 Description

 Per Day

 A indicates that the Minimum Charge amount is multiplied by the number of days in the meter billing period.

 Base Line (BL)

 The allotted amount the tenant can use for the specified utility.

 Minimum Charge

 The amount that is billed if the utility charge is zero or less than this amount.

 Base Rate (BR)

 The standard rate for billing the tenant for their consumption of the utility, using the following formula:

 Charge Amount = BR (Base Rate) * C (Consumption)

 Excess Rate (XR)

 The value to be billed if the tenant uses more than the allotted amount established in Base Line (BL) .

 More Information

 The Minimum Charge is automatically applied to your Calculations section, but Base Rate , Base Line , and Excess Rate simply take your input values and store them to the corresponding variables ( BR , BL , and XR ). They have no impact until they are scripted into the Calculations section.

 Date Range Options

 This section displays how Rent Manager calculates consumption for this utility.

 Field
 Description

 Day after previous read through current read

 Calculates consumption one day after your previous read date through your current read date.

 Previous read through day prior to current read

 Calculates consumption on the previous read date through the day before your current read date.

 Rate Variables

 This section stores values for use in the Calculations tile. Typically, these variables consist of the rates and other fees/discounts defined by the utility provider.

 Column
 Description

 Date

 The most recent active date for the variable.

 Description

 An optional column that explains what the variable tracks.

 Low Income

 The value of the variable for a Low Income type tenant.

 Name

 The name defined for each variable. This name can be used as a reference in the Calculations section.

 Standard

 The value of the variable for a Standard type tenant.

 Calculations

 This section is where you combine rates with tenant consumption along with other fees and/or discounts to determine the final utility charge for a tenant. Since these calculations are exclusively established through scripting, you can create formulas that match the billing strategies of virtually any utility provider.

 Field
 Description

 Calculation

 The scripted calculation that is stored in the stated Variable field.

 Description

 An explanation of the script in the Calculation field and its purpose in the overall formula.

 Round

 Rounds the result of the calculation script to the specified decimal place.

For example, rounding to 0 rounds to the nearest whole number, and 2 rounds the value to the nearest hundredth.

 Rounding Method

 How Rent Manager rounds the calculation result.

 Down

 Always round the value down to the specified decimal place.

 Up

 Always round the value up to the specified decimal place.

 Nearest

 Round the value to the nearest specified decimal place. Values between 5-9 round up, and 1-4 round down.

 Variable

 The result of the Calculation field is stored in this variable name. Once a variable is declared, it can be used in subsequent rows.

 Statements

 In this section, you can customize the output of usage information on the tenant statement. This includes providing a fully itemized breakdown of the individual costs that contributed to the overall utility charge, which allows you to provide more transparency to your tenants regarding their utility fees.

 More Information

 Some states require this itemized breakdown including California, Nevada, Texas and Michigan.

 To add a statement, click   Add Item .

 Field
 Description

 Left Justified (Description)

 Descriptions of charge breakdowns included in the statement.

 Centered (Title)

 The title for your tenant statement here.

 Right Justified (Value)

 The values and formulas to be calculated on the statement.

 Statement Location

 The statement summary always displays at the bottom of the statement. Specify if you would like the statement summary to display on the Left , Center , or Right of the statement. To have this statement summary placed wherever it is able to fit depending on other statement summaries, select <Any> .

 More Information

 To include your customized output on a tenant statement, on the statement report options, ensure Show calculation details (MU-Plus) is checked when generating a tenant statement.
