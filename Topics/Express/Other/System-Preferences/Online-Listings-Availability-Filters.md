# Online Listings Availability Filters (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/Online-Listings-Availability-Filters.htm

These system preferences allow you to specify how Rent Manager determines which units or properties should be listed as available on ILS feeds. Both unit and property criteria are available, but the criteria used depends on whether the marketing is enabled on the property-level or unit-level.

 For properties where property-level marketing is enabled, Rent Manager first looks at the Property Filter Criteria to determine what properties are available. If the property's marketing setup has the Exclude unit-specific information option unchecked, Rent Manager then looks at the Unit Filter Criteria to determine available units. For properties where unit-level marketing is enabled, Rent Manager considers only the Unit Filter Criteria .

 For more information, refer to Marketing Online Listings (Page) .

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
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Online Listings arrow_forward Availability Filters .
The System Preferences: Online Listings - Availability Filters page displays.

 -
 Edit the settings as desired. Each setting is described in the headings below.

 -
 Click Save .
The system preference configuration is updated.

 Unit Filter Criteria

 To inform Rent Manager when a unit should be considered vacant and available, select from one of the options below. This applies to properties with unit-level marketing enabled, or properties with the option Exclude unit-specific information  unchecked.

 Vacancy and Unit Status

 Determines vacancies based on unit status. Units that are both vacant and available are pushed to the online listing. If selected, the additional fields described below become available and must be configured.

 Option
 Description

 Exclude future leased units

 Excludes units in search results if they have a future tenant with a Lease Start date in the future.

 For example, your ILS services updates the feed on 11/1/ 2026 . On that date, unit 100 is vacant and available, but another tenant is starting a lease for that unit on 12/1/ 2026 . Therefore, this unit is excluded from the ILS feed.

 Occupancy End Date

 Determines vacancies based on one of the following fields located on the tenant's lease details page. Select one of the options below.

 Expected move out

 Unit vacancy is calculated based on the date entered in the Expected Move Out field of the occupying tenant's lease.

 Move Out

 Unit vacancy is calculated based on the date entered in the Move Out field of the occupying tenant's lease.

 Related Preferences

 If you select this option, this date is considered as your availability filter's occupancy end date, regardless of whether or not the move out has been confirmed. The Require moveout confirmation to stop recurring charge preference does not affect availability filters, only recurring charges. For more information, refer to General Options (System Preferences) .

 Notice

 Unit vacancy is calculated based on the date entered in the Notice field of the occupying tenant's lease.

 If this option is enabled, a rental unit is considered occupied (and therefore not vacant) starting from the Move In date of the occupying tenant through the Notice date.

 Show units as available x days after occupancy end

 Sets the unit's availability to the entered number of days after your selected occupancy end date.

 For example, if the Occupancy End Date is set to Move Out and you enter 10 in the field, the unit does not show as available on internet listing service (ILS) sites until ten days after the last move-out date for that unit. Therefore, if a tenant has a move-out date of 4/1/ 2026 , the unit is not considered available until 4/11/ 2026 .

 If unchecked, the unit is considered available the day after the selected occupancy end date.

 Show units available within x days of search date

 Units display in ILS search results if they are both vacant and available within the entered number of days from the search date. This allows you to start marketing units before their availability date.

 For example, if you enter 14 in the field and an individual searches for units on an ILS on 11/1/ 2026 , every rental unit with an occupancy end date of 11/15/ 2026 or later is included in their search results.

 User Defined Field

 This option determines vacancies based on a unit-level user-defined field (UDF) with a data type of Yes/No . All units that have the selected UDF value set to Yes display as available. For example, if you have a Yes/No type UDF for List Online? , selecting this option lists all units with Yes selected for that UDF.

 For more information, refer to User Defined Fields (Page) .

 Follow Unit Availability Profile

 This option determines vacancies based on a unit availability template created in the Availability Profiles section of system web preferences. Units that meet the availability criteria defined in the selected unit availability profile are included in the feed.

 For more information, refer to Availability Profile (System Web Preferences) .

 Warning

 Unit availability profile templates can be used only if they meet the following conditions:

 -
 In the template's Filter Criteria section under the Date Range field, the Show any available within date range option must not be checked.

 -
 In the template's Filter Criteria section, the Follow Online Listings Feed option must not be selected.

 Property Filter Criteria

 To set up the criteria that displays properties as available, select from one of the following options:

 Option
 Description

 Follow unit filter criteria

 Includes properties that have at least one unit that satisfies the Unit Filter Criteria chosen in the previous section.

 Show all properties

 All properties display in the internet listing service (ILS) feed, regardless of the availability settings established in the Unit Filter Criteria section.

 User Defined Field

 Determines availability based on a property-level user-defined field (UDF) with a data type of Yes/No . All properties that have the selected UDF value set to Yes display as available.

 For example, if you select a Yes/No type UDF named Include in ILS Listings , all properties with Yes selected for that UDF are listed.
