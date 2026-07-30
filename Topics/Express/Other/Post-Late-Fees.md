# Post Late Fees

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Post-Late-Fees.htm

In Rent Manager , late fees can be calculated and posted as one-time charges that are applied to tenants when they fail to pay other charges—such as rent or utility fees—in a timely manner. On the Post Late Fees page, you can establish the criteria for delinquency, including the unpaid dollar amount and the number of days late, and charge a late fee to the tenants based on those values.

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Post late fees
 Enabled

 For more information, refer to Control User Access .

 To manually post late fees, go to arrow_forward Receivables arrow_forward Recurring Charges arrow_forward Post Late Fees .

 Step 1: Filter Accounts

 On the left side of the page, establish the properties, charge types, and delinquency settings for the tenants that should be included in this posting. Each field is described below.

 Field
 Description

 Properties

 The properties whose tenants are included in the late fee posting. Alternatively, select a Property Group from the drop-down list.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Charge Types

 The charge type(s) to be examined for delinquent amounts on tenant accounts.

 Delinquent Amount

 The range in dollars to include while examining a tenant's delinquent balance based on the tenant's delinquent balance being greater than ( > ) or less than ( < ) the specified value. For example, if you select > and enter 100 , only tenants with a delinquent balance greater than $100 are included in the late fee posting.

 Days Delinquent

 The range, in days, a charge must be late, based on the As of date, to be included. For example, if you are posting late fees with the As of date of 3/11/ 2026 and enter 1 to 10 in these fields, unpaid charges that were posted between 3/1/ 2026 (ten days delinquent) and 3/10/ 2026 (one day delinquent) are included in the late fee calculation.

 As of

 The date examined for all tenants that determines charge delinquency and length of delinquency.

 Active leases only

 Examines only the charges associated with leases that are considered active on the specified As of date. Any leases, including those on prospect accounts, that do not have a move-in date or that have a past move-out date are excluded when this option is checked.

 Last charge only

 The most recent open charge of the selected Charge Types on the tenant's account are examined by Rent Manager when determining if a tenant is delinquent.

 User Defined Fields

 A user defined field (UDF) to filter the results that match the UDF value. Depending on the UDF field Type , enter or select the appropriate value in the field that populates below.

 Step 2: Select Accounts

 In the center of the page, select each tenant account for whom you are posting a late fee. This list populates only with tenants who meet all previously established filter criteria. Each column is described below.

 Column
 Description

 Account #

 The system-generated ID for the tenant account.

 Delinquent

 The remaining dollar amount of the delinquent charge(s) after any existing payments. For example, if a tenant has a rent charge of $1,500 and already paid $500 toward that charge before they were delinquent, this column would display 1000 .

 Full Charge

 The total dollar amount of the delinquent charge(s) before any payments are made.

 Late Fee

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Change late fees
 Enabled

 For more information, refer to Control User Access .

 The total dollar amount of the tenant's late fee. By default, a value automatically populates based on the tenant- or property-level late fees setup, but each tenant's fee can also be manually overridden by entering a new value in this field. For more information, refer to Tenant Late Fees (Pop-Up) and Property Late Fees (Pop-Up) .

 Property

 The property that the tenant's lease is associated with.

 Tenant

 The full name or company name of the tenant.

 Unit

 The unit that the delinquent charge is associated with.

 More Information

 You can send letters to the tenants you selected by going to the action menu on the right and clicking . This lets you select the letter template you want to send. The letter template opens in the Compose Letter pop-up, where you can make any necessary changes to the letter's body and use the action bar to select how you want to send the letters.

 Step 3: Override Defaults

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Change late fees
 Enabled

 For more information, refer to Control User Access .

 To change the late fee settings for all tenants in a specific posting, check Override late fee defaults and select an option to establish fee calculations. Each option is described below.

 Option
 Description

 Late fee percent

 Calculate late fees as a percent of the remaining delinquent balance. To calculate late fees as a percent of the whole amount for each delinquent charge instead of only the remaining delinquent balance, check Apply late fee percent to full charge amount .

 Late fee amount

 Use a single flat fee for all late fee charges.

 Scripted Formula

 Calculate late fees using an equation built with Rent Manager scripting. For more information, refer to Scripting .

 Step 4: Post Late Fees

 With all tenants selected and late fee settings established, complete the late fee posting by entering information into the fields described below.

 Field
 Description

 Post Date

 The transaction date of the late fee charge(s) posted to each tenant account.

 Fee Type

 The charge type used for the late fee transaction(s).

 Comment

 An additional note to apply to all late fees that displays on each tenant's View Transactions pop-up (e.g., March Late Fees ).

 Add history item for each charge

 Create a history/note item on each tenant account, documenting they were charged late fees.

 When finished, click Post Late Fees to apply late fees to the applicable tenant accounts.
