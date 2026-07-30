# Add a CRE Recurring Charge

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Recurring-Charges-Add-CRE-Charge.htm

Commercial recoverable expenses (CRE) fees are primarily used in commercial rentals to distribute the expenses related to owning and maintaining the facility, including maintenance, taxes, and insurance. CRE recurring charges are charge templates that can be posted regularly rather than manually adding charges directly to the tenant account. The amount charged each month may vary based on your setup. CRE recurring charges are most commonly used for commercial rent, but can also be used for situations where the owner has covered an expense upfront, but wants to bill back the tenant to cover a portion of that cost.

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View

 Recurring Charges/Market Rent
 Recurring charges
 Add

 For more information, refer to Control User Access .

 To add a commercial recoverable expenses (CRE) recurring charge to an account, do the following:

 -
 Go to   arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select a tenant from the list.
The Tenant details page displays.

 -
 On the Recurring Charges tile, click Add CRE .

 -
 In the Commercial Recoverable Charge section, enter or select the information for the CRE recurring charge in the available fields described below.

 Field
 Description

 Unit

 The unit to which this CRE recurring charge is applied.

 Charge Type

 The charge type to use when this recurring charge is posted. The posted charge impacts the GL account linked to the charge type.

 Frequency

 The number value for how often this recurring charge posts to the tenant account. The frequency is calculated as the number of months, weeks, or days that should elapse between each posting of the recurring charge. The Rent Period determines if the frequency's interval is a month, week, or day.

 For example, if the tenant has a Rent Period of Monthly and you enter a Frequency of 1 , then this recurring charge posts once every month. If the tenant is Weekly and you enter 2 , it posts once every two weeks. If no value is specified, the Frequency defaults to 1 .

 From

 The date on which this recurring charge begins posting for this tenant. If recurring charges are posted for a date prior to the From date, no charge is posted for the tenant.

 To

 The final date for which the recurring charge can be posted before it expires. If recurring charges are posted for a date after the To date, no charge is posted for the tenant. If there is no end date or it is not known, leave this field blank.

 Comment

 A note to display for this recurring charge and on the associated charges on the tenant's View Transactions page when posted.

 -
 In the Amount Distribution section, select one of the following options:

 Option
 Description

 Tenant's percentage of the total square footage of the property

 Charge an amount based on the percentage of each tenant's occupied square footage of the property's overall square footage.

 For example, if the CRE charge is for $3,000 and tenant rents 50% of the total square footage of the property, the tenant is charged $1,500.

 Warning

 For this option to work, the following fields must be accurately filled out:

 -
 The Square Footage field on the tenant's unit.

 -
 The Total Sq Ft field on the selected property.

 Tenant's percentage of the total rented square footage of the property

 Charge an amount based on the percentage of each tenant's occupied square footage of the property's overall square footage minus the square footage of any vacant units.

 For example, if the property's total square footage is 10,000 sq. ft. but 3,000 sq. ft. of the property consists of vacant units, each tenant's rented space is compared against the property's remaining 7,000 sq. ft. of total rented space. This means each tenant is charged a larger portion of the total CRE amount.

 Warning

 For this option to work, the following fields must be accurately filled out:

 -
 The Square Footage field on the tenant's unit.

 -
 The Total Sq Ft field on the selected property.

 In addition, all units at the property must have an accurate Square Footage entered.

 Occupied percentage of the total occupancy of the property

 Charge an amount based on the number of tenants at the property, charging each tenant an equal percentage of the total CRE based on the property's overall occupancy.

 For example, if a property consists of ten occupants that each have their own unit, each tenant is charged 10% of the total CRE charge. If there are ten total occupants at the property and one unit has four occupants, they are responsible for 40% of the CRE charge.

 Warning

 For this option to work, every occupant at the property must be added to Rent Manager as either a tenant or a tenant contact.

 Divide evenly among current tenants

 Charge an amount evenly among all your current tenants.

 For example, if the property has ten units and eight are rented by tenants, each tenant is assigned 1/8 of the total CRE charge.

 Divide evenly by number of units in the property

 Charge an amount evenly by the total number of units in the property.

 For example, if your property has ten units and eight are rented by tenants, each tenant is assigned 1/10 of the total CRE charge. This means part of the total CRE charge is not assigned to a tenant if there are any vacant units at the property.

 Use CRE setup of the selected lease

 Charge an amount to each tenant based on the percentage of expenses you defined on the CRE Setup tab of the tenant's commercial lease.

 Warning

 For this option to work, the Pro Rata Share % and Administrative Fee % fields must be established on the commercial lease's CRE Setup tab.

 Additionally, enable one or both of the following fields to determine which CRE settings are included when calculating the charge amount:

 Pro rata share

 The percentage of the expenses for the selected CRE account defined on the commercial lease's CRE Setup tab.

 Amount = Expense Account * Pro Rata Share %

 For example, if an expense account has expenses of $500 and the pro rata share percentage entered is 15 , the pro rata share amount is $75 ( that is 15% of $500 calculated as 500 * 0.15 ).

 Administrative fees

 The pro rata share value multiplied by the administrative fee percentage defined on the commercial lease's CRE Setup tab.

 Amount = Pro Rata Share * Administrative Fee %

 For example, if the pro rata share is $75 and the administrative fee is 10%, the fee is $7.50 (that is 10% of $75 calculated as 75 * 0.1 ).

 User percentage in tenant's user defined field

 Charge an amount based on the percentage specified in a tenant-type user defined field (UDF). The values in the selected field may range from 0 to 100 .)

 Warning

 For this option to work, you must create a numeric tenant-type UDF used specifically for tracking percentages, then enter a value for each tenant who receives a CRE charge. For more information, refer to Add a Numeric User Defined Field .

 -
 In the Amount section, in the Divide field, select an option below to determine how to split the CRE charges.

 Option
 Description

 Use an amount from property user defined field

 The total CRE charge is determined by a specified property -type user defined field (UDF). In the User Defined Fields field, select the desired UDF where the amount value is stored for the property.

 This option is not available if the Amount Distribution option to Use CRE setup of the selected lease is selected.

 Warning

 For this option to work, you must create a numeric property-type UDF used specifically for tracking percentages, then enter a value for that UDF on the property account. For more information, refer to Add a Numeric User Defined Field .

 Use an amount from tenant user defined field

 The total CRE charge is determined by a specified tenant -type user defined field (UDF). In the User Defined Fields field, select the desired UDF where the amount value is stored for the tenant.

 This option is not available if the Amount Distribution option to Use CRE setup of the selected lease is selected.

 Warning

 For this option to work, you must create a numeric tenant-type UDF used specifically for tracking percentages, then enter a value for that UDF on the tenant account. For more information, refer to Add a Numeric User Defined Field .

 Use expenses from

 The total CRE charge is determined by the previous expenses of the CRE accounts you select in the GL Account field over a selected period of time.

 Warning

 For this option to work, you must have expenses in the selected general ledger (GL) account(s) for the specified time frame.

 If selected, the following fields display and must be filled out. Each field is described below.

 GL Account

 The CRE expense account(s) for which to include expenses in the amount calculation.

 More Information

 This field displays only expense accounts that have the option Commercial recoverable expense (CRE) account checked.

 Method

 The time frame for which to examine the expenses in the specified GL accounts when calculating the CRE amount.

 Select Last year's expenses to examine the overall expenses accrued for the last twelve months prior to the date you selected when posting the charges.

 Select Month(s) ago to examine the overall expenses accrued for a specified number of months prior to the date you selected. In the Months field, enter the desired number of months.

 Select Annualized monthly average to examine the average monthly expenses accrued over the previous year.

 Basis

 The accounting basis by which the CRE totals are calculated:  Cash or Accrual .

 Increase by (Percentage)

 The percent amount by which to increase the total CRE amount based on the selected Method .

 Use budget expenses from

 The total CRE charge is determined by the budgeted expenses for the specified CRE general ledger (GL) accounts. In the GL Account field, select the GL account(s) to examine budgeted information.

 The budget selected here is based on the Post date . For example, if you want to use budget amounts from a January budget, the CRE recurring charges must be posted in that month. Charges posted on December 31st of the previous year still uses the December budget of the previous year.

 Warning

 For this option to work, you must have budgets established in your database for the selected accounts. For more information, refer to Budget (Page) .

 Use a specific amount

 The total CRE charge is determined by a set dollar amount. In the Amount field, enter the desired amount for the CRE charge.

 Warning

 This option is not available if the Amount Distribution option to Use CRE setup of the selected lease is selected.

 -
 Click Save .
The recurring charge is added to the tenant. Repeat these steps for any additional recurring charges needed for the account.
