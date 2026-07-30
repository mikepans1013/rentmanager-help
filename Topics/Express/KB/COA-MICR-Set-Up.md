# Set Up MICR for Checks and Deposits

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/COA-MICR-Set-Up.htm

Magnetic ink character recognition (MICR) is an encoding system that uses special magnetic ink readable by machines to print information like routing and account numbers on checks and deposit slips. You can set up each bank-type general ledger (GL) account to print the MICR line on your checks and deposits.

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 General ledger accounts
 View, Edit

 For more information, refer to Control User Access .

 Add MICR Information for Checks and Deposits

 You must set up MICR for each bank-type GL account individually. To add MICR information to be printed on checks and deposit tickets, do the following:

 -
 Go to arrow_forward Accounting arrow_forward Chart of Accounts and select a bank-type GL account from the list.
The Chart of Account Details pop-up displays.

 -
 In the MICR Information section, check the boxes to enable MICR for checks and deposits.

 -
 In each section, enter the following information. If both checks and deposits use the same information, you can enter details in one section and then click arrow_forward Copy Check Info or Copy Deposit Info to duplicate the details to both sections.

 Field
 Description

 Bank Name
City, State ZIP

 Enter the name of the financial institution, followed by the address, state, and Zip code. This information prints on your deposit tickets.

 Routing Number

 Enter your bank's routing number.

 Account Number

 Enter the account number of the account you make payments or deposits through at this bank.

 Bank Phone Number

 Enter your bank's phone number.

 Company Name

 Enter the name of your company, or enable Use property name and address to use information from the property that makes the check payment or deposit.

 Company Address

 Enter your company's address, or enable Use property name and address to use information from the property that makes the check payment or deposit.

 -
 Optionally, for checks, enable Include Space between Routing and Account Numbers .

 -
 Click Save .
MICR information is set up and now be added when you print checks and deposits from Rent Manager .

 Customize MICR Display Settings for Deposits

 If you use MICR for deposits, you can customize how MICR information displays on the deposit tickets you print from Rent Manager when depositing payments. By default, the routing number always displays in a static position in the middle of the available space. You can select where and how the account and deposit numbers display in relation to the routing number.

 To customize MICR display settings for deposits, do the following:

 -
 Go to arrow_forward Accounting arrow_forward Chart of Accounts and select a bank-type GL account from the list.
The Chart of Account Details pop-up displays.

 -
 In the MICR Information section, next to Deposits , click arrow_forward MICR Setup .

 -
 To include a deposit number in the MICR line for deposit tickets, in the Deposit Number section, enable Show Deposit Number and enter the following information:

 Field
 Description

 Location

 The location in the MICR line of the Start Symbol for the deposit number. Positions in the MICR line are represented by the grid at the bottom of the pop-up.

 For example, to place the deposit number's Start Symbol in the 49 position on the grid, in the Location field, enter 49 .

 Start Symbol

 The symbol or number that always displays at the beginning of the deposit number. This symbol is always placed in the starting Location .

 End Symbol

 The symbol or number that always displays at the end of the deposit number. This symbol is always placed in the position after the last digit of the deposit number.

 Specific Length

 By default, Rent Manager generates a deposit number. To customize how many digits of this default number display, enable Specific Length and select options in the following fields.

 Length

 The total number of digits included in the deposit number. This is the number of digits that display between the Start Symbol and End Symbol .

 Align

 If there are more available digits than the deposit number requires, zeroes are added to the number so that the total number of digits printed is the same number as the Length . Select whether to align the deposit number to the right or left of the available space.

 For example, if you enter 5 for the Length and select Right for the alignment, a deposit number of 1234 prints on your ticket as 01234 . The Left alignment option prints as 12340 .

 -
 To set up how the account number displays in the MICR line for deposit tickets, in the Account Number section, enter the following information:

 Field
 Description

 Location

 Where the account number starts in relation to the routing number. Select Specific Start to choose a specific position on the MICR line to start the account number.

 Start

 If you select Specific Start as the starting location, enter the position where the account number's Start Symbol is placed in the MICR line. Positions in the MICR line are represented by the grid at the bottom of the pop-up.

 For example, if the routing number ends on position 33 and you want to include three spaces between the routing and account numbers, enter 29 to place the account number's Start Symbol with three spaces.

 Start Symbol

 The symbol or number that always displays at the beginning of the account number. This symbol is always placed in the Start position.

 End Symbol

 The symbol or number that always displays at the end of the account number. This symbol is always placed in the position after the last digit of the account number.

 Specific Length

 To customize how many digits of the account number display, enable Specific Length and select options in the following fields.

 Length

 The total number of digits included in the account number. This is the number of digits that display between the Start Symbol and End Symbol .

 Align

 If there are more available digits than the account number requires, zeroes are added to the number so that the total number of digits printed is the same number as the Length . Select whether to align the account number to the right or left of the available space.

 For example, if you enter 8 for the Length and select Right for the alignment, an account number of 123456 prints on your ticket as 00123456 . The Left alignment option prints as 12345600 .

 -
 Click Save .
When you make a deposit and select to print a MICR Deposit ticket, the MICR line displays according to the settings you selected.
