# Lease Term Rent Offset (Pop-Up)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Lease-Term-Rent-Offset.htm

The Lease Term Rent Offset pop-up allows you to establish the difference in the renewal rent amount between the original lease term and the newly selected lease term when offering lease renewals.

 For example, if the current base rent amount (without rent offset applied) is $1000, and they renew their lease for a lease term that has a -5% rent offset, 5% of the base rent amount ($1000) is subtracted from the base rent amount to get the new rent amount ($950) for the new term.

 New Term Rent Amount = Original Term Rent Amount +/– Rent Offset

 Related Preferences

 This pop-up, and the property details page Lease Term Rent Offset tile, display only if the Allow rent offset to be overridden at the property level system preference is enabled. For more information, refer to Lease Renewals (System Preferences) .

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Lease Terms
 View, Edit

 Properties/Units
 Properties
 View

 For more information, refer to Control User Access .

 To manage your lease term offsets, go to   arrow_forward Rental Info arrow_forward General arrow_forward Properties and select a property from the list. Then, on the action bar to the right, click arrow_forward Lease Term Rent Offset .

 Lease Terms

 This section displays the lease terms that describe the duration of tenant leases and can be selected when entering lease details. Lease terms impact when a lease expires to make it easier to keep track of upcoming lease expirations based on the duration of the lease term. Click to edit a lease term's Rent Offset .

 The following columns are available on this pop-up.

 Column
 Description

 Name

 The duration of the tenant's lease, such as twelve months or month-to-month.

 Duration

 The lease term duration in days, months, or years.

 Rent Offset

 The difference in the renewal rent amount between the original lease term and the newly selected lease term when offering lease renewals.

 For example, if a tenant has a lease with a 6-month term and a rent amount of $1050 and they renew their lease for a 24-month term which has a differential of -5%. For the new lease's rent, Rent Manager subtracts 5% of $1050, meaning the rent for the new term is $1000.

 New Term Rent Amount = Original Term Rent Amount +/– Rent Offset

 Rounding

 This section allows you to round the rent amount up or down. To set rounding rules, check Override Default Settings and set the options as needed, then click Save .

 Each option is described below.

 Option
 Description

 Round New Rent

 If checked, escalated rent amounts round to the nearest whole dollar amount.

 The options below determine how to round.

 Standard Rounding

 If the digit following the place value you're rounding to is half the Round to Nearest amount or greater, round up. If it is less than half, round down.

 For example, if you are rounding to the nearest $1 and the rent escalation calculates to exactly $400.50, the new rent is $401. If the rent escalation calculates to $400.49, the new rent is $400.

 Round Up

 Always round up.

 For example, if the rent escalation calculates to $499.01 and you are rounding to the nearest $1, the new rent amount is $500.

 Round Down

 Always round down.

 For example, if the rent escalation calculates to $500.98 and you are rounding to the nearest $1, the new rent amount is $500.

 Round to Nearest

 The nearest increment you wish to round. Select the value to use for rounding ( 1 , 5 , 10 , 25 , or 50 ) in the first drop-down, then select the monetary unit ( Dollars or Cents ) to use in the second drop-down.

 If you select Cents in the second drop-down, calculations include a thousandth decimal place used for rounding. For example, if the calculation produces a value of $425.766, and you selected Round Down round to the nearest 1 Cents , the calculated value is $425.76.
