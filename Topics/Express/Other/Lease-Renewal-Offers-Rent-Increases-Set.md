# Set Renewal Rent Increase

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Lease-Renewal-Offers-Rent-Increases-Set.htm

The Renewal Increases page allows you to track tenants with leases that have an approaching Lease End date within a specified number of months. From this page, you can set the rent charge amount for tenants to increase using a variety of methods, including flat amounts, percentages, market rent values, and calculated formulas.

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View

 Tenants/Prospects
 Lease Terms
 View

 Set Renewal Rent Increases
 Enabled

 For more information, refer to Control User Access .

 Step 1: Set Renewal Increases Filters

 Before you can set renewal rent increases for tenants, you first need to set filtering options for the associated properties and applicable expiration date range. The tenants that display in the Set Renewal Rent Increase pop-up are populated based on these filters.

 To set renewal increase filters, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Leasing arrow_forward Renewal Increases .
The Renewal Increases page displays.

 -
 At the top, select the desired Properties associated with the tenant(s) whose renewal rent increases need to be set.

 -
 In the Lease Expiration From and Lease Expiration To fields, select the date range of lease expirations for which you need to set increases. Options are available from six months in the past up to eleven months in the future.

 Step 2: Set Renewal Rent Increases

 To set renewal rent increases, do the following:

 -
 On the Renewal Increases page, click Set Rent Increases .

 -
 In the Filters tile, make selections in the available fields to control the tenants listed on the pop-up:

 Field
 Description

 Include Status

 Include tenants whose renewal rent increases are already Set and/or Approved . Entering new rent increase information overwrites any existing set amounts for either status if checked.

 Lease Term

 The lease duration(s) for tenants to include in the list.

 Unit Type

 The unit or rentable asset type(s) whose associated tenants are included in the list.

 User Defined Field

 A tenant-type user-defined field (UDF) and its associated User Defined Value that you want to use to filter the tenants from the drop-down list.

 -
 In the Modify Rent tile, select the Rent Charge Type of the unit or rentable asset you want to increase from the drop-down list.
The tenant list is filtered to display only tenants with recurring charges of the selected charge type.

 -
 Select how to increase the renewal rent from the available options:

 Field
 Description

 Calculation

 A scripted formula to calculates the new renewal rent charge(s). To open the Script Builder for scripting assistance, click .

 Increase By

 Increase the renewal rent charge(s) by a specific dollar amount. Alternatively, enter a value and select % to increase the rent charge(s) by a set percentage.

 New Amount

 A full dollar amount is used for the new renewal rent charge(s).

 No Increase

 Do not increase the renewal rent charge(s).

 Use Market Rent

 The renewal rent charge(s) to matches the current market rent value for the tenant's unit or rentable asset.

 -
 In the Comment field, enter an optional note to explain this renewal rent increase, or click to select a memorized comment.

 -
 In the Rounding tile, if you want to round the increased amount to a certain whole dollar amount, select Round New Rent and choose from the available options:

 Field
 Description

 Round Down

 Always round down to the next Round to Nearest interval.

 For example, if you select 50 Dollars as the nearest amount and the rent escalation calculates to $2,099.99, the renewal rent amount is rounded down to $2,050.00.

 Round Up

 Always round up to the next Round to Nearest interval.

 For example, if you select 10 Cents as the nearest amount and the rent escalation calculates to $2,066.01, the renewal rent amount is rounded up to $2,066.10.

 Standard Rounding

 If the renewal rent increase amount is half the Round to Nearest interval or more, the increase value is rounded up to the nearest full amount. If the increase is less than half the Round to Nearest , the increase value is rounded down to the nearest full amount.

 For example, if you select 5 Dollars as the nearest amount and the rent escalation calculates to $2,066.00, the renewal rent amount is rounded up to $2,070.00. If the rent escalation calculates to $2,064.00, the renewal rent amount is rounded down to $2,060.00.

 Round to Nearest

 The nearest increment you wish to round to. Select the value to use for rounding ( 1 , 5 , 10 , 25 , or 50 ) in the first drop-down, then select the monetary unit ( Dollars or Cents ) to use in the second drop-down.

 If you select Cents in the second drop-down, calculations include a thousandth decimal place used for rounding. For example, if the calculation produces a value of $425.766, and you selected Round Down round to the nearest 1 Cents , the calculated value is $425.76.

 Step 3: Review Tenants and Save

 Once the renewal increase method is established, finish setting the increase amounts by doing the following:

 -
 At the bottom of the pop-up, select the tenant(s) whose renewal rent is being increased.

 -
 Click Save Selected to set the renewal rent increase(s) for the selected tenants and keep the pop-up open for more increases, or click Save Selected & Close if you are finished adding renewal rent increases.

 -
 If you have the user privilege to approve rent increases, the Set Rent Increase pop-up displays.

 Related Privileges

 To approve renewal rent increases while setting amounts, the following privilege is required:

 Group
 Privilege
 Column

 Tenants/Prospects
 Approve Renewal Rent Increases
 Enabled

 For more information, refer to Control User Access .

 Click Yes to approve the renewal rent increases, or click No to allow them to be approved at a later time.
The Set Rent Increase pop-up closes and the renewal increase amounts are set.
