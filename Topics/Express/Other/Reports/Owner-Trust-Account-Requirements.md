# Owner Trust Account Requirements (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Owner-Trust-Account-Requirements.htm

The Owner Trust Account Requirements report shows the total minimum funds required to be held in all bank accounts combined, as established on each property owner, and the ending balance of the selected bank account. The report results are separated by owner and are further detailed by property. You can use this report to compare property bank balances with property minimum balance requirements and reference with audits or after entering beginning balances.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Owner Trust Account Requirements .

 For more information, refer to Control User Access .

 To view the Owner Trust Account Requirements report, do the following:

 -
 Go to arrow_forward Banking arrow_forward Bank Balances arrow_forward Owner Trust Account Requirements .
The Reports: Owner Trust Account Requirements page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

 Restrict by Owner Contract Dates

 Check to display only data that is within the active contract dates for each of the selected owners, regardless of the date. This option is useful if, for example, your contract with one owner is ending and another contract with a different owner is beginning.

 Option
 Description

 Checked

 The report filters to display only data within the selected owner or owners' active contract.

 For example, if the report is generated for 12/31/ 2026 , and Owner A has an active contract from January to June of 2026 , the report displays only data at the properties owned by Owner A from January 2026 to June 2026 .

 Unchecked

 The report displays current data for any months included in the report date range regardless of owner contracts.

 Bank Account

 Select the bank for which Rent Manager examines deposit and withdrawal activity.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Owner

 Owners associated with the selected Bank Account . Owners are listed in alphabetical order by display name with their properties. If the property has multiple owners, those co-owners are listed in brackets next to the property name.

 Properties Owned

 The name of each property owned by the Owner .

 Security Deposits Held

 The total of all held security deposits at the property.

 More Information

 If a security deposit does not display in the report results, you should check for the following:

 -
 Confirm the charge type is selected as a security deposit charge type in the security deposit options system preferences. For more information, refer to Security Deposit General Options (System Preferences) .

 -
 On the tenant's account, ensure a payment has been allocated to the charge.

 -
 On the security deposit transaction, ensure that the unit selected in the Unit field is linked to same unit where the security deposit is being held.

 Reserve

 The reserve amount for the listed owner of the property as entered on the property's details page.

 If the property has multiple owners, reserves of co-owners are not included in the Reserve column. The co-owner's reserve is displayed under their own owner listing for that property.

 Total Requirements

 The total of the held security deposits and reserve amount for the owner's listed property using the following formula:

 Total Requirements = Security Deposits Held + Reserve

 The owner's Total Requirements calculates and displays regardless of whether the owner has a balance in the selected bank account.

 Ending Balance

 The balance of the selected bank account for the property as of the date selected.

 Report Totals

 Other balances not represented by an owner in the selected bank account are included above the Report Totals to be calculated into the Ending Balance . The columns that display in the subreport are described below.

 Column
 Description

 Security Deposits Held

 The total of all held security deposits on the report.

 Reserve

 The total reserve amount for all owners and their properties on the report.

 Total Requirements

 The total of all held security deposits and reserve amounts for the owners on the report.

 Ending Balance

 The total balance of the selected bank account as of the date selected.
