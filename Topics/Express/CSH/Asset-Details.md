# Asset Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Asset-Details.htm

The Asset details page allows you to view asset information and optionally update details about the asset, such as its status and type. Additionally, you can post and review the asset's depreciation, change the asset location, and manage the asset's warranty and maintenance.

 Related Privileges

 Group
 Privilege
 Column

 Asset Management
 Manage Assets
 View, Edit

 For more information, refer to Control User Access .

 To view an asset's details page, go to arrow_forward Rental Info arrow_forward General arrow_forward Assets and select an asset from the list.

 View and manage tenant information using the tiles on the Asset details page. The following tiles display by default. If a custom layout is applied to your details page, you might not see all of the following tiles. For more information about creating and assigning layouts, refer to My Layouts (Page) and System Layouts (Page) .

 Asset/Home Details

 This tile displays additional information regarding the asset.

 Field
 Description

 Manufacturer

 The user-created company that produced and supplied this asset. For more information, refer to Asset Manufacturers (Page) .

 Serial Number

 The asset's unique serial identification number.

 Model

 The model name of the asset.

 Manufactured

 The date the asset was produced by the company.

 Dimensions

 The measurable size of the asset, such as length and width.

 Bedrooms

 The number of bedrooms the asset contains.

 This field is available only if the associated Asset Type is set up as a home.

 Bathrooms

 The number of bathrooms the asset contains.

 This field is available only if the associated Asset Type is set up as a home.

 Square Footage

 The size of the asset in square feet.

 This field is available only if the associated Asset Type is set up as a home.

 Asset/Home Location

 This tile displays the property and unit where the asset is physically located. Additionally, this tile displays the date that the asset was moved to the location, and if applicable, the date the asset was or will be removed from the location.

 Column
 Description

 From

 The date the asset was moved to the specified location.

 Property

 The property at which the asset is physically located.

 To

 The date the asset was or will be removed from the specified location.

 Unit

 The unit at which the asset is physically located.

 Asset/Home Status History

 This tile displays the current status as well as a record of statuses assigned to the asset and how long the asset remained in the status.

 Column
 Description

 Comment

 Additional information or notes about the asset.

 Duration

 The amount of time the asset was or currently is in the assigned status.

 Status

 The condition that best describes the state of the asset ( In Service , Inventory , Out for Maintenance , etc.). For more information, refer to Asset Statuses (Page) .

 Date

 The date on which the status is first applicable.

 User

 The user who assigned the status on the asset.

 Comment

 This tile displays additional information or notes about the asset.

 Depreciation

 This tile displays information from the asset's active depreciation schedule.

 Field
 Description

 Depreciable Amount

 The amount by which the asset must depreciate from the Purchase Amount to get to the Residual Amount .

 Purchase Amount

 The amount paid to purchase the asset.

 Current Book Value

 The asset's current value as of today's date, calculated using the following formula:

 Current Book Value = Purchase Amount - Accumulated Depreciation

 Accumulated Depreciation

 The asset-type general ledger (GL) account that is used to track the asset's value over time. This account is credited in each journal entry created to decrease the value of the asset.

 Depreciation Start

 The date on which depreciation began calculating for the asset.

 Depreciation End

 The end of the asset's Expected Life , the date on which depreciation stops calculating for the asset.

 Residual Amount

 The expected value of the asset at the end of its Expected Life .

 Depreciation Method

 The method of depreciation, either Straight Line or one of the Accelerated methods ( 150% Declining Balance or 200% Declining Balance ), selected when creating a depreciation schedule.

 Expected Life

 The number of months or years that you expect the asset to be in service. This is the number of months or years for which the asset depreciates.

 General

 This tile displays general information for the asset.

 Field
 Description

 Asset Type

 The user-created category that best classifies the type of asset being created. For more information, refer to Asset Types (Page) .

 If the asset-type is set up to be a home-type, then tiles on the asset's detail page are updated accordingly to add Home in the title instead of Asset .

 Homeowner Status

 Related Privileges

 Group
 Privilege
 Column

 Asset Management
 Homeowner Statuses
 Add

 For more information, refer to Control User Access .

 The current legal ownership status of the asset. If you have the privilege to add homeowner statuses, you can use the dropdown to change the status. You can also see the homeowner status history by clicking History . For more information, refer to Homeowner Statuses (Pop-Up) .

 Name

 A unique identifier for the asset.

 This asset is rentable

 Allow tenants to lease the asset as they would a unit. The Market Rent is the amount to charge renters of this asset. You can report on the rent amount for assets using reports like Asset Availability . The amount set here is used by system level recurring charges for tenants that have the Asset Rent selected as the charge's source. For more information, refer to Tenant Charge Setup (System Preferences) .

 This option is available only if Track financials for this asset is enabled and the asset has a Community Owned homeowner status.

 To view the View Market Rent pop-up, click next to the Market Rent field. For more information, refer to Asset Market Rent (Pop-Up) .

 Track financials for this asset

 If checked, financial reporting is enabled for the asset. The Financial Property is where the asset's financial activity is associated. To update an asset's financial property, you can use the Financial Property Migration wizard. For more information, refer to Financial Property Migration Wizard .

 More Information

 This option can be unchecked only if the asset has no current or future leases associated with it.

 History/Notes

 This tile displays history/note items associated with the asset. History/note items let you record information that supplements or clarifies what’s entered in other fields, such as notes about required maintenance, items on a to-do list, or explanations about expenses.

 Column
 Description

 Date

 The date the note was created.

 Note

 The information to describe the history/note (e.g., Sent to manufacturer for service ). If no text is entered, the column displays blank.

 Type

 The system-generated history/note type. For example, if the history/note is linked to a maintenance record, the Maintenance type displays.

 Images

 This tile displays images that are associated with the currently selected asset. For more information, refer to Add and Assign an Image Type .

 Purchase & Loan Information

 This tile displays additional information regarding the asset.

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

 This amount is not automatically entered in your financial data. In order for the cost to display on financial reports, you must manually write a check, create a journal entry, or include the amount as part of a beginning balance.

 Sale Price

 The price for which you would sell or sold this asset.

 Title Status

 The current condition of the asset's title (e.g., Clear Title or In Process ). For more information, refer to Asset Title Statuses (Page) .

 UDFs

 This tile displays any asset-type user defined fields when a value is specified for the asset. User-defined fields display on this tile based on when a value was added to the UDF. The order in which the user-defined fields display may not match the order that displays in the User Defined Fields pop-up or on the User Defined Fields page. This tile displays up to six UDFs with values.

 Warranty/Maintenance

 This tile displays warranty and maintenance information for the asset.

 Field
 Description

 Maintenance Vendor

 The primary vendor who is responsible for servicing and/or maintaining this asset.

 Next Maintenance

 The date the next maintenance record is due on this asset.

 If the date displays with an asterisk (*), Rent Manager calculates the date by adding the number of months in the Service Period to the Service Life Start date. This is a projected date for when the next maintenance should be scheduled.

 Service Agreement

 If enabled, this asset has a maintenance service agreement with the manufacturer or vendor.

 Service Expiration

 The date that the manufacturer or vendor service agreement for this asset ends.

 Service Period

 The number of months that should elapse between each service/maintenance for this asset during the length of your service agreement.

 Warranty Expiration

 The date that the warranty for this asset expires.

 Warranty Information

 Any additional details regarding the warranty for this asset, such as terms or special stipulations.

 Workflow Project

 Related Privileges

 Group
 Privilege
 Column

 Service Manager
 Workflow Projects
 View

 For more information, refer to Control User Access .

 If the asset is linked to an active workflow, this tile displays each stage of that workflow process and the number of steps that are completed for each stage. Additionally, you can view each step and its assigned user by clicking to display the Workflow Project Overview .

 This tile displays only if the associated workflow project was created from a template with the Show workflow projects on asset details option enabled. For more information, refer to Workflow Template Details (Pop-Up) .
