# Make a Bank Deposit

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Deposits.htm

In Rent Manager , bank deposits are created to track the movement of funds into a bank account. When payments from tenants (and money collected from other sources) are received and deposited into a bank in the real world, it is best practice to create a bank deposit in Rent Manager to reflect this real-world deposit.

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Bank deposits
 Add

 For more information, refer to Control User Access .

 Step 1: Select Payments and Income

 To make a bank deposit in Rent Manager , do the following:

 -
 Go to arrow_forward Accounting arrow_forward Banking arrow_forward Make Deposit .

 -
 In the Properties drop-down list, select each property to include. Tenants with undeposited payments at the selected properties populate in the list.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 -
 In the list below, review the undeposited payments to be deposited. By default, all payments are checked. Uncheck any payments that should not be part of the deposit. The payments selected in this deposit should match the payments you deposited in the real world.

 More Information

 If an undeposited payment is applied to a Rentable charge, the Rentable column displays. The Rentable badge displays for these payments, and they are unchecked by default. As a best practice, Rentable items should not be deposited via the Make Deposit page as this may cause discrepancies with Rentable's data. You should only do so when correcting currently held deposits. For more information, refer to Set Up Security Deposits with Rentable .

 -
 To add any additional income to the deposit (such as vendor refund checks or laundry room income), click Add Other Income . For more information, refer to Add Other Income to a Deposit .

 Step 2: Enter Deposit Information

 After the deposit's payments are selected and other income is added, do the following:

 -
 At the bottom of the page, click Deposit .

 -
 Enter or select the needed information in the available fields:

 Field
 Description

 Attachments

 Any images or documents relevant to the deposit, such as a digital copy of the deposit slip from the bank. To upload a file, click Upload or to paste an image from your clipboard, click Paste .

 Bank Account

 The bank account to deposit the income into, or choose one of the options below.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 <Use Charge Type Banks>

 Instead of depositing payments based on the property's default bank, payments are deposited to specific banks based on the charges they pay. This option is beneficial if you are depositing payments to bank accounts based on the property's charge type bank setup. For more information, refer to Charge Type Banks (Pop-Up) .

 More Information

 Rent Manager can perform a split deposit when using charge type banks to split a single payment across multiple bank accounts if that payment is a non-check 21 ePay transaction.

 Scanned checks processed through ePay are considered Check 21 transactions.

 <Use Property Default>

 Deposit each payment into the default operating account for its associated property. This option is beneficial if you are depositing payments from multiple properties to multiple bank accounts at once.

 Comments

 An optional note or additional information regarding this deposit. This comment displays in several deposit reports and on the Deposits details page for the associated payment.

 To select a memorized comment, click .

 Deposit Date

 The date on which this income was deposited in the real world.

 Print Deposit Ticket

 If checked, Rent Manager generates a printable copy of the deposit record once the deposit is submitted. In the drop-down to the right, select which type of deposit ticket to print.

 MICR Deposit

 Generates the MICR Deposit Detail report, which is a summary of the deposit information that can be printed onto preformatted MICR stock.

 Standard Deposit

 Generates the Deposit Detail report, which is a summary of the deposit with its own formatting similar to other Rent Manager reports. For more information, refer to Deposit Detail (Report) .

 -
 Click Deposit .
The Confirm Deposit pop-up displays.

 -
 On the pop-up, confirm the amounts are correct and click Yes .
The deposit is submitted in Rent Manager .

 Step 3: Generate Deposit Ticket

 If you chose to print a deposit ticket, the Deposit Ticket pop-up displays after you confirm the deposit submission,. This allows you to format the printable deposit report that summarizes the information. The options that display depend on the type of deposit ticket you selected.

 Enter or select information in the available fields described below. Then click Print .

 Standard Deposit

 The following fields are available when printing a standard deposit ticket:

 Field
 Description

 Export Type

 The file format to generate the deposit ticket as: PDF , HTML , Text , or Excel .

 Sort Options

 The method by which payments are sorted on the deposit ticket. The following options are available:

 Account Number

 Sort payments numerically in ascending order (lowest to highest) by the associated tenant's system-generated account number.

 Address

 Sort payments alphanumerically by the tenant's default address.

 Amount

 Sort payments numerically in ascending order (lowest to highest) by the dollar amount.

 Last Name

 Sort payments alphabetically by the associated tenant's last name.

 Payment Entry

 Sort payments chronologically in ascending order (oldest to newest) by the date on which the payment was entered in Rent Manager .

 Property, Unit

 Sort payments alphanumerically first by the name of the property, then by the name of the unit.

 Reference

 Sort payments alphanumerically by the payment method or check number entered in the Reference # field.

 Transaction Date

 Sort payments chronologically in ascending order (oldest to newest) by the entered post date.

 Unit

 Sort payments alphanumerically by name of the payment's associated unit.

 MICR Deposit

 The following fields are available when printing a MICR deposit ticket:

 Field
 Description

 Do not MICR encode deposit number

 If checked, the MICR-encoded deposit number is not printed on the deposit ticket.

 Export Type

 The file format to generate the deposit ticket as: PDF , HTML , Text , or Excel .

 Include Tenant payment comments

 If checked, the Memo entered on each tenant payment is printed on the deposit ticket.

 Offset

 The value, in inches, to adjust the printer's alignment when printing the deposit ticket. This may need to be adjusted so the deposit ticket prints properly on your ticket stock.

 Print MICR encoding

 If checked, the bank account's MICR information is printed on the deposit ticket. Uncheck if you deposit ticket stock already includes the MICR information.

 Sort Options

 The method by which payments are sorted on the deposit ticket. The following options are available:

 Account Number

 Sort payments numerically in ascending order (lowest to highest) by the associated tenant's system-generated account number.

 Address

 Sort payments alphanumerically by the tenant's default address.

 Amount

 Sort payments numerically in ascending order (lowest to highest) by the dollar amount.

 Last Name

 Sort payments alphabetically by the associated tenant's last name.

 Payment Entry

 Sort payments chronologically in ascending order (oldest to newest) by the date on which the payment was entered in Rent Manager .

 Property, Unit

 Sort payments alphanumerically first by the name of the property, then by the name of the unit.

 Reference

 Sort payments alphanumerically by the payment method or check number entered in the Reference # field.

 Transaction Date

 Sort payments chronologically in ascending order (oldest to newest) by the entered post date.

 Unit

 Sort payments alphanumerically by name of the payment's associated unit.
