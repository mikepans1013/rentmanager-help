# Basic Owner Statement (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Basic-Owner-Statement.htm

The Basic Owner Statement is used to show financial activity and changes in the property's default bank balance over a specified period of time. This report can be used for properties that use Standard and Advanced fee setups. Your fee-based management company can provide this simple, easily understood statement to describe a certain period's income and expenses. Additionally, the Basic Owner Statement shows the Cash Requirements of an owner—the amount of money that must be held in reserve, the total of held security deposits, and the total of accounts excluded from check posting.

 The report includes a variety of report options to control what displays on the statement and the level of detail of that information.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Basic Owner Statement .

 For more information, refer to Control User Access .

 To view the Basic Owner Statement report, do the following:

 -
 Go to arrow_forward Owners arrow_forward Owner Statements arrow_forward Basic Owner Statement .
The Reports: Basic Owner Statement page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Report Options

 The report options described below determine what data displays in the report.

 More Information

 When this report option is selected, reports generate only for owners with active ownerships. If all selected owners currently do not have active ownerships, an error message displays stating that no reports were generated.

 For more information on establishing active ownerships, refer to Property Owners (Pop-Up) .

 Owners to Include

 Select each owner or an owner Group to be included in the report.

 More Information

 Only information related to the properties to which you have access displays. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Inactive Owners to include owners that are no longer active.

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Wrap Text in Comment Column

 Check to display the entire comment for each entry. Otherwise, if a comment is longer than the allotted space, only part of the comment displays in the report.

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

 Mailing Label

 Remove the name, address, and contact information of your management company from the report. The owner’s name, address, and phone number are also removed from the report.

 Phone Number

 Remove only the owner's phone number from the mailing header of the report.

 Vendor

 Omit the Vendor column from the report.

 Bills Outstanding

 Remove the Bills Outstanding section from the report.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Run Properties Separately

 Check to generate a separate report for each property for the selected owners. Otherwise, all selected owners' properties are combined into a single report per owner.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Mailing Header

 More Information

 If the property's name or address is incorrect or missing on the statement header, the information must be updated or added to the related fields on the property's details page. For more information, refer to Property Details (Page) .

 This section displays your management company’s name, address, and phone number in the top-left corner. Underneath that, the owner’s name and address is displayed. Both can be excluded in the report options.

 Transaction List

 This section displays the initial balance of the default bank account of the selected owner's properties and lists all transactions that have affected that account to show how the Ending Bank Balance was calculated. Transactions include deposited prospect/tenant receivables, checks, step 3 deposits, journal entries that are not flagged as management fees, and owner distributions. Click on any entry to open the original transaction.

 The following columns display in this section:

 Column
 Description

 Date

 The date of the transaction.

 Unit

 The unit, if applicable, associated with the tenant or prospect transaction.

 Vendor

 The vendor associated with the transaction.

 Comment

 A description of the transaction if available for the transaction type.

 Deposit

 The total income amount of the transaction.

 Payment

 The total expense amount of the transaction.

 Balance

 The sum of the property's default bank account following the debit or credit transaction of the previous line.

 Bills Outstanding

 This section displays outstanding amounts on open bills for any of the report's selected properties. This section can be excluded by selecting Bills Outstanding in the Exclusion Options .

 The following columns display in this section:

 Column
 Description

 Bill Date

 The date the bill was created (stated on the bill itself).

 Due Date

 The date by which the bill must be paid.

 Payee

 The vendor listed on the bill.

 Memo

 An optional message or reference for the bill.

 Open Amount

 The current unpaid amount on the bill for the property or properties included in the report.

 Cash Requirements

 This section displays the amount of money that has been set aside, such as held security deposits, any reserves, and accounts excluded from check posting. Security deposits and reserve amounts are specified on the property's Owners page, and check exclusions are specified on the property's Owner Check Setup page. For more information, refer to Property Owners (Pop-Up) and Property Owner Check Setup (Pop-Up) .

 Row
 Description

 Total Reserves

 Displays the amount of money that must be held in reserve. In the case of partnerships, this report shows the owner exactly how much of the total reserve belongs to them in the Owner Reserve amount to the right of Total Reserve amount.

 Security Deposits Held

 Displays the total held deposits for the tenants of the selected ownership. This value is not a specific GL account; it is pulled from the total of Held deposits as shown on the tenant's details page for tenants of the selected ownerships. This line displays only when Security deposits held is selected on a property's Owner Check Setup page.

 More Information

 If a security deposit does not display in the report results, you should check for the following:

 -
 Confirm the charge type is selected as a security deposit charge type in the security deposit options system preferences. For more information, refer to Security Deposit General Options (System Preferences) .

 -
 On the tenant's account, ensure a payment has been allocated to the charge.

 -
 On the security deposit transaction, ensure that the unit selected in the Unit field is linked to same unit where the security deposit is being held.

 Accounts to Exclude from Check Posting

 Lists the name and balance for any GL account included in the Accounts to Exclude from Check Posting section on the property's Owner Check Setup page for any property included in the report. Accounts are omitted if they have no balance.

 Total Requirements

 Displays the combined amount of money held for Total Reserve , Security Deposits Held , and any GL account excluded from check posting that has a balance for the selected date range.

 Withheld Prepayments

 Displays the balance of all tenant and prospect prepayments that have been deposited during the selected date range.

 This row displays only when the Prepaid receivables option is selected on the Owner Check Setup page for the owner's property or the default Owner Check Setups page. For more information, refer to Owner Check Setup Templates (Page) .

 Comments

 In the Comments section, a custom message for the recipient of this report displays.

 Use any of the following methods to define the comment:

 Option
 Description

 Owner Details (Page)

 Enter a custom message for individual owners in the Owner Statement Comment field. A message entered using this method will always display for the corresponding owner in the report.

 Owner Report Settings (System Preferences)

 Enter a default message for all owners in the Statement Comment field. If there is not a message entered on Owner Details for an owner, the message entered here displays.

 Owner History/Notes

 Enter a custom message for individual owners as a history item. This history note only displays if the date of the history note falls within the Owner Statement report date range. The custom message only displays if no comments are entered on Owner Details or Owner Report Settings (System Preferences) .
