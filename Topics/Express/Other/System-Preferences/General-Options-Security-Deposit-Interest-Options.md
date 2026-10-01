# Security Deposit Interest Options (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/General-Options-Security-Deposit-Interest-Options.htm

These system preferences allow you to control the default options for handling the interest earned by tenants on their security deposits.

 More Information

 These options can be overridden for individual properties on the property's details page. For more information, refer to Interest Options for Security Deposits (Pop-Up) .

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
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward General Options arrow_forward Security Deposit arrow_forward Interest Options .
The System Preferences: Security Deposit - Interest Options page displays.

 -
 Edit the settings as desired. Each setting is described in the headings below.

 -
 Click Save .
The system preference configuration is updated.

 Interest Calculation

 In this section, determine how Rent Manager calculates earned security deposit interest. Select one of the following options:

 Option
 Description

 Annual Compounding

 Tenants earn interest on both their security deposits and the interest already earned on those deposits. When calculating interest across more than one year, the interest is compounded on an annual basis using the Rates schedule defined either on this page or for that specific property.

 Simple

 Tenants earn interest only on their security deposits. Interest is not compounded.

 Disbursement Method

 In this section, determine how Rent Manager applies the interest tenants earn on their security deposits when posting the accrued interest when posting security deposit interest. Select one of the following options:

 Option
 Description

 Apply to Security Deposit

 Two line items are posted to the tenant's account: a charge with the security deposit charge type and a credit for the earned interest allocated to the charge. This increases the security deposit held amount displayed on the scoreboard of the tenant's details page. If a tenant has more than one security deposit charge type on their account, the interest is applied proportionally amongst those charges.

 Credit

 The interest earned is posted as a credit for the tenant. In the Credit Charge Type  field, select the charge type to preallocate this credit transaction, such as a rent charge.

 More Information

 When refunding a tenant's security deposit, checking Include Interest adds interest accrued since the last security deposit interest posting. For example, if that posting occurred one year before the refund, the refund includes one year of accrued interest. For more information, refer to Refund a Security Deposit .

 Rates

 In this section, define the annualized rates in which interest is earned on security deposits. To add annual interest rates, do the following:

 -
 Click   Add Item .

 -
 In the Year column, enter the year to which the annualized interest rate is applied.

 -
 In the Rate (%) column, enter the annualized interest rate percentage for that year.

 -
 Repeat these steps for each year and interest rate you wish to add.

 To delete a created interest rate for a year, on the year you wish to delete, click arrow_forward Delete .

 More Information

 Use the Rates table to determine the first year to start calculating interest on held tenant security deposits and to track the rate change in subsequent years. Every year prior to the earliest year entered into the Rates table is calculated at 0%, meaning that interest is not earned on deposits held during those years. If a year is skipped in the Rates table, Rent Manager automatically uses the rate of the most recent year in which a rate was entered.

 Charge Type

 In this section's drop-down list, select the charge type to use for posting security deposit interest credits for the tenant. The credits posted for both the Apply to Security Deposit and Credit disbursement methods use the selected charge type.
