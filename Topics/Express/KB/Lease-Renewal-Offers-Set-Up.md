# Set Up Lease Renewal Offers

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Lease-Renewal-Offers-Set-Up.htm

When your tenants' leases are ending soon, you can send them options to renew a lease with you. With Rent Manager 's lease renewal tools, you can quickly and easily calculate rent increases and send tenants offers to renew their lease under a variety of terms of your choosing. Each time you use the lease renewal tool, you can customize which renewal options you offer tenants. To save time, you can customize the renewal process and how tenants interact with your renewal offers.

 More Information

 Lease renewals are generated only for residential leases, so any leases marked as a Commercial Lease do not generate lease renewals.

 Step 1: Customize Preferences

 Set system preferences and system web preferences to customize your lease renewal process.

 System Preferences

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 The General system preference options for Lease Renewals allow you to select default settings for how renewal offers and recurring charges update when a tenant accepts a renewal offer.

 To set up system preferences for lease renewals, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward General Options arrow_forward Lease Renewals .
The System Preferences: General Options - Lease Renewals page displays.

 -
 In the Renewal Offer—Recurring Charge Options section, select from the following options for how to handle recurring charges:

 Option
 Description

 Create new recurring charges when the amount does not change

 If checked, Rent Manager still creates a new recurring charge(s) when a lease renewal is completed, even if the recurring charge(s) did not escalate. Rent Manager assigns a To Date on the original recurring charge(s) to match the previous lease's End Date and create a new recurring charge(s) with a From Date for the same date as the renewed lease's Start Date .

 More Information

 To maintain accurate historical data, it is considered a best practice to always end recurring charges associated with an outdated lease and add new recurring charges, even when the amount of the recurring charges do not change.

 Use renewal lease end date as the To Date on new recurring charges

 If checked, Rent Manager uses the renewed lease's End Date as the To Date for the new recurring charge(s).

 -
 In the Renewal Rent Increases section, select from the following options related to approving rent increases.

 Option
 Description

 Require approval of renewal rent increases before sending offer

 Prevents users from sending renewal offers without first receiving approval for the set renewal increase amount. For more information, refer to Approve Renewal Rent Increase .

 Allow renewal offer rent amount to be greater than the approved rent amount

 Allow users to generate a renewal offer with a higher rent amount than what was approved.

 -
 In the Rent Offset section, select Allow rent offset to be overridden at the property level if you want to add the Lease Term Rent Offset tile to the property details pages.

 -
 Click Save .
For more information, refer to Lease Renewals (System Preferences) .

 System Web Preferences

 Related Privileges

 Group
 Privilege
 Column

 System
 System Web Preferences
 Enabled

 For more information, refer to Control User Access .

 Related Preferences

 To access Tenant Web Access settings, at least one location must be enabled for TWA. For more information, refer to Licensing (System Web Preferences) .

 The Tenant Web Access system web preference for Renewal Offers allow you to select default settings for how recipients view and accept renewal offers through Tenant Web Access (TWA) .

 To set up system web preferences for lease renewals, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Web Preferences arrow_forward Tenant Web Access arrow_forward Renewal Offers .

 -
 Check or uncheck the following options:

 Option
 Description

 Complete renewal offer when the TWA published document is completed

 Determines how renewal offers are completed via signable documents. If enabled, renewal offers are completed automatically once both the tenant(s) and landlord add their signatures to the signable document.

 Allow tenant to decline offer

 If enabled, tenants can decline a renewal offer from Tenant Web Access (TWA) . Use the following options to customize this process.

 Require an expected move out date

 Makes the Expected Move Out date in TWA a required field when the tenant declines a renewal offer.

 Set notice date if tenant enters expected move out date

 Automatically populates a Notice date when a tenant declines a renewal offer and enters an Expected Move Out date in TWA. The Notice field on the tenant's details page populates with the date on which the tenant declined the renewal offer.

 Warning

 Checking this option is recommended if the tenant's action of declining an offer from Tenant Web Access can serve as an official notice to vacate.

 This option should be left unchecked if you require a specific form or signature to satisfy your requirements for giving notice to vacate.

 Decline Renewal Message

 An optional message that displays to tenants if they decline their lease renewal offer.

 -
 Click Save .
For more information, refer to Tenant Web Access Renewal Offers (System Web Preferences) .

 Step 2: Set Up Lease Terms with Rent Offsets

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Lease Terms
 Add, View, Edit

 For more information, refer to Control User Access .

 When you make a renewal offer, you can choose to offer the tenant different lease terms. In these cases, you can also select a rent offset that changes the rent amount based on the changing lease terms. For example, if a tenant is currently on a 12-month lease but wants to change lease terms, you can use a rent offset to increase the monthly cost for a shorter lease or reduce the monthly cost for a longer lease.

 You can set a rent offset when you create leases terms, or you can edit existing lease terms to add a rent offset. For more information, refer to Lease Terms (Page) .

 More Information

 If the system preference to Allow rent offset to be overridden at the property level is active, on each property's details page, you can use the Lease Term Rent Offset tile to set up a property-specific rent offset system.

 To set up lease terms with rent offsets, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Rental Info Setup arrow_forward Tenants/Prospects arrow_forward Lease Terms .
The Lease Terms page displays.

 -
 Click Add Lease Term to create a new lease term, or select a lease term from the list to edit it.

 -
 In the Rent Offset field, enter a flat dollar amount to offset rent charges, or select the %  option and enter a percentage amount in the field.

 More Information

 Enter positive numbers to increase the rent (such as 4.00 ), or enter negative numbers to decrease the rent (such as -4.00 ).

 -
 Click Save .

 Rounding Rules

 You can also select how Rent Manager rounds the new rent amount after the offset calculation by setting up rounding rules. For example, if you want all percentage-based rent offsets to round to whole dollars, you can set a rounding rule to use standard rounding and round to the nearest whole dollar.

 To set up rounding rules, on the Lease Terms page, click Rounding Rules and select Round New Rent . Choose a rounding method and the nearest dollar value to round to, then click Save .

 Step 3: Set Up Renewal Increases

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Set Renewal Rent Increases
 Enabled

 For more information, refer to Control User Access .

 On the Renewal Increases page, track tenants with leases that have an approaching Lease End date and choose how to modify their rent if they accept a renewal. You can also set and approve the new rent amounts charged to tenants if they accept a renewal offer. For more information, refer to Set Renewal Rent Increase .

 To set up renewal increases, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Leasing arrow_forward Renewal Increases .

 -
 Use the filters at the top to display tenants with a Lease End date that falls within the date range.

 More Information

 Rent increases may already be set for some tenants. The Status column tells you the current status of each tenant's renewal increase. You can change rent increases that are already set, but you cannot change approved increases.

 -
 Click Set Rent Increases .

 -
 Use the following filters to choose which tenants display in the list:

 Field
 Description

 Lease Term

 Include tenants in the list that have current leases with the selected lease duration(s).

 User Defined Field

 A tenant-type user-defined field (UDF) and its associated User Defined Field Value that you want to use to filter the tenants from the drop-down list.

 Unit Type

 The unit type(s) whose associated tenants are included in the list.

 Include Status

 Include tenants whose renewal rent increases are already Set and/or Approved . Entering new rent increase information overwrites any existing set or approved amounts.

 -
 In the Modify Rent tile, select the Rent Charge Type you want to increase from the drop-down list.
The tenant list is filtered to display only tenants with recurring charges of the selected charge type.

 -
 Select how to increase the renewal rent:

 Field
 Description

 No Increase

 Do not increase the renewal rent charge(s).

 Increase By

 Increase the renewal rent charge(s) by a specific dollar amount. Alternatively, enter a value and select % to increase the rent charge(s) by a set percentage.

 Use Market Rent

 The renewal rent charge(s) to matches the current market rent value for the tenant's unit.

 New Amount

 A full dollar amount is used for the new renewal rent charge(s).

 Calculation

 A scripted formula to calculates the new renewal rent charge(s). To open the Script Builder for scripting assistance, click .

 -
 In the Comment field, enter an optional note to explain this renewal rent increase, or click to select a memorized comment.

 -
 In the Rounding tile, if you want to round the increased amount to a certain whole dollar amount, select Round New Rent and choose from the available options.

 -
 At the bottom of the pop-up, select the tenant(s) whose rent you want to modify as part of a renewal offer.

 -
 Click Save Selected to set the renewal rent increase(s) for the selected tenants and keep the pop-up open for more increases, or click Save Selected & Close if you are finished adding renewal rent increases.
The Set Renewal Rent Increase  pop-up displays.

 Related Preferences

 This pop-up displays only if the Require approval of renewal rent increases before sending offer option is enabled in system preferences. For more information, refer to Lease Renewals (System Preferences) .

 -
 Click Yes to approve the renewal rent increases, or click No to allow them to be approved at a later time.

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Approve Renewal Rent Increases
 Enabled

 For more information, refer to Control User Access .

 The renewal increase amounts are set.

 Next Steps

 With these system preference, web preferences, and other system-level settings in place, you can quickly send renewal offers using the Create Renewal Offer tool and the Lease Renewal Board .

 Step
 Description

 Create Renewal Offers

 Follow the on-screen steps to complete the workflow and send a renewal offer to your tenants. As you create the renewal offer, you can select options based on your custom setup. For example, during the Create Term Offers step, you can choose which of the lease terms you set up to offer the tenant. For more information on creating and sending renewal offers, refer to Create Renewal Offers .

 View the Lease Renewal Board

 Each column represents a different stage or action required to continue the renewal offer process. Each card displays information like the tenant's name, property, unit, and the expiration date of the offer. You can also call and email the tenant from their card and complete other actions like accepting and declining the offer. For more information, refer to Lease Renewal Board (Page) .
