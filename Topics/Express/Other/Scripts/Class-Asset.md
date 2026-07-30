# Asset Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Asset.htm

This class examines asset information and can be preceded by a parent class and followed by a scripting function. Functions in this class typically evaluate fields on the details page of the specified asset.

 Example

 [Unit().Asset().Type]

 Result

 Displays the name of the asset type of the first asset linked to the unit, as shown on the Unit details page.

 Example

 Tenant().Asset().ModelNumber]

 Result

 Displays the model number of the first asset in the tenant's lease list as shown on the asset's details page.

 Class Parameters

 A single, optional parameter can be specified: a name.

 Name

 Enter the Name of the asset, as entered on the asset's details page, in quotes, to specify that asset in the script.

 More Information

 An asset name should be specified to this class only when Asset is considered the parent class in a script, as shown in the example below.

 [Asset("Dryer10").Type]

 Displays the asset type for the asset named "Dryer10".

 Recommended Classes

 This class is often followed by one of these recommended classes. Adding an additional class lets you use a function in the additional class.

 Function represents a scripting function that must be inserted into the script. For a complete list of functions, refer to Script Functions .

 Class
 Description

 Financial Property

 [Asset().FinancialProperty. Function ]

 This class retrieves data about an asset's property selected to track financials.

 Property

 [Asset().Property(). Function ]

 This class retrieves data about the property or the unit to which the asset is linked.

 Unit

 [Asset().Unit().Function]

 This class retrieves data about the unit to which the asset is linked.

 Vendor

 [Asset().Vendor(). Function ]

 This class retrieves data about the vendor to which the asset is linked.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Function
 Description

 Aggregate Chart Value

 [Asset().AggregateChartValue()]

 Displays asset-level financial data related to the selected asset based on the specified general ledger (GL) account number and field.

 This scripting function must be used in conjunction with the Asset FillChart function. For more information, refer to Fill Chart Function (Script) .

 Asset ID

 [Asset().AssetID]

 Displays the system-generated identification number for the asset. This number does not otherwise display in Rent Manager .

 Bathrooms

 [Asset().Bathrooms]

 Displays the number of bathrooms as entered on the asset's General tile, if the asset is a home-type asset.

 Bedrooms

 [Asset().Bedrooms]

 Displays the number of bedrooms as entered on the asset's General tile, if the asset is a home-type asset.

 Chart Value

 [Asset().ChartValue()]

 Displays the account data of the specified GL account number and its field.

 This scripting function must be used in conjunction with the Asset FillChart function. For more information, refer to Fill Chart Function (Script) .

 Comment

 [Asset().Comment]

 Displays the text entered in the Comment tile of the Asset details page.

 Current Location Property

 [Asset().CurrentLocationProperty]

 Displays the property to which the asset is currently linked.

 Current Location Unit

 [Asset().CurrentLocationUnit]

 Displays the unit to which the asset is currently linked.

 Current Status

 [Asset().CurrentStatus]

 Displays the status currently assigned to the asset in the Asset Status History tile.

 Dimensions

 [Asset().Dimensions]

 Displays the size of the asset.

 Financial Property ID

 [Asset().FinancialPropertyID]

 Displays the system-generated ID of the property to which the asset's financials are tracked.

 Financial Property Name

 [Asset().FinancialPropertyName]

 Displays the name of the property to which the asset's financials are tracked.

 Financial Property Short Name

 [Asset().FinancialPropertyShortName]

 Displays the Short Name of the property to which the asset's financials are tracked.

 Financial Unit ID

 [Asset().FinancialUnitID]

 Displays the system-generated ID of the unit to which the asset is linked.

 History Count

 [Asset().HistoryCount()]

 Displays the total number of history/notes on the asset's History/Notes pop-up.

 Image Count

 [Asset().ImageCount()]

 Displays the total number of images uploaded to the asset's Images tile.

 Image URL

 [Asset().ImageURL()]

 Displays the URL address for a selected image uploaded to the asset's Images tile.

 Is Allowed To Be Rented

 [Asset().IsAllowedToBeRented]

 Displays True if the asset has Allow asset to be rented checked on the General tile. Otherwise, displays False .

 Is Home

 [Asset().IsHome]

 Displays True if asset type has Assets of this type are homes checked on the Asset Type Details pop-up. Otherwise, displays False .

 Last Maintenance Date

 [Asset().LastMaintenanceDate]

 Displays the date on which maintenance was last performed on the asset according to the asset's History/Notes pop-up.

 Lienholder

 [Asset().Lienholder]

 Displays the name of the financial institution that retains legal claim to the asset until the associated loan is paid off, as set on the asset's Purchase & Loan Information tile.

 Loan Number

 [Asset().LoanNumber]

 Displays the issuer-assigned number that identifies the asset's associated loan, as set on the asset's Purchase & Loan Information tile.

 Location History

 [Asset().LocationHistory()]

 Displays the current and past properties and units to which the asset is linked in the Asset Location tile. The output is formatted as displayed below:

 Location History Count

 [Asset().LocationHistoryCount()]

 Displays the number of properties to which the asset is linked in the Asset Location tile.

 Maintenance Period

 [Asset().MaintenancePeriod]

 Displays the Service Period for the asset's maintenance as entered in the asset's Warranty/Maintenance tile.

 Manufacture Date

 [Asset().ManufactureDate]

 Displays the Manufacture date as entered on the asset's Details tile.

 Manufacturer

 [Asset().Manufacturer]

 Displays the Manufacturer as specified on the asset's Details tile.

 Manufacturer City

 [Asset().ManufacturerCity]

 Displays the city as entered in the Address section of the Asset Manufacturer Details page.

 Manufacturer Comment

 [Asset().ManufacturerComment]

 Displays the Comment entered on the Asset Manufacturer Details page for the asset's associated manufacturer.

 Manufacturer Email

 [Asset().ManufacturerEmail]

 Displays the Email entered on the Asset Manufacturer Details page for the asset's associated manufacturer.

 Manufacturer Full Address

 [Asset().ManufacturerFullAddress]

 Displays the address entered in the Address section of the Asset Manufacturer Details page. The output is formatted as displayed below:

 6420 W. Allison Rd.
Chandler, AZ 85226

 Manufacturer Phone

 [Asset().ManufacturerPhone]

 Displays the Phone number entered on the Asset Manufacturer Details page for the asset's associated manufacturer.

 Manufacturer State

 [Asset().ManufacturerState]

 Displays the state as entered in the Address section of the Asset Manufacturer Details page.

 Manufacturer Street

 [Asset().ManufacturerStreet]

 Displays the street as entered in the Address section of the Asset Manufacturer Details page.

 Manufacturer Website

 [Asset().ManufacturerWebsite]

 Displays the Website entered on the Asset Manufacturer Details page for the asset's associated manufacturer.

 Manufacturer Zip

 [Asset().ManufacturerZip]

 Displays the postal code as entered in the Address section of the Asset Manufacturer Details page.

 Market Rent

 [Asset().MarketRent]

 Displays the Market Rent as entered on the asset's General tile if the asset is rentable.

 Model Number

 [Asset().ModelNumber]

 Displays the Model number as entered on the asset's Details tile.

 Name

 [Asset().Name]

 Displays the Name as entered on the asset General tile.

 Next Maintenance Date

 [Asset().NextMaintenanceDate]

 Displays the date of the Next Maintenance due for the asset, as shown on the asset's Warranty/Maintenance tile.

 Note

 [Asset().Note()]

 Displays information about the most recent note on the asset's History/Notes tile.

 Owner Name

 [Asset().OwnerName]

 Displays the name of the first owner listed on the asset's financial property Owners pop-up.

 Purchase Date

 [Asset().PurchaseDate]

 Displays the Purchase Date as entered on the asset's Details tile.

 Purchase Price

 [Asset().PurchasePrice]

 Displays the Purchase Price as entered on the asset's Details tile.

 Rent

 [Prospect.RentQuotes().Rent]
Displays the dollar amount of the rent quote.

 Sale Price

 [Asset().SalePrice]

 Displays the Sale Price as entered on the asset's Details tile.

 Serial Number

 [Asset().SerialNumber]

 Displays the Serial Number as entered on the asset's Details tile.

 Service Agreement

 [Asset().ServiceAgreement]

 Displays Yes if Service Agreement is checked on the asset's Warranty/Maintenance tile. Otherwise, No displays.

 Service Agreement Expiration

 [Asset().ServiceAgreementExpiration]

 Displays the Service Expiration date as entered on the asset's Warranty/Maintenance tile.

 Service End Date

 [Asset().ServiceEndDate]

 Displays the Service Life End date as entered on the asset's View Asset Locations pop-up.

 Service Start Date

 [Asset().ServiceStartDate]

 Displays the Service Life Start date as entered on the asset's View Asset Locations pop-up.

 Set History Filter

 [Asset().SetHistoryFilter()]

 This function is designed to filter the total collection of asset history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 Square Footage

 [Asset().SquareFootage]

 Displays the Square Footage as entered on the asset's Details tile, if the asset is a home-type asset.

 Status History

 [Asset().StatusHistory()]

 Displays the current and past statuses as listed on the asset's View Asset Status pop-up.

 Status History Count

 [Asset().StatusHistoryCount()]

 Displays the number of current and past statuses as listed on the asset's View Asset Status pop-up.

 Title Status

 [Asset().TitleStatus]

 Displays the current and past title statuses for the asset's title.

 Title Status History

 [Asset().TitleStatusHistory()]

 Displays the number of current and past title statuses as entered on the asset's Details tile.

 Track Financials

 [Asset().TrackFinancials]

 Displays True if Track Financials is checked on the asset's General tile; otherwise, False displays.

 Type Description

 [Asset().TypeDescription]

 Displays the Description as entered on the Asset Type Details pop-up.

 Type

 [Asset().Type]

 Displays the Type as entered on the asset's General tile.

 User Defined Field

 [Asset().UserDefinedField()]

 Displays the value of the asset-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Asset().UserDefinedField("Wall Color")]

 Displays the value for the Wall Color user defined field.

 Vendor Name

 [Asset().VendorName]

 Displays the Vendor as entered on the asset's Details tile.

 Warranty Expiration Date

 [Asset().WarrantyExpirationDate]

 Displays the Warranty Expiration as entered on the asset's Warranty/Maintenance tile.

 Warranty Info

 [Asset().WarrantyInfo]

 Displays the Warranty Information as entered on the asset's Warranty/Maintenance tile.
