# Unit Type Vacancy (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Unit-Type-Vacancy.htm

The Unit Type Vacancy report displays all units available to rent as of the selected date, categorized by unit type. Vacant units include all unoccupied units with no unit status, or with a unit status marked as Show As Vacant . The report can be configured to run separately for each property and is particularly useful for businesses managing a large number of units. Additionally, this is a great report to run to gain a better understanding of which unit types across your portfolio that are most desirable.

 More Information

 Site classification names and short names can be customized to fit your business needs. For more information, refer to Homeowner Statuses & Site Classifications .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Unit Type Vacancy .

 For more information, refer to Control User Access .

 To view the Unit Type Vacancy report, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Occupancy arrow_forward Unit Type Vacancy .
The Reports: Unit Type Vacancy page displays.

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

 Select one of the following options to determine how the report results are sorted.

 Option
 Description

 Address

 Units are sorted alphanumerically by their default address. Units with no address display first in the results.

 Property

 Unit types are sorted alphanumerically by their full property name.

 Site Classification

 The name of the unit's site classification as displayed on the unit's details page. A blank row displays if the unit is not associated with a manufactured housing–type property.

 Square Feet

 Units are sorted numerically by their square feet in ascending order (least to greatest). Units with the same square footage are further sorted by unit name.

 Unit

 Units are sorted alphanumerically by unit name.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Comment

 The information that displays on the vacant unit's details page in the Comment field.

 Days Vacant

 The number of days the unit has been vacant.

 Default Address

 The default street address of the vacant unit.

 Property

 The property at which the unit is located.

 Rent Amount

 The current market rent amount of the vacant unit.

 Site Classification

 The name of the unit's site classification as displayed on the unit's details page. A blank row displays if the unit is not associated with a manufactured housing–type property.

 Sq. Ft.

 The square footage of the vacant unit.

 Unit

 The name of the unit currently vacant.

 Summary Subreport

 This summary subreport provides overall report totals for all of the calculated columns for each unit type, as well as the sum of the market rent of all vacant units included in the report.

 The following columns displays on the subreport.

 Column
 Description

 # of Units

 The total number units in Rent Manager assigned the unit type.

 % Vacant

 The percentage of vacant units of the unit type.

 % Vacant Sq. Ft.

 The percentage of square footage that applies to the vacant units of the unit type.

 Sum of rent for vacant units

 The total market rent amount of all vacant units at the property.

 Total Sq. Ft.

 The total square footage of all units of the unit type.

 Unit Description

 Additional information used to describe the vacant unit.

 Unit Type

 The unit type being examined for vacancies.

 Vacancies

 The number of units of the unit type which are vacant as of the specified date.

 Vacant Unit Sq. Ft.

 The total square footage of all vacant units of the unit type.

 Site Classification Breakdown Subreport

 This subreport displays when the Include Site Classification report option is checked, only displaying units associated with a manufactured housing–type property.

 The following columns are available in this subreport:

 Column
 Description

 # of Units

 The total number of units that are assigned to the site classification as of the report date.

 % Vacant

 The percentage of units assigned to the site classification that are currently vacant for each property calculated using the following formula:

 % Vacant = Vacancies / # of Units

 Site Classification

 The short name of the site classification assigned to the unit.

 Vacancies

 The total number of vacant units assigned to the site classification as of the report date.
