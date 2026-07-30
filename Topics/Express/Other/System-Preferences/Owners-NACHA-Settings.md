# NACHA Settings (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/Owners-NACHA-Settings.htm

Adjust this preference group to map a NACHA ODFI-enabled bank to a bank account you've created in Rent Manager . Once this is complete, you can enter an owner's deposit account information on an owner's details page so that when owner distributions are made, Rent Manager generates a NACHA file that can be uploaded to their bank.

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 Owners
 Owners
 View

 For more information, refer to Control User Access .

 To set these system preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Owners arrow_forward NACHA Settings .

 -
 Edit the settings as desired. Each setting is described below.

 -
 Click Save to apply your changes.

 Manage ODFI Banks

 Existing ODFI banks are listed in a grid and organized into the following columns.

 Column
 Description

 ODFI Bank

 The name of the institution supporting NACHA payments.

 Origin #

 A nine-digit number that is issued to you by the bank that processes NACHA payments.

 Banks

 The accounts at the bank that can process NACHA payments.

 Each section below describes and action you may take, such as adding, editing, and removing ODFI-enabled banks from the NACHA ODFI Banks list.

 Add ODFI Banks

 To add an ODFI-enabled bank to the list, do the following:

 -
 Click Add Item to add a new row.
The Add NACHA ODFI Bank pop-up displays.

 -
 Enter the necessary information into the fields provided.

 Field
 Description

 ODFI Bank Name

 Enter the name of the bank account you manage for the owner.

 Immediate Origin #

 Enter the number that is issued to you by the bank that processes NACHA payments. It can be a maximum of ten digits, usually a 1 followed by the federal tax ID.

 Company ID

 Enter the number that is used by the bank to identify your company. This number is normally identical to the Immediate Origin # .

 Individual Identification #

 Enter the number that is used by the receiving bank to identify the sender (up to fifteen characters).

 Banks

 Check the bank account(s) that you wish to be mapped to the NACHA ODFI-enabled bank account.

 Use 'Balanced' file format

 Optionally, check Use 'Balanced' file format if the format includes an additional line for the balancing amount for the sum of each transaction. When checked, NACHA payment files that are saved to your workstation display a debit and credit entry so that the payment file is balanced.

 More Information

 If you are unsure whether or not you should use a balanced file format, contact the according bank and inquire if you should use the balanced file format for NACHA files.

 -
 Click OK .
The bank displays in the list of ODFI enabled banks.

 Edit ODFI Banks

 To edit an existing ODFI-enabled bank in the list, click and select Details .	Then, edit the fields as desired. When you are finished, click OK to save your changes.

 The available NACHA ODFI bank fields are described below:

 Field
 Description

 ODFI Bank Name

 Enter the name of the bank account you manage for the owner.

 Immediate Origin #

 Enter the number that is issued to you by the bank that processes NACHA payments. It can be a maximum of ten digits, usually a 1 followed by the federal tax ID.

 Company ID

 Enter the number that is used by the bank to identify your company. This number is normally identical to the Immediate Origin # .

 Individual Identification #

 Enter the number that is used by the receiving bank to identify the sender (up to fifteen characters).

 Banks

 Check the bank account(s) that you wish to be mapped to the NACHA ODFI-enabled bank account.

 Use 'Balanced' file format

 Optionally, check Use 'Balanced' file format if the format includes an additional line for the balancing amount for the sum of each transaction. When checked, NACHA payment files that are saved to your workstation display a debit and credit entry so that the payment file is balanced.

 More Information

 If you are unsure whether or not you should use a balanced file format, contact the according bank and inquire if you should use the balanced file format for NACHA files.
