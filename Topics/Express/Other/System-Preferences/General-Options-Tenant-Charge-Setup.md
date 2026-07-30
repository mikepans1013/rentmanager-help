# Tenant Charge Setup (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/General-Options-Tenant-Charge-Setup.htm

These system preferences allow you to automatically generate both recurring and one-time charges for new tenants when a prospect is converted to a tenant with the Move In wizard, or when you create a tenant using Add Tenant wizard.

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
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward General Options arrow_forward Tenant Charge Setup .

 -
 Edit the settings as desired. Each setting is described below.

 -
 Click Save to accept your changes.

 Preference Descriptions

 This preference group is divided into multiple sections. Each setting is described within the corresponding section below.

 Default Recurring Charges

 Default recurring charges can be used to create one or more tenant recurring charges that generate automatically for new tenants when prospects are converted to tenants in the Move In wizard and/or new tenants are created in the Add Tenant wizard.

 To add a default recurring charge to the list, do the following:

 -
 Click Ton Add Recurring Charge to add a new row.
The Recurring Charge Setup pop-up displays.

 -
 In the Charge Type drop-down list, select the charge type that is used for the automatically-generated recurring charge.

 -
 In the Comment field, enter additional information that displays in the Comment column for the default recurring charge. To select a memorized comment, click .

 -
 In the Where does this tenant-level charge come from? section, select one of the following options to determine the source of the tenant-level recurring charge:

 Option
 Description

 Asset Market Rent

 Generate a recurring charge with an amount based on the value entered on the asset's details page in the Market Rent field.

 Calculation

 Use a scripting formula to automatically calculate an amount for the recurring charges for each new tenant. To open the Script Builder for scripting assistance, click .

 Flat Amount

 The desired amount to use for all automatic recurring charges for each new tenant using the selected charge type.

 Pet Type Recurring Amount

 Base the amount on the default charge amount for pet types. This recurring charge is added only if the tenant has a pet of one of the selected Pet Types . Additionally, you can set a Max Amount so in the case of multiple pet types selected, the recurring charge does not go over a specific amount.

 More Information

 Prospects with pets entered on their details page can have recurring charges automatically created as tenant recurring charges when they are converted to tenants with the move in wizard. To set this default tenant charge, you need to enter the Amount of the charge in the Recurring Amount section on the Pet Type Details pop-up for the desired pet type either by creating a new one or editing an existing pet type.

 Unit Market Rent

 Generate a one-time charge with an amount based on the unit's market rent as of the Move In date, as defined on the unit details page's Current Market Rent tile.

 Unit Recurring Charge

 Generate a recurring charge with an amount based on an existing unit recurring charge with the same Charge Type as selected above.

 Unit Type Recurring Charge

 Generate a recurring charge with an amount based on an existing unit type recurring charge associated with the leased unit and with the same Charge Type as selected above.

 -
 Click OK .
The charge is added to the list. If you have multiple charges, click and drag on each item to reorder them in the list.

 -
 If applicable, repeat the previous steps to add any additional default recurring charges you need.

 -
 To create a one-time charge on new tenant accounts in the current month for each recurring charge that already posted for next month through post recurring charges. check If the recurring charges for next month have already been posted, automatically create one-time charges . The following options are enabled when this is selected.

 Option
 Description

 Post day

 To further customize information about the one-time charge posted to new tenant accounts, you may edit the Post day to adjust which day of the month the one-time charge displays as the posting day.

 Use rent due day for posting

 If selected, one-time charges are posted on the day established in the tenant details page's Due Day field.

 -
 Click Save to save your changes.

 Default One-Time, Deposit, and Prorated Charges

 Default one-time charges allow you to automate the creation of one-time charges to be applied to new tenants. For example, a one-time charge can be created for routine charges, like security deposits, which are collected when a tenant begins their lease. Additionally, a one-time charge can be prorated to automatically generate charges for partial charges, such as the first rent charge.

 To add a default one-time charge to the list, do the following:

 -
 Click Add One-Time Charge to add a new row.
The One-Time, Deposit, and Prorated Charge Setup pop-up displays.

 -
 In the Charge Type drop-down list, select the charge type that is used for the automatically-generated one-time charge.

 -
 In the Comment field, enter additional information that displays in the Comment column for the one-time charge. To select a memorized comment, click .

 -
 In the Where does this amount come from? section, select one of the following options to determine the source of the one-time charge:

 Option
 Description

 Asset Market Rent

 Generate a one-time charge with an amount based on the value entered on the asset's details page in the Market Rent field.

 Flat Amount

 The desired amount to use for all automatic one-time charges for each new tenant using the selected charge type.

 Pet Type One-Time Fee

 Base the amount on the default charge amount for pet types. This one-time is added only if the tenant has a pet of one of the selected Pet Types . Additionally, you can set a Max Amount so in the case of multiple pet types selected, the charge does not go over a specific amount.

 More Information

 Prospects with pets entered on their details page can have one-time charges automatically created as tenant recurring charges when they are converted to tenants with the move in wizard. To set this default tenant charge, you need to enter the Amount of the charge in the Recurring Amount section on the Pet Type Details pop-up for the desired pet type either by creating a new one or editing an existing pet type.

 Pet Type Pet Deposit

 Base the amount on the default deposit charge amount for pet types. This one-time charge is added only if the tenant has a pet of one of the selected Pet Types . Additionally, you can set a Max Amount so in the case of multiple pet types selected, the recurring charge does not go over a specific amount.

 More Information

 Prospects with pets entered on their details page can have one-time charges automatically created as tenant recurring charges when they are converted to tenants with the move in wizard. To set this default tenant charge, you need to enter the Amount of the charge in the Recurring Amount section on the Pet Type Details pop-up for the desired pet type either by creating a new one or editing an existing pet type.

 Unit Market Rent

 Generate a one-time charge with an amount based on the unit's market rent as of the Move In date, as defined on the unit details page's Current Market Rent tile.

 Unit Recurring Charge

 Generate a one-time charge with an amount based on an existing unit recurring charge with the same Charge Type as selected above.

 Unit Security Deposit

 Generate a one-time charge with an amount based on the default security deposit amount set up in the unit's Default Security Deposits tile.

 Unit Type Recurring Charge

 Generate a one-time charge with an amount based on an existing unit type recurring charge associated with the leased unit and with the same Charge Type as selected above.

 -
 Optionally, to prorate the one-time charge based on the Move In date, check Prorate overall charge amount based on move in date .

 -
 Click OK .
The charge is added to the list. If you have multiple charges, click and drag on each item to reorder them in the list.

 -
 If applicable, repeat the previous steps to add any additional one-time charges you desire.

 -
 Click Save to save your changes.

 General

 This section determines the general options for setting up tenant charges.

 Field
 Description

 Exclude inherited charges

 Prevents recurring charges on the property, unit type, or unit level from being inherited by new tenants and select the desired charge types from the drop-down list.

 Post zero charges

 Creates charges on a tenant account even if the charges have a value of 0 .
