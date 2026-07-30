# Modify Market Rent

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Units-Market-Rent-Modify.htm

Periodically, you should adjust market rent amounts to reflect current values. Instead of updating each unit and/or rentable asset individually, you can use this tool to modify the market rent for a batch of units or rentable assets within a selected property at the same time. From this page, you can apply a new market rent for selected units or assets via a manual entry or calculated formula.

 More Information

 Assets display on this page only if, on the asset's details page, the Track Financials and Allow asset to be rented options are enabled, a property is selected in the Property field, and a dollar amount is entered in the Market Rent field.

 Related Privileges

 Group
 Privilege
 Column

 Recurring Charges/Market Rent
 Modify market rent
 Enabled

 For more information, refer to Control User Access .

 Step 1: Establish Filters

 To update market rent amounts, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Recurring Charges arrow_forward Modify Market Rent .
The Modify Market Rent page displays.

 -
 In the Select Types tile, select from the following criteria to determine which units display on the page:

 Filters
 Descriptions

 Properties

 The property for which to modify market rent for its associated units and rentable assets.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Unit Type

 The unit and asset type(s) to include units and rentable assets of that type in the list for market rent updates. Alternatively, select <All Unit Types> to include all units and assets at the property in the list.

 Current Amount

 The market rent of units and rentable assets with a market rent Current Amount greater than or equal to ( >= ), less than or equal to ( <= ), or equal to ( = ) a certain amount. Click the current operator ( >= , <= , or = ) at the top right of the field and select the desired operator from the list, then enter a value in the box.

 -
 Click Apply .
All units that match the filter criteria display in the list.

 Step 2: Update Market Rent Amount

 Once the market rents you wish to update are displayed on the page, you have multiple options to chose from to modify the rent amounts. Based on your selection, in the Select Units section, the New Amount column immediately previews the new calculated rent amount. In the Set Up Calculation tile, choose one of the following methods to modify the charge:

 Method
 Description

 Enter Calculation

 User either a flat rate or one of the following calculations for the new amount. The system variable C always represents the Current Amount of the market rent.

 Flat Rate

 To change all selected recurring charges to a new flat rate, enter the dollar amount of the new charge.

 For example, to update all selected recurring charges to a New Amount of $650, enter 650 .

 Add to Current Amount

 To add an amount to the selected recurring charges, enter a plus ( + ) followed by the dollar amount of the increase.

 For example, to add $150 to the Current Amount of all selected recurring charges, enter C+150 . Each recurring charge now displays a new amount that is $150 more than its current amount.

 Multiply Current Amount

 To multiply an amount by a number, enter an asterisk ( * ) followed by the number to multiply by. This is commonly used to calculate percentage increases.

 For example, to increase the Current Amount of all selected recurring charges by 20 percent, enter C*1.20 . Each recurring charge now displays a new amount that is 20 percent more than its current amount.

 Use CPI

 The rent is modified using information from your consumer price index (CPI) page in Rent Manager . The CPI of the month and year entered in the Begin using new charges on field is divided by the CPI for the month and year in which the rent charge was first created for the tenant. Then, the current amount is multiplied by the resulting number to calculate the new rent amount. For more information, refer to Consumer Price Index (CPI) (Page) .

 Alternatively, you can choose to manually update the market rent amounts. In the New Amount column, manually enter the market rent value for each selected unit. Repeat for each unit's market rent you wish to modify.

 Step 3: Modify Market Rent Values

 To select the rents to update and apply the changes, do the following:

 -
 In the Additional Information tile's New market rent takes effect on field, enter the date on which the new market rents begin. Alternatively, click to select a date from the calendar on which the new market rents begin.

 More Information

 If the date entered in this field is on or before the From Date for a unit's market rent, displays next to the From Date column's value, and the unit's market rent information cannot be modified with this tool.

 -
 In the Comment field, enter an optional message regarding the changes to the market rent.

 -
 In the list of units, review the information to ensure it meets your needs. The following columns are available:

 Field
 Descriptions

 Property

 The full name of the property where the market rent is being modified.

 Unit

 The name of the unit where the market rent is being modified.

 From Date

 The date on which the new market rent takes effect.

 Current Amount

 The current dollar amount of the market rent as listed on the unit or rentable asset's details page.

 New Amount

 The new dollar amount based on the manual or calculated made to the current market rent amount.

 -
 Click Modify .
The updated market rents are saved and can be viewed on the unit's View Market Rent pop-up or the asset's details page.
