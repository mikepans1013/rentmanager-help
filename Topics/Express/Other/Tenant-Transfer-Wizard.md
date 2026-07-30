# Tenant Transfer Wizard

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Tenant-Transfer-Wizard.htm

With the tenant transfer wizard, you can complete all work related to transferring a tenant in one spot. If a tenant moves to a new unit at a property where they already lease, or if they move to another property you manage, you can transfer all relevant information and data to the destination property and unit. When you create the new account as part of the transfer, you can make it a tenant or prospect account, depending on how quickly the tenant needs to be moved in to their new unit.

 Transfer tenants using this wizard to maintain all historical records and financial data associated with the tenant. On the new tenant's details page, you can view all other linked accounts and all history/notes related to the old accounts. In addition, you can use the Transfer Report to see a summary of the tenant's previous account in one place.

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 Add, View

 For more information, refer to Control User Access .

 To begin transferring a tenant, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select a tenant from the list.
The tenant's details page displays.

 -
 On the Leases tile, click arrow_forward Transfer Tenant .
The Transfer a Tenant pop-up displays.

 Related Preferences

 Depending on your system preferences, you may be able to choose to create the new account as a tenant or prospect account. If Create a new tenant or prospect account is selected, you can choose the transfer method from the drop-down in step 1. If system preferences are set to allow only one transfer method, only the steps for that method display. For more information, refer to Tenant Transfers (System Preferences) .

 Option 1: Create a New Tenant Account

 If you select the option to Create a new tenant account , or if your system preferences are set to allow only the tenant account transfer method, follow the steps in the wizard to transfer the tenant to a new tenant account.

 Step 1: Select New Unit

 To select the tenant's new unit, do the following:

 -
 Enter the tenant's new Move In date.

 -
 Select the Property the tenant is moving to.

 -
 Select the tenant's new Unit .

 More Information

 If you have the Properties/Units privilege for Unit picker enabled, you can click Unit Selector to find specific units that meet the tenant's criteria.

 -
 If the selected property has a Property Type of Manufactured Housing , one of the following tiles displays:

 Tile
 Description

 Home

 This tile displays only if a home-type asset is located on that unit (lot) as of the date in the Move In field. The available options are described below.

 Add a lease for this home

 If checked, automatically create a lease for the home-type asset associated with the unit upon completing the transfer wizard. This option is available only if the asset is rentable.

 Related Preferences

 This option is checked by default if the Automatically create a lease for linked 'home' assets or units option is enabled in system preferences. For more information, refer to General Options (System Preferences) .

 Home

 This field is read-only and displays the asset currently located on the unit, as specified on the asset's details page.

 Homeowner Status

 The ownership status of the home-type asset associated with the unit, such as Community Owned - Employee or Resident Owned . This field can be edited only under certain conditions. For more information, refer to Homeowner Statuses Available on Move In .

 More Information

 If this status is set to Dealer Owned or Lender Owned , the Rent Free Period section displays. In the Start Date and End Date fields, enter the time period during which the unit does not generate income due to a rent-free promotion. To add additional time periods, click Add Rent Free Period .

 Home/RV Information

 This tile displays only if a home-type asset is not associated with that unit (lot) on or after the date in the Move In field. The available options are described below.

 Create a lease for the unit only

 The tenant does not have a resident-owned RV nor a home-type asset on the unit (lot). A lease is created only for the unit when the transfer wizard is completed.

 Enter resident owned RV details

 The tenant has a resident-owned RV they intend to place on the lot. If selected, enter information about the RV into the available fields to be included on the tenant's lease.

 Link an existing home

 Associate the tenant's unit with a home-type asset.

 In the Home , field, select the home-asset to place on the lot.

 In the Home Location Start Date field, enter the date on which this home's location history at the unit begins.

 The Homeowner Status field displays the ownership status of the home-type asset, such as Community Owned - Employee or Resident Owned . This field can be edited only under certain conditions. For more information, refer to Homeowner Statuses Available on Move In .

 To create a lease for the home-type asset upon completing the transfer wizard, check Add a lease for this home .

 -
 Click Next .

 Step 2: Add Lease Details

 To set up the new lease terms, do the following:

 -
 Enter the following information:

 Field
 Description

 Lease Start

 The date on which the tenant's lease legally begins, regardless of when they physically move into the unit.

 Lease Term

 The duration of the tenant's lease, such as twelve months or month-to-month.

 Lease End

 The date on which the tenant's lease legally ends, regardless of whether or not they renew the lease or physically vacate the unit. Based on the Lease Term selected, the end date automatically populates.

 Lease Sign

 The date on which the tenant signed the lease agreement.

 Expected Move Out

 The estimated date on which the tenant plans to move out of the unit based on the lease agreement. If the expected move out date is unknown, leave this field blank.

 This field allows you to track when a tenant is likely to move out of the unit without officially marking them as a past tenant in Rent Manager . It provides accurate reporting without changing the tenant status or stopping their recurring charges if the tenant stays longer than originally anticipated.

 -
 Click Next .

 Step 3: Enter User-Defined Fields

 More Information

 This step displays only if you have required tenant- or lease-type user-defined fields (UDFs).

 If the tenant account already has values for these UDFs, those values populate by default. Enter or edit the Value for all UDFs in this step and then click Next .

 Step 4: Add Charges

 Related Privileges

 To add new recurring or one-time charges from this step, you need the following permissions.

 Group
 Privilege
 Column

 Receivables
 Tenant transactions
 Add

 Recurring Charges/Market Rent
 Recurring charges
 Add

 For more information, refer to Control User Access .

 Select the recurring and one-time charges that the tenant pays for the new lease. By default, this step displays all charges that the tenant inherits from the property, unit type, and unit, as well as charges set up in the Tenant Charge Setup system preference.

 You can add new one-time and recurring charges as needed. New recurring charges set up from this step are created as tenant-level recurring charges.

 Step 5: Add Tenant Info

 More Information

 If the tenant you are transferring has at least one additional contact other than their own or has at least one enabled web user account, you can complete this step to select which contacts or web user accounts to transfer.

 If the tenant does not have additional contacts nor a web user account, this step displays a list of the other information that transfers to the new tenant account.

 To transfer contacts or web user accounts, do the following:

 -
 For both contacts and web user accounts, select from the following options:

 Option
 Description

 All

 Transfer all contacts or web user accounts from the current account to the new tenant account.

 Select contact types

 For contacts only, you can select contact types, and all contacts of that type transfer to the new tenant.

 Select individual

 The specific contacts or web user accounts to transfer.

 None

 Do not transfer any contacts or web user accounts.

 -
 Click Next .

 Step 6: Review and Next Steps

 To finish the transfer and create a new tenant account, do the following:

 -
 Review the information you entered in the previous steps.

 -
 In the Next Steps section, select from the following options:

 Option
 Description

 Do you want to move the tenant out of their current unit?

 More Information

 This option displays only if the tenant being transferred has an active lease.

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Modify tenant movein / moveout dates
 Enabled

 For more information, refer to Control User Access .

 Choose whether you want to move the tenant out of their current unit as part of this workflow, or if you want to do it later.

 Not right now

 No action is required at this time. After you complete the transfer process, you must close the old tenant account manually at a later date.

 Yes

 Move the tenant out of their current unit now as part of the transfer process. When you click Transfer at the end of the process, the move-out pop-up displays.

 Do you want to transfer or refund the tenant's security deposit?

 More Information

 This option displays only if the tenant being transferred has a held security deposit.

 Choose what to do with the tenant's security deposit.

 Not right now

 No action required at this time. You must transfer or refund the tenant's security deposit manually at a later date.

 Transfer

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Transfer security deposits
 Enabled

 For more information, refer to Control User Access .

 Transfer the deposit to the tenant's new account. When you complete the transfer wizard, the Security Deposit Transfer wizard displays, where you can complete the deposit transfer.

 More Information

 The Rentable column displays in the Security Deposit Transfer wizard if at least one security deposit that can be transferred is held by Rentable. For more information, refer to Set Up Security Deposits with Rentable .

 Rentable is a licensed feature and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Refund

 Related Privileges

 Depending on how you want to refund the deposit, you need one of the following privileges.

 Group
 Privilege
 Column

 Receivables
 Refund security deposit with a check
 Enabled

 Refund security deposit with a bill
 Enabled

 For more information, refer to Control User Access .

 Refund the deposit to the tenant. When you complete the transfer wizard, the Security Deposit Refund wizard displays, where you can complete the deposit transfer.

 -
 Optionally, enter a comment to display on the new tenant details page in the General tile.

 -
 Click Transfer .
Additional steps may be required based on your selections throughout the wizard. Complete any additional pop-ups, such as for transferring security deposits or moving the tenant out.

 Option 2: Create a New Prospect Account

 If you select the option to Create a new prospect account , or if your system preferences are set to allow only the prospect account transfer method, follow the steps in the wizard to transfer the tenant to a new prospect account.

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Prospects
 Add

 For more information, refer to Control User Access .

 Step 1: Select New Property

 Step 2: Select New Unit

 For new prospect accounts, you can reserve specific units for them or you can enter information to help prospects find the kind of unit they are looking for.

 Related Privileges

 User with the following privileges can view limited information about properties they otherwise do not have access to on the User details page.

 Group
 Privilege
 Column

 Tenant/Prospect
 Access limited occupancy information for all properties
 Enabled

 For more information, refer to Control User Access .

 Find Interested Units

 If you do not know the specific unit the tenant plans to move to, you can search for units that meet the tenant's needs. To find units for the tenant, do the following:

 -
 Select Find Interested Units .

 -
 Enter the following information:

 Field
 Description

 Preferred Unit Types

 The unit types that the tenant is interested in.

 Expected Move In

 The date on which you expect the tenant to move into the new unit.

 Rent Min.

 The minimum dollar amount the tenant wants to pay for rent.

 Rent Max.

 The maximum dollar amount the tenant wants to pay for rent.

 Preferred Amenities

 The amenities that the tenant wants at their new property.

 Preferred Floors

 The floor of the building that the tenant prefers.

 Number of People

 The total number of occupants the tenant plans to have in the new unit.

 More Information

 If you have the Properties/Units privilege for Unit picker enabled, you can click Find Units and use the Unit Picker to select specific units that meet the tenant's criteria.

 -
 Click Next .

 Reserve a Unit

 If you need to reserve a specific unit for the tenant, do the following:

 -
 Select Reserve a unit .

 -
 Enter the following information:

 Field
 Description

 Unit To Reserve

 The name of the unit that you want to reserve for the prospect.

 More Information

 If you have the Properties/Units privilege for Unit picker enabled, you can click Unit Selector to find specific units that meet the tenant's criteria.

 Reserved Move In

 The date on which the prospect plans to move into the unit.

 Reserved Move Out

 The date on which the prospect intends to move out of the unit, if known. It is recommended that you leave this field blank until the prospective tenant is officially moving out of the unit, as move out dates can change.

 Expected Lease Start

 The date on which you expect the planned lease to begin.

 Lease Term

 The length and rental terms of the prospective lease.

 Expected Lease End

 The date on which you expect the planned lease to end.

 Rent Period

 The frequency of rent payments for this prospective tenant, which determines if charges are posted to their account on a daily, weekly, or monthly basis.

 Due Day

 For monthly and weekly rent periods, the day of the week or month on which rent is due for this tenant.

 -
 If the selected property has a Property Type of Manufactured Housing , one of the following tiles displays:

 Tile
 Description

 Home

 If you do not wish to reserve the home-type asset associated with the selected unit, uncheck the Reserve Associated Home option. If left checked, both the asset and unit are leased to the prospect simultaneously. The Home field is read-only and displays the asset currently located on the unit, as specified on the asset's details page.

 This tile displays only if a home-type asset is located on that unit (lot) as of the date in the Reserved Move In Date field.

 RV Information

 Determines whether the prospect has a resident-owned RV. This tile displays only if a home-type asset is not associated with that unit (lot) on or between the dates in the Expected Move In Date and Expected Move Out Date fields.

 Each option is described below.

 Yes, enter resident owned RV details

 The prospect has a resident-owned RV they intend to place on the lot. If selected, enter information about the RV into the available fields. If the prospect is converted to a tenant, this information is included on their lease.

 No, reserve unit only

 The prospect does not have a resident-owned RV.

 -
 Click Next .

 Step 3: Enter User Defined Fields

 More Information

 This step displays only if you have required prospect-type user-defined fields (UDFs).

 If the tenant account already has values for these UDFs, those values populate by default. Enter or edit the Value for all UDFs in this step and then click Next .

 Step 4: Add Prospect Info

 More Information

 If the tenant you are transferring has at least one additional contact other than their own or has at least one enabled web user account, you can complete this step to select which contacts or web user accounts to transfer.

 If the tenant does not have additional contacts nor a web user account, this step does not display.

 To transfer contacts or web user accounts, do the following:

 -
 For both contacts and web user accounts, select from the following options:

 Option
 Description

 All

 Transfer all contacts or web user accounts from the current account to the new prospect account.

 Select contact types

 For contacts only, you can select contact types, and all contacts of that type transfer to the new prospect account.

 Select individual

 The specific contacts or web user accounts to transfer.

 None

 Do not transfer any contacts or web user accounts.

 -
 Click Next .

 Step 5: Review

 Review the information you entered. Optionally, enter a comment to display on the new prospect details page on the General tile. When finished, click Transfer .
