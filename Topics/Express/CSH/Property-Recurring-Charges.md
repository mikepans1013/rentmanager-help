# Property Recurring Charges (Pop-Up)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Property-Recurring-Charges.htm

Recurring charges are charge templates that are assigned to properties, unit types, units, and tenants and for charges that are posted regularly. These charges post to the associated tenant as one-time charges.

 A property-level recurring charge is posted to all tenants at the property. This is helpful when you have a charge that applies to all tenants at a particular property, as it allows you to set up a single recurring charge at the property level rather than setting up a recurring charge on each individual tenant account.

 After recurring charges are set up, they can be posted manually to tenant accounts. Additionally, Rent Manager Online (RMO) users can automate recurring charge postings to be posted on a predetermined schedule.

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View

 For more information, refer to Control User Access .

 To view recurring charges on a property, go to   arrow_forward Rental Info arrow_forward General arrow_forward Properties and select a property from the list. Then, on the Recurring Charges tile, click .

 Filter Options

 The following filtering options are available on this page.

 Option
 Description

 Past

 When checked, recurring charges that are no longer active also display. This applies to any recurring charges that have the To Date set to a date before the current date.

 Future

 When checked, recurring charges that are not yet active also display. This applies to any recurring charges that have the From Date set to a date after the current date.

 Column Descriptions

 The following columns are available on this page.

 Column
 Description

 Charge Type

 The charge type applied to charges posted from the recurring charge.

 Comment

 A short summary of the recurring charge.

 Frequency

 Determines the number of months, weeks, or days that should elapse between each posting of the recurring charge. The duration (months, weeks, or days) is determined by the Rent Period field on a tenant's details.

 For example, if a tenant has a monthly rent period, a frequency of 1 posts once every month, and 3 posts once every three months.

 From Date

 The date on which this recurring charge takes effect.

 To Date

 The date on which this recurring charge stops posting.

 Amount

 The charge amount posted to the tenant's account.

 Row Actions

 The following row actions are available from the menu.

 Action
 Description

 Details

 Opens the Recurring Charge Details pop-up to display information associated with the property-level recurring charge.

 Delete

 Related Privileges

 Group
 Privilege
 Column

 Recurring Charges/Market Rent
 Recurring charges
 Delete

 For more information, refer to Control User Access .

 Delete the property-level recurring charge from your database.

 More Information

 Recurring charges can only be deleted on the record on which they were created.

 For example, if you are viewing a tenant account but need to delete a unit type-level inherited charge, you can to do so only on the unit type-level View Recurring Charges page.

 Allows you to change the order of recurring charges. Changing the order of recurring charges affects the order they are posted in, and unless a custom allocation order is applied, the topmost charges on the page are the first that unallocated payments are credited to.

 Recurring charges can be reordered only within their entity group. For example, if you are viewing a tenant account but need to change the allocation order of a unit-level inherited charge, you can to do so only on the unit-level View Recurring Charges page.

 More Information

 Recurring charges that use scripts are processed last, and cannot be moved above the recurring charges that do not use scripts. You need to arrange your recurring charges to account for calculated charges running last.

 For example, if you have a tax-type scripted recurring charge that is based upon a rent charge, the rent charge must be listed directly before the scripted recurring charge.
