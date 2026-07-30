# Recurring Charges Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Recurring-Charges.htm

This function displays the total amount of recurring charges posted to the selected tenant.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Lease

 [Tenant().Lease().RecurringCharges()]

 Displays information found on the tenant's Recurring Charges pop-up.

 Renewal Offer

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).RecurringCharges]

 Displays information found on the tenant's Recurring Charges pop-up.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Lease.LeaseRenewalOfferCount() - 1) . This allows you to return data for the most recent lease renewal offer created for the tenant.

 Tenant

 [Tenant().RecurringCharges()]

 Displays information found on the tenant's Recurring Charges pop-up.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [RecurringCharges( "AsOfDate" , "Level" , "ChargeType" , "IgnoreDates" , "IgnoreCalculated" , "UnitID" )]

 Warning

 The UnitID parameter listed below applies to the function only when it is used with the Tenant class. If using this function with the Lease class, only AsOfDate, Level, ChargeType, IgnoreDates, and IgnoreCalculated parameters are available. If using this function with the RenewalOffer class, there are no available parameters.

 AsOfDate

 Specify the date for which to retrieve the recurring charge.

 If no date is specified, today's date is used by default.

 [RecurringCharges("12/31/ 2026 ")]

 Displays the recurring charges amount as of December 31, 2026 .

 Level

 Specify the level for the function to examine. Each level should be separated by a comma. Possible values include Tenant , Unit , UnitType , and Property .

 [RecurringCharges("","Tenant,Unit")]

 Displays tenant and unit recurring charges only.

 ChargeType

 Specify the short name code of the charge type(s) to examine; each charge type should be separated by a comma.

 [RecurringCharges("","","RC,LC")]

 Displays the recurring charges for Rent Charge (RC) and Late Charge (LC) charge types.

 IgnoreDates

 Specify if charge dates are to be ignored when examining recurring charges associated with the selected tenant.

 Specify True to examine the recurring charges of the selected level and charge type for any date range.

 Specify False to examine the recurring charges of the selected level and charge type that are active for the AsOfDate.

 [RecurringCharges("","","","True")]

 Displays the recurring charges for any date range for all levels and charge types associated with the selected tenant.

 IgnoreCalculated

 Specify True if CRE (Commercial Recoverable Expenses) and calculated charges are to be ignored when examining recurring charges associated with the selected tenant. Specify False to include CRE and calculated recurring charges.

 [RecurringCharges("","","","","True")]

 Ignores CRE and calculated charges when examining the recurring charges for all levels and charge types that are active as of today.

 UnitID

 Specify the system-generated unit ID number to examine. This number does not display on any window. To learn the ID number of a selected unit, the script [Unit().UnitID] can be used. If no unit ID is specified, it defaults to the tenant's primary leased unit. Only units associated with the tenant's leases display data. Units not associated with the tenant's leases display 0 .

 [RecurringCharges("","","","","","585")]

 Displays the recurring charges for the unit with the ID number 585 if that unit is associated with one of the tenant's leases.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().RecurringCharges()]

 Displays the total of all recurring charges posted as of today to the current tenant.

 [Tenant().RecurringCharges("12/31/ 2026 ")]

 Displays the total of all recurring charges posted as of December 31, 2026 to the current tenant.

 [Tenant().Lease(1).RecurringCharges("","UnitType")]

 Displays the total of all UnitType recurring charges active as of today for the first additional lease listed for the current tenant.

 [Tenant().Lease().RecurringCharges("","","RC,LC,CAM")]

 Displays the total of all Rent, Late, and CAM charges of all levels active as of today for the first lease listed for the current tenant.

 [Tenant().RecurringCharges("","","","True")]

 Displays the total of all recurring charges for any date range for all levels for the current tenant.

 [Tenant().Lease().RecurringCharges("","","","","True")]

 Displays the total of all recurring charges except CRE and calculated charges for all levels and charge types active as of today for the first lease listed for the current tenant.

 [Tenant().RecurringCharges("","","","True","","923")]

 Displays the total of all recurring charges for any date range for all levels for the current tenant for the unit with the UnitID number 923, if that unit is associated with one of the tenant's leases. Otherwise, it displays 0 .

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).RecurringCharges]

 Displays the total of all recurring charges established in the tenant's most recent renewal offer.
