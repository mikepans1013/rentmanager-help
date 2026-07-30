# Ownership Transfer Wizard

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Ownership-Transfer-Wizard.htm

When you need to transfer a property between owners, such as when an owner sells their ownership stake in a property, you can use the Ownership Transfer Wizard to easily transfer the ownership while maintaining data and history from the original ownership. When you transfer ownerships, the original (source) property is archived in Rent Manager , and a new property is created for the new owner, which maintains separate financial records of each.

 Transferring ownership results in the following:

 -
 A new property is created with the data from the source property.

 -
 New units are created with the data from the source units.

 -
 Tenants and prospects associated with the source property are transferred to the new property and units.

 Related Privileges

 When you process an ownership transfer, many different aspects of your database are updated to account for the information.

 Group
 Privilege
 Column

 Properties/Units
 Properties
 Add, View, Edit

 Owners
 Ownership Transfer Wizard
 Enabled

 Letter/Email Templates/Reports/Packets
 Entity templates/packets
 View, Edit

 Privileges in the following sections take into consideration features and data that might be impacted during the transfer process. Not transfers require all the privileges listed below.

 In addition, you need the Entity templates/packets privilege for the entity types affected by the ownership transfer (e.g. Owner templates/packets ).

 For more information, refer to Control User Access .

 Warning

 The transfer of an ownership cannot be rolled back, due to the separation of financial records from the source property to the new property. If you have any questions during this process, please stop and call Rent Manager support.

 If you use per unit Rent Manager licensing, you must have enough available licenses for both the units at the new property and the units at the historical copy of the property in order to perform the transfer. Once complete, you can then inactivate the licenses for the units at the historical property.

 Step 1: Select a Property Ownership to Transfer

 Related Privileges

 Group
 Privilege
 Column

 Owners
 Owners
 View, Edit

 For more information, refer to Control User Access .

 In this section, select the existing owner and property to transfer.

 To select the owner and property to transfer, do the following:

 -
 Enter the Property Transfer Date . This is the date on which the old ownership ends and the new one begins in Rent Manager .

 -
 Select the Owner whose ownership is ending.

 -
 Select the Ownership property to transfer.

 -
 To control how Rent Manager ends the ownership, choose from the following options:
 Option Description
 Set the property inactive
 Makes the source property inactive after the transfer is completed. Use this option if you do not expect to do anything further (such as entering data or transactions) with the original property after the transfer.

 Set the ownership contract end date
 Sets the Property Transfer Date as the end date of the previous owner's contract. Use this option if you paid all management fees and performed a final owner distribution for the previous property owner.

 Step 2: Enter a New Property and Owner

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Units
 Add

 Property Bank Settings
 View, Edit

 For more information, refer to Control User Access .

 In this section, enter the name, default bank account, and owner(s) of the new property.

 To create the new ownership, do the following:

 -
 Enter the Name and Short Name to use for the new property.

 -
 Select the new property's Default Bank .

 -
 Select the Primary Owner of the new ownership and enter the Percentage stake they hold in this ownership.
If the new property has more than one owner, click   Add Ownership to add additional owners and set their ownership Percentage .

 Step 3: Set Up Management Fees

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units

 Management fee setup

 Add

 Recurring Charges/Market Rent
 Recurring charges
 Add, Edit

 For more information, refer to Control User Access .

 In this section, set up the new ownership's management fees.

 There are two options: standard and advanced. A standard setup offers greater flexibility for posting fees to owners and provides greater transparency into fee calculations. In a standard setup, fee percentages are calculated based on payments allocated to charge types, which means you can see the detail of every transaction that was included in your fee posting. An advanced setup provides more extensive customization options and calculates fees against the activity of specific general ledger (GL) accounts over a fixed date range.

 Option 1: Standard

 To create a standard management fee setup for the new ownership, do the following:

 -
 In the Method drop-down, select Standard .

 -
 In the remaining fields at the top of the section, enter the following information:

 Field
 Description

 Templates

 Select an existing management fee template, or select < Custom Setup > to create a new management fee setup.

 Start

 The date on which the management fee setup takes effect for the new ownership.

 End

 The date on which the management fee setup ends for the new ownership.

 -
 In Management Fees and Percentages , enter the following information:

 Field
 Description

 Monthly Min Fee

 The minimum dollar amount of management fees to collect from this property each month. If your calculated fees are below this amount, the amount in this field is charged instead.

 Monthly Max Fee

 The maximum dollar amount of management fees to collect from this property each month. If your calculated fees are above this amount, the amount in this field is charged instead.

 Monthly Flat Fee

 The dollar amount collected on a per month basis when you post management fees. This fee applies only when your management fee postings include the first day of a month. For example, if you post from 1/1/ 2026 to 3/31/ 2026 , this fee posts three times. If you post from 1/14/ 2026 to 3/31/ 2026 , this fee posts twice because the first day of January does not fall within this date range.

 Monthly Per Unit Fee

 The dollar amount collected on a per month basis for each unit when you post management fees. This fee applies only when your management fee postings include the first day of a month.

For example, if you enter 5 in this field and post management fees for a property with 100 properties, a $500 charge is added to the management fee.

 Per Occupied Fee

 The dollar amount collected for each currently occupied unit when you post management fees. This fee applies every time management fees are posted.

 Prorate Per Occupied Fee

 Prorates the Per Occupied Fee dollar amount based on the number of days each unit was occupied since the last management fee posting.

 Post Per Unit

 Collects management fees separately from each unit, meaning the management fee transactions are unit specific.

 This option does not allow you to post management fees for a single rental unit, but changes your reports to reflect how much you collected in management fees from each unit separately.

 More Information

 Rent Manager includes both active and inactive units when posting.

 -
 Click Add Charge Type and enter the following information. Repeat for as many charge types as needed for the setup.

 Field
 Description

 Charge Type

 The GL account from which fees are collected on a percentage basis.

 Percentage

 The percentage of the GL account's income that is collected.

 Property Expense Account

 The GL account that tracks the management fee expense applied to the property for the percentage of the selected GL account.

 Mgmt Income Charge Type

 The charge type associated with the owner's management fee charge.

 -
 In Pass Through Charges , select the transaction charge type(s) for which 100 percent of income is collected as a pass through and transferred directly to the management company. Click Add Charge Type and select a charge type from the drop-down. Repeat for as many charge types as needed for the setup.

 Option 2: Advanced

 To create an advanced management fee setup for the new ownership, do the following:

 -
 In the Method drop-down, select Advanced .

 -
 In the remaining fields at the top of the section, enter the following information:

 Field
 Description

 Templates

 Select an existing management fee template, or select < Custom Setup > to create a new management fee setup.

 Start

 The date on which the management fee setup takes effect for the new ownership.

 End

 The date on which the management fee setup ends for the new ownership.

 -
 In Management Fees and Percentages , enter the following information:

 Field
 Description

 Per Post Min Fee

 The minimum dollar amount of management fees to collect from this property each time fees are posted. If your calculated fees are below this amount, the amount in this field is charged instead.

 Per Post Max Fee

 The maximum dollar amount of management fees to collect from this property each time fees are posted. If your calculated fees are above this amount, the amount in this field is charged instead.

 Monthly Flat Fee

 The dollar amount collected on a per month basis when you post management fees. This fee applies only when your management fee postings include the first day of a month. For example, if you post from 1/1/ 2026 to 3/31/ 2026 , this fee posts three times. If you post from 1/14/ 2026 to 3/31/ 2026 , this fee posts twice because the first day of January does not fall within this date range.

 Monthly Per Unit Fee

 The dollar amount collected on a per month basis for each unit when you post management fees. This fee applies only when your management fee postings include the first day of a month.

For example, if you enter 5 in this field and post management fees for a property with 100 properties, a $500 charge is added to the management fee.

 % of Net Income

 The percentage of the property's net income since the last time you posted management fees as calculated on a cash basis.

 % of Total Income

 The percentage of the property's total (gross) income since the last time you posted management fees as calculated on a cash basis.

 Per Occupied Fee

 The dollar amount collected for each currently occupied unit when you post management fees. This fee applies every time management fees are posted.

 Prorate Per Occupied Fee

 Prorates the Per Occupied Fee dollar amount based on the number of days each unit was occupied since the last management fee posting.

 Post Per Unit

 Collects management fees separately from each unit, meaning the management fee transactions are unit specific.

 This option does not allow you to post management fees for a single rental unit, but changes your reports to reflect how much you collected in management fees from each unit separately.

 More Information

 Rent Manager includes both active and inactive units when posting.

 -
 In Chart Account Percentages , click Add Chart Account and enter the following information. Repeat for as many GL accounts as needed for the setup.

 Field
 Description

 Account

 The GL account from which fees are collected on a percentage basis.

 Method

 The accounting basis used to calculate how much money is collected from the GL account.

 Percentage

 The percentage of the GL account's income that is collected.

 PT

 Collects the GL account's income as a pass through directly to the management company. The GL account balance is reduced by the percentage you specified, and those funds are transferred to your management company.

The Property Expense Account defined in the next column is not used when this option is enabled.

 Property Expense Account

 The GL account that tracks the management fee expense applied to the property for the percentage of the selected GL account.

 Mgmt Income Charge Type

 The charge type associated with the owner's management fee charge.

 -
 In Chart Account Transfers , click Add Chart Account and enter the following information. Repeat for as many GL accounts as needed for the setup.

 Field
 Description

 Account

 The GL account from which a dollar amount is transferred. The activity of this account for the period this management fee posting is used in conjunction with the Percent and Amount fields to determine how much money should be transferred between the specified Debit and Credit accounts.

Alternatively, you can create a chart account transfer based on the aggregate (accumulated) activities described below.

 <Net Income>

 The total of the income minus the expenses from this ownership since the last posting.

 Net Income = Total Income - Expenses

 <Total Income>

 The total income from this ownership since the last posting.

 <Management Fees>

 The total of all your management fees for that posting.

 Method

 The accounting basis used to calculate how much money to transfer between the specified Debit and Credit accounts.

 Debit

 The GL account to debit for the calculated transfer total. Debits increase expense and asset accounts and decrease income, equity, and liability accounts.

 Credit

 The GL account to credit for the calculated transfer total. Credits increase income, equity, and liability accounts and decrease expense and asset accounts.

 Percent

 The percentage of the Account activity to transfer between the specified Debit and Credit GL accounts.

 Amount

 An additional flat amount to reallocate when transferring money between the specified Debit and Credit GL accounts.

 Both the Percent and Amount fields are applied along with the Account activity to determine how much money to transfer.

 For example, the GL account has an activity of $1,000, the Percent field is set to 10 , and the Amount field is set to 50 . In this case, $150 in total funds are reallocated—$100, which is 10 percent of $1,000, and another $50 entered in the Amount field.

 Step 4: Transfer Open Charges

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Override accounting close date
 Enabled

 Tenants/Prospects
 Modify lease start/end dates before accounting close
 Enabled

 Create multiple leases on a tenant
 Enabled

 Receivables
 Tenant transactions
 Add

 Allow to backdate charges
 Enabled

 Allow to credit tenants
 Enabled

 Change late fees
 Enabled

 For more information, refer to Control User Access .

 In this section, open (unpaid or partially paid) charges that have been assessed to tenants and prospects associated with the source property can be moved to the new property. A credit is applied to the tenant or prospect accounts at the source property, which clears their balances. Then, a replacement charge is created for the new property.

 To determine how open charges at the old property are transferred to the new property, choose from the following options:

 Option
 Description

 Use an offsetting credit (negative charge) to transfer the charge's remaining open balance as of

 Transfers open charges to the new property by adding a credit to the tenant or prospect account on the source property and a replacement charge on the account at the new property that uses the same date as the original charge.

 Select Set Date to enter the date on which the transfer takes place, or select Charge Date to give the credit the same date as the charge it replaces.

 Replace the open charge's associated lease with the new lease

 Updates the property (and unit, if specified) associated with the charge on the tenant or prospect account to the new property. Charges that have payments or credits already allocated do not have their property updated.

 Step 5: Transfer Security Deposits

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Transfer security deposits
 Enabled

 For more information, refer to Control User Access .

 In this section, determine how security deposits transfer from the source property to the new property. You can set up the transfer so that the original owner keeps the security deposit funds, or you can transfer funds between owners.

 To transfer security deposits, choose from the following options:

 Option 1: Owner Transfers Security Deposit Funds

 If the previous owner is transferring the security deposit funds to the new owner, do the following:

 -
 Select Transfer security deposit liability and move funds through a bank transfer .

 -
 Choose one of the following options to determine how the transfer is recorded:

 Option
 Description

 Journal

 Use a journal entry to document the transfer of funds.

 Check and Deposit

 Write a check for the amount of the security deposits from the previous owner's bank and deposit it in the new owner's bank.

 Check

 Write a check for the amount of the security deposits.

 -
 If you selected Journal or Check and Deposit , select the  Source Bank , where the previous owner's security deposits are kept, and the Destination Bank , where the security deposits are deposited for the new owner.

 Option 2: Owner Keeps Security Deposit Funds

 If the previous owner is keeping the security deposit funds, and the new owner is assuming responsibility for the repayment of those funds, do the following:

 -
 Select Transfer security deposit liability and use other equity accounts for the offsetting journal entry .

 -
 Select the Source Account . This is the equity-type general ledger account that is credited to offset the security deposit liability that was debited on the source property.

 -
 Select the Destination Account . This is the equity-type general ledger account that is debited to offset the security deposit liability that was credited on the new property.

 Step 6: Finish the Transfer

 Related Privileges

 If property groups, issues, or recurring issues are linked to the source owner's properties, the associated privileges below are required.

 Group
 Privilege
 Column

 Properties/Units
 Property groups
 Add

 Service Manager
 Issues
 View, Edit

 Recurring issues
 View, Edit

 For more information, refer to Control User Access .

 After all information is entered, you can review and finalize the transfer.

 -
 In the Summary section, review the information you entered in the Ownership Transfer Wizard .

 -
 When you are done, click Finish and confirm on the pop-up.
The ownership transfer is complete, and an Ownership Transfer Log report generates to keep for your records.

 More Information

 After the transfer is complete, there are some tools and features (such as task automations, bills, automated notifications, jobs, violation code groups, and application templates) that must have the new property added or assigned. To view details on all information that does or does not transfer with the newly created property, refer to Ownership Transfer Wizard Results .
