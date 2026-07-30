# Lease Renewals (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/General-Options-Lease-Renewals.htm

These preferences allow you to select default settings for how renewal offers and associated recurring charges are updated when a tenant accepts the renewal offer.

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 To set these system preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward General Options arrow_forward Lease Renewals .

 -
 Edit the settings as desired. Each setting is described below.

 -
 Click Save to accept your changes.

 Preference Descriptions

 This preference group is divided into multiple sections. Each setting is described within the corresponding sections below.

 Renewal Offers - Recurring Charge Options

 In this section, set options for when and how recurring charges should be created for lease renewals.

 Option
 Description

 Create new recurring charges when the amount does not change

 If checked, Rent Manager still creates a new recurring charge(s) when a lease renewal is completed, even if the recurring charge(s) did not escalate. Rent Manager will assign a To Date on the original recurring charges to match the previous lease's End Date and create a new recurring charge with a From Date for the same date as the renewed lease's Start Date .

 More Information

 To maintain accurate historical data, it is considered a best practice to always end recurring charges associated with an outdated lease and add new recurring charges, even when the amount of the recurring charge does not change.

 Use renewal lease end date as the To Date on new recurring charges

 If checked, Rent Manager uses the renewed lease's End Date as the To Date for the new recurring charge.

 Renewal Rent Increases

 In this section, you can enable Require approval of renewal rent increases before sending offer to prevent users from sending renewal offers without approval for the set renewal increase amount. Additionally, the Allow renewal offer rent amount to be greater than the approved rent amount option allows users to generate a renewal offer with a higher rent amount than what was approved.

 Rent Offset

 In this section, the Allow rent offset to be overridden at the property level option can be enabled. This adds the Lease Term Rent Offset tile to the property details pages. Additionally, this allows users to manually set rent offset amounts and rounding rules for properties or to fully override any system preferences.
