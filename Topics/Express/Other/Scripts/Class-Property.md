# Property Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Property.htm

This class retrieves data about the properties you have entered for the property in Rent Manager and can be followed by either a property-level scripting function or another class associated with the property.

 Example

 [Tenant().Property().Email]

 Result

 Displays the email address for the tenant's default property as listed on the Property details page in the General tile.

 Example

 [Property().Address().State]

 Result

 Displays the state of the property address marked as Default on the Property details page in the Primary Address tile.

 More Information

 To examine information for your management company's property, replace the Property class with the ManagementCompany class. It can be utilized in any template type and followed by either a property-level scripting function or another class associated with the property designated as the management company in Management Company (System Preferences) .

 The following are examples of this class in scripts:

 [Tenant().ManagementCompany.Address().CityStatePostalCode]

 Displays the city, state, and postal code of the address marked as Default for the management company's property.

 [Owner().ManagementCompany.DefaultBankName]

 Displays the name of the default bank for the management company's property as entered on the property Other Information tile.

 Class Parameters

 A single, optional parameter may be specified for this class: an ID or index.

 ID

 The ID is a system-generated, unique number assigned by Rent Manager . The ID is assigned in the order of the account Create Date . This number does not display on any window but may be used within scripting. If no ID is specified, Rent Manager defaults to using the ID of the account selected before running the script.

 To learn the ID number of a selected account, the script [Property().PropertyID] can be used. Entering a distinct ID in this class parameter allows you to specify the account that the following function examines.

 [Property(30).ManagerName]

 Displays the Manager entered for the property with the ID of 30.

 Index

 An index allows you to return information about a specific property on an account by using a number to identify each property listed. For example, if there are three properties listed on an owner’s account, they are referenced by indexes 0, 1, and 2. You can specify which property you want Rent Manager to return information about by referencing an index in your script. If no index is specified, Rent Manager defaults to an index of 0, which represents the first property in the list.

 [OwnerProspect.Property(1).Name]

 Displays the name of the first additional property of the selected owner prospect.

 Recommended Classes

 This class is often followed by one of these recommended classes. Adding an additional class lets you use a function in the additional class.

 Function represents a scripting function that must be inserted into the script. For a complete list of functions, refer to Script Functions .

 Class
 Description

 Address

 [Property().Address(). Function ]

 This class retrieves address data from the Primary Address tile on the Property details page.

 Asset

 [Property().Asset(). Function ]

 This class retrieves data about assets assigned to the property.

 Home

 [Property().Home(). Function ]

 This class retrieves data about assets designated as homes for the property.

 Marketing

 [Property().Marketing. Function ]

 This class retrieves data from the property's Marketing Setup pop-up.

 Owner

 [Property().Owner(). Function ]

 This class retrieves data about an owner of the property.

 Ownership

 [Property().Ownership(). Function ]

 This class retrieves data from the Owners pop-up for the property.

 Phone Number

 [Property().PhoneNumber(). Function ]

 This class retrieves phone number data for the property.

 Primary Owner

 [Property().PrimaryOwner. Function ]

 This class retrieves data about the owner listed on the Primary Owner summary card for the property.

 Service Manager

 [Property().ServiceManager(). Function ]

 This class retrieves data from issues linked to a property.

 Tenant

 [Property().Tenant(). Function ]

 This class retrieves data about past, current, and future tenants of the property.

 Unit

 [Property().Unit(). Function ]

 This class retrieves data about a unit at the property.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Function
 Description

 Address Count

 [Property().AddressCount]

 Displays the total number of addresses listed for the property.

 Aggregate Budget Value

 [Property().AggregateBudgetValue()]

 Displays property-level financial data related to the budget of the selected property.

 This scripting function must be used in conjunction with the Property FillBudget function. For more information, refer to Fill Budget Function (Script) .

 Aggregate Chart Value

 [Property().AggregateChartValue()]

 Displays property-level financial data related to the selected property based on the specified field.

 This scripting function must be used in conjunction with the Property FillChart function. For more information, refer to Fill Chart Function (Script) .

 Amenities Count

 [Property().AmenitiesCount]

 Displays the total number of checked amenities available at the property.

 Amenities List

 [Property().AmenitiesList]

 Displays a list of amenities (separated by commas) available at the property.

 Amenity

 [Property().Amenity()]

 Displays the name of the first checked amenity available at the property.

 Amount Charged

 [Property().AmountCharged()]

 Displays the total amount of charges posted on a specified date for the property.

 Amount Paid

 [Property().AmountPaid()]

 Displays the total amount paid by tenants at property for a specified date.

 Apply Now URL

 [Property().ApplyNowURL]

 Displays the Apply Now URL at which an application can be submitted for the property.

 Asset Count

 [Property().AssetCount]

 Displays the number of assets assigned to the property.

 Asset List

 [Property().AssetList]

 Displays a list of asset names (separated by commas) assigned to the property.

 Available Unit Count

 [Property().AvailableUnitCount()]

 Displays the total number of available units at the property.

 Available Unit List

 [Property().AvailableUnitList()]

 Displays a list of names (separated by commas) of every available unit at the property.

 Billing Name 1

 [Property().BillingName1]

 Displays the Billing Name 1 field as entered on the Other Information tile for the property.

 Billing Name 2

 [Property().BillingName2]

 Displays the Billing Name 2 field as entered on the Other Information tile for the property.

 Board Member List

 [Property().BoardMemberList()]

 Displays the full name of every board member at an association-type property. The output is formatted as displayed below:

 Carl Branson
Bridgett Hargitae
Devin Lautner
Bruce Shultz

 Budget Comment

 [Property().BudgetComment()]

 Displays the comment entered for a cell on the Budget pop-up for the property, based on the specified GL account number and field.

 Budget Value

 [Property().BudgetValue()]

 Displays the value entered for a cell on the Budget pop-up for the property, based on the specified GL account number and field.

 This scripting function must be used in conjunction with the Property FillBudget function. For more information, refer to Fill Budget Function (Script) .

 Calculated Square Footage

 [Property().CalculatedSquareFootage()]

 Displays the total Square Footage of all active units at the property.

 Chart Value

 [Property().ChartValue()]

 Displays the account data of the specified GL account number and its field.

 This scripting function must be used in conjunction with the Property FillChart function. For more information, refer to Fill Chart Function (Script) .

 Comment

 [Property().Comment]

 Displays the text entered in the Comments field of the property Other Information tile.

 Committee Member List

 [Property().CommitteeMemberList()]

 Displays the full name of every committee member at an association-type property. The output is formatted as displayed below:

 Gemma Gates
Erica Baddam
Muhammad Abadi
Jocelyn Jones

 Current Tenant Count

 [Property().CurrentTenantCount]

 Displays the number of tenants currently occupying the property.

 Default Bank Name

 [Property().DefaultBankName]

 Displays the Default Bank entered on the property Other Information tile.

 Default Bank Number

 [Property().DefaultBankNumber]

 Displays the GL account number of the Default Bank selected on the property Other Information .

 Default Service Issue User

 [Property().DefaultServiceIssueUser]

 Displays the user selected in the Assign Service Issues field on the property Other Information . If <System Default> is selected, nothing displays.

 Display Color

 [Property().DisplayColor]

 Displays the name of the color selected in the Display Color field of the property's General tile.

 Display Color Code

 [Property().DisplayColorCode]

 Displays the hexadecimal code of the color selected in the Display Color field of the property's General tile.

 Display Color ID

 [Property().DisplayColorID]

 Displays the internal Rent Manager color ID of the color selected in the Display Color field of the property's General tile.

 Email

 [Property.Email]

 Displays the Email as entered on the property General tile.

 ePay Bank Account Name

 [Property().EpayBankAccountName]

 Displays the name of the Bank Account selected on the property ePay Settings pop-up.

 ePay Fee Charge Type

 [Property().EpayFeeChargeType]

 Displays the name of the Fee Type selected on the property ePay Settings pop-up.

 ePay Merchant ID

 [Property().EpayMerchantID]

 Displays the account identifier provided by Zego as entered on the System Preferences: ePay General page.

 ePay Warning Limit

 [Property().EpayWarningLimit]

 Displays the amount entered in the ePay Warning Limit field on the property ePay Settings pop-up.

 Exclude Holidays

 [Property().ExcludeHolidays]

 Displays True if Exclude Holidays is checked on the property's Late Fees pop-up; otherwise, displays False .

 Exclude Weekends

 [Property().ExcludeWeekends]

 Displays True if Exclude Weekends is checked on the property's Late Fees pop-up; otherwise, displays False .

 Fill Budget

 [Property().FillBudget()]

 Displays a collection of property-specific GL account data related to the property budget.

 This must be used in conjunction with the other Property BudgetValue functions. For more information, refer to Budget Value Function (Script) .

 Fill Chart

 [Property().FillChart()]

 Displays a collection of property-specific GL account data related to the job.

 This scripting function must be used in conjunction with the other Property ChartValue functions. For more information, refer to Chart Value Function (Script) and Aggregate Chart Value Function (Script) .

 Fiscal Year End

 [Property().FiscalYearEnd]

 Displays the End date selected on the property Fiscal Year tile.

 Fiscal Year Start

 [Property().FiscalYearStart]

 Displays the Start date selected on the property Fiscal Year tile.

 Fixed Amount

 [Property().FixedAmount]

 Displays the value entered in the Fixed Amount field of the property Late Fees pop-up.

 Fixed Rent Only

 [Property().FixedRentOnly]

 Displays True if On Rent Only is checked on the property Late Fees pop-up. Otherwise, displays False .

 Flat Fee

 [Property().FlatFee]

 Displays the Monthly Flat Fee as entered on the property Fees Setup pop-up.

 Grace Period Days

 [Property().GracePeriodDays]

 Displays the Days field in the Grace Period section on the property's Late Fees pop-up.

 Grace Period Exclude Holidays

 [Property().GracePeriodExcludeHolidays]

 Displays True if Exclude Holidays is checked in the Grace Period section on the property Late Fees pop-up. Otherwise, displays False .

 Grace Period Exclude Weekends

 [Property().GracePeriodExcludeWeekends]

 Displays True if Exclude Weekends is checked in the Grace Period section on the property Late Fees pop-up. Otherwise, displays False .

 Grace Period Non Retroactive

 [Property().GracePeriodNonRetroactive]

 Displays True if Non Retroactive is checked in the Grace Period section on the property Late Fees pop-up. Otherwise, displays False .

 Has Late Fees

 [Property().HasLateFees]

 Displays True if Enable Special Late Charge is checked on the property Late Fees pop-up. Otherwise, displays False .

 History Count

 [Property().HistoryCount()]

 Displays the total number of history/notes on the property's History/Notes pop-up.

 Image (Logo)

 [Property.Image(Property.LogoPath())]

 Displays the image uploaded to the property's Property Logo tile.

 Image Count

 [Property().ImageCount()]

 Displays the total number of images uploaded to the property details page.

 Image URL

 [Property().ImageURL()]

 Displays the URL address for a selected image uploaded to the property details page.

 Is Active

 [Property().IsActive]

 Displays True if Active is enabled on the property General tile; otherwise, displays False .

 Is Commercial

 [Property().IsCommercial]

 Displays True if the property has Commercial as the selected property type on the General tile. Otherwise, False displays.

 Is Epay Enabled

 [Property().IsEpayEnabled]

 Displays True if Enable ePay is checked on the property ePay Settings pop-up. Otherwise, displays False .

 Is Property Level Online Listings

 [Property().IsPropertyLevelOnlineListings]

 Displays True if the Property Level Online Listings option on the property Other Information tile is checked; otherwise, False displays.

 Last Hard Close Date

 [Property().LastHardCloseDate()]

 Displays the accounting close date for the previous period.

 Last Hard Close Effective Date

 [Property().LastHardCloseEffectiveDate()]

 Displays the accounting close effective date for the previous period.

 Last Management Fee Post

 [Property().LastManagementFeePost]

 Displays the date of the most recent management fee posting, as shown on the property Property Fee pop-up.

 Last Posted

 [Property().LastPosted]

 Displays the most recent post date of recurring charges at the property.

 Logo Image URL

 [Property().LogoImageURL]

 Displays the URL address of the image uploaded to the property Property Logo tile.

 Logo Path

 [Property().LogoPath]

 Displays the file path of the image uploaded to the property Property Logo tile.

 Manager Name

 [Property().ManagerName]

 Displays the name of the Manager as entered on the property General tile.

 Market Rent

 [Property().MarketRent()]

 Displays the total amount of Market Rent for all units at the property, as entered on each unit's View Market Rent pop-up.

 Maximum Fee

 [Property().MaximumFee]

 Displays the Per Post Max Fee for advanced fee setups, the Monthly Max Fee for standard fee setups, or the Per Unit Max Fee for fee setups with the Post Per Unit option enabled, as listed on the asset's financial property Fees Setup pop-up.

 Minimum Balance

 [Property().MinimumBalance]

 Displays the Minimum Balance as entered in the Per Day section of the property Late Fees pop-up.

 Minimum Fee

 [Property().MinimumFee]

 Displays the Per Post Min Fee for advanced fee setups, the Monthly Min Fee for standard fee setups, or the Per Unit Max Fee for fee setups with the Post Per Unit option enabled, as listed on the property Fees Setup pop-up.

 Name

 [Property().Name]

 Displays the Full Name as entered on the property General tile.

 More Information

 If preceded by the OwnerProspect class ( OwnerProspect.Property.Name ) in an owner prospect-type letter template or report, this function may also be used retrieve property data associated with a potential owner.

 Next Hard Close Date

 [Property().NextHardCloseDate()]

 Displays the accounting close date for the property's current period.

 Next Hard Close Effective Date

 [Property().NextHardCloseEffectiveDate()]

 Displays the accounting close effective date for the property's current period.

 Note

 [Property().Note()]

 Displays information about the most recent note on the property's History/Notes tile.

 Occupancy Count

 [Property().OccupancyCount()]

 Displays the total number of contacts on the tenant's View Contacts pop-up for each tenant at the property.

 Occupied Unit Count

 [Property().OccupiedUnitCount()]

 Displays the total number of occupied units at the property.

 Occupied Unit List

 [Property().OccupiedUnitList()]

 Displays a list of all occupied units (separated by commas) at the asset's financial property.

 One Month Only

 [Property().OneMonthOnly]

 Displays True if One Month Only is checked in the Per Day Options section on the property Late Fees pop-up. Otherwise, displays False .

 Open Charges

 [Property().OpenCharges()]

 Displays the total value of all open charges at the property.

 Open Credits

 Property().OpenCredits()]

 Displays the total value of all open credits at the property.

 Owner Count

 [Property().OwnerCount]

 Displays the number of owners listed on the property's Owners pop-up.

 Owner List

 [Property().OwnerList]

 Displays a list of the names for all owners listed on the property's Owners pop-up.

 Owner Prospect Property ID

 [OwnerProspect().Property().OwnerProspectPropertyID()]

 Displays the system-generated owner prospect property ID of the selected property

 More Information

 This function is available only in an owner prospect-type letter template or report where the Property class is a child class.

 Ownership Count

 [Property().OwnershipCount]

 Displays the total number of properties owned by the owner.

 Ownership List

 [Property().OwnershipList]

 Displays a list of short name(s) (separated by commas) for each of the owner's properties.

 Per Day Amount

 [Property().PerDayAmount]

 Displays the Amount as entered in the Per Day Options section on the property Late Fees pop-up.

 Per Day Limit Amount

 [Property().PerDayLimitAmount]

 Displays the Late Fee Limit as entered in the Per Day Options section on the property Late Fees pop-up.

 Percent Amount

 [Property().PercentAmount]

 Displays the Percent as entered in the Posted Late Fees section on the property Late Fees pop-up.

 Percent Fee On Full Charge

 [Property().PercentFeeOnFullCharge]

 Displays True if Full Charge Amount Only is checked in the Posted Late Fees section on the property Late Fees pop-up. Otherwise, displays False .

 Percent Net Income

 [Property().PercentNetIncome]

 Displays the value entered in the % of Net Income field on the property Fees Setup pop-up.

 Percent Rent Only

 [Property().PercentRentOnly]

 Displays True if On Rent Only is checked for the Percent field in the Posted Late Fees section on the property Late Fees pop-up. Otherwise, displays False .

 Percent Total Income

 [Property().PercentTotalIncome]

 Displays the value entered in the % of Total Income field on the property Fees Setup pop-up.

 Phone Number Count

 [Property().PhoneNumberCount]

 Displays the total count of phone numbers as entered on the property's Phone Numbers tile.

 Property All Recurring Charges

 [Property().PropertyAllRecurring Charges()]

 Displays the total value of all recurring charges in effect for the current tenants of the property.

 Property ID

 [Property().PropertyID]

 Displays the system-generated property ID number.

 Property Image

 [Property().PropertyImage]

 Displays a selected image uploaded to the property details page.

 Property Recurring Charges

 Property().PropertyRecurringCharges()]

 Displays the total value of property-level recurring charges, as specified on the property View Recurring Charges pop-up.

 Property Type

 [Property().PropertyType]

 Displays the Property Type as entered on the property's General tile.

 More Information

 If preceded by the OwnerProspect class ( OwnerProspect.Property.PropertyType ) in an owner prospect-type letter template or report, this function may also be used retrieve property data associated with a potential owner.

 Recurring Charge Posting Day

 [Property().RecurringChargePostingDay]

 Displays the Posting Day as entered on the property's Other Information tile.

 Rent Charge Type

 [Property().RentChargeType]

 Displays the name of every Rent Charge Type selected on the property Other Information tile.

 Rented Square Footage

 [Property().RentedSquareFootage()]

 Displays the total Square Footage as entered on the unit Miscellaneous tile for of all rented units at the property.

 Security Deposit Charged

 [Property().SecurityDepositCharged()]

 Displays the total amount of all security deposits posted for all tenants associated with the property.

 Security Deposit Held

 [Property().SecurityDepositHeld()]

 Displays the total amount of all security deposits currently held for all tenants associated with the property.

 Security Deposit Received

 [Property().SecurityDepositReceived()]

 Displays the total amount of security deposits paid by all tenants associated with the property.

 Security Deposit Refunded

 [Property().SecurityDepositRefunded()]

 Displays the total amount of security deposits refunded to tenants associated with the property.

 Set History Filter

 [Property().SetHistoryFilter()]

 This function is designed to filter the total collection of property history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 Short Name

 [Property().ShortName]

 Displays the Short Name as entered on the property General tile.

 Square Footage

 [Property().SquareFootage]

 Displays the Total Sq Ft as entered on the property Other Information tile.

 Tax ID

 [Property().TaxID]

 Displays the Property Tax ID as entered on the property's Other Information tile.

 Tenant Count

 [Property().TenantCount()]

 Displays the number of tenants associated with the property.

 Tenant List

 [Property().TenantList]

 Displays the full names of all current tenants, past tenants, prospects, and lost prospects associated with the property.

 Total Allocations

 [Property().TotalAllocations()]

 Displays the total value of paid allocations for all tenants associated with property.

 Total Credits

 [Property().TotalCredits()]

 Displays the total amount of credits posted for all tenants associated with the property.

 Total Prepay Allocations

 [Property().TotalPrepayAllocations()]

 Displays the total value of prepayments and/or credits that are unapplied to charges at the property.

 Unit Count

 [Property().UnitCount()]

 Displays the total number of active and inactive units associated with the property.

 More Information

 If preceded by the OwnerProspect class ( OwnerProspect.Property.UnitCount ) in an owner prospect-type letter template or report, this function may also be used retrieve property data associated with a potential owner.

 Unit List

 [Property().UnitList()]

 Displays the Name of every active and inactive unit associated with the property.

 User Defined Field

 [Property().UserDefinedField()]

 Displays the value of the property-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Property().UserDefinedField("Status")]

 Displays the value for the Status user defined field.

 Vacant Unit Count

 [Property().VacantUnitCount()]

 Displays the total number of vacant units associated with the property.

 Vacant Unit List

 [Property().VacantUnitList()]

 Displays the Name of every vacant unit associated with the property.
