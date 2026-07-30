# Short Term Rental Vacancy (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/STR-Vacancy.htm

The Short Term Rental Vacancy report lists the vacant units at properties with the Property Type marked as RV/Campground or Short Term Rental by month as of the specified date. The results include the number of nights the units have been vacant and the property vacancy percentage for the selected short-term rental (STR) properties. Additionally, you may filter the results to show only units with specific amenities.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Short Term Vacancy .

 For more information, refer to Control User Access .

 To view the Short Term Rental Vacancy report, do the following:

 -
 Go to arrow_forward Short Term Rentals arrow_forward General arrow_forward Short Term Rental Vacancy .
The Reports: Short Term Rental Vacancy page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Properties to Include

 Select each property or a property Group to be included in the report. Only properties with a Property Type of RV/Campground or Short Term Rental display in the list.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Sort Options

 Select one of the following options to determine how the report results are organized within each property subheading:

 Option
 Description

 Address

 STR units are sorted alphanumerically by Default address. Units with the same address are further sorted alphanumerically by Unit name.

 Unit

 STR units are sorted alphanumerically by Unit name.

 Unit Type

 STR units are first sorted alphanumerically by Unit Type name. Units with the same unit type are further sorted alphanumerically by Unit name.

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

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The report generates with different columns depending on the report options selection in the Detail or Summary section. If the report option for Detail is checked, the columns below display for each property.

 Additionally, next to the name of each property, Rent Manager displays how many STR units are vacant as of the report date in comparison to the total number of STR units for that property. For example, 1 of 2 would mean one STR unit is vacant out of two STR units for the property.
 Rent Manager also calculates the percent of STR units that are vacant for each property as of the report date using the following formula:

 Vacancy = Vacant STR Units / Total STR Units

 Column
 Description

 Address

 The primary address as entered on the unit's details page.

 Comment

 If a prospect has reserved the STR unit from the Interested Properties/Units pop-up on the prospect's details page and the move in date is set to today or in the future, Reserved displays.

 If the unit is not reserved, the optional message entered on the unit's details page in the General tile displays.

 Nights Vacant

 The total number of nights that have passed since the last time each STR unit was occupied.

 A dash (-) displays if the STR unit was never occupied.

 Unit

 The name of the STR unit.

 Unit Type

 The unit type associated with the STR unit.

 Summary Subreport

 If Summary is selected in the report options, then results of the Short Term Rental Vacancy report displays only the Summary subreport. The Summary subreport provides basic information about the total STR vacancies for the properties selected.

 The following columns display in the subreport:

 Column
 Description

 % Vacant

 The percentage of STR units that are currently vacant for each property using the following formula:

 % Vacant = Vacant STR Units / Total STR Units

 Property

 The name of each property selected in the report options.

 Units

 The number of active STR units associated with each property as of the report date.

 Vacancies

 The number of unoccupied (or vacant) STR units associated with each property as of the report date.
