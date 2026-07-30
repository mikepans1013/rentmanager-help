# ePay Breakdown (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/ePay-Breakdown.htm

The ePay Breakdown report displays ePay transactions of selected Zego ePay batches divided by date and account type for tenants, owners, and vendors. Additionally, this report can be used for bank reconciliations when you need to review ePay  payments that occurred during the date range.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Run accounting reports
 Enabled

 Additionally, on the Reports tab, you must have access to ePay Breakdown .

 For more information, refer to Control User Access .

 To view the ePay Breakdown report, do the following:

 -
 Go to  arrow_forward Banking arrow_forward ePay arrow_forward ePay Breakdown .
The Reports: ePay Breakdown page displays.

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

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Batches to Include

 Check each recurring ePay batch that occurred at the applicable properties within the Date Range to be included in the report results.

 Restrict by Owner Contract Dates

 This option becomes available when the Owner tab is selected.

 Check to display only data that is within the active contract dates for each of the selected owners, regardless of the date. This option is useful if, for example, your contract with one owner is ending and another contract with a different owner is beginning.

 Option
 Description

 Checked

 The report filters to display only data within the selected owner or owners' active contract.

 For example, if the report is generated for 12/31/ 2026 , and Owner A has an active contract from January to June of 2026 , the report displays only data at the properties owned by Owner A from January 2026 to June 2026 .

 Unchecked

 The report displays current data for any months included in the report date range regardless of owner contracts.

 Sort Options

 Select one of the following options to determine how the report results are sorted. If any owners display in the report results, they display first in the list and are sorted alphabetically by the owner Name .

 Option
 Description

 Last Name, First Name

 ePay transactions are sorted alphabetically by the tenant or prospect account's Last Name . Accounts with the same last name are further sorted by First Name .

 Batch

 ePay transactions are sorted numerically by ePay Batch number in ascending order (lowest to highest).

 Date

 ePay transactions are sorted chronologically by the date on which the ePay batch was deposited in Rent Manager in ascending order (oldest to newest).

 Amount

 ePay transactions are sorted numerically by payment amount in ascending order (least to greatest).

 Property

 ePay transactions are sorted alphanumerically by Property name.

 Result

 ePay transactions are sorted by the Result returned by Zego ePay when the payment was made. All Declined transactions display first, followed by all Approved transactions.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 More Information

 If the Restrict by owner contract dates report option is checked and the Date Range begins before and/or ends after the active owner contract, the report header displays only the dates where the active owner contract and the Date Range overlap. Filtered results display an asterisk (*) after the Date Range .

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Tenant

 The full name of the recipient.

 Batch

 The batch number associated with the transaction as it displays on the Batches to Include report option.

 Bank

 The bank associated with the ePay transaction.

 Result

 The transaction processing outcome, all of which are described below.

 Approved

 The ePay transactions that result in debiting the recipient’s’ account and deposits the funds into your bank account.

 Declined

 The ePay transactions that result in the recipient’s account unable to be charged (e.g., due to insufficient funds).

 Refunds

 The ePay transactions that were reversed.

 Unknown

 The ePay transactions whose status is unknown because of an interruption between Rent Manager and your ePay provider.

 Response ID

 The ID number generated by Zego , which Zego support may request.

 Exp. Date

 The expiration date for the payment type. If the payment type doesn't require an expiration date, the column displays blank.

 Property

 The name of the property associated with the recipient.

 Credits

 The total amount, if any, credited to the recipient.

 Payments

 The total amount, if any, the recipient paid.
