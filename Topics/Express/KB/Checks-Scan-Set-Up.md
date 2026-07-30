# Set Up Epson Check Scanner

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Checks-Scan-Set-Up.htm

Rent Manager allows you to scan and record multiple checks or money orders in a batch and apply them to tenant or prospect accounts from one page. In order to use the check scanning tool, you first need to acquire and set up a check scanning device. To set up your check scanner, you need to install and set up the Scan Manager application, install drivers for your scanner, and then activate the device so it can be used in Rent Manager .

 More Information

 LCS offers Epson single-feed and multi-feed check scanners you can use with Rent Manager . For more information, contact your sales representative at sales@rentmanager.com .

 This topic covers setup instructions for Epson check scanners, but Rent Manager also supports the TellerScan TS 240 and Panini Vision X50 scanners. For more information on setting up a TellerScan scanner, refer to Set Up TellerScan Check Scanner . For more information on setting up a Panini scanner, refer to Set Up Panini Check Scanner .

 Warning

 Before installing and activating your check scanner, ensure that your copy of Windows is up-to-date with the latest software patches from Microsoft.

 The Scan Manager application is not compatible with Mac computers. In order to use the check scanning tool in Rent Manager , you must be using a Windows PC.

 Step 1: Install Scan Manager

 The first step to setting up your check scanner is to download and install Scan Manager. Drivers for Epson scanners are installed while installing Scan Manager. To install Scan Manager, do the following:

 -
 Plug the Epson check scanner directly into your computer.

 -
 In your web browser, go to the Install Scan Manager page on the Rent Manager website.

 -
 On the web page under the Install Scan Manager heading's first step, click ScanManagerInstaller.exe .
The file is saved to your computer.

 -
 From the location where you saved the file (usually in your downloads folder), double-click on the ScanManagerInstaller.exe file to initiate the installation.

 More Information

 If you get a pop-up warning you that your computer prevented an unrecognized app from starting, click More Info and then Run anyway .

 The Scan Manager Setup pop-up displays.

 -
 Click Install . If you receive a User Account Control pop-up, click Yes to proceed.
The InstallShield Wizard pop-up displays.

 More Information

 If Scan Manager was ever installed on your computer in the past and you are reinstalling it, the installer does not take you through the InstallShield Wizard pop-up and instead goes straight to the Scan Manager Install pop-up. If this occurs, skip ahead to step 12.

 -
 Click Next to proceed to the next page of the InstallShield Wizard pop-up, and select I accept the terms of the license agreement .

 -
 Click Next to proceed to the next page.

 -
 Optionally, to change the Destination Folder where you install Scan Manager, click Browse to select the desired file location and then click OK . To confirm the destination folder, click Next .

 -
 Review the current settings and then click Next .

 -
 Wait for the installer to finish processing and installing, then click Finish .
The setup process is complete and the Scan Manager Install pop-up displays.

 -
 If you do not wish to create a shortcut to Scan Manager on your desktop, uncheck Add Desktop Shortcut . Otherwise, leave this option checked.

 -
 Click Next to install Scan Manager in the currently selected location.
The installation is complete and the Scan Manager Setup pop-up displays.

 -
 On the pop-up stating setup was successful, click Close .
The Scan Manager application is installed.

 Step 2: Activate Your Check Scanner

 After installing Scan Manager and the necessary drivers, you must activate your check scanner. To activate the scanner, do the following:

 -
 From your desktop or the location where you installed the application, double-click the Scan Manager application's icon.

 More Information

 If the Activate Scanner pop-up does not display, right-click on the Scan Manager application icon and select Run as Administrator .

 -
 Enter information into the available fields.

 Field
 Description

 Company Code

 The unique identifier for your organization assigned to you by LCS . The Company Code can be found in various places in Rent Manager , including the top right of the menu ribbon in Rent Manager Express .

 Password

 The password you use to log in to Rent Manager .

 Scanner Model

 The name of the device model. This field should automatically populate with the scanner connected to your PC.

 Scanner Name

 A name to identify the scanner. This is the name that displays in Rent Manager when selecting a scanner.

 Username

 The username you use to log in to Rent Manager .

 -
 Click Activate .

 -
 On the pop-up that states the activation was successful, click OK .
The check scanner is activated for use in Rent Manager .

 More Information

 By default, your Scan Manager settings instruct the scanner to automatically scan the checks placed in the feed after three seconds. To change the amount of time to wait before the scanner starts feeding the checks, go to your system tray and right click on the Scan Manager icon, then select Settings . In the Scan Mode field, select the desired wait time. Alternatively, select Scan when "Scan Checks" button is clicked to start feeding the check through only when you click the Scan Checks button in Scan Manager. After selecting a mode, click Save .

 Step 3: Set Up Scanner in Rent Manager

 To start using your scanner in Rent Manager , you must establish the relevant system preferences for how Rent Manager handles check scanning for all users. Additionally, you can customize your personal preferences for check scanning to determine your default check scanner if you have access to more than one.

 System Preferences

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 To set your check scanning system preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Check Scanning .

 -
 In the General section, configure the following options:

 Option
 Description

 Attach check images to History/Notes

 If enabled, scanned checks are automatically attached to any created history/note items.

 Attach check images to payment transactions

 If enabled. images of scanned checks are automatically attached to payment transactions.

 Auto fill tenant balance when scanning checks/Auto fill tenant balance when check scanner does not read amount

 If enabled, a scanned check’s Amount automatically defaults to the tenant’s full balance. If this option is disabled, the Amount field on the Scan Checks page defaults to $0.00, and you need to enter it manually.

 More Information

 If you have purchased a license for Optical Character Recognition (OCR) for check scanning, this option displays as Auto fill tenant balance when check scanner does not read amount . If enabled, automatically set a scanned check’s Amount , when the scanner fails to read the amount from the check, to the tenant’s full balance. If the check scanner successfully reads an amount from check, the amount read by the scanner is automatically entered in the Amount field.

 OCR is part of the licensed feature for Smart Bills and Smart Receipts. For more information, contact your sales representative at sales@rentmanager.com .

 Limit check scanner availability to a specified location

 If enabled, active check scanners are assigned to a specific Rent Manager database location, which makes the scanner inaccessible to users at other locations.

 If this option is disabled, when a check scanner is activated, it is automatically added to each location.

 More Information

 Locations are a licensed feature and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com . Additionally, this option displays only if there are two or more locations in your database and you are managing these settings from the default location.

 Require confirmation of batch total amount when posting

 If enabled, the Confirm Batch Post pop-up displays before posting the batch. The user must enter the Total Amount of the scanned check batch (displayed in the bottom-left) to process them.

 If this option is disabled, the Confirm Batch Post pop-up displays before posting the batch, and a user can click Yes to process the scanned checks.

 Warn when processing the same check more than once

 If enabled, a warning message displays if the same check is scanned into Rent Manager more than once.

 -
 In the Active Check Scanners section, verify that your scanner displays as the Scanner Name you assigned.

 -
 If applicable, you can grant other users access to this scanner by clicking arrow_forward Details . Select the users who can use this scanner, then click OK .

 -
 Click Save .
The system preferences are saved.

 Personal Preferences

 When scanning checks in Rent Manager , you can select the check scanner you wish to use. To have Rent Manager select your check scanner for you by default, you can set that default in your personal preferences.

 To set your default check scanner in personal preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward Personal Preferences arrow_forward Check Scanning .

 -
 Select Scan Manager (Epson, Magtek MICRImage, and more) .

 -
 In the Default Check Scanner drop-down list, select your check scanner.

 -
 Click Save .
The check scanner is set as your default.
