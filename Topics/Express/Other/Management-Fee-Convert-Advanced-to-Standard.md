# Convert Advanced Management Fee Setup to Standard

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Management-Fee-Convert-Advanced-to-Standard.htm

The Management Fee Conversion wizard is an integrated series of pages designed to help you easily convert an existing advanced management fee structure into a standard management fee structure in Rent Manager . For more information on the different management fee setup options, refer to Management Fee Setup Comparison .

 Standard management fee setups examine all tenant and prospect payments allocated to specified charge types since your last management fee posting, which allows you to post fees as often as you like. Additionally, this method allows for more transparency for the transaction details of a management fee posting, and that transparency helps you and your owners understand the charge calculations in greater detail.

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View

 Management Fee Setup
 Add, Edit

 For more information, refer to Control User Access .

 Step 1: Post Fees Prior to Conversion

 Before you convert your management fees, it is recommended that you post fees for that property. In the case of converting a management fee template, you must post fees for all properties that use the fee template you are about to convert.

 Go to arrow_forward Owners arrow_forward Management Fees arrow_forward Post Management Fees and post fees for the associated property or properties. For more information, refer to Post Management Fees .

 More Information

 Since standard management fees look at payments that are allocated on the active start date or after, it is important to post management fees for the day before the new setup begins. This ensures you have collected all management fees due to you before the active start date of the new standard setup.

 Step 2: Navigate to the Fee Setup

 You can convert the fee setup for a management fee template or for a property's custom management fee setup.

 Management Fee Template

 To convert a fee template setup, go to arrow_forward Owners arrow_forward Management Fees arrow_forward Management Fee Templates . Then in the Advanced section for the template you wish to convert, click arrow_forward Convert .

 Custom Property Fee Setup

 To convert a custom property fee setup, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select the property with an advanced fee setup.
The property's details page displays.

 -
 On the action bar to the right, click arrow_forward Fees Setup .
The Fees Setup pop-up displays.

 -
 At the top of the pop-up, click Convert to Standard .

 Step 3: Review Fee Information

 On the left, there are four tabs of information with corresponding tiles to review for the management fee setup. This information cannot be edited, but is displayed to give you a transparent view of how the fees are converted.

 Conversion Information

 This tile displays a general overview of how your fees are calculated with the current setup versus how the are calculated after the conversion, such as the accounting basis and where fees are collected from.

 Monthly and Per Posting Fees

 On this tile, the Fee column displays each field in the current advanced fee setup. The Advanced Method (Current) column displays the amounts or percentages of the fees from the original setup, while the Standard Method (New) column displays how those amounts or percentages will be converted for the new setup. The fee conversions are described in the table below.

 More Information

 The options for Prorate Per Occupied Fee and Post Per Unit do not display in the conversion wizard, but are transferred to the new setup upon completing the conversion. For example, if both are checked on the advanced setup, then they are both checked on the standard setup after conversion.

 Fee
 Conversion

 Minimum Fee

 The minimum amount of management fees to collect from this property. When management fees are posted, if your calculated fees are below the minimum fee, this amount is charged instead.

 The previous setup's Per Posting minimum fees are changed to Per Month .

 Maximum Fee

 The maximum amount of management fees to collect from this property. When management fees are posted, if your calculated fees are above the maximum fee, this amount is charged instead. With standard fee setups, if multiple postings are made in the same month, the sum of those postings will not exceed this maximum fee amount.

 The previous setup's Per Posting maximum fees are changed to Per Month .

 Flat Fee

 A flat-rate fee that is collected on a per month basis when you post management fees. With standard fee setups, this fee applies each time your management fee posting period includes the first day of a month.

 Per Unit Fee

 The monthly flat-rate fee that you collect for each unit at the managed property. With standard fee setups, this fee applies each time your management fee posting period includes the first day of a month.

 % of Net Income

 This information does not convert because this option is not available with standard fee setups.

 % of Total Income

 This information does not convert because this option is not available with standard fee setups.

 Per Occupied Fee

 A flat-rate fee that you collect for each occupied unit in the property at the time of the management fee posting. This fee posts every time you post management fees.

 Fees Conversion

 This tile displays the general ledger (GL) accounts from the original advanced setup and the charge types associated with each GL account, as well as the percentage that will be collected from each. The conversion details are described in the table below.

 Column
 Description

 Chart Account Fees (Current)

 All GL accounts used in the original advanced setup (except for those identified as pass through).

 Warning

 Standard fees can be collected only on a cash accounting basis because they are calculated based on allocated payments. If the Method of a GL account in the Chart Account Percentages is set to Accrual , the GL account is not converted.

 Charge Type (New)

 The charge types used in the new standard setup. All charge types linked to the specified GL account are included. If a GL account is not linked to any charge types, the fees associated with that GL account are not converted.

 Percentage

 The percentages collected for the payments allocated to each charge type. These match the percentages from the original advanced setup for the associated GL account.

 Pass Through Conversion

 For each GL account marked as Pass Through , those fees are pulled in as pass throughs for the associated charge types. The conversions details are described in the table below.

 Column
 Description

 Chart Account Fees (Current)

 All GL accounts in the original advanced setup that are collected at 100% or are marked as pass through.

 Charge Type (New)

 The charge types used in the new standard setup. All charge types linked to the specified GL account are included. If a GL account is not linked to any charge types, the fees associated with that GL account are not converted.

 Percentage

 The percentage from the original setup remains the same for the new setup.

 Step 4: Set Active Dates for Properties

 Once you have reviewed the information, click Convert .

 After the fee setup is converted, you must then set when the new fee setup begins. Fee templates must be also assigned to their properties with a start date. Refer to the headings below for next steps depending on the fee setup you converted.

 Management Fee Template

 If you converted a management fee template, do the following:

 -
 Next to template, click arrow_forward Assign .
The Assign Fee Setup pop-up displays.

 -
 Enter or select the needed information in the available fields.

 Field
 Description

 Active Start

 The date on which this new fee setup begins for the selected properties. This should be set for the day after the fees were posted for in step 1.

 The previous fee setup for the properties will automatically have an end date set one day before the Active Date .

 Properties

 Each property or property group that should be assigned this new fee setup for the selected date.

 -
 Click OK .
The fee setup is assigned to the selected properties and takes effect on the selected date.

 Custom Property Fee Setup

 By default, when you click Convert , the Active Start Date for the new standard setup is automatically set to today's date and the Active End Date for the previous advanced setup is automatically set to yesterday's date.

 If these dates need to be changed (for example, today's date is 8/1 but you need the new fee setup to be in place on 7/25 and you posted fees for 7/24), do the following:

 -
 On the right, click the icon to view the previous fee setup.

 -
 In the Active End Date field, enter the date on which management fees were last posted.

 -
 Click Save .
 The date is updated and the page refreshes to display the current management fee setup.

 -
 In the Active End Date field, enter the date for the day after management fees were last posted.

 -
 Click Save .
The management fee start and end dates are updated.
