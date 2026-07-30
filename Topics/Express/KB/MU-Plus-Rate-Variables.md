# Set Up MU-Plus Rate Variables

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/MU-Plus-Rate-Variables.htm

The Rate Variables section displays the values for use in the Calculations tile of a Metered Utilities Plus (MU-Plus) meter type. Typically, these variables consist of the rates and other fees/discounts defined by the utility provider.

 The formulas set up in the Calculations tile are used to calculate each tenant's bill, and they seldom change. It is more common, however, to see specific rates and fee amounts change that are part of the calculated formula. This tile is meant to manage those commonly changing variables so that when you need to update a Metered Utilities Plus meter type, you can update these variables instead of adjusting the complicated scripts.

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

 More Information

 Prior to creating your rate variables, you must first set up your meter types. For more information, refer to Set Up Metered Utilities .

 Step 1: Add a New Rate Variable

 To set up a new rate variable, do the following:

 -
 Go to arrow_forward Services arrow_forward Metered Utilities arrow_forward Meter Types .
The Meter Types page displays.

 -
 Select an MU-Plus utility from the list.
The Meter Type Details page displays.

 -
 In the Rate Variables tile, click Add Variable .

 -
 Enter information in the following fields.

 Field
 Description

 Name

 The name defined for each variable. This name can be used as a reference when entering adding calculations in the Calculations tile. The name cannot contain a space.

 Date

 The most recent active date for the variable.
By default, this field populates with today's date.

 Standard

 The value of the variable for a standard tenant.

 Low Income

 The value of the variable for a low income tenant.
When entering meter readings on the Meter Readings Setup page, you can mark the unit as Low Income when it has an occupying tenant that qualifies for this discounted rate.

 Description

 An explanation of what the variable tracks. Entering descriptions can be useful for making the Metered Utilities Plus meter type more user-friendly.

 -
 Click Save .
The Metered Utilities Plus rate variable is added to the meter type.

 Step 2: Modify Rate Variables

 In the event that the rate for any of your calculations change, such as an increase in the rate for standard tenants, you can edit the variable used in the calculation. Modifying the variable instead of the calculation can eliminate the risk of creating an error in the actual calculation.

 To make adjustments to your rate variables, do the following:

 -
 Click Modify Rates .
The Modify Rates pop-up displays.

 -
 Edit any of the applicable rate variable information for each variable you wish to modify.

 -
 Optionally, click Print to print a list of your rate variables.

 -
 Click Save .
Any edits made are saved to the rate variables and are reflected on the Rate Variables tile.

 Step 3: Manage Rate Variable History

 The Rate Variable History pop-up allows you to change the name of the variable, modify it's description, as well as adjust the date and rate for standard and low income tenants. For example, if you need to change consumption rates for water in the middle of the year, you can record when the change was made and describe why the change was made.

 To modify the rate variable history for a meter type, do the following:

 -
 In the Rate Variables tile, select the rate variable you wish to review, click   arrow_forward Edit/History .

 -
 To add a new rate variable history record, click   Add Item and enter the following information:

 Field
 Description

 Date

 The date of the most recent change to the rate variable.

 Standard

 The value of the variable for a standard tenant.

 Low Income

 The value of the variable for a low income tenant.

 Description

 An explanation of why the variable was modified, such as State mandated change .

 More Information

 As a best practice, enter rate changes in the last row, versus editing the historical information in the rows above. For example, if your provider is increasing their rate by $0.01 on today's date, you would go to the last row and increase the Standard rate by $0.01 and keep the Low Income rate the same.

 -
 To delete the date and information from the rate variable historical record, click .

 -
 Click Save .
The rate variable's historical record is updated.
