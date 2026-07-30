# Home Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Home.htm

This class examines home-type asset information. It is preceded by the Tenant or Property parent class and can be followed by the FinancialProperty subclass or a home-level scripting function. Functions in this class typically evaluate fields on the details page of the specified home-type asset.

 More Information

 If you are scripting an asset-type letter template, the letter template automatically examines whether or not the selected asset is a home-type asset when running scripts. For asset- and unit-type letters, you must either use the Asset class or leave the class blank. For example, to display the number of bathrooms in a home on an asset- or unit-type letter, you must enter [Asset.Bathrooms()] or [Bathrooms()] , and not [Home.Bathrooms()] since using the Home class on asset- or unit-type letters outputs no data. For more information, refer to Asset Class (Script) and Unit Class (Script) .

 Example

 [Tenant().Home().CurrentLocationUnit]

 Result

 Displays the unit to which the tenant's home-type asset is currently linked on the asset's Asset Location tile.

 Example

 [Tenant().Home().Manufacturer]

 Result

 Displays the manufacturer of the tenant's home-type asset as listed on the asset's Details tile.

 Recommended Classes

 This class is often followed by one of these recommended classes. Adding an additional class lets you use a function in the additional class.

 Class(). represents a required parent class. If the parent class is not defined at the beginning of your script, Rent Manager defaults to the most appropriate class based on the location of the script.

 Function represents a scripting function that must be inserted into the script. For a complete list of functions, refer to Script Functions .

 Class
 Description

 Financial Property

 [ Class(). Home().FinancialProperty. Function ]

 This class retrieves data about the property selected to track the home's financials.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Class(). represents a required parent class. If the parent class is not defined at the beginning of your script, Rent Manager defaults to the most appropriate class based on the location of the script.

 Function
 Description

 Bathrooms

 [ Class(). Home().Bathrooms]

 Displays the number of bathrooms as entered on the home-type asset's General tile.

 Bedrooms

 [ Class(). Home().Bedrooms]

 Displays the number of bedrooms as entered on the home-type asset's General tile.

 Comment

 [ Class(). Home().Comment]

 Displays the text entered in the Comment tile of the Asset details page for the home-type asset.

 Current Location Property

 [ Class(). Home().CurrentLocationProperty]

 Displays the property to which the home-type asset is currently linked.

 Current Location Unit

 [ Class(). Home().CurrentLocationUnit]

 Displays the unit to which the home-type asset is currently linked.

 Current Status

 [ Class(). Home().CurrentStatus]

 Displays the status currently assigned to the home-type asset in the Asset Status History tile.

 Dimensions

 [ Class(). Home().Dimensions]

 Displays the size of the home.

 Financial Property ID

 [ Class(). Home().FinancialPropertyID]

 Displays the system-generated ID of the property to which the home-type asset's financials are tracked.

 Financial Property Name

 [ Class(). Home().FinancialPropertyName]

 Displays the name of the property to which the home-type asset's financials are tracked.

 Financial Property Short Name

 [ Class(). Home().FinancialPropertyShortName]

 Displays the Short Name of the property to which the home-type asset's financials are tracked.

 Financial Unit ID

 [ Class(). Home().FinancialUnitID]

 Displays the system-generated ID of the unit to which the home-type asset is linked.

 History Count

 [ Class(). Home().HistoryCount()]

 Displays the total number of history/notes on the home-type asset's History/Notes pop-up.

 Home ID

 [ Class(). Home().HomeID]

 Displays the system-generated ID of the home-type asset.

 Home Image

 [ Class(). Home().HomeImage(ImageType)]

 Displays a selected image uploaded to the home-type asset's details page.

 Homeowner Status

 [ Class() .Home().HomeownerStatus()]

 Displays information found on the asset's General tile in the Homeowner Status field.

 Homeowner Status Count

 [Tenant().Home().HomeownerStatusCount()]

 Displays the number of homeowner statuses associated with the home-type asset.

 Homeowner Status List

 [Tenant().Home().HomeownerStatusList()]

 Displays a list of homeowner statuses for an asset.

 Image Count

 [ Class(). Home().ImageCount()]

 Displays the total number of images uploaded to the home-type asset's Images tile.

 Image URL

 [ Class(). Home().ImageURL()]

 Displays the URL address for a selected image uploaded to the home-type asset's Images tile.

 Is Allowed To Be Rented

 [ Class(). Home().IsAllowedToBeRented]

 Displays True if the home-type asset has Allow asset to be rented checked on the General tile. Otherwise, it displays False .

 Is Home

 [ Class(). Home().IsHome]

 This function always display True .

 Last Maintenance Date

 [ Class(). Home().LastMaintenanceDate]

 Displays the date on which maintenance was last performed on the home according to the home-type asset's History/Notes pop-up.

 Location History

 [ Class(). Home().LocationHistory()]

 Displays the current and past properties and units to which the home-type asset is linked in the Asset Location tile. The output is formatted as displayed below:

 Location History Count

 [ Class(). Home().LocationHistoryCount()]

 Displays the number of properties to which the home-type asset is linked in the Asset Location tile.

 Maintenance Period

 [ Class(). Home().MaintenancePeriod]

 Displays the Service Period for the asset's maintenance as entered in the home-type asset's Warranty/Maintenance tile.

 Manufacture Date

 [ Class(). Home().ManufactureDate]

 Displays the Manufacture date as entered on the home-type asset's Details tile.

 Manufacturer

 [ Class(). Home().Manufacturer]

 Displays the Manufacturer as specified on the home-type asset's Details tile.

 Manufacturer City

 [ Class(). Home().ManufacturerCity]

 Displays the city as entered in the Address section of the Asset Manufacturer Details page.

 Manufacturer Comment

 [ Class(). Home().ManufacturerComment]

 Displays the Comment entered on the Asset Manufacturer Details page for the home-type asset's associated manufacturer.

 Manufacturer Email

 [ Class(). Home().ManufacturerEmail]

 Displays the Email entered on the Asset Manufacturer Details page for the home-type asset's associated manufacturer.

 Manufacturer Full Address

 [ Class(). Home().ManufacturerFullAddress]

 Displays the address entered in the Address section of the Asset Manufacturer Details page. The output is formatted as displayed below:

 6420 W. Allison Rd.
Chandler, AZ 85226

 Manufacturer Phone

 [ Class(). Home().ManufacturerPhone]

 Displays the Phone number entered on the Asset Manufacturer Details page for the home-type asset's associated manufacturer.

 Manufacturer State

 [ Class(). Home().ManufacturerState]

 Displays the state as entered in the Address section of the Asset Manufacturer Details page.

 Manufacturer Street

 [ Class(). Home().ManufacturerStreet]

 Displays the street as entered in the Address section of the Asset Manufacturer Details page.

 Manufacturer Website

 [ Class(). Home().ManufacturerWebsite]

 Displays the Website entered on the Asset Manufacturer Details page for the home-type asset's associated manufacturer.

 Manufacturer Zip

 [ Class(). Home().ManufacturerZip]

 Displays the postal code as entered in the Address section of the Asset Manufacturer Details page.

 Market Rent

 [ Class(). Home().MarketRent]

 Displays the Market Rent as entered on the home-type asset's General tile.

 Model Number

 [ Class(). Home().ModelNumber]

 Displays the Model number as entered on the home-type asset's Details tile.

 Name

 [ Class(). Home().Name]

 Displays the Name as entered on the home-type asset General tile.

 Next Maintenance Date

 [ Class(). Home().NextMaintenanceDate]

 Displays the date of the Next Maintenance due for the home-type asset, as shown on the asset's Warranty/Maintenance tile.

 Note

 [ Class(). Home().Note]

 Displays information about the most recent note on the home-type asset's History/Notes tile.

 Owner Name

 [ Class(). Home().OwnerName]

 Displays the name of the first owner listed on the home-type asset's financial property Owners pop-up.

 Purchase Date

 [ Class(). Home().PurchaseDate]

 Displays the Purchase Date as entered on the home-type asset's Details tile.

 Purchase Price

 [ Class(). Home().PurchasePrice]

 Displays the Purchase Price as entered on the home-type asset's Details tile.

 Sale Price

 [ Class(). Home().SalePrice]

 Displays the Sale Price as entered on the home-type asset's Details tile.

 Serial Number

 [ Class(). Home().SerialNumber]

 Displays the Serial Number as entered on the home-type asset's Details tile.

 Service Agreement

 [ Class(). Home().ServiceAgreement]

 Displays Yes if Service Agreement is checked on the home-type asset's Warranty/Maintenance tile. Otherwise, No displays.

 Service Agreement Expiration

 [ Class(). Home().ServiceAgreementExpiration]

 Displays the Service Expiration date as entered on the home-type asset's Warranty/Maintenance tile.

 Service End Date

 [ Class(). Home().ServiceEndDate]

 Displays the Service Life End date as entered on the home-type asset's View Asset Locations pop-up.

 Service Start Date

 [ Class(). Home().ServiceStartDate]

 Displays the Service Life Start as entered on the home-type asset's View Asset Locations pop-up.

 Set History Filter

 [ Class(). Home().SetHistoryFilter()]

 This function is designed to filter the total collection of home-type asset history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 Square Footage

 [ Class(). Home().SquareFootage]

 Displays the Square Footage as entered on the home-type asset's Details tile.

 Status History

 [ Class(). Home().StatusHistory()]

 Displays the current and past statuses as listed on the home-type asset's View Asset Status pop-up.

 Status History Count

 [ Class(). Home().StatusHistoryCount()]

 Displays the number of current and past statuses as listed on the home-type asset's View Asset Status pop-up.

 Title Status

 [ Class(). Home().TitleStatus]

 Displays the current and past title statuses for the home's title.

 Title Status History

 [ Class(). Home().TitleStatusHistory()]

 Displays the number of current and past title statuses as entered on the home-type asset's Details tile.

 Track Financials

 [ Class(). Home().TrackFinancials]

 Displays True if Track Financials is checked on the home-type asset's General tile; otherwise, False displays.

 Type Description

 [ Class(). Home().TypeDescription]

 Displays the Description as entered on the Asset Type Details pop-up.

 Type

 [ Class(). Home().Type]

 Displays the Type as entered on the home-type asset's General tile.

 User Defined Field

 [ Class(). Home().UserDefinedField()]

 Displays the value of the asset-type user defined field (UDF) for the home-type asset. The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Tenant().Home().UserDefinedField("Wall Color")]

 Displays the value for the Wall Color user defined field.

 Vendor Name

 [ Class(). Home().VendorName]

 Displays the Vendor as entered on the home-type asset's Details tile.

 Warranty Expiration Date

 [ Class(). Home().WarrantyExpirationDate]

 Displays the Warranty Expiration as entered on the home-type asset's Warranty/Maintenance tile.

 Warranty Info

 [ Class(). Home().WarrantyInfo]

 Displays the Warranty Information as entered on the home-type asset's Warranty/Maintenance tile.
