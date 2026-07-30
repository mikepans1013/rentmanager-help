# Script Classes

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Script-Classes.htm

Classes determine which account type in the database to examine with the function.

 The table below lists all of the scripting classes available in Rent Manager in alphabetical order. Each class is linked to a topic that describes how the class is used as well as a list of functions available to that class.

 Class(). represents a required parent class. If the parent class is not defined at the beginning of your script, Rent Manager defaults to the most appropriate class based on the location of the script.

 Function represents a scripting function that must be inserted into the script. For a complete list of functions, refer to Script Functions .

 Class
 Description

 Address

 [ Class(). Contact().Address(). Function ]

 This class retrieves address data from the Addresses section on the View Contacts pop-up for the tenant or prospect account.

 [Tenant().ContactByType().Address(). Function ]

 This class retrieves address data for a contact Type from the Addresses section on the View Contacts pop-up for the tenant account.

 [ Class(). FinancialProperty.Address(). Function ]

 This class retrieves address data from the Primary Address tile on the Property details page for the financial property of the asset or home.

 [Owner().Address(). Function ]

 This class retrieves address data from the Addresses tile on the Owner details page.

 [OwnerProspect().Address(). Function ]

 This class retrieves address data from the Addresses tile on the Owner Prospect details page.

 [Owner().Partner().Address(). Function ]

 This class retrieves address data from the Addresses tile on the Owner details page for the owner's partner.

 [ Class(). PrimaryOwner.Address(). Function ]

 This class retrieves address data from the Addresses tile on the Owner details page for the primary owner.

 [Property().Address(). Function ]

 This class retrieves address data from the Primary Address tile on the Property details page.

 [Prospect.Address(). Function ]

 This class retrieves address data from the Addresses tile on the Prospect details page.

 [Tenant().Address(). Function ]

 This class retrieves address data from the Addresses tile on the Tenant details page.

 [Unit().Address(). Function ]

 This class retrieves address data from the Addresses tile on the Unit details page.

 [Vendor().Address(). Function ]

 This class retrieves address data from the Addresses tile on the Vendor details page.

 Asset

 [Tenant().Lease().Asset(). Function ]

 This class retrieves data about an asset specified in the tenant's lease.

 [Property().Asset(). Function ]

 This class retrieves data about assets assigned to the property.

 [Tenant().Asset(). Function ]

 This class retrieves data about the tenant's assets.

 [Unit().Asset(). Function ]

 This class retrieves asset data from the Assets tile on the Unit details page.

 CAM Expense Adjustment

 [Tenant().Lease().CAMExpenseAdjustment(). Function ]

 This class retrieves data on CAM expense adjustments made on a tenant's lease.

 Contact

 [Owner().Contact(). Function ]

 This class retrieves contact information for the owner.

 [Owner().Partner().Contact(). Function ]

 This class retrieves contact information for the partner.

 [OwnerProspect().Contact(). Function ]

 This class retrieves contact information for the owner prospect.

 [ Class(). PrimaryOwner.Contact(). Function ]

 This class retrieves contact information for the primary owner.

 [Prospect.Contact(). Function ]

 This class retrieves data from the View Contacts pop-up for the prospect account.

 More Information

 If you want to provide screening information for the prospect, it is recommended that you follow this class with the Screening class.

 [Tenant().Contact(). Function ]

 This class retrieves data from the View Contacts pop-up for the tenant account.

 [Vendor().Contact(). Function ]

 This class retrieves contact information for the vendor.

 Contact By Type

 [Tenant().ContactByType(). Function ]

 This class retrieves data for a contact Type listed on the View Contacts pop-up for the tenant account.

 Current User

 [System.CurrentUser. Function ]

 This class retrieves data about the user currently logged in to Rent Manager .

 Eviction

 [Tenant().Eviction(). Function ]

 This class retrieves data about eviction processes linked to a tenant.

 Financial Property

 [Asset().FinancialProperty. Function ]

 This class retrieves data about an asset's property selected to track financials.

 [ Class(). Home().FinancialProperty. Function ]

 This class retrieves data about the property selected to track the home's financials.

 Home

 [Property().Home(). Function ]

 This class retrieves data about assets designated as homes for the property.

 [Tenant().Home(). Function ]

 This class retrieves data about assets designated as homes from the tenant's details page.

 Insurance

 [Tenant().Lease().Insurance(). Function ]

 This class retrieves data on insurance information for tenant leases as well as manufactured home owners.

 Income Verification

 [ Class(). Contact().IncomeVerification(). Function ]

 This class retrieves income verification data from a contact listed on the View Contacts pop-up for the tenant or prospect account.

 Job

 [Job(). Function ]

 This class retrieves data about jobs.

 Lease

 [Tenant().Lease(). Function ]

 This class retrieves data about leases from the Lease Details pop-up for tenant account.

 More Information

 If you want to provide unit information for this tenant, it is recommended that you follow this class with the Unit class.

 Loan

 [Tenant().Loan(). Function ]

 This class retrieves data about a tenant's owner-financed loans.

 Marketing

 [Property().Marketing. Function ]

 This class retrieves data from the property's Marketing Setup pop-up.

 [Unit().Marketing. Function ]

 This class retrieves data from the unit's Marketing Setup pop-up.

 Owner

 [ Class(). FinancialProperty.Owner(). Function ]

 This class retrieves data about an owner for the financial property of the asset or home.

 [OwnerProspect().Owner(). Function ]

 This class retrieves data about an owner that was converted from an owner prospect.

 [Property().Owner(). Function ]

 This class retrieves data about an owner of the property.

 Owner Prospect

 [Owner().OwnerProspect(). Function ]

 This class retrieves data about an owner who was converted from an owner prospect.

 Ownership

 [ Class(). FinancialProperty.Ownership(). Function ]

 This class retrieves data from the Owners pop-up of the financial property.

 [Owner().Ownership(). Function ]

 This class retrieves data from the Ownership pop-up of the owner account.

 [Property().Ownership(). Function ]

 This class retrieves data from the Owners pop-up for the property.

 [ Class(). PrimaryOwner.Ownership(). Function ]

 This class retrieves data about the Primary Owner listed on the Primary Owner summary card of the property.

 Partner

 [Owner().Partner(). Function ]

 This class retrieves data about an owner who is a partner of the specified owner.

 Pet

 [Tenant().Pet(). Function ]

 This retrieves data about a tenant's pets.

 Phone Number

 [ Class(). Contact().PhoneNumber(). Function ]

 This class retrieves phone number data for vendor or owner account, or from a contact listed on the View Contacts pop-up for the tenant or prospect account.

 [Tenant().ContactByType.PhoneNumber(). Function ]

 This class retrieves phone number data for a contact Type listed on the View Contacts pop-up for the tenant account.

 [ Class(). FinancialProperty.PhoneNumber(). Function ]

 This class retrieves phone number data for the financial property of the asset or home.

 [OwnerProspect().PhoneNumber(). Function ]

 This class retrieves phone number data for the owner prospect.

 [Property().PhoneNumber(). Function ]

 This class retrieves phone number data for the property.

 [Prospect().Contact().PhoneNumber(). Function ]

 This class retrieves phone number data for the prospect.

 [Vendor().Contact().PhoneNumber(). Function ]

 This class retrieves phone number data for the vendor.

 [Owner().Contact().PhoneNumber(). Function ]

 This class retrieves phone number data for the owner.

 [Tenant().Contact().PhoneNumber(). Function ]

 This class retrieves phone number data for the tenant.

 Primary Owner

 [ Class(). FinancialProperty.PrimaryOwner. Function ]

 This class retrieves data about the owner on the Primary Owner summary card for the financial property.

 [Property().PrimaryOwner. Function ]

 This class retrieves data about the owner listed on the Primary Owner summary card for the property.

 Property

 [Asset().Property(). Function ]

 This class retrieves data about the property or the unit to which the asset is linked.

 [Tenant().Lease().Property(). Function ]

 This class retrieves data from the Property details page for the property specified in the tenant's lease.

 [ Class(). Ownership().Property(). Function ]

 This class retrieves data about the Property listed on the Ownership pop-up for the owner account.

 [OwnerProspect().Property(). Function ]

 This class retrieves data from the Properties pop-up for the owner prospect account.

 [ServiceManager().Property(). Function ]

 This class retrieves data about the property linked to the service issue.

 [Tenant().Property(). Function ]

 This class retrieves data about the property marked as Default on the tenant account.

 [Unit().Property(). Function ]

 This class retrieves property data for the associated unit.

 Prospect

 [ServiceManager().Prospect(). Function ]

 This class retrieves data about the prospect linked to the service issue.

 [Tenant().Prospect(). Function ]

 This class retrieves data from a tenant's prospect account if the tenant was created from a prospect record.

 Renewal

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1). Function ]

 This class retrieves data about a renewal of the tenant's lease.

 Renewal Offer

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1). Function ]

 This class retrieves data about an offered renewal of the tenant's lease.

 Rent Quotes

 [Prospect().RentQuotes(). Function ]

 This class retrieves data about rental quotes on a prospect account

 Reservation

 [ Class(). Reservation(). Function ]

 This class retrieves date about related to Short Term Rental (STR) reservations.

 [Prospect().Reservation(). Function ]

 This class retrieves short term rental (STR) reservation data for the prospect.

 [Tenant().Reservation(). Function ]

 This class retrieves short term rental (STR) reservation data for the tenant.

 Screening

 [ Class(). Contact().Screening. Function ]

 This class retrieves screening data for a contact listed on the View Contacts pop-up for the tenant or prospect account.

 [Tenant().ContactByType().Screening. Function ]

 This class retrieves screening data for a contact Type listed on the View Contacts pop-up for the tenant account.

 Service Manager

 [Property().ServiceManager(). Function ]

 This class retrieves data from issues linked to a property.

 [Tenant().ServiceManager(). Function ]

 This class retrieves data from issues linked to a tenant.

 [Unit().ServiceManager(). Function ]

 This class retrieves data from service issues linked to a unit.

 [Vendor().ServiceManager(). Function ]

 This class retrieves data from service issues linked to a vendor.

 Stage

 [Violation().Stage(). Function ]

 This class retrieves data about violation stages.

 System

 [System. Function ]

 This class retrieves system-level data.

 Tenant

 [Property().Tenant(). Function ]

 This class retrieves data about past, current, and future tenants of the property.

 [ServiceManager().Tenant(). Function ]

 This class retrieves data about the tenant linked to the service issue.

 [Unit().Tenant(). Function ]

 This class retrieves data about the tenant occupying the unit.

 Unit

 [Asset().Unit().Function]

 This class retrieves data about the unit to which the asset is linked.

 [Tenant().Lease().Unit(). Function ]

 This class retrieves data from the Unit details page for the unit specified in the tenant's lease.

 [Property().Unit(). Function ]

 This class retrieves data about a unit at the property.

 [Prospect.Unit(). Function ]

 This class retrieves data from the Reserved Unit summary card for the prospect account.

 [ServiceManager().Unit(). Function ]

 This class retrieves data about the unit linked to the service issue.

 [Tenant().Unit(). Function ]

 This class retrieves data about the unit linked to a tenant.

 Unit Type

 [Unit().UnitType(). Function ]

 This class retrieves data from the Unit Type field on the General tile of the unit.

 Vendor

 [Asset().Vendor(). Function ]

 This class retrieves data about the vendor to which the asset is linked.

 Violation

 [Tenant().Violation(). Function ]

 This class retrieves violation data for the tenant.

 [Unit().Violation(). Function ]

 This class retrieves violation data for a tenant associated with the unit.
