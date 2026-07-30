# Owner Check Setup Templates (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Owner-Check-Setup-Templates.htm

This page allows you to define important settings that affect how owner distributions are handled and whether funds should be reallocated based on required bank reserves for each owned property.

 Related Preferences

 You can save default check setup structures that can be selected as the system default in system preferences. For more information, refer to Owner Check Template (System Preferences) .

 Related Privileges

 Group
 Privilege
 Column

 Owners
 Default check setups
 View, Edit

 For more information, refer to Control User Access .

 To view the owner check setup templates, go to   arrow_forward Owners arrow_forward Owner Payments arrow_forward Owner Check Setups .

 Details

 The following fields display in this section.

 Field
 Description

 Name

 The name given to the owner check setup template (e.g., Standard Distribution ).

 Subtract from owner checks

 The type of payments, Security deposits held or Prepaid receivables , to be subtracted from owner checks.

 Security deposits held

 Security deposits are held in the default operating bank account for this property. This option prevents Rent Manager from paying out the security deposits that should have been held back when using a bank account where operating funds and security deposits are commingled.

 Prepaid receivables

 Prepayments are omitted from the owner payout. By default, any undeposited prepayments are excluded from owner payouts since they are not included in the bank balance. Enabling this option affects only deposited prepayments.

 Accounts to Exclude from Check Posting

 The following fields allow you to define what general ledger (GL) accounts are excluded from owner distributions.

 Field
 Description

 Account

 The account number and name of the GL account to be excluded.

 Accounting Method

 If the value of this GL account is calculated on a cash- or accrual-accounting basis.

 Balance Or Activity

 The extent of exclusion for the GL account.

 Balance

 Excludes the full balance of this GL account as of the date of the owner distribution.

 Activity

 Excludes only the ending activity of this GL account. The date range of this activity goes from one day after your last distribution to the property owner to the date of your new distribution.
