# Unit Turnover (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Unit-Turnover.htm

The Unit Turnover report displays unit and vacancy information during the report date range. This report helps you track which units are vacant and how long it takes, on average, for a new tenant to move into each unit. It gives an overview of turnover rates to identify vacancy trends over a period of time.

 More Information

 Site classification names and short names can be customized to fit your business needs. For more information, refer to Homeowner Statuses & Site Classifications .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Unit Turnover .

 For more information, refer to Control User Access .

 To view the Unit Turnover report, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Occupancy arrow_forward Unit Turnover .
The Reports: Unit Turnover page displays.

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

 Select one of the following options to determine how the report results are organized within each property subheading:

 Option
 Description

 Address

 Units are sorted alphanumerically by Default address. Units with no address display first in the list. Units with the same address are further sorted alphanumerically by Unit name.

 Unit

 Units are sorted alphanumerically by Unit name.

 Unit Type

 Units are first sorted alphanumerically by Unit Type name. Units with the same unit type are further sorted alphanumerically by Unit name.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Include Site Classification

 Check to display the Site Classification column, which displays the short name of each unit's site classification. This option is accessible only when at least one manufactured housing–type property is selected.

 The site classification that displays is based on the day chosen for the Site Classification Date option. Units not associated with a manufactured housing–type property display as blank in this column.

 Select one of the following Site Classification Date options to determine the date used to pull each unit's site classification:

 Option
 Description

 First day of period

 Display each unit's site classification as of the From date selected in the Date Range option.

 Last day of period

 Display each unit's site classification as of the To date selected in the Date Range option.

 Detail or Summary

 This option determines how much information is displayed in the report. A separate line item displays for each unit, sorted by property.

 Option
 Description

 Detail

 Includes tenant information, such as move in and move out dates, for all units listed.

 Summary

 Includes tenant information, such as move in and move out dates, only if the tenant leasing the unit changed during the selected date range.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Address

 The default address of the unit.

 Average Days Vacant

 The average length of time each unit has been vacant during the report date range. 0 displays if there were not any periods of time where a unit was vacant.

 Each period or span of days where a unit is vacant is used to calculate this column. If there is at least one period in the Date Range where the unit was vacant, this column is calculated using the following formula:

 Average Days Vacant = Total Days Vacant / the number of vacant periods

 If you selected the Detail report option, this column displays the tenant's Move Out date for the unit below the number for Average Days Vacant . If there is no move out date, Present displays.

 Market Rent

 The estimated value of a unit in relation to similar rental units in the area as entered on the unit's details page in the Current Market Rent tile. A subtotal for the market rent of all units in a property displays at the bottom of each property.

 Moveouts

 The number of tenants who leased a unit and have moved out during the Date Range . A subtotal of all tenants who either are leasing or have leased a unit at a property and then moved out displays at the bottom of each property.

 If you selected the Detail report option, this column displays the tenant's Move In date for the unit below the number of Moveouts .

 Site Classification

 The name of the unit's site classification as displayed on the unit's details page. A blank row displays if the unit is not associated with a manufactured housing–type property.

 Total Days Vacant

 The total number of days within the Date Range where a tenant is not leasing the unit. 0 displays if a unit was not vacant during the Date Range . A subtotal of all days where a unit associated with a property was vacant displays at the bottom of each property.

 If you selected the Detail report option, this column displays the name(s) of the tenant(s) occupying that unit during the Date Range below the number of Total Days Vacant .

 Unit

 The name of the unit.

 Unit Type

 The unit type assigned to the unit.

 Report Summary Subreport

 Displays the total amount of units and vacancies in the report as well as the average number of vacancies.

 The following rows display:

 Row
 Description

 Average Days Vacant

 The average length of time units across all properties in the report remained vacant.

 Vacancy Percentage

 The percentage of the report date range that units were vacant across all properties included in the report using the following formula:

 Vacancy Percentage = Total Days Vacant / (Total Days in Period * Total Units)

 Total Days Vacant

 The total number of days a unit across all properties was vacant in the report results.

 Total Days in Period

 The total number of days in the Date Range .

 Total Moveouts

 The total number of tenants who moved out of a unit across all properties included in the report results.

 Total Units

 The total number of units included in the report results.

 Maximum Total Rent

 The total of Market Rent for all units in the report.
