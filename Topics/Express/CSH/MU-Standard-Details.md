# Standard Meter Type Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/MU-Standard-Details.htm

On the Meter Type Details page, you can view and update information about an individual meter type. Standard meter types are used to calculate utility charges with fixed consumption ranges and utility rates. These meters calculate one charge based on the total consumption, which can be a tiered rate.

 More Information

 You may need a Metered Utilities Plus meter type, as opposed to standard, if any of the following situations apply:

 - If you need to perform complex calculations like rounding, rate blends, if statements, min/max, and per day fees.

 - If you have low-income or medical tenants who qualify for billing discounts.

 - If you have different rate zones, meaning tenants in different locations pay different amounts.

 - If you are required by law to provide detailed usage statements to tenants that itemize the charge into its smaller components.

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

 To view a meter type's details, go to arrow_forward Services arrow_forward Metered Utilities arrow_forward Meter Types and select a meter with the Standard type from the list.

 Meter Type Information

 This tile displays general information about the meter type.

 Field
 Description

 Comment

 Additional information about this meter type.

 Consumption Group

 The meter type's assigned consumption group, which sets ranges for your meter readings to track usage levels. This allows you to quickly identify reading errors and improve reporting processes. Each meter type can only be assigned to one consumption group.

 Click Manage Consumption Groups to configure consumption group settings. For more information, refer to Manage Metered Utilities High/Low Settings .

 Meter Type

 The Standard billing strategy for utility charges with fixed consumption ranges and utility rates.

 Name

 The full name of the meter (e.g., Cincinnati Water Works ).

 Short Name

 An abbreviated descriptor to use as labels or headings in some reports, e.g., CWW .

 Utility Type

 The category that best matches this utility ( Unassigned , Water/Sewer , Gas , Electric , Other ). Selecting a Utility Type enables the Default Meter Unit of Measure (UoM) and Billing Unit of Measure (UoM) fields. The Utility Type selected determines what unit options are available in each field. If the type selected is <Unassigned> , the Default Meter Unit of Measure (UoM) and Billing Unit of Measure (UoM) fields are disabled.

 More Information

 If the meter type is assigned to a consumption group, this field defaults to the group's designated Utility Type .

 Billing Unit of Measure (UoM)

 The unit of measurement displayed on utility bills to indicate the consumption amount (e.g. Gallons , Cubic Feet (CF) , Kilo-Watt Hour (kWH) ).

 Default Meter Unit of Measure (UoM)

 The unit of measurement used by the meter (e.g. Gallons , Cubic Feet (CF) , Kilo-Watt Hour (kWH) ).

 Charge Options

 This section displays the Calculation Method and any flat-rate fees to be assessed.

 Field
 Description

 Calculation Method

 Determines how consumption charges are totaled.

 Graduated

 Calculates one charge based on consumption used in multiple tiers as specified by the meter type.

 Standard

 Calculates one charge based on the total consumption of a utility using a single tier.

 Conversion Method

 Select the conversion method used to determine the amount of consumption as represented by the variable C .

 Automatically convert meter UoM to Billing UoM

 Select this method to convert the consumption amount recorded in the Default Meter Unit of Measure (UoM) to the Billing Unit of Measure (UoM) for billing purposes.

 Use conversion formula

 Select this method to write a custom formula to convert the meter UoM to another value for billing purposes. For example, you can use this method if you the meter type does not have a defined Utility Type , or if the Billing Unit of Measure (UoM) field does not include the units you use for billing. In formulas, C represents consumption.

 When this Conversion Formula is applied to the Consumption unit of the meter, the result (in the measurement of the billing) displays as the Adjusted Consumption in subsequent pages and reports.

 If the same unit of measurement is used by this meter type as well as billing, no Conversion Formula is needed. Consumption and Adjusted Consumption display the same number.

 Flat Charge

 An amount that does not change between billing cycles, such as service charges or delivery fees, which is added to the utility consumption charge.

 Minimum Charge

 The amount billed if the utility charge is zero or less than this amount.

 Per Day

 If Per Day is checked, it multiply the Minimum Charge amount by the number of days in the meter billing period.

 Variables

 This section displays variables that represent each rate that can be billed to a tenant. If you need to add a new variable, click Add Variable .

 Column
 Description

 Name

 The name of the variable, which should begin with a letter. Variables may be used in lengthy formulas, so as a best practice, keep the name short.

 Value

 The value represented by the corresponding variable.

 Calculations

 This section displays each level of consumption using the variables you defined in the Variables section. To add a new calculation, click Add Calculation .

 The desired Level method for the calculation displays in the tile header. The Level method determines how to apply rates when consumption levels span a range.

 Option
 Description

 Equal

 Up to and including the Level value. For example, a Level of 500 using Equal would include 0 - 500.

 Under

 Below or less than the Level value. For example, a Level of 500 using Under would include 0 - 499.99.

 The following columns display in the Calculations section.

 Columns
 Description

 Calculation

 The consumption rate or formula (where C stands for consumption) that represents the amount to charge at the Level . You can use:

 - A specific consumption rate, such as C*0.007 . For example, this represents a rate of $7.00 per 1000 units of measurement.

 - A consumption rate that uses a variable you have defined, such as C*V1 .

 - A formula that expands on a consumption rate or variable, such as (C*0.007)*0.82+5 .

 From

 The lowest value of consumption for the level. If you enter the Level for this calculation first, the From and To fields populate automatically.

 Level

 The value to indicate the high end of the consumption range.

 To

 The highest value of consumption for the level. If you enter the Level for this calculation first, the From and To fields populate automatically.
