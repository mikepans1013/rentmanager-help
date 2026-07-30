# Unit Availability Listing (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Unit-Availability-Listing.htm

The Unit Availability Listing report displays units available for rent as well as other units with a future scheduled unit status change. Unit status types help you track which units are vacant but being renovated or made ready for the next tenant. The report also displays units with future move outs and move ins to help you track which units are available for leasing.

 More Information

 Site classification names and short names can be customized to fit your business needs. For more information, refer to Homeowner Statuses & Site Classifications .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Unit Availability Listing .

 For more information, refer to Control User Access .

 To view the Unit Availability Listing report, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Occupancy arrow_forward Unit Availability Listing .
The Reports: Unit Availability Listing page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Properties to Include

 Select each property or a property Group to be included in the report.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Include Site Classification

 Check to display the Site Classification column, which displays the short name of each unit's site classification. This option is accessible only when at least one manufactured housing–type property is selected.

 Checking this option also displays the Site Classification Breakdown subreport, which includes information only for units associated with a manufactured housing–type property.

 The site classification that displays is based on the date selected in the As of Date section.

 Sort Options

 Select one of the following options to determine how the report results are organized:

 Option
 Description

 City

 Units are sorted alphabetically by the city name in the unit's Default address. Units in the same city are further sorted alphanumerically by Unit name.

 Property

 Units are first sorted alphanumerically by Property name. Units at the same property are further sorted alphanumerically by Unit name.

 Site Classification

 Units are sorted alphanumerically by Site Classification name.

 Unit

 Units are sorted alphanumerically by Unit name.

 Unit Type

 Units are first sorted alphanumerically by Unit Type name. Units with the same unit type are further sorted alphanumerically by Unit name.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 The following subreports display only if there are tenants that meet the established criteria.

 Available

 This section displays units that are vacant, not leased with a future lease start date, and either do not have a unit status or have a unit status with Show As Available checked, as of the report date.

 The columns that display in the report are described below.

 Column
 Description

 Days

 The number of days the unit has been vacant and available as of the report date.

 More Information

 If the unit was never marked as occupied by a tenant in Rent Manager , this field displays the number of days since a unit status ended in which the unit status type selected did not have the Show As Available option checked.

 Mkt. Rent

 The most recent market rent amount entered on the unit's details page on the Current Market Rent tile.

 Move Out

 The move out date of the previous tenant, entered on the tenant's details page on the Leases tile for the tenant's relevant lease.

 Property

 The short name of the property associated with each unit.

 Site Classification

 The name of the unit's site classification as displayed on the unit's details page. A blank row displays if the unit is not associated with a manufactured housing–type property.

 Unit

 The name of each unit.

 Unit Type

 The category assigned to each unit on the unit's details page.

 Unit Notes

 An optional message entered on the Unit details page in the Comment field.

 Will Be Available

 This section displays vacant units with a unit status that has Show As Available unchecked as of the report date and a future unit status End Date entered on the unit's details page in the Unit Status tile.

 The columns that display in the report are described below.

 Column
 Description

 Avail. Date

 The move out date of the previous tenant.

 Days

 The number of days the unit has been vacant and available as of the report date.

 More Information

 If the unit was never marked as occupied by a tenant in Rent Manager , this field displays the number of days since a unit status ended in which the unit status type selected did not have the Show As Available option checked.

 Mkt. Rent

 The most recent market rent amount for the unit entered on the unit's details page on the Current Market Rent tile.

 Property

 The short name of the property associated with the unit.

 Site Classification

 The name of the unit's site classification as displayed on the unit's details page. A blank row displays if the unit is not associated with a manufactured housing–type property.

 Unit

 The name of the unit.

 Unit Status

 The Description for the most recent unit status, as entered on the Unit Status Type Details pop-up.

 Unit Status Notes

 An optional message entered in the Unit Status Details pop-up in the Comments field.

 Unit Type

 The category assigned to the unit on the unit's details page.

 Occupied With Notice

 This section displays occupied units that either have a current tenant with a future Notice date, future Expected MO  date, or future Move Out date as of the report date.

 The columns that display in the report are described below.

 Column
 Description

 Mkt. Rent

 The most recent market rent amount for the unit as entered on the unit's details page's Current Market Rent tile.

 Move Out

 The move out date of the current tenant as entered on the tenant's details page in the Leases tile for the tenant's relevant lease.

 Notice

 The date the most recent tenant gave notice they would be vacating as entered on the tenant's details page in the Leases tile's Notice field.

 Property

 The short name of the property associated with the unit.

 Site Classification

 The name of the unit's site classification as displayed on the unit's details page. A blank row displays if the unit is not associated with a manufactured housing–type property.

 Tenant Name

 The name of the tenant currently leasing the unit.

 Unit

 The name of each unit.

 Unit Notes

 An optional message entered on the unit's details page in the Comment field.

 Unit Type

 The category assigned to the unit on the unit's details page.

 Occupied Pre-Lease

 This section displays occupied units that have both a current tenant with a Move Out date and a new tenant with a future Move In date entered on the tenant's details page in the Leases tile for the tenant's relevant lease as of the report date.

 The columns that display in the report are described below.

 Column
 Description

 Current Tenant

 The name of the tenant who is moving out of the unit.

 Future Tenant

 The name of the next tenant who is moving into the unit.

 Mkt. Rent

 The most recent market rent amount for each unit entered on the unit's details page in the Current Market Rent tile.

 Move In

 The date when the future tenant moves into the unit, entered on the tenant's details page in the Leases tile for the tenant's relevant lease.

 Move Out

 The move out date of the current tenant, entered on the tenant's details page in the Leases tile for the tenant's relevant lease.

 Property

 The short name of the property associated with the unit.

 Site Classification

 The name of the unit's site classification as displayed on the unit's details page. A blank row displays if the unit is not associated with a manufactured housing–type property.

 Unit

 The name of the unit.

 Unit Type

 The category assigned to the unit on the unit's details page.

 Pre-Lease Vacant

 This section displays currently vacant units with a tenant that has a future Move In date as of the report date.

 The columns that display in the report are described below.

 Column
 Description

 App. Date

 When a prospect has signed a future lease for this unit, this displays the prospect's Application Date as entered on the prospect General tab.

 Days

 The number of days the unit has been vacant and available as of the report date.

 More Information

 If the unit was never marked as occupied by a tenant in Rent Manager , this field displays the number of days since a unit status ended in which the unit status type selected did not have the Show As Available option checked.

 Future Tenant

 The name of the next tenant who is moving into the unit.

 Mkt. Rent

 The most recent market rent amount for the unit entered on the unit's details page in the Current Market Rent tile.

 Move In

 The date when the future tenant moves into the unit, entered on the tenant's details page in the Leases tile for the tenant's relevant lease.

 Move Out

 The move out date of the most recent tenant, entered on the tenant's details page in the Leases tile for the tenant's relevant lease.

 Property

 The short name of the property associated with the unit.

 Site Classification

 The name of the unit's site classification as displayed on the unit's details page. A blank row displays if the unit is not associated with a manufactured housing–type property.

 Unit

 The name of the unit.

 Unit Type

 The category assigned to the unit on the Unit details page.

 Pre-Lease Past Move In

 This section displays currently vacant units with a prospect that has a Reserved Move In date that is the same as or earlier than the report date.

 The columns that display in the report are described below.

 Column
 Description

 App. Date

 When a prospect has signed a future lease for this unit, this displays the prospect's Application Date , as entered on the prospect General tab.

 Days

 The number of days the unit has been vacant as of the report date. The unit must have a previous tenant with a move out date for this column to calculate the number of days the unit has been vacant.

 Mkt. Rent

 The most recent market rent amount for the unit entered on the unit's details page in the Current Market Rent tile.

 Move In

 The date when the future tenant moves into the unit, entered on the tenant's details page in the Leases tile for the tenant's relevant lease.

 Move Out

 The move out date of the most recent tenant, entered on the tenant's details page in the Leases tile for the tenant's relevant lease.

 Property

 The short name of the property associated with the unit.

 Prospect Name

 The name of the prospect who reserved the unit.

 Site Classification

 The name of the unit's site classification as displayed on the unit's details page. A blank row displays if the unit is not associated with a manufactured housing–type property.

 Unit

 The name of the unit.

 Unit Type

 The category assigned to the unit on the unit's details page.

 Pre-Lease Not Ready

 This section displays vacant units with a unit status that has Show As Available unchecked and that have a tenant with a future Move In date as of the report date.

 The columns that display in the report are described below.

 Column
 Description

 App. Date

 When a tenant moves into the unit, this displays the prospect's Application Date as entered on the Lead Information tile.

 Days

 The number of days the unit has been vacant as of the report date. The unit must have a previous tenant with a move out date for this column to calculate the number of days the unit has been vacant.

 Mkt. Rent

 The most recent market rent amount for each unit entered on the unit's details page in the Current Market Rent tile.

 Move In

 The date when the future tenant moves into the unit, entered on the tenant's details page in the Leases tile for the tenant's relevant lease.

 Move Out

 The move out date of the most recent tenant, entered on the unit's details page in the Leases tile for the tenant's relevant lease.

 Property

 The short name of the property associated with the unit.

 Site Classification

 The name of the unit's site classification as displayed on the unit's details page. A blank row displays if the unit is not associated with a manufactured housing–type property.

 Tenant Name

 The name of the tenant who plans to move into the unit.

 Unit

 The name of the unit.

 Unit Type

 The category assigned to the unit on the unit's details page.

 Summary By Unit Type

 This subreport displays the total number of units that fit into the different categories of available units and units with a future scheduled status change based on unit types as of the report date.

 The columns that display in the report are described below:

 Column
 Description

 Available

 The number of units that are vacant, not leased with a future date, and either do not have a unit status or have a unit status with Show As Available checked, as of the report date.

 Occupied Pre-Lease

 The number of occupied units that have both a current tenant with a Move Out date and a new tenant with a future Move In date as of the report date.

 Occupied With Notice

 The number of occupied units that either have a current tenant with a future Notice date, future Expected MO  date, or future Move Out date as of the report date.

 Pre-Lease Not Ready

 The number of vacant units with a unit status that has Show As Vacant checked and that have a tenant with a future Move In date as of the report date.

 Pre-Lease Vacant

 The number of vacant units with a tenant who has a future Move In date as of the report date. Units listed in the Pre-Lease Past Move In section are calculated into the Pre-Lease Vacant column total.

 Total

 The total number of units for each unit type that are available or have a future status change as of the report date.

 Type

 Each of the unit types that you have set up in Rent Manager .

 Will Be Available

 The number of vacant units with a unit status that has Show As Available unchecked as of the report date and a future unit status End Date entered on the Unit details page in the Unit Status tile.

 Site Classification Breakdown

 This subreport displays when the Include Site Classification report option is checked, only displaying units associated with a manufactured housing–type property.

 The following columns are available in this subreport:

 Column
 Description

 Available

 The total number of units listed in the Available section that are assigned to the site classification as of the report date.

 Occupied Pre-Lease

 The total number of units listed in the Occupied Pre-Lease section that are assigned to the site classification as of the report date.

 Occupied With Notice

 The total number of units listed in the Occupied With Notice section that are assigned to the site classification as of the report date.

 Pre-Lease Not Ready

 The total number of units listed in the Pre-Lease Not Ready section that are assigned to the site classification as of the report date.

 Pre-Lease Past Move In

 The total number of units listed in the Pre-Lease Past Move In section that are assigned to the site classification as of the report date.

 Pre-Lease Vacant

 The total number of units listed in the Pre-Lease Vacant section that are assigned to the site classification as of the report date.

 Site Classification

 The short name of the site classification assigned to the unit.

 Total

 The total number of units included in the report that are assigned to the site classification as of the report date.

 Will Be Available

 The total number of units listed in the Will Be Available section that are assigned to the site classification as of the report date.
