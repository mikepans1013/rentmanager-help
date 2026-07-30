# Unit Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Unit.htm

This class examines unit information and can be followed by either a unit-level scripting function or another class associated with the unit.

 Example

 [Unit().Bedrooms]

 Result

 Displays the number of bedrooms in the unit as entered on the Unit details page for the unit.

 Example

 [Unit().Address().State]

 Result

 Displays the state of the unit's address marked as Default as entered on the Unit details page for the unit.

 Class Parameters

 This class can specify a single, optional parameter: an ID.

 ID

 The ID is a system-generated, unique number assigned by Rent Manager . The ID is assigned in the order of the unit's creation date. This number does not display on any window but may be used in scripting. If no ID is specified, Rent Manager defaults to using the ID of the account selected before running the script.

 To learn the ID number of a selected account, the script [Unit().UnitID] can be used. Entering a distinct ID in this class parameter allows you to specify the account that the following function examines.

 [Unit(102).Floor]

 Displays the Floor as entered on the unit's General tile for the unit with the ID of 102.

 Index

 An index allows you to return information about a specific unit by using a number to identify each unit listed. For example, if there are three units listed, they are referenced by indexes 0, 1, and 2. You can specify which unit you want Rent Manager to return information about by referencing an index in your script. If no index is specified, Rent Manager defaults to an index of 0.

 Recommended Classes

 This class is often followed by one of these recommended classes. Adding an additional class lets you use a function in the additional class.

 Function represents a scripting function that must be inserted into the script. For a complete list of functions, refer to Script Functions .

 Class
 Description

 Address

 [Unit().Address(). Function ]

 This class retrieves address data from the Addresses tile on the Unit details page.

 Asset

 [Unit().Asset(). Function ]

 This class retrieves asset data from the Assets tile on the Unit details page.

 Marketing

 [Unit().Marketing. Function ]

 This class retrieves data from the unit's Marketing Setup pop-up.

 Property

 [Unit().Property(). Function ]

 This class retrieves property data for the associated unit.

 Service Manager

 [Unit().ServiceManager(). Function ]

 This class retrieves data from service issues linked to a unit.

 Tenant

 [Unit().Tenant(). Function ]

 This class retrieves data about the tenant occupying the unit.

 Unit Type

 [Unit().UnitType(). Function ]

 This class retrieves data from the Unit Type field on the General tile of the unit.

 Violation

 [Unit().Violation(). Function ]

 This class retrieves violation data for a tenant associated with the unit.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Function
 Description

 Address Count

 [Unit().AddressCount]

 Displays the number of addresses entered for the selected unit.

 Aggregate Chart Value

 [Unit().AggregateChartValue()]

 Displays unit-level financial data based on the function's required Name parameter.

 This scripting function must be used in conjunction with the unit FillChart function, which must be run first to generate the collection of financial data as defined by your parameters (e.g., date range and accounting method). This script can then be used to retrieve a selected value from that data. For more information, refer to Fill Chart Function (Script) .

 Amenities Count

 [Unit().AmenitiesCount]

 Displays the number of amenities checked on the unit's Amenities tile.

 Amenities List

 [Unit().AmenitiesList]

 Displays a list of amenities (separated by commas) as entered on the unit's Amenities tile.

 Amenity

 [Unit().Amenity()]

 Displays the name of a checked amenity as listed on the unit's Amenities tile.

 Amps

 [Unit().Amps]

 Displays the number of amperes (amps) the outlet is rated for, which is entered on the unit's RV / Campground Information tile.

 Apply Now URL

 [Unit().ApplyNowURL]

 Displays the Apply Now URL at which an application can be submitted for the unit.

 Asset Count

 [Unit().AssetCount]

 Displays the number of assets assigned to the unit.

 Asset List

 [Unit().AssetList]

 Displays a list of asset names (separated by commas) assigned to the unit.

 Availability

 [Unit().Availability()]

 Displays unit availability data for the selected field.

 Available

 [Unit().Available()]

 Displays True if the unit is available and False if it is not available.

 Bathrooms

 [Unit().Bathrooms]

 Displays the number of bathrooms as entered on the unit's Miscellaneous tile.

 Bedrooms

 [Unit().Bedrooms]

 Displays the number of bedrooms as entered on the unit's Miscellaneous tile.

 Chart Value

 [Unit().ChartValue()]

 Displays unit-level account data based on the function's required GL Account Number and Field parameters.

 This scripting function must be used in conjunction with the Unit FillChart function, which must be run first in your scripting to generate the collection of financial data as defined by your parameters (e.g., date range and accounting method). This script can then be used to retrieve a selected value from that data. For more information, refer to Fill Chart Function (Script) .

 Comment

 [Unit().Comment]

 Displays the text entered in the Comment field of the Unit's General tile.

 Current Tenant Count

 [Unit().CurrentTenantCount]

 Displays number of tenants currently occupying the unit.

 Days Vacant

 [Unit().DaysVacant()]

 Displays the number of days the unit has been vacant. If the unit it currently occupied or has never been occupied, nothing displays.

 Display Color

 [Unit().DisplayColor]

 Displays the name of the color selected in the Display Color field of the unit's General tile.

 Display Color Code

 [Unit().DisplayColorCode]

 Displays the hexadecimal code of the color selected in the Display Color field of the unit's General tile.

 Display Color ID

 [Unit().DisplayColorID]

 Displays the internal Rent Manager color ID of the color selected in the Display Color field of the unit's General tile.

 Fill Chart

 [Unit().FillChart()]

 Displays a collection of unit-specific GL account data related to the unit.

 This scripting function must be used in conjunction with the other Unit ChartValue functions. For more information, refer to Chart Value Function (Script) and Aggregate Chart Value Function (Script) .

 Floor

 [Unit().Floor]

 Displays the Floor as entered on the unit's General tile.

 History Count

 [Unit().HistoryCount()]

 Displays the total number of history/notes on the unit's History/Notes pop-up.

 Image Count

 [Unit().ImageCount()]

 Displays the total number of images uploaded to the unit details page.

 Image URL

 [Unit().ImageURL()]

 Displays the URL address for a selected image uploaded to the unit details page.

 Is Asset

 [Unit().IsAsset]

 Displays True if the unit is an asset; otherwise, False displays.

 Last Move Out

 [Unit().LastMoveOut()]

 Displays the most recent Move Out Date as specified on the unit's Occupancy tile.

 Market Rent

 [Unit().MarketRent()]

 Displays the total amount of Market Rent for the unit, as entered on the View Market Rent pop-up.

 Max Occupancy

 [Unit().MaxOccupancy]

 Displays the Max Occupancy of the unit as entered on the unit's Miscellaneous tile.

 Move In Count

 [Unit().MoveInCount()]

 Displays the number of move ins as listed on the unit's Occupancy tile.

 Move Out Count

 [Unit().MoveOutCount()]

 Displays the number of move outs as listed on the unit's Occupancy tile.

 Name

 [Unit().Name]

 Displays the Name as entered on the unit General tile.

 Note

 [Unit().Note()]

 Displays information about the most recent note on the unit's History/Notes tile.

 Pricing

 [Unit().Pricing()]

 Displays Rainmaker LRO pricing information.

 Pricing List

 [Unit().PricingList()]

 Displays a list of the pricing information for Rainmaker LRO .

 Prohibited Equipment

 [Unit().ProhibitedRVs()]

 Displays a list of prohibited RV types and other prohibited equipment as defined on the unit's RV/Campground Information tile.

 Pull Through

 [Unit().PullThrough]

 Displays Yes if Pull-Through is checked on the unit's RV / Campground Information tile; otherwise, displays No .

 Security Deposit Charged

 [Unit().SecurityDepositCharged()]

 Displays the total amount of all security deposits posted for all tenants associated with the unit.

 Security Deposit Held

 [Unit().SecurityDepositHeld()]

 Displays the total amount of all security deposits currently held for all tenants associated with the unit.

 Security Deposit Received

 [Unit().SecurityDepositReceived()]

 Displays the total amount of security deposits paid by all tenants associated with the unit.

 Security Deposit Refunded

 [Unit().SecurityDepositRefunded()]

 Displays the total amount of security deposits refunded to tenants associated with the unit.

 Set History Filter

 [Unit().SetHistoryFilter()]

 This function is designed to filter the total collection of unit history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 Site Classification Count

 [Unit().SiteClassificationCount()]

 Displays the number of site classifications associated with the home-type asset located at the unit.

 Slide Outs

 [Unit().SlideOuts()]

 Displays the value of the RV slide outs allowed at the unit as listed on the unit's RV/Campground Information tile.

 Square Footage

 [Unit().SquareFootage]

 Displays the Square Footage as entered on the unit's Miscellaneous tile.

 STR Marketing Description

 [Unit().STRMarketingDescription()]

 Displays the unit's Marketing Description as entered on the unit's details page in the Miscellaneous section.

 Tenant Count

 [Unit().TenantCount()]

 Displays the number of tenants associated with the unit.

 Tenant List

 [Unit().TenantList]

 Displays the full names of all current and past tenants associated with the unit.

 Total Accounts

 [Unit().TotalAccounts()]

 Displays the number of current occupants for the unit as entered on the unit's Occupancy tile.

 Total Allocations

 [Unit().TotalAllocations()]

 Displays the total value of paid allocations for all tenants associated with the unit.

 Total Occupants

 [Unit().TotalOccupants()]

 Displays the total number of contacts associated with the unit, as listed on the tenant's View Contacts pop-up.

 Total Prepay Allocations

 [Unit().TotalPrepayAllocations()]

 Displays the total value of prepayments and/or credits that are unapplied to charges associated with the specified unit.

 Total Unit Default Security Deposit

 [Unit().TotalUnitDefaultSecurityDeposit()]

 Displays the total value of all unit-level security deposits as listed in the unit's Default Security Deposits tile.

 Unit Availability

 [Unit().UnitAvailability()]

 Displays Occupied or Vacant according to the unit's status.

 Unit ID

 [Unit().UnitID]

 Displays the system-generated ID of the selected unit.

 Unit Image

 [Unit().UnitImage(ImageType)]

 Displays a selected image uploaded to the unit details page.

 Unit Length

 [Unit().UnitLength]

 Displays the length listed on the unit's RV / Campground Information tile. The output can include whole numbers and decimals, formatted as displayed below:

 33.00

 Unit Recurring Charges

 [Unit().UnitRecurringCharges()]

 Displays the total amount of unit-level recurring charges, as specified on the unit View Recurring Charges pop-up.

 Unit Rent Recurring Charges

 [Unit().UnitRentRecurringCharges()]

 Displays the total amount of unit-level rent recurring charges, as specified on the unit View Recurring Charges pop-up. Charge types that are designated as rent charges are specified for each property in the Rent Charge Type field on the property Other Information tile.

 Unit Status

 [Unit().UnitStatus()]

 Displays the name of the current status of the unit as listed in the Unit Status tile.

 Unit Status Information

 [Unit().UnitStatusInformation()]

 Displays status information of the unit as listed in the Unit Status tile.

 Unit Width

 [Unit().UnitWidth]

 Displays the width listed on the unit's RV / Campground Information tile. The output can include whole numbers and decimals, formatted as displayed below:

 9.00

 User Defined Field

 [Unit().UserDefinedField()]

 Displays the value of the unit-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Unit().UserDefinedField("Smoking")]

 Displays the value for the Smoking user defined field.
