# Owner Activity (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Owner-Activity.htm

The Owner Activity report displays payments received and expenses paid on behalf of an owner. Additionally, this report includes breakdowns of how management fees and owner distribution payments were calculated, displaying income and charges on which standard management fees were collected (excluding pass-throughs) and amounts held for security deposits, reserve amounts, and/or excluded GL accounts. The Owner Activity report is a supplement to the Owner Statement that is used to show how all transaction activity over the specified date range factors into that statement.

 More Information

 This report is intended for use with Standard management fee calculations. If you are using an Advanced management fee structure, the Management Fee Breakdown section may not have data.

 Select the Exclusion Options of Management Fee Breakdown and Distribution Breakdown in the report options when generating the Owner Activity for Advanced management fee structures.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Owner Activity .

 For more information, refer to Control User Access .

 To view the Owner Activity report, do the following:

 -
 Go to arrow_forward Owners arrow_forward Banking arrow_forward Owner Activity .
The Reports: Owner Activity page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Owners to Include

 Select each owner or an owner Group to be included in the report.

 More Information

 Only information related to the properties to which you have access displays. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Inactive Owners to include owners that are no longer active.

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Run Properties Separately

 Check to generate a separate report for each property for the selected owners. Otherwise, all selected owners' properties are combined into a single report per owner.

 Wrap Text in Comment Column

 Check to display the entire comment for each entry in the Checks section of the report results. Otherwise, if a comment is longer than the allotted space, only part of the comment displays in the report.

 Restrict by Owner Contract Dates

 Check to display only data that is within the active contract dates for each of the selected owners, regardless of the date range . This option is useful if, for example, your contract with one owner is ending and another contract with a different owner is beginning.

 Option
 Description

 Checked

 The report filters to display only data within the selected owner or owners' active contract.

 For example, if the report is generated for 01/01/ 2026 – 12/31/ 2026 , and Owner A has an active contract from January to June of 2026 , the report displays only data at the properties owned by Owner A from January 2026 to June 2026 .

 Unchecked

 The report displays current data for any months included in the report date range regardless of owner contracts.

 Exclusion Options

 These options control what information does and does not display in the report. Select as many or as few of these options as desired.

 Option
 Description

 Exclude Mailing Header

 Removes the name, address, and contact information of your management company from the report. The owner’s name, address, and phone number are also removed from the report.

 Exclude Phone Number

 Removes only the owner's phone number from the mailing header of the report.

 Exclude Vendors

 Hides vendor names in the Comment column for each expense that is linked to a vendor.

 Exclude Management Fee Breakdown

 Removes the Management Fee Breakdown section from the report.

 If you use advanced management fees, this option should remain unchecked so that the Management Fee Breakdown section displays on the report.

 If this option is selected, the option to Show Detailed Management Fees becomes unavailable.

 Exclude Distribution Breakdown

 Removes the Distribution Breakdown section from the report.

 If you use advanced management fees, this option should remain unchecked so that the Distribution Breakdown section displays on the report.

 Show Detailed

 By default, charge type account totals in the report results are balances based on the transaction activity during the date range. You can enable these options to display each transaction individually, instead of the balance, for received payments or management fees.

 Check each option you wish to include in the report.

 Option
 Description

 Payments Received

 Check to show a line item for each transaction in the Payments Received section of the report. Transactions are ordered by the charge date (oldest to most recent), and then the date they were paid (most recent to oldest).

 The following columns display for each transaction:

 Unit

 The name of the unit associated with the charge.

 Type

 The Description as entered on the charge type associated with the charge.

 Date Charged

 The post date of the charge.

 Amount Charged
 The total dollar amount of the charge.

 Date Paid

 The date the payment was received.

 Amount Paid

 The dollar amount of the payment.

 Management Fee Breakdown

 Check to show a line item for each transaction in the Management Fee Breakdown section of the report. Transactions are ordered by the charge date (oldest to most recent), and then the date they were paid (most recent to oldest).

 The Management Fee Breakdown section is broken into smaller sections by date (oldest to most recent) and property, displayed in the subsection heading. Below the date and property, the Description of the associated charge type and the management fee percentage of the associated charges paid to the management company display.

 More Information

 In the Exclusion Options report option, if Management Fee Breakdown is checked, this option is unavailable.

 If the Management Fee Breakdown section does not display in the report, then there are no applicable management fee transactions for that owner during the date range.

 The following columns display for each transaction:

 Unit

 The name of the unit associated with the charge.

 Date Charged

 The post date of the charge.

 Amount Charged

 The total dollar amount of the charge.

 Date Paid

 The date the payment was received.

 Amount Paid

 The dollar amount allocated to the payment.

 Fee Amount

 The calculated amount of the payment that is paid to the management company as determined by the property's management fee setup.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Mailing Header

 This section displays your management company’s name, address, and phone number in the top-left corner, if not excluded in the report options. Underneath that, the owner’s name and address is displayed. If the Phone Number option in the Show Details section of the report options is unchecked, the owner’s phone number also displays.

 Payments Received

 This section displays the charge types to which payments are allocated for the specified property or portfolio. The amounts displayed are payments that were allocated within the report date range.

 More Information

 The following items are always excluded from this report:

 -
 Allocations to charges that are designated as pass-throughs (except when using an Advanced fee structure; pass-through transactions are displayed in the Payments Received and Checks sections).

 -
 Prepayments, where the allocated charge is not within the report's date range.

 -
 Credits (negative charges) applied to charges.

 Checks

 This section displays check transactions at the Default Bank of the property as well as credit card transactions during the report date range.

 Related Privileges

 To drill down on the check information, in the Banks/Checks Privilege Group , the Checks privilege to View is required.

 The following columns display in this section:

 Column
 Description

 Date

 The date of the check or credit card transaction.

 Reference

 The check number, or CC for a credit card transaction.

 Type

 The Description of the charge type.

 Comment

 The text entered in the Memo field of the check, or the Comment field of a credit card transaction.

 Amount

 The amount of the transaction.

 Management Fee Breakdown

 This section displays the fee calculations that were performed before each management fee check was generated from the checks that are dated during the report date range. Checks are ordered chronologically, and line items for each check are grouped below the date. If multiple properties are expensed on the check, line items for those properties are grouped together.

 The following columns display in this section:

 Column
 Description

 Posting

 The date of the management fee check with each charge type below. Type names are followed by the percentage amount due to the management company.

 Charge Amount

 The total dollar amount posted for the specified charge type during the report date range.

 Payment Amount

 The total dollar amount of payments allocated to the specified charge type during the report date range.

 Fee Amount

 The total amount of the specified charge type collected by the management company as a fee.

 Distribution Breakdown

 This section displays all payments to the owner with a check date during the specified report date range. Checks are ordered chronologically, and each item that factored into the check's calculation are grouped below the date. If multiple properties are expensed on the check, calculations for those properties are grouped together.

 The following rows display in this section for each check:

 Row
 Description

 Bank Balance

 The bank balance of the property's default bank at the date and time the owner distribution was performed.

 Less: Security Deposit

 If the Owner Check Setups option of Security deposits held is selected, this row displays the amount of security deposits withheld for the property.

 More Information

 If a security deposit does not display in the report results, you should check for the following:

 -
 Confirm the charge type is selected as a security deposit charge type in the security deposit options system preferences. For more information, refer to Security Deposit General Options (System Preferences) .

 -
 On the tenant's account, ensure a payment has been allocated to the charge.

 -
 On the security deposit transaction, ensure that the unit selected in the Unit field is linked to same unit where the security deposit is being held.

 Less: Owner Reserve

 The amount of money designated as a reserve amount as specified on the property's Owners page.

 Accounts to Exclude from Check Posting

 If you specify a GL account (or multiple accounts) in the Accounts to Exclude from Check Posting section of the Owner Check Setups page, the account(s) display above the payment total.

 Withheld Prepayments

 The balance of all tenant and prospect prepayments that were deposited as of the report end date.

 This row displays only when the Prepaid receivables option is selected on the Owner Check Setup page for the owner's property.

 Comments

 In the Comments section, a custom message for the recipient of this report displays.

 Use any of the following methods to define the comment:

 Option
 Description

 Owner Details

 Enter a custom message for individual owners on the Owner Reports pop-up's Owner Statement Comment field. A message entered using this method always displays for the corresponding owner in the report.

 Owner Report Settings (System Preferences)

 Enter a default message for all owners in the Statement Comment field. If there is not a message entered on the owner's details page, the message entered here displays.

 Owner History/Notes

 Enter a custom message for individual owners as a history item. This history note displays only if the date of the history note falls within the Owner Statement report date range. The custom message displays only if no comments are entered on the owner's details page or in the owner report settings system preferences.
