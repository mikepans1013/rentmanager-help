# Vacancy (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Vacancy.htm

The Vacancy report displays the active but vacant units of selected properties as of the selected date. This report provides general information about vacant units including how long the units have been vacant and the market rent values of each. You can also filter the report to display only vacant units with specific amenities.

 The report includes only those units that are vacant and have no unit status or if the units are vacant and have the unit status type option to Show as Vacant checked as of the report date.

 More Information

 This report doesn't include units with a unit type marked as Other Rentable Item .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Vacancy .

 For more information, refer to Control User Access .

 To view the Vacancy report, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Occupancy arrow_forward Vacancy .
The Reports: Vacancy page displays.

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

 Include Site Classification

 Check to display the Site Classification column, which displays the short name of each unit's site classification. This option is accessible only when at least one manufactured housing–type property is selected.

 Checking this option also displays the Site Classification Breakdown subreport, which includes information only for units associated with a manufactured housing–type property.

 The site classification that displays is based on the date selected in the As of Date section.

 Sort Options

 Select one of the following options to determine how the report results are organized within each property subheading:

 Option
 Description

 Address

 Units are sorted alphanumerically by Default address. Units with the same address are further sorted alphanumerically by Unit name.

 Square Feet

 Units are sorted numerically by Sq. Footage in ascending order (least to greatest). Units with the same square footage are further sorted alphanumerically by Unit name.

 Unit

 Units are sorted alphanumerically by Unit name.

 Unit Type

 Units are first sorted alphanumerically by Unit Type name. Units with the same unit type are further sorted alphanumerically by Unit name.

 Site Classification

 Units are sorted alphanumerically by site classification short name. This option displays only when Include Site Classification is checked.

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

 Detail or Summary

 This option determines how much information is displayed in the report.

 Option
 Description

 Detail

 A line item for each vacant unit at the property displays.

 Summary

 Condensed information about all vacant units at a property displays.

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

 The name of units with vacancies as of the report date.

 Unit Type

 The unit type associated with the unit.

 Default Address

 The primary address as entered on the Unit details page.

 Comment

 If a prospect has reserved a unit and the move-in date is set to today or before, this field displays a message. If the unit is reserved in the future or no unit is reserved, any optional message entered on the Unit details page in the Comment field displays.

 Sq. Ft.

 The square footage of the unit as entered on the Unit details page.

 Days Vacant

 How many days passed since the last time each unit was occupied. A dash displays if the unit was never occupied.

 Rent Amount

 The dollar amount of the most recent unit market rent for each vacant unit as of the report date.

 Vacant Units and Percent Values

 For each property, Rent Manager displays how many units are vacant as of the report date in comparison to the total number of units for that property. For example, 1 of 2 means one unit is vacant out of two units at this property.

 Rent Manager also calculates the percent of units that are vacant for each property as of the report date using the following formula:

 Percent Vacant = Vacant Units/Total Units

 Site Classification

 The name of the unit's site classification as displayed on the Unit details page. A blank row displays if the unit is not associated with a manufactured housing-type property.

 Summary

 If the Summary report option is selected, the following columns display:

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

 The percentage of the property’s square footage that is currently vacant using the following formula:

 % Vacant Sq. Ft. = Vacant Unit Sq. Ft./Total Sq. Ft.

 Summary Subreport

 This subreport displays basic information about the total vacancies for the properties selected.

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

 Site Classification Breakdown Subreport

 This subreport displays when the Include Site Classification report option is checked, only displaying units associated with a manufactured housing–type property.

 The following columns are available in this subreport:

 Column
 Description

 # of Units

 The total number of units that are assigned to the site classification as of the report date.

 % Vacant

 The percentage of units assigned to the site classification that are currently vacant for each property calculated using the following formula:

 % Vacant = Vacancies / # of Units

 Vacancies

 The total number of vacant units assigned to the site classification as of the report date.

 Site Classification

 The short name of the site classification assigned to the unit.
