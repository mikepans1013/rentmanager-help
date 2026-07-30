# Fixed Asset Schedule (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Fixed-Asset-Schedule.htm

The Fixed Asset Schedule report displays a summary of asset depreciation information for assets that are linked to any of the selected properties via the Track Financials option on the asset details page's General tile.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Fixed Asset Schedule .

 For more information, refer to Control User Access .

 To view the Fixed Asset Schedule report, do the following:

 -
 Go to arrow_forward Assets arrow_forward General arrow_forward Fixed Asset Schedule .
The Reports: Fixed Asset Schedule page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Select a file format from the drop-down list. By default, PDF is selected.

 -
 Click Generate Report .

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

 Asset Types to Include

 Check each asset type to be included in the report. The report displays assets with the selected types applied on the Asset details page. For more information, refer to Asset Types (Page) .

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

 Show Only Active Assets

 Check to display only active assets in the report. If unchecked, inactive assets also display in the report results.

 An asset is active if the report date is during the asset's service life as specified on the View Asset Locations page. For more information, refer to Asset Locations (Pop-Up) .

 Vendors to Include

 Check the name of the vendor to include information associated with the vendor in the report results. Optionally, check Inactive Vendors to include vendors that are no longer active.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Name

 The name of each asset with available depreciation postings.

 Type

 The asset type of each asset.

 Property

 The short name of the property defined to track financials for each asset.

 Depreciation Start

 The date on which depreciation began calculating for the asset as entered in the Depreciation Start field when creating the depreciation schedule.

 Expected Life

 The number of months or years the asset is expected to be in service as entered in the Expected Life field on the Manage Depreciation Schedule page.

 Depreciation Method

 The method of depreciation, either Straight Line or one of the Accelerated methods (Accel. 150% or Accel. 200%), selected when creating the depreciation schedule.

 Purchase Amount

 The amount for which the asset was purchased as entered in the Purchase Price field on the asset details page.

 Residual Amount

 The expected value of the asset at the end of its Expected Life as entered on the Manage Depreciation Schedule page's Residual Amount .

 Depreciable Amount

 The amount by which the asset must depreciate from the Purchase Amount to get to the Residual Amount.

 Next Posting Amount

 The amount in depreciation expense debited in the journal entry posted at the end of the next depreciation period for the asset.

 Accumulated Depreciation

 The amount in depreciation expenses posted as of the report date for the asset.

 Current Book Value

 The current value of the asset as of the report date, calculated using the following formula:

 Current Book Value = Purchase Amount - Accumulated Depreciation
