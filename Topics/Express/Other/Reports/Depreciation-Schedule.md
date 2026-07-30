# Depreciation Schedule (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Depreciation-Schedule.htm

The Depreciation Schedule report displays information on regarding the financial depreciation for each asset broken down by property and the account impacted during the report date range. Prior to running this report, you must have an asset with a depreciation schedule already set up for results to display.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Depreciation Schedule .

 For more information, refer to Control User Access .

 To view the Depreciation Schedule report, do the following:

 -
 Go to arrow_forward Assets arrow_forward General arrow_forward Depreciation Schedule .
The Reports: Depreciation Schedule page displays.

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

 Asset Types to Include

 Check each asset type to be included in the report. The report displays assets with the selected types applied on the Asset details page. For more information, refer to Asset Types (Page) .

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Show Only Active Assets

 Check to display only active assets in the report. If unchecked, inactive assets also display in the report results.

 An asset is active if today's date is during the asset's service life as specified on the View Asset Locations page. For more information, refer to Asset Locations (Pop-Up) .

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 In addition, the Depreciation Schedule report includes a summary of asset information at the top of the report. The fields that display are described below.

 Field
 Description

 Accumulated Depreciation

 The amount of depreciation that has been posted as of today's date.

 Current Book Value

 The asset's current value as of today's date, calculated using the following formula:

 Current Book Value = Purchase Amount - Accumulated Depreciation

 Depreciable Amount

 The dollar amount by which the asset must depreciate from the Purchase Amount to get to the Residual Amount .

 Depreciation End

 The date on which depreciation stops calculating for the asset; the end of the asset's Expected Life .

 Depreciation Method

 The method of depreciation selected when creating the depreciation schedule. The method can be Straight Line or one of the Accelerated methods ( 150% Declining Balance or 200% Declining Balance ).

 Depreciation Start

 The date on which depreciation began calculating for the asset.

 Expected Life

 The number of months or years the asset is expected to be in service.

 Purchase Amount

 The dollar amount for which the asset was purchased.

 Residual Amount

 The expected value of the asset at the end of its Expected Life .

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Accumulated Depreciation

 The total dollar amount of depreciation accumulated as of the end of each period.

 Beginning Value

 The book value of the asset at the beginning of each period.

 Date

 The date on which depreciation for each period was posted or will post.

 Depreciation Expense

 The dollar amount of depreciation posted for each period.

 Ending Value

 The book value of the asset after depreciation is posted for the period.

 Journal

 The journal number of the journal entry posted for each period in the depreciation schedule.

 For assets that had the Pre-existing option checked when created, Pre-existing displays in the first row of the schedule.
