# Financial Property Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Financial-Property.htm

This class examines information specific to the property assigned to track financial and reporting activity for an asset. It is preceded by the Asset class or Home class and can be followed by a financial property-level scripting function or another class associated with the financial property.

 Example

 [Asset().FinancialProperty.ManagerName]

 Result

 Displays the Manager of the asset's financial property.

 Example

 [Tenant().Home.FinancialProperty.OpenCharges()]

 Result

 Displays the total value of all open charges at the financial property of the tenant's home.

 Recommended Classes

 This class is often followed by one of these recommended classes. Adding an additional class lets you use a function in the additional class.

 Class(). represents a required parent class. If the parent class is not defined at the beginning of your script, Rent Manager defaults to the most appropriate class based on the location of the script.

 Function represents a scripting function that must be inserted into the script. For a complete list of functions, refer to Script Functions .

 Class
 Description

 Address

 [ Class(). FinancialProperty.Address(). Function ]

 This class retrieves address data from the Primary Address tile on the Property details page for the financial property of the asset or home.

 Owner

 [ Class(). FinancialProperty.Owner(). Function ]

 This class retrieves data about an owner for the financial property of the asset or home.

 Ownership

 [ Class(). FinancialProperty.Ownership(). Function ]

 This class retrieves data from the Owners pop-up of the financial property.

 Phone Number

 [ Class(). FinancialProperty.PhoneNumber(). Function ]

 This class retrieves phone number data for the financial property of the asset or home.

 Primary Owner

 [ Class(). FinancialProperty.PrimaryOwner. Function ]

 This class retrieves data about the owner on the Primary Owner summary card for the financial property.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Class(). represents a required parent class. If the parent class is not defined at the beginning of your script, Rent Manager defaults to the most appropriate class based on the location of the script.

 Function
 Description

 Amount Charged

 [ Class(). FinancialProperty.AmountCharged()]

 Displays the total amount of charges posted on a specified date for the asset's financial property.

 Amount Paid

 [ Class(). FinancialProperty.AmountPaid()]

 Displays the total amount paid by tenants at the asset's financial property for a specified date.

 Apply Now URL

 [ Class(). FinancialProperty.ApplyNowURL]

 Displays the Apply Now URL at which an application can be submitted for the asset's financial property.

 Asset Count

 [ Class(). FinancialProperty.AssetCount]

 Displays the total number of assets with the same financial property as the selected asset.

 Asset List

 [ Class(). FinancialProperty.AssetList]

 Displays a list of asset names (separated by commas) with the same financial property as the selected asset.

 Available Unit Count

 [ Class(). FinancialProperty.AvailableUnitCount()]

 Displays the total number of available units at the asset's financial property.

 Available Unit List

 [ Class(). FinancialProperty.AvailableUnitList()]

 Displays a list of names (separated by commas) of every available unit at the asset's financial property.

 Billing Name 1

 [ Class(). FinancialProperty.BillingName1]

 Displays the Billing Name 1 field as entered on the Other Information tile for the asset's financial property.

 Billing Name 2

 [ Class(). FinancialProperty.BillingName2]

 Displays the Billing Name 2 field as entered on the Other Information tile for the asset's financial property.

 Board Member List

 [ Class(). FinancialProperty.BoardMemberList()]

 Displays the full name of every board member at the asset's financial property. The output is formatted as displayed below:

 Carl Branson
Bridgett Hargitae
Devin Lautner
Bruce Shultz

 Calculated Square Footage

 [ Class(). FinancialProperty.CalculatedSquareFootage()]

 Displays the total Square Footage of all active units at the asset's financial property.

 Comment

 [ Class(). FinancialProperty.Comment]

 Displays the text entered in the Comments field of the asset's financial property Other Information tile.

 Committee Member List

 [ Class(). FinancialProperty.CommitteeMemberList()]

 Displays the full name of every committee member at the asset's financial property. The output is formatted as displayed below:

 Gemma Gates
Erica Baddam
Muhammad Abadi
Jocelyn Jones

 Current Tenant Count

 [ Class(). FinancialProperty.CurrentTenantCount]

 Displays the number of tenants currently occupying the asset's financial property.

 Default Bank Name

 [ Class(). FinancialProperty.DefaultBankName]

 Displays the Default Bank selected on the asset's financial property Other Information tile.

 Default Bank Number

 [ Class(). FinancialProperty.DefaultBankNumber]

 Displays the GL account number of the Default Bank selected on the property Other Information .

 Default Service Issue User

 [ Class(). FinancialProperty.DefaultServiceIssueUser]

 Displays the user selected in the Assign Service Issues field on the asset's financial property Other Information . If <System Default> is selected, nothing displays.

 Display Color

 [ Class(). FinancialProperty.DisplayColor]

 Displays the name of the color selected in the Display Color field of the financial property's General tile.

 Display Color Code

 [ Class(). FinancialProperty.DisplayColorCode]

 Displays the hexadecimal code of the color selected in the Display Color field of the financial property's General tile.

 Display Color ID

 [ Class(). FinancialProperty.DisplayColorID]

 Displays the internal Rent Manager color ID of the color selected in the Display Color field of the financial property's General tile.

 Email

 [ Class(). FinancialProperty.Email]

 Displays the Email as entered on the asset's financial property General tile.

 Fiscal Year End

 [ Class(). FinancialProperty.FiscalYearEnd]

 Displays the End date selected on the asset's financial property Fiscal Year tile.

 Fiscal Year Start

 [ Class(). FinancialProperty.FiscalYearStart]

 Displays the Start date selected on the asset's financial property Fiscal Year tile.

 Flat Fee

 [ Class(). FinancialProperty.FlatFee]

 Displays the Monthly Flat Fee as entered on the asset's financial property Fees Setup pop-up.

 Image (Logo)

 [ Class(). FinancialProperty.Image(Property.LogoPath())]

 Displays the image uploaded to the asset's financial property Property Logo tile.

 Image Count

 [ Class(). FinancialProperty.ImageCount()]

 Displays the total number of images uploaded to the asset's financial property details page.

 Image URL

 [ Class(). FinancialProperty.ImageURL()]

 Displays the URL address for a selected image uploaded to the asset's financial property details page.

 Is Active

 [ Class(). FinancialProperty.IsActive]

 Displays True if Active is enabled on the asset's financial property General tile; otherwise, displays False .

 Is Commercial

 [ Class(). FinancialProperty.IsCommercial]

 Displays True if the asset's financial property has Commercial as the selected property type on the General tile. Otherwise, False displays.

 Is Property Level Online Listings

 [ Class(). FinancialProperty.IsPropertyLevelOnlineListing]

 Displays True if the Property Level Online Listings option on the asset's financial property Other Information tile is checked; otherwise, False displays.

 Last Management Fee Post

 [ Class(). FinancialProperty.LastManagementFeePost]

 Displays the date of the most recent management fee posting, as shown on the asset's financial property Property Fee pop-up.

 Last Posted

 [ Class(). FinancialProperty.LastPosted]

 Displays the most recent post date of recurring charges at the asset's financial property.

 Logo Image URL

 [ Class(). FinancialProperty.LogoImageURL]

 Displays the URL address of the image uploaded to the asset's financial property Property Logo tile.

 Logo Path

 [ Class(). FinancialProperty.LogoPath]

 Displays the file path of the image uploaded to the asset's financial property Property Logo tile.

 Manager Name

 [ Class(). FinancialProperty.ManagerName]

 Displays the name of the Manager as entered on the asset's financial property General tile.

 Market Rent

 [ Class(). FinancialProperty.MarketRent()]

 Displays the total amount of Market Rent for all units at the asset's financial property, as entered on each unit's View Market Rent pop-up.

 Maximum Fee

 [ Class(). FinancialProperty.MaximumFee]

 Displays the Per Post Max Fee for advanced fee setups, the Monthly Max Fee for standard fee setups, or the Per Unit Max Fee for fee setups with the Post Per Unit option enabled, as listed on the asset's financial property Fees Setup pop-up.

 Minimum Fee

 [ Class(). FinancialProperty.MinimumFee]

 Displays the Per Post Min Fee for advanced fee setups, the Monthly Min Fee for standard fee setups, or the Per Unit Max Fee for fee setups with the Post Per Unit option enabled, as listed on the asset's financial property Fees Setup pop-up.

 Name

 [ Class(). FinancialProperty.Name]

 Displays the Full Name as entered on the asset's financial property General tile.

 Occupancy Count

 [ Class(). FinancialProperty.OccupancyCount()]

 Displays the total number of contacts on the tenant's View Contacts pop-up for each tenant at the asset's financial property.

 Occupied Unit Count

 [ Class(). FinancialProperty.OccupiedUnitCount()]

 Displays the total number of occupied units at the asset's financial property.

 Occupied Unit List

 [ Class(). FinancialProperty.OccupiedUnitList()]

 Displays a list of all occupied units (separated by commas) at the asset's financial property.

 One Month Only

 [ Class(). FinancialProperty.OneMonthOnly]

 Displays True if One Month Only is checked in the Per Day Options section on the property Late Fees pop-up. Otherwise, displays False .

 Open Charges

 [ Class(). FinancialProperty.OpenCharges()]

 Displays the total value of all open charges at the asset's financial property.

 Open Credits

 [ Class(). FinancialProperty.OpenCredits()]

 Displays the total value of all open credits at the asset's financial property.

 Percent Net Income

 [ Class(). FinancialProperty.PercentNetIncome]

 Displays the value entered in the % of Net Income field on the asset's financial property Fees Setup pop-up.

 Percent Total Income

 [ Class(). FinancialProperty.PercentTotalIncome]

 Displays the value entered in the % of Total Income field on the asset's financial property Fees Setup pop-up.

 Property All Recurring Charges

 [ Class(). FinancialProperty.PropertyAllRecurringCharges()]

 Displays the total value of all recurring charges in effect for the current tenants of the asset's financial property.

 Property ID

 [ Class(). FinancialProperty.PropertyID]

 Displays the system-generated ID number for the asset's financial property.

 Property Image

 [ Class(). FinancialProperty.PropertyImage]

 Displays a selected image uploaded to the asset's financial property details page.

 Property Recurring Charges

 [ Class(). FinancialProperty.PropertyRecurringCharges()]

 Displays the total value of property-level recurring charges, as specified on the asset's financial property View Recurring Charges pop-up.

 Property Type

 [ Class(). FinancialProperty.PropertyType]

 Displays the Property Type as entered on the asset's financial property General tile.

 Recurring Charge Posting Day

 [ Class(). FinancialProperty.RecurringChargePostingDay]

 Displays the Posting Day as entered on the asset's financial property Other Information tile.

 Rent Charge Type

 [ Class(). FinancialProperty.RentChargeType]

 Displays the name of every Rent Charge Type selected on the asset's financial property Other Information tile.

 Rented Square Footage

 [ Class(). FinancialProperty.RentedSquareFootage()]

 Displays the total Square Footage as entered on the unit Miscellaneous tile for of all rented units at the asset's financial property.

 Security Deposit Charged

 [ Class(). FinancialProperty.SecurityDepositCharged()]

 Displays the total amount of all security deposits posted for all tenants associated with the asset's financial property.

 Security Deposit Held

 [ Class(). FinancialProperty.SecurityDepositHeld()]

 Displays the total amount of all security deposits currently held for all tenants associated with the asset's financial property.

 Security Deposit Received

 [ Class(). FinancialProperty.SecurityDepositReceived()]

 Displays the total amount of security deposits paid by all tenants associated with the asset's financial property.

 Security Deposit Refunded

 [ Class(). FinancialProperty.SecurityDepositRefunded()]

 Displays the total amount of security deposits refunded to tenants associated with the asset's financial property.

 Short Name

 [ Class(). FinancialProperty.ShortName]

 Displays the Short Name as entered on the asset's financial property General tile.

 Square Footage

 [ Class(). FinancialProperty.SquareFootage]

 Displays the Total Sq Ft as entered on the asset's financial property Other Information tile.

 Tax ID

 [ Class(). FinancialProperty.TaxID]

 Displays the Property Tax ID as entered on the asset's financial property Other Information tile.

 Tenant Count

 [ Class(). FinancialProperty.TenantCount()]

 Displays the total number of tenants associated with the asset's financial property.

 Tenant List

 [ Class(). FinancialProperty.TenantList]

 Displays the full names of all current tenants, past tenants, prospects, and lost prospects associated with the asset's financial property.

 Total Allocations

 [ Class(). FinancialProperty.TotalAllocations()]

 Displays the total value of paid allocations for all tenants associated with the asset's financial property.

 Total Credits

 [ Class(). FinancialProperty.TotalCredits()]

 Displays the total amount of credits posted for all tenants associated with the asset's financial property.

 Total Prepay Allocations

 [ Class(). FinancialProperty.TotalPrepayAllocations()]

 Displays the total value of prepayments and/or credits that are unapplied to charges at the asset's financial property.

 Unit Count

 [ Class(). FinancialProperty.UnitCount()]

 Displays the total number of active and inactive units associated with the asset's financial property.

 Unit List

 [ Class(). FinancialProperty.UnitList()]

 Displays the Name of every active and inactive unit associated with the asset's financial property.

 Vacant Unit Count

 [ Class(). FinancialProperty.VacantUnitCount()]

 Displays the total number of vacant units associated with the asset's financial property.

 Vacant Unit List

 [ Class(). FinancialProperty.VacantUnitList()]

 Displays the Name of every vacant unit associated with the asset's financial property.
