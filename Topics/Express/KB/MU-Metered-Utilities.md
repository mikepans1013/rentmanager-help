# Metered Utilities (MU)

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/MU-Metered-Utilities.htm

Metered Utilities (MU) allows you to bill tenants for usage of utilities such as gas, electric, water, and sewer. Every billing period, individual meter readings are entered and utility consumption charges are calculated and billed to the appropriate tenant. Meter readings can be entered manually, through mobile devices or scanners, or file imports.

 The Metered Utilities tool is most useful if you do any of the following:

 -
 Use meters and measure usage or consumption of the utility

 -
 Charge tenants based on utility consumption

 -
 Are required by city, state, or federal law to charge tenants based on consumption

 More Information

 You may not want to use Metered Utilities if you charge tenants a set amount for utilities each billing period that does not change. In this case, use recurring charges instead.

 Additionally, you may not want to use Metered Utilities if you have one bill for metered utilities at the whole property and need to divide the total amount among the tenants at the property, you should instead use non-recurring or recurring commercial recoverable expenses (CRE) charges. This allows you to divide that total amount by division options, such as evenly or by a percentage of the total square footage. For more information, refer to Add a CRE Recurring Charge .

 Utilities and Meter Types

 Before you can use the Metered Utilities tool, you need to add each utility that you intend to track, set up associated meter types to determine how usage is calculated, and enter information for the specific meters at each unit. For more information, refer to Set Up Metered Utilities .

 Utilities represent what you are measuring, such as gas, electricity, and water. Meter types are the physical meters that read consumption for an associated utility. There are two meter types in Rent Manager : Standard and MU-Plus . Standard meter types are used to calculate utility charges with fixed consumption ranges and utility rates. They provide a basic method of calculating utility charges with fixed consumption ranges and utility rates. These meters calculate one charge based on the total consumption, which can be a tiered rate.

 Metered Utilities Plus (MU-Plus) allows you to use blended rates, apply medical or income discounts, add state and local taxes, or incorporate almost any kind of complex billing calculation. These calculations are done using Rent Manager scripting and the variables have more attributes to allow for more precise customization. Additionally, tenant statements provide more itemized detail about utilities when using MU-Plus meter types.

 You may need to use a MU-Plus meter type for the following circumstances:

 -
 If you need to perform complex calculations like rounding, rate blends, if statements, min/max, or per day fees.

 -
 If you have low-income or medical tenants who qualify for billing discounts.

 -
 If you have different rate zones, meaning tenants in different locations pay different amounts.

 -
 If you are required by law or would prefer to provide details usage statements to tenants that itemize the charge into smaller components.

 More Information

 MU-Plus is often used to meet legal requirements and can involve complex calculations and Rent Manager scripting knowledge. If you would like to get a quote for the Professional Services team at LCS to create your MU-Plus meter types, contact your sales representative at sales@rentmanager.com .

 Meter Reading Workflow

 Every month or billing period, individual meter readings are entered, and utility consumption charges are calculated and billed to the appropriate tenant. Technicians can use rmAppSuite Pro to record meter readings on the app's Meter Readings screen, or fill out a printed Utility Field Entry report and enter the readings later. For more information, refer to Add Meter Readings and Utility Field Entry (Report) .

 Once meter readings for occupied units are entered, you can apply consumption-based utility fees to tenant accounts. For more information, refer to Post Utilities .

 Meter Reading Tools

 Rent Manager has a variety of tools to use while managing the consumption of your meters to account for all readings regardless of the situation. Before you can utilize these tools, you need to add meter information for each unit's meter on the Meter Readings Setup page. For more information, refer to Meter Readings Setup (Page)

 Tool
 Description

 High/Low Settings

 The High/Low Settings pop-up allows you to determine the Consumption Groups , Exception Reasons , and Approval Workflows for your meter readings. Each tab is described below. For more information, refer to Manage Metered Utilities High/Low Settings .

 Consumption Groups

 This tab helps you manage usage by creating ranges that instantly flag unusual meter readings, whether too high or low. Furthermore, you can customize your technicians' process in rmAppSuite Pro by requiring an image of the meter or detailed notes depending on the reading, and quickly review the exceptions with a clean and detailed breakdown in the High/Low Consumption report.

 Exception Reasons

 This tab allows you to choose how to handle meter readings with exceptions when posting charges, as well as configure what reasons (e.g., water leak , recent move in/out , meter malfunction ) can be used on meter exceptions.

 Approval Workflows

 This tab allows you to create meter reading workflows for your properties, choose the users who are responsible for reviewing and approving meter exceptions, and determine when unposted exceptions are locked for reviewers and cannot be edited.

 Meter Exceptions

 Meter exceptions allow you to view and manage all unposted meter readings flagged as exceptions for the selected Property , Utility , and single Billing Period . For more information, refer to Meter Exceptions (Page) .

 Meter Estimates

 Meter estimates allow you to establish the estimate methods used to automatically calculate estimated readings and the number of repeated meter estimates allowed before users are warned. For more information, refer to Meter Estimates (Page) .

 Meter Swaps

 The meter swap tool allows you to accurately track every meter change and bill without gaps. Whether it's swapping out a faulty meter, installing a smart upgrade, or preparing for a new tenant, this tool eliminates the need to manually track two sets of readings—one from the meter being removed, and one from the new meter. In addition, you can link meter swaps directly to service issues, ensuring nothing slips through the cracks. For more information, refer to Swap Meters .

 Off-Cycle Meter Readings

 The off-cycle meter readings tool allows you to instantly trigger a utility meter read when residents move in or out, or a meter is swapped. As soon as the request is submitted, your maintenance tech is automatically notified to capture the meter reading in rmAppSuite Pro . In addition, the off-cycle readings tool provides the ability to select the type of reading, improving data integrity, reducing operational overhead, and enhancing tenant confidence in their usage data. For more information, refer to Move In Wizard and Move Out Wizard .

 Consumption Monitoring

 With Metered Utilities , you can monitor consumption using a series of reports or for individual tenants or units. You can also print their utility consumption history.

 Consumption
 Description

 Reports

 Rent Manager includes multiple reports that can be generated for metered utility lists, usage, and financial information. Some key reports are described below.

 More Information

 This is not a complete list of reports associated with Metered Utilities . Additional reports can be generated by going to arrow_forward Services arrow_forward Metered Utilities and selecting a report from the list.

 Utility Consumption

 This report displays a list of utility consumption through meter readings and the charges for each. You can use this report to quickly compare consumption rates between multiple units or for the same unit across a period of time. This can help you look for irregularities in utility consumption rates or charges.

 For more information, refer to Utility Consumption (Report) .

 High/Low Consumption

 This report displays metered utility readings based on the consumption amount and the consumption range that the amount falls under. This report can be used to review meter readings with abnormally low or high consumption amounts to verify that there are no issues with the meter, or to check with the tenant to understand the cause of their atypical consumption rate.

 For more information, refer to High/Low Consumption (Report) .

 Utility Cost Recovery

 This report displays the amount your company is spending on utilities compared to the amount that tenants are being charged.

 For more information, refer to Utility Cost Recovery (Report) .

 Tenant

 To view the utility consumption of a specific tenant, you can access the tenant's utility consumption history on the their account's Tenant Consumption History pop-up. For more information, refer to Tenant Consumption History (Pop-Up) .

 Unit

 To view the utility consumption of a specific unit (regardless of the tenant(s) that leased it), you can access the unit's utility consumption history on the unit's details page or the Meter Readings page. For more information, refer to View Consumption History (Pop-Up) .
