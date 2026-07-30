# Pay Owners

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Pay-Owners.htm

Fee-based management companies manage properties on behalf of owners in exchange for management fees. After managed ownerships' receivables (including management fees) are collected and expenses are paid, you can perform a full equity distribution for each of your owners. Rent Manager uses this formula to determine the maximum payout for each owner: (Bank Balance – Withholdings) * Ownership % ± Balanced Reserves .

 Related Privileges

 Group
 Privilege
 Column

 Owners
 Create payments for owners
 Enabled

 For more information, refer to Control User Access .

 Step 1: Configure Owner Payment

 To configure an owner payment, do the following:

 -
 Go to   arrow_forward Owners arrow_forward Owner Payments arrow_forward Pay Owners .

 -
 Select the appropriate date in the Pay for balance as of field for the distributions. This is used as the date of the payout transaction in Rent Manager .

 -
 Select the owners you wish to pay. All owners with an active contract date display on the page as well as the date they were Last Paid . Alternatively, select an owner group from the Group drop-down list.

 More Information

 If the owner you want to pay does not display in the list, make sure of the following:

 -
 The owner's Contract Start Date is the same as or at least one day before the date selected in the Pay for balance as of field.

 -
 The owner's Contract End Date is one or more days after the date selected in the Pay balance as of field.

 -
 Click Calculate Checks .
The calculated payout for each owner displays on a new page.

 Step 2: Select Payment Options

 The calculated payout is determined by adding up the ending bank balance of every trust account associated with the owner or owner group (the Default Bank of each property, as specified on the property's details page) as of the specified date.

 To enter payment options, do the following:

 -
 In the Details section, enter the following information:

 Field
 Descriptions

 Payment Date

The date on which to post the owner payment.

 Memo

 Enter an optional reference or message which displays in the check’s Memo field.

 -
 To remove columns with balances of 0 from the page, check Hide empty Columns .

 -
 In the Items section, the owner or owner group is listed and each property they own displays underneath. The following columns display:

 Column
 Description

 Owner

 The name of the owner (as it displays on the owner's details page in the Name field) or owner group.

 Bank Balance

 The amount of funds available in the property's Default Bank prior to this equity distribution.

Undeposited Funds

 Amount of money collected from properties owned by this owner that are not yet deposited into the appropriate bank account(s).

 Security Deposits

 The total amount of security deposits withheld when this owner's check was calculated. Security Deposits only show in this column if, on the Owner Check Setups page, you enabled the Security Deposits Held option.

 Total Reserve

 If reserves are set up on the Ownership page, then the total amount of the reserve are excluded from the distribution.

 Platform Fee Liability

 Bank funds that are set aside as a liability to cover platform fees charged for accepting ePay owner contributions. When owner checks are calculated, the money held in this liability account is subtracted out of the total.

 Payment Amount

 The amount to be paid to the owners after any witholdings have been removed.

 More Information

 Withholdings are a part of the owner payout calculation that allow you to exclude money from the owner's check. For more information about witholdings, refer to Property Owner Check Setup (Pop-Up) .

 -
 Verify the Payment Method for each owner. To pay the owner through a different method, select one of the following options:.

 Option
 Description

 ACH

 An automated transfer handled by your real world bank that uses the automated clearing house network for additional security.

 Check

 A physically routed payment drawn against deposited funds from the payer to the payee.

 Debit

 A preauthorized payment that allows a bank to pay a certain amount directly to a bank or company at regular intervals.

 eChecks

 A digital check that is delivered to the payee via email, at which point the payee can retrieve and print the check.

 Related Preferences

 This option displays only if Enable eChecks is checked in the eChecks section of system preferences and you have an eChecks account set up. For more information, refer to eChecks (System Preferences) .

 EFT

 An electronic funds transfer for any type of digital payment including, but not limited to, a credit or debit card.

 ePay

 An integrated service offered by Zego to automate electronic funds transfer.

 Related Preferences

 This option displays only if Enable ePay is checked in the ePay section of system preferences. For more information, refer to General ePay (System Preferences) .

 NACHA

 An ACH payment is processed to the ODFI bank account set up in system preferences and the NACHA account set up on the owner's account.

 Related Preferences

 This option displays only if a NACHA ODFI-enabled bank is mapped to a bank account created in Rent Manager . For more information, refer to NACHA Settings (System Preferences) .

 -
 Click Write Checks .

 -
 Click OK  on the pop-up to confirm that checks were written successfully.
A summary page displays to list the owners and properties paid with the payment information.

 More Information

 If a NACHA payment is included in the owner distributions, the NACHA file is generated and displays in your browser to download. Save the file to your computer. It is ready to be processed and has the bank name as entered in the system preferences and the date and time in the file name. For more information, refer to NACHA Settings (System Preferences) .

 -
 To repeat this process for other owners, click Pay More Owners to return to the first Pay Owners page.
The checks are written and posted to the owner's Management Company pop-up.
