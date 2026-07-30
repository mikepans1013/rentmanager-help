# Script Functions

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Script-Functions.htm

Functions determine what the script examines in the database and, typically, what is displayed.

 The table below lists all of the scripting functions available in Rent Manager in alphabetical order. Functions with parameters include links to topics that explain those parameters and how to use them within the script. Some functions, when used with certain classes, do not include additional parameters.

 Class(). represents a required parent class. If the parent class is not defined at the beginning of your script, Rent Manager defaults to the most appropriate class based on the location of the script.

 Function
 Description

 Abs

 [System.Abs()]

 Displays the absolute value of the given numeric value or the value returned by another script function. If a text value is used, the function returns a value of 0 .

 Account Name

 [Tenant().AccountName]

 Displays the full name on the tenant's account.

 Related Preferences

 By default, the name displays with the First Name first. If Format Names by Last Name, First Name is checked in General Report Options (System Preferences) , the name displays with the Last Name first.

 Account Number

 [Tenant().AccountNumber]

 Displays the system-generated Account Number in the tenant's scoreboard.

 [Vendor().AccountNumber]

 Displays the account number entered on the Bill Settings tile for the vendor.

 Action

 [Violation().Stage().Action]

 Displays the text of the action defined in the Internal Actions field for the violation stage of the violation.

 Active

 [ Class(). Contact().Active]

 Displays whether the contact has Active checked on the View Contacts pop-up. The function displays True if the contact is active. Otherwise, False displays.

 Warning

 The Active function applies only when it is used with the Tenant or Prospect classes.

 Active End Date

 [Tenant().ActiveEndDate]

 Displays the Move Out date on the tenant's details page on the Leases tile.

 Active Start Date

 [Tenant().ActiveStartDate]

 Displays the Move In date on the tenant's details page on the Leases tile.

 Additional Insured

 [Tenant().Lease().Insurance().AdditionalInsured]

 Displays a comma separated list containing the names entered as the Additional Insured on the insurance policy.

 Address Count

 [ Class(). Contact().AddressCount]

 Displays the total number of addresses entered on the View Contacts pop-up.

 [Owner().AddressCount]

 Displays the number of addresses entered on the owner's details page.

 [OwnerProspect().AddressCount]

 Displays the number of addresses entered on the Addresses tile for the owner prospect.

 [Property().AddressCount]

 Displays the total number of addresses listed for the property.

 [Prospect.AddressCount]

 Displays the total number of addresses listed for the prospect.

 [ Class(). PrimaryOwner.AddressCount]

 Displays the number of addresses entered on the details page for the primary owner.

 [Tenant().AddressCount]

 Displays the total number of addresses entered in the Addresses section of the tenant's details page.

 [Unit().AddressCount]

 Displays the number of addresses entered for the selected unit.

 [Vendor().AddressCount]

 Displays the number of addresses entered for the vendor.

 Adjusted Principal

 [Tenant().Loan(Tenant.TenantLoanCount()-1).AdjustedPrincipal]

 Displays—for the most recent preexisting loan that was established prior to being tracked and managed in Rent Manager —the outstanding remaining principal as it displays in the Adjusted Principal field in the loan’s scoreboard and when the loan is printed.

 Adjusted Start Date

 [Tenant().Loan(Tenant.TenantLoanCount()-1).AdjustedStartDate]

 Displays—for the most recent preexisting loan that was established prior to being tracked and managed in Rent Manager —the projected date of the first payment to be collected as it displays in the Adjusted Start Date field in the loan’s scoreboard and when the loan is printed.

 Adjustment Amount

 [Tenant().Lease().CAMExpenseAdjustment().AdjustmentAmount()]

 Displays the dollar amount in the Adj. Amount column of the lease's first-listed adjustment on the CAM Expense Adjustments page.

 Adjustment Date

 [Tenant().Lease().CAMExpenseAdjustment().AdjustmentDate()]

 Displays the date in the Adj. Date column of the lease's first-listed adjustment on the CAM Expense Adjustments page.

 Adjustment List

 [Tenant().Lease().CAMExpenseAdjustment().AdjustmentList()]

 Displays a detailed list of all CAM expense adjustments applied to the lease, including the reference number, type, GL account, date, amount, and notes.

 Adults

 [ Class(). Reservation(ReservationCount - 1).Adults]

 Displays the # of Adults listed on the most recent reservation.

 Age

 [ Class(). Contact().Age]

 Displays the age of the contact based on the Birthday field.

 [Tenant().ContactByType().Age]

 Displays the age of the tenant contact based on the Birthday field.

 [Tenant().Pet().Age]

 Displays the Age of the pet entered on the tenant or prospect's details page on the Pets tile.

 Agent Email

 [ Class() .Marketing.AgentEmail]

 Displays the leasing agent's Email Address as entered in the Marketing Setup pop-up's Advanced Settings .

 Agent First Name

 [ Class() .Marketing.FirstName]

 Displays the leasing agent's First Name as entered in the Marketing Setup pop-up's Advanced Settings .

 Agent Last Name

 [ Class() .Marketing.LastName]

 Displays the leasing agent's Last Name as entered in the Marketing Setup pop-up's Advanced Settings .

 Agent Phone

 [ Class() .Marketing.AgentPhone]

 Displays the leasing agent's Phone Number as entered in the Marketing Setup pop-up's Advanced Settings .

 Aggregate Budget Value

 [Job().AggregateBudgetValue()]

 Displays job-level financial data related to the budget of the selected job.

 This scripting function must be used in conjunction with the Job FillBudget function. For more information, refer to Fill Budget Function (Script) .

 [Property().AggregateBudgetValue()]

 Displays property-level financial data related to the budget of the selected property.

 This scripting function must be used in conjunction with the Property FillBudget function. For more information, refer to Fill Budget Function (Script) .

 Aggregate Chart Value

 [Asset().AggregateChartValue()]

 Displays asset-level financial data related to the selected asset based on the specified general ledger (GL) account number and field.

 This scripting function must be used in conjunction with the Asset FillChart function. For more information, refer to Fill Chart Function (Script) .

 [Job().AggregateChartValue()]

 Displays job-level financial data related to the selected job based on the specified general ledger (GL) account number and field.

 This scripting function must be used in conjunction with the Job FillChart function. For more information, refer to Fill Chart Function (Script) .

 [Property().AggregateChartValue()]

 Displays property-level financial data related to the selected property based on the specified field.

 This scripting function must be used in conjunction with the Property FillChart function. For more information, refer to Fill Chart Function (Script) .

 [Unit().AggregateChartValue()]

 Displays unit-level financial data based on the function's required Name parameter.

 This scripting function must be used in conjunction with the unit FillChart function, which must be run first to generate the collection of financial data as defined by your parameters (e.g., date range and accounting method). This script can then be used to retrieve a selected value from that data. For more information, refer to Fill Chart Function (Script) .

 Allowed To Enter

 [ServiceManager().AllowedToEnter()]

 Displays whether the service issue has the Allowed to Enter field checked. The function displays True if the field is checked and False if the field is not checked.

 Amenities Count

 [Property().AmenitiesCount]

 Displays the total number of checked amenities available at the property.

 [Prospect.AmenitiesCount]

 Displays the number of amenities entered on the prospect's Preferences tile.

 [Unit().AmenitiesCount]

 Displays the number of amenities checked on the unit's Amenities tile.

 Amenities List

 [Property().AmenitiesList]

 Displays a list of amenities (separated by commas) available at the property.

 [Prospect.AmenitiesList]

 Displays a list of preferred amenities (separated by commas) as entered on the prospect's Preferences tile.

 [Unit().AmenitiesList]

 Displays a list of amenities (separated by commas) as entered on the unit's Amenities tile.

 Amenity

 [Prospect.Amenity()]

 Displays name, comment, or price information associated with a preferred amenity specified on the prospect's Preferences tile.

 [Unit().Amenity()]

 Displays the name of a checked amenity as listed on the unit's Amenities tile.

 [Property().Amenity()]

 Displays the name of the first checked amenity available at the property.

 Amount

 [Prospect.RentQuotes().Amount]

 Displays the dollar amount of the rent quote.

 [Violation().Stage().Amount]

 Displays the amount of the fine assessed, as defined in the Charge field for the violation stage of the violation.

 Amount Charged

 [ Class(). FinancialProperty.AmountCharged()]

 Displays the total amount of charges posted on a specified date for the asset's financial property.

 [Property().AmountCharged()]

 Displays the total amount of charges posted on a specified date for the property.

 Amount Paid

 [ Class(). FinancialProperty.AmountPaid()]

 Displays the total amount paid by tenants at the asset's financial property for a specified date.

 [Property().AmountPaid()]

 Displays the total amount paid by tenants at property for a specified date.

 Amps

 [Prospect.Amps]

 Displays the number of amperes (amps) the outlet is rated for, which is entered in the STR prospect's Preferences tile.

 [Unit().Amps]

 Displays the number of amperes (amps) the outlet is rated for, which is entered on the unit's RV / Campground Information tile.

 Annual Income

 [ Class(). Contact().AnnualIncome]

 Displays the Annual Income of the contact as entered on the View Contacts pop-up.

 [Tenant().ContactByType().AnnualIncome]

 Displays the Annual Income of the tenant contact as entered on the View Contacts pop-up.

 [ Class(). Contact().Screening.AnnualIncome]

 Displays the annual income of the contact as listed in the screening.

 Applicant Type

 [ Class(). Contact().Screening.ApplicantType]

 Displays the applicant type for the contact as listed in the screening. Possible values include: Applicant , Co-Applicant , Guarantor , Occupant , Partner , Primary , or Spouse .

 [ Class(). Contact().IncomeVerification.ApplicantType]

 Displays the applicant type for the contact as listed in the income verification request. Possible values include: Applicant , Co-Applicant , Guarantor , Occupant , Partner , Primary , or Spouse .

 Application Date

 [OwnerProspect().ApplicationDate]

 Displays the Application Date entered into the Lead Information tile for the owner prospect.

 [Prospect.ApplicationDate()]

 Displays Application Date entered into the Lead Information tile for the prospect.

 Apply Now URL

 [ Class(). FinancialProperty.ApplyNowURL]

 Displays the Apply Now URL at which an application can be submitted for the asset's financial property.

 [Property().ApplyNowURL]

 Displays the Apply Now URL at which an application can be submitted for the property.

 [Unit().ApplyNowURL]

 Displays the Apply Now URL at which an application can be submitted for the unit.

 Arrival Date

 [ Class(). Reservation(ReservationCount - 1).ArrivalDate]

 Displays the Arrival date listed on the most recent reservation entered.

 Ask

 [System.Ask()]

 Asks the Rent Manager user a question and collects the response. In most cases, the user response is either displayed or stored in a variable.

 Asset Count

 [ Class(). FinancialProperty.AssetCount]

 Displays the total number of assets with the same financial property as the selected asset.

 [Property().AssetCount]

 Displays the number of assets assigned to the property.

 [Unit().AssetCount]

 Displays the number of assets assigned to the unit.

 Asset ID

 [Asset().AssetID]

 Displays the system-generated identification number for the asset. This number does not otherwise display in Rent Manager .

 Asset List

 [ Class(). FinancialProperty.AssetList]

 Displays a list of asset names (separated by commas) with the same financial property as the selected asset.

 [Property().AssetList]

 Displays a list of asset names (separated by commas) assigned to the property.

 [Unit().AssetList]

 Displays a list of asset names (separated by commas) assigned to the unit.

 Assigned Closed Date

 [ServiceManager().AssignedClosedDate()]

 Displays either the Closed date of the service issue that was either most recently entered by a user or the original Closed date (if the user has not changed it).

 Assigned Open Date

 [ServiceManager().AssignedOpenDate()]

 Displays either the Opened date of the service issue that was either most recently entered by a user or the original Opened date (if the user has not changed it).

 Assignee

 [ServiceManager().Assignee()]

 Displays the user selected in the Assigned To User field on the Issue details page.

 Auto Fill Checks

 [Vendor().AutoFillChecks]

 Displays True if Auto-Fill Check/Bill Information is checked on the vendor's Bill Settings tile and False if unchecked.

 Availability

 [Unit().Availability()]

 Displays unit availability data for the selected field.

 Available

 [Unit().Available()]

 Displays True if the unit is available and False if it is not available.

 Available Unit Count

 [ Class(). FinancialProperty.AvailableUnitCount()]

 Displays the total number of available units at the asset's financial property.

 [Property().AvailableUnitCount()]

 Displays the total number of available units at the property.

 Available Unit List

 [ Class(). FinancialProperty.AvailableUnitList()]

 Displays a list of names (separated by commas) of every available unit at the asset's financial property.

 [Property().AvailableUnitList()]

 Displays a list of names (separated by commas) of every available unit at the property.

 Balance

 [Owner().Balance()]

 Displays the owner's account balance as of a specified date.

 [ Class(). PrimaryOwner.Balance()]

 Displays the primary owner's account balance as of a specified date.

 [Tenant().Lease().Balance()]

 Displays the tenant's balance for the selected lease as of a specified date.

 [Tenant().Balance()]

 Displays the tenant's account balance as of a specific date.

 [Vendor().Balance()]

 Displays the vendor's account balance as of a specified date.

 [ Class(). Reservation(ReservationCount - 1).Balance]

 Displays the total of any remaining open charges for the most recent reservation.

 Balance 1099

 [Vendor().Balance1099]

 Displays the YTD 1099 Balance , which can be entered by clicking the YTD Balances button on the Tax Information tile for the vendor.

 Balance Due Date

 [ Class(). Reservation(ReservationCount - 1).BalanceDueDate]

 Displays the date the remaining balance is due for the most recent reservation.

 Bank Balance

 [Owner().BankBalance()]

 Displays the total balance of the owner's bank account(s) as displayed in the Balance field on the owner's scoreboard.

 [ Class(). PrimaryOwner.BankBalance()]

 Displays the total balance of the primary owner's bank account(s) as displayed in the Balance field on the primary owner's scoreboard.

 Bathrooms

 [Asset().Bathrooms]

 Displays the number of bathrooms as entered on the asset's General tile, if the asset is a home-type asset.

 [ Class(). Home().Bathrooms]

 Displays the number of bathrooms as entered the home-type asset's General tile.

 [Unit().Bathrooms]

 Displays the number of bathrooms as entered on the unit's Miscellaneous tile.

 [Unit().UnitType.Bathrooms]

 Displays the number of bathrooms as entered on the unit type's General tile.

 Bedrooms

 [Asset().Bedrooms]

 Displays the number of bedrooms as entered on the asset's General tile, if the asset is a home-type asset.

 [ Class(). Home().Bedrooms]

 Displays the number of bedrooms as entered the home-type asset's General tile.

 [Unit().Bedrooms]

 Displays the number of bedrooms as entered on the unit's Miscellaneous tile.

 [Unit().UnitType.Bedrooms]

 Displays the number of bedrooms as entered on the unit type's General tile.

 Billing Name 1

 [ Class(). FinancialProperty.BillingName1]

 Displays the Billing Name 1 field as entered on the Other Information tile for the asset's financial property.

 [Property().BillingName1]

 Displays the Billing Name 1 field as entered on the Other Information tile for the property.

 Billing Name 2

 [ Class(). FinancialProperty.BillingName2]

 Displays the Billing Name 2 field as entered on the Other Information tile for the asset's financial property.

 [Property().BillingName2]

 Displays the Billing Name 2 field as entered on the Other Information tile for the property.

 Birth Date

 [ Class(). Contact().BirthDate]

 Displays the contact's Birthday as entered on the View Contacts pop-up.

 [Tenant().ContactByType().BirthDate]

 Displays the tenant contact's Birthday as entered on the View Contacts pop-up.

 [ Class(). Contact().Screening.BirthDate]

 Displays the birth date in the associated screening for the specified contact.

 [ Class(). Contact().IncomeVerification.BirthDate]

 Displays the birth date in the associated income verification request for the specified contact.

 Board Member List

 [ Class(). FinancialProperty.BoardMemberList()]

 Displays the full name of every board member at the asset's financial property. The output is formatted as displayed below:

 Carl Branson
Bridgett Hargitae
Devin Lautner
Bruce Shultz

 [Property().BoardMemberList()]

 Displays the full name of every board member at an association-type property. The output is formatted as displayed below:

 Carl Branson
Bridgett Hargitae
Devin Lautner
Bruce Shultz

 Board Member Status

 [ Class(). Contact().BoardMemberStatus()]

 Displays whether or not the association board member is currently active, was active, or will be active.

 Board Role

 [ Class(). Contact().BoardRole()]

 Displays the role of the association board member.

 Board Term End

 [ Class(). Contact().BoardTermEnd()]

 Displays the term end date of the association board member.

 Board Term Start

 [ Class(). Contact().BoardTermStart()]

 Displays the term start date of the association board member.

 Booking Date

 [ Class(). Reservation(ReservationCount - 1).BookingDate]

 Displays the date of the most recently created reservation in Rent Manager . If the reservation was made online, the script displays when the reservation was booked from the STR Online Booking portal.

 Breed

 [Tenant().Pet().Breed]

 Displays the Breed of the pet entered on the tenant or prospect's details page on the Pets tile.

 Budget Comment

 [Job().BudgetComment]

 Displays the Comment entered on the job's Budget pop-up.

 [Property().BudgetComment()]

 Displays the comment entered for a cell on the Budget pop-up for the property, based on the specified GL account number and field.

 Budget Value

 [Job().BudgetValue()]

 Displays the value entered on the job's Budget pop-up, based on the specified GL account number and field.

 This scripting function must be used in conjunction with the Job FillBudget function. For more information, refer to Fill Budget Function (Script) .

 [Property().BudgetValue()]

 Displays the value entered for a cell on the Budget pop-up for the property, based on the specified GL account number and field.

 This scripting function must be used in conjunction with the Property FillBudget function. For more information, refer to Fill Budget Function (Script) .

 Calc 1099 Checks

 [Vendor().Calc1099Checks()]

 Displays the calculated 1099 check balance as of a specified date for the vendor.

 Calculated Square Footage

 [ Class(). FinancialProperty.CalculatedSquareFootage()]

 Displays the total Square Footage of all active units at the asset's financial property.

 [Property().CalculatedSquareFootage()]

 Displays the total Square Footage of all active units at the property.

 Car

 [ Class(). Contact().Car]

 Displays the Vehicle as entered on the contact's View Contacts pop-up.

 [Tenant().ContactByType().Car]

 Displays the Vehicle as entered on the tenant contact's View Contacts pop-up.

 Case Number

 [Tenant().Eviction().CaseNumber]

 Displays the court-assigned number for the tenant's eviction case.

 CashPay Account Number

 [Prospect.CashPayAccountNumber]

 Displays the CashPay account number assigned by Zego to the prospect.

 [Tenant().CashPayAccountNumber]

 Displays the CashPay account number assigned by Zego to the tenant.

 Category

 [ServiceManager().Category()]

 Displays the Category selected on the Details tile of the service issue.

 [Vendor().Category]

 Displays the text entered in the Category field on the vendor's details page.

 Category Description

 [Violation().CategoryDescription]

 Displays the description of the violation category associated with the selected violation.

 Category Is Active

 [Violation().CategoryIsActive]

 Displays True to indicate that the violation category of the selected violation is available for use, which is determined by a check in the Active field on Violation Categories page. Otherwise, False displays.

 Category Name

 [Violation().CategoryName]

 Displays the name of the violation category associated with the selected violation.

 CCR Reference

 [Violation().CCRReference]

 Displays the reference for the violation that precedes the text of the associated code as entered in the CC&R Reference field on the Violation details page.

 Charge Type

 [Violation().Stage().ChargeType]

 Displays the charge type of the fine as defined in the Charge Type field for the violation stage of the violation.

 Charges List

 [Owner().ChargesList()]

 Displays each charge linked to the selected owner within a specified date range.

 [ Class(). PrimaryOwner.ChargesList()]

 Displays each charge linked to the selected primary owner within a specified date range.

 [Tenant().Lease().ChargesList()]

 Displays each charge linked to the tenant's specified lease within a specified date range.

 [Tenant().ChargesList()]

 Displays each charge linked to the selected tenant within a specified date range.

 [ Class(). Reservation(ReservationCount - 1).ChargeList()]

 Displays a list of charges for the most recently made reservation, as listed on the View Transactions page for the reservation.

 More Information

 This function is the same as other ChargesList functions, but when used with the Reservation class, the syntax in the script is written as singular ChargeList.

 Chart Value

 [Asset().ChartValue()]

 Displays the account data of the specified GL account number and its field.

 This scripting function must be used in conjunction with the Asset FillChart function. For more information, refer to Fill Chart Function (Script) .

 [Job().ChartValue()]

 Displays the account data of the specified GL account number and its field.

 This scripting function must be used in conjunction with the Job FillChart function. For more information, refer to Fill Chart Function (Script) .

 [Property().ChartValue()]

 Displays the account data of the specified GL account number and its field.

 This scripting function must be used in conjunction with the Property FillChart function. For more information, refer to Fill Chart Function (Script) .

 [Unit().ChartValue()]

 Displays unit-level account data based on the function's required GL Account Number and Field parameters.

 This scripting function must be used in conjunction with the Unit FillChart function, which must be run first in your scripting to generate the collection of financial data as defined by your parameters (e.g., date range and accounting method). This script can then be used to retrieve a selected value from that data. For more information, refer to Fill Chart Function (Script) .

 Check Payee Name

 [Vendor().CheckPayeeName]

 Displays the name to use when writing checks for the vendor, as entered in the Payee field on the General tile for the vendor.

 Checked In

 [ Class() .Reservation(ReservationCount - 1).CheckedIn]

 Displays the guest check in status of the most recently entered reservation. This function outputs Yes if the guest has a check in date and time or No in all other cases.

 Checked In Date

 [ Class(). Reservation(ReservationCount - 1).CheckedInDate]

 Displays the date and time when Save was clicked upon completing the Check In Registration wizard on the most recent reservation. The output is formatted as displayed below:

 7/21/2026 11:48:26 AM

 Checklist

 [ServiceManager().Checklist()]

 Displays the Check List Items tile of the service issue. The output is formatted as displayed below:

 Checklist Count

 [ServiceManager().ChecklistCount()]

 Displays the number of items on the Check List Items tile for the issue.

 Children

 [ Class(). Reservation(ReservationCount - 1).Children]

 Displays the # of Children listed on the most recent reservation.

 City

 [ Class(). Address().City]

 Displays the city of the default address for the specified class.

 [ Class(). Contact().Screening.City]

 Displays the city in the associated screening for the specified contact's current address.

 [ Class(). Contact().IncomeVerification.City]

 Displays the city in the associated income verification request for the specified contact's current address.

 City State Postal Code

 [ Class(). Address().CityStatePostalCode]

 Displays the city, state, and postal code of the default address for the specified class. The output is formatted as displayed below:

 Norwood, OH 45212

 [ Class(). Contact().Screening.CityStatePostalCode]

 Displays the city, state, and postal code in the associated screening for the specified contact's current address. The output is formatted as displayed below:

 Norwood, OH 45212

 [ Class(). Contact().IncomeVerification.CityStatePostalCode]

 Displays the city, state, and postal code in the associated income verification request for the specified contact's current address. The output is formatted as displayed below:

 Norwood, OH 45212

 Close Date

 [ServiceManager().CloseDate()]

 Displays the date on which the Close Date box was initially checked on the service issue in the Issue details page.

 [Violation().CloseDate]

 Displays the date on which the selected violation was closed as entered in the Closed field on the Violation details page.

 Closed Date

 [Tenant().Eviction().ClosedDate]

 Displays the date that the tenant's eviction case was resolved.

 Closed By

 [ServiceManager().ClosedBy()]

 Displays the user who initially checked Close Date on the service issue in the Issue details page.

 Closing Square Bracket

 [System.ClosingSquareBracket]

 Inserts a new closing square bracket ] in the results at the location of the statement. This is necessary when combining text with script since a normal closing square bracket is interpreted as ending a script statement.

 Code

 [Violation().Code]

 Displays the name of the individual violation code or rule for the selected violation.

 Code Group Name

 [Violation().CodeGroupName]

 Displays the name of the violation code group for the selected violation.

 Color

 [Tenant().Pet().Color]

 Displays the Color of the pet entered on the tenant or prospect's details page on the Pets tile.

 Column Value

 [System.ColumnValue()]

 Allows columns in Report Writer to reference the results of another, previously-calculated column. This function works only in Report Writer (RW) .

 Comment

 [Asset().Comment]

 Displays the text entered in the Comment tile of the Asset details page.

 [ Class(). FinancialProperty.Comment]

 Displays the text entered in the Comments field of the asset's financial property Other Information tile.

 [ Class(). Home().Comment]

 Displays the text entered in the Comment tile of the Asset details page for the home-type asset.

 [Owner().Comment]

 Displays the text entered in the Comment tile of the Owner details page.

 [OwnerProspect().Comment]

 Displays the text entered in the Comment tile of the Owner prospect details page.

 [Property().Comment]

 Displays the text entered in the Comments field of the property Other Information tile.

 [ Class(). PrimaryOwner.Comment]

 Displays the text entered in the Comment tile of the Owner details page for the primary owner.

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).Comment]

 Displays the Comment entered by the tenant in Tenant Web Access upon declining their most recent lease renewal offer.

 [Tenant().Comment]

 Displays the text entered in the Comment tile of the Tenant details page.

 [ Class(). Reservation(ReservationCount - 1).Comment]

 Displays the Request listed on the most recent reservation.

 [Unit().Comment]

 Displays the text entered in the Comment field of the Unit's General tile.

 [Vendor().Comment]

 Displays the text entered in the Comment tile of the Vendor details page.

 [ Class(). Contact().Comment()]

 Displays the text entered in the Comment section of the vendor's contact.

 Committee Member List

 [ Class(). FinancialProperty.CommitteeMemberList()]

 Displays the full name of every committee member at the asset's financial property. The output is formatted as displayed below:

 Gemma Gates
Erica Baddam
Muhammad Abadi
Jocelyn Jones

 [Property().CommitteeMemberList()]

 Displays the full name of every committee member at an association-type property. The output is formatted as displayed below:

 Gemma Gates
Erica Baddam
Muhammad Abadi
Jocelyn Jones

 Committee Name

 [ Class(). Contact().CommitteeName()]

 Displays the name of the committee to which the contact was added.

 Company Code

 [System.CompanyCode]

 Returns the Company Code for your database. Your company code is provided to your company by LCS as an identifier for your database. This code can be used to access your database information from our web products such as Tenant Web Access (TWA) , Owner Web Access (OWA) , rmAppSuite Pro , and rmResident .

 Company City

 [ Class(). Marketing.CompanyCity]

 Displays the company's City as entered on the Marketing Setup pop-up in the Contact Information section.

 Company Info

 [ Class(). Marketing.CompanyInfo]

 Displays the Company Name as entered on the Marketing Setup pop-up in the Contact Information section.

 Company Name

 [Tenant().CompanyName]

 Displays the Company Name for tenant accounts that have Is Company checked on the details page.

 Company State

 [ Class(). Marketing.CompanyState]

 Displays the company's State as entered on the Marketing Setup pop-up in the Contact Information section.

 Company Street Address

 [ Class(). Marketing.CompanyStreetAddress]

 Displays the company's Street address as entered on the Marketing Setup pop-up in the Contact Information section.

 Company Website

 [ Class(). Marketing.CompanyWebsite]

 Displays the Company Website as entered on the Marketing Setup pop-up in the Contact Information section.

 Company ZIP

 [ Class(). Marketing.CompanyZIP]

 Displays the company's Postal Code as entered on the Marketing Setup pop-up in the Contact Information section.

 Compare

 [System.Compare()]

 Compares the values of two text strings. It returns 0 if the strings are equal, -1 if "String1" < "String2" alphabetically, and 1 if "String1" > "String2" alphabetically. The case of the characters in the strings is considered in such a way that A-Z > a-z.

 Comply Days Actual

 [Violation().Stage().ComplyDaysActual]

 Displays the number of days the tenant has to remedy the violation before the violation is escalated to the next stage.

 More Information

 When a violation is escalated to the next violation stage, the stage Due Date can be manually overridden.

 This scripting function displays the updated difference between the Due Date and Escalation Date for the stage. The Escalation Date is the date on which the violation advanced to the selected stage and can be viewed on the Escalate Violation pop-up.

 Comply Days Original

 [Violation().Stage().ComplyDaysOriginal]

 Displays the default number of days the tenant has to remedy the violation as originally entered in the Days to Comply field when the violation stage was established.

 More Information

 When a violation is escalated to the next violation stage, the stage Due Date can be manually overridden.

 Use [Violation().Stage().ComplyDaysActual] to see the updated difference between the Due Date and the Escalation Date for the stage.

 Confirmation Number

 [ Class(). Reservation(ReservationCount - 1).ConfirmationNumber]

 Displays the Confirmation # number listed on the most recent reservation.

 Contact Count

 [Tenant().ContactCount()]

 Displays the total number of contacts associated with the tenant's account.

 [Vendor().ContactCount()]

 Displays the number of contacts associated with the vendor.

 Contact Email

 [ Class() .Marketing.ContactEmail]

 Displays the Contact Email as entered on the Marketing Setup tab in the Contact Information section.

 Contact ID

 [ Class(). Contact().ContactID]

 Displays the system-generated identification number of the contact.

 [Tenant().ContactByType().ContactID]

 Displays the system-generated identification number of the tenant contact.

 Contact List

 [Tenant().ContactList()]

 Displays the names of all contacts listed on the tenant's View Contacts pop-up.

 [Vendor().ContactList()]

 Displays a list of contacts associated with the vendor.

 Contact Phone

 [ Class() .Marketing.ContactPhone]

 Displays the Contact Phone as entered on the Marketing Setup pop-up in the Contact Information section.

 Contract From

 [ Class(). Ownership().ContractFrom]

 Displays the date the owner became a client of the management company for the ownership. This corresponds to the Contract Start date on the owner Ownership pop-up.

 Contract To

 [ Class(). Ownership().ContractTo]

 Displays the date the owner stopped being a client of the management company for the ownership. This corresponds to the Contract End date on the owner Ownership pop-up.

 Contribution Account Name

 [Owner().ContributionAccountName]

 Displays the Contribution Account entered on the Owner details page.

 [ Class(). PrimaryOwner.ContributionAccountName]

 Displays the Contribution Account entered on the Owner details page for the primary owner.

 Contribution Account Number

 [Owner().ContributionAccountNumber]

 Displays the GL account number for the owner's contribution account.

 [ Class(). PrimaryOwner.ContributionAccountNumber]

 Displays the GL account number for the primary owner's contribution account.

 Count

 [ Class() .ServiceManager().Count()]

 Displays the number of service issues (both open and closed, by default) linked to an entity within a specified date range.

 To return a value, this function must be used with the Property, Tenant, Prospect, or Unit class preceding the ServiceManager class as represented by .Class in the syntax.

 [Tenant().Lease().CAMExpenseAdjustment().Count()]

 Displays the number of CAM expense adjustments applied to the lease.

 Court Date

 [Tenant().Eviction().CourtDate]

 Displays the date on which the tenant is due to appear in court to address the case.

 CRE Account

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREAccount()]

 Displays the GL Account No and account Name of the CRE Account located on the CRE Setup tab of the commercial tenant's most recent commercial lease renewal.

 CRE Account Administrative Fee

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREAccountAdministrativeFee()]

 Displays the Administrative Fee % associated with the CRE Account located on the CRE Setup tab of the commercial tenant's most recent commercial lease renewal. These accounts are indexed and may be used as parameters for this function.

 CRE Account Pro Rata Share

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREAccountProRataShare()]

 Displays the Pro Rata Share % associated with the CRE Account located on the CRE Setup tab of the commercial tenant's most recent commercial lease renewal. These accounts are indexed and may be used as parameters for this function.

 CRE Charge Type

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREChargeType()]

 Displays the Name of the Charge Type located on the Charge Type Setup tab of the commercial tenant's most recent commercial lease renewal. These charge types are indexed and may be used as parameters for this function.

 CRE Charge Type Base Amount

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREChargeTypeBaseAmount()]

 Displays the value of the Base Amount for the charge type located on the Charge Type Setup tab of the commercial tenant's most recent commercial lease renewal. The charge types are indexed and may be used as parameters for this function.

 CRE Charge Type Base Term

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREChargeTypeBaseTerm()]

 Displays the Base Term for the charge type located on the Charge Type Setup tab of the commercial tenant's most recent commercial lease renewal. The charge types are indexed and may be used as parameters for this function.

 CRE Charge Type Base Year

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREChargeTypeBaseYear()]

 Displays the Base Year Start date for the charge type located in the register on the Charge Type Setup tab of the commercial tenant's most recent commercial lease renewal. The charge types are indexed and may be used as parameters for this function.

 CRE Charge Type Cap Amount

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREChargeTypeCapAmount()]

 Displays the value of the Cap Amount for the charge type located in the register on the Charge Type Setup tab of the commercial tenant's most recent commercial lease renewal. The charge types are indexed and may be used as parameters for this function.

 CRE Charge Type Cap Increase

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREChargeTypeCapIncrease()]

 Displays the value of the % Cap Increase for the charge type located in the register on the Charge Type Setup tab of the commercial tenant's most recent commercial lease renewal. The charge types are indexed and may be used as parameters for this function.

 CRE Charge Type Cap Term

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREChargeTypeCapTerm()]

 Displays the Cap Term for the charge type located in the register on the Charge Type Setup tab of the commercial tenant's most recent commercial lease renewal. The charge types are indexed and may be used as parameters for this function.

 CRE Charge Type Count

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREChargeTypeCount]

 Displays the total number of charge types located on the Charge Type Setup tab of the commercial tenant's most recent commercial lease renewal.

 CRE Charge Type List

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREChargeTypeList()]

 Displays a list of all charge types and associated register data located on the Charge Type Setup tab of the commercial tenant's most recent commercial lease renewal.

 CRE Default Administrative Fee

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREDefaultAdministrativeFee]

 Displays the Default Administrative Fee % on the CRE Setup tab of the commercial tenant's most recent commercial lease renewal.

 CRE Default Pro Rata Share

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREDefaultProRataShare]

 Displays the Default Pro Rata Share % on the CRE Setup tab of the commercial tenant's most recent commercial lease renewal.

 CRE Escalation Amount

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREEscalationAmount()]

 Displays information found on the Charge Escalations tab of the commercial tenant's most recent commercial lease renewal.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Lease.LeaseRenewalCount() - 1) . This allows you to return data for the most recent lease renewal created for the tenant.

 CRE Escalation Amount PSF

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CRENextEscalationAmountPSF()]

 Displays information found on the Charge Escalations tab of the commercial tenant's most recent commercial lease.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Lease.LeaseRenewalCount() - 1) . This allows you to return data for the most recent lease renewal created for the tenant.

 CRE Escalation Charge Types

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREEscalationChargeTypes]

 Displays the Name and Description of the Charge Type included on the Charge Escalations tab of the commercial tenant's most recent commercial lease renewal. These charge types are indexed and may be used as parameters for this function.

 CRE Escalation Date

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREEscalationDate()]

 Displays the Escalation Date for the Charge Type included on the Charge Escalations tab of the commercial tenant's most recent commercial lease renewal. These are indexed oldest to most recent and may be used as parameters for this function.

 CRE Escalation List

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREEscalationList()]

 Displays a list of all escalations and associated register data for all Charge Types on the Charge Escalations tab of the commercial tenant's most recent commercial lease renewal.

 CRE Escalation List Count

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREEscalationListCount()]

 Displays the total number of escalations on the Charge Escalations tab of the commercial tenant's most recent commercial lease renewal in Rent Manager .

 CRE Next Escalation Amount

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CRENextEscalationAmount()]

 Displays the Amount of the next scheduled escalation for the Charge Type on the commercial tenant's most recent commercial lease renewal. The available amounts for all charge types are indexed by the order in which they appear in the register and may be used as parameters for this function.

 CRE Next Escalation Amount PSF

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CRENextEscalationAmountPSF()]

 Displays the Amount / Sq. Foot of the next scheduled escalation for the Charge Type on the commercial tenant's most recent commercial lease renewal. The available amounts for all charge types are indexed by the order in which they appear in the register and may be used as parameters for this function.

 CRE Next Escalation Date

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CRENextEscalationDate()]

 Displays information found on the Charge Escalations tab of the commercial tenant's most recent commercial lease.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Lease.LeaseRenewalCount() - 1) . This allows you to return data for the most recent lease renewal created for the tenant.

 CRE Previous Escalation Amount

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREPreviousEscalationAmount()]

 Displays the Amount of the previous escalation for the Charge Type on the commercial tenant's most recent commercial lease renewal. The available amounts for all charge types are indexed by the order in which they appear in the register and may be used as parameters for this function.

 CRE Previous Escalation Amount PSF

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREPreviousEscalationAmountPSF()]

 Displays the Amount/Sq. Foot of the previous escalation for the Charge Type on the commercial tenant's most recent commercial lease renewal. The available amounts for all charge types are indexed by the order in which they appear in the register and may be used as parameters for this function.

 CRE Previous Escalation Date

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREPreviousEscalationDate()]

 Displays the Escalation Date of the previous escalation for the Charge Type on the commercial tenant's most recent commercial lease renewal. These are indexed oldest to most recent and may be used as parameters for this function.

 CRE Setup Count

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CRESetupCount]

 Displays the total number of CRE accounts on the CRE Setup tab of the commercial tenant's most recent commercial lease renewal.

 CRE Setup List

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CRESetupList()]

 Displays the GL Account No and account Name , Pro Rata Share % , and Administrative Fee % for each CRE account on the CRE Setup tab of the commercial tenant's most recent commercial lease renewal.

 Create Date

 [ServiceManager().CreateDate()]

 Displays the date and time on which the issue was created and first saved.

 [Tenant().CreateDate]

 Displays the date and time the tenant's account was created and first saved.

 [Vendor().CreateDate]

 Displays the date the vendor was created and first saved.

 [Violation().CreateDate]

 Displays the date and time the violation was created and first saved.

 Current Balance

 [Tenant().Loan(Tenant.TenantLoanCount()-1).CurrentBalance()]

 Displays the principal balance of the tenant's loan.

 Current Location

 [System.CurrentLocation]

 Returns the name of the Rent Manager location in which the tenant's data is stored.

 Current Location Property

 [Asset().CurrentLocationProperty]

 Displays the property to which the asset is currently linked.

 [ Class(). Home().CurrentLocationProperty]

 Displays the property to which the home-type asset is currently linked.

 Current Location Unit

 [Asset().CurrentLocationUnit]

 Displays the unit to which the asset is currently linked.

 [ Class(). Home().CurrentLocationUnit]

 Displays the unit to which the home-type asset is currently linked.

 Current Month

 [System.CurrentMonth]

 Displays the date range of the current month (for example, 05/01/ 2026 - 05/31/ 2026 for May).

 Current Occupancy Count

 [Tenant().CurrentOccupancyCount()]

 Displays the total number of contacts listed on the View Contacts pop-up.

 Current Occupancy List

 [Tenant().CurrentOccupancyList()]

 Displays the names of all contacts listed on the View Contacts pop-up.

 Current Quarter

 [System.CurrentQuarter]

 Displays the date range of the current quarter (for example, 04/01/ 2026 - 06/30/ 2026 for Q2).

 Current Stage

 [Tenant().Eviction().CurrentStage]

 Displays the current step in the eviction workflow for a tenant's eviction process. For more information, refer to Eviction Workflow Setup .

 Current Stage Index

 [Violation().CurrentStageIndex]

 Displays the index number for the violation's current stage.

 Rent Manager 's indexing always starts with 0, so the output is always one less than the current stage of the violation. For example, if you ran this script and selected a violation in stage 3, the script outputs 2 .

 Current Status

 [Asset().CurrentStatus]

 Displays the status currently assigned to the asset in the Asset Status History tile.

 [ Class(). Home().CurrentStatus]

 Displays the status currently assigned to the home-type asset in the Asset Status History tile.

 Current Tenant Count

 [ Class(). FinancialProperty.CurrentTenantCount]

 Displays the number of tenants currently occupying the asset's financial property.

 [Property().CurrentTenantCount]

 Displays the number of tenants currently occupying the property.

 [Unit().CurrentTenantCount]

 Displays number of tenants currently occupying the unit.

 Current Year

 [System.CurrentYear]

 Displays the date range of the current year (for example, 01/01/ 2026 - 12/31/ 2026 ).

 Date

 [System.Date()]

 Displays the current system date in the specified format.

 [Violation().Stage().Date]

 Displays the notice date of the current violation stage.

 Date Add

 [System.DateAdd()]

 Adjusts a date by adding or subtracting a specified interval of time.

 Date Compare

 [System.DateCompare()]

 Compares two dates. It returns 0 if the dates are equal, -1 if "Date1" < "Date2", and 1 if "Date1" > "Date2."

 Date Difference

 [System.DateDifference()]

 Calculates the difference between two specified dates as measured in the specified period. The result is the number of periods that "Date2" is greater than or less than "Date1."

 The return value is rounded down to the nearest whole number, so fractional differences are not represented.

 Date Quoted

 [Prospect.RentQuotes().DateQuoted]

 Displays the date the rent quote was created.

 Date Sent to Attorney

 [Tenant().Eviction().DateSentToAttorney]

 Displays the date notice was sent to your attorney that a tenant's eviction process was beginning.

 Day

 [System.Day()]

 Returns the day component of a date value.

 Day of Week

 [System.DayOfWeek()]

 Given a value from 1 to 7, this function returns the day of the week, where 1 = Sunday. Values outside this range return Invalid .

 Days In Year Divisor

 [Tenant().Loan(Tenant.TenantLoanCount()-1).DaysInYearDivisor]

 Displays the number of days in a year used to calculate the daily interest of the tenant's loan. This value ( 360 or 365 ) is defined when the daily interest loan is created. If the loan is not a daily interest loan, the function outputs 0 .

 Days Vacant

 [Unit().DaysVacant()]

 Displays the number of days the unit has been vacant. If the unit it currently occupied or has never been occupied, nothing displays.

 Decision Code

 [ Class(). Contact().Screening.DecisionCode]

 Displays the decision code in the associated screening for the specified contact and class. Possible values include: No Decision , Approved , Declined , Warning , Conditional Approval , or Pending .

 Decision Text

 [ Class(). Contact().Screening.DecisionText]

 Displays the decision text explaining the decision code in the associated screening for the specified contact and class.

 Default Account

 [Vendor().DefaultAccount]

 Displays the Default Account selected on the vendor's Bill Settings tile.

 Default Bank Name

 [ Class(). FinancialProperty.DefaultBankName]

 Displays the Default Bank selected on the asset's financial property Other Information tile .

 [Property().DefaultBankName]

 Displays the Default Bank entered on the property Other Information tile.

 Default Bank Number

 [ Class(). FinancialProperty.DefaultBankNumber]

 Displays the GL account number of the Default Bank selected on the property Other Information .

 [Property().DefaultBankNumber]

 Displays the GL account number of the Default Bank selected on the property Other Information .

 Default Phone Number

 [Tenant().DefaultPhoneNumber]

 Displays the tenant's phone number marked as Default on the View Contacts pop-up.

 [Vendor().DefaultPhoneNumber]

 Displays the vendor's phone number marked as Default on the View Contacts pop-up.

 Default Service Issue User

 [ Class(). FinancialProperty.DefaultServiceIssueUser]

 Displays the user selected in the Assign Service Issues field on the asset's financial property Other Information . If <System Default> is selected, nothing displays.

 [Property().DefaultServiceIssueUser]

 Displays the user selected in the Assign Service Issues field on the property Other Information . If <System Default> is selected, nothing displays.

 Departure Date

 [ Class(). Reservation(ReservationCount - 1).DepartureDate]

 Displays the Departure date listed on the most recent reservation.

 Deposit Fees

 [ Class() .Marketing.DepositFees]

 Displays the security Deposit Fee(s) required for rental as entered on the Marketing Setup pop-up in the Listing Details section.

 Description

 [Job().Description]

 Displays the text entered in the Description field of the job's General tile.

 [Tenant().Pet().Description]

 Displays the text entered in the Description field of the tenant's View Pets pop-up.

 [ServiceManager().Description()]

 Displays the text entered in the Description field on the issue's Description tile.

 [Unit().UnitType.Description]

 Displays the text entered in the Description field on the unit type's General tile.

 [Violation().Description]

 Displays the text entered in the Description field on the violation’s Violation Details tile.

 Details

 [ Class(). Contact().Screening.Details()]

 Displays selected details in the associated screening for the specified contact and class. Each block of screening details is shown in a line as a string of one or more specified screening fields. If no fields are specified in the Format parameter, the results display by default the Agency, Score, Date, Min, Max, and Factors separated by spaces. Additional variables are available to display in each line. An example is shown below.

 [Tenant.Contact.Screening.Details("$_Name \t$_Score \t$_Agency \t$_Date \n")]

 Displays a new line with a customized list of the name, score, agency, and date for the primary contact of the current tenant account.

 Dimensions

 [Asset().Dimensions]

 Displays the size of the asset.

 [ Class(). Home().Dimensions]

 Displays the size of the home.

 Display Color

 [ Class(). FinancialProperty.DisplayColor]

 Displays the name of the color selected in the Display Color field of the financial property's General tile.

 [OwnerProspect().DisplayColor]

 Displays the name of the color selected in the Display Color field of the owner prospect's Miscellaneous tile.

 [Property().DisplayColor]

 Displays the name of the color selected in the Display Color field of the property's General tile.

 [Prospect.DisplayColor]

 Displays the name of the color selected in the Prospect Color field of the prospect's General tile.

 [Tenant().DisplayColor]

 Displays the name of the color selected in the Display Color field of the tenant's Miscellaneous tile.

 [Unit().DisplayColor]

 Displays the name of the color selected in the Display Color field of the unit's General tile.

 Display Color Code

 [ Class(). FinancialProperty.DisplayColorCode]

 Displays the hexadecimal code of the color selected in the Display Color field of the financial property's General tile.

 [Property().DisplayColorCode]

 Displays the hexadecimal code of the color selected in the Display Color field of the property's General tile.

 [Prospect.DisplayColorCode]

 Displays the hexadecimal code of the color selected in the Prospect Color field of the prospect's General tile.

 [Tenant().DisplayColorCode]

 Displays the hexadecimal code of the color selected in the Display Color field of the tenant's Miscellaneous tile.

 [Unit().DisplayColorCode]

 Displays the hexadecimal code of the color selected in the Display Color field of the unit's General tile.

 Display Color ID

 [ Class(). FinancialProperty.DisplayColorID]

 Displays the internal Rent Manager color ID of the color selected in the Display Color field of the financial property's General tile.

 [Property().DisplayColorID]

 Displays the internal Rent Manager color ID of the color selected in the Display Color field of the property's General tile.

 [Tenant().DisplayColorID]

 Displays the internal Rent Manager color ID of the color selected in the Display Color field of the tenant's Miscellaneous tile.

 [Unit().DisplayColorID]

 Displays the internal Rent Manager color ID of the color selected in the Display Color field of the unit's General tile.

 Display Name

 [Owner().DisplayName]

 Displays the Display Name entered on the owner's General tile.

 [OwnerProspect().DisplayName]

 Displays the Display Name entered on the owner prospect's Account tile.

 [ Class(). PrimaryOwner.DisplayName]

 Displays the Display Name entered on the primary owner's General tile.

 Do Not Accept Checks

 [Tenant().DoNotAcceptChecks]

 Displays True if Don't Accept Checks is checked on the tenant's Miscellaneous tile. Otherwise, False displays.

 Do Not Accept Payments

 [Tenant().DoNotAcceptPayments]

 Displays True if Don't Accept Payments is checked on the tenant's Miscellaneous tile. Otherwise, False displays.

 Do Not Accept Partial Payments

 [Tenant().DoNotAcceptPartialPayments]

 Displays True if Don't Accept Partial Payments is checked on the tenant's Miscellaneous tile. Otherwise, False displays.

 Do Not Allow TWA Payments

 [Tenant().DoNotAllowTWAPayments]

 Displays True if Don't Allow TWA Payments is checked on the tenant's Miscellaneous tile. Otherwise, False displays.

 Do Not Charge Late Fees

 [Tenant().DoNotChargeLateFees]

 Displays True if Don't Charge Late Fee is checked on the tenant's Miscellaneous tile. Otherwise, False displays.

 Do Not Print Statements

 [Tenant().DoNotPrintStatements]

 Displays True if the tenant's Statement Method field is set to No Statement or <Use Property Default> while the property's Statement Method field is set to No Statement . Otherwise, displays False .

 Do Not Require Insurance

 [Tenant().Lease().DoNotRequireInsurance()]

 Displays whether or not the selected lease of the selected tenant account has the option Don't require insurance checked. This function outputs True if the option is checked and False if it is not.

 Do Not Send AR Automation Notifications

 [Tenant().DoNotSendARAutomationNotifications]

 Displays True if Don't Send AR Automation Notifications is checked on the tenant's Miscellaneous tile. Otherwise, False displays.

 Draw Account Name

 [Owner().DrawAccountName]

 Displays the Draw Account entered on the Owner details page.

 [ Class(). PrimaryOwner.DrawAccountName]

 Displays the Draw Account entered on the Owner details page for the primary owner.

 Draw Account Number

 [Owner().DrawAccountNumber]

 Displays the GL account number for the owner's draw account.

 [ Class(). PrimaryOwner.DrawAccountNumber]

 Displays the GL account number for the primary owner's draw account.

 Due At Booking

 [ Class(). Reservation(ReservationCount - 1).DueAtBooking]

 Displays the amount due at time of booking for the tenant or prospect's reservation that occurs last. You can view this information on the tenant or prospect's details page in the Reservations tile by selecting a reservation arrow_forward Transactions tab arrow_forward Payment Policy tile.

 Due Date

 [ServiceManager().DueDate()]

 Displays the Due Date on the Issue details page.

 [Violation().Stage().DueDate]

 Displays the date by which a violation must be resolved to prevent further escalation. By default, the Due Date of the current stage displays.

 Echo

 [System.Echo()]

 Prints a literal value, results of a script function, or a variable value.

 Email

 [ Class(). Contact().Email]

 Displays the Email as entered on the contact's View Contacts pop-up.

 [Tenant().ContactByType().Email]

 Displays the Email as entered on the tenant contact's View Contacts pop-up.

 [ Class(). FinancialProperty.Email]

 Displays the Email as entered on the asset's financial property General tile.

 [OwnerProspect().Email]

 Displays the Email Address as entered on the owner prospect's Miscellaneous tile.

 [Property.Email]

 Displays the Email as entered on the property General tile.

 [ Class(). Contact().IncomeVerification.Email]

 Displays the Email as entered on the Run Income Verification pop-up.

 Employer

 [ Class(). Contact().Employer]

 Displays the Employer as entered on the contact's View Contacts pop-up.

 [Tenant().ContactByType().Employer]

 Displays the Employer as entered on the tenant contact's View Contacts pop-up.

 End Date

 [Job().EndDate]

 Displays the End Date entered on the job's General tile. If no end date was specified, the function displays nothing.

 [Tenant()Lease().Insurance().EndDate]

 Displays the End Date associated with the policy on the tenant's primary lease in the m/d/yyyy format.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).EndDate]

 Displays the Lease End date of the tenant's most recent lease renewal.

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).EndDate]

 Displays the Lease End date on the tenant's most recent lease renewal offer.

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

 Equal

 [System.Equal()]

 Compares the values of two text strings and returns 1 if they match and 0 if they don't match. The case of alphabetic characters must be the same to return a match.

 Evicted

 [Tenant().Eviction().Evicted]

 Displays the category of process ( Evicted or Not Evicted ) represented by a tenant's eviction outcome. For more information, refer to Eviction Outcomes (Page) .

 Eviction Count

 [Tenant().EvictionCount()]

 Displays the number of open and closed eviction processes associated with a tenant.

 Eviction Filed Date

 [Tenant().Eviction().EvictionFiledDate]

 Displays the date that a tenant's eviction case was filed with a court.

 Eviction List

 [Tenant().EvictionList()]

 Displays a tab-separated list of a tenant's eviction process(es) and associated information.

 Eviction Reason

 [Tenant().Eviction().EvictionReason]

 Displays the reason that the tenant's eviction process began. For more information, refer to Eviction Reasons (Page) .

 Exclude Holidays

 [Property().ExcludeHolidays]

 Displays True if Exclude Holidays is checked on the property's Late Fees pop-up; otherwise, displays False .

 Exclude Weekends

 [Property().ExcludeWeekends]

 Displays True if Exclude Weekends is checked on the property's Late Fees pop-up; otherwise, displays False .

 Expected End Date

 [Job().ExpectedEndDate]

 Displays the Expected End Date entered on the job's General tile. If no date was specified, the function displays nothing.

 Expected Move Out Date

 [Tenant().Lease().ExpectedMoveOutDate]

 Displays the Expected Move Out date on the selected lease of the tenant account.

 Expiration Date

 [Prospect.RentQuotes().ExpirationDate]

 Displays the date the rent quote expired or is set to expire.

 Expired

 [Prospect.RentQuotes().Expired]

 Displays True if the rent quote has passed its expiration date. Otherwise, displays False .

 Extension

 [ Class(). PhoneNumber().Extension]

 Displays the extension of the phone number for the specified class.

 Failed Calls

 [Prospect.FailedCalls]

 Displays the number of failed calls as shown on the prospect's History/Notes pop-up. Failed calls are defined as entries on the History/Notes pop-up of the Call type, where the box Spoke with Prospect is unchecked.

 Federal Tax ID

 [ Class(). Contact().FederalTaxID]

 Displays the Soc Sec# on the contact's View Contacts pop-up.

 [Tenant().ContactByType().FederalTaxID]

 Displays the Soc Sec # on the tenant contact's View Contacts pop-up.

 Feed Type

 [ Class() .Marketing.FeedType]

 Displays the Feed Type as entered in the Marketing Setup pop-up's Advanced Settings .

 Fill Budget

 [Job().FillBudget()]

 Displays a collection of job-specific GL account data related to the job's budget.

 This scripting function must be used in conjunction with the other Job BudgetValue functions. For more information, refer to Budget Value Function (Script) .

 [Property().FillBudget()]

 Displays a collection of property-specific GL account data related to the property budget.

 This must be used in conjunction with the other Property BudgetValue functions. For more information, refer to Budget Value Function (Script) .

 Fill Chart

 [Job().FillChart()]

 Displays a collection of job-specific GL account data related to the job.

 This scripting function must be used in conjunction with the other Job ChartValue functions. For more information, refer to Chart Value Function (Script) and Aggregate Chart Value Function (Script) .

 [Property().FillChart()]

 Displays a collection of property-specific GL account data related to the job.

 This scripting function must be used in conjunction with the other Property ChartValue functions. For more information, refer to Chart Value Function (Script) and Aggregate Chart Value Function (Script) .

 [Unit().FillChart()]

 Displays a collection of unit-specific GL account data related to the unit.

 This scripting function must be used in conjunction with the other Unit ChartValue functions. For more information, refer to Chart Value Function (Script) and Aggregate Chart Value Function (Script) .

 Final Date

 [Tenant().Lease().CAMExpenseAdjustment().FinalDate()]

 Examines the lease's first-listed adjustment on the CAM Expense Adjustments page. The data displayed varies depending on the adjustment's Type , as detailed below.

 For one-time adjustments, displays the date in the Adj. Date field on the One-time Adjustment Details pop-up.

 For amortized adjustments, displays the date in the Adjustment Date column for the last Period listed on the Amortization Details pop-up.

 Financial Property ID

 [Asset().FinancialPropertyID]

 Displays the system-generated ID of the property to which the asset's financials are tracked.

 [ Class(). Home().FinancialPropertyID]

 Displays the system-generated ID of the property to which the home-type asset's financials are tracked.

 Financial Property Name

 [Asset().FinancialPropertyName]

 Displays the name of the property to which the asset's financials are tracked.

 [ Class(). Home().FinancialPropertyName]

 Displays the name of the property to which the home-type asset's financials are tracked.

 Financial Property Short Name

 [Asset().FinancialPropertyShortName]

 Displays the Short Name of the property to which the asset's financials are tracked.

 [ Class(). Home().FinancialPropertyShortName]

 Displays the Short Name of the property to which the home-type asset's financials are tracked.

 Financial Unit ID

 [Asset().FinancialUnitID]

 Displays the system-generated ID of the unit to which the asset is linked.

 [ Class(). Home().FinancialUnitID]

 Displays the system-generated ID of the unit to which the home-type asset is linked.

 First Contact

 [Prospect.FirstContact]

 Displays the date and time of the first contact with a prospect as shown on the prospect History/Notes pop-up. First contact is defined as the earliest email, visit, or call on the prospect's History/Notes pop-up where the checkbox for Spoke with prospect is checked.

 First Day of Month

 [System.FirstDayOfMonth()]

 Returns the first date in a month of the specified date. If no date parameter is specified, it returns the first date of the current month.

 First Day of Year

 [System.FirstDayOfYear()]

 Returns the first date in the year of the specified date. If no date parameter is specified, it returns the first date of the current year.

 First Name

 [ Class(). Contact().FirstName]

 Displays the First Name as entered on the contact's View Contacts pop-up.

 [Tenant().ContactByType().FirstName]

 Displays the First Name as entered on the contact's View Contacts pop-up.

 [ Class(). Contact().Screening.FirstName]

 Displays the first name in the associated screening for the specified contact and class.

 [Tenant().FirstName]

 Displays the First Name as entered on the tenant's General tile.

 [ Class(). Contact().IncomeVerification.FirstName]

 Displays the first name in the associated income verification request for the specified contact.

 Fiscal Year End

 [ Class(). FinancialProperty.FiscalYearEnd]

 Displays the End date selected on the asset's financial property Fiscal Year tile.

 [Property().FiscalYearEnd]

 Displays the End date selected on the property Fiscal Year tile.

 Fiscal Year Start

 [ Class(). FinancialProperty.FiscalYearStart]

 Displays the Start date selected on the asset's financial property Fiscal Year tile.

 [Property().FiscalYearStart]

 Displays the Start date selected on the property Fiscal Year tile.

 Fixed Amount

 [Property().FixedAmount]

 Displays the value entered in the Fixed Amount field of the property Late Fees pop-up.

 [Tenant().FixedAmount]

 Displays the value entered in the Fixed Amount field of the Late Fees window.

 Fixed Rent Only

 [Property().FixedRentOnly]

 Displays True if On Rent Only is checked on the property Late Fees pop-up. Otherwise, displays False .

 Flat Fee

 [ Class(). FinancialProperty.FlatFee]

 Displays the Monthly Flat Fee as entered on the asset's financial property Fees Setup pop-up.

 [Property().FlatFee]

 Displays the Monthly Flat Fee as entered on the property Fees Setup pop-up.

 Floor

 [Prospect.Floor]

 Displays the names of the Preferred Floors as entered on the prospect's Preferences tile.

 [Unit().Floor]

 Displays the Floor as entered on the unit's General tile.

 Floor Count

 [Prospect.FloorCount]

 Displays the number of Preferred Floors as entered on the prospect's Preferences tile.

 Floor List

 [Prospect.FloorList]

 Displays a list of Preferred Floors , separated by commas, as entered on the prospect's Preferences tile.

 Format

 [System.Format()]

 Adjusts the formatting of a date, time, or numeric value.

 Formatted Decision Text

 [ Class(). Contact().Screening.FormattedDecisionText]

 Display the formatted decision text describing the decision code in the associated screening for the specified contact and class. Up to two lines are returned, split with a new line.

 Full Address

 [ Class(). Address().FullAddress]

 Displays the full default address for the specified class. The output is formatted as displayed below:

 4600 Hawkins Lane
Unit H-13
Norwood, OH 45212

 Full Name

 [ Class(). Contact().FullName()]

 Displays information from the contact's View Contacts pop-up.

 [ Class(). ContactByType().FullName()]

 Displays information from the specified contact type's View Contacts pop-up.

 [ Class(). Contact().Screening.FullName]

 Displays information from the screening correlating contact's View Contacts pop-up.

 [Tenant().FullName]

 Displays information from the tenant's View Contacts pop-up.

 Related Preferences

 By default, the name displays with the First Name first. If Format Names by Last Name, First Name is checked in General Report Options (System Preferences) , the name displays with the Last Name first.

 [ Class(). Contact().IncomeVerification.FullName]

 Displays the first and last name in the associated income verification request for the specified contact.

 Full Number

 [ Class(). PhoneNumber().FullNumber]

 Displays the full phone number (including the extension) for the specified class.

 GL Account

 [Tenant().Lease().CAMExpenseAdjustment().GLAccount()]

 Displays the general ledger account in the GL Account column of the lease's first-listed adjustment on the CAM Expense Adjustments page.

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

 Greeting Name

 [ Class(). Contact().GreetingName]

 Displays the First Name and Last Name as entered on the contact's View Contacts pop-up.

 [Tenant().ContactByType().GreetingName]

 Displays the First Name and Last Name as entered on the specified contact type's View Contacts pop-up.

 Has Insurance

 [Tenant().Lease().Insurance().HasInsurance]

 If the tenant has an insurance policy associated with their account, the function displays True ; otherwise, displays False .

 Has Late Fees

 [Property().HasLateFees]

 Displays True if Enable Special Late Charge is checked on the property Late Fees pop-up. Otherwise, displays False .

 Has Loan

 [Tenant().HasLoan]

 Displays True if the tenant has any owner-financed loans; otherwise displays False .

 Has Pets

 [ServiceManager().HasPets()]

 Displays whether a service issue linked to a property, tenant, prospect, or unit has the Pets field checked. The function displays True if the field is checked; otherwise displays False .

 History Count

 [Asset().HistoryCount()]

 Displays the total number of history/notes on the asset's History/Notes pop-up.

 [Job().HistoryCount()]

 Displays the total number of history/notes on the job's History/Notes pop-up.

 [ Class(). Home().HistoryCount()]

 Displays the total number of history/notes on the home-type asset's History/Notes pop-up.

 [OwnerProspect().HistoryCount()]

 Displays the total number of history/notes on the prospect's History/Notes pop-up.

 [Property().HistoryCount()]

 Displays the total number of history/notes on the property's History/Notes pop-up.

 [Owner().HistoryCount()]

 Displays the total number of history/notes on the owner's History/Notes pop-up.

 [ServiceManager().HistoryCount()]

 Displays the total number of history/notes on the service issue's History/Notes pop-up.

 [Tenant().HistoryCount()]

 Displays the total number of history/notes on the tenant's History/Notes pop-up.

 [Tenant().Eviction().HistoryCount()]

 Displays the number of history/note items for the tenant's eviction process based on the parameters selected.

 [Unit().HistoryCount()]

 Displays the total number of history/notes on the unit's History/Notes pop-up.

 [Vendor().HistoryCount()]

 Displays the total number of history/notes on the vendor's History/Notes pop-up.

 [Violation().HistoryCount()]

 Displays the total number of history/notes on the violation's History/Notes pop-up.

 Home ID

 [ Class(). Home().HomeID]

 Displays the system-generated ID of the home-type asset.

 If

 [System.If()]

 Tests a "Condition" parameter and then executes one of two specified statements. If the "Condition" is true, the code defined for "TruePart" is executed. Otherwise, the code defined for "FalsePart" is executed.

 Image
 (Logo)

 [ Class(). FinancialProperty.Image(Property.LogoPath())]

 Displays the image uploaded to the asset's financial property Property Logo tile.

 [ Class(). Contact.Image(Contact.ImagePath())]

 Displays the image uploaded to the contact's View Contacts pop-up.

 [Property.Image(Property.LogoPath())]

 Displays the image uploaded to the property's Property Logo tile.

 [System.Image()]

 Embeds the specified image file. A file path is used to specify the image file.

 [Tenant().Pet().Image()]

 Displays the image uploaded to the tenant's View Pets pop-up.

 [Violation().Image()]

 Displays the image uploaded to the violation's Violation Image tile.

 Image Count

 [ Class(). FinancialProperty.ImageCount()]

 Displays the total number of images uploaded to the asset's financial property details page.

 [ Class(). Marketing.ImageCount()]

 Displays the number of images assigned to the Images section. Only images associated with the image type(s) specified on the Marketing Setup pop-up in the Unit Images or Property Images drop-down list.

 [Property().ImageCount()]

 Displays the total number of images uploaded to the property details page.

 [Unit().ImageCount()]

 Displays the total number of images uploaded to the unit details page.

 Image Path

 [ Class(). Contact().ImagePath]

 Displays the file path of the image uploaded to the contact's View Contacts pop-up.

 [Tenant().ContactByType().ImagePath]

 Displays the file path of the image uploaded to the specified contact type's View Contacts pop-up.

 Image URL

 [ Class(). FinancialProperty.ImageURL()]

 Displays the URL address for a selected image uploaded to the asset's financial property details page.

 [ Class(). Marketing.ImageURL()]

 Displays the file path to the source file of the selected image on the Images section. Only images associated with the type(s) specified on the Marketing Setup pop-up in the Unit Images or Property Images drop-down list.

 [Property().ImageURL()]

 Displays the URL address for a selected image uploaded to the property details page.

 [Unit().ImageURL()]

 Displays the URL address for a selected image uploaded to the unit details page.

 Images

 [ Class() .Marketing.Images()]

 Displays the image from the property or unit Images section. Only images of the type(s) specified on the Marketing Setup pop-up in the Unit Images or Property Images drop-down list are evaluated.

 Incl. Utilities

 [ Class() .Marketing.Incl.Utilities]

 Displays the selection(s), separated by commas, checked in the Incl. Unities drop-down list on the Marketing Setup pop-up in the Features section.

 Index Of

 [System.IndexOf()]

 Finds the first occurrence of "Value2" within "Value1" and returns the one-based index. If "Value2" is not found, it returns a value of 0 .

 Individual Hours

 [ServiceManager().IndividualHours()]

 Displays information regarding service tech hours entered on the issue's History/Notes pop-up, including the user who performed the work and the number of hours entered, per line item. The output is formatted as displayed below:

 Individual Hours Count

 [ServiceManager().IndividualHoursCount()]

 Displays the number of service tech hours line items listed on the issue's History/Notes pop-up.

 Insurance Expiration Date

 [Tenant().Loan(Tenant.TenantLoanCount()-1).InsuranceExpirationDate]

 Displays the Insurance Expiration date for the loan as entered on the General tile of the loan receivable's details page.

 [Vendor().InsuranceExpirationDate]

 Displays the Insurance Expiration Date as entered on the vendor's Miscellaneous tile.

 Insurance Policy Count

 [Tenant().Lease().Insurance().InsurancePolicyCount]

 Displays the tenant's total number of active policies and policies with start dates that occur in the future.

 Insurer

 [Tenant().Lease().Insurance().Insurer]

 Displays the name of the insurance provider associated with the policy on the tenant's primary lease.

 Interest Level

 [OwnerProspect().InterestLevel]

 Displays the ranking from 1 – 10 (with 10 being the highest) to measure the level of interest that the owner prospect has in owning your property as entered on the owner prospect's Lead Information tile.

 [Prospect.InterestLevel]

 Displays the ranking from 1 – 10 (with 10 being the highest) to measure the level of interest that the prospect has in renting from you as entered on the prospect's Lead Information tile.

 Interest Method

 [Tenant().Loan(Tenant.TenantLoanCount()-1).InterestMethod]

 Displays the method used to calculate interest for the loan as shown on the Loans Receivable page. By default, some columns display only by using .

 Possible values include: Principal Balance , Straight (straight amortization), and Daily .

 Interest Paid

 [Tenant().Loan(Tenant.TenantLoanCount()-1).InterestPaid()]

 Displays the interest paid during a specified date range for the tenant's loan. Any interest paid prior to the loan being tracked in Rent Manager is not included in this total.

 Interest Rate

 [Tenant().Loan(Tenant.TenantLoanCount()-1).InterestRate()]

 Displays the Interest Rate on the loan's scoreboard.

 Interested Units

 [Prospect.InterestedUnits]

 Displays a list of property names and, if specified, the associated unit names, on the prospect's Interested Properties/Units tile.

 Internal Note

 [Tenant().Lease().CAMExpenseAdjustment().InternalNote()]

 Displays the text in the Internal Note column of the lease's first-listed adjustment on the CAM Expense Adjustments page.

 Internal Notes

 [Violation().InternalNotes]

 Displays the violation code's Internal Notes as displayed on the violation's Violation Details tile.

 Is 1099

 [Vendor().Is1099]

 Displays True if 1099 Vendor is checked on the vendor's Tax Information tile; otherwise, displays False .

 Is Active

 [ Class(). FinancialProperty.IsActive]

 Displays True if Active is enabled on the asset's financial property General tile; otherwise, displays False .

 [Job().IsActive]

 Displays True if Active is checked on the job's General tile; otherwise, displays False .

 [Property().IsActive]

 Displays True if Active is enabled on the property General tile; otherwise, displays False .

 [Vendor().IsActive]

 Displays True if Active is enabled on the vendor General tile; otherwise, displays False .

 Is Allowed To Be Rented

 [Asset().IsAllowedToBeRented]

 Displays True if the asset has Allow asset to be rented checked on the General tile. Otherwise, displays False .

 [ Class(). Home().IsAllowedToBeRented]

 Displays True if the home-type asset has Allow asset to be rented checked on the General tile. Otherwise, it displays False .

 Is Asset

 [Unit().IsAsset]

 Displays True if the unit is an asset; otherwise, False displays.

 Is Board Member

 [ Class(). Contact().IsBoardMember()]

 Displays whether or not the contact is an active association board member in Rent Manager .

 Is Closed

 [ServiceManager().IsClosed()]

 Displays True if the service issue of the selected property, tenant, prospect, or unit is closed. Otherwise, False displays.

 [Violation().IsClosed]

 Displays True if the Closed field on the Violation Details tile is checked; otherwise, False displays.

 Is Commercial

 [ Class(). FinancialProperty.IsCommercial]

 Displays True if the asset's financial property has Commercial as the selected property type on the General tile. Otherwise, False displays.

 [Property().IsCommercial]

 Displays True if the property has Commercial as the selected property type on the General tile. Otherwise, False displays.

 Is Committee Member

 [ Class(). Contact().IsCommitteeMember]

 Displays whether or not the contact is an association committee member in Rent Manager .

 Is Company

 [Tenant().IsCompany]

 Displays 1 if Company is checked on the tenant's General tile; otherwise, 0 displays.

 Is Confirmed

 [ServiceManager().IsConfirmed()]

 Displays whether the issue's scheduled date and time block is confirmed on the Maintenance Schedule page in Rent Manager Express . The function displays True if the issue is confirmed and False if the issue is not confirmed.

 Is Current

 [Tenant().Lease().IsCurrent]

 Displays whether the selected lease of the selected tenant account is current based on the Move In and Move Out dates. This function outputs True if there is a move in date but no move out date (or a move out date is in the future) and False in all other cases.

 Is Default

 [ Class(). Address().IsDefault]

 The default output of this script is always 1 , because Rent Manager always pulls the address marked Default . The exception is when a parameter for a different address is specified, in which case the output is 0 .

 [ Class(). PhoneNumber().IsDefault]

 Displays 1 if the phone number is checked as Default ; otherwise, 0 displays.

 Is Defaulted

 [Tenant().Loan(Tenant.TenantLoanCount()-1).IsDefaulted]

 Displays True if the remainder of the loan was defaulted; otherwise, displays False .

 Is Epay Enabled

 [Property().IsEpayEnabled]

 Displays True if Enable ePay is checked on the property ePay Settings pop-up. Otherwise, displays False .

 Is Future

 [Tenant().Lease().IsFuture]

 Displays whether the selected lease of the tenant account is in the future based on the Move In date entered on the Tenant details page. This function outputs True if there is a move in date in the future and False in all other cases.

 Is Home

 [Asset().IsHome]

 Displays True if asset type has Assets of this type are homes checked on the Asset Type Details pop-up. Otherwise, displays False .

 [ Class(). Home().IsHome]

 This function always display True .

 Is Open

 [Tenant().Loan(Tenant.TenantLoanCount()-1).IsOpen]

 Displays True if the loan is open and False if it is closed.

 Is Other Rentable Item

 [Unit().UnitType.IsOtherRentableItem]

 Displays True if unit type has Other Rentable Item checked on the General tile. Otherwise, displays False .

 Is Past

 [Tenant().Lease().IsPast]

 Displays whether the selected lease of the tenant account is in the past based on the Move Out date entered on the Tenant details page. This function outputs True if there is a move out date that has passed and False in all other cases.

 Is Preexisting

 [Tenant().Loan(Tenant.TenantLoanCount()-1).IsPreexisting]

 Displays True if the loan was established prior to setup in Rent Manager and False if it was not.

 Is Primary

 [ Class(). Contact().IsPrimary]

 Displays 1 if the contact is checked as Primary on the View Contacts pop-up. Otherwise, displays 0 .

 [Tenant().ContactByType().IsPrimary]

 Displays 1 if the selected contact type is checked as Primary on the View Contacts pop-up. Otherwise, displays 0 .

 Is Private

 [Vendor().IsPrivate]

 Displays 1 if Private is checked on the vendor's General tile; otherwise, displays 0 .

 Is Property Level Online Listings

 [ Class(). FinancialProperty.IsPropertyLevelOnlineListing]

 Displays True if the Property Level Online Listings option on the asset's financial property Other Information tile is checked; otherwise, False displays.

 [Property().IsPropertyLevelOnlineListings]

 Displays True if the Property Level Online Listings option on the property Other Information tile is checked; otherwise, False displays.

 Is Prospect

 [Tenant().IsProspect]

 Displays False if used in a tenant letter template.

 Is Read

 [ServiceManager().IsRead()]

 Displays whether the service issue has been viewed. The function displays True if the issue has been read and False if it has not been read.

 Is Text Ready

 [ Class(). Contact().PhoneNumber().IsTextReady]

 Displays 1 if the contact's the phone number has T (SMS/Text Ready) checked on the View Contacts pop-up. Otherwise, displays 0 .

 Is Weekly

 [Tenant().IsWeekly]

 Displays 1 if the Rent Period is Weekly on the tenant's General tile. Otherwise, displays 0 .

 Issue History

 [ServiceManager().IssueHistory()]

 Displays entries from the service issue's Issue History pop-up, which lists other issues associated with any linked entities.

 Job Type

 [Job().JobType]

 Displays the name of the Job Type as selected on the job's General tile.

 Judgment Amount

 [Tenant().Eviction().JudgmentAmount]

 Displays the balance the tenant owes after a judgment is rendered in court.

 Last Charge Date

 [Tenant().Loan(Tenant.TenantLoanCount()-1).LastChargeDate()]

 Displays the date of the last posted recurring loan charges on the tenant's View Transactions pop-up. If there are no charges posted as of the specified date, the function returns nothing.

 Last Contact

 [Prospect.LastContact]

 Displays the date and time of the last contact with a prospect as shown on the prospect's Last Contact summary card. Last contact is established by the latest email, visit, or call on the prospect's History/Notes pop-up where the checkbox for Spoke with prospect is checked.

 Last Day Of The Month

 [System.LastDayOfMonth()]

 Returns the last date in the month of the specified date. If no date parameter is specified, it returns the last date of the current month.

 Last Day Of The Year

 [System.LastDayOfYear()]

 Returns the last date in the year of the specified date. If no date parameter is specified, it returns the last date of the current year.

 Last Hard Close Date

 [Property().LastHardCloseDate()]

 Displays the accounting close date for the previous period.

 Last Hard Close Effective Date

 [Property().LastHardCloseEffectiveDate()]

 Displays the accounting close effective date for the previous period.

 Last History Item

 [Prospect.LastHistoryItem]

 Displays the date and time of the last history item, which is the latest entry, as shown on the prospect's History/Notes pop-up.

 Last Maintenance Date

 [Asset().LastMaintenanceDate]

 Displays the date on which maintenance was last performed on the asset according to the asset's History/Notes pop-up.

 [ Class(). Home().LastMaintenanceDate]

 Displays the date on which maintenance was last performed on the home according to the home-type asset's History/Notes pop-up.

 Last Management Fee Post

 [ Class(). FinancialProperty.LastManagementFeePost]

 Displays the date of the most recent management fee posting, as shown on the asset's financial property Property Fee pop-up.

 [Property().LastManagementFeePost]

 Displays the date of the most recent management fee posting, as shown on the property Property Fee pop-up.

 Last Month

 [System.LastMonth]

 Displays the date range of the previous month (for example, 04/01/ 2026 - 04/30/ 2026 if today's month is May).

 Last Move Out

 [Unit().LastMoveOut()]

 Displays the most recent Move Out Date as specified on the unit's Occupancy tile.

 Last Name

 [ Class(). Contact().LastName]

 Displays the Last Name as entered on the contact's View Contacts pop-up.

 [Tenant().ContactByType().LastName]

 Displays the Last Name as entered on the specified contact type's View Contacts pop-up.

 [ Class(). Contact().Screening.LastName]

 Displays the last name in the associated screening for the specified contact and class.

 [Tenant().LastName]

 Displays the Last Name as entered on the tenant's General tile.

 [ Class(). Contact().IncomeVerification.LastName]

 Displays the last name in the associated income verification request for the specified contact.

 Last Pay Date

 [Owner().LastPayDate]

 Displays the date the owner was last paid as shown on the owner's Checks pop-up.

 [ Class(). PrimaryOwner.LastPayDate]

 Displays the date the primary owner was last paid as shown on the primary owner's Checks pop-up.

 Last Payment Amount

 [Tenant().Lease().LastPaymentAmount]

 Displays the amount of the last payment linked to the selected lease of the selected tenant.

 [Tenant().LastPaymentAmount]

 Displays the amount of the last payment made by the tenant.

 Last Payment Date

 [Tenant().Lease().LastPaymentDate]

 Displays the date of the last payment linked to the selected lease of the selected tenant.

 [Tenant().LastPaymentDate]

 Displays the date of the last payment made by the tenant.

 Last Posted

 [ Class(). FinancialProperty.LastPosted]

 Displays the most recent post date of recurring charges at the asset's financial property.

 [Property().LastPosted]

 Displays the most recent post date of recurring charges at the property.

 Last Preexisting Payment Date

 [Tenant().Loan(Tenant.TenantLoanCount()-1).LastPreexistingPaymentDate]

 Displays the date of the last preexisting loan payment of the loan prior to setup in Rent Manager .

 This function returns a value only if the preexisting loan uses the Daily Interest interest method. If the selected loan is not preexisting or uses another interest method, this function returns nothing. You can test for these values using the IsPreexisting and InterestMethod functions.

 Last Quarter

 [System.LastQuarter]

 Displays the date range of the previous quarter (for example, 01/01/ 2026 - 03/31/ 2026 if today's date is in Q2).

 Last Stage Change Date

 [Tenant().Eviction().LastStageChangeDate]

 Displays the date that the eviction stage for a tenant's eviction process was updated by a user.

 Last Year

 [System.LastYear]

 Displays the date range of the previous year (for example, 01/01/ 2026 - 03/31/ 2026 ).

 Late Fee Amount

 [Tenant().LateFeeAmount()]

 Displays the total late fees associated with the tenant's account as of the specified date.

 Latitude Coordinate

 [ Class() .Marketing.LatitudeCoordinate]

 Displays the Latitude as entered in the Marketing Setup pop-up's Advanced Settings .

 Laundry

 [ Class() .Marketing.Laundry]

 Displays the selection(s), separated by commas, checked in the Laundry drop-down list on the Marketing Setup pop-up in the Features section.

 Lead Source

 [OwnerProspect().LeadSource]

 Displays the name of the marketing lead source as entered on the owner prospect's Lead Information tile.

 [Prospect.LeadSource]

 Displays the name of the marketing lead source as entered on the prospect's Lead Information tile.

 [ Class(). Reservation(ReservationCount - 1).LeadSource]

 Displays the Lead Source for the most recent reservation entered.

 Lease Agent

 [Prospect.LeaseAgent]

 Displays the name of the leasing agent as entered on the prospect's Lead Information tile.

 Lease Agent Email

 [Prospect.LeaseAgentEmail]

 Displays the email address of the leasing agent selected on the prospect's Lead Information tile. The leasing agent's email address is entered on the user's Contact Information tile.

 Lease Agent Fax Number

 [Prospect.LeaseAgentFaxNumber]

 Displays the fax number of the leasing agent selected on the prospect's Lead Information tile. The leasing agent's fax number is entered on the user's Contact Information tile.

 Lease Agent Phone Number

 [Prospect.LeaseAgentPhoneNumber]

 Displays the phone number of the leasing agent selected on the prospect's Lead Information tile. The leasing agent's phone number is entered on the user's Contact Information tile.

 Lease Count

 [Tenant().LeaseCount]

 Displays total number of leases listed on the tenant's View Leases pop-up.

 Lease End Date

 [Tenant().Lease().LeaseEndDate]

 Displays the Lease End date of the selected lease on the tenant's View Leases pop-up.

 [Prospect.LeaseEndDate]

 Displays the Expected Lease End date as entered in the prospect's Reservation/Expected Lease Information tile.

 Lease ID

 [Tenant().Lease().LeaseID]

 Displays the internally generated lease ID for the selected lease of tenant.

 Lease List

 [Tenant().LeaseList]

 Displays the unit names associated with the leases on the tenant's View Leases pop-up.

 Lease Renewal Count

 [Tenant().Lease().LeaseRenewalCount]

 Displays the number of renewals on a selected lease, including the very first lease, for the tenant.

 Lease Renewal Offer Count

 [Tenant().Lease().LeaseRenewalOfferCount]

 Displays the number of renewal offers on a selected lease for the tenant.

 Lease Sign Date

 [Tenant().Lease().LeaseSignDate]

 Displays the Lease Sign date on the selected lease for the tenant.

 Lease Signed Date

 [Prospect.LeaseSignedDate]

 Displays the lease signed date for a prospect whose Status has changed to Tenant .

 Lease Start Date

 [Tenant().Lease().LeaseStartDate]

 Displays the Lease Start date on the selected lease for the tenant.

 [Prospect.LeaseStartDate]

 Displays the Expected Lease Start date as entered on the prospect's Reservation/Expected Lease Information tile.

 Lease Term

 [Tenant().Lease().LeaseTerm]

 Displays the Lease Term entry for the selected lease on the tenant's View Leases pop-up.

 [Prospect.LeaseTerm]

 Displays the Lease Term selection on the prospect's Reservation/Expected Lease Information tile.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).LeaseTerm]

 Displays the Lease Term selection for the most recent lease renewal on the tenant's View Leases pop-up.

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).LeaseTerm]

 Displays the Renewal Term on the tenant's most recent lease renewal offer.

 [Prospect.RentQuotes().LeaseTerm]

 Displays the duration of the lease offered for the rent quote.

 Lease Terms

 [ Class() .Marketing.LeaseTerms]

 Displays the selection(s), separated by commas, checked in the Lease Terms drop-down list on the Marketing Setup pop-up in the Listing Details section.

 Left

 [System.Left()]

 Returns a specified number of characters from the left side of a string.

 Left Trim

 [System.LeftTrim()]

 Returns a text sting with the white space removed from the left of the first non-whitespace character.

 Length

 [Prospect.Length]

 Displays the length entered in the STR prospect's Preferences tile. The output is formatted as displayed below:

 28

 [System.Length()]

 Returns the number of characters in a text string.

 Letter Template

 [Violation().Stage().LetterTemplate]

 Displays the name of the letter template associated with the violation. Letter templates can be assigned to a violation code group, code, and stage. Rent Manager uses the following hierarchy to determine which letter template name displays for this scripting function:

 Letter Template Location
 Order of Importance

 Stage

 Highest priority. If a default letter template is defined for the stage, this letter template displays.

 Code

 Next priority. If no specific letter template is set for the stage, the letter template set for the code displays.

 Code Group
 Lowest priority. If no specific letter template is set for the stage or code, the letter template set for the code group displays.

 License

 [ Class(). Contact().License]

 Displays the License number as entered on the contact's View Contacts pop-up.

 [Tenant().ContactByType().License]

 Displays the License as entered on the specified contact type's View Contacts pop-up.

 Line Feed

 [System.LineFeed]

 Inserts a new line in the results at the location of the statement. In many cases, LineFeed is used to conjunction with another scripting function.

 Link

 [Job().Link]

 Displays the name of the Property , Unit , or Asset selected in the job's Link tile.

 Link Type

 [Job().LinkType]

 Displays the link type ( Property , Unit , or Asset ) selected in the job's Link tile.

 Links

 [ServiceManager().Links()]

 Displays any tenant, prospect, unit, and/or property to which the issue is linked.

 List

 [ServiceManager().List()]

 Displays a list of service issues linked to the property, tenant, prospect, or unit within a specified date range. The output is formatted as displayed below:

 Listing URL

 [ Class() .Marketing.ListingURL]

 Displays the Listing URL as entered in the Marketing Setup pop-up's Advanced Settings .

 Loan Count

 [Tenant().LoanCount]

 Displays the number of owner-financed loans associated with the tenant's account. Both open and closed loans are included in the count.

 If the tenant has never had a loan, this function returns a 0 .

 Loan ID

 [Tenant().Loan(Tenant.TenantLoanCount()-1).LoanID]

 Displays the internally generated loan ID for the tenant's loan.

 Loan List

 [Tenant().LoanList]

 Displays the Reference number of all owner-financed loans associated with the tenant's account. Both open and closed loans are included. The reference numbers are listed in order by origination date, with the oldest first.

 Location History

 [Asset().LocationHistory()]

 Displays the current and past properties and units to which the asset is linked in the Asset Location tile. The output is formatted as displayed below:

 [ Class(). Home().LocationHistory()]

 Displays the current and past properties and units to which the home-type asset is linked in the Asset Location tile. The output is formatted as displayed below:

 Location History Count

 [Asset().LocationHistoryCount()]

 Displays the number of properties to which the asset is linked in the Asset Location tile.

 [ Class(). Home().LocationHistoryCount()]

 Displays the number of properties to which the home-type asset is linked in the Asset Location tile.

 Lockbox ID

 [Tenant().LockboxID]

 Displays the Company Code , the number of the tenant's associated Lockbox barcode, and the tenant's account number appended as a string.

 Lockout Date

 [Tenant().Eviction().LockoutDate]

 Displays the date after which the tenant is locked out of the unit by law enforcement.

 Logo Image URL

 [ Class(). FinancialProperty.LogoImageURL]

 Displays the URL address of the image uploaded to the asset's financial property Property Logo tile.

 [Property().LogoImageURL]

 Displays the URL address of the image uploaded to the property Property Logo tile.

 Logo Path

 [ Class(). FinancialProperty.LogoPath]

 Displays the file path of the image uploaded to the asset's financial property Property Logo tile.

 [Property().LogoPath]

 Displays the file path of the image uploaded to the property Property Logo tile.

 Long Term Rental

 [ Class(). Reservation(ReservationCount - 1).LongTermRental]

 Displays Yes if Long Term Rental is checked on the most recent reservation and No if not.

 Longitude Coordinate

 [ Class() .Marketing.LongitudeCoordinate]

 Displays the Longitude as entered in the Marketing Setup pop-up's Advanced Settings .

 Lost Reason

 [Prospect.LostReason]

 Displays the reason the selected prospect was lost as entered in the prospect's Status summary card.

 Lower Case

 [System.LowerCase()]

 Returns a text string converted to lower case.

 Maintenance Period

 [Asset().MaintenancePeriod]

 Displays the Service Period for the asset's maintenance as entered in the asset's Warranty/Maintenance tile.

 [ Class(). Home().MaintenancePeriod]

 Displays the Service Period for the asset's maintenance as entered in the home-type asset's Warranty/Maintenance tile.

 Manager Name

 [ Class(). FinancialProperty.ManagerName]

 Displays the name of the Manager as entered on the asset's financial property General tile.

 [Property().ManagerName]

 Displays the name of the Manager as entered on the property General tile.

 Manufacture Date

 [Asset().ManufactureDate]

 Displays the Manufacture date as entered on the asset's Details tile.

 [ Class(). Home().ManufactureDate]

 Displays the Manufacture date as entered on the home-type asset's Details tile.

 Manufacturer

 [Asset().Manufacturer]

 Displays the Manufacturer as specified on the asset's Details tile.

 [ Class(). Home().Manufacturer]

 Displays the Manufacturer as specified on the home-type asset's Details tile.

 Manufacturer City

 [Asset().ManufacturerCity]

 Displays the city as entered in the Address section of the Asset Manufacturer Details page.

 [ Class(). Home().ManufacturerCity]

 Displays the city as entered in the Address section of the Asset Manufacturer Details page.

 Manufacturer Comment

 [Asset().ManufacturerComment]

 Displays the Comment entered on the Asset Manufacturer Details page for the asset's associated manufacturer.

 [ Class(). Home().ManufacturerComment]

 Displays the Comment entered on the Asset Manufacturer Details page for the home-type asset's associated manufacturer.

 Manufacturer Email

 [Asset().ManufacturerEmail]

 Displays the Email entered on the Asset Manufacturer Details page for the asset's associated manufacturer.

 [ Class(). Home().ManufacturerEmail]

 Displays the Email entered on the Asset Manufacturer Details page for the home-type asset's associated manufacturer.

 Manufacturer Full Address

 [Asset().ManufacturerFullAddress]

 Displays the address entered in the Address section of the Asset Manufacturer Details page. The output is formatted as displayed below:

 6420 W. Allison Rd.
Chandler, AZ 85226

 [ Class(). Home().ManufacturerFullAddress]

 Displays the address entered in the Address section of the Asset Manufacturer Details page. The output is formatted as displayed below:

 6420 W. Allison Rd.
Chandler, AZ 85226

 Manufacturer Phone

 [Asset().ManufacturerPhone]

 Displays the Phone number entered on the Asset Manufacturer Details page for the asset's associated manufacturer.

 [ Class(). Home().ManufacturerPhone]

 Displays the Phone number entered on the Asset Manufacturer Details page for the home-type asset's associated manufacturer.

 Manufacturer State

 [Asset().ManufacturerState]

 Displays the state as entered in the Address section of the Asset Manufacturer Details page.

 [ Class(). Home().ManufacturerState]

 Displays the state as entered in the Address section of the Asset Manufacturer Details page.

 Manufacturer Street

 [Asset().ManufacturerStreet]

 Displays the street as entered in the Address section of the Asset Manufacturer Details page.

 [ Class(). Home().ManufacturerStreet]

 Displays the street as entered in the Address section of the Asset Manufacturer Details page.

 Manufacturer Website

 [Asset().ManufacturerWebsite]

 Displays the Website entered on the Asset Manufacturer Details page for the asset's associated manufacturer.

 [ Class(). Home().ManufacturerWebsite]

 Displays the Website entered on the Asset Manufacturer Details page for the home-type asset's associated manufacturer.

 Manufacturer Zip

 [Asset().ManufacturerZip]

 Displays the postal code as entered in the Address section of the Asset Manufacturer Details page.

 [ Class(). Home().ManufacturerZip]

 Displays the postal code as entered in the Address section of the Asset Manufacturer Details page.

 Market Rent

 [ Class(). FinancialProperty.MarketRent()]

 Displays the total amount of Market Rent for all units at the asset's financial property, as entered on each unit's View Market Rent pop-up.

 [Property().MarketRent()]

 Displays the total amount of Market Rent for all units at the property, as entered on each unit's View Market Rent pop-up.

 [Unit().MarketRent()]

 Displays the total amount of Market Rent for the unit, as entered on the View Market Rent pop-up.

 Marketing Description

 [ Class() .Marketing.MarketingDescription]

 Displays the text or value as entered on the Marketing Setup pop-up in the Marketing Description section.

 Marketing Name

 [ Class(). .Marketing.MarketingName()]

 Displays the Marketing Name as entered in the Marketing Setup pop-up's Advanced Settings .

 Maturity Date

 [Tenant().Loan(Tenant.TenantLoanCount()-1).MaturityDate]

 Displays the Maturity Date as listed on the loan receivable's details page on the scoreboard.

 Max Occupancy

 [Unit().MaxOccupancy]

 Displays the Max Occupancy of the unit as entered on the unit's Miscellaneous tile.

 Maximum

 [System.Maximum()]

 Compares two numeric values and returns the larger value. If neither of the values are numeric, it returns 0 .

 Maximum Fee

 [ Class(). FinancialProperty.MaximumFee]

 Displays the Per Post Max Fee for advanced fee setups, the Monthly Max Fee for standard fee setups, or the Per Unit Max Fee for fee setups with the Post Per Unit option enabled, as listed on the asset's financial property Fees Setup pop-up.

 [Property().MaximumFee]

 Displays the Per Post Max Fee for advanced fee setups, the Monthly Max Fee for standard fee setups, or the Per Unit Max Fee for fee setups with the Post Per Unit option enabled, as listed on the asset's financial property Fees Setup pop-up.

 Mid

 [System.Mid()]

 Returns a portion of a given value starting at the specified character and running for the specified number of characters.

 Middle Name

 [ Class(). Contact().MiddleName]

 Displays the Middle Name as entered on the contact's View Contacts pop-up.

 [Tenant().ContactByType().MiddleName]

 Displays the Middle Name as entered on the specified contact type's View Contacts pop-up.

 [ Class(). Contact().Screening.MiddleName]

 Displays the middle name in the associated screening for the specified contact and class.

 Minimum

 [System.Minimum()]

 Compares two numeric values and returns the smaller value. If neither of the values are numeric, it returns 0 .

 Minimum Balance

 [Property().MinimumBalance]

 Displays the Minimum Balance as entered in the Per Day section of the property Late Fees pop-up.

 Minimum Fee

 [ Class(). FinancialProperty.MinimumFee]

 Displays the Per Post Min Fee for advanced fee setups, the Monthly Min Fee for standard fee setups, or the Per Unit Max Fee for fee setups with the Post Per Unit option enabled, as listed on the asset's financial property Fees Setup pop-up.

 [Property().MinimumFee]

 Displays the Per Post Min Fee for advanced fee setups, the Monthly Min Fee for standard fee setups, or the Per Unit Max Fee for fee setups with the Post Per Unit option enabled, as listed on the property Fees Setup pop-up.

 Model Number

 [Asset().ModelNumber]

 Displays the Model number as entered on the asset's Details tile.

 [ Class(). Home().ModelNumber]

 Displays the Model number as entered on the home-type asset's Details tile.

 Month

 [System.Month()]

 Returns the month component of a date value. A non-date returns a value of 1 .

 Monthly Rent

 [ Class(). Contact().Screening.MonthlyRent]

 Displays the monthly rent in the associated screening for the specified contact and class.

 Move In Count

 [Unit().MoveInCount()]

 Displays the number of move ins as listed on the unit's Occupancy tile.

 Move In Date

 [Tenant().Lease().MoveInDate]

 Displays the Move In date of the selected lease on the tenant's View Leases pop-up. If the tenant is a guest with a short term rental reservation, the most recent Arrival date entered on the tenant's Reservations tile displays.

 [Prospect.MoveInDate]

 Displays the Move In date as entered in the prospect's Preferences tile. If the prospect is a guest with a short term rental reservation, the date entered in the Arrival field as entered in the STR prospect's Preferences tile displays.

 Move Out Count

 [Unit().MoveOutCount()]

 Displays the number of move outs as listed on the unit's Occupancy tile.

 Move Out Date

 [Tenant().Lease().MoveOutDate]

 Displays the Move Out date of the selected lease on the tenant's View Leases pop-up. If the tenant is a guest with a short term rental reservation, the most recent Departure date entered on the tenant's Reservations tile displays.

 [Prospect.MoveOutDate]

 Displays the Move Out date as entered in the prospect's Preferences tile. If the prospect is a guest with a short term rental reservation, the date entered in the Departure field as entered in the STR prospect's Preferences tile displays.

 Name

 [Asset().Name]

 Displays the Name as entered on the asset General tile.

 [ Class(). FinancialProperty.Name]

 Displays the Full Name as entered on the asset's financial property General tile.

 [ Class(). Home().Name]

 Displays the Name as entered on the home-type asset General tile.

 [Job().Name]

 Displays the Name as entered on the job General tile.

 [Owner().Name]

 Displays the Name as entered on the owner General tile.

 [OwnerProspect().Name]

 Displays the Name as entered on the owner prospect Account tile.

 [Tenant().Pet().Name]

 Displays the Name entered on the tenant or prospect's details page on the Pets tile.

 [Property().Name]

 Displays the Full Name as entered on the property General tile.

 More Information

 If preceded by the OwnerProspect class ( OwnerProspect.Property.Name ) in an owner prospect-type letter template or report, this function may also be used retrieve property data associated with a potential owner.

 [ Class(). PrimaryOwner.Name]

 Displays the Name as entered on the primary owner's General tile.

 [Violation().Stage().Name]

 Displays the Current Stage name as listed on the violation's Stage Information tile.

 [Unit().Name]

 Displays the Name as entered on the unit General tile.

 [Unit().UnitType.Name]

 Displays the Unit Type name as entered on the unit type General tile.

 [Vendor().Name]

 Displays the Name as entered on the vendor General tile.

 [ Class(). Contact().Name]

 Displays the Name as entered on the contact.

 Named Insured

 [Tenant().Lease().Insurance().NamedInsured]

 Displays the full name of the Named Insured associated with the policy on the tenant's primary lease.

 Next Hard Close Date

 [Property().NextHardCloseDate()]

 Displays the accounting close date for the property's current period.

 Next Hard Close Effective Date

 [Property().NextHardCloseEffectiveDate()]

 Displays the accounting close effective date for the property's current period.

 Next Maintenance Date

 [Asset().NextMaintenanceDate]

 Displays the date of the Next Maintenance due for the asset, as shown on the asset's Warranty/Maintenance tile.

 [ Class(). Home().NextMaintenanceDate]

 Displays the date of the Next Maintenance due for the home-type asset, as shown on the asset's Warranty/Maintenance tile.

 Next Month

 [System.NextMonth]

 Displays the date range of the upcoming month (for example, 01/01/ 2026 - 01/31/ 2026 ).

 Next Quarter

 [System.NextQuarter]

 Displays the date range of the upcoming quarter (for example, 07/01/ 2026 - 09/30/ 2026 if today's date is in Q2).

 Next Recurring Charge Change Date

 [Tenant().Lease().NextRecurringChargeChangeDate()]

 Displays the date of the next scheduled change to the recurring charge on the tenant's View Recurring Charges pop-up for the selected lease. Based on the value of the parameters, Rent Manager determines which iteration of the recurring charge to examine. The next recurring charge change date is one day after that recurring charge's To Date .

 [Tenant().NextRecurringChargeChangeDate()]

 Displays the date of the next scheduled change to the recurring charge on the tenant's View Recurring Charges . Based on the value of the parameters, Rent Manager determines which iteration of the recurring charge to examine. The next recurring charge change date is one day after that recurring charge's To Date .

 Next Year

 [System.NextYear]

 Displays the date range of the upcoming year (for example, 01/01/ 2026 - 12/31/ 2026 ).

 Nights

 [ Class(). Reservation(ReservationCount - 1).Nights]

 Displays the # of Nights based on the difference between on the Arrival date and Departure listed on the most recent reservation.

 Note

 [Asset().Note()]

 Displays information about the most recent note on the asset's History/Notes tile.

 [ Class(). Home().Note]

 Displays information about the most recent note on the home-type asset's History/Notes tile.

 [Job().Note()]

 Displays information about the most recent note on the job's History/Notes tile.

 [OwnerProspect().Note()]

 Displays information about the most recent note on the owner prospect's History/Notes tile.

 [Owner().Note()]

 Displays information about the most recent note on the owner's History/Notes tile.

 [Property().Note()]

 Displays information about the most recent note on the property's History/Notes tile.

 [ServiceManager().Note()]

 Displays information about the most recent note (including service tech hours) on the issue's History/Notes tile.

 [Tenant().Note()]

 Displays information about the most recent note on the tenant's History/Notes tile.

 [Tenant().Eviction().Note()]

 Displays information about the most recent history/note item on the eviction's Eviction Notes tile.

 [Unit().Note()]

 Displays information about the most recent note on the unit's History/Notes tile.

 Violation().Note()]

 Displays information about the most recent note on the violation's History/Notes tile.

 Vendor().Note()]

 Displays information about the most recent note on the vendor's History/Notes tile.

 Notice Date

 [Tenant().Lease().NoticeDate]

 Displays the move out Notice date of the selected lease on the tenant's View Leases pop-up.

 [Tenant().Eviction().NoticeDate]

 Displays the date on which an eviction notice was sent to the tenant.

 Number

 [ Class(). PhoneNumber().Number]

 Displays the phone number (excluding extension) for the specified class.

 [ServiceManager().Number()]

 Displays the Issue ID assigned to the service issue.

 Number As Text

 [System.NumberAsText()]

 Converts the specified numeric value into written text including decimals represented as xx/100 . Non-numeric values return a value of ZERO AND 00/100 .

 Number Suffix

 [System.NumberSuffix()]

 Returns the correct text suffix for a numeric value. Non-numeric values return nothing.

 Occupancy Count

 [ Class(). FinancialProperty.OccupancyCount()]

 Displays the total number of contacts on the tenant's View Contacts pop-up for each tenant at the asset's financial property.

 [Property().OccupancyCount()]

 Displays the total number of contacts on the tenant's View Contacts pop-up for each tenant at the property.

 Occupied Unit Count

 [ Class(). FinancialProperty.OccupiedUnitCount()]

 Displays the total number of occupied units at the asset's financial property.

 [Property().OccupiedUnitCount()]

 Displays the total number of occupied units at the property.

 Occupied Unit List

 [ Class(). FinancialProperty.OccupiedUnitList()]

 Displays a list of all occupied units (separated by commas) at the asset's financial property.

 [Property().OccupiedUnitList()]

 Displays a list of all occupied units (separated by commas) at the asset's financial property.

 Oldest Active Charge Age

 [Tenant().Lease().OldestActiveChargeAge]

 Displays the age, in days, of the oldest unpaid charge for the selected lease on the tenant's account.

 [Tenant().OldestActiveChargeAge]

 Displays the age, in days, of the oldest unpaid charge on the tenant's account.

 One Month Only

 [ Class(). FinancialProperty.OneMonthOnly]

 Displays True if One Month Only is checked in the Per Day Options section on the property Late Fees pop-up. Otherwise, displays False .

 [Property().OneMonthOnly]

 Displays True if One Month Only is checked in the Per Day Options section on the property Late Fees pop-up. Otherwise, displays False .

 Open Charges

 [ Class(). FinancialProperty.OpenCharges()]

 Displays the total value of all open charges at the asset's financial property.

 [Property().OpenCharges()]

 Displays the total value of all open charges at the property.

 Open Charges Amount

 [Owner().OpenChargesAmount()]

 Displays the total amount of open charges as listed on the owner's Management Company pop-up.

 [ Class(). PrimaryOwner.OpenChargesAmount()]

 Displays the total amount of open charges as listed on the primary owner's Management Company pop-up.

 [Tenant().Lease().OpenChargesAmount()]

 Displays the total amount of open charges as listed on the tenant's View Transactions pop-up for the selected lease.

 [Tenant().OpenChargesAmount()]

 Displays the total amount of open charges as listed on the tenant's View Transactions pop-up.

 Open Charges List

 [Owner().OpenChargesList()]

 Displays a list of each of open charge on the owner's Management Company pop-up.

 [ Class(). PrimaryOwner.OpenChargesList()]

 Displays a list of each of open charge on the primary owner's Management Company pop-up.

 [Tenant().Lease().OpenChargesList()]

 Displays a list of each of open charge on the tenant's View Transactions pop-up for the selected lease.

 [Tenant().OpenChargesList()]

 Displays a list of each of open charge on the tenant's View Transactions pop-up.

 Open Credits

 [ Class(). FinancialProperty.OpenCredits()]

 Displays the total value of all open credits at the asset's financial property.

 Property().OpenCredits()]

 Displays the total value of all open credits at the property.

 Opening Square Bracket

 [System.OpeningSquareBracket]

 Inserts a new opening square bracket [ in the results at the location of the statement. This is necessary when combining text with script since a normal opening square bracket is interpreted as starting a script statement.

 Origination Date

 [Tenant().Loan(Tenant.TenantLoanCount()-1).OriginationDate]

 Displays the Origination Date as listed on the Loans Receivable page.

 Other Charges Charge Amount

 [Tenant().Loan(Tenant.TenantLoanCount()-1).OtherChargesChargeAmount]

 Displays the Amount of a charge listed on the Other Charges pop-up. You can view this information on the loan receivable's details page by going to arrow_forward Other Charges .

 Other Charges Charge Type

 [Tenant().Loan(Tenant.TenantLoanCount()-1).OtherChargesChargeType]

 Displays the Charge Type name for a charge listed on the Other Charges pop-up. You can view this information on the loan receivable's details page by going to arrow_forward Other Charges .

 Other Charges Charge Type Description

 [Tenant().Loan(Tenant.TenantLoanCount()-1).OtherChargesChargeTypeDescription]

 Displays the description of the charge type for a charge listed on the Other Charges pop-up. You can view this information on the loan receivable's details page by going to arrow_forward Other Charges .

 Other Charges Comment

 [Tenant().Loan(Tenant.TenantLoanCount()-1).OtherChargesComment]

 Displays the Comment for a charge listed on the Other Charges pop-up. You can view this information on the loan receivable's details page by going to arrow_forward Other Charges .

 Other Charges Count

 [Tenant().Loan(Tenant.TenantLoanCount()-1).OtherChargesCount]

 Displays the number of charges listed on the Other Charges pop-up. You can view this information on the loan receivable's details page by going to arrow_forward Other Charges .

 Other Charges List

 [Tenant().Loan(Tenant.TenantLoanCount()-1).OtherChargesList()]

 Displays the list of charges on the Other Charges pop-up. You can view this information on the loan receivable's details page by going to arrow_forward Other Charges .

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Tenant.TenantLoanCount() - 1) . This allows you to return data for the most recent loan created for the tenant.

 Outcome

 [Tenant().Eviction().Outcome]

 Displays the court decision and resulting action against the tenant.

 Owner Contract ID

 [ Class(). Ownership().OwnerContractID]

 Displays the system-generated contract ID number of the ownership.

 Owner Count

 [Property().OwnerCount]

 Displays the number of owners listed on the property's Owners pop-up.

 Owner ID

 [Owner().OwnerID]

 Displays the system-generated ID for the owner.

 [ Class(). PrimaryOwner.OwnerID]

 Displays the system-generated ID for the primary owner.

 Owner Last Payment Amount

 [Owner().OwnerLastPaymentAmount()]

 Displays the dollar amount the owner was last paid as shown on the owner's Checks pop-up.

 [ Class(). PrimaryOwner.OwnerLastPaymentAmount()]

 Displays the dollar amount the owner was last paid as shown on the primary owner's Checks pop-up.

 Owner List

 [Property().OwnerList]

 Displays a list of the names for all owners listed on the property's Owners pop-up.

 Owner Name

 [Asset().OwnerName]

 Displays the name of the first owner listed on the asset's financial property Owners pop-up.

 [ Class(). Home().OwnerName]

 Displays the name of the first owner listed on the home-type asset's financial property Owners pop-up.

 Owner Prospect ID

 [OwnerProspect().OwnerProspectID]

 Displays the system-generated ID number for the owner prospect.

 Owner Prospect Property ID

 [OwnerProspect().Property().OwnerProspectPropertyID()]

 Displays the system-generated owner prospect property ID of the selected property

 More Information

 This function is available only in an owner prospect-type letter template or report where the Property class is a child class.

 Ownership Count

 [Owner().OwnershipCount]

 Displays the total number of properties owned by the owner.

 [Property().OwnershipCount]

 Displays the total number of properties owned by the owner.

 Ownership List

 [Owner().OwnershipList]

 Displays a list of short name(s) (separated by commas) for each of the owner's properties.

 [Property().OwnershipList]

 Displays a list of short name(s) (separated by commas) for each of the owner's properties.

 Page Break

 [System.PageBreak]

 Inserts a page break in the results. Results occurring after the page break appear on a new page. In many cases, PageBreak is used in conjunction with another scripting function.

 Partner Count

 [Owner().PartnerCount]

 Displays the number of unique partners the owner has across all their ownerships, as listed on each property's Owners pop-up.

 [ Class(). PrimaryOwner.PartnerCount]

 Displays the number of unique partners the primary owner has across all their ownerships, as listed on each property's Owners pop-up.

 Partner List

 [Owner().PartnerList]

 Displays a list of names (separated by commas) for each unique partners the owner has across all their ownerships, as listed on each property's Owners pop-up. The output is formatted as displayed below:

 Emily Welsh, Clarkson Inc.

 [ Class(). PrimaryOwner.PartnerList]

 Displays a list of names (separated by commas) for each unique partners the primary owner has across all their ownerships, as listed on each property's Owners pop-up. The output is formatted as displayed below:

 Emily Welsh, Clarkson Inc.

 Pay Off Amount

 [Tenant().Loan(Tenant.TenantLoanCount()-1).PayOffAmount()]

 Displays the total payoff amount based on payments received as of a specified date for the loan.

 More Information

 This function considers only payments received, and not the payments projected on the amortization schedule.

 Payment Amount

 [Tenant().Loan(Tenant.TenantLoanCount()-1).PaymentAmount()]

 Displays the total payment amount for the specified payment number of the loan. This value displays in the Payment Due column as listed on the loan receivable's details page on the Amortization Schedule tile.

 Payment Day

 [Tenant().Loan(Tenant.TenantLoanCount()-1).PaymentDay]

 Displays the Payment Day as listed on the loan receivable's details page on the General tile.

 Payment Method

 [Owner().PaymentMethod]

 Displays the Payment Method entered on the owner's Miscellaneous tile.

 [Owner().Partner().PaymentMethod]

 Displays the Payment Method entered on the owner's Miscellaneous tile for the partner who shares ownership in the properties.

 [ Class(). PrimaryOwner.PaymentMethod]

 Displays the Payment Method entered on the primary owner's Miscellaneous tile.

 [Vendor().PaymentMethod]

 Displays the Payment Method entered on the vendor Bill Settings tile.

 Payments

 [Owner().Payments()]

 Displays a list of payments for the selected owner. The function creates a separate line for each payment that includes the charge type, name, and date the payment was posted to the owner's account.

 [ Class(). PrimaryOwner.Payments()]

 Displays a list of payments for the selected primary owner. The function creates a separate line for each payment that includes the charge type, name, and date the payment was posted to the primary owner's account.

 [Tenant().Lease().Payments()]

 Displays a list of payments made by the tenant for the selected lease. The function creates a separate line for each payment that includes the date and amount of each transaction.

 [Tenant().Payments()]

 Displays a list of payments made by the tenant. The function creates a separate line for each payment that includes the date and amount of each transaction.

 [ Class(). Reservation(ReservationCount - 1).Payments]

 Displays a list of payments made for the most recent reservation. The function creates a separate line for each payment that includes the date and amount of each transaction.

 Payments Received

 [Tenant().Loan(Tenant.TenantLoanCount()-1).PaymentsReceived()]

 Displays the total loan payments received as of a specified date range for the loan. Payments received during the preexisting period of the loan prior to setup in Rent Manager are not included in this total.

 Per Date Late Fee Amount

 [Tenant().PerDateLateFeeAmount]

 Displays the Amount as entered in the Per Day Options section on the tenant Late Fees pop-up.

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

 [ Class(). FinancialProperty.PercentNetIncome]

 Displays the value entered in the % of Net Income field on the asset's financial property Fees Setup pop-up.

 [Property().PercentNetIncome]

 Displays the value entered in the % of Net Income field on the property Fees Setup pop-up.

 Percent Rent Only

 [Property().PercentRentOnly]

 Displays True if On Rent Only is checked for the Percent field in the Posted Late Fees section on the property Late Fees pop-up. Otherwise, displays False .

 Percent Total Income

 [ Class(). FinancialProperty.PercentTotalIncome]

 Displays the value entered in the % of Total Income field on the asset's financial property Fees Setup pop-up.

 [Property().PercentTotalIncome]

 Displays the value entered in the % of Total Income field on the property Fees Setup pop-up.

 Percentage Owned

 [ Class(). Ownership().PercentageOwned]

 Displays the percentage of ownership as entered on the owner's Ownership pop-up.

 Periods

 [Tenant().Lease().CAMExpenseAdjustment().Periods()]

 Examines the lease's first-listed adjustment on the CAM Expense Adjustments page. The data displayed varies depending on the adjustment's Type , as detailed below.

 For one-time adjustments, displays the output One-time .

 For amortized adjustments, displays the number entered in the Periods field, followed by Months or Years depending on the selection in the Amortization Details pop-up (e.g., 3 Years , 6 Months ).

 Pet Count

 [Tenant().PetCount]

 Displays the total number of pets on the tenant account in the Pets tile.

 Pet Type

 [Tenant().Pet().PetType]

 Displays the Pet Type entered on the tenant or prospect's details page on the Pets tile.

 Pets

 [ Class(). Reservation(ReservationCount - 1).Pets]

 Displays the # of Pets listed on the most recent reservation

 [ Class() .Marketing.Pets]

 Displays the selection(s), separated by commas, checked in the Pets drop-down list on the Marketing Setup pop-up in the Features section.

 Phone Number

 [ Class(). Contact().Screening.PhoneNumber]

 Displays the phone number in the associated screening for the specified contact and class.

 [ Class(). Contact().IncomeVerification.PhoneNumber]

 Displays the Phone Number as entered on the Run Income Verification pop-up.

 Phone Number Count

 [ Class() .Contact().PhoneNumberCount]

 Displays the total count of phone numbers as entered on contact's View Contacts pop-up.

 [Owner Prospect().PhoneNumberCount]

 Displays the total count of phone numbers as entered on the owner prospect's Phone Numbers tile.

 [Property().PhoneNumberCount]

 Displays the total count of phone numbers as entered on the property's Phone Numbers tile.

 Portal User Name

 [Owner().PortalUserName]

 Displays the Username for the owner's Owner Web Access account.

 [Owner().Partner().PortalUserName]

 Displays the Username for the owner partner's Owner Web Access account.

 [ Class(). PrimaryOwner.PortalUserName]

 Displays the Username for the primary owner's Owner Web Access account.

 [Tenant().PortalUserName]

 Displays the Username for the tenant's Tenant Web Access account.

 Postal Code

 [ Class(). Address().PostalCode]

 Displays the postal code of the default address for the specified class.

 [ Class(). Contact().Screening.PostalCode]

 Displays the postal code in the associated screening for the specified contact and class.

 [ Class(). Contact().IncomeVerification.PostalCode]

 Displays the postal code in the associated income verification for the specified contact.

 Posted Charges

 [System.PostedCharges()]

 Calculates the total of all recurring charges posted as of today. This function applies only to calculating recurring charge amounts.

 More Information

 This function is a part of the System class even though this function does not display with other System functions in letter templates or Report Writer .

 Previous Recurring Charge Change Date

 [Tenant().Lease().PreviousRecurringChargeChangeDate()]

 Displays the date of the previous scheduled change to the recurring charge on the tenant's View Recurring Charges pop-up for the selected lease. Based on the value of the parameters, Rent Manager determines which iteration of the recurring charge to examine. The next recurring charge change date is one day after that recurring charge's From Date .

 [Tenant().PreviousRecurringChargeChangeDate()]

 Displays the date of the previous scheduled change to the recurring charge on the tenant's View Recurring Charges pop-up for the selected lease. Based on the value of the parameters, Rent Manager determines which iteration of the recurring charge to examine. The previous recurring charge change date is the date in that recurring charge's From Date .

 Price

 [ Class() .Marketing.Price]

 Displays Price as entered on the Marketing Setup pop-up in the Listing Details section.

 Pricing

 [Unit().Pricing()]

 Displays Rainmaker LRO pricing information.

 Pricing List

 [Unit().PricingList()]

 Displays a list of the pricing information for Rainmaker LRO .

 Principal

 [Tenant().Loan(Tenant.TenantLoanCount()-1).Principal]

 Displays the Original Principal of the loan receivable.

 Principal Paid

 [Tenant().Loan(Tenant.TenantLoanCount()-1).PrincipalPaid()]

 Displays the total of principal paid as of a specified date range for the loan based on actual payments received. Principal paid during the preexisting period of the loan prior to setup in Rent Manager is not included in this total.

 Priority

 [ServiceManager().Priority()]

 Displays the Priority selected on the service issue's Details tile.

 Prohibited Equipment

 [Unit().ProhibitedRVs()]

 Displays a list of prohibited RV types and other prohibited equipment as defined on the unit's RV/Campground Information tile.

 Project

 [ServiceManager().Project()]

 Displays the Project selected on the service issue's Details tile.

 Property All Recurring Charges

 [ Class(). FinancialProperty.PropertyAllRecurringCharges()]

 Displays the total value of all recurring charges in effect for the current tenants of the asset's financial property.

 [Property().PropertyAllRecurring Charges()]

 Displays the total value of all recurring charges in effect for the current tenants of the property.

 Property Count

 [OwnerProspect().PropertyCount]

 Displays the number of properties on the owner prospect's Properties pop-up.

 Property ID

 [ Class(). FinancialProperty.PropertyID]

 Displays the system-generated ID number for the asset's financial property.

 [Property().PropertyID]

 Displays the system-generated property ID number.

 Property Image

 [ Class(). FinancialProperty.PropertyImage]

 Displays a selected image uploaded to the asset's financial property details page.

 [Property().PropertyImage]

 Displays a selected image uploaded to the property details page.

 Property List

 [OwnerProspect().PropertyList]

 Displays the list of properties (separated by commas) on the owner prospect's Properties pop-up.

 Property Recurring Charges

 [ Class(). FinancialProperty.PropertyRecurringCharges()]

 Displays the total value of property-level recurring charges, as specified on the asset's financial property View Recurring Charges pop-up.

 Property().PropertyRecurringCharges()]

 Displays the total value of property-level recurring charges, as specified on the property View Recurring Charges pop-up.

 Property Type

 [ Class(). FinancialProperty.PropertyType]

 Displays the Property Type as entered on the asset's financial property General tile.

 [ Class() .Marketing.PropertyType]

 Displays the Property Type as entered in Marketing Setup pop-up's Advanced Settings .

 [Property().PropertyType]

 Displays the Property Type as entered on the property's General tile.

 More Information

 If preceded by the OwnerProspect class ( OwnerProspect.Property.PropertyType ) in an owner prospect-type letter template or report, this function may also be used retrieve property data associated with a potential owner.

 Prospect Stage

 [Prospect.ProspectStage()]

 Displays the current Stage as entered on the prospect's Lead Information tile.

 Pull Through

 [Prospect.PullThrough]

 Displays Yes if Pull-Through is checked in the STR prospect's Preferences tile; otherwise, displays No .

 [Unit().PullThrough]

 Displays Yes if Pull-Through is checked on the unit's RV / Campground Information tile; otherwise, displays No .

 Purchase Date

 [Asset().PurchaseDate]

 Displays the Purchase Date as entered on the asset's Details tile.

 [ Class(). Home().PurchaseDate]

 Displays the Purchase Date as entered on the home-type asset's Details tile.

 Purchase Price

 [Asset().PurchasePrice]

 Displays the Purchase Price as entered on the asset's Details tile.

 [ Class(). Home().PurchasePrice]

 Displays the Purchase Price as entered on the home-type asset's Details tile.

 Quote Count

 [Prospect.QuoteCount()]

 Displays the number of rent quotes associated with the prospect.

 Quote List

 [Prospect.QuoteList()]

 Displays a list of rent quotes associated with the prospect.

 Recurring Charge List

 [Tenant().Lease().RecurringChargeList()]

 Displays a list of all active recurring charges as listed on the tenant's View Recurring Charges pop-up for the specified lease.

 [Tenant().RecurringChargeList()]

 Displays a list of all active recurring charges as listed on the tenant's View Recurring Charges pop-up.

 Recurring Charge Posting Day

 [ Class(). FinancialProperty.RecurringChargePostingDay]

 Displays the Posting Day as entered on the asset's financial property Other Information tile.

 [Property().RecurringChargePostingDay]

 Displays the Posting Day as entered on the property's Other Information tile.

 Recurring Charges

 [Tenant().Lease().RecurringCharges()]

 Displays the total sum of active recurring charges as listed on the tenant's View Recurring Charges pop-up for the specified lease.

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).RecurringCharges]

 Displays the total sum of active recurring charges specified on the tenant's most recent lease renewal offer.

 [Tenant().RecurringCharges()]

 Displays the total sum of active recurring charges as listed on the tenant's View Recurring Charges pop-up.

 Recurring Charges List

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount - 1).RecurringChargesList()]

 Displays recurring charges and the dates those new charges become active as specified on the tenant's most recent lease renewal offer.

 Reference

 [Tenant().Loan(Tenant.TenantLoanCount()-1).Reference]

 Displays the unique Reference value as entered on the loan receivable's details page on the General tile. This value defaults to the Loan ID but may be edited.

 [Tenant().Lease().CAMExpenseAdjustment().Reference()]

 Displays the reference number in the Ref# column of the lease's first-listed adjustment on the CAM Expense Adjustments page.

 Renewal ID

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).RenewalID]

 Displays the system-generated renewal ID of the tenant's most recent lease renewal.

 Renewal Offer ID

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount - 1).RenewalOfferID]

 Displays the system-generated ID number assigned to the most recent lease renewal offer.

 Renewal Pricing

 [Tenant().RenewalPricing()]

 Displays the price of the renewal associated with Rainmaker LRO .

 Renewal Pricing List

 [Tenant().RenewalPricingList()]

 Displays a list of prices for renewals associated with Rainmaker LRO .

 Rent Amount

 [Asset().RentAmount]

 Displays the Rent Amount as entered on the asset's General tile.

 [ Class(). Home().RentAmount]

 Displays the Rent Amount as entered on the home-type asset's General tile.

 Rent Charge Type

 [ Class(). FinancialProperty.RentChargeType]

 Displays the name of every Rent Charge Type selected on the asset's financial property Other Information tile.

 [Property().RentChargeType]

 Displays the name of every Rent Charge Type selected on the property Other Information tile.

 Rent Due Date

 [Prospect.RentDueDate]

 Displays the expected rent due date for the prospect as entered in the Reservation/Expected Lease Information tile.

 In that section, when the Rent Period is Monthly , this function returns the Due Day value of 1 - 31 . When the Rent Period is Weekly , this function returns 0 - 6 for the selected Due Day , with 0 for Sunday, 1 for Monday, 2 for Tuesday, etc. When the Rent Period is Daily , a value of 0 is returned.

 Rent Due Day

 [Tenant().RentDueDay]

 Displays the Due Day value entered on the tenant's General tile.

 If the Rent Period is Weekly or Daily , a value of 0 displays.

 Rent Maximum

 [Prospect.RentMaximum]

 Displays the Rent Max as entered on the prospect's Preferences tile.

 Rent Minimum

 [Prospect.RentMinimum]

 Displays the Rent Min as entered on the prospect's Preferences tile.

 Rent Period

 [Prospect.RentPeriod]

 Displays whether Daily , Weekly , or Monthly is selected for the Rent Period field on the prospect's Reservation/Expected Lease Information tile.

 [Tenant().RentPeriod]

 Displays whether Daily , Weekly , or Monthly is selected for the Rent Period field on the tenant's General tile.

 Rent Quote Property

 [Prospect.RentQuotes().RentQuoteProperty]

 Displays the property that the prospect received the rent quote for.

 Rent Quote Unit

 [Prospect.RentQuotes().RentQuoteUnit]

 Displays the unit that the prospect received the rent quote for.

 Rent Recurring Charges

 [Tenant().Lease().RentRecurringCharges()]

 Displays the total amount of active rent recurring charges as listed on the tenant's View Recurring Charges pop-up for the specified lease. Charge types that are designated as rent charges are specified for each property in the Rent Charge Type field on the property Other Information tile.

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).RentRecurringCharges]

 Displays the total amount of rent recurring charges specified on the tenant's most recent lease renewal offer. Charge types that are designated as rent charges are specified for each property in the Rent Charge Type field on the property Other Information tile.

 [Tenant().RentRecurringCharges()]

 Displays the total amount of active rent recurring charges as listed on the tenant's View Recurring Charges pop-up. Charge types that are designated as rent charges are specified for each property in the Rent Charge Type field on the property Other Information tile.

 Rental Classification

 [ Class(). .Marketing.RentalClassification]

 Displays the Rental Classification as entered in the Marketing Setup pop-up's Advanced Settings .

 Rental Type

 [ Class() .Marketing.RentalType]

 Displays the Rental Type as entered in the Marketing Setup pop-up's Advanced Settings .

 Rented Square Footage

 [ Class(). FinancialProperty.RentedSquareFootage()]

 Displays the total Square Footage as entered on the unit Miscellaneous tile for of all rented units at the asset's financial property.

 [Property().RentedSquareFootage()]

 Displays the total Square Footage as entered on the unit Miscellaneous tile for of all rented units at the property.

 Reservation Count

 [ Class(). ReservationCount()]

 Displays the number of recent reservations on the guest's account.

 Reservation Property

 [ Class(). Reservation(ReservationCount - 1).ReservationProperty]

 Displays the name of the Property listed on the most recent reservation.

 Reservation Unit Name

 [ Class(). Reservation(ReservationCount - 1).ReservationUnitName]

 Displays the name of the Unit listed on the most recent reservation.

 Reserve

 [ Class(). Ownership().Reserve]

 Displays the Reserve amount required for the ownership as listed on the owner's Ownership pop-up.

 Reserved

 [Prospect.RentQuotes().Reserved]

 Displays True if a unit is reserved in association with this rent quote. Otherwise, displays False .

 Reserved Move In Date

 [Prospect.ReservedMoveInDate]

 Displays the Reserved Move In date as entered in the prospect's Reservation/Expected Lease Information tile. If the prospect is a guest with a short term rental reservation, the Arrival date as entered in the prospect's Preferences tile displays.

 Reserved Move Out Date

 [Prospect.ReservedMoveOutDate]

 Displays the Reserved Move Out date as entered in the prospect's Reservation/Expected Lease Information tile. If the prospect is a guest with a short term rental reservation, the Departure date as entered in the prospect's Preferences tile displays.

 Resolution

 [ServiceManager().Resolution()]

 Displays the Resolution as entered on the service issue's Description tile.

 Resolve Action

 [Violation().ResolveAction]

 Displays the text that specifies what must be done to remedy the violation as entered in the Action To Resolve field on the Violation Details tile.

 Right

 [System.Right()]

 Returns a specified number of characters from the right side of a string.

 Right Trim

 [System.RightTrim()]

 Returns a text string with the white space removed from the right of the first non-whitespace character.

 Round

 [System.Round()]

 Processes a numeric value and rounds it to a specified level of precision. Non-numeric values return a value of 0 .

 Sale Amount

 [Tenant().Loan(Tenant.TenantLoanCount()-1).SaleAmount]

 Displays the Sale Amount as listed on the Loans Receivable page.

 Sale Price

 [Asset().SalePrice]

 Displays the Sale Price as entered on the asset's Details tile.

 [ Class(). Home().SalePrice]

 Displays the Sale Price as entered on the home-type asset's Details tile.

 Sales

 [Tenant().Lease().Sales()]

 Displays the total sales Amount as entered on the Retail Sales pop-up of the commercial lease for the month immediately preceding the specified or calculated date. If no retail sales exist for that month, Rent Manager continues looking at prior month(s) until it finds a month with sales data. If none is found, it displays nothing.

 Related Preferences

 In order to track tenant retail sales, the Track tenant retail sales option must be enabled in Commercial (System Preferences) .

 Sales Month

 [Tenant().Lease().SalesMonth()]

 Displays the most recent month with data entered on the Retail Sales pop-up of the commercial lease immediately preceding the specified or calculated date.

 Related Preferences

 In order to track tenant retail sales, the Track tenant retail sales option must be enabled in Commercial (System Preferences) .

 Sales Rep

 [OwnerProspect().SalesRep]

 Displays the name of the Sales Representative as selected on the owner prospect's Lead Information tile.

 Sales Rep Email

 [OwnerProspect().SalesRepEmail]

 Displays the email address of the sales representative selected on the prospect's Lead Information tile. The sales representative's email address is entered on the user's Contact Information tile.

 Sales Rep Fax Number

 [OwnerProspect().SalesRepFaxNumber]

 Displays the fax number of the sales representative selected on the prospect's Lead Information tile. The sales representative's fax number is entered on the user's Contact Information tile.

 Sales Rep Phone Number

 [OwnerProspect().SalesRepPhoneNumber]

 Displays the phone number of the sales representative selected on the prospect's Lead Information tile. The sales representative's phone number is entered on the user's Contact Information tile.

 Sales Year

 [Tenant().Lease().SalesYear()]

 Displays the year with data entered on the Retail Sales pop-up of the commercial lease immediately preceding the specified or calculated date.

 Related Preferences

 In order to track tenant retail sales, the Track tenant retail sales option must be enabled in Commercial (System Preferences) .

 Scheduled Date

 [ServiceManager().ScheduledDate()]

 Displays the date entered in the Scheduled field of the issue. If the issue was added via the Maintenance Schedule page in Rent Manager Express , the scheduled date and time block displays.

 Screening Count

 [Tenant().ScreeningCount]

 Displays the number of screening reports on the tenant’s History/Notes pop-up.

 [ Class(). Contact().ScreeningCount]

 Displays the number of screening reports on the contact’s History/Notes pop-up.

 Security Deposit Charged

 [ Class(). FinancialProperty.SecurityDepositCharged()]

 Displays the total amount of all security deposits posted for all tenants associated with the asset's financial property.

 [Owner().SecurityDepositCharged()]

 Displays the total amount of all security deposits posted for all tenants across all the owner's properties.

 [Owner().Partner().SecurityDepositCharged()]

 Displays the total amount of all security deposits posted for all tenants across all the properties of the partner who shares ownership with the selected owner.

 [Property().SecurityDepositCharged()]

 Displays the total amount of all security deposits posted for all tenants associated with the property.

 [ Class(). PrimaryOwner.SecurityDepositCharged()]

 Displays the total amount of all security deposits posted for all tenants across all the primary owner's properties.

 [Unit().SecurityDepositCharged()]

 Displays the total amount of all security deposits posted for all tenants associated with the unit.

 Security Deposit Held

 [ Class(). FinancialProperty.SecurityDepositHeld()]

 Displays the total amount of all security deposits currently held for all tenants associated with the asset's financial property.

 [Tenant().Lease().SecurityDepositHeld()]

 Displays the total amount of all security deposits currently held for the tenant's selected lease.

 [Owner().SecurityDepositHeld()]

 Displays the total amount of all security deposits currently held for all tenants across all the owner's properties.

 [Owner().Partner().SecurityDepositHeld()]

 Displays the total amount of all security deposits currently held for all tenants across all the properties of the partner who shares ownership with the selected owner.

 [Property().SecurityDepositHeld()]

 Displays the total amount of all security deposits currently held for all tenants associated with the property.

 [ Class(). PrimaryOwner.SecurityDepositHeld()]

 Displays the total amount of all security deposits currently held for all tenants across all the primary owner's properties.

 [Tenant().SecurityDepositHeld()]

 Displays the total amount of all security deposits currently held for the tenant.

 [Unit().SecurityDepositHeld()]

 Displays the total amount of all security deposits currently held for all tenants associated with the unit.

 Security Deposit Received

 [ Class(). FinancialProperty.SecurityDepositReceived()]

 Displays the total amount of security deposits paid by all tenants associated with the asset's financial property.

 [Owner().SecurityDepositReceived()]

 Displays the total amount of all security deposits paid by all tenants across all the owner's properties.

 [Owner().Partner().SecurityDepositReceived()]

 Displays the total amount of all security deposits paid by all tenants across all the properties of the partner who shares ownership with the selected owner.

 [Property().SecurityDepositReceived()]

 Displays the total amount of security deposits paid by all tenants associated with the property.

 [ Class(). PrimaryOwner.SecurityDepositReceived()]

 Displays the total amount of all security deposits paid by all tenants across all the primary owner's properties.

 [Unit().SecurityDepositReceived()]

 Displays the total amount of security deposits paid by all tenants associated with the unit.

 Security Deposit Refunded

 [ Class(). FinancialProperty.SecurityDepositRefunded()]

 Displays the total amount of security deposits refunded to tenants associated with the asset's financial property.

 [Owner().SecurityDepositRefunded()]

 Displays the total amount of all security deposits refunded to all tenants across all the owner's properties.

 [Owner().Partner().SecurityDepositRefunded()]

 Displays the total amount of all security deposits refunded to all tenants across all the properties of the partner who shares ownership with the selected owner.

 [Property().SecurityDepositRefunded()]

 Displays the total amount of security deposits refunded to tenants associated with the property.

 [ Class(). PrimaryOwner.SecurityDepositRefunded()]

 Displays the total amount of all security deposits refunded to all tenants across all the primary owner's properties.

 [Unit().SecurityDepositRefunded()]

 Displays the total amount of security deposits refunded to tenants associated with the unit.

 Serial Number

 [Asset().SerialNumber]

 Displays the Serial Number as entered on the asset's Details tile.

 [ Class(). Home().SerialNumber]

 Displays the Serial Number as entered on the home-type asset's Details tile.

 Service Agreement

 [Asset().ServiceAgreement]

 Displays Yes if Service Agreement is checked on the asset's Warranty/Maintenance tile. Otherwise, No displays.

 [ Class(). Home().ServiceAgreement]

 Displays Yes if Service Agreement is checked on the home-type asset's Warranty/Maintenance tile. Otherwise, No displays.

 Service Agreement Expiration

 [Asset().ServiceAgreementExpiration]

 Displays the Service Expiration date as entered on the asset's Warranty/Maintenance tile.

 [ Class(). Home().ServiceAgreementExpiration]

 Displays the Service Expiration date as entered on the home-type asset's Warranty/Maintenance tile.

 Service End Date

 [Asset().ServiceEndDate]

 Displays the Service Life End date as entered on the asset's View Asset Locations pop-up.

 [ Class(). Home().ServiceEndDate]

 Displays the Service Life End date as entered on the home-type asset's View Asset Locations pop-up.

 Service Start Date

 [Asset().ServiceStartDate]

 Displays the Service Life Start date as entered on the asset's View Asset Locations pop-up.

 [ Class(). Home().ServiceStartDate]

 Displays the Service Life Start as entered on the home-type asset's View Asset Locations pop-up.

 Set Adjustment Filter

 [Tenant().Lease().CAMExpenseAdjustment().SetAdjustmentFilter()]

 Removes any filters applied to CAM expense adjustments associated with the lease. Parameters can be used to establish filters for CAM expense adjustments in scripting.

 Set Contact Type Filter

 [Tenant().SetContactTypeFilter()]

 This function is designed to filter the total collection of contacts associated with the tenant based on the assigned parameter values.

 [Vendor().SetContactTypeFilter()]

 This function is designed to filter the total collection of contacts associated with the vendor based on the assigned parameter values.

 Set History Filter

 [Asset().SetHistoryFilter()]

 This function is designed to filter the total collection of asset history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 [ Class(). Home().SetHistoryFilter()]

 This function is designed to filter the total collection of home-type asset history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 [Job().SetHistoryFilter()]

 This function is designed to filter the total collection of job history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 [OwnerProspect().SetHistoryFilter()]

 This function is designed to filter the total collection of owner prospect history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 [Owner().SetHistoryFilter()]

 This function is designed to filter the total collection of owner history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 [Property().SetHistoryFilter()]

 This function is designed to filter the total collection of property history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 [ServiceManager().SetHistoryFilter()]

 This function is designed to filter the total collection of service issue history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 [Tenant().SetHistoryFilter()]

 This function is designed to filter the total collection of tenant history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 [Tenant().Eviction().SetHistoryFilter()]

 This function is designed to filter the total collection of eviction history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 [Unit().SetHistoryFilter()]

 This function is designed to filter the total collection of unit history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 [Vendor().SetHistoryFilter()]

 This function is designed to filter the total collection of vendor history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 [Violation().SetHistoryFilter()]

 This function is designed to filter the total collection of violation history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 Set Script Invalid

 [System.SetScriptInvalid()]

 Controls the output of a letter template in which it displays. If the value parameter is set to "True", the letter is not be output. This applies when the letter is output as an individual document or as part of a Document Packet or letter batch.

 Short Name

 [ Class(). FinancialProperty.ShortName]

 Displays the Short Name as entered on the asset's financial property General tile.

 [Job().ShortName]

 Displays Short Name as entered on the job's General tile.

 [Property().ShortName]

 Displays the Short Name as entered on the property General tile.

 Short Term Reservation ID

 [ Class(). Reservation(ReservationCount - 1).ShortTermReservationID]

 Displays the internally generated reservation ID of the most recent reservation.

 Show On Bill

 [ Class(). Contact().ShowOnBill]

 Displays 1 if Show On Statement/Labels is checked on the contact's View Contacts pop-up. Otherwise, 0 displays.

 [Tenant().ContactByType().ShowOnBill]

 Displays 1 if Show On Statement/Labels is checked on the specified contact type's View Contacts pop-up. Otherwise, 0 displays.

 Sign Date

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).SignDate]

 Displays the Lease Sign date of the tenant's most recent lease renewal.

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).SignDate]

 Displays the Lease Sign date of the tenant's most recent lease renewal offer.

 Signature On File

 [ServiceManager().SignatureOnFile()]

 Displays whether a service issue linked to a property, tenant, prospect, or unit has the Signature on file field checked. The function displays True if the field is checked; otherwise displays False .

 Size

 [Tenant().Pet().Size]

 Displays the Size entered on the tenant or prospect's details page on the Pets tile.

 Slide Outs

 [Unit().SlideOuts()]

 Displays the value of the RV slide outs allowed at the unit as listed on the unit's RV/Campground Information tile.

 Source

 [ Class(). Reservation(ReservationCount - 1).Source]

 Displays the source from which the most recent reservation was made. Reservations can be made from Rent Manager or the STR Online Booking Portal.

 Square Footage

 [Asset().SquareFootage]

 Displays the Square Footage as entered on the asset's Details tile, if the asset is a home-type asset.

 [ Class(). FinancialProperty.SquareFootage]

 Displays the Total Sq Ft as entered on the asset's financial property Other Information tile.

 [ Class(). Home().SquareFootage]

 Displays the Square Footage as entered on the home-type asset's Details tile.

 [Property().SquareFootage]

 Displays the Total Sq Ft as entered on the property Other Information tile.

 [Unit().SquareFootage]

 Displays the Square Footage as entered on the unit's Miscellaneous tile.

 Stage Count

 [Prospect.StageCount()]

 Displays the current stage number of the prospect as they progress through the leasing process.

 [Violation().StageCount]

 Displays the number of stages defined for the violation.

 Stage List

 [Prospect.StageList()]

 Displays the description, date, and time of the current stage as entered on the prospect's Lead Information tile.

 Stage Number

 [Violation().Stage().StageNumber]

 Displays the current stage's sequential number as listed in the # column on the violation's View Stage pop-up.

 Start Date

 [Tenant().Lease().Insurance().StartDate]

 Displays the Start Date associated with the policy on the tenant's primary lease in the m/d/yyyy format.

 [Job().StartDate]

 Displays the Start Date as entered on the job's General tile. If no start date was specified, the function displays nothing.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).StartDate]

 Displays the Lease Start date of the tenant's most recent lease renewal.

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).StartDate]

 Displays the Lease Start date of the tenant's most recent lease renewal offer.

 [Tenant().Lease().CAMExpenseAdjustment().StartDate()]

 Examines the lease's first-listed adjustment on the CAM Expense Adjustments page.

 For one-time adjustments, displays the date in the Adj. Date field on the One-time Adjustment Details pop-up.

 For amortized adjustments, displays the date in the Start Date field on the Amortization Details pop-up.

 [Tenant().Eviction().StartDate]

 Displays the date on which the eviction process began for this tenant.

 Starting Payment Number

 [Tenant().Loan(Tenant.TenantLoanCount()-1).StartingPaymentNumber]

 Displays the Starting Payment # for the loan receivable.

 If the loan is preexisting, this function returns the number of the first payment collected using Rent Manager . If the loan is not preexisting, this function displays 0 .

 State

 [ Class(). Address().State]

 Displays the state of the default address for the specified class.

 [ Class(). Contact().Screening.State]

 Displays the two-letter state abbreviation in the associated screening for the specified contact and class.

 [ Class(). Contact().IncomeVerification.State]

 Displays the two-letter state abbreviation in the associated income verification request for the specified contact.

 Status

 [ServiceManager().Status()]

 Displays the Status selected on the service issue's Details tile.

 [ Class() .Marketing.Status]

 Displays the selection in the Status field in Rent Manager .

 [OwnerProspect().Status]

 Displays the current Status as listed on the owner prospect's scoreboard.

 [Prospect.Status]

 Displays the current status as listed on the prospect Status summary card. This function outputs Tenant , Prospect , Lost , or Lost-Rejected .

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).Status]

 Displays the Renewal Status of the tenant's most recent lease renewal offer.

 [Tenant().Status]

 Displays the current Status as listed on the tenant's scoreboard.

 [ Class(). Contact().IncomeVerification.Status]

 Displays the current Status of the income verification request for the specified contact.

 Status History

 [Asset().StatusHistory()]

 Displays the current and past statuses as listed on the asset's View Asset Status pop-up.

 [ Class(). Home().StatusHistory()]

 Displays the current and past statuses as listed on the home-type asset's View Asset Status pop-up.

 Status History Count

 [Asset().StatusHistoryCount()]

 Displays the number of current and past statuses as listed on the asset's View Asset Status pop-up.

 [ Class(). Home().StatusHistoryCount()]

 Displays the number of current and past statuses as listed on the home-type asset's View Asset Status pop-up.

 STR Marketing Description

 [Unit().STRMarketingDescription()]

 Displays the unit's Marketing Description as entered on the unit's details page in the Miscellaneous section.

 Street

 [ Class(). Contact().Screening.Street]

 Displays the street in the associated screening for the specified contact and class.

 [ Class(). Contact().IncomeVerification.Street]

 Displays the street in the associated income verification for the specified contact.

 Street 1

 [ Class(). Address().Street1]

 Displays the first line of the street of the default address for the specified class.

 Street 2

 [ Class(). Address().Street2]

 Displays the second line of the street of the default address for the specified class.

 Submitted Date

 [ Class(). Contact().Screening.SubmittedDate]

 Displays the submitted date in the associated screening for the specified contact and class.

 [ Class(). Contact().IncomeVerification.SubmittedDate]

 Displays the submitted date in the associated income verification for the specified contact.

 Tab

 [System.Tab]

 Inserts a tab in the results at the location of the statement.

 Tax ID

 [ Class(). FinancialProperty.TaxID]

 Displays the Property Tax ID as entered on the asset's financial property Other Information tile.

 [Owner().TaxID]

 Displays the Tax ID as entered on the owner's General tile.

 [ Class(). PrimaryOwner.TaxID]

 Displays the Tax ID as entered on the primary owner's General tile.

 [Property().TaxID]

 Displays the Property Tax ID as entered on the property's Other Information tile.

 [Vendor().TaxID]

 Displays the 1099 tax ID as entered on the vendor Tax Information tile.

 Tenant Count

 [ Class(). FinancialProperty.TenantCount()]

 Displays the total number of tenants associated with the asset's financial property.

 [Property().TenantCount()]

 Displays the number of tenants associated with the property.

 [Unit().TenantCount()]

 Displays the number of tenants associated with the unit.

 Tenant List

 [ Class(). FinancialProperty.TenantList]

 Displays the full names of all current tenants, past tenants, prospects, and lost prospects associated with the asset's financial property.

 [Property().TenantList]

 Displays the full names of all current tenants, past tenants, prospects, and lost prospects associated with the property.

 [Unit().TenantList]

 Displays the full names of all current and past tenants associated with the unit.

 Tenant Loan Count

 [Tenant().TenantLoanCount]

 Displays the total number of owner-financed loans associated with the tenant's account.

 Tenant Note

 [Tenant().Lease().CAMExpenseAdjustment().TenantNote()]

 Examines the lease's first-listed adjustment on the CAM Expense Adjustments page. Displays the text in the Tenant Note section in the details of the Note field on the Amortization Details pop-up.

 Term

 [Tenant().Loan(Tenant.TenantLoanCount()-1).Term]

 Displays the number of months in the Term as listed on the loan receivable's scoreboard.

 Time

 [System.Time()]

 Displays the current system time in the specified format.

 Title

 [ServiceManager().Title()]

 Displays the Title as entered on the Issue details page.

 Title Status

 [Asset().TitleStatus]

 Displays the current and past title statuses for the asset's title.

 [ Class(). Home().TitleStatus]

 Displays the current and past title statuses for the home's title.

 Title Status History

 [Asset().TitleStatusHistory()]

 Displays the number of current and past title statuses as entered on the asset's Details tile.

 [ Class(). Home().TitleStatusHistory()]

 Displays the number of current and past title statuses as entered on the home-type asset's Details tile.

 Total Accounts

 [Unit().TotalAccounts()]

 Displays the number of current occupants for the unit as entered on the unit's Occupancy tile.

 Total Allocations

 [ Class(). FinancialProperty.TotalAllocations()]

 Displays the total value of paid allocations for all tenants associated with the asset's financial property.

 [Tenant().Lease().TotalAllocations()]

 Displays the total value of paid allocations associated with a tenant's specified lease.

 [Property().TotalAllocations()]

 Displays the total value of paid allocations for all tenants associated with property.

 Tenant().TotalAllocations()]

 Displays the total value of paid allocations associated with the tenant.

 [Unit().TotalAllocations()]

 Displays the total value of paid allocations for all tenants associated with the unit.

 Total Amount

 [Tenant().Lease().CAMExpenseAdjustment().TotalAmount()]

 Examines the lease's first-listed adjustment on the CAM Expense Adjustments page.

 For one-time adjustments, displays the dollar amount in the Adj. Amount field on the One-time Adjustment Details pop-up.

 For amortized adjustments, displays the dollar amount in the Total Amount field on the Amortization Details pop-up.

 Total Bills

 [Vendor().TotalBills()]

 Displays the total amount of bills posted to the Vendor Transactions pop-up.

 Total Calls

 [Prospect.TotalCalls]

 Displays the total number of calls as listed on the prospect's History/Notes pop-up.

 Total Charged

 [ Class(). Reservation(ReservationCount - 1).TotalCharged]

 Displays the total amount of charges, including taxes and fees, due for the most recent reservation.

 [Owner().TotalCharged()]

 Displays the total amount of charges posted to the owner's Management Company pop-up.

 [ Class(). PrimaryOwner.TotalCharged()]

 Displays the total amount of charges posted to the primary owner's Management Company pop-up.

 [Tenant().Lease().TotalCharged()]

 Displays the total amount of charges posted to the lease for the selected tenant.

 [Tenant().TotalCharged()]

 Displays the total amount of charges posted to the tenant's View Transactions pop-up.

 Total Credits

 [ Class(). FinancialProperty.TotalCredits()]

 Displays the total amount of credits posted for all tenants associated with the asset's financial property.

 [Property().TotalCredits()]

 Displays the total amount of credits posted for all tenants associated with the property.

 [Owner().TotalCredits()]

 Displays the total amount of credits posted to the owner's Management Company pop-up.

 [ Class(). PrimaryOwner.TotalCredits()]

 Displays the total amount of credits posted to the primary owner's Management Company pop-up.

 [Tenant().Lease().TotalCredits()]

 Displays the total amount of credits posted to the lease for the selected tenant.

 [Tenant().TotalCredits()]

 Displays the total amount of credits posted to the tenant's View Transactions pop-up.

 [Vendor().TotalCredits()]

 Displays the total amount of credits as listed on the Vendor Credits pop-up.

 Total Emails

 [Prospect.TotalEmails]

 Displays the total number of emails as listed on the prospect's History/Notes pop-up

 Total History Items

 [Prospect.TotalHistoryItems]

 Displays the total number of notes as listed on the prospect's History/Notes pop-up.

 Total Hours

 [ServiceManager().TotalHours()]

 Displays the total hours spent on the service issue as displayed on the Details tile. This number is calculated by adding the amount of time any rmAppSuite Pro user has checked in, any time entered manually, and any time that added in the issue's History/Notes pop-up.

 Total Occupants

 [Unit().TotalOccupants()]

 Displays the total number of contacts associated with the unit, as listed on the tenant's View Contacts pop-up.

 Total Other Charges

 [Tenant().Loan(Tenant.TenantLoanCount()-1).TotalOtherCharges()]

 Displays the total amount of all charges listed in the loan's Loan Other Charges pop-up.

 Total Paid

 [Vendor().TotalPaid()]

 Displays the total amount of payments made with a Checks payment method as listed on the Vendor Transactions pop-up.

 Total Payment

 [Vendor().TotalPayment]

 Displays the total amount of payments received on specified charge types within a date range for the vendor.

 Total Payments

 [Owner().Payments()]

 Displays the total amount of payments posted to the owner's Management Company pop-up.

 [ Class(). PrimaryOwner.Payments()]

 Displays the total amount of payments posted to the primary owner's Management Company pop-up.

 [Tenant().Lease().TotalPayments()]

 Displays the total amount of payments received on selected charge types within a specified date range for the selected tenant lease.

 [Tenant().TotalPayments()]

 Displays the total amount of the tenant's payments received on selected charge types within a specified date range.

 Total Prepay Allocations

 [ Class(). FinancialProperty.TotalPrepayAllocations()]

 Displays the total value of prepayments and/or credits that are unapplied to charges at the asset's financial property.

 [Tenant().Lease().TotalPrepayAllocations()]

 Displays the total value of prepayments and/or credits that are unapplied to charges at the specified tenant lease.

 [Property().TotalPrepayAllocations()]

 Displays the total value of prepayments and/or credits that are unapplied to charges at the property.

 [Tenant().TotalPrepayAllocations()]

 Displays the total value of prepayments and/or credits that are unapplied to charges at the specified tenant.

 [Unit().TotalPrepayAllocations()]

 Displays the total value of prepayments and/or credits that are unapplied to charges associated with the specified unit.

 Total Reserve

 [Owner().TotalReserve()]

 Displays the total Reserve amount as entered on the owner's Ownerships pop-up.

 [ Class(). PrimaryOwner.TotalReserve()]

 Displays the total Reserve amount as entered on the primary owner's Ownerships pop-up.

 Total Unit Default Security Deposit

 [Unit().TotalUnitDefaultSecurityDeposit()]

 Displays the total value of all unit-level security deposits as listed in the unit's Default Security Deposits tile.

 Total Visit

 [Prospect.TotalVisit]

 Displays the total number of visits as listed on the prospect's History/Notes pop-up.

 Track Financials

 [Asset().TrackFinancials]

 Displays True if Track Financials is checked on the asset's General tile; otherwise, False displays.

 [ Class(). Home().TrackFinancials]

 Displays True if Track Financials is checked on the home-type asset's General tile; otherwise, False displays.

 Transactions

 [Owner().Transactions()]

 Displays each transaction associated with the owner within a specified date range. Each transaction can be displayed on a separate line and shown as a string of one or more specified transaction data fields. If no fields are specified in the Format parameter, the results default to the transaction date, description, and amount separated by tabs.

 A new line with the default formatted text string (date, description, and amount separated by tabs) for each transaction linked to the current owner displays, as shown below.

 [ Class(). PrimaryOwner.Transactions()]

 Displays each transaction associated with the owner within a specified date range. Each transaction can be displayed on a separate line and shown as a string of one or more specified transaction data fields. If no fields are specified in the Format parameter, the results default to the transaction date, description, and amount separated by tabs.

 A new line with the default formatted text string (date, description, and amount separated by tabs) for each transaction linked to the primary owner displays, as shown below.

 [Tenant().Lease().Transactions()]

 Displays each transaction linked to the selected lease of the selected tenant within a specified date range. Each transaction can be displayed on a separate line and shown as a string of one or more specified transaction data fields. If no fields are specified in the Format parameter, the results display by default the transaction date, description, and amount separated by tabs.

 A new line with the default formatted text string (date, description, and amount separated by tabs) for each transaction linked to the first lease listed for the current tenant displays, as shown below.

 [Tenant().Transactions()]

 Displays each transaction associated with the tenant within a specified date range. Each transaction can be displayed on a separate line and shown as a string of one or more specified transaction data fields. If no fields are specified in the Format parameter, the results default to the transaction date, description, and amount separated by tabs.

 A new line with the default formatted text string (date, description, and amount separated by tabs) for each transaction linked to the current tenant displays, as shown below.

 [ Class(). Reservation(ReservationCount - 1).Transactions]

 Displays a list of charges, credits, and payments for the most recent reservation. A new line with the default formatted text string (date, description, and amount separated by tabs) for each transaction linked to the current owner displays, as shown below.

 Trim

 [System.Trim()]

 Returns a text string with the white space removed from the left of the first non-whitespace character and the white space removed from the right of the last non-whitespace character.

 Type Description

 [Asset().TypeDescription]

 Displays the Description as entered on the Asset Type Details pop-up.

 [ Class(). Contact().TypeDescription]

 Displays the Description as entered on the Contact Types Details pop-up.

 [Tenant().ContactByType().TypeDescription]

 Displays the Description as entered on the Contact Types Details pop-up.

 [ Class(). Home().TypeDescription]

 Displays the Description as entered on the Asset Type Details pop-up.

 Type Name

 [ Class(). Contact().TypeName]

 Displays the Type name selected on the contact's View Contacts pop-up.

 [Tenant().ContactByType().TypeName]

 Displays the Type name selected on the specified contact type's View Contacts pop-up.

 Type

 [ Class(). Address().Type]

 Displays the address type Label for the default address for the specified class.

 [Asset().Type]

 Displays the Type as entered on the asset's General tile.

 [ Class(). Home().Type]

 Displays the Type as entered on the home-type asset's General tile.

 [Tenant().Lease().Insurance().Type]

 Displays the policy type ( Master Policy or HO4 ) associated with the tenant's primary lease.

 [ Class(). PhoneNumber().Type]

 Displays the phone number's type for the specified class.

 [Tenant().Lease().CAMExpenseAdjustment().Type()]

 Displays the type of adjustment ( Amortization or One-time ) in the Type column of the lease's first-listed adjustment on the CAM Expense Adjustments page.

 Unit Availability

 [Unit().UnitAvailability()]

 Displays Occupied or Vacant according to the unit's status.

 Unit Count

 [ Class(). FinancialProperty.UnitCount()]

 Displays the total number of active and inactive units associated with the asset's financial property.

 [OwnerProspect().UnitCount()]

 Displays the number of units at each property, as entered in the Unit Count column for each Property defined on the owner prospect Properties pop-up.

 [Property().UnitCount()]

 Displays the total number of active and inactive units associated with the property.

 More Information

 If preceded by the OwnerProspect class ( OwnerProspect.Property.UnitCount ) in an owner prospect-type letter template or report, this function may also be used retrieve property data associated with a potential owner.

 [Tenant().UnitCount]

 Displays the total number of units leased by the tenant.

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

 Unit List

 [ Class(). FinancialProperty.UnitList()]

 Displays the Name of every active and inactive unit associated with the asset's financial property.

 [Property().UnitList()]

 Displays the Name of every active and inactive unit associated with the property.

 [Tenant().UnitList]

 Displays the Name of the each unit leased by the tenant.

 Unit Number

 [ Class(). .Marketing.UnitNumber]

 Displays the Unit Number as entered on the Marketing Setup pop-up in the Listing Details section.

 Unit Recurring Charges

 [FinancialUnit.UnitRecurringCharges()]

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

 Unit Type Count

 [Prospect.UnitTypeCount]

 Displays the number of preferred unit types as specified on the prospect's Preferences tile.

 Unit Type ID

 [Unit().UnitType.UnitTypeID]

 Displays the system generated unit type ID for the unit type.

 Unit Type Image

 [Unit().UnitType.UnitTypeImage()]

 Displays a selected image uploaded to the unit type details page.

 Unit Type List

 [Prospect.UnitTypeList]

 Displays a list of preferred unit types as specified on the prospect's Preferences tile.

 Unit Type Name

 [Prospect.UnitTypeName]

 Displays the name of a preferred unit type as specified on the prospect's Preferences tile.

 Unit User Defined Field

 [Prospect.UnitUserDefinedField()]

 Displays the value or name associated with a unit-type user defined field as specified on the prospect's Unit User Defined Information tile.

 Unit User Defined Field Count

 [Prospect.UnitUserDefinedFieldCount]

 Displays the number of unit-type user defined fields specified on the prospect's Unit User Defined Information tile.

 Unit User Defined Field List

 [Prospect.UnitUserDefinedFieldList]

 Displays a list of unit-type user defined fields (separated by commas) specified on the prospect's Unit User Defined Information tile.

 Unit Width

 [Unit().UnitWidth]

 Displays the width listed on the unit's RV / Campground Information tile. The output can include whole numbers and decimals, formatted as displayed below:

 9.00

 Update Date

 [ServiceManager().UpdateDate()]

 Displays the most recent date and time that the service issue was updated and saved.

 [Tenant().UpdateDate]

 Displays the most recent date and time that the tenant account was updated and saved.

 [Vendor().UpdateDate]

 Displays the most recent date and time that the vendor account was updated and saved.

 [Violation().UpdateDate]

 Displays the most recent date and time that the violation was updated and saved.

 Update User

 [Tenant().UpdateUser]

 Displays the name of the user who last updated and saved the tenant's account.

 Upper Case

 [System.UpperCase()]

 Returns a text string converted to upper case.

 User Defined Field

 [Asset().UserDefinedField()]

 Displays the value of the asset-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Asset().UserDefinedField("Wall Color")]

 Displays the value for the Wall Color user defined field.

 [ Class(). Contact().UserDefinedField()]

 Displays the value of a contact-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Tenant().Contact().UserDefinedField("Is Minor")]

 Displays the value for the Is Minor user defined field.

 [System.CurrentUser.UserDefinedField()]

 Displays the value of the user defined field (UDF) for the user currently logged in to Rent Manager . The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [System.CurrentUser.UserDefinedField("Status")]

 Displays the value for the Status user defined field for the user currently logged in to Rent Manager

 [ Class(). Home().UserDefinedField()]

 Displays the value of the asset-type user defined field (UDF) for the home-type asset. The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Tenant().Home().UserDefinedField("Wall Color")]

 Displays the value for the Wall Color user defined field.

 [Job().UserDefinedField()]

 Displays the value of the user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Job().UserDefinedField("Status")]

 Displays the value for Status user defined field.

 [Tenant().Loan(Tenant.TenantLoanCount()-1).UserDefinedField()]

 Displays the value of the loan-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Tenant().Loan(Tenant.TenantLoanCount()-1).UserDefinedField("Originator")]

 Displays the value for the Originator user defined field of the most recent loan.

 [Owner().UserDefinedField()]

 Displays the value of the owner-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Owner().UserDefinedField("Preferred Contact Method")]

 Displays the value for the Preferred Contact Method user defined field.

 [OwnerProspect().UserDefinedField()]

 Displays the value of the owner prospect-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [OwnerProspect.UserDefinedField("Contract")]

 Displays the value for the Contract user defined field.

 [Property().UserDefinedField()]

 Displays the value of the property-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Property().UserDefinedField("Status")]

 Displays the value for the Status user defined field.

 [Prospect.UserDefinedField()]

 Displays the value defined for the specified user defined field as shown on the prospect's User Defined Fields pop-up. An example is shown below.

 [Prospect.UserDefinedField("Preferred Contact Method")]

 Displays the value for the Preferred Contact Method user defined field.

 [ Class(). PrimaryOwner.UserDefinedField()]

 Displays the value of the specified owner-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Property().PrimaryOwner.UserDefinedField("Preferred Contact Method")]

 Displays the value for the Preferred Contact Method user defined field.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).UserDefinedField()]

 Displays the value of the lease-type user defined field (UDF) for the most recent lease renewal. The Name of the desired UDF must be specified as a parameter. Some examples are shown below.

 [Tenant().Lease.Renewal(Lease.LeaseRenewalCount() - 1).UserDefinedField("Lawncare Included")]

 Displays the value for the Lawncare Included noncommercial user defined field of the tenant's most recent lease renewal.

 [Lease.Renewal(Lease.LeaseRenewalCount() - 1).CommercialUserDefinedField("Sunday Closure")]

 Displays the value for the Sunday Closure commercial user defined field of the tenant's most recent lease renewal.

 [ServiceManager().UserDefinedField()]

 Displays the value of the issue-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [ServiceManager.UserDefinedField("Status")]

 Displays the value of the Status user defined field.

 [System.UserDefinedField()]

 Displays the value system-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [System.UserDefinedField("Accounting Basis")]

 Displays the value for the Accounting Basis user defined field.

 [Tenant().UserDefinedField()]

 Displays the value of the tenant-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Tenant.UserDefinedField("Renter's Insurance Expiration Date")]

 Displays the value for the Renter's Insurance Expiration Date user defined field.

 [Tenant().Eviction().UserDefinedField()]

 Displays the value of the eviction-type user defined field (UDF). The name of the desired UDF must be specified as a parameter. An example is shown below.

 [Tenant().Eviction().UserDefinedField("Priority")]

 Displays the value entered for the Priority UDF.

 [Unit().UserDefinedField()]

 Displays the value of the unit-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Unit().UserDefinedField("Smoking")]

 Displays the value for the Smoking user defined field.

 [Vendor().UserDefinedField()]

 Displays the value of the vendor-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Vendor().UserDefinedField("Recommended By")]

 Displays the value for the Recommended By user defined field.

 [Tenant().Lease().UserDefinedField()]

 Displays the value of the lease-type user defined field (UDF) defined. The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Tenant().Lease().UserDefinedField("Lease Document")]

 Displays the value for the Lease Document user defined field.

 User Full Name

 [System.CurrentUser.UserFullName]

 Displays the first and last name of the user currently logged in to Rent Manager .

 [System.UserFullName]

 Returns the first name and last name of the specified user.

 User Name

 [System.CurrentUser.UserName]

 Displays the username of the user currently logged in to Rent Manager .

 [System.UserName]

 Displays the username of the specified user.

 Utility Readings History

 [Tenant().UtilityReadingsHistory()]

 Displays the tenant's metered utilities information based on the metered utility charge type as of a specified date.

 This function retrieves the utility information and stores it in internal variables. Used by itself, this function does not display the value that was stored for each variable.

 Vacant Unit Count

 [ Class(). FinancialProperty.VacantUnitCount()]

 Displays the total number of vacant units associated with the asset's financial property.

 Property().VacantUnitCount()]

 Displays the total number of vacant units associated with the property.

 Vacant Unit List

 [ Class(). FinancialProperty.VacantUnitList()]

 Displays the Name of every vacant unit associated with the asset's financial property.

 [Property().VacantUnitList()]

 Displays the Name of every vacant unit associated with the property.

 Vacate Date

 [Tenant().Eviction().VacateDate]

 Displays the date by which the tenant must vacate the unit after a judgment is rendered in the eviction case.

 Vendor

 [ServiceManager().Vendor()]

 Display the Vendor selected on the service issue's Details .

 Vendor ID

 [Vendor().VendorID]

 Displays the system-generated vendor ID number.

 Vendor Name

 [Asset().VendorName]

 Displays the Vendor as entered on the asset's Details tile.

 [ Class(). Home().VendorName]

 Displays the Vendor as entered on the home-type asset's Details tile.

 Violation Count

 [ Class(). Violation().ViolationCount]

 Displays the total number of violations associated with the tenant or unit. To return a value, this function must be used with the Tenant or Unit class preceding the Violation class as represented by .Class in the syntax.

 Violation Date

 [Violation().ViolationDate]

 Displays the Violation Date date as listed on the Violation Details tile.

 Violation ID

 [Violation().ViolationID]

 Displays the system-generated violation ID number.

 Violation List

 [ Class(). Violation().ViolationList()]

 Displays the Code , Category , and Escalation Date for all violations associated with the tenant or unit. To return a value, this function must be used with the Tenant or Unit class preceding the Violation class as represented by .Class in the syntax.

 Virtual Tour URL/ Filepath

 [ Class() .Marketing.VirtualTourURL_Filepath]

 Displays the Virtual Tour URL as entered in the Marketing Setup pop-up's Advanced Settings .

 Warranty Expiration Date

 [Asset().WarrantyExpirationDate]

 Displays the Warranty Expiration as entered on the asset's Warranty/Maintenance tile.

 [ Class(). Home().WarrantyExpirationDate]

 Displays the Warranty Expiration as entered on the home-type asset's Warranty/Maintenance tile.

 Warranty Info

 [Asset().WarrantyInfo]

 Displays the Warranty Information as entered on the asset's Warranty/Maintenance tile.

 [ Class(). Home().WarrantyInfo]

 Displays the Warranty Information as entered on the home-type asset's Warranty/Maintenance tile.

 While

 [System.While()]

 Tests a specified condition and executes a script statement repeatedly in a loop while the condition evaluates as true (or <>0). As soon as the specified condition evaluates as 0 or false, the statement is no longer executed.

 Width

 [Prospect.Width]

 Displays the width listed in the STR prospect's Preferences section. The output is formatted as displayed below:

 9

 Work Order

 [ServiceManager().WorkOrder()]

 Displays information from a line item on the service issue's Work Orders Table tile.

 Work Order Count

 [ServiceManager().WorkOrderCount()]

 Displays the number of line items on the service issue's Work Orders Table tile.

 Workers Comp Expiration Date

 [Vendor().WorkersCompExpirationDate]

 Displays the Workers Comp Expiration Date as listed on the vendor Miscellaneous tile.

 Writ Date

 [Tenant().Eviction().WritDate]

 Displays the date that the eviction case was ruled in favor of the landlord, if applicable.

 Year

 [System.Year()]

 Returns the year component of a date value. A non-date returns a value of 1 .
