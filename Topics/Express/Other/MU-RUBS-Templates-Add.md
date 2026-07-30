# Add a RUBS Template

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/MU-RUBS-Templates-Add.htm

Ratio utility billing system (RUBS) templates define how a master meter utility bill is allocated towards the tenants of a property. Creating a template streamlines the process of creating a guideline-based utility billing allocation system, reducing the workload and possibility for errors while providing transparency for all utility allocations.

 Multiple templates can be created to meet the needs of multiple properties or master meter-specific configurations. After creating the RUBS template, you can assign the template to one or more master meters on the relevant utility's details page.

 Warning

 Depending on state laws, there may be limitations on how administration and utility fees are allocated in the RUBS calculation. All RUBS calculations are rounded down to the nearest cent to avoid utility bill overcharging laws. Check your state laws before proceeding.

 Related Privileges

 Group
 Privilege
 Column

 Utilities
 Manage RUBS Templates
 Add, View

 For more information, refer to Control User Access .

 Step 1: Create the Template

 To create a new RUBS template, do the following:

 -
 Go to arrow_forward Services arrow_forward Service Setup arrow_forward Utilities arrow_forward RUBS Templates .
The RUBS Templates page displays.

 -
 Click C Add Template .

 Step 2: Enter the Template Basics

 Enter a unique name for the template and determine the percentage amount the property's tenants are responsible for paying out of the master meter bill.

 -
 Enter information into the available fields.

 Field
 Description

 Tenant Contribution

 The percentage of the utility bill tenants are required to pay. The entered value must be greater than zero and less than or equal to 100. The default value is 100.00 .

 For example, if the entered value is 90.00 , then 90 percent of the total utility bill is used when calculating tenant charges. The remaining 10 percent is paid by the property.

 Template Name

 The name of the RUBS template.

 -
 Click Next .

 Step 3: Add Fees & Charges

 In the Fees & Charges section, add administration fees and/or bill line exclusions and prorate charges to your template.

 -
 Enter information in the following fields:

 Field
 Description

 Admin Fee

 The administration fee charged to tenants in addition to their portion of the utility bill.

 Amount

 The dollar amount charged to tenants in addition to their portion of the utility bill.

 If Percent of tenant's total charge is checked, the added charge Amount is the percentage of the tenant's portion of the utility bill.

 Add a separate charge

 If checked, the administration fee is added as a separate charge to the tenant, as opposed to being included in the RUBS calculation. Then, assign the charge type to the separate charge.

 Exclude bill line items with these GL accounts from RUBS calculations

 If checked, bill line items associated with the general ledger (GL) accounts selected from the drop-down list are excluded from the RUBS calculation of splitting utility bills among tenants or units.

 More Information

 GL accounts selected to be excluded from RUBS calculations on a RUBS template cannot be made inactive or deleted.

 Prorate Charges for Move Ins that occur during the billing period

 If checked, tenants with a Move In date during the billing period have their charge amount prorated based on the number of days the tenant lived in the unit during that period.

 -
 Click Next .

 Step 4: Set Up Allocations

 In the Allocation section, determine how utility costs are distributed amongst the tenants and/or units in the property. As of the RUBS posting date, units with an Other Rentable Item unit type or have the INACT unit status applied are excluded in the RUBS calculation.

 More Information

 RUBS calculations for properties that have a Manufactured Housing property type are based on home-type assets as opposed to units. A home-type asset has Asset of this type are homes checked on its Asset Type Details pop-up.

 -
 Enter the information in the following fields:

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

 The charge amount for each allocation factor in the RUBS calculation is the property's total master meter bill amount multiplied by the product of each selected allocation factor's percentage and weight. The following formula calculates the allocation factor charge amount:

 Allocation factor charge amount = Master meter bill * (Allocation weight * Allocation percentage)

 Bathrooms

 The allocation percentage for the RUBS calculation is the number of bathrooms in the unit divided by the total number of bathrooms at the property. The following formula calculates the allocation percentage:

 Allocation percentage = # of bathrooms in unit / total # of bathrooms in property

 Bedrooms

 The allocation percentage for the RUBS calculation is number of bedrooms in the unit divided by the total number of bedrooms at the property. The following formula calculates the allocation percentage:

 Allocation percentage = # of Bedrooms in unit / total # of Bedrooms in property

 Occupancy

 The allocation percentage for the RUBS calculation is the number of occupants in the unit divided the total number of occupants at the property. Then, select the Contact Types to be considered an occupant. The following formula calculates the allocation percentage:

 Allocation percentage = # of Occupants in unit / Total # of Occupants in property

 Square Feet

 If All units is selected, the allocation percentage for the RUBS calculation is the square footage of the unit divided by the total square footage of all active units of the property. The following formula calculates the allocation percentage:

 Allocation percentage = Unit square footage / Total square footage of active units at property

 If Occupied units only is selected, the allocation percentage for the RUBS calculation is the total square footage of the unit divided by the total square footage of the property. The following formula calculates the allocation percentage:

 Allocation percentage = Unit square footage / Total square footage of occupied units at property

 -
 Click Next .

 Step 5: Review and Save

 In the Review section, review all of the entered information, and make final adjustments as needed.

 -

 -
 To run a trial calculation based on the entered information, click Test Calculation .

 -
 In the Calculation Data section, enter a sample property and Utility Bill Amount for the test calculation. Then, click Test .

 -
 When finished with test calculations, click Close .

 -
 Click Add Template .
The RUBS template is created.

 More Information

 Once a RUBS template is created, it is ready to be assigned to a master meter. A master meter stores and records the utility usage for the entire property, such as the gas meter for an apartment building. A RUBS template is assigned on the master meter's source utility's details page. For more information, refer to Set Up RUBS .
