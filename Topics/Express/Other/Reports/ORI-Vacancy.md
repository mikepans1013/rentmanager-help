# ORI Vacancy (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/ORI-Vacancy.htm

The ORI Vacancy report displays the active but vacant units with a unit type marked as Other Rentable Item (ORI) of selected properties as of the specified date. This report provides general information about vacant ORI units such as storage units and garages, including how long the units have been vacant and the market rent values of each unit. You may also filter the report to only show vacant units with specific amenities. Additionally, this report does not consider the general ledger (GL) start date. If the report is run before the GL start date, any unit that was vacant as of that date displays.

 More Information

 The report displays only units that meet one of the following conditions:

 -
 The unit is vacant and has no unit status.

 -
 The unit is vacant and has the unit status types option to Show as Vacant checked as of the report date. For more information, refer to Unit Status Types (Page) .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to ORI Vacancy .

 For more information, refer to Control User Access .

 To view the ORI Vacancy report, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Occupancy arrow_forward ORI Vacancy .
The Reports: ORI Vacancy page displays.

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

 More Information

 Properties with the Property Type of RV/Campground or Short Term Rental do not display in this report. Short term rental property information is available in reports listed in the Short Term Rentals report category.

 Sort Options

 Select one of the following options to determine how the report results are organized within each property subheading.

 Option
 Description

 Address

 ORI units are sorted alphanumerically by Default address. Units with the same address are further sorted alphanumerically by Unit name.

 Square Feet

 ORI units are sorted numerically by Sq. Footage in ascending order (least to greatest). Units with the same square footage are further sorted alphanumerically by Unit name.

 Unit

 ORI units are sorted alphanumerically by Unit name.

 Unit Type

 ORI units are first sorted alphanumerically by Unit Type name. Units with the same unit type are further sorted alphanumerically by Unit name.

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

 Detail or Summary

 This option determines how much information is displayed in the report.

 Option
 Description

 Detail

 Displays a line item for each vacant ORI unit at the property.

 Summary

 Displays condensed vacancy information about all ORI units at a property.

 Amenities Required

 Select amenities to show only vacant units that have the specified amenities. If no amenities are specified, the report shows all vacant units for the selected properties.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The report generates with different columns depending on the report options selection in the Detail or Summary field. The report output that displays based on each report option is described below.

 Detail

 If the Detail report option is checked, the following columns display:

 Column
 Description

 Unit

 The ORI unit name.

 Unit Type

 The unit type associated with the ORI unit.

 Default Address

 The primary address, as entered on the unit's details page.

 Comment

 If a prospect has reserved an ORI unit on the prospect details page's Preferences tile and the move in date is set to today or before, Reserved displays. If the unit is reserved in the future or no unit is reserved, the optional message entered on the unit details page's General tile displays.

 Sq. Ft.

 The square footage of the ORI unit as displayed on the unit detail page's Miscellaneous tile.

 Days Vacant

 How many days have passed since the last time each ORI unit was occupied.

 Rent Amount

 The most recent unit market rent for each vacant ORI unit by the As of Date .

 Vacant Units and Percent Values

 For each property, Rent Manager displays how many ORI units are vacant by the As of Date in comparison to the total number of ORI units for that property. For example, 1 of 2 would mean one ORI unit is vacant out of two ORI units for the property.

 Rent Manager also calculates the percent of ORI units that are vacant for each property as of the report date using the following formula:

 Percent Vacant = Vacant ORI Units / Total ORI Units

 Summary

 If the Summary report option is selected, the following columns display:

 Column
 Description

 Property

 The name of each property selected in the report options.

 # of Units

 The number of active ORI units associated with each property by the As of Date .

 Vacancies

 The number of unoccupied (or vacant) ORI units associated with each property by the As of Date .

 % Vacant

 The percentage of ORI units that are currently vacant for each property using the following formula:

 % Vacant = Vacant ORI Units / ORI Total Units

 Total Sq. Ft.

 The sum of the total square footage of each property as displayed on the unit detail page's Miscellaneous tile.

 Vacant unit Sq. Ft.

 The sum of the square footage of every vacant ORI unit of that property.

 % Vacant Sq. Ft.

 The percentage of the property’s square footage that is currently vacant using the following formula:

 % Vacant SqFt = Vacant ORI Unit SqFt / Total SqFt

 Summary Subreport

 The Summary subreport provides basic information about the total ORI vacancies for the properties selected.

 More Information

 If Summary is selected in the Detail or Summary section of the report options, then the report results of the ORI Vacancy report display only the Summary .

 The following columns are available in this subreport:

 Column
 Description

 Property

 The name of each property selected in the report options.

 # of Units

 The number of active units associated with each property as of the report date.

 Vacancies

 The number of unoccupied units associated with each property as of the report date.

 % Vacant

 The percentage of units that are currently vacant for each property calculated using the following formula:

 % Vacant = Vacant Units/Total Units

 Total Sq. Ft.

 The sum of the total square footage of each unit at the property as entered on each Unit details page.

 Vacant Unit Sq. Ft.

 The sum of the square footage of every vacant unit of that property.

 % Vacant Sq. Ft.

 The percentage of the property's square footage that is currently vacant calculated using the following formula:

 % Vacant Sq. Ft. = Vacant Unit Sq. Ft./Total Sq. Ft.
