# Utility Cost Recovery (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Utility-Cost-Recovery.htm

The Utility Cost Recovery report allows you to compare the consumption and charges between your individual meters for each unit and your master meters to review how much you are recovering over a date range.

 Related Privileges

 Group
 Privilege
 Column

 Letters/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Utility Cost Recovery .

 For more information, refer to Control User Access .

 To view the Utility Cost Recovery report, do the following:

 -
 Go to arrow_forward Services arrow_forward Metered Utilities arrow_forward Utility Cost Recovery .
The Reports: Utility Cost Recovery page displays.

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

 Exclude consumption with no charges

 Select to exclude utility consumption recorded on the Meter Readings page that is not yet posted to a tenant account.

 Billing Period

 Enter or select the billing period (the year and month that the meter reading is billed to) to determine the data that displays in the report.

 These fields automatically populate with the current year and month. Enter a different year and month or select a year and month from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a billing period.

 Utilities to Include

 Select each utility to be examined in the report.

 Exclude charges not tied to a master meter expense account.

 Select to exclude master meter bill expense line items where the Expense Account on the bill differs from the Default Expense Account on the master meter for the selected property and utility.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Properties that have a designated RUBS enabled master meter do not have meter readings entered for the units at the property. Therefore, for properties that utilize RUBS-enabled master meters, the Read Date , Days , and Consumption columns are intentionally left blank, the Units column displays the number of units that received a RUBS charge, and the Charges column displays the total dollar amount charged to the property's tenants as a result of that bill's RUBS posting.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Tenant Charges

 This section displays submeter data from the active units at the selected property and their monthly utility postings. If you checked the Exclude consumption with no charges report option, this section displays only consumption that is posted to tenant accounts.

 The following columns display in this section:

 Column
 Description

 Charges

 The total dollar amount of tenant charges posted for the units at the associated property.

 Consumption

 The total consumption amount for all active units at the associated property.

 Days

 The number of days between the previous read date and the current read date for the submeter readings.

 Read Date

 The submeter Reading Date for the associated Billing Period . If there are multiple postings for the property within a month, this column displays the date the majority of the posting occurred. For example, if there are 100 units at a property and 75 are posted with a Reading Date of 1/1/ 26 and 25 are posted with a Reading Date of 1/5/ 26 , the Read Date displays as 1/1/ 26 and includes tenants from both postings.

 Unit

 The number of active units at the associated property as of the Read Date .

 Master Meter Bills

 This section displays master meter data from the active units at the selected property and the Amount of the vendor bills created to track and pay utility costs for the property.

 The following columns display in this section:

 Column
 Description

 Billed Amount

 The total Amount linked to the vendor bills assigned in the selected Billing Period .

 Consumption

 The total Consumption linked to the vendor bills assigned in the selected Billing Period .

 Days

 The number of days between the previous read date and the current read date for the master meter readings. If there are no prior reading entries, this column displays 0 .

 Read Date

 The master meter Reading Date for the selected Billing Period .

 Recovered

 This section displays charge and consumption data to determine how much you are recovering for your sub meter utilities over the selected Billing Period .

 The following columns display in this section:

 Column
 Description

 Charges

 The percentage of the Submeter section's Charges recovered in the selected Billing Period , calculated using the following formula:

 Charges = Submeter Charges / Master Meter Billed Amount

 Consumption

 The percentage of the Submeter section's Consumption recovered in the selected Billing Period , calculated using the following formula:

 Consumption = Submeter Consumption / Master Meter Consumption

 Summary Subreport

 This subreport displays the grand total values for submeter consumption and charges, master meter consumption and billed amounts, and the percentage of charges and consumption recovered for each selected property and utility.
