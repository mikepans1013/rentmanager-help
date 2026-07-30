# Owner Check Template (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/Owners-Check-Template.htm

Adjust these preferences to choose the defaults for how Rent Manager should write distribution checks, whether reserves are balanced across ownerships, and the default GL accounts to use for reserve redistribution. These settings make it easier to apply distribution options each time you acquire a new managed property.

 More Information

 You can also override the preferences you select on this page for individual owners on the owner's details page.

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

 To set these system preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Owners arrow_forward Owner Check Template .

 -
 Edit the settings as desired. Each setting is described below.

 -
 Click Save to accept your changes.

 Preference Descriptions

 Each setting is described below:

 Preference
 Description

 Default Check Template

 Select one of the owner check setups as the system-level default check distribution settings. By selecting a default setup, the preferences below will populate automatically. Conversely, select <Custom Setup> to manually adjust the below preferences.

 More Information

 The Default Check Template option can be overridden on the property.

 Separate checks by ownership

 Check this option only if all owners have two or more properties which use the same bank account and the owners want to receive a separate check for each.

 Balance reserves across ownerships

 Check to enable the use of funds from an owner's profitable properties to cover other owned properties that are operating with a negative or below minimum reserve balance.

 Warning

 Balance reserves are used only when all the owner’s properties use the same bank account. Rent Manager creates a journal entry to balance reserves only when the same bank is used.

 For example, an owner owns both Property A and B. Property A has a required reserve of $500 and a bank balance of only $300, while Property B has a required reserve of $500 and a bank balance of $1100. With this option enabled, when you go to make an owner distribution, Rent Manager first transfers $200 (via journal entry) from Property B over to Property A to help that property reach its required reserve of $500. The remaining funds in Property B (after Property B reserves are considered) are then distributed to the owner. This means $400 is distributed to the owner.

 If this option is unchecked, Rent Manager simply pays out the remaining balance of Property B while Property A continues to operate in debt.

 Balance Account

 Select the GL Account to track the transfer of reserve funds between properties. This is typically linked to an equity account (e.g., 3005 Reserves) and the transfer is performed through a journal entry.

 You can enable this option only if the option for Balance reserves across ownership is enabled.

 Balance Memo

 Enter an optional memo for the journal entries created by Rent Manager to transfer reserve funds between properties.

 You can enable this option only if the option for Balance reserves across ownership is enabled.
