# Vendor Expiration Listing (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Vendor-Expiration-Listing.htm

The Vendor Expiration Listing report displays vendors that have an insurance expiration date and/or workers' compensation expiration date entered on the vendor details page's Miscellaneous tile. The report also displays the number of days that the insurance and/or workers' compensation is expired as of the report date to help you monitor vendors' safety protections.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Vendor Expiration Listing .

 For more information, refer to Control User Access .

 To view the Vendor Expiration Listing report, do the following:

 -
 Go to arrow_forward Payables arrow_forward Vendor arrow_forward Vendor Expiration Listing .
The Reports: Vendor Expiration Listing page displays.

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

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

 Include Inactive Vendors

 Check to include vendors who do not have Active checked on the General tile of the Vendor details page in the report results.

 Only Show Expired Vendors

 Check to display only vendors with a date listed in the Insurance Expiration and/or Workers Comp Expiration fields that are on or before the As of Date .

 Sort Options

 Select one of the following options to determine how the report results are sorted:

 Option
 Description

 Vendor

 Vendors are sorted alphabetically by the vendor's name.

 Insurance Expiration

 Vendors are sorted chronologically by Insurance Expiration date in ascending order (oldest to farthest in the future). Vendors with no insurance expiration date display last in the results.

 Workers Comp Expiration

 Vendors are sorted chronologically by Workers Comp Expiration date in ascending order (oldest to farthest in the future). Vendors with no workers compensation expiration date display last in the results.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Vendor

 The vendor's company Name as entered on the vendor details page.

 Insurance Expiration

 The date on which the vendor's insurance expires.

 Insurance Days Expired

 The number of days that have passed from the Insurance Expiration Date to the As of Date for each vendor with expired insurance.

 Workers Comp Expiration

 The date on which workers' compensation expires for the vendor.

 Workers Comp Days Expired

 The number of days that passed from the Workers Comp Expiration Date to the As of Date for each vendor with expired insurance.
