# Show a Rent Concession Credit as Part of Loss to Lease

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/GPR-Set-Rent-Concession-as-Loss-to-Lease.htm

Loss to lease calculates the amount of possible income lost or gained for an occupied unit during a specified reporting period. One of the factors in the loss to lease calculation is the rent charge types defined for the property.

 On occasion, you may choose to give a concession credit to a tenant allocated towards their rent. To set up rent concessions to be included in loss to lease, you must create a charge type for the rent concession credit and assign that charge type to the property's Rent Charge Types . This allows you to accurately track the rent concession credit as part of the loss to lease on the Summary Rent Roll report or when posting gross potential rent (GPR).

 Warning

 Please speak with your accountant about the financial implications to ensure this is the best course of action for your business.

 Create a Charge Type

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Charge types
 Add, View

 For more information, refer to Control User Access .

 To create a charge type for rent concessions, do the following:

 -
 Go to arrow_forward Accounting arrow_forward General arrow_forward Charge Types .
The Charge Types page displays.

 -
 Click Add Charge Type .
The Add Charge Type pop-up displays.

 -
 Enter information in the required fields. For more information, refer to Add a Charge Type .

 More Information

 When selecting a Chart Account , it is important to consider you company's accounting method.

 In cash basis accounting, the charge type is typically linked to an income account. If linked to an income account, the concession credit offsets or pays a charge.

 In accrual basis accounting, the charge type is typically linked to an expense account. If linked to an expense account, the concession credit reflects as an adjustment to net income after being applied to a charge.

 If you do not have an existing general ledger (GL) account to record concession credits to, you can create one as needed. For more information, refer to Add a General Ledger Account .

 -
 Click Save & Close .

 Add the Charge Type to Property's Rent Charges

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Edit

 For more information, refer to Control User Access .

 Once the charge type for the concession is created, it must be assigned to a property's Rent Charge Types . To add the charge type to the property, do the following:

 -
 Go to   arrow_forward Rental Info arrow_forward Properties and select the relevant property.
The property's details page displays.

 -
 On the Other Information tile, in the Rent Charge Types drop-down list, select the rent concession charge type.

 -
 Click Save .
Concessions linked to the charge type are subtracted from loss to lease calculations.

 Add the Concession Credit to Tenant

 With the concession charge type added to the property, credits can be assigned to tenants at the property. You can add a credit from the tenant's Transactions tile by clicking Add Charge . For more information, refer to Add a Credit .

 Next Steps

 After adding concession credits to your tenants, you can use the tools below to assist with tracking and recording the concessions' financial impact.

 Task
 Description

 Run Summary Rent Roll

 The Loss to Lease column in the Summary Rent Roll is normally calculated as Market Rent - Charged Rent - Vacancy Loss . After adding the concession charge type to the property's rent charge types, Loss to Lease is calculated as Market Rent - (Charged Rent - Concession) - Vacancy Loss .

 For example, if you have a rent charge of $700, concession credit of $350, market rent of $725, and $0 vacancy loss, the loss to lease would be $375 calculated as $725 - ($700 - $350) - $0 .

 For more information, refer to Summary Rent Roll (Report) .

 Post GPR

 When GPR is posted, Rent Manager creates a journal entry that reduces the rental income general ledger (GL) account to $0 and then adjusts other designated income GL accounts, including loss to lease. For more information, refer to Post Gross Potential Rent (GPR) .

 The decision of which GL account you link your rent concession charge type to has implications for how loss to lease is calculated and whether those calculations match the Summary Rent Roll report's. If you link your rent concessions charge type to the GL income account designated for Rental Income , the debit to the Loss to Lease account matches the Loss to Lease amount on the Summary Rent Roll . Otherwise, if the rent concession charge type is linked to any other account, the loss to lease results do not match.
