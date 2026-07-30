# Loans Payable Payment Info (Pop-Up)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Loans-Payable-Payment-Info.htm

When managing loans payable, the payment details for a loan must be correct to avoid discrepancies when posting payments for loans. Using the Payment Info found on each of your payable loans gives you an overview of the existing payment information and the ability to make corrections or updates to said payment information.

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Loans Payable
 View

 For more information, refer to Control User Access .

 To view and manage the payment information for your payable loans, go to arrow_forward Payables arrow_forward Loans Payable arrow_forward Loans Payable . Select a loan from the list, then on the Payment Info tile, click .

 Loan Info

 The interest and payment details related to the loan that determine how payments are calculated and when payments are due.

 Field
 Description

 Lender

 The financial institution, associated with a vendor account, who provided the loan and receives payments.

 Payment Method

 The payment method ( Check , ACH , EFT , Journal ) used to record payments on the loan.

 Due Day

 The day of the month that the loan payment is due to the lender as established on the loan's details page on the Payment Info tile.

 Interest Type

 The loan's interest type.

 Fixed

 The same interest rate is used for the entire term of the loan.

 Variable

 The interest rate changes on a set interval.

 Interest Method

 The method ( 30/360 , 30/365 , Actual/360 (365/360) , Actual/365 (365/365) , Actual/Actual ) used to calculate interest for the loan.

 Principal + Interest Amount

 Determines the amount of principal and interest that is due each month. For loans with the Interest Type set to Variable , this field displays in the Rate Schedule section.

 Interest Rate

 Determines the amount of interest paid in between monthly payments. This is used with the Interest Method to calculate the interest amount due. For loans with the Interest Type set to Variable , this field displays in the Loan Rate Schedule section.

 Rate Schedule

 This section displays for loans with the Interest Type set to Variable to determine the changes in interest during the loan term. To add a new row to the list of rates to be applied to the loan, click Add Rate .

 Column
 Description

 Interest Rate (%)

 Determines the amount of interest paid in between monthly payments. This is used with the Interest Method to calculate the interest amount due.

 Principal + Interest Amount

 Determines the amount of principal and interest that is due each month.

 Payment Effective Date

 Determines when the values on a specific row are used for calculations. These values are used until the next row's Payment Effective Date . If there are no other rows, the values are used for all future payments.

 Past

 Include transactions that occurred before the current date.

 Future

 Include transactions scheduled after the current date.

 Monthly Escrow/Other Costs

 If insurance and taxes are lender managed, typically there is an escrow account that gets paid into each month in addition to the principal and interest. This payment amount changes when escrow funding is evaluated each year. Any other additional costs on the loan can also be added here for tracking purposes. To add a new item to the list of additional costs on the loan., click Add Item .

 Column
 Description

 GL Account

 The specific account from the Chart of Accounts that is used to track the transaction.

 From Date

 The initial date in which the charge is in effect.

 To Date

 The final date in which the charge is in effect.

 Amount

 The dollar amount to be charged each month.

 Past

 Include transactions that occurred before the current date.

 Future

 Include transactions scheduled after the current date.

 Total

 Total amount of all active monthly escrow/other costs

 Loan Automation

 Settings that allow the loan to automatically post payments each month.

 Related Preferences

 To use task automation for your payable loans it must first be enabled in system preferences. For more information, refer to Task Automation (System Preferences) .

 Field
 Description

 Automate loan payments

 Enables or disables the use of automated posting of payments on the loan.

 Post monthly loan payment on the (#) day of every month

 Determines which day the automation posts the payment each month. In addition to selecting a specific day, you can also select End of Month to have Rent Manager post on the final day of each month.

 More Information

 Selecting a day such as 31 adjusts to months with less than 31 days and post on the final day of the month.

 Notification Email

 A notification email is sent to the email address entered in this field when the automation for the loan runs.

 Interest-Only

 Interest-only loans are loans in which the borrower is required to pay only the interest for a certain period of time. The principal is repaid either in a lump sum at a specified date or in subsequent payments. Interest-only loans impact amortization schedules and payment allocations.

 Field
 Description

 Loan includes an interest-only period

 Enables or disables the use of an interest-only period on the loan.

 Full Term

 Sets the interest-only period to be in effect for the entire term of the loan.

 Set Term

 Allows you to determine when the interest-only period starts and ends during the loans term.

 Interest-Only Start Date

 The initial date in which the interest-only period is in effect.

 Interest-Only End Date

 The final date in which the interest-only period is in effect.

 Balloon Payment

 A balloon payment is a larger-than-usual one-time payment at the end of the loan term. Mortgages with a balloon payment have lower payments in the years before the balloon payment comes due, but borrowers owe a large amount at the end of the loan. These types of loans are commonly refinanced before the balloon payment comes due.

 Field
 Description

 Loan includes a balloon payment

 Enables or disables the use of a balloon payment on the loan.

 Balloon Payment Date

 Determines when the balloon payment on a loan is due.
