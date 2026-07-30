# Insurance Breakdown (Dashboard Tile)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Dashboard-Tiles/Insurance-Breakdown.htm

If you have the paid insurance integration with LeaseTrack , this dashboard tile displays the number of tenants and homeowners with and without insurance policies at each property.

 Related Preferences

 In order to track insurance in Rent Manager , the option to Enable insurance tracking must be checked. For more information, refer to Activate and Set Up LeaseTrack Insurance .

 The information on this dashboard tile is represented in a list.

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Edit own dashboards
 Enabled

 For more information, refer to Control User Access .

 More Information

 The tile excludes policies if one or more of the following conditions are true:

 -
 The lease has the Don't require insurance option selected.

 -
 The lease is for a unit type marked as  Other Rentable Items (ORI) .

 -
 The lease is at a property that does not have insurance tracking enabled.

 -
 The lease does not have an associated unit.

 -
 If the tenant or homeowner has a lease with both current and future insurance policies, one policy is excluded so they are counted only once for that lease.

 Filter Information

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Edit dashboard data filters
 Enabled

 For more information, refer to Control User Access .

 Option
 Description

 Property Filter

 Each property whose tenant and homeowner are included in the tile. To include all current and future properties, select <All Properties> . Alternatively, select a property Group from the drop-down list.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Ignore dashboard property filter

 If checked, override the property filter configured on the Dashboard .

 Column Descriptions

 The information that displays on the tile is organized into the following columns.

 Column
 Description

 Master Policy

 The number of tenant leases or manufactured home owners included in a master insurance policy type (e.g., 100k Renters , 100k Homeowners , 300k Homeowners ) provided by Millennial Specialty Insurance (MSI). A column for each master policy type may display.

 In the column names, master policies display the policy amount (such as 100K or 300K ), then tenant leases (or renters) are appended with -R , while manufactured home owners are appended with -H .

 No Policy

 The number of leases with no active insurance policy.

 Personal Policy

 The number of active insurance policies for individual tenant leases or manufactured home owners (e.g., Renters , Homeowners ), including policies from MSI as well as other providers. A column for each personal policy type may display.

 In the column names, personal policies for tenant leases (or renters) are appended with -R , while manufactured home owners are appended with -H .

 Property

 The name of the property to which the insurance is tied.
