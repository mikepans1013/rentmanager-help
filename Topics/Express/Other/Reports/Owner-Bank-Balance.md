# Owner Bank Balance (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Owner-Bank-Balance.htm

The Owner Bank Balance report displays the current bank balance, security deposits, and reserve amounts for each property owner as of the selected report date. The bank account selected in the Default Bank drop-down list on the Other Information tile is the bank examined in this report.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Owner Bank Balance .

 For more information, refer to Control User Access .

 To view the Owner Bank Balance report, do the following:

 -
 Go to   arrow_forward  Owners arrow_forward  Banking arrow_forward Owner Bank Balance .
The Reports: Owner Bank Balance page displays.

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

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

 Separate Owners

 Check to generate a separate report for each selected owner. Otherwise, all selected owners are combined into a single report.

 Exclude Records with Zero Amounts from the Report

 Check to remove owners with bank account values of 0 from the report results. Any owners with bank account balances less than or greater than zero display.

 Restrict by Owner Contract Dates

 Check to display only data that is within the active contract dates for each of the selected owners, regardless of the date. This option is useful if, for example, your contract with one owner is ending and another contract with a different owner is beginning.

 Option
 Description

 Checked

 The report filters to display only data within the selected owner or owners' active contract.

 For example, if the report is generated for 12/31/ 2026 , and Owner A has an active contract from January to June of 2026 , the report displays only data at the properties owned by Owner A from January 2026 to June 2026 .

 Unchecked

 The report displays current data for any months included in the report date range regardless of owner contracts.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Property

 The name of each owner with their properties grouped underneath. The name of the property displays for each entry.

 % Ownership

 The percentage of ownership the owner has for each property by the As of Date as entered on the property's Owners page.

 Security Deposits

 The total amount held in security deposits for each property by the As of Date .

 More Information

 If a security deposit does not display in the report results, you should check for the following:

 -
 Confirm the charge type is selected as a security deposit charge type in the security deposit options system preferences. For more information, refer to Security Deposit General Options (System Preferences) .

 -
 On the tenant's account, ensure a payment has been allocated to the charge.

 -
 On the security deposit transaction, ensure that the unit selected in the Unit field is linked to same unit where the security deposit is being held.

 Reserve

 The amount that each owner is required to hold in reserve for each property as entered on the property's Owners page.

 Bank Balance

 The bank account balance for the property by the As of Date .
