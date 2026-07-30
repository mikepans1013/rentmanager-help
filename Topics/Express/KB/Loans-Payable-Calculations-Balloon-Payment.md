# Loans Payable Balloon Payment Calculations

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Loans-Payable-Calculations-Balloon-Payment.htm

When you add a loan to Rent Manager , you can mark it as a loan that allows for a balloon payment. With these loans, you make lower monthly payments throughout the life the loan, with the expectation that you pay back a large lump sum at the end of the loan.

 For example, you may have a 30-year loan with a balloon payment due at 10 years. In this case, your total principal and interest amounts are amortized over the full life of the loan (30 years), resulting in significantly lower monthly payments for those first 10 years than if the same loan was amortized for only 10 years. You can then pay off the remaining balance in one lump sum, or it is also common to refinance these loans before the balloon payment is due.

 Relevant data for calculating the monthly payment for loans with balloon payments is entered in the Loan Dates , Principal , and Interest sections when adding a loan to Rent Manager . For more information about creating a new loan, refer to Add a New Loans Payable Loan .

 Loan Information Setup Example

 To demonstrate how Rent Manager handles balloon payment loans, assume the following values:

 Field
 Value

 First Payment Date

 03/01/2024

 Term

 360 (months)

 Total Principal Amount

 100,000

 Interest Method

 30/360

 Interest Rate (Fixed)

 5.0000%

 Balloon Payment Date

 03/01/2034

 Entered in the Add Loan wizard in Rent Manager , this information represents a 30-year, fixed-rate loan of $100,000 with the first payment due on 03/01/2024. The loan uses a 30/360 interest calculation method and has a fixed rate of 5%. The balloon payment is due in 10 years from the loan origination date.

 Monthly Payments Calculation Example

 During loan creation, Rent Manager automatically calculates your normal Total Monthly Payment , including both principal and interest payments. While your monthly payment usually stays the same each month, the split between principal and interest changes as you pay down the loan (the interest payment decreases proportionally to principal payment increasing).

 In the example data, the 30-year loan term with a balloon payment due at 10 years allows for a Total Monthly Payment of $536.82 . If this same loan were amortized for a 10-year loan, the Total Monthly Payment would be $1,060.66 .

 This monthly payment of $536.82 is due each month until the Balloon Payment Date you set when adding your loan. The Amortization Schedule for this loan proceeds as though this was a standard 30-year loan.

 When the Balloon Payment Date arrives, the Amortization Schedule displays one final lump sum payment for the remaining principal amount.
