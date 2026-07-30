# Deposit Detail (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Deposit-Detail.htm

The Deposit Detail report displays information about a selected bank deposit which took place during the report's date range. The report includes an itemization of each payment included in the selected deposit and a breakdown of the payment methods used, which can be useful when reconciling real-world deposits and Rent Manager deposits. For more information, refer to Make a Bank Deposit .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Deposit Detail .

 For more information, refer to Control User Access .

 To view the Deposit Detail report, do the following:

 -
 Go to arrow_forward Banking arrow_forward Deposits arrow_forward Deposit Detail .
The Reports: Deposit Detail page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Sort Options

 Report results are first sorted by deposit, then further sorted by GL account. Select one of the following options to determine how the report results are sorted in each GL account subheading:

 Option
 Description

 Account Number

 Payments are sorted numerically by the tenant's system-generated ID in ascending order (lowest to highest).

 Address

 Payments are sorted alphanumerically by the tenant's Default address.

 Amount

 Payments are sorted numerically by the Amount paid in ascending order (least to greatest).

 Last Name

 Payment are sorted alphabetically by the tenant's Last Name . Commercial tenants are sorted by Company Name . Payments made using Post Management Fees display first in the results and do not display a tenant name.

 Payment Entry

 Payments are sorted chronologically by the date the payment was entered into Rent Manager in ascending order (oldest to newest), regardless of the payment's entered Date .

 Property, Unit

 Payments are sorted alphanumerically by property Short Name . If there are multiple units in a property, they are further sorted by Unit name.

 Reference

 Payments are sorted alphanumerically by Reference value. Transactions with no reference display first.

 Transaction Date

 Payments are sorted chronologically by the Date in ascending order (oldest to newest).

 Unit

 Payments are sorted alphanumerically by associated Unit name. Payments with no associated unit display first in the results.

 Select a Deposit

 Select a deposit for which to view detailed information in the report results. All deposits made during the Date Range display in the list and are listed by Reference number in ascending order. The date each deposit took place and the total amount of each deposit also displays to help you make your selection.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or descriptions.

 Report Header

 The report header displays the key information selected in the report options, which determine the report contents including the report name, As of Date or Date Range , and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Tenant

 The name of the tenant who made each payment included in the deposit, in the Last Name , First Name format.

 Acc. #

 The system-generated account number of each tenant who made a payment included in the deposit.

 Unit

 The name of the unit associated with each tenant's payment.

 Property

 The name of the property associated with each tenant's payment.

 Reference

 The Reference #  as entered when receiving each payment.

 Date

 The date as entered when receiving each payment.

 Amount

 The total amount of each payment.

 Other Items Subreport

 If the deposit includes any other income (also known as Step 3 deposits), the Other Items heading displays. The columns that display in this subreport are described below.

 Column
 Description

 Account

 The general ledger (GL) account from your chart of accounts used to track this income.

 Amount

 The total dollar amount of this income to deposit for the property/unit.

 Memo

 An additional note added to the line item to provide further context about this income.

 Property

 The name of the property that earned or collected the income.

 Reference

 The payment reference—such as CASH , MO (money order), CC (credit card), or the check number—for the other income line item.

 Unit

 The name of the unit that earned or collected the income.

 Vendor/Owner

 The name of the vendor or owner associated with any line items added to the deposit via a scanned vendor or owner check or owner contribution.

 Report Totals Subreport

 Located at the bottom of the Deposit Detail report, the Report Totals subreport provides a breakdown of the payments included in the deposit.

 The subreport lists the number of payments that were made through Cash , Checks , Money Orders , or Other Items , and the total amount included in the deposit for each payment method. The final column provides the total number of payments included in the deposit, and the sum total of all the payments.
