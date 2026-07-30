# Scan Vendor/Owner Checks

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Checks-Scan-Vendor-Owner.htm

Scanning checks allows you to take written checks and record deposits in a single workflow, streamlining payment processing and greatly reducing the chance of error. Rent Manager allows you to scan and record checks or money orders from vendors and owners and submit them as other income, also known as a step three deposit, when making deposits. The deposits can be processed as normal or electronically through Zego ePay in Rent Manager .

 More Information

 Before scanning checks, you must first set up your Epson check scanner with Scan Manager. For more information, refer to Set Up Epson Check Scanner . LCS offers Epson single-feed and multi-feed check scanners to meet your check scanning needs. If you are already using a TellerScan TS 240 or Panini Vision X50 scanner for your check scanning, these models are also supported and compatible with Rent Manager check scanning.

 Additionally, the Optical Character Recognition (OCR) feature for check scanning — which converts the image text of your checks into machine-readable text — is part of the licensed feature for Smart Bills and Smart Receipts. For more information, contact your sales representative at sales@rentmanager.com .

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Take owner Payments
 Enabled

 Banks/Checks
 Scan vendor/owner checks
 Enabled

 Bank deposits
 Add

 Edit MICR details and amount of scanned checks
 Enabled

 For more information, refer to Control User Access .

 Step 1: Scan Checks

 To start scanning a batch of checks using your check scanner, do the following:

 -
 Go to   arrow_forward Receivables arrow_forward Payments arrow_forward Scan Vendor/Owner Checks .

 -
 In the Check Scanner  field, select the scanner you are using to scan checks.

 Related Preferences

 In order to scan checks, you must have the option Scan Manager selected in your personal preferences. This field populates with the scanners selected in your preference's Default Check Scanner field . For more information, refer to Check Scanning (Personal Preferences) .

 -
 Place checks and money orders into the scanner and wait for the scanner to feed them through.

 More Information

 The number of seconds before the scanner starts feeding checks through depends on your Scan Manager application's settings in the Scan Mode field. If the option Scan when "Scan Checks" button is clicked is enabled, the scanning does not start until you click Scan Checks in Scan Manager.

 As the scanner reads the checks and money orders, it imports that payment information and an image of the check into the Scan Vendor/Owner Checks page in Rent Manager .

 Step 2: Process Payment

 Once your check is scanned, review and edit the information in the Details tile ensure it scanned accurately. After your scanned check has been reviewed and verified, you can process the payment as a deposit in Rent Manager .

 Related Preferences

 In system preferences, you can determine if the check image is attached as a history/note item, if it is attached to payment transactions on the vendor or owner account, and can establish warnings for processing the same check multiple times. For more information, refer to Check Scanning (System Preferences) .

 More Information

 If you have the OCR feature for check scanning, some fields populate with information read from the scanned check. These fields can be edited as needed if there are any errors.

 If you do not have the OCR feature for check scanning, you must manually enter information into the fields.

 -
 In the Details tile, review and edit the information in the available fields.

 Field
 Description

 Account #

 The payee's bank account number from which the funds are being deducted, as read by the scanner.

 If the incorrect number was read, click to enter the correct number.

 Amount

 The amount the check or money order is written for.

 Check #/Serial #

 For check payments, the check number read by the scanner. For money orders, the serial number read by the scanner.

 If the incorrect number was read, click to enter the correct number.

 Check/Money Order

 In the tile header, verify the correct payment type is selected:  Check or Money Order .

 Routing #

 The bank's numerical identification number for the purpose of processing money transfers, as read by the scanner.

 If the incorrect number was read, click to enter the correct number.

 -
 Enter or edit the information in the available fields.

 Field
 Description

 Income Account

 The general ledger (GL) account used to track this type of income.

 Job

 If applicable, the job the payment is associated with.

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Memo

 An optional note regarding additional information about this payment.

 Property

 The property associated with the vendor or owner payment.

 Unit

 The unit associated with the payment.

 Vendor/Owner

 The vendor or owner account that submitted the payment.

 -
 Optionally, to pre-fill certain fields when a future check with the same routing and account number as the current one is scanned, click Pre-Fill Settings . Then in the Pre-Fill Settings  pop-up, select each field that should always populate with the entered information for this account and click Save .

 -
 To process the payment as a deposit in Rent Manager , select one of the following options:

 Option
 Description

 Process

 The deposit is created in Rent Manager where details of the scanned check, including the image, displays in the Other Income section of the deposit's details page. The money is deposited into the selected property's Default Bank . You must still deposit the funds in the real world.

 Process as ePay

 The scanned check is processed by Zego and deposited as an electronic check to the property's ePay bank. This option is available only if Zego ePay is set up in Rent Manager and is enabled for the selected property.

 The scanned check deposit is submitted in Rent Manager .
