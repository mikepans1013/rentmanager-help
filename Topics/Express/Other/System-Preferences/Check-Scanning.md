# Check Scanning (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/Check-Scanning.htm

Checks can be scanned in a batch using check scanning. These system preferences allow you to manage other actions that may occur upon scanning checks and determine how your check scanners are configured. Additionally, you can manage which fields on the check are required and auto-filled upon scanning a check into your database.

 More Information

 LCS offers Epson single-feed and multi-feed check scanners you can use with Rent Manager . For more information, contact your sales representative at sales@rentmanager.com .

 If you are already using a TellerScan TS 240 or Panini Vision X50 scanner for your check scanning, these models are also supported and compatible with Rent Manager check scanning.

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 To set these system preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Check Scanning .

 -
 Edit the settings as desired. Each setting is described below.

 -
 Click Save to accept your changes.

 Preference Descriptions

 Each setting is described below:

 Option
 Description

 Attach check images to History/Notes

 Enable this option if you want scanned checks to be automatically attached to any created history/note items.

 Attach check images to payment transactions

 Enable this option if you want scanned checks to be automatically attached to payment transactions.

 Auto fill tenant balance when scanning checks/Auto fill tenant balance when check scanner does not read amount

 Check to automatically default a scanned check’s Amount to the tenant’s full balance. If this option is left unchecked, the Amount field on the Scan Checks page defaults to $0.00, and you need to enter it manually.

 More Information

 If you have purchased a license for Optical Character Recognition (OCR) for check scanning, this option displays as Auto fill tenant balance when check scanner does not read amount . If enabled, automatically set a scanned check’s Amount , when the scanner fails to read the amount from the check, to the tenant’s full balance. If the check scanner successfully reads an amount from check, the amount read by the scanner is automatically entered in the Amount field.

 OCR is part of the licensed feature for Smart Bills and Smart Receipts. For more information, contact your sales representative at sales@rentmanager.com .

 Warn when processing the same check more than once

 Enable this option to display a warning message if the same check is scanned into Rent Manager more than once.

 Require confirmation of batch total amount when posting

 Check to display the Confirm Batch Post pop-up before posting the batch. The user must enter the Total Amount of the scanned check batch (displayed in the bottom-left) to process them.

 If this option is unchecked, the Confirm Batch Post pop-up displays before posting the batch, and a user can click Yes to process the scanned checks.

 MagTek scanner image transfer timeout

 Enter how many seconds should pass before a transfer is considered timed out and canceled. The default is 10 seconds.

 Limit check scanner availability to a specified location

 If this option is checked, active check scanners are assigned to a specific location, which makes the scanner inaccessible to users at other locations.

 If this option is unchecked, when a check scanner is activated, it is automatically added to each location.

 More Information

 For this option to display, there must be two or more locations in your database, and you must be managing these settings from the default location. Additionally, you must be a Rent Manager Online user for this option to display.
