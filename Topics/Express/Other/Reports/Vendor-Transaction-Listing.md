# Vendor Transaction Listing (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Vendor-Transaction-Listing.htm

The Vendor Transaction Listing report displays information on bills, associated payments made to vendors, and any credits received from them during the report date range.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Vendor Transaction Listing .

 For more information, refer to Control User Access .

 To view the Vendor Transaction Listing report, do the following:

 -
 Go to arrow_forward Payables arrow_forward Vendor arrow_forward Vendor Transaction Listing .
The Reports: Vendor Transaction Listing page displays.

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

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Select Vendor

 Select a vendor to examine in the report. Alternatively, select All to generate the report for all active vendors.

 Transactions to Include

 Check each type of transaction to include in the report.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Vendor Information

 If only one vendor is selected in the report options, this section displays additional information about that vendor.

 Field
 Description

 Vendor

 The vendor's name as entered on the vendor's details page.

 Account

 The Account Number entered on the vendor's details page in the Bill Settings tile.

 Default Address

 The address with the Default option checked on the vendor's details page.

 Default Phone

 The phone number with the Default option checked on the vendor's details page.

 1099

 If 1099 Vendor is checked on the vendor's details page, displays Yes . Otherwise, displays No .

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Type

 The transaction type ( Bills , Checks , CC , or Credits ) assigned to the transaction.

 Date

 The date the transaction posted.

 Reference

 If applicable, the check number for each check transaction displays.

 Information

 The status of the transaction. The type of transaction determines what information is provided. A description of each transaction type is listed below.

 Bills

 If a check fully paid the bill, the check number displays.

 Checks

 The name of the general ledger (GL) account that was used to make the payment.

 Credit Cards (CC)

 The name of the credit card that was used.

 Credits

 The credited GL account.

 Memo

 The notes entered in the Memo field for a bill or check transaction, or the notes entered in the Comment field for a credit card or vendor credit transaction.

 Amount

 The total amount that is either debited or credited, based on the type, of the transaction.

 Summary Subreport

 The Summary subreport displays the grand total of your credit card, bill, credit, check, and unpaid bill transactions based on the selected date range.
