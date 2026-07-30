# Forecast Models Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Forecast-Models-Details.htm

Forecast models are a set of financial and operational assumptions about your business, such as how much of an increase in rental income you foresee in the future, as well as your projections of increases in costs. Once a forecast model is saved into your database, you are able to view or edit the details provided when the forecast model was created. You may need to add more information or review what the forecast model is considering to better understand the results in the Profit & Loss Forecast report.

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Forecast Models
 View, Edit

 For more information, refer to Control User Access .

 To view the details of a forecast model, go to   arrow_forward Accounting arrow_forward Accounting Setup arrow_forward General arrow_forward Forecast Models and select a forecast model from the list.

 Each forecast model is broken down into sections to make the information easy to find and understand. It provides a way to see how the information entered is affecting the results in the Profit & Loss Forecast report.

 At the top of the page, you can view the Forecast Name and Forecast Description to provide context for the purpose of this forecast. If Active is checked, the model can be used with the Profit & Loss Forecast report. To make a model inactive, uncheck this field.

 The following sections are available on the details page.

 Forecast Annual % By Account Type

 This section displays projected percent changes for each general ledger (GL) Account Type ( Income , Expense , and so on). When the Profit & Loss Forecast report is generated, these account types display on their own lines with the account type's calculated increase or decrease.

 Each number in the Percentage (%) column predicts a change for the corresponding account types. Subaccounts of this account type inherit this projection, unless specifically changed in the next section. To show a decrease, a hyphen ( - ) displays before the value.

 Forecast Annual % By Account

 This section displays projected percent changes for specific GL  Account types ( Rental Income , Insurance Expense , and so on). When the Profit & Loss Forecast report is generated, these account types display on their own lines with the account type's calculated increase or decrease.

 To add a new row, click Add Item .

 Column
 Description

 Account

 The name of the desired individual GL account.

 Percentage

 The desired percentage you wish to project the change for the GL account. A decrease is signified witha hyphen ( - ) before the value.

 Rent Charge Assumption

 This section allows you to view and manage how the model determines what charges are to be considered rent and the amount of rent increase for different types of leases.

 Field
 Description

 Rent charge types

 The Rent Charge Types , as selected on the Property details page, which are factored into the forecast model. The cumulative amount of all selected rent charge types are used as each unit's projected rental rate.

 Rent charge amount for new leases

 The rent amount the model uses to apply to units that have never been leased.

 Unit recurring charge

 Includes all rent charge types selected in the Rent charge types field that are unit-level recurring charges. For more information, refer to Unit-Level Recurring Charges (Pop-Up) .

 Unit type recurring charge

 Includes all rent charge types selected in the Rent charge types field that are unit type-level recurring charges. For more information, refer to Unit Type-Level Recurring Charges (Pop-Up) .

 Unit market rent

 The unit market rent as entered on the unit. For more information, refer to Unit Market Rent (Pop-Up) .

 Use previous tenant's final rent if available

 If checked, any previously rented unit uses the cumulative total of the most recent designated recurring rent charge types assessed to the last tenant. Otherwise, the source of rent charges selected in the Rent charge amount for new leases field is used.

 Rent amount increase (%)

 The increase percentage on the specified rent charge types as entered for the following lease types.

 New lease

 The increase, as a percentage, on the designated rent charge types that a tenant signing a new lease is charged.

 When calculated in the Profit & Loss Forecast report, the current lease (for an occupied unit) or the next lease (for a vacant unit) is calculated without this increase. All subsequent leases reflect the entered increased percentage.

 Lease renewal

 The increase, as a percentage, on the designated rent charge types that a tenant renewing their existing lease is charged.

 When calculated in the Profit & Loss Forecast report, projected leases see a renewal increase on the first of the month after the renewal date.

 Per year for month to month leases

 The increase, as a percentage, on the designated rent charge types that a tenant who has a month-to-month lease is charged.

 When calculated in the Profit & Loss Forecast report, projected leases see a renewal increase on the first of the month after a full year passes based on the lease's start date.

 Per year for commercial leases

 The increase, as a percentage, on the designated rent charge types that a tenant who has a commercial lease is charged.

 When calculated in the Profit & Loss Forecast report, projected leases see a renewal increase on the first of the month after a full year passes based on the lease's start date.

 How Often Does a Tenant Renew Their Lease?

 This section displays the process as to how the model projects renewal rates.

 Field
 Description

 Calculate renewal rate percentage based on

 The process the model uses to calculate the average renewal rates.

 Selected properties per unit type

 This option considers only the properties selected in the Profit & Loss Forecast report options and calculates the consolidated average of renewals per unit type.

 For businesses with large differences between renewal rates in unit types, this may be a more accurate option.

 Selected properties

 This option considers only the properties selected in the Profit & Loss Forecast report options when calculating the average renewal rate.

 This results in a fixed renewal rate for the entire report.

 Selected unit's property

 This option considers the average of each of the properties selected in the Profit & Loss Forecast report options when calculating the average renewal rate.

 This results in an independent renewal rate per property in the report.

 All properties per unit type

 This option considers all properties in the database and calculates the consolidated average of renewals per unit type. If you select inactive properties in the Profit & Loss Forecast report options, those are considered additionally.

 For businesses with large differences between renewal rates in unit types, this may be a more accurate option.

 All properties

 This option considers all properties in the database when calculating the average renewal rate. If you select inactive properties in the Profit & Loss Forecast report options, those are considered additionally.

 This results in a fixed renewal rate for the entire report.

 Set percentage (%)

 This option allows you to manually input a percentage of your choosing, or examine your historical data to calculate an average renewal rate.

 To examine your database for the historical renewal rate, click Calculate .

 Average Lease Length (months)

 The length of time that projected leases last.

 Month to month renewal percentage (%)

 The percent of your tenants with month-to-month leases that do not move out each month.

 How Long Does A Unit Remain Vacant?

 This section displays the process as to how the model projects vacancy rates.

 Field
 Description

 Calculate average days vacant based on

 The process the model uses to calculate the average vacancy rates.

 Selected properties per unit type

 This option considers only the properties selected in the Profit & Loss Forecast report options and calculates the consolidated average of days vacant per unit type.

 For businesses with large differences between vacancy lengths in unit types, this may be a more accurate option.

 Selected properties

 This option considers only the properties selected in the Profit & Loss Forecast report options when calculating the average days vacant.

 This results in a fixed vacancy rate for the entire report.

 Selected unit's property

 This option considers the average of each of the properties selected in the Profit & Loss Forecast report options when calculating the average days vacant.

 This results in an independent number of days vacant per property for the entire report.

 All properties per unit type

 This option considers all properties in the database and calculates the consolidated average of days vacant per unit type. If you select inactive properties in the Profit & Loss Forecast report options, those are considered additionally.

 For businesses with large differences between vacancy lengths in unit types, this may be a more accurate option.

 All properties

 This option considers all properties in the database when calculating the average vacancy length. If you select inactive properties in the Profit & Loss Forecast report options, those are also considered.

 This results in a fixed vacancy rate for the entire report.

 Set average (days)

 This option allows you to manually input a number of days of your choosing or examine your historical data to calculate an average number of days vacant.

 To examine your database for the historical vacancy length, Click Calculate .

 Consider unit vacant based on tenant expected move out date

 If checked, any unit with no Move Out Date on the Tenant details page is examined to see if an Expected Move Out Date is entered. If so, the report uses that date for projections. Otherwise, the unit is considered vacant only after a set Move Out Date is entered.

 Consider unit occupied based on prospect reserved move in date

 If checked, a vacant unit that is reserved by a prospect is considered occupied from the Expected Move In date. Otherwise, the unit is considered vacant until a Move In Date is entered on a tenant record.
