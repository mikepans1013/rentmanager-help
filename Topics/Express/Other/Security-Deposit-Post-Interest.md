# Post Security Deposit Interest

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Security-Deposit-Post-Interest.htm

Some state and municipal governments require that security deposits held for tenants accrue interest, which must be given to tenants when you refund security deposits. Rent Manager can track interest accrual on security deposits so you can easily return the amount required by your local jurisdictions. Some of your properties may not have the same interest rates due to their location, so it is important to know that this may affect how interest rates are posted.

 To calculate and return security deposit interest for tenants at a property, on the property's Interest Options for Security Deposits page, select Enable Interest .

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Post security deposit interest
 Enabled

 Allow to credit tenants
 Enabled

 Tenant transactions
 Add

 For more information, refer to Control User Access .

 More Information

 Prior to posting interest to your properties, you must first ensure tenants at the properties you are posting to have the correct security deposit type. For more information, refer to Add a Security Deposit Charge .

 Step 1: Select Properties

 To begin posting security deposit interest, do the following:

 -
 Go to arrow_forward Receivables arrow_forward General arrow_forward Post Security Deposit Interest .
The Post Security Deposit Interest page displays.

 -
 Select all properties for which you want to post security deposit interest.For a property to display in the field, on the property's Interest Options for Security Deposits pop-up, Enable Interest must be checked.

 -
 Click Select Tenants & Interest Options .

 Step 2: Select Interest Options

 This section determines how interest is calculated. By default, Rent Manager uses the options selected in system preferences or on the property's Interest Options for Security Deposits pop-up, if system preferences are overridden for that specific property. However, throughout the year, you may need to adjust how security deposit interest rates are calculated due to changes to your state laws. Rent Manager makes it easy for you to adjust these options by posting so that you only make changes when they are needed.

 To select different interest options for this posting, such as if this posting applies to a special rate or is one-time adjustment, do the following:

 -
 Check Override System Preference .

 -
 Choose one of the following Interest Calculation methods:

 Option
 Description

 Simple

 Tenants earn interest only on the held amount of a security deposit.

 Annual Compounding

 Tenants earn interest on both their security deposits and the interest already earned on those deposits. When calculating interest across more than one year, the interest is compounded on an annual basis using the Rate option selected.

 -
 Choose one of the following Disbursement Method options:

 Option
 Description

 Credit

 Allocates earned interest as a credit towards the charge type that you select in the Credit drop-down. The credit is allocated towards any open charges on the tenant's account.

 Apply to Security Deposit

 Adds the dollar amount of the earned interest to the held security deposit for the tenant. If a tenant has more than one type of security deposit charge on their account, the interest is applied proportionally among those charges.

 -
 Choose one of the following interest Rate calculation methods:

 Option
 Description

 Use rate table

 Uses the rate that corresponds with the current year as defined in system preferences.

 Use this rate

 Uses a custom interest rate percentage that you enter.

 -
 Enter the Post Date . Interest is calculated for the period between the Last Applied date of each interest posting and the Post Date .

 -
 To include only security deposits that are older than a specific date, enter a Had deposit prior to date.

 -
 Click Calculate .
The Select Tenants section displays the tenants who meet the selected criteria.

 Step 3: Select Tenants

 In this section, select all tenant accounts for which you want to post security deposit interest. By default, the options you selected in the Select Interest Options section apply to all available tenants. You can edit the Method , Disbursement , Credit , and Rate(%)  fields as needed for individual tenants in the list.

 The following columns display in the Select Tenants section. By default, some columns display only if added via .

 Default Column
 Description

 Property Short Name

 The short name of the property associated with the tenant's lease.

 Tenant Name

 The full name of the tenant.

 Unit

 The unit that the tenant leases.

 Last Applied

 The last date on which security deposit interest was posted for the tenant.

 If deposit interest has never been posted for this tenant, the first time you post interest Rent Manager bases the calculation on the following:

 -
 If the security deposit was received on or after the G/L Start Date established in system preferences, interest is calculated based on the date the security deposit was received.

 -
 If the security deposit was received before the G/L Start Date established in system preferences, Rent Manager compares the date the security deposit was received and the move in date. Whichever is the earlier of the two is used to calculate interest.

 For more information, refer to General Ledger Settings (System Preferences) .

 Deposit Held

 The total dollar amount of the security deposit held for the tenant.

 Interest

 The total dollar amount of interest that the tenant's security deposit has accrued since the last time interest was posted.

 Method

 How Rent Manager calculates earned interest for the tenant's security deposit.

 Disbursement

 How Rent Manager gives tenants the money they earn on their security deposits.

 Credit

 The charge type used to record the interest payment. If the Disbursement Method is Apply to Security Deposit , the charge type displays but does not impact the posting.

 Rate(%)

 The annualized rate at which interest is earned on the tenant's security deposit.

 Available Column

 Description

 Account #

 The system-generated identifier for the tenant account.

 Move In

 The date on which the tenant moved into the unit associated with the oldest lease on their account.

 Property Name

 The full name of the property associated with the tenant's lease.

 Step 4: Finish the Posting

 After tenants are selected, to finish posting security deposit interest, do the following:

 -
 If you want to post a transaction for tenants who didn't accrue security deposit interest this period, check Post Zero Interest .

 -
 Click Post .
The interest is posted to tenant accounts using the selected Disbursement Method , and the Print pop-up displays.

 -
 On the Print pop-up, select Yes to create a Security Deposit Interest Posting report, or select No to proceed without printing.
The accrued security deposit interest is posted to the selected tenant accounts.
