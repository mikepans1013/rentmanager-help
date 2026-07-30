# Rent Roll & Recurring Charges (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Rent-Roll-Recurring-Charges.htm

The Rent Roll & Recurring Charges report displays a complete list of the recurring charges inherited by tenants as of the selected report date. Only current tenants (tenants with a move-in date on or before the report date with no move-out date before the report day) with active recurring charges display in the report.

 This report is most effective when it is generated after importing recurring rent charges because it can help verify the accuracy of the imported charges. In addition, this report can be added to a report batch to preview recurring rent charges before they are posted which can be helpful in verifying the accuracy of the charges.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Rent Roll & Recurring Charges .

 For more information, refer to Control User Access .

 To view the Rent Roll & Recurring Charges report, do the following:

 -
 Go to arrow_forward Receivables arrow_forward  Rent Roll arrow_forward Rent Roll & Recurring Charges .
The Reports: Rent Roll & Recurring Charges page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 More Information

 When this report option is selected, reports generate only for owners with active ownerships. If all selected owners currently do not have active ownerships, an error message displays stating that no reports were generated.

 For more information on establishing active ownerships, refer to Property Owners (Pop-Up) .

 Properties/Owners to Include

 Check each property or owner to be included in the report. Alternatively, select a property or owner Group . When the Owners tab is selected, results generate only for owners with active ownerships. If all selected owners currently do not have active ownerships, and Restrict by owner contract dates is selected, an error message displays stating that no reports were generated. For more information on establishing active ownerships, refer to Property Owners (Pop-Up) .

 More Information

 Only information related to the properties to which you have access displays. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Include Site Classification

 Check to display the Site Classification column, which displays the short name of each unit's site classification. This option is accessible only when at least one manufactured housing–type property (or an owner who owns a manufactured housing–type property during the entered date range) is selected.

 The site classification that displays is based on the date selected in the As of Date section.

 Sort Options

 Select one of the following options to determine how the report results are sorted in each property subheading:

 Option
 Description

 Account Number

 Tenants are sorted numerically by their system-generated ID number in ascending order (lowest to highest).

 Last Name

 Tenants are sorted alphabetically by their Last Name . Tenants marked as Company are sorted alphabetically by Company Name .

 Site Classification

 Tenants at units associated with manufactured housing properties are sorted alphanumerically by the unit's system-derived classification code. Tenants not at units associated with manufactured housing properties are sorted alphanumerically by Unit name. This displays only if the report option Include Site Classification is checked.

 Unit

 Tenants are sorted alphanumerically by Unit name.

 Unit Type

 Tenants are sorted alphanumerically by Unit Type name. Tenants with the same unit type are further sorted alphanumerically by Unit name.

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

 Posting Period

 Select an option to determine whether the report examines Monthly , Weekly , or Daily recurring charges, as selected in the Rent Period field of the tenant's details page.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 This option is only selectable only when the Properties to Include section displays the Property tab.

 Restrict by Owner Contract Dates

 This option becomes available when the Owner tab is selected.

 Check to display only data that is within the active contract dates for each of the selected owners, regardless of the date. This option is useful if, for example, your contract with one owner is ending and another contract with a different owner is beginning.

 Option
 Description

 Checked

 The report filters to display only data within the selected owner or owners' active contract.

 For example, if the report is generated for 12/31/ 2026 , and Owner A has an active contract from January to June of 2026 , the report displays only data at the properties owned by Owner A from January 2026 to June 2026 .

 Unchecked

 The report displays current data for any months included in the report date range regardless of owner contracts.

 Charge Type Order

 Move the charge types in the list to determine the order of the charge type columns. This list populates based on the properties or owners selected. Only charge types in use by the accounts leasing at the selected properties during the selected time frame display.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Acc #

 The system generated account ID number assigned to each tenant upon creation.

 Charge Type

 The amount of recurring charges of each type inherited by the tenant. There is a column for each charge type included in the report which varies based on the property/owner selection.

 Other

 This column displays only if there are more than ten charge types examined in the report. The report displays only the first nine charge types in the list established in the report options. The sum of the remaining charge types displays in the Other column.

 More Information

 To view all charge types on the report, run the report as a .CSV file. This allows a separate column for every charge type to display.

 Site Classification

 This system-derived status indicates the operational state of manufactured housing sites. The classification that displays for each unit is based on the presence of an RV asset or home at the unit location, homeowner status, if the unit is occupied or vacant, if a lease is currently in a rent-free period, and unit status. For more information, refer to Site Classification .

 This column displays only for properties with a Property Type of Manufactured Housing and if Include Site Classification is enabled in report options.

 Tenant

 The name of the tenant.

 Total

 The sum of all the tenants’ recurring charges as of the selected date. If the report includes only one charge type, the total column does not display.

 Unit

 The name of the unit the tenant is currently leasing.

 Unit Type

 The category of unit the tenant is currently leasing.

 Rent Roll & Recurring Charges (Summary) Subreport

 A subreport that provides statistics summarizing the data in the report and always appears at the bottom of the report.

 The following columns display in the subreport:

 Column
 Description

 Charge Type

 The name of the charge type.

 Description

 The charge type's corresponding description.

 # of Tenants Charged

 The number of tenants in the report who inherited this charge type.

 % of Tenants Charged

 The percentage of tenants in the report who inherited this charge type.

 % of Total Amount

 The charge type's percentage of total recurring charge receipts in the report.

 Amount

 The sum of all recurring charges of each charge type in the report.
