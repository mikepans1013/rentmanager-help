# Insurance Class (Scripting)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Insurance.htm

This class is preceded by the Lease class and provides functions for retrieving insurance information for tenant leases as well as manufactured home owners. You can view this information by going to the tenant's profile, and on the Leases tile, click and select a lease to view the lease's details. The insurance information is in the Insurance section of the lease's details.

 More Information

 In order for these scripting functions to display results, you must have the upgraded insurance integration from LeaseTrack . For more information, refer to LeaseTrack Insurance .

 Example

 [Tenant().Lease(1).Insurance().EndDate]

 Result

 Displays the insurance End Date associated with the tenant's first additional lease.

 Class Parameter

 A single, optional parameter can be specified for this class: an index.

 Index

 An index allows you to return information about a specific insurance policy on an account by using a number to identify each policy listed. For example, if there are three insurance policies listed on a tenant’s account, they are referenced by indexes 0, 1, and 2. You can specify which policy you want Rent Manager to return information about by referencing an index in your script. If no index is specified, Rent Manager defaults to an index of 0, which represents the first policy in the list.

 [Tenant().Lease().Insurance(1).AdditionalInsured]

 Displays the names of the Additional Insured individuals on the tenant's first additional insurance policy.

 [Tenant().Lease().Insurance(2).Insurer]

 Displays the name of the Insurer on the tenant's second additional insurance policy.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Function
 Description

 Additional Insured

 [Tenant().Lease().Insurance().AdditionalInsured]

 Displays a comma separated list containing the names entered as the Additional Insured on the insurance policy.

 End Date

 [Tenant()Lease().Insurance().EndDate]

 Displays the End Date associated with the policy on the tenant's primary lease in the m/d/yyyy format.

 Has Insurance

 [Tenant().Lease().Insurance().HasInsurance]

 If the tenant has an insurance policy associated with their account, the function displays True ; otherwise, displays False .

 Insurance Policy Count

 [Tenant().Lease().Insurance().InsurancePolicyCount]

 Displays the tenant's total number of active policies and policies with start dates that occur in the future.

 Insurer

 [Tenant().Lease().Insurance().Insurer]

 Displays the name of the insurance provider associated with the policy on the tenant's primary lease.

 Start Date

 [Tenant().Lease().Insurance().StartDate]

 Displays the Start Date associated with the policy on the tenant's primary lease in the m/d/yyyy format.

 Type

 [Tenant().Lease().Insurance().Type]

 Displays the policy type ( Master Policy or HO4 ) associated with the tenant's primary lease.
