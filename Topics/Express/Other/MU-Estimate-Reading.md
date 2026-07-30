# Estimate a Metered Utility Reading

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/MU-Estimate-Reading.htm

When it comes to taking meter readings, there may be times where the meter cannot be accessed (such as the unit being locked and no tenant is there to allow entry). When this happens, the technician may need to estimate the reading until an actual reading can be taken, at which point the tenant's bill is adjusted accordingly.

 Related Privileges

 Group
 Privilege
 Column

 Utilities
 Metered Utilities

 Enabled

 Change current read value and date
 Enabled

 For more information, refer to Control User Access .

 More Information

 Meter reading estimates can be performed only if the Enable Meter Estimates option is checked in your Meter Estimates system defaults. For more information, refer to Meter Estimates (Page) .

 Step 1: Initiate the Estimate

 To record an estimated meter reading, do the following:

 -
 Go to arrow_forward Services arrow_forward Metered Utilities arrow_forward Meter Readings .
The Meter Readings page displays.

 -
 In the Utility field, select the type of utility meter you are taking an estimate for.

 -
 In the Property field, select the property of the unit with a meter you are estimating.
The list of units and meters of the selected utility at the property displays.

 -
 In the Meter Readings tile, select the meter you wish to estimate a reading for.
If the meter you wish to estimate does not display in the list, uncheck the Show consumption exceptions only and Show units with no readings only options at the top.

 -
 In the Edit Readings tile next to the Current Reading field, click Estimate .
The estimated meter reading automatically populates in the Current Reading field. The amount is calculated based on the settings established in your Meter Estimates system defaults. For more information, refer to Meter Estimates (Page) .

 More Information

 If the estimated reading that populates is in an accurate range, no further steps need to be taken and you can proceed to your next meter reading.

 If the meter does not have enough prior data for an amount to be calculated via the default method, or if you click to edit the amount, you are prompted to select an estimate calculation method. Proceed to Step 2: Choose an Estimate Method below.

 -
 If the meter was estimated too many times in a row based on your system settings, a warning pop-up displays. If you wish to proceed with adding an estimate anyway, click Estimate . Otherwise, click Cancel to add the true reading at a later time.

 More Information

 If a meter reading is estimated too many times in a row, this can lead to tenants receiving unusually large bills or even negative bills when the real reading is finally added and cause confusion. You can configure how many consecutive estimates trigger the warning message in your Meter Estimates system defaults. For more information, refer to Meter Estimates (Page) .

 Estimated meter readings display the icon next to the meter on the Meter Readings page and the unit's consumption history.

 Step 2: Choose an Estimate Method

 If you edit the estimated reading or the meter does not have enough data to calculate an estimate, the Choose an Estimate Method pop-up displays. The options available are determined by the settings established in your Meter Estimates system defaults.

 Select one of the estimation methods below, then click OK .

 Option
 Description

 Avg. of Last 3 Postings

 Calculates the average consumption of the unit's last three posted meter readings.

 This option is available only if all three of the meter's prior postings are not estimates.

 Avg. of Last 6 Postings

 Calculates the average consumption of the unit's last six posted meter readings.

 This option is available only if all six of the meter's prior postings are not estimates.

 Enter Estimate Manually

 In the Est. Consumption field, enter a custom consumption amount.

 The consumption amount from the unit's last posting displays for your reference. To view more consumption information from multiple prior postings, click Show Consumption History .

 Last Posting Consumption

 Uses the exact consumption information from the unit's most recent posting.

 Similar Posting Last Year

 Uses the exact consumption amount posted last year on the same day and month as today. If there is no posting on that day, the consumption amount from the posting closest to that date is used.
