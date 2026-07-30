# Vendor 1099 Breakdown (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Vendor-1099-Breakdown.htm

The Vendor 1099 Breakdown report examines both 1099 and non-1099 payments you have made to vendors during the specified report date range. The results of the report can include information even if it started prior to the GL start date since this report does not consider the general ledger (GL) start date. This provides a way for you to track and confirm your 1099 totals before generating and printing vendor 1099 reports. For more information, refer to Vendor 1099 (Report) .

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Vendor 1099 Breakdown .

 For more information, refer to Control User Access .

 To view the Vendor 1099 Breakdown report, do the following:

 -
 Go to arrow_forward Payables arrow_forward Vendor 1099 arrow_forward Vendor 1099 Breakdown .
The Reports: Vendor 1099 Breakdown page displays.

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

 Detail or Summary

 This option determines how much information is displayed in the report.

 Option
 Description

 Detail

 The total amount of payments for each property, organized by vendor account. Detail view also displays vendor totals at the bottom of each column and a vendor count at the bottom of the report.

 Summary

 The total amount of payments combined into a single row for each vendor account.

 1099 Exclusions

 This option determines how much information is displayed in the report.

 Option
 Description

 No 1099 Exclusions

 All payments you made to vendors in the report results display. If this option is selected, the report results display even if Exclude records with zero amounts from the report is checked.

 Exclude individual properties less than $600 for a vendor

 Only properties where you paid the vendor $600 or more for 1099 related expenses display.

 Checking this option has the same results as checking the Exclude total values less than $600 report option on the Vendor 1099 report.

 Exclude records if total for vendor is less than $600

 Only vendors who received $600 or more in 1099 payments from all properties included display in the report results.

 Checking this option has the same results as checking the Consolidate Properties and Exclude total values less than $600 report option on the Vendor 1099 report.

 Show Non-1099 Vendors

 Check to include vendors in the report results who do not have the 1099 Vendor option checked on the vendor's details page in the Tax Information section. Otherwise, only vendors with the 1099 Vendor option checked display.

 Exclude Records with Zero Amounts from the Report

 Check to display only properties where you made a payment to a vendor.

 More Information

 If the report option Exclude individual properties less than $600 for a vendor is also selected, there may be properties that do not display in the report results. This happens for properties where payments made to the vendor total less than $600.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below. If, in the Detail or Summary field of the report options, Detail is selected, each property associated with a vendor is grouped under each vendor. The vendor name, category, and tax ID number display. Information about each property is organized into the following columns:

 Column
 Description

 Property

 The name of each property that is associated with payments you made to a vendor.

 Vendor

 The name of the vendor who received the payments from each property.

 The column displays only if, in the Detail or Summary report option, Summary is selected.

 TaxID

 The ID number for each vendor as entered in the 1099 SocSec #/Tax # field on the vendor's details page.

 The column displays only if Summary is selected in the Detail or Summary report option.

 YTD 1099

 The YTD 1099 Balance , which can be found on the vendor's details page in the Tax Information tile by clicking YTD Balances .

 1099 Amount

 The total dollar amount of payments made to the vendor where the 1099 box is checked on the linked bill.

 Non 1099 Amount

 The total dollar amount of payments made to the vendor where the 1099 box is not checked on the linked bill.

 Total 1099 Amount

 The total dollar amount of 1099 payments received by the vendor for each property row in the report using the following formula:

 Total 1099 = YTD 1099 + 1099 Amount
