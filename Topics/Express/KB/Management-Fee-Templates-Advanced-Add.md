# Add an Advanced Management Fee Template

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Management-Fee-Templates-Advanced-Add.htm

For each property that you manage for an owner, you have a specific structure of management fees that you collect. Manually applying these management fee settings to each property can be time-consuming. To streamline the process, you can create management fee templates—a collection of fee settings. Once a template is created, it can easily be assigned in the Add Property wizard, directly from the Management Fee Templates page for any properties that use that same fee structure, or on a property's Add Management Fee Setup pop-up, which eliminates the need to duplicate identical setups. In addition, any updates you make to templates are reflected on all properties that use those templates.

 The Advanced method is the original method by which Rent Manager calculates management fees. This method examines transaction activity of specified general ledger accounts over the period of time you define at the time you post fees. In addition to tenant and prospect payments, this method allows you to collect property-wide income, and percentages of net or total income. However, you may miss income owed to your company if a transaction is dated outside of the specified date range.

 Related Privileges

 Group
 Privilege
 Column

 Owners
 Management fee templates
 Add, View

 For more information, refer to Control User Access .

 Step 1: Create Template

 To add an advanced management fee template, do the following:

 -
 Go to arrow_forward Owners arrow_forward Management Fees arrow_forward Management Fee Templates .
The Management Fee Templates page displays.

 -
 Click Add Template .

 -
 Select Advanced and click OK .
A new advanced management fee template displays.

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

 In the Monthly and Per Posting Fees section, enter information in the available fields.

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

 Step 3: Set Up Chart Account Fees

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

 Step 4: Set Up Chart Account Transfers

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

 Step 5: Save the Template

 After all information is entered, click Save . The template is added to the menu on the left under the Advanced tab and can now be selected on the Add Property wizard when creating a new property or on the Add Management Fee Setup pop-up for existing properties.
