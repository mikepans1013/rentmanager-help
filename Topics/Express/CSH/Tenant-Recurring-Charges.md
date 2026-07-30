# Tenant Recurring Charges (Pop-Up)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Tenant-Recurring-Charges.htm

Recurring charges are charge templates that save information about charges you will post to tenant accounts at regular intervals, such as monthly rent payments or weekly garbage fees.

 Recurring charges can be set at the property, unit type, unit, and tenant levels. Tenants automatically inherit charges set for the property, unit type, or unit linked to their tenant account. For example, all tenants at a property inherit a property-wide garbage fee set at the property level. Recurring charges can also be set at the tenant level to apply only to this tenant account.

 After your recurring charges are set up, you must post recurring charges to apply the charges to tenant accounts. Additionally, Rent Manager Online (RMO) users can automate recurring charges to automatically post charges on a predetermined schedule.

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View

 For more information, refer to Control User Access .

 To view a tenant's record of recurring charges, go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select a tenant from the list. Then on the Recurring Charges tile, click .

 On the View Recurring Charges pop-up, view and manage recurring charges applied to this tenant account. If the tenant leases more than one unit, recurring charges for each unit are grouped together.

 Related Preferences

 Recurring charges can be automatically prorated by charge type when Prorated posted charges if enabled for charge type (recurring charge post) is enabled in system preferences.If the tenant has a Rent Period of Monthly and the charge type associated with the recurring charge has Prorate by Day enabled, the recurring charge prorates based on where in the month the To Date of the previous charge and From Date of the new charge fall. When posted charges are prorated, Rent Manager generates a Comment that explains how the charge was prorated. For example, if a posted monthly rent charge is prorated, the comment would be Prorated (14 days for 225.81 and 17 days for 438.71) . For more information, refer to General Options (System Preferences) .

 More Information

 If you have purchased and enabled the Rainmaker LRO integration, a Pricing button displays in the upper right of the pop-up. This button opens the Unit Pricing pop-up, which displays the Lease Terms , Base Rent , Concessions , and Effective Rent for the selected unit.

 Filter Options

 Use the filters below to display recurring charges that match filter criteria.

 All past, future, and current tenant-level recurring charges and inherited recurring charges display by default. Uncheck all filters to display only the recurring charges that currently apply to a tenant account when recurring charges are posted.

 Option
 Description

 Past

 Expired recurring charges that no longer apply to this account display (the To Date for the charge has passed).

 Future

 Recurring charges to be applied to this account at a later time display (the From Date for the charge has not yet arrived).

 Exceptions

 Recurring charges that are excluded from this tenant account display. For example, all tenants at one property are set to inherit a property-level garage fee, but an exception is made for one tenant. When you uncheck the inherited charge, it becomes an exception.

 Account Group Recurring Charges

 The recurring charges for all tenants in this tenant's account group display. The Account column displays other tenant accounts in this account group. When enabled, the tenant name, property name, unit number, and the number of charge items each tenant contributes to the account group's total recurring charges display.

 This option displays only for tenant accounts that are part of an account group. For more information on account groups, refer to Manage Account Groups .

 Column Descriptions

 Columns on the tenant View Recurring Charges pop-up display the information below. If the tenant leases more than one unit, recurring charges for each unit are grouped together.

 Column
 Description

 A check mark indicates that the inherited recurring charge is active and is applied to the tenant account when recurring charges are posted. Past inherited recurring charges may be checked, but they are not applied to the tenant account if today's date is after the To Date on the charge.

 Inherited from

 Indicates which recurring charges are set at the tenant level and which recurring charges are inherited from the property, unit type, or unit level.

 Inherited recurring charges can only be edited on the details page for the entity type from which the charge originates. For example, to edit a recurring charge inherited from the tenant's property, go to the property account and open the View Recurring Charges pop up to edit the charge.

 Charge Type

 The charge type associated with this recurring charge. Each charge type is linked to one of the general ledger (GL) accounts from your chart of accounts.

 Comment

 Descriptive information about the recurring charge.

 Frequency

 The number of months, weeks, or days that should elapse between each posting of the recurring charge. For example, if a tenant has a Monthly rent period, a frequency of 1 means the recurring charge posts once every month, and a frequency of 3 means the recurring charge posts once every three months.

 On the Tenant details page in the General tile, set the Rent Period to Monthly , Weekly , or Daily .

 From Date

 The first date on which this recurring charge is applied to the tenant's account when recurring charges are posted.

 If today's date is before the recurring charge From Date , the charge only displays when the Future filter is selected.

 To Date

 The final date on which this recurring charge can be posted to the tenant's account. After this date, this recurring charge is no longer applied to the account when recurring charges are posted.

 If today's date is after the recurring charge To Date , the charge only displays when the Past filter is selected.

 Amount

 The amount of the corresponding charge type that posts to the tenant's account.

 Change Allocation Order

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 For more information, refer to Control User Access .

 The order of recurring charges affects the order in which charges post to the tenant's account. Unless a custom allocation order is applied, any of the tenant's unallocated payments apply to newly posted charges starting with the first charge in the allocation order.

 Recurring charges can be reordered only from the entity on which they were created. For example, if you are viewing a tenant account but need to change the allocation order of a recurring charge inherited from the unit level, you must reorder the allocation from the unit.

 To reorder recurring charge allocations, click and drag next to the recurring charge and then click Save .

 More Information

 Recurring charges that use scripts are processed last and cannot be placed ahead of recurring charges in the allocation order that do not use scripts. You need to arrange your recurring charges to account for calculated charges running last.

 For example, if you have a tax-type scripted recurring charge that is based on a rent charge, the rent charge must be listed directly before the scripted recurring charge.
