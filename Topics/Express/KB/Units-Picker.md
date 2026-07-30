# Unit Picker

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Units-Picker.htm

With Unit Picker , you can set up filters to identify units that match the preferences of prospective tenants. Depending on the status of the prospect, you can indicate that they are interested in leasing a unit, place them on a waiting list so they are informed when the unit is available, or reserve the unit for them.

 Unit Picker can be used to create a new prospect or tenant account, update preferences for an existing prospect, or establish preferences for an existing tenant who is moving to a new, undecided unit. Each workflow is described in this topic.

 Option 1: Create New Prospect or Tenant with Unit Picker

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Units
 View

 Unit picker
 Enabled

 Tenants/Prospects
 Prospects
 Add, View, Edit

 For more information, refer to Control User Access .

 If you have not yet created an account for a prospect in Rent Manager , you can use the standalone Unit Picker page to establish their unit preferences before filling out the rest of their account details.

 To set up a new prospect's unit preferences with the Unit Picker , do the following:

 -
 Go to arrow_forward Search arrow_forward Unit Picker .

 -
 At the top of the page, select each Property the prospect is interested in from the drop-down list.

 Related Privileges

 To allow users to select properties in this field that they otherwise cannot access, the following privilege is required:

 Group
 Privilege
 Column

 Tenants/Prospects
 Access limited occupancy information for all properties
 Enabled

 If this privilege is disabled, the user can select only properties enabled on their user's details page.

 For more information, refer to Control User Access .

 -
 By default, Only Show Available Units is enabled. If you wish to include unavailable units in the results, uncheck this option.

 -
 Select the rentable items to include.

 Option
 Description

 Include Assets

 Lists assets assigned to any selected properties. Assets display only if, on the asset's details page, the Allow asset to be rented option is enabled. For more information, refer to Asset Details (Page) .

 Include ORI

 Lists units whose unit type(s) have the Other Rentable Item option enabled. Units displays only if, on the corresponding unit type's details page, the Other Rentable Item option is enabled. For more information, refer to Unit Type Details (Page) .

 Include Units

 Lists units associated with any selected properties.

 -
 In the Unit Preference Filters section, select the prospect's preferred unit qualifications.

 Field
 Description

 Expected Move In/Move Out

 The prospect's desired start ( From ) and/or end ( To ) dates for their potential lease.

 Number of People

 The total number of occupants the prospect plans to have in their unit.

 Preferred Amenities

 The unit- and/or property-type amenities the prospect would like to have.

 Preferred Floors

 The floor(s) of the building that the prospect prefers to live on.

 Preferred Unit Types

 The unit type(s) the prospect is interested is renting.

 Rent Max.

 The highest dollar amount the prospect wants to pay for rent.

 Rent Min.

 The lowest dollar amount the prospect wants to pay for rent.

 -
 In the Unit User Defined Field Filters section, select the desired User Defined Field (UDF) and associated Value to include only the unit(s) with that value, then click Add UDF Filter . You can add multiple UDFs and values to further filter the results.

 More Information

 Since only unit-type UDFs can be selected in this section, adding a UDF filter removes all assets and ORIs from the filtered results. If you want to include assets and ORIs, leave this section blank.

 -
 In the Units Matching Criteria section, select the rentable item(s) that meet the established filter options that the prospect is interested in. The following columns display.

 Column
 Description

 Floor

 The floor of the property where the rentable item is located.

 Max Occupancy

 The highest number of residents that can reside in the rentable item.

 Property

 The property where the rentable item is located.

 Rent

 The active market rent amount for the unit.

 Status

 The current status of the rentable item. If it can be rented and/or reserved, Available displays. If it is occupied or reserved, the status displays the name of the occupant or prospect and the date that their occupancy or reservation ends. Multiple entries are separated by a semicolon ( ; ).

 For example, if a tenant named Alexander Smith is currently occupying the unit but has a Move Out date of 5/29/ 2026 , Occupied by Alexander Smith until: 5/29/ 2026 displays in this column.

 Unit

 The name of the rentable item.

 Unit Type

 The categorization of the rentable item.

 -
 To create a prospect or tenant account for any matching units, choose one of the following options and complete the corresponding add wizard. For more information about creating prospects and tenants, refer to Add a Prospect and Add a Tenant .

 Option
 Description

 Add Prospect

 The Add Prospect wizard displays with the Units Matching Criteria tab's I (interested) column checked for each unit selected on the Unit Picker page.

 Alternatively, next to Add Prospect , select arrow_forward Add Interested Units .

 Add Tenant

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 Add, View

 For more information, refer to Control User Access .

 To create a tenant account for a matching unit, select arrow_forward Add Tenant on the unit and complete the Add Tenant wizard. For more information, refer to Add a Tenant .

 Add to Wait List

 The Add Prospect wizard displays with the Units Matching Criteria tab's WL (wait list) column checked for each unit selected on the Unit Picker page. Units with wait-listed prospects can be reviewed by generating the Prospect Waiting List report. For more information, refer to Prospect Waiting List (Report) .

 Reserve Unit

 The Add Prospect wizard displays with the Units Matching Criteria tab's R (reserved) column checked for the selected unit. Select arrow_forward   Reserve Unit on a single unit you wish to reserve for the prospect.

 -
 To send a letter with additional information about the unit, click Print Selected Unit Documents to display the Compose Letter pop-up. For more information on sending letters, refer to Generate and Distribute Letters from Templates .

 Related Preferences

 Before you can generate a unit-type letter template, you must select a Unit Info Document in system preferences. For more information, refer to Prospect (System Preferences) .

 -
 Once you have completed the Add Prospect wizard, click Save and New to create the prospect and leave the wizard open to add an additional prospect, or click Save and Finish to create the prospect and close the wizard.

 Option 2: Establish Unit Preferences for Existing Prospect

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Units
 View

 Unit picker
 Enabled

 Tenants/Prospects
 Prospects
 View, Edit

 For more information, refer to Control User Access .

 If you have already created a prospect account in Rent Manager , you can enter their unit preferences directly from that account.

 To set up an existing prospect's unit preferences, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Prospects and select a prospect from the list.
The prospect's details page displays.

 -
 On the action bar to the right, select arrow_forward Unit Picker .

 -
 At the top of the pop-up, select each Property the prospect is interested in from the drop-down list.

 Related Privileges

 To allow users to select properties in this field that they otherwise cannot access, the following privilege is required:

 Group
 Privilege
 Column

 Tenants/Prospects
 Access limited occupancy information for all properties
 Enabled

 If this privilege is disabled, the user can select only properties enabled on their user's details page.

 For more information, refer to Control User Access .

 -
 By default, Only Show Available Units is enabled. If you wish to include unavailable units in the results, uncheck this option.

 -
 In the Unit Preference Filters section, select the prospect's preferred unit qualifications.

 Field
 Description

 Amps

 The desired amperage for an electrical hookup requested by the prospect. This field displays only when properties with the RV/Campground property type are selected.

 Expected Move In/Move Out

 The prospect's desired start ( From ) and/or end ( To ) dates for their potential lease. If only properties with the RV/Campground property type are selected, this field is titled Expected Arrival/Departure .

 Length

 The desired length of the short-term rental (STR) unit in feet. This field displays only when properties with the RV/Campground property type are the only properties selected.

 Number of People

 The total number of occupants the prospect plans to have in their unit.

 Preferred Amenities

 The unit- and/or property-type amenities the prospect would like to have.

 Preferred Floors

 The floor(s) of the building that the prospect prefers to live on. This field does not display if only properties with the RV/Campground property type are selected.

 Preferred Unit Types

 The unit type(s) the prospect is interested is renting.

 Rent Max.

 The highest dollar amount the prospect wants to pay for rent.

 Rent Min.

 The lowest dollar amount the prospect wants to pay for rent.

 Show Pull Through Only

 If checked, only units that allow a vehicle can drive through the spot, park, and exit, without needing to reverse are included in the filter results. This field displays only when properties with the RV/Campground property type are selected.

 Width

 The desired width of the STR unit in feet. This field displays only when properties with the RV/Campground property type are selected.

 -
 In the Unit User Defined Field Filters section, select the desired User Defined Field (UDF) and associated Value to include only the unit(s) with that value, then click Add UDF Filter . You can add multiple UDFs and values to further filter the results.

 -
 At the bottom of the pop-up, select unit(s) that meet the established filter options that the prospect is interested in. The following columns display.

 Column
 Description

 Floor

 The floor of the property where the unit is located.

 Interested

 Indicates the prospect is interested in leasing the unit but has not made a decision yet.

 More Information

 This information is available only on a prospect's details page by default, but it can be retrieved for Report Writer reports and letter templates using the InterestedUnits function. For more information, refer to Prospect Class (Script) .

 Max Occupancy

 The highest number of residents that can reside in the unit.

 Property

 The property where the unit is located.

 Rent

 The active market rent amount for the unit.

 Status

 The current status of the rentable item. If it can be rented and/or reserved, Available displays. If it is occupied or reserved, the status displays the name of the occupant or prospect and the date that their occupancy or reservation ends. Multiple entries are separated by a semicolon ( ; ).

 For example, if a tenant named Alexander Smith is currently occupying the unit but has a Move Out date of 5/29/ 2026 , Occupied by Alexander Smith until: 5/29/ 2026 displays in this column.

 Unit

 The name of the unit.

 Unit Type

 The categorization of the unit.

 Wait List

 If checked, indicates that the prospect would like to rent the unit whenever it becomes available. Units with wait-listed prospects can be reviewed by generating the Prospect Waiting List report. For more information, refer to Prospect Waiting List (Report) .

 -
 To reserve a unit for the prospect, select arrow_forward Reserve Unit on the unit you wish to reserve, then click Yes on the confirmation pop-up. If the unit you are reserving is at a different property than the one selected on the prospect account, you are prompted to change the prospect's primary property to match the reserved unit.

 -
 To send a letter with additional information about the unit, click Print Selected Unit Documents to display the Compose Letter pop-up. For more information on sending letters, refer to Generate and Distribute Letters from Templates .

 Related Preferences

 Before you can generate a unit-type letter template, you must select a Unit Info Document in system preferences. For more information, refer to Prospect (System Preferences) .

 -
 Click Save .
The prospect's unit preferences are updated and can be viewed on the Interested Properties/Units and, if a unit was reserved, Reservation/Expected Lease Information tiles.

 Option 3: Establish Preferences During Tenant Transfer

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Units
 View

 Unit picker
 Enabled

 Tenants/Prospects
 Tenants
 View, Edit

 Prospects
 Add, View

 For more information, refer to Control User Access .

 If a tenant is transferring to a new unit but has not yet decided on the unit they want to move to, you can use the Transfer a Tenant to create a new prospect account for the resident. Then, you can open the Unit Picker pop-up to establish the tenant's preferences for their new unit.

 To set up unit preferences during the tenant transfer process, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select the tenant you need to transfer.
The tenant's details page displays.

 -
 On the Leases tile, select arrow_forward Transfer Tenant .

 -
 At the top, select Create a new prospect account from the drop-down list.

 Related Preferences

 If only the Create a new tenant account option is selected in system preferences, you cannot create a prospect account while completing this wizard. For more information, refer to Tenant Transfers (System Preferences) .

 -
 In the Property drop-down list, select the property that the tenant wants to transfer to. This becomes their primary property in Rent Manager , but you can select units at other properties if the tenant is interested.

 Related Privileges

 To allow users to select properties in this field that they otherwise cannot access, the following privilege is required:

 Group
 Privilege
 Column

 Tenants/Prospects
 Access limited occupancy information for all properties
 Enabled

 If this privilege is disabled, the user can select only properties enabled on their user's details page.

 For more information, refer to Control User Access .

 -
 Click Next .
The Select New Unit tab displays.

 -
 In the Find Interested Units section, click Find Units .

 -
 At the top of the pop-up, select each Property the prospect is interested in from the drop-down list.

 Related Privileges

 To allow users to select properties in this field that they otherwise cannot access, the following privilege is required:

 Group
 Privilege
 Column

 Tenants/Prospects
 Access limited occupancy information for all properties
 Enabled

 If this privilege is disabled, the user can select only properties enabled on their user's details page.

 For more information, refer to Control User Access .

 -
 By default, Only Show Available Units is enabled. If you wish to include unavailable units in the results, uncheck this option.

 -
 In the Unit Preference Filters section, select the prospect's preferred unit qualifications.

 Field
 Description

 Expected Move In/Move Out

 The prospect's desired start ( From ) and/or end ( To ) dates for their potential lease.

 Number of People

 The total number of occupants the prospect plans to have in their unit.

 Preferred Amenities

 The unit- and/or property-type amenities the prospect would like to have.

 Preferred Floors

 The floor(s) of the building that the prospect prefers to live on.

 Preferred Unit Types

 The unit type(s) the prospect is interested is renting.

 Rent Max.

 The highest dollar amount the prospect wants to pay for rent.

 Rent Min.

 The lowest dollar amount the prospect wants to pay for rent.

 -
 In the Unit User Defined Field Filters section, select the desired User Defined Field (UDF) and associated Value to include only the unit(s) with that value, then click Add UDF Filter . You can add multiple UDFs and values to further filter the results.

 -
 At the bottom of the pop-up, select the unit(s) that meet the established filter options that the prospect is interested in. The following columns display.

 Column
 Description

 Floor

 The floor of the property where the unit is located.

 Interested

 Indicates the prospect is interested in leasing the unit but has not made a decision yet.

 More Information

 This information is available only on a prospect's details page by default, but it can be retrieved for Report Writer reports and letter templates using the InterestedUnits function. For more information, refer to Prospect Class (Script) .

 Max Occupancy

 The highest number of residents that can reside in the rentable item.

 Property

 The property where the unit is located.

 Rent

 The active market rent amount for the unit.

 Status

 The current status of the rentable item. If it can be rented and/or reserved, Available displays. If it is occupied or reserved, the status displays the name of the occupant or prospect and the date that their occupancy or reservation ends. Multiple entries are separated by a semicolon ( ; ).

 For example, if a tenant named Alexander Smith is currently occupying the unit but has a Move Out date of 5/29/ 2026 , Occupied by Alexander Smith until: 5/29/ 2026 displays in this column.

 Unit

 The name of the unit.

 Unit Type

 The categorization of the unit.

 Wait List

 If checked, indicates that the prospect would like to rent the unit whenever it becomes available. Units with wait-listed prospects can be reviewed by generating the Prospect Waiting List report. For more information, refer to Prospect Waiting List (Report) .

 -
 Click Apply .
The Unit Picker pop-up closes and the unit preferences are saved.

 -
 Continue the Transfer a Tenant wizard. For more information, refer to Tenant Transfer Wizard .

 -
 Once finished, click Transfer .
The new prospect account is created with the selected unit preferences, which can be viewed on the account's Interested Properties/Units tile.
