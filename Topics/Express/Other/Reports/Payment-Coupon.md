# Payment Coupon (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Payment-Coupon.htm

The Payment Coupon report displays active recurring charges for current tenants, and provides information about the total amount due per billing period, the due date, and the address where the tenant should remit payment. The coupon is similar to mortgage or loan payment coupons and is intended to be mailed to tenants at the beginning of each billing period. Coupons include your return address and the tenant's property and unit, so payments returned with the coupon provide the information you need to credit the right account.

 More Information

 This report does not include one-time charges or credits or tenant payments—only a total of the recurring charges. For a statement that reflects the current open balance, refer to Tenant Statement 8.5x11 (Report) .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Payment Coupon .

 For more information, refer to Control User Access .

 To view the Payment Coupon report, do the following:

 -
 Go to arrow_forward Tenant Statements arrow_forward General arrow_forward Payment Coupon .
The Reports: Payment Coupon page displays.

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

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 This option determines how the coupons are generated for each tenant. Rent Manager attempts to fit as many coupons per page as possible with a maximum of six coupons per page. Regardless of your selection in this section, Rent Manager dedicates an entire page to each tenant. Tenants are ordered by account number within the document.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Tenants to Include

 Check each tenant for which to generate coupons. To quickly select or deselect all tenants in the list, check or uncheck the box in the section header.

 Posting Period

 Choose one of the following options to generate coupons for the selected tenants with the same Rent Period selected on the tenant's details page.

 Option
 Description

 Monthly

 Generate coupons for tenants with monthly recurring charges. Each tenant has a coupon generated for each month in the Date Range .

 Weekly

 Generate coupons for tenants with weekly recurring charges. Each tenant has a coupon generated for each week in the Date Range .

 Daily

 Generate coupons for tenants with daily recurring charges. Each tenant has a coupon generated for each day in the Date Range .

 If there are no tenants with a matching rent period, no coupons are generated. For example, if all selected tenants have a Rent Period of Monthly and you select the Weekly option, no coupons generate because none of the tenants have weekly recurring charges. To generate coupons for those tenants, select Monthly in the report options.

 Report Results

 The form appears as displayed below when printing the Payment Coupon .

 Report Header

 This section displays the property’s billing name and billing address in the top-left corner. To the right, the tenant’s name and billing address are displayed.

 Statement Header

 This section displays fields containing information about the recurring charges or credits included in the statement and the billing and due dates. Each field is described in the table below.

 Field

 Description

 Bill Date

 The From Date selected in the report options. If you selected any of the month, week, or year options, Rent Manager generates payment coupons for the earliest date per period based on your selection in the Posting Period report option.

 For example, if you selected This Year as the Date Range with a Posting Period of Monthly , Rent Manager generates twelve coupons, all with a Bill Date of the first of the month for each month in the current year. Alternatively, if you select This Month with a posting period of Monthly , Rent Manager generates a single coupon with a Bill Date of the first of the current month.

 Due Date

 The date on which the payment is due, as determined on the tenant's details page in the General section Due Day and Rent Period fields.

 Property

 The short name of the default property on the tenant's details page.

 Unit

 The name of the unit the tenant is leasing at the default property.

 Acc #

 The tenant's system-generated account number.

 Charges and Tools

 This section displays each recurring charge that will be posted to the tenant's account for the selected period. The From Date and To Date entered on any recurring charge is reflected on the coupon.

 Column/Field
 Description

 Charge

 The charge type used to record the tenant payment.

 Description

 The Description of the recurring charge's charge type.

Any Comment on the Charge Details pop-up for this line item displays after the description.

 Amount

 The amount of each line item charge.

 Total Enclosed

 This area is blank to allow the tenant to write in the amount paid.

 Total Due

 The total of all line item charges.
