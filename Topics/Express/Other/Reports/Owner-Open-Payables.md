# Owner Open Payables (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Owner-Open-Payables.htm

The Owner Open Payables report displays the default bank account, balance, and open payables (the total of all unpaid bills) for an owner’s properties. This report helps you examine unpaid bills associated with an owner and see if they have enough money in their operating account to cover the expenses. Additionally, this report can be provided to owners to request a contribution to cover bills, or support previous spending.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Owner Open Payables .

 For more information, refer to Control User Access .

 To view the Owner Open Payables report, do the following:

 -
 Go to arrow_forward Owners arrow_forward Payables arrow_forward Owner Open Payables .
The Reports: Owner Open Payables page displays.

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

 Detail or Summary

 This option determines how much information is displayed in the report:

 Option
 Description

 Detail

 Line items for every open amount at each of the owner's properties display.

 Summary

 The total open amount for each owner account display.

 Exclude Records with Zero Amounts from the Report

 Check to remove owners without open payables.

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

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the key information selected in the report options, which determine the report contents including the report name, As of Date or Date Range , and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Property

 The name of each property associated with an owner. The column displays only if Detail is selected in the Detail or Summary section of the report options.

 Owner

 The Name of the owner as entered on the owner's details page. The column displays only if Summary is selected in the Detail or Summary section of the report options.

 Bank

 The name of the property default bank account as entered on the property's details page.

 Balance

 The balance in the property default bank account for each property associated with the owner(s) by the As of Date .

 If you selected any of the below report options, this column is affected.

 Summary

 The total owner's balance by the As of Date .

 Restrict by owner contract dates

 If checked and the selected As of Date occurs during an owner contract period, the Balance is affected only by transactions that occur from the beginning of the active owner contract to the selected report date.

 If checked and the selected As of Date occurs after an owner’s contract has ended, the most recent owner contract is used even if that contract is no longer active. The Balance that displays is as of the final day of the owner contract.

 Open Payables

 The balance in the property default bank account for each property associated with the selected owner(s) as of the selected report date.

 If you selected any of the below report options, this column is affected.

 Summary

 The total owner's balance as of the selected report date.

 Restrict by owner contract dates

 If checked and the selected As of Date occurs during an owner contract period, the Open Payables balance is affected only by transactions that occur from the beginning of the active owner contract to the selected report date.

 If checked and the selected As of Date occurs after an owner’s contract has ended, the most recent owner contract is used even if that contract is no longer active. Only unpaid bills that fall within the owner contract range are totaled in the Open Payables balance.
