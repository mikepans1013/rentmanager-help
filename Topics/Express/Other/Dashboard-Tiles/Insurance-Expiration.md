# Insurance Expiration (Dashboard Tile)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Dashboard-Tiles/Insurance-Expiration.htm

If you have the paid insurance integration with LeaseTrack , the Insurance Expiration tile displays tenants and homeowners with insurance policies that are expiring within a set number of days.

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

 Tenants and homeowners are excluded from the tile if one or more of the following conditions are true:

 -
 The tenant or homeowner has a lease with the Don't require insurance option selected.

 -
 The tenant or homeowner has a lease with a Move Out date on, or Expected MO date before the insurance expiration date.

 -
 The tenant or homeowner's lease is for a unit type marked as Other Rentable Items (ORI) .

 -
 The tenant or homeowner has a lease at a property that does not have insurance tracking enabled.

 -
 The tenant or homeowner has a lease with a insurance policy expiring, but has another policy with an expiration date outside of the set Days to Include .

 Filter Information

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Edit dashboard data filters
 Enabled

 For more information, refer to Control User Access .

 To filter the information that displays in the dashboard tile, click arrow_forward Settings to open the Insurance Expiration Data Filters pop-up. The available filter options are listed below.

 Option
 Description

 Days to Include

 The number of days in the future, including today, included in the tile results. For example, if you enter 10 , leases with insurance that expire between today and ten days into the future display.

 Ignore dashboard property filter

 If checked, override the property filter configured on the Dashboard .

 Property Filter

 Each property whose tenants and homeowners with expiring insurance are included in the tile results. To include all current and future properties, select <All Properties> . Alternatively, select a property Group from the drop-down list.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Column Descriptions

 The information that displays on the tile is organized into the following columns.

 Column
 Description

 End Date

 The date the insurance expires in a dd/mm/yy format.

 Property

 The name of the property to which the insurance is tied.

 Tenant

 The name of the tenant or homeowner to which the insurance is tied.

 Unit

 The name of the unit to which the insurance is tied.
