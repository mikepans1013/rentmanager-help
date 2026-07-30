# Property Fees Setup (Pop-Up)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Property-Fees-Setup.htm

The Fees Setup pop-up is used to create or edit the management fees for the currently selected property. If you have the same management fee structure for most of your owners, you can save time by setting up management fee templates to save fee selections.

 There are two types of management fees: Standard and Advanced . A standard management fee setup allows you to have greater flexibility in how often you post and provides greater transparency into the fee calculation. Fee percentages are calculated based on payments allocated to charge types, which means you can see the detail of every transaction that was included in your fee posting. An advanced management fee setup provides more extensive customization options and calculates fees against the activity of specific general ledger (GL) accounts over a fixed date range.

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Edit

 Management fee setup
 Add, Edit

 For more information, refer to Control User Access .

 To view or manage the Fees Setup pop-up, go to   arrow_forward Rental Info arrow_forward General arrow_forward Properties and select a property from the list. Then, on the action bar to the right, click   arrow_forward   Fees Setup .

 The fields that are available on this pop-up vary depending on the type of management fee setup selected in Management Fees Setup . To view past management fee setups for this property, click . To go back to more recent setups, click .

 At the top of the pop-up, the following fields are available:

 Field
 Description

 Management Fees Setup

 The current custom management fee setup or management fee template. This field cannot be changed.

 More Information

 To change a property's management fees to a new setup or template, enter the last date on which the setup applies in the Active End Date field. Then at the top, click Add Fees Setup and create a new setup that begins on the following day.

 Active Start Date

 The date on which this management fee setup begins for this property.

 Active End Date

 If applicable, the date on which this management fee setup ends for this property.

 Post Per Unit

 If checked, management fees are collected separately from each unit, meaning the management fee transactions are unit-specific.

 This option does not allow you to post management fees for a single rental unit, but changes your reports only to reflect how much you collected in management fees from each unit separately.

 More Information

 Rent Manager includes both active and inactive units when posting.

 Advanced

 If, in the Management Fees Setup field, you have <Custom Setup (Advanced)> or an Advanced management fee template selected, the following sections display.

 Monthly and Per Posting Fees

 This tile allows you to establish minimum and maximum fee amounts, as well as fee settings per unit.

 The fields in the Monthly Fee section establish fees that apply only when the time between the last post and current post includes the first day of the month. Each field is described below.

 Field
 Description

 Flat Fee

 A flat-rate fee that is collected on a per month basis when you post management fees. This fee applies each time your management fee postings include the first day of a month.

 For example, if you post from 1/1 to 3/31 , this fee posts three times (for 1/1, 2/1, and 3/1). If you post from 1/14 to 1/31 this fee does not post because the first day of the month does not fall within this date range.

 Per Unit Fee

 A monthly flat-rate fee that you collect for each unit at the managed property. This fee applies each time your management fee postings include the first day of a month.

 The fields in the Per Post Fee section apply every time you post management fees. Each field is described below.

 If the option Post Per Unit is checked for this fee setup, the Min Fee field is renamed to Per Unit Min Fee and the Max Fee field is renamed to Per Unit Max Fee .

 Field
 Description

 Min Fee

 The minimum amount of management fees to collect from this property per posting. When management fees are posted, if your calculated fees are below the minimum fee, the Per Post Min Fee amount is charged instead.

 Max Fee

 The maximum amount of management fees to collect from this ownership per posting. When management fees are posted, if your calculated fees are above the maximum fee, the Per Post Max Fee amount is charged instead.

 % of Net Income

 Collects a percentage of the property's net income since the last time you posted management fees.

 % of Total Income

 Collects a percentage of the property's total (gross) income since the last time you posted management fees.

 Per Occupied Fee

 This is a flat-rate fee that you collect for each occupied unit in the property at the time of the management fee posting. This fee posts every time you post management fees.

 Prorate Per Occupied Fee

 Check to prorate the Per Occupied Fee based on the percent of time that each unit was occupied since the last management fee posting.

 Chart Account Fees

 If you collect a percentage of certain income-based general ledger accounts, then use this tile to define your fee percentage for each account. For example, you may collect 5 percent of the rental income generated by the property and 100 percent of the late fees.

 To establish a chart account fee percentage, click Add Chart Account . Then enter the fee information into the available fields for each column described below.

 Column
 Description

 Account

 The GL account from which fees are collected on a percentage basis.

 Method

 Determines whether management fees are collected on a Cash or Accrual accounting basis.

 Percentage

 The percentage of the GL account that you collect as income.

 Pass Through

 With this option enabled, when you post management fees, Rent Manager reduces the GL account by the percentage you specified and transfers those funds to your management company.

 Property Expense Account

 The GL account tracks the management fee expense applied to the property for the percentage of the selected GL account.

 Related Preferences

 If <Default> is selected, the management fee uses the Expense Account established in system preferences. For more information, refer to Owner Settings (System Preferences) .

 Rent Manager Express processes the Percentage of each GL account and adds the calculated expense to the property using this expense account.

 Mgmt Income Charge Type

 The charge type to use to track the management fees charged for this GL account.

 Related Preferences

 If <Default> is selected, the management fee uses the Income Charge Type established in system preferences. For more information, refer to Management Company (System Preferences) .

 Chart Account Transfers

 A chart account transfer is a journal entry that transfers funds between two general ledger accounts each time you post management fees. The purpose of a chart account transfer is to reallocate a portion of funds between two GL accounts each time management fees are posted.

 For example, suppose you are required to withhold 5 percent of an owner's rental income as part of a state tax law. You can set up one of these transfers so that after each management fee posting, Rent Manager Express calculates 5 percent of the activity for your specified Rental Income account and then creates a journal entry to debit an expense account for the cost of this withholding and credits a liability account to hold the funds set aside for this tax requirement.

 Each transfer journal entry is linked to the management fee post that generated it. If you rollback the management fees for this owner, any journal entry created in this way will be automatically deleted. Furthermore, Rent Manager Express will not let you manually delete a journal entry created in this manner without also rolling back the linked management fee posting.

 Related Preferences

 To add a chart account transfer, the Show transfer grid when setting up management fees option must be Enabled in the management fee setup system preferences. For more information, refer to Management Fee Setup (System Preferences) .

 To create a chart account transfer, click   Add Chart and enter information into the following fields.

 Column
 Description

 Account

 The activity of this account for the period this management fee posting is used in conjunction with the Percent and Amount fields to determine how much money should be transferred between the specified Debit and Credit accounts.

 Transfer Total = Account activity * Percent + Amount

 In addition to selecting an individual GL account, Rent Manager Express also lets you create a chart account transfer based on the following aggregate (accumulated) activities:

 <Net Income>

 The total of the income minus expenses accrued by this ownership since the last posting.

 <Total Income>

 The total income accrued by this ownership since the last posting.

 <Management Fees>

 The total of all your management fees for that posting.

 Method

 Determines whether the activity of your specified Account should be examined on a Cash or Accrual basis when calculating how much money to transfer between the specified Debit and Credit accounts.

 Debit

 The GL account to debit for the calculated transfer total.

 Debits increase expense and asset accounts and decrease income, equity, and liability accounts.

 Credit

 The GL account to credit for the calculated transfer total.

 Credits increase income, equity, and liability accounts and decrease expense and asset accounts.

 Percent

 The percentage of the Account activity to transfer between the specified Debit and Credit GL accounts.

 Amount

 An additional amount to reallocate when transferring money between the specified Debit and Credit GL accounts.

 More Information

 Both the Percent and Amount columns are simultaneously applied against the activity of the selected Account to determine how much money to transfer.

 For example, if you select Rental Income for the Account that has an activity of $1,000 and you choose 10 percent ( Percent = 10 ) and an Amount of 50 , you will reallocate $150 in total funds—$100, which is 10 percent of $1,000, and another $50 for the Amount .

 Standard

 This method examines payments allocated to specific charge types since the last management fee posting. This method allows you to post fees as often as you like.

 Monthly and Per Posting Fees

 This tile allows you to establish minimum and maximum fee amounts, as well as fee settings per unit.

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

 Charge Type Fees

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

 Credit Allocations

 This tile allows you to collect management fees on credits of specific charge types that are applied to a different charge type specified in the Charge Type Fees section above. Credits that use the same charge type as the charge they are allocated to do not generate management fees.

 In the drop-down, select each credit charge type for which to collect management fees. The fee amount collected is based on the percentage established for the charge type of the charge the credit is applied to.

 For example, the charge type DP is selected on the Credit Allocations tile and the charge type RC is set to have 10% of fees collected on the Charge Type Fees tile. If a tenant's $1,000 security deposit (using the charge type DP ) is refunded and allocated towards a $1,000 rent charge (using the charge type RC ), then the management fee would receive 10% of that credit ($100).
