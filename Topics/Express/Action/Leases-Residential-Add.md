# Add a Lease

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Leases-Residential-Add.htm

You can add a lease to a tenant account to track the length of time they are renting a specific unit at a property. A lease can be created with no unit assigned if they aren't tied to a specific unit but you still wish to track the lease dates in your Rent Manager database. When you create a lease that is assigned to a unit, you can link transactions, issues, and other items to the tenant's leased unit. Additionally, assigning a unit to the lease allows you to transfer all of a tenant's existing transactions from one lease to another even if the tenant changes properties.

 More Information

 This topic covers adding a residential lease to a tenant. If you are looking to add a commercial lease to a commercial tenant, refer to Add a Commercial Lease .

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 Create multiple leases on a tenant
 Enabled

 Modify tenant movein/moveout dates
 Enabled

 For more information, refer to Control User Access .

 To add a new lease to a tenant account, do the following:

 -
 Go to   arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select a tenant from the list.
The tenant's details page displays.

 -
 On the action bar to the right, click arrow_forward Add Lease .

 -
 In the Lease Information section, enter the applicable information for the new lease. The following fields are available:

 Field
 Description

 Expected Move Out

 If applicable, the date on which the tenant is expected to move out of the unit. This date can be used in place of a move out date for reporting purposes. Having a date in this field does not impact recurring charges for the tenant.

 Lease Documents

 To add a document associated with the lease, click   Upload or   Paste .

 Related Preferences

 If you allow tenants to view their leases in Tenant Web Access , they can also access any lease documents uploaded in the portal. For more information, refer to Tenant Web Access Leases Page Setup (System Web Preferences) .

 Lease End

 The date on which the lease expires.

 Paired with the lease start date, this date can be used to help create a renewal term if no lease term is available when generating renewal offers. For more information, refer to Create Renewal Offers .

 Lease Sign

 The date on which the lease was signed by the tenant. This date can be useful in determining which lease came first for tenants with multiple leases.

 Lease Start

 The date on which the lease begins.

 This date can be used to help create a renewal term if no lease term is available when generating renewal offers.

 Move In

 The date on which the tenant officially moves into the unit.

 More Information

 It is best practice to enter a move in date as this determines when recurring charges begin for the tenant. Only tenants with the status of current in Rent Manager receive recurring charges. Recurring charges for tenants with future move-in dates do not post.

 Move Out

 If known, enter the date on which the tenant officially vacates the unit. If a tenant has a past move-out date, they are considered to be a past tenant in Rent Manager and do not have recurring charges posted to their account.

 More Information

 It is best practice to leave this field blank until you have confirmed an official move-out date with the tenant. This prevents missed recurring charges or extra recurring charges posted to their account after they've vacated. For reporting purposes, you can enter an Expected MO (move out) date instead.

 Notice

 If known, the date on which the tenant gave notice that they are moving out of the unit. This date can be used to generate results on when a unit becomes available for reporting purposes.

 Property

 The property at which the tenant is leasing.

 Unit

 The unit that the tenant is leasing. Alternatively, click to open the Unit Selector pop-up and search for a unit that meets the tenant's needs.

 -
 If the selected property has a Property Type of Manufactured Housing and there is a home-type asset associated with the selected unit as of the set Move In date, the Home tile displays. Enter information into the following fields:

 Option
 Description

 Add a lease for this home

 If checked, automatically create a lease for the home-type asset associated with the unit. This option is available only if the asset is rentable.

 Related Preferences

 This option is checked by default if the Automatically create a lease for linked 'home' assets or units option is enabled in system preferences. For more information, refer to General Options (System Preferences) .

 Home

 This field is read-only and displays the asset currently located on the unit, as specified on the asset's details page.

 Homeowner Status

 The ownership status of the home-type asset associated with the unit, such as Community Owned - Employee or Resident Owned . This field can be edited only if the current status meets certain conditions. For more information, refer to Homeowner Statuses Available on Move In .

 More Information

 If this status is set to Dealer Owned or Lender Owned , the Rent Free Period section displays. In the Start Date and End Date fields, enter the time period during which the unit does not generate income due to a rent-free promotion. To add additional time periods, click Add Rent Free Period .

 -
 In the User Defined Fields section, enter a Value for any lease-type user defined fields.

 -
 Click Save .
The new lease is created for the selected tenant.
