# ePay Report - Tenant (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/ePay-Report-Tenant.htm

The ePay Report - Tenant report displays a summary of all tenant ePay transactions for selected ePay batches for the dates in one combined list. At the end of the report, the transactions are divided into subreports that include Totals by Response , Totals by Account Type , Totals by Property , and Totals by Bank .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to ePay Report - Tenant .

 For more information, refer to Control User Access .

 To view the ePay Report - Tenant report, do the following:

 -
 Go to arrow_forward Banking arrow_forward ePay arrow_forward ePay Report - Tenant .
The Reports: ePay Report - Tenant page displays.

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

 Sort Options

 Select one of the following options to determine how the report results are organized.

 Multiple entries of the same tenant account may display if they have multiple ePay batch transactions. Transactions with matching sort criteria are further sorted numerically by Batch number in ascending order (lowest to highest).

 Option
 Description

 Account Type

 ePay transactions are sorted alphabetically by the Type of account used for each ePay payment ( CHK , VISA , and so on).

 Amount

 ePay transactions are sorted numerically by each payment Amount in ascending order (least to greatest).

 Batch

 ePay transactions are sorted numerically by ePay Batch number in ascending order (lowest to highest).

 Date

 ePay transactions are sorted chronologically by the date on which the ePay batch was deposited in Rent Manager in ascending order (oldest to newest).

 Last Name, First Name

 ePay transactions are sorted alphanumerically by the tenant's Last Name . Accounts with the same last name are further sorted by First Name .

 Property

 ePay transactions are sorted alphanumerically by Property name.

 Result

 ePay transactions are sorted by the Result returned by Zego ePay when the payment was made. All Approved transactions display first, followed by all Declined transactions.

 Transaction ID

 ePay transactions are sorted numerically by the ePay Transaction ID in ascending order (lowest to highest).

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Batches to Include

 Check each recurring ePay batch that occurred at the applicable properties within the Date Range to be included in the report results.

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

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Tenant

 The first and last name of the tenant.

 Date

 The date on which the ePay batch was deposited in Rent Manager .

 Bank

 The name of the bank account associated with the ePay transaction.

 Result

 The outcome of the transaction. Each result is described below.

 Approved

 The ePay transaction was successfully sent to Zego for processing.

 Declined

 The ePay transaction could not be processed due to an issue with the tenant's account (e.g., insufficient funds).

 Refunds

 The ePay transaction was reversed by a user in Rent Manager .

 Unknown

 The ePay transaction's status is unknown because of an interruption between Rent Manager and Zego provider.

 Type

 The payment method for the transaction.

 Response ID

 The Zego -generated confirmation number for the transaction.

 Exp. Date

 The expiration date for the payment type, if applicable. The field is blank for payment types that do not require an expiration date.

 Property

 The name of the property at which the tenant is leasing.

 Amount

 The total amount charged to the tenant.

 Totals by Response Subreport

 The Total by Response subreport displays the total dollar amount of ePay payments included in the report, separated by the Result .

 Totals by Account Type Subreport

 The Total by Account Type subreport displays the total dollar amount of ePay payments included in the report, separated by the payment type (e.g., CHK , VISA ).

 Totals by Property Subreport

 The Total by Property subreport displays the total dollar amount of ePay payments included in the report, separated by the Property .

 Totals by Bank Subreport

 The Total by Bank subreport displays the total dollar amount of ePay payments included in the report, separated by the Bank account to which the payment was deposited.
