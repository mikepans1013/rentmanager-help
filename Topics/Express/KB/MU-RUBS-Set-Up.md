# Set Up RUBS

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/MU-RUBS-Set-Up.htm

Ratio utility billing systems (RUBS) is the method of splitting utility bills among the property's tenants. RUBS allows property managers to divide charges among tenants in Rent Manager based on factors such as occupancy, unit size, the number of bedrooms and bathrooms, and more, without the need for submeters.

 When enabled in Rent Manager , RUBS takes a property-wide utility or master meter reading and calculates and distributes the costs to the its tenants based on your customized configuration using templates. Once a RUBS template is assigned to a utility or master meter, RUBS charges can be easily posted in addition to existing monthly recurring charges.

 Step 1: Add a RUBS Template

 Related Privileges

 Group
 Privilege
 Column

 Utilities

 Manage RUBS Templates

 View, Add

 For more information, refer to Control User Access .

 In this step, design your RUBS template to customize how the master meter utility bill and additional fees should be allocated amongst the tenants at your property.

 To add a RUBS template, do the following:

 -
 Go to arrow_forward Services arrow_forward Service Setup arrow_forward Utilities arrow_forward RUBS Templates .
The RUBS Templates page displays.

 -
 At the top left of the page, click Add Template .
The New RUBS Template pop-up displays.

 -
 In the Template Basics tab, enter the following information:

 Field
 Description

 Template Name

 The unique name of the RUBS template. The name usually provides context on how the template is set up (e.g., Occupancy Square Footage ).

 Tenant Contribution

 The percentage of the utility bill tenants are required to pay. The entered value must be greater than zero and less than or equal to 100. The default value is 100.00 .

 -
 Click Next .

 -
 In the Fees & Charges tab, enter the following information:

 Field
 Description

 Admin Fee

 The administration fee charged to tenants in addition to their portion of the utility bill.

 Amount

 The amount charged to tenants in addition to their portion of the bill.

 If Percent of tenant's total charge is selected, the value must be a percentage greater than zero and less than or equal to 100.

 Add a Separate Charge

 If checked, the administration fee is added as a separate charge to the tenant, as opposed to being included in the RUBS calculation. Then, select the charge type to assign the administration fee from the drop-down list.

 Exclude bill line items with these GL accounts from RUBS calculations

 If checked, bill line items associated with the general ledger (GL) accounts selected from the drop-down list are excluded from the RUBS calculation of splitting utility bills among tenants.

 More Information

 GL accounts selected to be excluded from RUBS calculations on a RUBS template cannot be made inactive or deleted.

 Prorate Charges for Move Ins that occur during the billing period

 If checked, tenants with a Move In date during the billing period have their charge amount prorated based on the number of days the tenant lived in the unit during that period.

 -
 Click Next .

 -
 In the Allocation tab, determine how utility costs are distributed amongst the tenants in the property. As of the RUBS posting date, As of the RUBS posting date, units with an Other Rentable Item unit type or have the INACT unit status applied are excluded in the RUBS calculation.

 More Information

 RUBS calculations for properties that have a Manufactured Housing property type are based on home-type assets as opposed to units. A home-type asset has Asset of this type are homes checked on its Asset Type Details pop-up.

 Enter the following information:

 Field
 Description

 Divide utility costs evenly across all units

 If selected, the RUBS calculation divides utility costs evenly amongst all active units at the property as of the posting date.

 For example, if the total utility bill amount is $200 and the property has 4 active units, then each tenant is charged $50.

 Divide utility costs evenly across occupied units only

 If selected, the RUBS calculation divides utility costs evenly amongst all units that have an active lease at the property as of the posting date.

 For example, if the total utility bill amount is $500 and the property has six total units, with four of them occupied, then each tenant is charged $125.

 Choose allocation factors

 If selected, the following factors listed below can be activated and assigned an allocation weight, a percentage value greater than zero and less than or equal to 100, in the RUBS calculation. All allocation weights for the selected allocation factors must sum to 100.

 The charge amount for each allocation factor in the RUBS calculation is the property's total master meter bill amount multiplied by the product of each selected allocation factor's percentage and weight.

 Allocation factor charge amount = Master meter bill * (Allocation weight * Allocation percentage)

 Bathrooms

 The allocation percentage for the RUBS calculation is the number of bathrooms in the unit divided by the total number of bathrooms at the property.

 Allocation percentage = # of bathrooms in unit / total # of bathrooms in property

 Bedrooms

 The allocation percentage for the RUBS calculation is number of bedrooms in the unit divided by the total number of bedrooms at the property.

 Allocation percentage = # of bedrooms in unit / total # of bedrooms in property

 Occupancy

 The allocation percentage for the RUBS calculation is the number of occupants in the unit divided the total number of occupants at the property. Then, select the contact types to be considered an occupant.

 Allocation percentage = # of Occupants in unit / total # of Occupants in property

 Square Feet

 If All units is selected, the allocation percentage for the RUBS calculation is the square footage of the unit divided by the total square footage of all active units of the property.

 Allocation percentage = unit square footage / total square footage of active units at property

 If Occupied units only is selected, the allocation percentage for the RUBS calculation is the total square footage of the unit divided by the total square footage of occupied units at the property.

 Allocation percentage = unit square footage / total square footage of occupied units at property

 -
 In the Review tab, review all of the entered information and make any adjustments as necessary.

 -
 Click Add Template .
The RUBS template is created.

 Step 2: Add a RUBS Utility

 Related Privileges

 Group
 Privilege
 Column

 Utilities

 Metered utilities

 Enabled

 Utility information

 View, Add

 For more information, refer to Control User Access .

 Once your RUBS templates are created, you can add a RUBS-enabled utility with a master meter in Rent Manager , and add a template to that master meter in this step.

 To add a RUBS utility, do the following:

 -
 Go to arrow_forward Services arrow_forward   arrow_forward Metered Utilities arrow_forward Utilities .
The Utilities page displays.

 -
 To add a new source utility with a master meter, click Add Utility .
The Add Utility wizard displays.

 -
 In the Utility Information tile, enter information for the following fields:

 Field
 Description

 Charge Type

 The charge type to charge tenants for the selected utility.

 Properties

 The properties the utility is assigned to.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Source Utility for Readings

 If a single meter is being used for two or more utilities, select the other utility. Otherwise, leave this field blank.

 Utility Name

 The unique name of the utility as it displays in Rent Manager .

 -
 In the Master Meters tile, click Add Master Meters and enter the following information:

 Field
 Description

 Default Expense Account

 The default vendor expense account to use on the master meter bills created for properties assigned to this utility.

 Default RUBS Template

 The default RUBS template to use on the master meter bills to automatically calculate each tenant's portion of the property's utility bill.

 Default Vendor

 The default vendor account to assign to the master meter bills created for properties assigned to this utility.

 -
 Toggle the RUBS Enabled column to activate RUBS at the selected Property .

 -
 In the RUBS Template column, select the RUBS template to be assigned to the master meter from the drop-down list. Select <Use Default> to assign the template selected in the Default RUBS Template .

 -
 Enter the remaining information for the master meter as necessary. To add a new master meter, select Add Master Meter . For more information, refer to Add Master Meters .

 -
 Enter the remaining information for the utility as necessary. For more information, refer to Add a Utility

 -
 To create the utility and exit the pop-up, click Save & Close . To create the utility and leave the pop-up open to create more utilities, click Save & New .
The RUBS-enabled utility and master meter is added to Rent Manager .

 Next Steps

 Now that you have set up RUBS templates and utilities, you are ready to add and post RUBS charges to the tenants at a property that is assigned to a RUBS-enabled master meter.

 Action
 Description

 Add a RUBS bill

 After you have completed the setup of RUBS for your master meter, you can start adding master meter bills in Rent Manager from the Add Bill page. For more information, refer to Add a Master Meter Bill .

 Post RUBS

 After the RUBS master meter bills are created, they can be posted from the following pages in Rent Manager :

 Bill details

 To post RUBS utility charges to each tenant at a property from its master meter bill, on the Bill details page, click Post RUBS  on the top right. This option displays only if the Master Meter Bill option is toggled. For more information, refer to Post a RUBS Master Meter Bill .

 Post Recurring Charges

 To post RUBS utility charges to each tenant in addition to existing recurring charges, such as rent, on the Post Recurring Charges page, check Post RUBS . For more information, refer to Post Recurring Charges .

 Post RUBS

 To post RUBS utility charges for one or more properties at once, on the Post RUBS page, select the RUBS-enabled master meter bills assigned to the properties to which charges are posted. Then, click Post Charges . For more information, refer to Post RUBS .
