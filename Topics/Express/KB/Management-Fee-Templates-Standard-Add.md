# Add a Standard Management Fee Template

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Management-Fee-Templates-Standard-Add.htm

For each property that you manage for an owner, you have a specific structure of management fees that you collect. Manually applying these management fee settings to each property can be time-consuming. To streamline the process, you can create management fee templates—a collection of fee settings. Once a template is created, it can easily be assigned in the Add Property wizard, directly from the Management Fee Templates page for any properties that use that same fee structure, or on a property's Add Management Fee Setup pop-up, which eliminates the need to duplicate identical setups. In addition, any updates you make to templates are reflected on all properties that use those templates.

 A standard management fee setup allows you to collect a specified percentage of selected charge types, and set certain charge types as 100 percent or a partial pass through.

 Related Privileges

 Group
 Privilege
 Column

 Owners
 Management fee templates
 Add, View

 For more information, refer to Control User Access .

 Step 1: Create Template

 To add a standard management fee template, do the following:

 -
 Go to   arrow_forward Owners arrow_forward Management Fees arrow_forward Management Fee Templates .
 The Management Fee Templates page displays.

 -
 Click Add Template .

 -
 Select Standard and click OK .
A new standard management fee template displays.

 -
 At the top of the template, enter the following information:

 Field
 Description

 Management Fee Template Name

 The name that displays in the Property Add Wizard or on an existing property's Add Management Fee Setup pop-up.

 Active

 Indicates that the template can be selected when creating a new property. This option is checked by default.

 Post Per Unit

 If enabled, Rent Manager collects management fees separately from each unit, meaning the management fee transactions are unit specific.

 This does not let you post management fees to a single rental unit; rather, it changes your reports to reflect only how much you collected in management fees from each unit separately.

 More Information

 Rent Manager includes both active and inactive units when posting.

 Step 2: Enter Monthly and Per Posting Fees

 In the Monthly and Per Posting Fees section, enter the posting information.

 The fields in the Monthly Fee section establish fees that apply only when the time between the last post and current post includes the first day of the month. Each field is described below.

 If the option Post Per Unit is checked for this fee setup, the Min Fee field is renamed to Per Unit Min Fee and the Max Fee field is renamed to Per Unit Max Fee .

 Field
 Description

 Min Fee

 The minimum amount of management fees to collect from this property per calendar month. When management fees are posted, if your calculated fees are below the minimum fee, the Monthly Min Fee amount is charged instead.

 If the first posting of the month is less than the Monthly Min Fee and an additional posting is made in the same month, an adjustment for the difference is automatically created in Rent Manager .

 For example, the Monthly Min Fee is set to 200 , and the first posting of the month charges $150 based on 10 percent of rent collected. As a result, $50 is posted as an additional amount to cover the minimum.

 If another posting is made in that same month for $100, which exceeds the minimum when combined with the previous posting, the $50 added to cover the minimum fee in the first posting is reversed.

 Alternatively, if another posting is made in that same month for $25, which does not exceed the minimum when combined with the previous posting, the difference of $25 from the $50 added to cover the minimum fee in the first posting is reversed.

 Max Fee

 The maximum amount of management fees to collect from this ownership per calendar month. When management fees are posted, if your calculated fees are above the maximum fee, the Monthly Max Fee amount is charged instead. If multiple postings are made in the same month, the sum of those postings will not exceed the Monthly Max Fee .

 Flat Fee

 A flat-rate fee that is collected on a per month basis when you post management fees. This fee applies each time your management fee postings include the first day of a month.

 For example, if you post from 1/1 to 3/31 , this fee posts three times (for 1/1, 2/1, and 3/1). If you post from 1/14 to 1/31 this fee does not post because the first day of the month does not fall within this date range.

 Per Unit Fee

 A monthly flat-rate fee that you collect for each unit at the managed property. This fee applies each time your management fee postings include the first day of a month.

 The fields in the Per Post Fee section apply every time you post management fees. Each field is described below.

 Field
 Description

 Per Occupied Fee

 A flat-rate fee that you collect for each occupied unit in the property at the time of the management fee posting. This fee posts every time you post management fees.

 Prorate Per Occupied Fee

 Prorates the Per Occupied Fee based on the percent of time that each unit was occupied since the last management fee posting.

 Step 3: Set Up Charge Type Fees

 If you collect a percentage of certain transactions or collect any fees as pass-through, this section allows you to define your fee percentage to collect for each charge type. For example, you may collect 10 percent of the Rent Charge (RC) charge type transactions and 50 percent of the Parking Fee (PARK) charge type transactions for the property's tenants and/or prospects.

 To establish a charge type fee percentage, click Add Charge Type . Then enter the fee information into the available fields for each column described below.

 Column
 Description

 Charge Type

 The charge type on which you collect fees.

 Percentage

 A percentage of the charge type transactions that you collect as income.

 Pass Through

 With this option enabled, when you post management fees, Rent Manager reduces the general ledger (GL) account by the percentage you specified and transfers those funds to your management company.

 Related Preferences

 The fees are transferred from the GL account specified in the Pass Throughs Held Account field of system preferences. For more information, refer to Owner Settings (System Preferences) .

 Property Expense Account

 The GL account that tracks the management fee expense applied to the property for the percentage of the selected GL account.

 Related Preferences

 If <Default> is selected, the management fee uses the Expense Account established in system preferences. For more information, refer to Owner Settings (System Preferences) .

 Rent Manager processes the Percentage of each GL account and adds the calculated expense to the property using this Property Expense Account .

 Management Income Charge Type

 The charge type used to track the management fees charged for this GL account.

 Related Preferences

 If <Default> is selected, the management fee uses the Income Charge Type established in system preferences. For more information, refer to Management Company (System Preferences) .

 Step 4: Set Up Credit Allocations

 This tile allows you to collect management fees on credits of specific charge types that are applied to a different charge type specified in the Charge Type Fees section above. Credits that use the same charge type as the charge they are allocated to do not generate management fees.

 In the drop-down, select each credit charge type for which to collect management fees. The fee amount collected is based on the percentage established for the charge type of the charge the credit is applied to.

 For example, the charge type DP is selected on the Credit Allocations tile and the charge type RC is set to have 10% of fees collected on the Charge Type Fees tile. If a tenant's $1,000 security deposit (using the charge type DP ) is refunded and allocated towards a $1,000 rent charge (using the charge type RC ), then the management fee would receive 10% of that credit ($100).

 Step 5: Save the Template

 After all information is entered, click Save . The template is added to the menu on the left under the Standard tab and can now be selected on the Add Property wizard when creating a new property or on the Add Management Fee Setup pop-up for existing properties.
