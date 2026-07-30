# Aged Payables Detail (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Aged-Payables-Detail.htm

The Aged Payables Detail report can be used to review your property's monthly expenses that are upcoming and outstanding as well as displaying credits. While similar to the Aged Payables report, this report is also helpful because it generates additional vendor and bill data for unpaid bills such as the account number and invoice number, as well as specific bill date information.

 This report shows activity performed only through the Bills page; activity performed outside of the Bills page (e.g., writing a check to a vendor) does not impact this report's unpaid bill amounts.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Aged Payables Detail .

 For more information, refer to Control User Access .

 To view the Aged Payables Detail report, do the following:

 -
 Go to arrow_forward Payables arrow_forward General arrow_forward Aged Payables Detail .
The Reports: Aged Payables Detail page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Properties to Include

 Select each property or a property Group to be included in the report.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Show Credits

 If checked, credits linked to the associated accounts display in the report results.

 Vendors to Include

 Check the name of the vendor to include information associated with the vendor in the report results. Optionally, check Inactive Vendors to include vendors that are no longer active.

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

 The option selected in Date Restriction On determines which date field on the bill(s) Rent Manager examines.

 Date Section

 Select one of the following options from the drop-down list to further determine which bills display in the report and how they are categorized.

 Option
 Description

 Overdue 91+

 Displays only unpaid bills with a Due Date 91 days or more before the selected report As of Date .

 Overdue 61–90

 Displays only unpaid bills with a Due Date between 61 and 90 days before the selected report As of Date .

 Overdue 31–60

 Displays only unpaid bills with a Due Date between 31 and 60 days before the selected report As of Date .

 Overdue 1–30

 Displays only unpaid bills with a Due Date between 1 and 30 days before the selected report As of Date .

 Due in 0–30

 Displays only unpaid bills for which the Due Date is either on or between 1 and 30 days after the selected report As of Date .

 Due in 31–60

 Displays only unpaid bills for which the Due Date is between 31 and 60 days after the selected report As of Date .

 Due in 61–90

 Displays only unpaid bills for which the Due Date is between 61 and 90 days after the selected report As of Date .

 All Dates

 Displays all unpaid bills regardless of when the bill is due or if it is overdue.

 Date Restriction On

 Select one of the following options to determine how bills are displayed in the report results:

 Option
 Description

 Bill Date

 Bills with a Bill Date that falls on or before the selected As of Date display.

 Post Date

 Bills with a Post Date that falls on or before the selected As of Date display.

 Due Date

 Bills with a Due Date that falls on or before the selected As of Date display.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Chart Name

 The name of each vendor and GL accounts associated with unpaid bills as of the report date. If a bill impacts multiple general ledger (GL) accounts, <Multiple> displays.

 Acc. #

 The Account Number for each vendor with at least one unpaid bill as it is entered on the vendor details page's Bill Settings tile.

 Invoice #

 The bill's reference number or invoice number.

 Bill Date

 The date on which the bill was issued.

 Due Date

 The date by which the bill must be paid.

 Days Overdue

 If the bill is past its due date, the number of days that have passed between the Due Date and the As of Date displays.

 Due In

 If the bill is not yet due on the As of Date , the number of days between the As of Date and the Due Date displays.

 Amount

 The unpaid amount of each bill.
