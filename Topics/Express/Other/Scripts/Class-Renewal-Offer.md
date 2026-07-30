# Renewal Offer Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Renewal-Offer.htm

This class examines lease renewal offers on tenant accounts. The class is preceded by the Lease class. Then, a renewal offer-level scripting function can be specified.

 Most of the information retrieved by the scripting functions can be found in the Renewal Offer Details section the renewal offer.

 Example

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).SignDate]

 Result

 Displays the date the tenant signed the renewal offer for their most recent lease.

 Example

 [Tenant().Lease().RenewalOffer().LeaseTerm]

 Result

 Displays the Lease Term of the first lease renewal offer on the tenant's account.

 If the first lease on the tenant's account does not have an offer that was created with the Generate Renewal Offers feature, nothing is returned.

 Class Parameter

 A single parameter can be specified for this class: an index.

 Index

 An index allows you to return information about a specific renewal offer on a tenant account by using a number to identify each renewal offer listed for the specified lease. For example, if there are three renewal offers listed on a tenant’s account, they are referenced by indexes 0, 1, and 2. You can specify which renewal offer you want Rent Manager to return information about by referencing an index in your script. If no index is specified, Rent Manager defaults to an index of 0, which represents the renewal offer for the original lease.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Lease.LeaseRenewalOfferCount() - 1) . This allows you to return data for the most recent lease renewal offer created for the tenant.

 [Tenant().Lease().RenewalOffer().EndDate]

 Displays the Lease End date on the renewal offered on the tenant's original lease.

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).StartDate]

 Displays the Lease Start date on the tenant's most recent renewal offer.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 The following examples reflect the syntax that displays when you double-click the functions in the Insertable Fields section.

 Function
 Description

 Comment

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).Comment]

 Displays the Comment entered by the tenant in Tenant Web Access upon declining their most recent lease renewal offer.

 End Date

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).EndDate]

 Displays the Lease End date on the tenant's most recent lease renewal offer.

 Lease Term

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).LeaseTerm]

 Displays the Renewal Term on the tenant's most recent lease renewal offer.

 Recurring Charges

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).RecurringCharges]

 Displays the total sum of active recurring charges specified on the tenant's most recent lease renewal offer.

 Recurring Charges List

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount - 1).RecurringChargesList()]

 Displays recurring charges and the dates those new charges become active as specified on the tenant's most recent lease renewal offer.

 Renewal Offer ID

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount - 1).RenewalOfferID]

 Displays the system-generated ID number assigned to the most recent lease renewal offer.

 Rent Recurring Charges

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).RentRecurringCharges]

 Displays the total amount of rent recurring charges specified on the tenant's most recent lease renewal offer. Charge types that are designated as rent charges are specified for each property in the Rent Charge Type field on the property Other Information tile.

 Sign Date

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).SignDate]

 Displays the Lease Sign date of the tenant's most recent lease renewal offer.

 Start Date

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).StartDate]

 Displays the Lease Start date of the tenant's most recent lease renewal offer.

 Status

 [Tenant().Lease().RenewalOffer(Lease.LeaseRenewalOfferCount() - 1).Status]

 Displays the Renewal Status of the tenant's most recent lease renewal offer.
