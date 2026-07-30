# Status Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Status.htm

This function displays the status for the specified entity based on the parameters selected.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Owner Prospect

 [OwnerProspect().Status]

 Displays information found on the owner prospect's details page.

 Prospect

 [Prospect().Status]

 Displays information found on the prospect's details page.

 Renewal Offer

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).Status]

 Displays information found on the tenant's details page for the selected renewal offer.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Lease.LeaseRenewalOfferCount() - 1) . This allows you to return data for the most recent lease renewal offer created for the tenant.

 Service Manager

 [ServiceManager().Status()]

 Displays information found on the service issue's details page.

 Tenant

 [Tenant().Status]

 Displays information found on the selected tenant's details page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Status( "ServiceIssueID" )]

 Warning

 The ServiceIssueID parameter listed below only applies to the function when it is used with the ServiceManager class. If using this function with any other class, there are no available parameters.

 ServiceIssueID

 Select the service issue with this Issue # . If this parameter is not specified, it defaults to the oldest/first issue on the linked account.

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [ServiceManager().Status("53")]

 Displays the Status of service issue # 53.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Status]

 Displays whether the selected tenant is a Past tenant, Current  tenant, or Future tenant.

 [Tenant().ServiceManager().Status()]

 Displays the Status of the first service issue associated with the selected tenant.

 [Property().Asset(1).Status]

 Displays the current Status of the second asset listed alphabetically for the current property.

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).Status]

 Displays the Status  of the tenant's most recent renewal offer.
