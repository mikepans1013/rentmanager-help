# Unit-Level Recurring Charges (Pop-Up)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Units-Recurring-Charges.htm

Recurring charges are charge templates that are assigned to tenant, unit, unit type, or property records and can be posted regularly as one-time charges for the associated tenant.

 A unit-level recurring charge is posted as a one-time charge for the tenant(s) occupying the unit. Any charge that occurs regularly can be entered as a recurring charge to save you time. Unit-level recurring charges are entered as a charge that always applies to that specific unit, no matter who occupies the unit.

 After your recurring charges are set up, you must post recurring charges to apply there charges to tenant accounts. Additionally, you can automate recurring charge postings to have recurring charges posted automatically on a predetermined schedule.

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Units
 View

 For more information, refer to Control User Access .

 To view the unit's entire record of recurring charges, go to arrow_forward Rental Info arrow_forward General arrow_forward Units and select a unit from the list. Then on the Recurring Charges tile, click .

 More Information

 If you have purchased and enabled the Rainmaker LRO integration, a Pricing button displays in the upper right of the pop-up. This button opens the Unit Pricing pop-up, which displays the Lease Terms , Base Rent , Concessions , and Effective Rent for the selected unit.

 Filter Options

 The following filters are available on this pop-up:

 Option
 Description

 Past

 Expired recurring charges that no longer apply to this account display (the To Date for the charge has passed).

 Future

 Recurring charges to be applied to this account at a later time display (the From Date for the charge has not yet arrived).

 Exceptions

 Recurring charges that are excluded from this unit display. For example, all units at a property may inherit a garage fee, but an exception is made for a unit. When you uncheck the recurring charge's row, the charge is disinherited and it becomes an exception.

 Column Descriptions

 The following columns are available on this pop-up:

 Column
 Description

 A check mark indicates that the inherited recurring charge is active and is applied to the occupying tenant account when recurring charges are posted. Past inherited recurring charges may be checked, but they are not applied to the tenant account if today's date is after the To Date on the charge.

 Inherited from

 Indicates which recurring charges are set at the unit level and which recurring charges are inherited from the property or unit type level.

 Inherited recurring charges can only be edited on the details page for the entity type from which the charge originates. For example, to edit a recurring charge inherited from the property, go to the property account and open the View Recurring Charges pop up to edit the charge.

 Charge Type

 The charge type associated with this recurring charge. Each charge type is linked to one of the general ledger (GL) accounts from your chart of accounts.

 Comment

 Descriptive information about the recurring charge.

 Frequency

 The number of months, weeks, or days that should elapse between each posting of the recurring charge. For example, if an occupying tenant has a Monthly rent period, a frequency of 1 means the recurring charge posts once every month, and a frequency of 3 means the recurring charge posts once every three months.

 On the occupying tenant's details page in the General tile, set the Rent Period to Monthly , Weekly , or Daily .

 From Date

 The first date on which this recurring charge is applied to the occupying tenant's account when recurring charges are posted.

 If today's date is before the recurring charge From Date , the charge only displays when the Future filter is selected.

 To Date

 The final date on which this recurring charge can be posted to the occupying tenant's account. After this date, this recurring charge is no longer applied to the account when recurring charges are posted.

 If today's date is after the recurring charge To Date , the charge only displays when the Past filter is selected.

 Amount

 The amount of the corresponding charge type that posts to the occupying tenant's account.
