# Rent Recurring Charges Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Rent-Recurring-Charges.htm

This function displays the total amount of rent recurring charges assigned to the selected tenant.

 Classes that utilize this function and the location from which the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Lease

 [Tenant().Lease().RentRecurringCharges()]

 Displays information found in the Rent Charge Type field on the property's Other Information tile.

 Renewal Offer

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).RentRecurringCharges()]

 Displays information found in the tenant's renewal offer details.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Lease.LeaseRenewalOfferCount() - 1) . This allows you to return data for the most recent lease renewal offer created for the tenant.

 Tenant

 [Tenant().RentRecurringCharges()]

 Displays information found in the Rent Charge Type field on the property's Other Information tile.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [RentRecurringCharges( "AsOfDate" , "UnitID" )]

 Warning

 The AsOfDate parameter listed below applies to the function only when it is used with the Lease and Tenant classes. The UnitID parameter listed below applies to the function only when it is used with the Tenant class. If using this function with the RenewalOffer class, there are no available parameters.

 AsOfDate

 Specify the date for which to retrieve the recurring charge.

 If no date is specified, today's date is used by default.

 [RentRecurringCharges("12/31/ 2026 ")]

 Displays the recurring charges amount for rent charges only as of December 31, 2026 .

 UnitID

 Specify the system-generated unit ID number to examine. This number does not display on any window. To learn the ID number of a selected unit, the script [Unit().UnitID] can be used. If no unit ID is specified, it defaults to the tenant's primary leased unit. Only units associated with the tenant's leases display data. Units not associated with the tenant's leases display 0 .

 [RentRecurringCharges("","585")]

 Displays rent recurring charges for the unit with the ID number 585 if that unit is associated with one of the current tenant's leases. If the unit with the ID number of 585 is not linked to the current tenant's leases, this function returns 0 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().RentRecurringCharges()]

 Displays the total of all rent recurring charges posted as of today for the current tenant.

 [Tenant().Lease(1).RentRecurringCharges()]

 Displays the total of all rent recurring charges active as of today for the first additional lease listed for the current tenant.

 [Tenant().Lease().RentRecurringCharges("12/31/ 2026 ")]

 Displays the total of all rent recurring charges active as of December 31, 2026 for the first lease listed for the current tenant.

 [Tenant().RentRecurringCharges("12/31/ 2026 ","150")]

 Displays the total of all rent recurring charges posted as of December 31, 2026 to the current tenant for the unit with the UnitID of 150, if that unit is associated with one of the tenant's leases. Otherwise, it displays 0 .

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).RentRecurringCharges]

 Displays the rent recurring charges established in the tenant's most recent renewal offer.
