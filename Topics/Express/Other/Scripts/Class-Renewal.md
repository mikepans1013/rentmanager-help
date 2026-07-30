# Renewal Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Renewal.htm

This class is preceded by the Lease class and provides functions for retrieving data about lease renewals.

 Commercial Recoverable Expenses (CRE) functions pull data from a commercial tenant's Lease Details window in Rent Manager 12 , while the remaining functions pull data from the tenant's details page.

 Example

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).LeaseTerm]

 Result

 Displays the Lease Term of the tenant's most recent renewal.

 Example

 [Tenant().Lease().Renewal(1).EndDate]

 Result

 Displays the Lease End date of the first renewal (after the original).

 Class Parameter

 A single parameter should be specified for this class: an index.

 Index

 An index allows you to return information about a specific renewal on an account by using a number to identify each renewal listed on the specific lease. For example, if there are three lease renewals listed on a tenant’s account, they are referenced by indexes 0, 1, and 2. You can specify which lease renewal you want Rent Manager to return information about by referencing an index in your script. If no index is specified, Rent Manager defaults to an index of 0, which represents the renewal of the original lease.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Lease.LeaseRenewalCount() - 1) . This allows you to return data for the most recent lease renewal created for the tenant.

 [Tenant().Lease().Renewal.SignDate]

 Displays the oldest Lease Sign date of the tenant's first lease.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).SignDate]

 Displays the Lease Sign date on the tenant's most recent renewal of their fist lease.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 The following examples reflect the syntax that displays when you double-click the functions in the Insertable Fields section.

 Function
 Description

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

 Displays the total number of escalations on the Charge Escalations tab of the commercial tenant's most recent commercial lease renewal in Rent Manager 12 .

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

 End Date

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).EndDate]

 Displays the Lease End date of the tenant's most recent lease renewal.

 Lease Term

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).LeaseTerm]

 Displays the Lease Term selection for the most recent lease renewal on the tenant's View Leases pop-up.

 Renewal ID

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).RenewalID]

 Displays the system-generated renewal ID of the tenant's most recent lease renewal.

 Sign Date

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).SignDate]

 Displays the Lease Sign date of the tenant's most recent lease renewal.

 Start Date

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).StartDate]

 Displays the Lease Start date of the tenant's most recent lease renewal.

 User Defined Field

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).UserDefinedField()]

 Displays the value of the lease-type user defined field (UDF) for the most recent lease renewal. The Name of the desired UDF must be specified as a parameter. Some examples are shown below.

 [Tenant().Lease.Renewal(Lease.LeaseRenewalCount() - 1).UserDefinedField("Lawncare Included")]

 Displays the value for the Lawncare Included noncommercial user defined field of the tenant's most recent lease renewal.

 [Lease.Renewal(Lease.LeaseRenewalCount() - 1).CommercialUserDefinedField("Sunday Closure")]

 Displays the value for the Sunday Closure commercial user defined field of the tenant's most recent lease renewal.
