# Calculate Owner Reserve Amounts

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Owners-Reserve-Amounts.htm

An owner reserve amount is the minimum amount of money that must remain in the bank to cover expenses for a property. When the option to Balance reserves across ownerships is set up, Rent Manager reviews all of the owner's properties, calculates the minimum bank requirements—including those at $0.00—and transfers funds between properties (if necessary) in order to maintain those minimum bank requirements for each property. Minimum bank requirements consist of reserve amounts and security deposits (if selected to withhold from the owner).

 When you set a reserve balance, that dollar amount becomes the baseline for future owner distributions, statements, and bank balances. For example, if an owner distribution pays out $6,000 when the owner has a $1,000 reserve amount, the pay out is reduced to $5,000 to ensure that their bank account maintains the minimum required funds. Additionally, if a check written from one of an owner's properties would put its bank balance below the reserve amount, funds are transferred from another property to maintain that reserve amount.

 Related Preferences

 Before you can utilize automatic owner reserve balancing, you need to enable the option in system preferences and establish additional default settings. For more information, refer to Owner Check Template (System Preferences) .

 Warning

 Balance reserves are used only when all of the owner’s properties use the same bank account, as Rent Manager creates a journal entry to balance reserves only when the same bank is used.

 Set Up Owner Reserve Amounts

 Related Privileges

 Group
 Privilege
 Column

 Owners
 Owners
 View, Edit

 Properties/Units
 Properties
 View, Edit

 For more information, refer to Control User Access .

 To utilize owner reserves and account balancing, you need to enter reserve amounts for each property and define how owner distributions are calculated.

 Step 1: Enter Property Reserve Amounts

 From a property's details page, you can establish the minimum (or reserve) amount of money that must remain in the bank to cover expenses for each property. To establish reserve amounts, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select the owner's property.
The property's details page displays.

 -
 On the action bar to the right, select arrow_forward Owners .

 -
 In the Primary Owner field, select the owner that is the main contact.

 -
 Click Add Owner or edit an existing owner and enter information in the following columns:

 Column
 Description

 %

 The percentage of the property belonging to this owner.

 End

 The date on which the owner's contract with this company ends. When an owner's contract ends, rather than delete them from this page, enter the end date of their contract. This maintains your records related to the owner.

 Owner

 The name of each owner with an ownership stake in this property.

 Start

 The date on which the owner's contract with this company begins. This is also the date the owner is considered active in Rent Manager .

 -
 In the Reserve column, enter the minimum amount of money that must remain in the property's Default Bank to cover expenses.

 -
 If needed, add any additional owners and their reserve amounts.

 -
 Click Save .
The reserve limit(s) for each property owner are established and the pop-up closes.

 Step 2: Establish Owner Check Setups

 Owner distribution settings also need to be set up for each property. For example, you can determine whether or not held security deposits are excluded from distribution payments or if there are specific GL accounts that should have their current balance or date range activity excluded from an owner payment.

 To establish the owner check setup for a property, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select the owner's property.
The property's details page displays.

 -
 On the action bar to the right, select arrow_forward Owner Check Setup .
The Owner Check Setup pop-up displays.

 -
 To display an individual line item for each unit in the owner's portfolio on the owner's distribution checks for the property, select Calculate Owner Pay by Unit .

 -
 In the Setup section, enter information in the following fields:

 Field
 Description

 Name

 The name of the owner check setup template to use for this property. Alternatively, select <Custom Setup> to configure a check setup specific to this property. For more information, refer to Owner Check Setup Templates (Page) .

 Subtract from owner checks

 There are two options available to specify what is removed from owner pay in this section. If you selected a check setup template, these selections are determined by the selected template's settings.

 Prepaid receivables

 Any deposited prepayments are excluded from the owner payout.

 Security deposits held

 Prevents Rent Manager from paying out the owner security deposits that should be held back from an equity distribution.

 Warning

 Do not enable this option if you intend to use this setup for properties that hold tenant security deposits in a separate bank account.

 -
 If you selected <Custom Setup> , in the Accounts to Exclude from Check Posting , establish any GL accounts whose values should be withheld from the distribution calculation by clicking Add Account and entering information in the following columns:

 Column
 Description

 Account

 The GL account to be excluded from owner distributions.

 Accounting Method

 If the value of this GL account is calculated on a cash- or accrual-accounting basis.

 Balance or Activity

 The extent of exclusion for the GL account.

 Activity

 Excludes only the ending activity of this GL account. The date range of this activity goes from one day after your last distribution to the property owner to the date of your new distribution.

 Balance

 Excludes the full balance of this GL account as of the date of the owner distribution.

 -
 Click Save .
The property's owner check settings are established.

 Balancing Reserves Across Ownerships

 To set up owners so their reserve amounts are balanced across their properties, you need to ensure that the Balance reserves across ownerships option is enabled for the owner, which can be done in two places:

 Option
 Description

 System preferences

 If Balance reserves across ownerships is enabled in system preferences, the option is automatically enabled for all owners unless the setting is manually overridden on the owner's account. For more information, refer to Owner Check Template (System Preferences) .

 Owner account override

 If Balance reserves across ownerships is disabled in system preferences, the option needs to be enabled on each applicable owner's account. From the owner's details page in the Check Setup tile, select Override Default and then check Balance reserves across ownerships . For more information, refer to Owner Details (Page) .

 The following example demonstrates how Rent Manager balances reserves across a portfolio. Properties must use the same Default Bank in order for reserve balancing to work.

 An owner has both Property A and Property B. Security deposits are held in a separate bank, so subtracting Security deposits held from the bank balance when writing owner checks is not enabled.

 If Property A has a required reserve of $500 and a bank balance of $750 and Property B has a reserve of $500 and a bank balance of just $450, Rent Manager calculates the profits of each property during the owner distribution process as follows:

 -
 Property A's profit: $750 balance – $500 requirement = $250

 -
 Property B's profit: $450 balance – $500 requirement = $-50

 When the owner check is calculated, Rent Manager creates a journal entry to transfer $50 from Property A to Property B using the defined bank account. The remaining $200 in Property A (after Property A reserves are subtracted) are then distributed to the owner.

 More Information

 If security deposits are held in the operating bank account, they are considered part of the cash requirements, and subtract Security deposits held from the bank balance when writing owner checks should be enabled even if there is no other minimum reserve amount established on the property's Owners pop-up.
