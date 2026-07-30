# Receipts Breakdown (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Receipts-Breakdown.htm

The Receipts Breakdown report displays the charges to which tenant payments and prepayments were allocated during a date range. In addition, the bank deposits containing each payment displayed in the report are listed in a subreport to help reconcile real-world deposits with those in Rent Manager .

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Receipts Breakdown .

 For more information, refer to Control User Access .

 To view the Receipts Breakdown report, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Payments arrow_forward Receipts Breakdown .
The Reports: Receipts Breakdown page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Properties/Owners to Include

 Check each property or owner to be included in the report. Alternatively, select a property or owner Group . When the Owners tab is selected, results generate only for owners with active ownerships. If all selected owners currently do not have active ownerships, and Restrict by owner contract dates is selected, an error message displays stating that no reports were generated. For more information on establishing active ownerships, refer to Property Owners (Pop-Up) .

 More Information

 Only information related to the properties to which you have access displays. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Restrict by Owner Contract Dates

 This option becomes available when the Owner tab is selected.

 Check to display only data that is within the active contract dates for each of the selected owners, regardless of the date range . This option is useful if, for example, your contract with one owner is ending and another contract with a different owner is beginning.

 Option
 Description

 Checked

 The report filters to display only data within the selected owner or owners' active contract.

 For example, if the report is generated for 01/01/ 2026 – 12/31/ 2026 , and Owner A has an active contract from January to June of 2026 , the report displays only data at the properties owned by Owner A from January 2026 to June 2026 .

 Unchecked

 The report displays current data for any months included in the report date range regardless of owner contracts.

 Ignore Charge Allocations After the Report End Date

 Check to exclude any prepayments entered within the report's date range but applied to a charge after the report's To date. The report ignores any allocations that occur after the reporting period, and maintains the prepayment status of the payment in the report results.

 Sort Options

 Select one of the following options to determine how the report results are sorted within each property subheading:

 Option
 Description

 Account Number

 Receipts are sorted numerically by the tenant's system-generated ID number in ascending order (lowest to highest).

 Last Name

 Receipts are sorted alphabetically by the tenant's Last Name . Commercial tenants are sorted by Company Name .

 Unit

 Receipts are sorted alphanumerically by the tenant's associated Unit name. Tenants with no unit display first in the results.

 Unit Type

 Receipts are sorted alphanumerically by the tenant's Unit Type name. Tenants with no unit display first in the results.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Separation Method

 This option becomes available when the Properties tab is selected.

 Select one of the following options to determine how the report results are batched:

 Option
 Description

 Do not separate

 All selected properties are combined into a single report.

 Separate by Properties

 Generates a separate report for each selected property.

 Separate by Units

 Generates a separate report for each unit associated with the selected properties.

 Print on Legal Sized Paper

 If checked, the report is adjusted to fit on legal-sized paper (8.5 × 14 inches) which provides additional space for the report results. Otherwise, the report is sized to fit onto a standard, letter-sized sheet of 8.5 x 11 paper.

 Charge Type Order

 Move the charge types in the list to determine the order of the charge type columns. This list populates based on the properties or owners selected. Only charge types in use by the accounts leasing at the selected properties during the selected time frame display.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The report is organized with columns and rows of information based on the report options selected. Tenants are grouped together by their property names, which act as sub-headers. Each column is described below.

 Column
 Description

 Tenant

 The name of each tenant who made a payment during the Date Range .

 Acc. #

 The system-generated account ID number assigned to each tenant.

 Unit

 The name of the unit the tenant leases.

 Unit Type

 The category of unit the tenant leases.

 Charge Types

 The total amount of payments made on charges of each type by the tenant in the Date Range . There is a column for each charge type included in the report. The available charge types vary based on the property/owner selection.

 Prepayments that are allocated to future charges display with a plus sign (+) in front of the charge type. For example, if a prepayment is allocated to a future charge with the RC charge type, the column header displays RC+ for that payment.

 Total

 The sum of each tenant's payments during the Date Range .

 Property Totals

 The sum of all payments made on each charge type at the property during the Date Range .

 Property Counts: Tenant

 The number of tenants at the property who made payments during the Date Range .

 Property Counts: Unit

 The number of units at the property from which payments were received during the Date Range . This number may be different from the number of tenants if a tenant rents multiple units.

 Property Counts: Payment

 The number of separate payments made on each charge type at the property during the Date Range .

 Receipts Breakdown Summary Subreport

 The Receipts Breakdown (Summary) subreport displays statistical data about payment counts and amounts charged included on the report. The total amount of payments received during the Date Range displays at the bottom of the subreport.

 The following columns display on the subreport:

 Column
 Description

 Charge Type

 The names of each charge type included in the report.

 Prepayments that are allocated to future charges display with a plus sign (+) in front of the charge type. For example, if a prepayment is allocated to a future charge with the RC charge type, the column header displays RC+ for that payment.

 Description

 The optional description of each charge type.

 # of Tenants Charged

 The number of tenants who made at least one payment on a charge of each type during the Date Range .

 % of Tenants Charged

 The percentage of tenants who made at least one payment on a charge of each type during the Date Range .

 % of Total Amount

 The charge type’s percentage of the total amount of payments made in the report.

 Amount

 The sum of all payments made on charges associated with the charge type in the report. The total amount of payments made by tenants included in the report displays at the bottom.

 Receipts/Deposits Reconciliation Subreport

 The Receipts/Deposit Reconciliation subreport displays all bank deposits that contain payments included in the report.

 More Information

 Deposits made outside of the report's Date Range are also included in the subreport. For example, a tenant makes a payment on 11/28/ 2026 , and the report is generated for the month of November 2026 . If the deposit containing that tenant's payment was not deposited until December 2026 , it still displays in the subreport.

 The following columns display in the subreport:

 Column
 Description

 Deposit #

 The system-generated deposit number as displayed on the Bank Register page.

 Date

 The date on which the deposit was made.

 Bank Account

 The bank account to which the money was deposited.

 Total Deposit

 The total amount of the bank deposit.

 From Receipts

 The amount of the bank deposit that came from payments included in the report.

 Total Deposited

 The total dollar amount of payments included in the report that were deposited.

 Receipts not deposited when the report was run

 The amount of payments included in the report that are not deposited as of the report's generation.

 Other Deposits Subreport

 The Other Deposits subreport displays step 3 deposits made during the Date Range . A single deposit containing multiple linked chart accounts displays a separate line for each item chart account, which may result in the deposit displaying multiple times in the subreport.

 The following columns display in the subreport:

 Column
 Description

 Deposit #

 The system-generated deposit number as displayed on the Bank Register page.

 Date

 The date on which the step 3 deposit was made.

 Bank Account

 The bank account to which the money was deposited.

 Total Deposited

 The total dollar amount of the step 3 deposit.

 Chart Account

 The income chart account used to track the deposited income.

 Amount

 The amount allocated to the Item Chart Account for each step 3 deposit. The total dollar amount of all step 3 deposits made during the selected Date Range displays at the bottom.
