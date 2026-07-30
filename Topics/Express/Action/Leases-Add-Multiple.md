# Add Multiple Leases for Tenants

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Leases-Add-Multiple.htm

The View Leases page lets you add, edit, renew, and delete leases associated with a tenant. Tenants can have more than one lease in Rent Manager , which allows you to independently track occupancy and charges for rental units, parking garages, and storage spaces without needing to create multiple accounts for the same tenant. Additionally, this feature is useful for tenants in manufactured housing who have both home and lot leases (units and assets).

 By keeping this information centralized on one tenant account, you can provide tenants with a single statement for all of their units and prevent duplicate occupancy or financial entries on your reports. You can also enter unique user defined field (UDF) values and create separate recurring charges for each lease.

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

 More Information

 This topic focuses on noncommercial leases. To learn more about commercial leases, refer to Add a Commercial Lease .

 To create an additional lease for a tenant, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select a tenant with an existing lease.
The Tenant Details page displays.

 -
 On the Leases tile, click .
The View Leases pop-up displays.

 -
 Click Add .

 -
 Enter the information for the new lease:

 Field
 Description

 Expected Move Out

 The date on which the tenant is expected to move out of the unit. This date is used in place of a move out date for reporting purposes.

 Warning

 Entering a date in this field does not disable recurring charges for the tenant.

 Lease Documents

 If applicable, click   Upload or   Paste to add a document associated with the lease.

 Related Preferences

 If you allow tenants to view their leases in Tenant Web Access , they can also access any lease documents uploaded in the portal. For more information, refer to Tenant Web Access Leases Page Setup (System Web Preferences) .

 Lease End

 The date on which the lease expires. Paired with the lease start date, this date is used to help create a renewal term if no lease term is available when generating renewal offers.

 Lease Sign

 The date on which the lease was signed by the tenant. This date is useful in determining which lease came first for tenants with multiple leases.

 Lease Start

 The date on which the lease begins. This date is used to help create a renewal term if no lease term is available when generating renewal offers. For more information, refer to Create Renewal Offers .

 Lease Term

 The expected duration of the lease. If you enter a Lease Start date before selecting a Lease Term from the drop-down list, the Lease End field automatically populates based on the duration of the lease term you selected.

 For example, if you enter a Lease Start date of 01/01/ 2026 and select 12 Months in this field, the Lease End field populates with 12/31/ 2026 . For more information, refer to Lease Terms (Page) .

 Move In

 The date on which the tenant moves into the unit. It is best practice to enter a move in date, as this determines when recurring charges begin for the tenant. Only tenants with the status of Current in Rent Manager receive recurring charges. Tenants with future move-in dates do not receive recurring charges.

 Move Out

 The date on which the tenant officially vacates the unit. If a tenant has a past move-out date, they are considered to be a past tenant in Rent Manager and do not have recurring charges posted to their account.

 Typically, this field can be left blank until you have a confirmed move out date. For reporting purposes, you can enter an Expected Move Out date instead.

 Notice

 The date on which the tenant gave notice that they are moving out of the unit. This date is used to generate results on when a unit becomes available for reporting purposes.

 Property

 The name of the property at which the tenant is leasing. This field automatically populates with the property associated with the tenant's existing lease, but you can enter the name of any property.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Unit

 The name of the unit that the tenant is leasing. Click to open the Unit Selector pop-up, which can be filtered to list specific units. This field is required if the lease property is not the tenant's default property.

 User Defined Fields

 The values for any noncommercial lease-type user-defined fields (UDFs). For more information, refer to Enter User Defined Field Values .

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
 Click Save .
The new lease is created for the selected tenant.

 More Information

 If the lease property is not the tenant's default property, a message displays asking if you want to change the default property to match the lease property. Click Yes to save the lease and update the tenant's default property, or click No to save the lease without updating the tenant's default property.
