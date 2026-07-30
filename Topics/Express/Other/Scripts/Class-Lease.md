# Lease Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Lease.htm

This class examines lease information on a tenant account and is preceded by the Tenant class. The class can be followed by either a lease-level scripting function or another class associated with the lease.

 Example

 [Tenant().Lease().LastPaymentDate]

 Result

 Displays the date of the last payment linked to the first lease listed on the tenant's account.

 Example

 [Tenant().Lease().CAMExpenseAdjustment(1).GLAccount()]

 Result

 Displays the general ledger account selected on the second-listed CAM expense adjustment for the tenant's first-listed lease.

 Class Parameter

 This class can specify a single, optional parameter: an index.

 Index

 An index allows you to return information about a specific lease on an account by using a number to identify each lease listed. For example, if there are three leases listed on a tenant’s account, they are referenced by indexes 0, 1, and 2. You can specify which lease you want Rent Manager to return information about by referencing an index in your script. If no index is specified, Rent Manager defaults to an index of 0, which represents the first lease in the list.

 [Tenant().Lease(1).Balance]

 Displays the balance as of today of the first additional lease listed for the current tenant.

 Recommended Classes

 This class is often followed by one of these recommended classes. Adding an additional class lets you use a function in the additional class.

 Function represents a scripting function that must be inserted into the script. For a complete list of functions, refer to Script Functions .

 Class
 Description

 Asset

 [Tenant().Lease().Asset(). Function ]

 This class retrieves data about an asset specified in the tenant's lease.

 CAM Expense Adjustment

 [Tenant().Lease().CAMExpenseAdjustment(). Function ]

 This class retrieves data on CAM expense adjustments made on a tenant's lease.

 Insurance

 [Tenant().Lease().Insurance(). Function ]

 This class retrieves data on insurance information for tenant leases as well as manufactured home owners.

 Property

 [Tenant().Lease().Property(). Function ]

 This class retrieves data from the Property details page for the property specified in the tenant's lease.

 Renewal

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1). Function ]

 This class retrieves data about a renewal of the tenant's lease.

 Renewal Offer

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1). Function ]

 This class retrieves data about an offered renewal of the tenant's lease.

 Unit

 [Tenant().Lease().Unit(). Function ]

 This class retrieves data from the Unit details page for the unit specified in the tenant's lease.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Function
 Description

 Balance

 [Tenant().Lease().Balance()]

 Displays the tenant's balance for the selected lease as of a specified date.

 Charges List

 [Tenant().Lease().ChargesList()]

 Displays each charge linked to the tenant's specified lease within a specified date range.

 Do Not Require Insurance

 [Tenant().Lease().DoNotRequireInsurance()]

 Displays whether or not the selected lease of the selected tenant account has the option Don't require insurance checked. This function outputs True if the option is checked and False if it is not.

 Expected Move Out Date

 [Tenant().Lease().ExpectedMoveOutDate]

 Displays the Expected Move Out date on the selected lease of the tenant account.

 Is Current

 [Tenant().Lease().IsCurrent]

 Displays whether the selected lease of the selected tenant account is current based on the Move In and Move Out dates. This function outputs True if there is a move in date but no move out date (or a move out date is in the future) and False in all other cases.

 Is Future

 [Tenant().Lease().IsFuture]

 Displays whether the selected lease of the tenant account is in the future based on the Move In date entered on the Tenant details page. This function outputs True if there is a move in date in the future and False in all other cases.

 Is Past

 [Tenant().Lease().IsPast]

 Displays whether the selected lease of the tenant account is in the past based on the Move Out date entered on the Tenant details page. This function outputs True if there is a move out date that has passed and False in all other cases.

 Last Payment Amount

 [Tenant().Lease().LastPaymentAmount]

 Displays the amount of the last payment linked to the selected lease of the selected tenant.

 Last Payment Date

 [Tenant().Lease().LastPaymentDate]

 Displays the date of the last payment linked to the selected lease of the selected tenant.

 Lease End Date

 [Tenant().Lease().LeaseEndDate]

 Displays the Lease End date of the selected lease on the tenant's View Leases pop-up.

 Lease ID

 [Tenant().Lease().LeaseID]

 Displays the internally generated lease ID for the selected lease of tenant.

 Lease Renewal Count

 [Tenant().Lease().LeaseRenewalCount]

 Displays the number of renewals on a selected lease, including the very first lease, for the tenant.

 Lease Renewal Offer Count

 [Tenant().Lease().LeaseRenewalOfferCount]

 Displays the number of renewal offers on a selected lease for the tenant.

 Lease Sign Date

 [Tenant().Lease().LeaseSignDate]

 Displays the Lease Sign date on the selected lease for the tenant.

 Lease Start Date

 [Tenant().Lease().LeaseStartDate]

 Displays the Lease Start date on the selected lease for the tenant.

 Lease Term

 [Tenant().Lease().LeaseTerm]

 Displays the Lease Term entry for the selected lease on the tenant's View Leases pop-up.

 Move In Date

 [Tenant().Lease().MoveInDate]

 Displays the Move In date of the selected lease on the tenant's View Leases pop-up. If the tenant is a guest with a short term rental reservation, the most recent Arrival date entered on the tenant's Reservations tile displays.

 Move Out Date

 [Tenant().Lease().MoveOutDate]

 Displays the Move Out date of the selected lease on the tenant's View Leases pop-up. If the tenant is a guest with a short term rental reservation, the most recent Departure date entered on the tenant's Reservations tile displays.

 Next Recurring Charge Change Date

 [Tenant().Lease().NextRecurringChargeChangeDate()]

 Displays the date of the next scheduled change to the recurring charge on the tenant's View Recurring Charges pop-up for the selected lease. Based on the value of the parameters, Rent Manager determines which iteration of the recurring charge to examine. The next recurring charge change date is one day after that recurring charge's To Date .

 Oldest Active Charge Age

 [Tenant().Lease().OldestActiveChargeAge]

 Displays the age, in days, of the oldest unpaid charge for the selected lease on the tenant's account.

 Open Charges Amount

 [Tenant().Lease().OpenChargesAmount()]

 Displays the total amount of open charges as listed on the tenant's View Transactions pop-up for the selected lease.

 Open Charges List

 [Tenant().Lease().OpenChargesList()]

 Displays a list of each of open charge on the tenant's View Transactions pop-up for the selected lease.

 Payments

 [Tenant().Lease().Payments()]

 Displays a list of payments made by the tenant for the selected lease. The function creates a separate line for each payment that includes the date and amount of each transaction.

 Previous Recurring Charge Change Date

 [Tenant().Lease().PreviousRecurringChargeChangeDate()]

 Displays the date of the previous scheduled change to the recurring charge on the tenant's View Recurring Charges pop-up for the selected lease. Based on the value of the parameters, Rent Manager determines which iteration of the recurring charge to examine. The next recurring charge change date is one day after that recurring charge's From Date .

 Recurring Charge List

 [Tenant().Lease().RecurringChargeList()]

 Displays a list of all active recurring charges as listed on the tenant's View Recurring Charges pop-up for the specified lease.

 Recurring Charges

 [Tenant().Lease().RecurringCharges()]

 Displays the total sum of active recurring charges as listed on the tenant's View Recurring Charges pop-up for the specified lease.

 Rent Recurring Charges

 [Tenant().Lease().RentRecurringCharges()]

 Displays the total amount of active rent recurring charges as listed on the tenant's View Recurring Charges pop-up for the specified lease. Charge types that are designated as rent charges are specified for each property in the Rent Charge Type field on the property Other Information tile.

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

 Sales Year

 [Tenant().Lease().SalesYear()]

 Displays the year with data entered on the Retail Sales pop-up of the commercial lease immediately preceding the specified or calculated date.

 Related Preferences

 In order to track tenant retail sales, the Track tenant retail sales option must be enabled in Commercial (System Preferences) .

 Security Deposit Held

 [Tenant().Lease().SecurityDepositHeld()]

 Displays the total amount of all security deposits currently held for the tenant's selected lease.

 Total Allocations

 [Tenant().Lease().TotalAllocations()]

 Displays the total value of paid allocations associated with a tenant's specified lease.

 Total Charged

 [Tenant().Lease().TotalCharged()]

 Displays the total amount of charges posted to the lease for the selected tenant.

 Total Credits

 [Tenant().Lease().TotalCredits()]

 Displays the total amount of credits posted to the lease for the selected tenant.

 Total Payments

 [Tenant().Lease().TotalPayments()]

 Displays the total amount of payments received on selected charge types within a specified date range for the selected tenant lease.

 Total Prepay Allocations

 [Tenant().Lease().TotalPrepayAllocations()]

 Displays the total value of prepayments and/or credits that are unapplied to charges at the specified tenant lease.

 Transactions

 [Tenant().Lease().Transactions()]

 Displays each transaction linked to the selected lease of the selected tenant within a specified date range. Each transaction can be displayed on a separate line and shown as a string of one or more specified transaction data fields. If no fields are specified in the Format parameter, the results display by default the transaction date, description, and amount separated by tabs.

 A new line with the default formatted text string (date, description, and amount separated by tabs) for each transaction linked to the first lease listed for the current tenant displays, as shown below.

 User Defined Field

 [Tenant().Lease().UserDefinedField()]

 Displays the value of the lease-type user defined field (UDF) defined. The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Tenant().Lease().UserDefinedField("Lease Document")]

 Displays the value for the Lease Document user defined field.
