# Add an Owner Check Setup Template

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Owners-Check-Setup-Template-Add.htm

Owner check setup templates allow you to define important settings for your owner distributions. These check settings affect how owner distributions are handled, whether the funds should be reallocated based on required bank reserves for each property in their ownership, and what general ledger (GL) accounts to exclude from the distribution.

 You can create check setup templates that can be set as the system default, and you can select them on the property level if different properties use different check structures.

 Related Preferences

 To set an owner check setup template as the system default, select one of the templates in the Default Check Template field in system preferences. For more information, refer to Owner Check Template (System Preferences) .

 Related Privileges

 Group
 Privilege
 Column

 Owners
 Default check setups
 Add, View

 For more information, refer to Control User Access .

 To create a new owner check setup, do the following:

 -
 Go to arrow_forward Owners arrow_forward Owner Payments arrow_forward Owner Check Setups .
The Owner Check Setups page displays.

 -
 On the action bar to the right, click .

 -
 In the Name field, enter a unique title to identify this check setup template.

 -
 In the Subtract from owner checks field, if applicable, check the following options:

 Option
 Description

 Security deposits held

 If checked, Rent Manager is prevented from paying out the security deposits held at the owner's properties in an equity distribution. This should be checked only if security deposits are held in the property's Default Bank , as displayed on the property's details page.

 Prepaid receivables

 If checked, any deposited prepayments are excluded from the owner payout. This prevents Rent Manager from paying out deposited prepayments that should be withheld from a distribution.

 -
 In the Accounts to Exclude from Check Posting section, click Add Exclusion to select any GL accounts that should be excluded from owner distributions—meaning the value of the accounts are withheld from the distribution calculation, similar to a reserve.

 More Information

 To exclude prepayments from owner payouts, it is strongly recommended that you check the Prepaid receivables option rather than selecting the account that collects your prepayments for exclusion. Additionally, selecting this option holds back amounts from the Tenant Prepays report.

 -
 In the available columns, select the needed information in order to exclude the accounts:

 Column
 Description

 Account

 The GL account to exclude from owner distributions.

 Accounting Method

 Determines whether the value of this GL account is calculated on a cash- or accrual-accounting basis.

 Balance or Activity

 The method by which to exclude the GL account's value. Each option is described below.

 Balance

 Exclude the full balance of this GL account as of the date of the owner distribution.

 Activity

 Exclude only the ending activity of this GL account. The date range of this activity goes from one day after your last distribution to the property owner to the date of your new distribution.

 -
 If there are additional GL accounts to exclude, repeat until all needed accounts are added.

 -
 To finish, click Save & Close , or to create additional templates, click Save & New .
The owner check setup is created.

 More Information

 You can assign an owner check setup template at the property level from the property's details page. For more information, refer to Property Owner Check Setup (Pop-Up) .
