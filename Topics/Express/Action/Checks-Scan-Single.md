# Scan a Single Check

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Checks-Scan-Single.htm

When adding a check or money order payment directly to a tenant or prospect account in Rent Manager , you have the option to scan the check to pull in both the payment information and an image of the check or money order. This applies the payment to the account's transactions in Rent Manager and includes an image for your records.

 More Information

 This topic covers scanning only a single check to apply directly to a tenant or prospect payment. For information on scanning checks and money orders in a batch, refer to Scan Tenant/Prospect Checks .

 Before you can scan checks, you must first set up your check scanner to work with Rent Manager . For more information, refer to Set Up Epson Check Scanner .

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View

 Prospects
 View

 Receivables
 Take tenant payments
 Enabled

 For more information, refer to Control User Access .

 To scan an individual check or money order, do the following:

 -
 Navigate to the tenant or prospect account that made the payment.

 Entity
 Navigation

 Tenant

 Go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select a tenant.

 Prospect

 Go to arrow_forward Rental Info arrow_forward General arrow_forward Prospects and select a prospect.

 -
 On the action bar to the right, click arrow_forward Add Payment .
The Add Payment pop-up displays.

 -
 In the Payment Info tile's header, click Scan Check .

 -
 In the Check Scanner field, select the scanner to use for scanning the check.

 Related Preferences

 This field populates with the scanner set as your default check scanner in personal preferences. For more information, refer to Check Scanning (Personal Preferences) .

 Additionally, you can only use scanners that your user account has access granted to in system preferences. For more information, refer to Check Scanning (System Preferences) .

 -
 Place the check or money order into the scanner and wait for the scanner to feed them through. As the scanner reads the check or money order, it imports that payment information and an image of the check into the Scan Check pop-up.

 More Information

 The number of seconds before the scanner starts feeding checks through depends on your Scan Manager application's settings in the Scan Mode field. If the option Scan when "Scan Checks" button is clicked is enabled, the scanning does not start until you click Scan Checks in Scan Manager.

 Additionally, the Optical Character Recognition (OCR) feature for check scanning—which converts the image text of your checks into machine-readable text—is part of the licensed feature for Smart Bills and Smart Receipts. For more information, contact your sales representative at sales@rentmanager.com .

 The available fields to review are described below.

 Column
 Description

 Account #

 The payer's bank account number from which the funds are being deducted, as entered by the user or as read by the scanner.

 If the incorrect number was read, click to enter the correct number.

 Amount

 The amount the payment is written for. The amount that populates in this column depends on your system preferences and whether or not you have purchased a license for Optical Character Recognition (OCR) for check scanning.

 Related Preferences

 If you have the Smart Bills or Smart Receipts feature that includes OCR, the amount read by the scanner is automatically entered in the Amount field. If the option Auto fill tenant balance when check scanner does not read amount is enabled in system preferences and the scanner fails to read the amount from the check, the tenant or prospect’s current balance populates instead.

 If you have not purchased the license for OCR, and the option Auto fill tenant balance when scanning checks is checked in system preferences, this field automatically populates with the tenant or prospect's current outstanding balance, as shown in the Current Balance column. If unchecked, the amount $0.00 populates.

 For more information, refer to Check Scanning (System Preferences) .

 Check #/Serial #

 For check payments, the check number read by the scanner. For money orders, the serial number entered by the user or read by the scanner.

 If the incorrect number was read, click to enter the correct number.

 Check/Money Order

 In the Details tile header, verify the correct payment type is selected:  Check or Money Order .

 Memo

 An optional note about what the payment was for, as read by the scanner. Memos display on the tenant or prospect's transactions list in the Comment column.

 Routing #

 The bank's numerical identification number for the purpose of processing money transfers, as entered by the user or as read by the scanner.

 If the incorrect number was read, click to enter the correct number.

 -
 Click Save .
The Scan Check pop-up closes and the scanned check or money order's information displays in the Add Payment pop-up's Payment Info tile.

 -
 In the Open Charges section, verify that the Current Payment amount entered is correct. If the payment does not cover all open charges, in the list of open charges, check the Pay? box next to the open charge to apply the payment to.

 -
 In the New Late Fees column, verify the late fee amount is correct or enter the desired late fee amount for each charge. This column displays only if any daily (or per-day) late fees have accumulated for the open charges based on the date the charge was posted and the payment's Transaction Date .

 -
 If applicable, in the Payment Summary tile, check one of the following options:

 Option
 Description

 Process via ePay

 Check to process the payment as an ePay payment. When this option is checked, the Reference # field is automatically updated to ePay and cannot be edited.

 More Information

 This option is available only if the account's associated property is enabled for ePay and the tenant or prospect's ePay information is configured. For more information, refer to Set Up ePay for Tenants and Prospects .

 View Receipt

 After processing the payment, print a receipt for the tenant or prospect in the format you select (such as PDF or Excel ).

 -
 Click Add Payment .
The payment is recorded for the prospect or tenant.
