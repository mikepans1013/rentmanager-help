# Charges & Receipts Detail (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Charges-Receipts-Detail.htm

The Charges & Receipts Detail report displays charges, payments, non-sufficient funds (NSF) fees, and prepayments applied to transactions. The report is separated by property, with each row listing financial information by charge type and associated general ledger (GL) account.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Charges & Receipts Detail .

 For more information, refer to Control User Access .

 To view the Charges & Receipts Detail report, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Charges arrow_forward Charges & Receipts Detail .
The Reports: Charges & Receipts Detail page displays.

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

 Tenants to Include

 Select each desired option to determine which accounts display in the report results.

 Option
 Description

 Current

 All tenants with a Move In date on or before the report date and with either no Move Out date or a Move Out date after the selected date display.

 Past

 All tenants with a Move Out date set before the selected date display.

 Future

 All tenants with a Move In date that is undefined or after the selected date display.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Charges to Include

 The report displays charges and payments associated with any of the selected charge types.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 This option is only selectable only when the Properties to Include section displays the Property tab.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below. Each property selected displays in its own section, with the total values of each column for the property in a row at the bottom.

 Column
 Description

 Applied Credit/Prepaid

 The dollar amount of credits or prepayments allocated to charges over the selected date range.

 Charge Type

 The Description of each charge type linked to the general ledger (GL) account.

 Charged

 The total dollar amount for charges of this type posted over the selected date range.

 Current NSF

 The dollar amount of payments returned for non-sufficient funds (NSF) to charges from the selected date range.

 Current Paid

 The dollar amount paid to charges of this type over the selected date range.

 Current Unpaid/Credit

 The dollar amount of unpaid charges excluding charges with applied credits and prepayments, calculated using the following formula:

 Current Unpaid/Credit = Charged + Current Paid + Applied Credit/Prepaid + Current NSF

 Future Prepaid

 The total dollar amount of allocated payments to future associated with this charge type.

 GL Acc. #

 The GL account number linked to the charge type.

 GL Acc. Description

 The description of the GL account number linked to the charge type.

 Prior NSF

 The dollar amount of payments returned for non-sufficient funds (NSF) to charges from before the selected date range.

 Prior Paid

 The dollar amount of payments made to charges from before the selected date range.

 Property

 The short name of the property.

 Total Current Paid

 The dollar amount of payments made to current or future charges, credits, and NSF fees for charges associated with this charge type, credits. This value is calculated using the following formula:

 Total Current Paid = Current Paid + Applied Credit/Prepaid + Current NSF

 Total NSF

 The dollar amount of payments made to any charges that were returned for non-sufficient funds (NSF) during the selected date range.

 Total Paid

 The dollar amount of payments made to any charges during the selected date range.

 Total Prior Paid

 The dollar amount of payments and NSF fees made to charges from before the selected date range. This value is calculated using the following formula:

 Total Prior Paid = Prior Paid + Prior NSF

 Report Totals Subreport

 The Report Totals subreport displays the combined total of transactions, payments, NSF charges, and prepayments for all properties included in the report.
