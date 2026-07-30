# Add a Unit Type Recurring Charge

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Unit-Type-Recurring-Charge-Add.htm

Recurring charges are templates for charges you will post to tenant accounts at regular intervals, such as monthly rent or weekly garbage fees. Recurring charges can be set at the property, unit type, unit, and tenant levels based on the charge. Recurring charges set on the property, unit type, or unit are automatically inherited by the tenant.

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Unit types
 View, Edit

 Recurring Charges/Market Rent
 Recurring charges
 Add

 For more information, refer to Control User Access .

 To add a new recurring charge to a particular unit type, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Unit Types and select a unit type from the list.
The unit type's details page displays.

 -
 On the action bar to the right, select arrow_forward Add Recurring Charge .

 -
 Enter the desired information about the recurring charge.

 Field
 Description

 Charge Type

 The charge type to use when this recurring charge is posted. The posted charge impacts the general ledger (GL) account linked to the charge type.

 Amount

 The total dollar amount of the desired recurring charge.

 Calculation

 Instead of entering an Amount , enter a custom calculation to determine the amount of the charge. For example, for a property with a marina where tenants can dock their boats, you could assess rent based on the size of the boat.

 When recurring charges post, Rent Manager calculates the appropriate amount for the charge.

 Frequency

 How often this recurring charge posts to the tenant account.

 The Frequency is calculated as the number of months, weeks, or days that should elapse between each posting of the recurring charge. The duration of month, week, or day is determined by the tenant's detail page in the Rent Period field.

 For example, a tenant with a Monthly rent period, a frequency of 1 means this recurring charge posts once every month, and 3 means it posts once every three months.

 If no value is specified, the Frequency defaults to 1 .

 From

 Establishes when this recurring charge begins posting to the tenant. If no date is entered, the charge is considered infinite, and begins posting to the account the next time recurring charges are posted.

 To

 Establishes when this recurring charge expires and stops posting. If no dates are entered, the charge is considered infinite, and is posted perpetually.

 Comment

 A phrase or note to show on the View Recurring Charges pop-up, such as why you are adding the charge.

 -
 To finish, click Save & Close , or to add additional recurring charges, click Save & New .
The new recurring charge(s) is added to the unit type.
