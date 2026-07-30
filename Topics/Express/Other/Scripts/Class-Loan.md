# Loan Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Loan.htm

This class provides functions for retrieving data about a tenant's owner-financed loans. The class is preceded by the Tenant class and can be followed by a loan-level scripting function.

 Example

 [Tenant().Loan().Principal]

 Result

 Displays the original principal of the tenant's oldest owner-financed loan.

 Class Parameter

 This class can specify a single, optional parameter: an index.

 Index

 An index allows you to return information about a specific loan on an account by using a number system to identify each loan listed. For example, if there are three loans listed on a tenant’s account, they are referenced by indexes 0, 1, and 2. You can specify which loan you want Rent Manager to return information about by referencing an index in your script. If no index is specified, Rent Manager defaults to an index of 0, which represents the first loan in the list.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Tenant.TenantLoanCount() - 1) . This allows you to return data for the most recent loan created for the tenant.

 [Tenant().Loan().CurrentBalance]

 Displays the current balance of the tenant's oldest loan.

 [Tenant().Loan(Tenant.TenantLoanCount-1).CurrentBalance]

 Displays the current balance of the tenant's most recent loan.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 The following examples reflect the syntax that displays when you double-click the functions in the Insertable Fields section.

 Function
 Description

 Adjusted Principal

 [Tenant().Loan(Tenant.TenantLoanCount()-1).AdjustedPrincipal]

 Displays—for the most recent preexisting loan that was established prior to being tracked and managed in Rent Manager 12 —the outstanding remaining principal as it displays in the Adjusted Principal field in the loan’s scoreboard and when the loan is printed.

 Adjusted Start Date

 [Tenant().Loan(Tenant.TenantLoanCount()-1).AdjustedStartDate]

 Displays—for the most recent preexisting loan that was established prior to being tracked and managed in Rent Manager 12 —the projected date of the first payment to be collected as it displays in the Adjusted Start Date field in the loan’s scoreboard and when the loan is printed.

 Current Balance

 [Tenant().Loan(Tenant.TenantLoanCount()-1).CurrentBalance()]

 Displays the principal balance of the tenant's loan.

 Days In Year Divisor

 [Tenant().Loan(Tenant.TenantLoanCount()-1).DaysInYearDivisor]

 Displays the number of days in a year used to calculate the daily interest of the tenant's loan. This value ( 360 or 365 ) is defined when the daily interest loan is created. If the loan is not a daily interest loan, the function outputs 0 .

 Insurance Expiration Date

 [Tenant().Loan(Tenant.TenantLoanCount()-1).InsuranceExpirationDate]

 Displays the Insurance Expiration date for the loan as entered on the General tile of the loan receivable's details page.

 Interest Method

 [Tenant().Loan(Tenant.TenantLoanCount()-1).InterestMethod]

 Displays the method used to calculate interest for the loan as shown on the Loans Receivable page. By default, some columns display only by using .

 Possible values include: Principal Balance , Straight (straight amortization), and Daily .

 Interest Paid

 [Tenant().Loan(Tenant.TenantLoanCount()-1).InterestPaid()]

 Displays the interest paid during a specified date range for the tenant's loan. Any interest paid prior to the loan being tracked in Rent Manager 12 is not included in this total.

 Interest Rate

 [Tenant().Loan(Tenant.TenantLoanCount()-1).InterestRate()]

 Displays the Current Interest Rate (%) on the loan's scoreboard in Rent Manager 12 .

 Is Defaulted

 [Tenant().Loan(Tenant.TenantLoanCount()-1).IsDefaulted]

 Displays True if the remainder of the loan was defaulted; otherwise, displays False .

 Is Open

 [Tenant().Loan(Tenant.TenantLoanCount()-1).IsOpen]

 Displays True if the loan is open and False if it is closed.

 Is Preexisting

 [Tenant().Loan(Tenant.TenantLoanCount()-1).IsPreexisting]

 Displays True if the loan was established prior to setup in Rent Manager and False if it was not.

 Last Charge Date

 [Tenant().Loan(Tenant.TenantLoanCount()-1).LastChargeDate()]

 Displays the date of the last posted recurring loan charges on the tenant's View Transactions pop-up. If there are no charges posted as of the specified date, the function returns nothing.

 Last Preexisting Payment Date

 [Tenant().Loan(Tenant.TenantLoanCount()-1).LastPreexistingPaymentDate]

 Displays the date of the last preexisting loan payment of the loan prior to setup in Rent Manager .

 This function returns a value only if the preexisting loan uses the Daily Interest interest method. If the selected loan is not preexisting or uses another interest method, this function returns nothing. You can test for these values using the IsPreexisting and InterestMethod functions.

 Loan ID

 [Tenant().Loan(Tenant.TenantLoanCount()-1).LoanID]

 Displays the internally generated loan ID for the tenant's loan.

 Maturity Date

 [Tenant().Loan(Tenant.TenantLoanCount()-1).MaturityDate]

 Displays the Maturity Date as listed on the loan receivable's details page on the scoreboard.

 Notice Date

 [Tenant().Lease().NoticeDate]

 Displays the move out Notice date of the selected lease on the tenant's View Leases pop-up.

 Origination Date

 [Tenant().Loan(Tenant.TenantLoanCount()-1).OriginationDate]

 Displays the Origination Date as listed on the Loans Receivable page.

 Other Charges Charge Amount

 [Tenant().Loan(Tenant.TenantLoanCount()-1).OtherChargesChargeAmount]

 Displays the Amount of a charge listed on the Other Charges pop-up. You can view this information on the loan receivable's details page by going to arrow_forward Other Charges .

 Other Charges Charge Type

 [Tenant().Loan(Tenant.TenantLoanCount()-1).OtherChargesChargeType]

 Displays the Charge Type name for a charge listed on the Other Charges pop-up. You can view this information on the loan receivable's details page by going to arrow_forward Other Charges .

 Other Charges Charge Type Description

 [Tenant().Loan(Tenant.TenantLoanCount()-1).OtherChargesChargeTypeDescription]

 Displays the description of the charge type for a charge listed on the Other Charges pop-up. You can view this information on the loan receivable's details page by going to arrow_forward Other Charges .

 Other Charges Comment

 [Tenant().Loan(Tenant.TenantLoanCount()-1).OtherChargesComment]

 Displays the Comment for a charge listed on the Other Charges pop-up. You can view this information on the loan receivable's details page by going to arrow_forward Other Charges .

 Other Charges Count

 [Tenant().Loan(Tenant.TenantLoanCount()-1).OtherChargesCount]

 Displays the number of charges listed on the Other Charges pop-up. You can view this information on the loan receivable's details page by going to arrow_forward Other Charges .

 Other Charges List

 [Tenant().Loan(Tenant.TenantLoanCount()-1).OtherChargesList()]

 Displays the list of charges on the Other Charges pop-up. You can view this information on the loan receivable's details page by going to arrow_forward Other Charges .

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Tenant.TenantLoanCount() - 1) . This allows you to return data for the most recent loan created for the tenant.

 Pay Off Amount

 [Tenant().Loan(Tenant.TenantLoanCount()-1).PayOffAmount()]

 Displays the total payoff amount based on payments received as of a specified date for the loan.

 More Information

 This function considers only payments received, and not the payments projected on the amortization schedule.

 Payment Amount

 [Tenant().Loan(Tenant.TenantLoanCount()-1).PaymentAmount()]

 Displays the total payment amount for the specified payment number of the loan. This value displays in the Payment Due column as listed on the loan receivable's details page on the Amortization Schedule tile.

 Payment Day

 [Tenant().Loan(Tenant.TenantLoanCount()-1).PaymentDay]

 Displays the Payment Day as listed on the loan receivable's details page on the General tile.

 Payments Received

 [Tenant().Loan(Tenant.TenantLoanCount()-1).PaymentsReceived()]

 Displays the total loan payments received as of a specified date range for the loan. Payments received during the preexisting period of the loan prior to setup in Rent Manager are not included in this total.

 Principal

 [Tenant().Loan(Tenant.TenantLoanCount()-1).Principal]

 Displays the Original Principal of the loan receivable.

 Principal Paid

 [Tenant().Loan(Tenant.TenantLoanCount()-1).PrincipalPaid()]

 Displays the total of principal paid as of a specified date range for the loan based on actual payments received. Principal paid during the preexisting period of the loan prior to setup in Rent Manager is not included in this total.

 Reference

 [Tenant().Loan(Tenant.TenantLoanCount()-1).Reference]

 Displays the unique Reference value as entered on the loan receivable's details page on the General tile. This value defaults to the Loan ID but may be edited.

 Sale Amount

 [Tenant().Loan(Tenant.TenantLoanCount()-1).SaleAmount]

 Displays the Sale Amount as listed on the Loans Receivable page.

 Starting Payment Number

 [Tenant().Loan(Tenant.TenantLoanCount()-1).StartingPaymentNumber]

 Displays the Starting Payment # for the loan receivable.

 If the loan is preexisting, this function returns the number of the first payment collected using Rent Manager . If the loan is not preexisting, this function displays 0 .

 Term

 [Tenant().Loan(Tenant.TenantLoanCount()-1).Term]

 Displays the number of months in the Term as listed on the loan receivable's scoreboard.

 Total Other Charges

 [Tenant().Loan(Tenant.TenantLoanCount()-1).TotalOtherCharges()]

 Displays the total amount of all charges listed in the loan's Loan Other Charges pop-up.

 User Defined Field

 [Tenant().Loan(Tenant.TenantLoanCount()-1).UserDefinedField()]

 Displays the value of the loan-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Tenant().Loan(Tenant.TenantLoanCount()-1).UserDefinedField("Originator")]

 Displays the value for the Originator user defined field of the most recent loan.
