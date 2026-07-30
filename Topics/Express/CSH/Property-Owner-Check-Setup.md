# Property Owner Check Setup (Pop-Up)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Property-Owner-Check-Setup.htm

This pop-up lets you define important settings that affect how owner distributions are handled. For example, you can tell Rent Manager whether or not to exclude held security deposits from a distribution payment or if there are specific GL accounts that should have their current balance or date range activity excluded from an owner payment.

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Edit

 For more information, refer to Control User Access .

 To view the owner check setup pop-up, go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select a property. Then, on the action bar to right, click arrow_forward Owner Check Setup .

 If Calculate Owner Pay by Unit is checked, individual line items display for each unit in the owner's portfolio on the owner's distribution checks for the property.

 Setup

 This section contains information that determines how the owner check payouts are handled.

 Field
 Description

 Name

 The name of the owner check set up. This field defaults to <Custom Setup> so that custom selections for the check setup can be entered. Existing owner check setup templates, if any, can be selected to populate the field with the templates selections.

 Subtract from owner checks

 There are two options available to specify what is removed from owner pay in this section.

 Security deposits held

 Prevents Rent Manager from paying out the owner security deposits that should be held back from an equity distribution.

 Warning

 Do not enable this option if you intend to use this setup for properties that hold tenant security deposits in a separate bank account.

 Prepaid receivables

 Any deposited prepayments are excluded from the owner payout.

 Accounts to Exclude from Check Posting

 In the this section, you may select one or more general ledger (GL) accounts to be excluded from owner distributions, which means the value of the account is withheld from the distribution calculation similar to a reserve.

 Field
 Description

 Account

 The GL account to be excluded from owner distributions.

 Accounting Method

 If the value of this GL account is calculated on a cash- or accrual-accounting basis.

 Balance Or Activity

 The extent of exclusion for the GL account.

 Balance

 Excludes the full balance of this GL account as of the date of the owner distribution.

 Activity

 Excludes only the ending activity of this GL account. The date range of this activity goes from one day after your last distribution to the property owner to the date of your new distribution.
