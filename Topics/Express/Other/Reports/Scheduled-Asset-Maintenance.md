# Scheduled Asset Maintenance (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Scheduled-Asset-Maintenance.htm

The Scheduled Asset Maintenance report displays assets with maintenance that is scheduled but not yet completed. If an asset has a maintenance Due Date that falls within the date range, the report also displays the due date to help you track when it should be completed.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Scheduled Asset Maintenance .

 For more information, refer to Control User Access .

 To view the Scheduled Asset Maintenance report, do the following:

 -
 Go to arrow_forward Assets arrow_forward Maintenance arrow_forward Scheduled Asset Maintenance .
The Reports: Scheduled Asset Maintenance page displays.

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

 Asset Vendor Assignments

 Select an option to determine how assets with no vendor association as listed on the Asset details page display in the report results.

 Option
 Description

 Include assets not assigned to a vendor

 Assets not associated with a vendor are included.

 Exclude assets not assigned to a vendor

 Only assets associated with a vendor are included.

 Only show assets not assigned to a vendor

 Only assets not associated with a vendor are included.

 Asset Manufacturers to Include

 Select each manufacturer to display only assets associated with the manufacturer(s) in the report results. For more information, refer to Asset Manufacturers (Page) .

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 When this option is selected, the Asset Property Assignments options become unavailable.

 Show Only Active Assets

 Check to display only active assets in the report. If unchecked, inactive assets also display in the report results.

 An asset is active if the report date is during the asset's service life as specified on the View Asset Locations page. For more information, refer to Asset Locations (Pop-Up) .

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Asset Types to Include

 Check each asset type to be included in the report. The report displays assets with the selected types applied on the Asset details page. For more information, refer to Asset Types (Page) .

 Asset Property Assignments

 This option determines how assets not associated with a property display in the report. The property association is located on the asset's details page in the General Information section.

 This option becomes unavailable when the Run Properties separately report option is checked.

 Option
 Description

 Include assets not assigned to a Property

 Select to display assets that are not associated with a property, as well as assets associated with properties, in the report.

 Exclude assets not assigned to a Property

 Select to display only assets that are associated with a property in the report.

 Only show assets not assigned to a Property

 Select to display only assets that are not associated with a property in the report.

 Vendors to Include

 Check the name of the vendor to include information associated with the vendor in the report results. Optionally, check Inactive Vendors to include vendors that are no longer active.

 Sort Options

 Select one of the following options to determine how the report results are organized within each property section.

 Assets with no Property assigned display first in the Unassigned section, which displays at the top of the report results. Assets with no Unit assigned display first in the assigned property's according section. Property sections are sorted alphabetically.

 Option
 Description

 Property, Unit

 Assets are sorted alphanumerically by Unit name.

 Due Date

 Assets are sorted chronologically by the asset's maintenance Due Date in ascending order (oldest to farthest in the future).

 Asset Type

 Assets are sorted alphanumerically by Asset Type .

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Asset Name

 The Name of each asset as entered on the asset's details page.

 Asset Type

 The category of each asset selected on the asset's details page.

 Description

 An optional message about the scheduled asset maintenance entered on the Warranty/Maintenance tile.

 Due Date

 The Next Maintenance date as displayed in the Warranty/Maintenance tile of the asset's details page.

 Manufacturer

 The creator (asset manufacturer) of each asset that you own as selected from the Manufacturer drop-down list. For more information, refer to Asset Manufacturers (Page) .

 Service Agreement Expiration Date

 The Service Expiration date as entered in the Warranty/Maintenance tile each asset's details page, if the date is set in the future. If the Service Expiration date is before the last day in the Date Range , Expired displays for each asset instead.

 Unit

 The name of the unit where an asset has been assigned. An asset is assigned to a unit in the Add Asset wizard.

 Vendor

 The vendor who maintains and/or services each asset as selected from the Vendor drop-down list on the asset's details page.
