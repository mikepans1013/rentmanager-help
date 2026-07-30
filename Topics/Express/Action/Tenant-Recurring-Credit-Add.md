# Add a Recurring Tenant Credit

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Tenant-Recurring-Credit-Add.htm

You can give your tenants credits for various reasons, such as when they refer a new tenant or move in during a move in special where rent is discounted. To save you time and effort, Rent Manager allows you to set up these credits as recurring so that they start and end automatically.

 For example, if you have a special promotion for new tenants that is active for three months, you can create a recurring tenant credit that posts at the same time every month and ends after reaching the third month.

 More Information

 Recurring credits post at the same time as recurring charges. For more information, refer to Post Recurring Charges .

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Allow to credit tenants
 Enabled

 Tenants/Prospects
 Tenants
 View

 Recurring Charges/Market Rent
 Recurring charges
 Add

 For more information, refer to Control User Access .

 To add a recurring tenant credit, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select the tenant receiving the credit.
The tenant's details page displays.

 -
 On the Recurring Charges tile, click Add Charge .
The Recurring Charge Details pop-up displays.

 -
 Enter the following information in the available fields:

 Field
 Description

 Unit

 The unit to which the credit is associated.

 Charge Type

 The charge type associated with this recurring credit. If you need the credit to impact your expenses, select a charge type linked to an expense GL account. In the same sense, if you want the credit to count as income, select a charge type associated with a income GL account.

 Amount

 The amount, preceded by the minus symbol, credited to the tenant. For example, to offer a tenant a $200 move in credit, enter -200 .

 Calculation

 An optional custom calculation that uses scripting to calculate the amount for the tenant's credit. For example, if you are offering a move in promotion that discounts the current rent charge by half, enter [PostedCharges("RC")*.5] .

 Frequency

 The frequency at which the recurring credit posts to the tenant account. For example, a frequency of 1 means this recurring credit posts once every day, week, or month, depending on the option selected in the tenant General tile in the Rent Period field.

 From

 The date on which the recurring credit begins posting to the tenant's account.

 If no date is entered, the credit is considered infinite, and begins posting to the account the next time recurring charges are posted.

 To

 The date on which the recurring credit expires and no longer posts to the tenant's account.

 Similar to the From date, if no date is entered, the credit is considered infinite, and is applied whenever recurring charges are posted.

 Comment

 A descriptive phrase or note regarding the recurring credit. The comment displays on the View Recurring Charges page.

 Comments display on each posted credit and those credits display on tenant statements. Keep this in mind to help determine how much or how little information you want to display when generating tenant statements that contain these recurring credits.

 -
 In the Credit Allocations section, if needed, allocate the credit across multiple charge types. Any credit amounts not allocated to a new Charge Type are allocated to the initial Charge Type selected outside of the Credit Allocations section. To allocate the amount to an additional Charge Type , click Add Item and enter the following information:

 Field
 Description

 Charge Type

 The charge type associated with the allocated amount.

 Amount

 The amount allocated to the charge type selected.

 -
 Click Save .
The recurring credit can now start posting to your tenant's account.
