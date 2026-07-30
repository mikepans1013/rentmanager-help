# Post Loans Receivable Late Fees

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Loans-Receivable-Late-Fees-Post.htm

The Post Loans Receivable Late Fees page allows you to add late fee charges to all applicable tenants or prospects for existing loans. Additionally, you can use Task Automation to reduce the time needed to manage loans receivable late fees and the occurrence of errors from manually entering information like dates and amounts. The ability to schedule when the automation runs ensures that your postings are timely and consistent.

 Related Preferences

 To set up automation schedules, you must have the appropriate automation enabled in system preferences. For more information, refer to Task Automation (System Preferences) .

 Additionally, before you can post loans receivable late fees, you may be required to print a report and/or generate letters for the tenants who are about to be charged loan late fees. These requirements are defined in Posting Late Fees (System Preferences) .

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Post late fees
 Enabled

 Loans Receivable
 Post Loans Receivable
 Enabled

 For more information, refer to Control User Access .

 Step 1: Filter Loans

 To filter the loans to post late fees, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Loans Receivable arrow_forward Post Loans Receivable Late Fees .

 -
 In the Filters section, establish the properties, charge types, and delinquency settings for the tenants and prospects that should be included in this posting. Each field is described below.

 Field
 Description

 As of

 The date examined for all borrowers that determines charge delinquency and length of delinquency.

 Charge Types

 The charge type(s) to be examined for delinquent amounts on borrower accounts.

 Current tenants only

 Examines only the charges associated with leases that are considered active on the specified As of date. Any leases, including those on prospect accounts, that do not have a move-in date or that have a past move-out date are excluded when this option is checked.

 Days Delinquent

 The range, in days, a charge must be late to be included in the posting. The range is based on the As of date. For example, if you are posting late fees with the As of date of 3/11/ 2026 and enter 1 to 10 in these fields, unpaid charges that were posted between 3/1/ 2026 (ten days delinquent) and 3/10/ 2026 (one day delinquent) are included in the late fee calculation.

 Delinquent Amount

 The range in dollars to include while examining a borrower's delinquent balance based on the borrower's delinquent balance being Greater Than or Less Than the specified value. For example, if you select Greater Than and enter 100 , only borrowers with a delinquent balance greater than $100 are included in the late fee posting. If you don't want to filter by amount, you have the option to select Don't Filter .

 Last charge only

 The most recent open charge of the selected Charge Types on the tenant's account are examined by Rent Manager when determining if a tenant is delinquent.

 Properties

 The properties whose tenants and prospects are included in the late fee posting. Alternatively, select a property Group from the drop-down list.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Step 2: Post Late Fees

 After filtering the loans, the listing updates with the applicable tenants and prospects.

 To update and post late fees, do the following:

 -
 In the Late Fee field at the top of the page, specify if the loans receivable late fee should be a percent of the Delinquent amount or a fixed amount.

 Option
 Description

 Amount

 A single flat late fee to delinquent borrowers.

 Percent

 The late fee is calculated as a percentage of the delinquent balance (e.g., entering 10 sets the late fee to 10 percent of the delinquent balance).

 -
 In the list of populated borrowers, check each borrower to be included in the loan late fee posting. The following columns are available in this section:

 Column
 Description

 Account #

 The system-generated account number for the tenant or prospect.

 Balance

 The borrower's current unpaid balance.

 Delinquent

 The borrower's current delinquent amount.

 Late Fee

 The charge amount to post to the borrower, calculated from the Percent or flat Amount specified in the Late Fee field.

 Property

 The name of the property associated with the borrower's loan.

 Reference

 The loan number Rent Manager generated when the loan was created or the manually entered loan number.

 Tenant

 The name of the tenant or prospect on the loan.

 Unit

 The name of the unit associated with the borrower's loan.

 -
 To create a posting automation that includes late fees for the selected loans, select Automate . For more information, please refer to Add a Loans Receivable Late Fee Automation .

 Related Privileges

 Group
 Privilege
 Column

 Task Automation
 Automate post loan late fees
 Add, View

 For more information, refer to Control User Access .

 Additionally, in order to automate loan postings, the task automation workflow for Loans must be enabled in system preferences. For more information, refer to Task Automation (System Preferences) .

 -
 Click Post Late Fees .
The Loan Late Fee Options pop-up displays.

 -
 Enter information in the following fields:

 Field
 Description

 Fee Type

 The charge type used for the late fee transaction(s).

 Post Date

 The transaction date of the late fee charge(s) posted to each tenant or prospect account.

 Comment

 An additional note to apply to all late fees that displays on each tenant or prospect's View Transactions pop-up (e.g., March Late Fees ).

 Add history item for each charge

 Related Privileges

 Group
 Privilege
 Column

 History
 Tenant History/Notes
 Add

 Prospect History/Notes
 Add

 For more information, refer to Control User Access .

 Create a history/note item on each tenant or prospect account, documenting they were charged late fees.

 -
 Click Post .
The loan late fees are posted to the selected borrower(s).
