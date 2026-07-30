# Set Up Owner Distributions

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Owners-Distributions-Set-Up.htm

Fee-based management companies manage properties on behalf of owners in exchange for management fees. After managed ownerships' receivables (including management fees) are collected and expenses are paid, you can perform a full equity distribution for each of your owners. Rent Manager uses this formula to determine the maximum payout for each owner: (Bank Balance – Withholdings) * Ownership % ± Balanced Reserves .

 Before you can utilize Rent Manager 's automatic calculations for owner payouts, you need to establish default options in system preferences, along with property- and owner-specific settings.

 Step 1: Set Default Options in System Preferences

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 Owners
 Owners
 View

 For more information, refer to Control User Access .

 By setting up owner-related system preferences, you can set the default account for drawing funds and determine how owner distributions are handled.

 Owner Settings

 To set up the default draw account for owner distribution, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Owners arrow_forward Owner Settings .

 -
 In the Draw Account drop-down list, select the default general ledger (GL) account to track distributions paid out to an owner. This is typically linked to an equity account (e.g., 3002 Owner Distribution ).

 -
 Click Save .
The default draw account for owner distributions is established for future distributions.

 Owner Check Setup

 To set up the default options for owner distribution checks, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Owners arrow_forward Owner Check Template .

 -
 Enter information in the following fields:

 Preference
 Description

 Balance reserves across ownerships

 Uses funds from an owner's profitable properties to cover other owned properties that are operating with a negative or below minimum reserve balance.

 Warning

 Balance reserves are used only when all the owner’s properties use the same bank account. Rent Manager creates a journal entry to balance reserves only when the same bank is used.

 For example, an owner owns both Property A and B. Property A has a required reserve of $500 and a bank balance of only $300, while Property B has a required reserve of $500 and a bank balance of $1100. With this option enabled, when you go to make an owner distribution, Rent Manager first transfers $200 (via journal entry) from Property B over to Property A to help that property reach its required reserve of $500. The remaining funds in Property B (after Property B reserves are considered) are then distributed to the owner. This means $400 is distributed to the owner.

 If this option is unchecked, Rent Manager simply pays out the remaining balance of Property B while Property A continues to operate in debt.

 With this option enabled, the following fields become available:

 Balance Account

 The GL account to track the transfer of reserve funds between properties. This is typically linked to an equity account (e.g., 3005 Reserves ) and the transfer is performed through a journal entry.

 Balance Memo

 An optional memo for the journal entries created by Rent Manager to transfer reserve funds between properties.

 Default Check Template

 The system-level default check distribution setup. By selecting a default setup, other preferences below populate automatically. For more information, refer to Owner Check Setup Templates (Page) .

 More Information

 The Default Check Template option can be overridden on each property's Owner Check Setup pop-up. For more information, refer to Property Owner Check Setup (Pop-Up) .

 Separate checks by ownership

 If enabled, all owners who have two or more properties which use the same bank account receive a separate check for each property.

 -
 Click Save .
The default settings for owner distribution checks are established.

 Step 2: Establish Property Settings

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Edit

 For more information, refer to Control User Access .

 With these default options established in system preferences, you need to set up distributions settings on the property, including entering the reserve amount for each owner, selecting a default bank account,

 Add Owner(s)

 To set up a property's ownership information, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select the owner's property.
The property's details page displays.

 -
 On the action bar to the right, select arrow_forward Owners .
The Owners pop-up displays.

 -
 In the Primary Owner field, select the owner that is the main contact.

 -
 Click Add Owner and enter information in the following columns:

 Column
 Description

 %

 The percentage of the property belonging to this owner. If there is only one owner, enter 100 . If there are multiple owners, the total percentage must equal one hundred percent.

 End

 The date on which the owner's contract with this company ends. When an owner's contract ends, rather than delete them from this page, enter the end date of their contract. This maintains your records related to the owner.

 Owner

 The name of each owner with an ownership stake in this property.

 Reserve

 The minimum amount of money that must remain in the property's Default Bank to cover expenses. This reserve amount can have an impact on owner distributions.

 More Information

 If the owner has the option Balance reserves across ownership enabled on their account, the owner's profitable properties cover any other properties they own that are operating with a reserve balance that is below the set minimum or in the negative. For more information, refer to Owner Details (Page) .

 Start

 The date on which the owner's contract with this company begins. This is also the date the owner is considered active in Rent Manager .

 -
 If needed, add any additional owners.

 -
 Click Save .
The property's ownership(s) is established and the pop-up closes.

 Set Up Default Bank

 To select the default bank account used for paying owners, do the following:

 -
 In the property details page's Other Information tile, select the Default Bank account to use for paying out owner distributions.

 -
 In the Bank Settings drop-down list, select any additional bank accounts that can be used when making distributions.

 -
 Click Save .
The property's bank account(s) can be used to pay out owner distributions.

 Customize Owner Check Setup

 To set up the calculation options for distributions to this property's owner(s), do the following:

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

 The name of the owner check setup template to use for this property. Alternatively, select <Custom Setup> to configure a check setup specific to this property.

 Subtract from owner checks

 There are two options available to specify what is removed from owner pay in this section. If you selected a check setup template, these selections are determined by the selected template's settings.

 Prepaid receivables

 Any deposited prepayments are excluded from the owner payout.

 Security deposits held

 Prevents Rent Manager from paying out the owner's security deposits that should be held back from an equity distribution.

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

 The extent of exclusion for the GL account. Each option is described below.

 Activity

 Excludes only the ending activity of this GL account. The date range of this activity goes from one day after your last distribution to the property owner to the date of your new distribution.

 Balance

 Excludes the full balance of this GL account as of the date of the owner distribution.

 If you selected a check template, these fields automatically populate with information from that template.

 -
 Click Save .
The property's owner check settings are established.

 Step 3: Establish Owner Settings

 Related Privileges

 Group
 Privilege
 Column

 Owners
 Owners
 View, Edit

 For more information, refer to Control User Access .

 Once you've set up the property's financial settings, you can make additional changes to individual owner accounts, including setting the owner's payment method and entering their payee name. The default options selected in system preferences are used for owner accounts unless overridden, and if those options are changed, subsequent distributions for owners with default settings are processed using the updated options.

 To set up an owner account to receive distributions, do the following:

 -
 Go to arrow_forward Owners arrow_forward General arrow_forward Owners and select an owner.
The owner's details page displays.

 -
 In the Miscellaneous tile, select the owner's preferred Payment Method from the drop-down list.

 More Information

 If you have eChecks enabled in Rent Manager and select eChecks in this field, you must also enter an eChecks Email address to which the eChecks payments need to be sent.

 -
 In the Payee field, enter the personal or business name of the owner who is receiving owner distribution payments.

 -
 In the Manage Account tile's Draw Account field, select the equity GL account used to track the owner's distribution payouts. If <Use Default> is selected, the GL account set up in system preferences is used to track owner distribution payouts.

 -
 If this owner needs different settings than the default for their check distribution separation or reserve balances, in the Check Setup tile, select Override Default and customize the options as needed.

 -
 Click Save .
The owner's distribution settings are updated.

 Next Steps

 Now that you have set up owner distribution settings, you are ready to start processing distribution payouts and tracking those payments. The recommended next steps are described in the table below.

 Action
 Description

 Automated notification

 With automated notifications, you can send alerts to a customized list of recipients when a certain set of conditions are met. For owner distribution processing, you can customize a notification to alert users and/or owners when a distribution payout is completed.

 For more information, refer to Owner Paid via Pay Owners (Automated Notification) .

 Distribution Breakdown report

 This report displays information about how an owner's distribution payout was calculated, showing bank balances on the date of a payout and amounts held for security deposits, reserves, and/or other exclusions.

 For more information, refer to Distribution Breakdown (Report) .

 Pay out owners

 Rent Manager automatically calculates the correct payout amounts for each owner, which you can also review in depth to break down where the finances are coming from, or identify any potential issues and make corrections.

 For more information, refer to Pay Owners .
