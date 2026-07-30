# Tenant Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Tenant.htm

This class examines tenant account information and can either be followed by a tenant-level scripting function or another class associated with the tenant. This class pulls information from tenant accounts.

 Example

 [Tenant().Balance()]

 Result

 Displays the balance of the tenant as listed on the tenant's Financials card.

 Example

 [Tenant().Status()]

 Result

 Displays the lease status of the associated tenant as listed on the tenant's scoreboard.

 Example

 [Tenant().Contact().PhoneNumber().FullNumber]

 Result

 Displays the full number and extension of the tenant's default phone number.

 Example

 [Tenant().Reservation().ArrivalDate]

 Result

 Displays the Arrival date listed on the tenant's reservation located on the tenant's Reservation Details page.

 Class Parameters

 This class can be passed a single, optional parameter: an ID or an index.

 ID

 The ID is a system-generated, unique number assigned by Rent Manager . The ID is assigned in the order of the account Create Date . You can find this ID by looking at the Account Number in the tenant's scoreboard. If no ID is specified, Rent Manager defaults to using the ID of the account selected before running the script.

 To learn the ID number of a selected account, the script [Tenant().AccountNumber] can be used. Entering a distinct ID in this class parameter allows you to specify the account that the following function examines.

 More Information

 A tenant ID may be specified only when Tenant is the parent class in a script as shown in the example below.

 [Tenant(101).FirstName]

 Displays the first name of the tenant with an account number of 101.

 Index

 An index allows you to return information about a specific tenant by using a number to identify each tenant listed. For example, if there are three tenants listed on a unit, they are referenced by indexes 0, 1, and 2. You can specify which tenant you want Rent Manager to return information about by referencing an index in your script. If no index is specified, Rent Manager defaults to an index of 0, which represents the first tenant in the list.

 More Information

 An index may only be passed to this class when Tenant is considered a child class in the script, as shown in the below examples.

 [Unit.Tenant(1).Balance()]

 Display the balance of the first additional tenant associated with this unit. Since the Unit class indexes tenants based on occupancy, this would display the previous occupant of this unit (unless there are multiple tenants occupying the unit).

 [ServiceIssue.Tenant(1).LastName]

 Display the last name of the first additional tenant linked to the issue. Service issues index linked tenant accounts based on the order they display in the Links section.

 Recommended Classes

 This class is often followed by one of these recommended classes. Adding an additional class lets you use a function in the additional class.

 Function represents a scripting function that must be inserted into the script. For a complete list of functions, refer to Script Functions .

 Class
 Description

 Address

 [Tenant().Address(). Function ]

 This class retrieves address data from the Addresses tile on the Tenant details page.

 Asset

 [Tenant().Asset(). Function ]

 This class retrieves data about the tenant's assets.

 Contact

 [Tenant().Contact(). Function ]

 This class retrieves data from the View Contacts pop-up for the tenant account.

 Contact By Type

 [Tenant().ContactByType(). Function ]

 This class retrieves data for a contact Type listed on the View Contacts pop-up for the tenant account.

 Eviction

 [Tenant().Eviction(). Function ]

 This class retrieves data about eviction processes linked to a tenant.

 Home

 [Tenant().Home(). Function ]

 This class retrieves data about assets designated as homes from the tenant's details page.

 Lease

 [Tenant().Lease(). Function ]

 This class retrieves data about leases from the Lease Details pop-up for tenant account.

 More Information

 If you want to provide unit information for this tenant, it is recommended that you follow this class with the Unit class.

 Loan

 [Tenant().Loan(). Function ]

 This class retrieves data about a tenant's owner-financed loans.

 Pet

 [Tenant().Pet(). Function ]

 This retrieves data about a tenant's pets.

 Phone Number

 [Tenant().Contact().PhoneNumber(). Function ]

 This class retrieves phone number data for the tenant.

 Property

 [Tenant().Property(). Function ]

 This class retrieves data about the property marked as Default on the tenant account.

 Prospect

 [Tenant().Prospect(). Function ]

 This class retrieves data from a tenant's prospect account if the tenant was created from a prospect record.

 Reservation

 [Tenant().Reservation(). Function ]

 This class retrieves short term rental (STR) reservation data for the tenant.

 Service Manager

 [Tenant().ServiceManager(). Function ]

 This class retrieves data from issues linked to a tenant.

 Unit

 [Tenant().Unit(). Function ]

 This class retrieves data about the unit linked to a tenant.

 Violation

 [Tenant().Violation(). Function ]

 This class retrieves violation data for the tenant.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Function
 Description

 Account Name

 [Tenant().AccountName]

 Displays the full name on the tenant's account.

 Related Preferences

 By default, the name displays with the First Name first. If Format Names by Last Name, First Name is checked in General Report Options (System Preferences) , the name displays with the Last Name first.

 Account Number

 [Tenant().AccountNumber]

 Displays the system-generated Account Number in the tenant's scoreboard.

 Active End Date

 [Tenant().ActiveEndDate]

 Displays the Move Out date on the tenant's details page on the Leases tile.

 Active Start Date

 [Tenant().ActiveStartDate]

 Displays the Move In date on the tenant's details page on the Leases tile.

 Address Count

 [Tenant().AddressCount]

 Displays the total number of addresses entered in the Addresses section of the tenant's details page.

 Balance

 [Tenant().Balance()]

 Displays the tenant's account balance as of a specific date.

 CashPay Account Number

 [Tenant().CashPayAccountNumber]

 Displays the CashPay account number assigned by Zego to the tenant.

 Charges List

 [Tenant().ChargesList()]

 Displays each charge linked to the selected tenant within a specified date range.

 Comment

 [Tenant().Comment]

 Displays the text entered in the Comment tile of the Tenant details page.

 Company Name

 [Tenant().CompanyName]

 Displays the Company Name for tenant accounts that have Is Company checked on the details page.

 Contact Count

 [Tenant().ContactCount()]

 Displays the total number of contacts associated with the tenant's account.

 Contact List

 [Tenant().ContactList()]

 Displays the names of all contacts listed on the tenant's View Contacts pop-up.

 Create Date

 [Tenant().CreateDate]

 Displays the date and time the tenant's account was created and first saved.

 Current Occupancy Count

 [Tenant().CurrentOccupancyCount()]

 Displays the total number of contacts listed on the View Contacts pop-up.

 Current Occupancy List

 [Tenant().CurrentOccupancyList()]

 Displays the names of all contacts listed on the View Contacts pop-up.

 Default Phone Number

 [Tenant().DefaultPhoneNumber]

 Displays the tenant's phone number marked as Default on the View Contacts pop-up.

 Display Color

 [Tenant().DisplayColor]

 Displays the name of the color selected in the Display Color field of the tenant's Miscellaneous tile.

 Display Color Code

 [Tenant().DisplayColorCode]

 Displays the hexadecimal code of the color selected in the Display Color field of the tenant's Miscellaneous tile.

 Display Color ID

 [Tenant().DisplayColorID]

 Displays the internal Rent Manager color ID of the color selected in the Display Color field of the tenant's Miscellaneous tile.

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

 Do Not Send AR Automation Notifications

 [Tenant().DoNotSendARAutomationNotifications]

 Displays True if Don't Send AR Automation Notifications is checked on the tenant's Miscellaneous tile. Otherwise, False displays.

 Eviction Count

 [Tenant().EvictionCount()]

 Displays the number of open and closed eviction processes associated with a tenant.

 Eviction List

 [Tenant().EvictionList()]

 Displays a tab-separated list of a tenant's eviction process(es) and associated information.

 First Name

 [Tenant().FirstName]

 Displays the First Name as entered on the tenant's General tile.

 Fixed Amount

 [Tenant().FixedAmount]

 Displays the value entered in the Fixed Amount field of the Late Fees window.

 Full Name

 [Tenant().FullName]

 Displays information from the tenant's View Contacts pop-up.

 Related Preferences

 By default, the name displays with the First Name first. If Format Names by Last Name, First Name is checked in General Report Options (System Preferences) , the name displays with the Last Name first.

 Has Loan

 [Tenant().HasLoan]

 Displays True if the tenant has any owner-financed loans; otherwise displays False .

 History Count

 [Tenant().HistoryCount()]

 Displays the total number of history/notes on the tenant's History/Notes pop-up.

 Is Company

 [Tenant().IsCompany]

 Displays 1 if Company is checked on the tenant's General tile; otherwise, 0 displays.

 Is Prospect

 [Tenant().IsProspect]

 Displays False if used in a tenant letter template.

 Is Weekly

 [Tenant().IsWeekly]

 Displays 1 if the Rent Period is Weekly on the tenant's General tile. Otherwise, displays 0 .

 Last Name

 [Tenant().LastName]

 Displays the Last Name as entered on the tenant's General tile.

 Last Payment Amount

 [Tenant().LastPaymentAmount]

 Displays the amount of the last payment made by the tenant.

 Last Payment Date

 [Tenant().LastPaymentDate]

 Displays the date of the last payment made by the tenant.

 Late Fee Amount

 [Tenant().LateFeeAmount()]

 Displays the total late fees associated with the tenant's account as of the specified date.

 Lease Count

 [Tenant().LeaseCount]

 Displays total number of leases listed on the tenant's View Leases pop-up.

 Lease List

 [Tenant().LeaseList]

 Displays the unit names associated with the leases on the tenant's View Leases pop-up.

 Loan Count

 [Tenant().LoanCount]

 Displays the number of owner-financed loans associated with the tenant's account. Both open and closed loans are included in the count.

 If the tenant has never had a loan, this function returns a 0 .

 Loan List

 [Tenant().LoanList]

 Displays the Reference number of all owner-financed loans associated with the tenant's account. Both open and closed loans are included. The reference numbers are listed in order by origination date, with the oldest first.

 Lockbox ID

 [Tenant().LockboxID]

 Displays the Company Code , the number of the tenant's associated Lockbox barcode, and the tenant's account number appended as a string.

 Next Recurring Charge Change Date

 [Tenant().NextRecurringChargeChangeDate()]

 Displays the date of the next scheduled change to the recurring charge on the tenant's View Recurring Charges . Based on the value of the parameters, Rent Manager determines which iteration of the recurring charge to examine. The next recurring charge change date is one day after that recurring charge's To Date .

 Note

 [Tenant().Note()]

 Displays information about the most recent note on the tenant's History/Notes tile.

 Oldest Active Charge Age

 [Tenant().OldestActiveChargeAge]

 Displays the age, in days, of the oldest unpaid charge on the tenant's account.

 Open Charges Amount

 [Tenant().OpenChargesAmount()]

 Displays the total amount of open charges as listed on the tenant's View Transactions pop-up.

 Open Charges List

 [Tenant().OpenChargesList()]

 Displays a list of each of open charge on the tenant's View Transactions pop-up.

 Payments

 [Tenant().Payments()]

 Displays a list of payments made by the tenant. The function creates a separate line for each payment that includes the date and amount of each transaction.

 [ Class(). Reservation(ReservationCount - 1).Payments]

 Displays a list of payments made for the most recent reservation. The function creates a separate line for each payment that includes the date and amount of each transaction.

 Per Date Late Fee Amount

 [Tenant().PerDateLateFeeAmount]

 Displays the Amount as entered in the Per Day Options section on the tenant Late Fees pop-up.

 Pet Count

 [Tenant().PetCount]

 Displays the total number of pets on the tenant account in the Pets tile.

 Portal User Name

 [Tenant().PortalUserName]

 Displays the Username for the tenant's Tenant Web Access account.

 Previous Recurring Charge Change Date

 [Tenant().PreviousRecurringChargeChangeDate()]

 Displays the date of the previous scheduled change to the recurring charge on the tenant's View Recurring Charges pop-up for the selected lease. Based on the value of the parameters, Rent Manager determines which iteration of the recurring charge to examine. The previous recurring charge change date is the date in that recurring charge's From Date .

 Recurring Charge List

 [Tenant().RecurringChargeList()]

 Displays a list of all active recurring charges as listed on the tenant's View Recurring Charges pop-up.

 Recurring Charges

 [Tenant().RecurringCharges()]

 Displays the total sum of active recurring charges as listed on the tenant's View Recurring Charges pop-up.

 Renewal Pricing

 [Tenant().RenewalPricing()]

 Displays the price of the renewal associated with Rainmaker LRO .

 Renewal Pricing List

 [Tenant().RenewalPricingList()]

 Displays a list of prices for renewals associated with Rainmaker LRO .

 Rent Due Day

 [Tenant().RentDueDay]

 Displays the Due Day value entered on the tenant's General tile.

 If the Rent Period is Weekly or Daily , a value of 0 displays.

 Rent Period

 [Tenant().RentPeriod]

 Displays whether Daily , Weekly , or Monthly is selected for the Rent Period field on the tenant's General tile.

 Rent Recurring Charges

 [Tenant().RentRecurringCharges()]

 Displays the total amount of active rent recurring charges as listed on the tenant's View Recurring Charges pop-up. Charge types that are designated as rent charges are specified for each property in the Rent Charge Type field on the property Other Information tile.

 Screening Count

 [Tenant().ScreeningCount]

 Displays the number of screening reports on the tenant’s History/Notes pop-up.

 Security Deposit Held

 [Tenant().SecurityDepositHeld()]

 Displays the total amount of all security deposits currently held for the tenant.

 Set Contact Type Filter

 [Tenant().SetContactTypeFilter()]

 This function is designed to filter the total collection of contacts associated with the tenant based on the assigned parameter values.

 Set History Filter

 [Tenant().SetHistoryFilter()]

 This function is designed to filter the total collection of tenant history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 Status

 [Tenant().Status]

 Displays the current Status as listed on the tenant's scoreboard.

 Tenant Loan Count

 [Tenant().TenantLoanCount]

 Displays the total number of owner-financed loans associated with the tenant's account.

 Total Allocations

 Tenant().TotalAllocations()]

 Displays the total value of paid allocations associated with the tenant.

 Total Charged

 [Tenant().TotalCharged()]

 Displays the total amount of charges posted to the tenant's View Transactions pop-up.

 Total Credits

 [Tenant().TotalCredits()]

 Displays the total amount of credits posted to the tenant's View Transactions pop-up.

 Total Payments

 [Tenant().TotalPayments()]

 Displays the total amount of the tenant's payments received on selected charge types within a specified date range.

 Total Prepay Allocations

 [Tenant().TotalPrepayAllocations()]

 Displays the total value of prepayments and/or credits that are unapplied to charges at the specified tenant.

 Transactions

 [Tenant().Transactions()]

 Displays each transaction associated with the tenant within a specified date range. Each transaction can be displayed on a separate line and shown as a string of one or more specified transaction data fields. If no fields are specified in the Format parameter, the results default to the transaction date, description, and amount separated by tabs.

 A new line with the default formatted text string (date, description, and amount separated by tabs) for each transaction linked to the current tenant displays, as shown below.

 Unit Count

 [Tenant().UnitCount]

 Displays the total number of units leased by the tenant.

 Unit List

 [Tenant().UnitList]

 Displays the Name of the each unit leased by the tenant.

 Update Date

 [Tenant().UpdateDate]

 Displays the most recent date and time that the tenant account was updated and saved.

 Update User

 [Tenant().UpdateUser]

 Displays the name of the user who last updated and saved the tenant's account.

 User Defined Field

 [Tenant().UserDefinedField()]

 Displays the value of the tenant-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Tenant.UserDefinedField("Renter's Insurance Expiration Date")]

 Displays the value for the Renter's Insurance Expiration Date user defined field.

 Utility Readings History

 [Tenant().UtilityReadingsHistory()]

 Displays the tenant's metered utilities information based on the metered utility charge type as of a specified date.

 This function retrieves the utility information and stores it in internal variables. Used by itself, this function does not display the value that was stored for each variable.
