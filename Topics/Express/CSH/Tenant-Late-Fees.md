# Tenant Late Fees (Pop-Up)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Tenant-Late-Fees.htm

The tenant Late Fees pop-up lets you enable special late fees for a selected tenant that differ from the fees applied to the other tenants of the associated property. For example, you may have tenants with leases that require them to abide by a separate late fee policy. Enabling tenant-specific late fees allows you to make these changes without affecting other tenants at the same property.

 There are two different types of late fees you can enable: posted late fees, and daily late fees. Posted late fees, which is comprised of Fixed Amount and Percent late fees, are applied to tenant accounts when you post late fees. Per Day late fees are calculated on a daily basis and automatically posted to a tenant when payment is finally received on a rent charge accruing a per day late fee.

 More Information

 These late fee settings applicable only to the tenant account but if most tenants have the same late fee structure, you can set up late fees at the property level. For more information, refer to Property Late Fees (Pop-Up) .

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 For more information, refer to Control User Access .

 To override the property late fees for an individual tenant, go to   arrow_forward Rental Info arrow_forward General arrow_forward Tenants arrow_forward and select a tenant from the list. Then, on the action bar on the right, click   arrow_forward   Manage Late Fees . To make adjustments to the setup, check Override Property Late Charge .

 Posted Late Fees

 In the Posted Late Fees section, you can enable a flat fee and/or percentage fee that posts to the tenant account whenever late fees are posted.

 The fields below are available in this section.

 Field
 Description

 Fixed Amount

 Apply a flat fee to any late payment. In the adjacent field, enter the amount of the single flat fee to apply to the tenant's delinquent charges. Check On Rent Only to apply the flat fee to delinquent charges with a Rent Charge Type established on the property's details page.

 Percent

 Apply a late fee that is a percent of the total delinquent charges. In the adjacent field, enter the percentage of the remaining balance on an outstanding charge to be used as a late fee.

 Check On Rent Only to apply a percentage-based late fee only to delinquent rent charges. Or, check Full Charge Amount Only to calculate the percentage against the full charge amount and not the remaining balance.

 Scripted Formula

 Additionally, apply a late fee amount based on the value of the script or calculation entered. If you enter an equation as part of your script, the field applies the value of the calculation. For more information, refer to Scripting .

 Per Day Options

 In the Per Day Options section, if Per Day  is checked, the tenant has a daily late fee structure enabled. These late fees are calculated on a daily basis and automatically post to a tenant's account when payment is finally received on a rent charge.

 The fields below are available in this section.

 Field
 Description

 Amount

 The dollar amount to charge the tenant each day that they are delinquent.

 Minimum Balance

 The lowest delinquent account balance at which a tenant accrues late fees. For example, if 100 is entered in this field, tenants with less than $100 in unpaid charges are not charged per day late fees.

 Late Fee Limit

 The maximum dollar amount that a tenant can be charged for daily late fees.

 One Month Only

 Accrue daily late fees for a maximum of one month.

 Exclude Weekends

 Does not accrue daily late fees on weekends.

 Exclude Holidays

 Does not accrue daily late fees on the holidays defined in the General Options section of system preferences. For more information, refer to Default Holidays (System Preferences) .

 More Information

 If holidays have been defined on the property Late Fees tab in Rent Manager 12 , the system preferences are overridden.

 Grace Period

 Prevents late fee charges from accruing until a set number of days pass.

 Days

 The number of days after a charge's due date that daily late fees begin to accumulate. For example, if rent charges are due on the first of the month and you enter 3 days in this field, per day late charges do not accrue until the fifth of the month. The first of the month is not counted as a day in the grace period since payment is not considered late until the second of the month.

 Once the grace period has elapsed, fees are calculated using the original date that the delinquent charge was due unless Non Retroactive is selected.

 Non Retroactive

 Begin calculating daily late fees from the end of the grace period instead of the original due date. For example, if rent charges are due on the first of the month and you enter 3 in the Days field, per day late charges do not accrue until the fifth of the month. If the tenant pays their delinquent balance and late fees on the fifth, they are charged per day late fees for only one day.

 Exclude Weekends

 Do not accrue daily late fees on weekends. Enabling this option may increase the number of days in the grace period, depending on the original due date for the delinquent charge. Depending on the original due date for a delinquent charge, enabling this option can sometimes increase the number of days in the grace period.

 Exclude Holidays

 Do not accrue daily late fees on the holidays defined in the General Options section of system preferences. Depending on the original due date for a delinquent charge, enabling this option can sometimes increase the number of days in the grace period.

 Use Due Date On Invoices

 When enabled, daily late fees are calculated from the Due Date field entered on each invoice. If you manually edit that invoice's due date before payment, the late fees recalculate to match. When left unchecked, daily late fees are calculated from the Due Day on the tenant's General tile instead.

 Related Preferences

 To create invoices when posting recurring charges or late fees, you must have the Create invoices when posting recurring charges option enabled in system preferences. For more information, refer to Invoices/Estimates (System Preferences) .
