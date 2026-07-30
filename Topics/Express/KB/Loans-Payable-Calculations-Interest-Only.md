# Interest-Only Loans Payable Calculations

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Loans-Payable-Calculations-Interest-Only.htm

When you add a loan to Rent Manager , you can mark it as an Interest-Only Loan . Interest-only loans allow you to make payments toward the interest portion only, and not the principal, for a time set by your lender. Usually, this period of interest-only payments covers the start of the loan. After the interest-only term ends, you are required to make payments on both the principal and interest each month. These loans allow you to make significantly lower payments at the start of the loan.

 With loans payable, you can add the dates and terms of the interest-only period, and Rent Manager automatically calculates your expected monthly payments. Then, after the interest-only period ends, Rent Manager creates an amortization schedule for the principal and remaining interest amounts.

 Relevant data for calculating interest-only payments is entered in the Loan Dates , Principal , and Interest sections when adding a loan to Rent Manager . For more information about creating a new loan, refer to Add a New Loans Payable Loan .

 Loan Information Setup Example

 To demonstrate how Rent Manager handles interest-only loans, assume the following values:

 Field
 Value

 First Payment Date

 03/01/2024

 Total Principal Amount

 100,000

 Interest Method

 30/360

 Interest Rate (Fixed)

 5.0000%

 Interest-Only Start Date (Set Term)

 03/01/2024

 Interest-Only End Date (Set Term)

 03/01/2034

 Entered in the Add Loan wizard in Rent Manager , this information represents a 30-year, fixed-rate loan of $100,000 with the first payment due on 03/01/2024. The loan uses a 30/360 interest calculation method and has a fixed rate of 5%. The interest-only period covers the first 10 years of the loan.

 Monthly Payments Calculation Example

 During loan creation, Rent Manager automatically calculates what your normal Total Monthly Payment would be if it includes both principal and interest payments. While your monthly payment usually stays the same each month, the split between principal and interest changes as you pay down the loan (the interest payment decreases proportionally to principal payment increasing).

 In the example data, a regular loan would start with an interest payment of $416.67 and a principal payment of $120.15 , for a Total Monthly Payment of $536.82 .

 This initial interest payment calculation of $416.67 is the value used to determine your monthly interest-only payments. During this 10-year interest-only period, the principal balance of the loan does not change in Rent Manager . In most cases, the monthly interest payment remains the same for the interest-only term. Throughout this period, the remaining Principal Amount also remains the same as the original Total Principal Amount entered during loan creation because you are not making payments toward the principal of the loan.

 After the interest-only period ends at the end of 10 years, the Amortization Schedule adjusts to include the principal amount so that your monthly payment now matches what you entered in the Total Monthly Payment field when adding the loan. The Amortization Schedule proceeds as normal after the Interest-Only End Date passes.
