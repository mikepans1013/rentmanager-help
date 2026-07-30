# RUBS Templates (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/MU-RUBS-Templates.htm

Ratio utility billing systems (RUBS) is the method of splitting utility bills among multiple units and tenants at a property. RUBS allows property managers to divide charges among tenants in Rent Manager based on factors such as occupancy, unit size, the number of bedrooms and bathrooms, and more, without the need for submeters.

 RUBS templates are helpful when creating multiple sets of property-specific rules or guidelines for allocating utility bills among tenants. The RUBS Templates page displays a list of RUBS templates assigned or unassigned to a master meter, and allows you to create new templates.

 Related Privileges

 Group
 Privilege
 Column

 Utilities
 Manage RUBS Templates
 View, Edit

 For more information, refer to Control User Access .

 To view the RUBS Templates page, go to arrow_forward Services arrow_forward Service Setup arrow_forward Utilities arrow_forward RUBS Templates and select a schedule from the list on the left.

 If a RUBS templates is assigned to a master meter, it occupies the Assigned list on the left of the page. Otherwise, templates occupy the Unassigned list.

 Template Assignment

 If a template is assigned to one or more master meters, information from the associated Utility Detail page's Master Meters tile displays. For more information, refer to Utility Details (Page) .

 Column
 Description

 Expense Account

 The general ledger expense account assigned to the utility.

 Meter Number

 The master meter's unique meter number, which may be a serial number or other identification number, at the associated property.

 Property

 The short name of the property linked to the master meter.

 Utility

 The name of the utility as displayed on the Utilities page in the Utility Name column.

 Vendor

 The name of the vendor assigned to the utility.

 Template Basics

 This tile displays ther RUBS template name and determine the percentage of the utility bill your tenants contribute to.

 Field
 Description

 Tenant Contribution

 The percentage of the utility bill tenants are required to pay. The entered value must be greater than zero and less than or equal to 100. The default value is 100.

 For example, if 95 is entered, then 95 percent of the utility bill amount is used when calculating tenant charges, the leftover five percent is paid by the property.

 Template Name

 The name of the RUBS template. The name usually provides context on how the template is set up.

 For example, a RUBS Template that primarily uses the Square Feet allocation factor might be named Square Footage .

 Fees & Charges

 This tile displays admin fees and other charges, excluded general ledger accounts from the RUBS calculation, and prorated charges for tenants with a move-in date during the billing period.

 Field
 Description

 Admin Fee

 The admin fee charged to tenants in addition to their portion of the utility bill.

 Amount

 The amount charged to tenants in addition to their portion of the bill.

 If Percent of tenant's total charge is selected, the field must be a percentage, in which only values greater than zero and less than or equal to 100 are accepted

 Add a Separate Charge

 If checked, the admin fee is added as a separate charge to the tenant, as opposed to being included in the RUBS calculation. Then, in the Charge Type drop-down list, select the charge type assigned to the separate charge. A charge type selection is required.

 Exclude bill line items with these GL accounts from RUBS calculations

 If checked, bill line items associated with the general ledger (GL) accounts selected from the drop-down list are excluded from the RUBS calculation of splitting utility bills among tenants or units.

 More Information

 GL accounts selected to be excluded from RUBS calculations on a RUBS template cannot be made inactive or deleted.

 Prorate Charges for Move Ins that occur during the billing period

 If checked, tenants with a Move In date, as it displays on the tenant's details page in the Leases tile, during the billing period have their charge amount prorated based on the number of days the tenant lived in the unit during that period.

 Allocation

 In this tile, the following fields determine how the RUBS calculation is distributed across each tenant or unit. Units with an Other Rentable Item unit type or have the INACT unit status as of the RUBS posting date are excluded in the RUBS calculation.

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

 Allocation percentage = # of Bathrooms in unit / total # of Bathrooms in property

 Bedrooms

 The allocation percentage for the RUBS calculation is number of bedrooms in the unit divided by the total number of bedrooms at the property.

 Allocation percentage = # of Bedrooms in unit / total # of Bedrooms in property

 Occupancy

 The allocation percentage for the RUBS calculation is the number of occupants in the unit divided the total number of occupants at the property. Then, select the Contact Types to be considered an occupant.

 Allocation percentage = # of Occupants in unit / Total # of Occupants in property

 Square Feet

 If All units is selected, the allocation percentage for the RUBS calculation is the square footage of the unit divided by the total square footage of all active units of the property.

 Allocation percentage = Unit square footage / Total square footage of active units at property

 If Occupied units only is selected, the allocation percentage for the RUBS calculation is the total square footage of the unit divided by the total square footage of the property.

 Allocation percentage = Unit square footage / Total square footage of occupied units at property
