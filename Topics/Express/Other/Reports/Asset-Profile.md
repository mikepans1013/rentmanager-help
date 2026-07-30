# Asset Profile (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Asset-Profile.htm

The Asset Profile report displays detailed information for selected assets, including user-defined fields (UDFs), maintenance history, history/notes, and linked service issues as of today's date. You can use this report to examine the complete history and life cycle of assets within Rent Manager .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Asset Profile .

 For more information, refer to Control User Access .

 To view the Asset Profile report, do the following:

 -
 Go to arrow_forward Assets arrow_forward General arrow_forward Asset Profile .
The Reports: Asset Profile page displays.

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

 Show on Report

 Select from the following options to determine which sections display:

 Option
 Description

 History/Notes

 Includes a History/Notes section containing all history/note items posted to the asset.

 Location History

 Includes a Location History section containing the current and past locations of the asset as entered on the asset's Asset Location tile.

 Maintenance Schedule

 Maintenance records created for each asset through the asset's History/Notes tile or Warranty/Maintenance tile display.

 Service Issues

 Includes a Service Issues section containing all issues associated with this asset.

 Status History

 The status for each asset in the report display. For more information, refer to Asset Statuses (Page) .

 Title Status History

 The assigned title status for each asset in the report display. For more information, refer to Asset Title Statuses (Page) .

 User Defined Fields

 Includes a User Defined section containing all asset-level user-defined fields (UDFs) with a Value entered on the asset's details page.

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

 More Information

 Any assets in the report results that have an asset type with Assets of this type are homes checked, the report's title displays as Home Profile and other instances of Asset are replaced with Home to match.

 Asset/Home

 The Asset section displays basic information about each asset in the report including the name, category, and manufacturer. If the asset is marked as a home-type asset, the section is named Home instead. The following fields display in the section.

 Field
 Description

 Asset Age

 The amount of time that has elapsed since the Purchase Date .

 Asset Name

 A unique identifier for the asset. Inactive assets display an asterisk (*) in the field.

 Asset Status

 The current state of the asset (e.g., In Service , Inventory , Out for Maintenance ).

 Asset Type

 The user-created category that best classifies the type of asset.

 Comments

 The optional message entered in the Comment tile on the asset's details page.

 Financial Property

 The property that is financially responsible for the asset.

 Homeowner Status

 The current ownership and/or occupancy status of the asset. For more information, refer to Homeowner Statuses (Pop-Up) .

 This field displays only if the associated asset type is set up as a home.

 Market Rent

 The amount to charge renters of this asset. This field displays only if, on the asset's details page, a value is entered in the Market Rent field.

 Property

 The name of the property where the asset is used at. Assets not associated with a property display <UNASSIGNED> .

 Service End

 The date when the asset is no longer in use.

 Service Length

 The amount of time that has elapsed since the Service Start and Service End dates. If no Service End date has been entered or selected, today’s date is used instead for the calculation.

 Service Start

 The date when the asset was placed in service.

 Unit

 The name of the unit where the asset is used at. Assets not associated with a unit display <UNASSIGNED> .

 Asset/Home Details

 The Asset Details section displays information for each asset in the report such as the asset’s maintenance record, the property to which it is currently assigned, and details of the asset’s purchase. If the asset is marked as a home-type asset, the section is named Home Details instead. The following fields display in the section.

 Field
 Description

 Dimensions

 The measurable size of the asset, such as length and width.

 Manufacturer

 The user-created company that produced and supplied this asset.

 Mfg. Date

 The date the asset was produced by the manufacturing company.

 Model

 The asset’s model number.

 Serial Number

 The asset's unique serial identification number.

 The following fields display only if the associated asset type is set up as a home.

 Field
 Description

 Bathrooms

 The number of bathrooms the asset contains.

 Bedrooms

 The number of bedrooms the asset contains.

 Square Footage

 The size of the asset in square feet.

 Purchase/Loan Information

 The Purchase/Loan Information section displays details about the asset's purchasing and, if applicable, loan information. The following fields display in the section.

 Field
 Description

 Lienholder

 The name of the financial institution that retains legal claim to the asset until the loan associated with the Loan Number is paid off.

 Loan Number

 The number assigned by the issuer of the loan to the management company for the asset.

 Purchase Date

 The date that your company purchased the asset.

 Purchase Price

 The price for which your company purchased the asset.

 Sale Price

 The price for which you would sell or sold this asset.

 Title Status

 The current condition of the asset's title (e.g., Clear Title or In Process ). For more information, refer to Asset Title Statuses (Page) .

 Warranty/Maintenance Information

 The Warranty/Maintenance Information section displays the vendor assigned for maintaining the asset and details about the service agreement made with that vendor. The following fields display in the section.

 Field
 Description

 Last Maintenance

 The date of the last service/maintenance for the asset based on the Completed Date which can be viewed in the asset's history/notes.

 Maintenance Period

 The number of months that should elapse between each service/maintenance for this asset during the length of your service agreement.

 Next Maintenance

 The Due Date of the next maintenance record on this asset.

 If the date displays with an asterisk (*), the asset should receive maintenance but no maintenance is scheduled. Rent Manager calculates the service date when no date has been formally entered by adding the number of months in the Service Period to the most recent service Completed Date .

 Service Agreement

 If enabled, this asset has a maintenance service agreement with the manufacturer or vendor.

 Service Expiration

 The date when the asset’s service agreement with the manufacturer or vendor expires.

 Vendor

 The primary vendor who is responsible for servicing and/or maintaining this asset. Assets not associated with a vendor display <UNASSIGNED> .

 Warranty Expiry

 The date that the warranty for this asset expires.

 Warranty Info

 Any additional details regarding the warranty for this asset, such as terms or special stipulations.

 Asset Depreciation

 The Asset Depreciation section displays details on schedules and amounts in relation to deprecation of the asset. This section displays only if the asset has a depreciation schedule created for it. The following fields display in the section.

 Field
 Description

 Accum. Depreciation

 The asset-type general ledger (GL) account that is used to track the asset's value over time. This account is credited in each journal entry created to decrease the value of the asset.

 Current Book Value

 The asset's current value as of today's date, calculated using the following formula:

 Current Book Value = Purchase Amount - Accum. Depreciation

 Depreciable Amount

 The amount by which the asset must depreciate from the Purchase Amount to get to the Residual Amount .

 Depreciation End

 The end of the asset's Expected Life , the date on which depreciation stops calculating for the asset.

 Depreciation Method

 The method of depreciation, either Straight Line or one of the Accelerated methods ( 150% Declining Balance or 200% Declining Balance ), selected when creating a depreciation schedule.

 Depreciation Start

 The date on which depreciation began calculating for the asset.

 Expected Life

 The number of months or years that you expect the asset to be in service. This is the number of months or years for which the asset depreciates.

 Purchase Amount

 The amount paid to purchase the asset.

 Residual Amount

 The expected value of the asset at the end of its Expected Life .

 User Defined

 The User Defined section displays any asset-type user-defined fields (UDFs) you have created and their values. The following columns display in the section.

 Column
 Description

 Name

 The name of the UDF.

 Value

 The value entered for the UDF on the asset's details page.

 Maintenance

 The Maintenance section displays information about the service/maintenance an asset has received or is scheduled to receive in the future. The following columns display in the section.

 Column
 Description

 Complete Date

 The date the maintenance is completed.

 Completed By

 The user that completed the maintenance.

 Cost

 The amount that the maintenance costs.

 Date

 The date the maintenance was created.

 Due Date

 The date by which the maintenance needs to be completed.

 Ticket

 The unique identifier for each maintenance.

 History/Notes

 The History/Notes section displays any asset history/note items associated with each asset. The following columns display in the section.

 Column
 Description

 Date

 The date the history/note item took place.

 History Type

 The type assigned to the history/note item.

 Regarding

 A description of what the history/note item is for.

 Time

 The time the history/note item took place.

 Service Issues

 The Service Issues section displays any service issues associated with each asset. The following columns display in the section.

 Column
 Description

 Assigned To

 The user assigned to the issue.

 Date

 The date on which work for the issue started.

 Issue

 A description of the issue.

 Ticket

 The unique identifier for the issue.

 Status History

 The Status History section displays asset status details to help you track each asset’s condition and use. The following columns display in the section.

 Column
 Description

 From Date

 The date on which the status starts.

 Status

 The status assigned to the asset during the dates listed.

 To Date

 The date on which the status ends.

 Location History

 The Location History section displays location details to help you track where each asset is located. The following columns display in the section.

 Column
 Description

 From Date

 The first day the asset is at the location listed.

 Property

 The property where the asset is located during the dates listed.

 To Date

 The last day the asset is at the location listed.

 Unit

 The unit where the asset is located during the dates listed.

 Title Status History

 The Title Status History section displays the asset title status details to help you track the title associated with the asset. The following columns display in the section.

 Column
 Description

 From Date

 The date on which the title status starts.

 Title Status

 The title status assigned to the asset during the dates listed.

 To Date

 The date on which the title status ends.
