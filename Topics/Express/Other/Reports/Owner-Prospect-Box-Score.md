# Owner Prospect Box Score (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Owner-Prospect-Box-Score.htm

The Owner Prospect Box Score report provides detailed information about potential owners who have expressed interest in having their portfolio managed by your property management company over a specified period. This report examines correspondences between sales reps and owner prospects, meetings/calls, contacts, and signed contracts.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Owner Prospect Box Score .

 For more information, refer to Control User Access .

 To view the Owner Prospect Box Score report, do the following:

 -
 Go to arrow_forward Owners arrow_forward Owner Prospects arrow_forward Owner Prospect Box Score .
The Reports: Owner Prospect Box Score page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Options

 Select an option to determine how owner prospect contacts and signed contracts are filtered in the report results. The option selected impacts the Conversion Rate columns.

 Option
 Description

 Within the date range

 Strictly examines all contracts signed within the report date range. No consideration is made for when the owner prospects who signed those contracts were originally contacted.

 After the start date for owner prospects first contacted within the date range

 Examines contracts signed by owner prospects originally contacted within the date range.

 Within the date range for owner prospects first contacted within the date range

 Examines only contracts signed in this date range by owner prospects who were also originally contacted within the same date range.

 Exclude Rejected Owners from the Conversion Rate

 Check to remove owner prospects with a Lost-Rejected status from each sales representative's conversion rate using the following formula:

 Conversion Rate = Contracts Signed / (Total Owner Prospects - Lost-Rejected Owner Prospects)

 Otherwise, owner prospects with a Lost-Rejected status are counted against the conversion rate using the following formula:

 Conversion Rate = Contracts Signed / Total Owner Prospects

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Original Contact

 This section tracks the first contact between sales reps and owner prospects over the specified reporting period.

 The following columns display in this section:

 Column
 Description

 Sales Rep

 The first and last name of the sales rep user whose owner prospect-related activity is being reported.
 Rent Manager users are considered leasing agents when they have been designated with the Sales Rep/Leasing Agent user role. For more information, refer to User Details (Page) .

 Call

 The number of owner prospects who made first contact with your business during the specified reporting period via phone call.

 In order to be counted in this column, the owner prospect must have a Call note listed as the earliest history item on the history/notes of their account or a rmVoIP call is linked to their account. Additionally, the option Spoke with owner prospects on the history/note must be checked for the call to display.

 Email

 The number of owner prospects who made first contact with your business during the specified reporting period via email.

In order to be counted in this column, the owner prospect must have an Email note listed as the earliest history item on the history/notes of their account.

 Text

 The number of owner prospects who made first contact with your business during the specified reporting period via text message.

 In order for a text to be counted in this column, the text must be received or sent using the Text Messaging Center . Texts sent with Text Broadcasting are not counted. To count a text message from an unknown phone number, you need to go to the Text Messaging Center to link the text message to the prospect account. For more information, refer to Text Messaging Center (Page) .

 Walk In/Visit

 The number of owner prospects who made first contact with your business during the specified reporting period via an in-person visit.

 In order to be counted in this column, the owner prospect must have a Visit note listed as the earliest history item on the history/notes of their account.

 Web

 The number of owner prospects who made first contact with your business via Web Chat or a guest card during the Date Range .

 In order to be counted in this column, the prospect must be created via Web Chat or by submitting a guest card from your website. For more information, refer to My Conversations (Web Chat) (Page) and Guest Card Templates (Page) .

 Total Prospects

 The total number of owner prospects originally contacted by each of your sales reps over the specified reporting period. This is calculated by the following formula:

 Total Owner Prospects = Call + Email + Text + Walk In/Visit

 Prospect Breakdown

 The percentage of owner prospects that each sales rep contacted first using the following formula:

 Owner Prospect Breakdown = Total Owner Prospects for the sales rep / Total Owner Prospects

 Follow-ups

 This section tracks any additional communication that is made with owner prospects after the original contact. This accounts for all added follow-up on the account, including follow-up history note items added as an owner.

 The following columns display in this section:

 Column
 Description

 Conv. To Visit

 The number of owner prospects who originally contacted you by phone call, email, or text who then later made an in-person visit during this reporting period.

Owner prospects with an Original Contact of Visit   do not increase the total of this column even if they later come back for another visit.

 Call

 The number of additional calls made to the owner prospects of this specified sales rep (regardless of which agent actually makes the call) during the selected reporting period.
In order for a phone call to count, the Spoke with owner prospects option must be checked or a rmVoIP call is linked to that owner prospect's account.

 Email

 The number of additional emails sent to the owner prospects of this specified sales rep (regardless of which agent actually sends the email) during the selected reporting period.

This column value increases each time a new Email record is added to the history/notes of an owner prospect.

 Text

 The number of additional text messages sent to the owner prospects of this specified sales rep (regardless of which agent actually sends the text) during the selected reporting period. This column value increases each time a new text message is received or sent using the Text Messaging Center . Texts sent with Text Broadcasting are not counted.

 Return Visits

 The number of return visits that owner prospects of this sales rep have made during the specified reporting period.

 Keep in mind that the first time an owner prospect visits you, the visit either

 -

increases the Walk In/Visit column value if this is the owner prospect's original contact with you.

 -
 increases the Conv. To Visit column value if the owner prospect initially communicated with you via phone or email.

 All future visits after the first one are tracked by this column.

 Status

 This section tracks how many owner prospects were lost or rejected, as well as how many contracts are signed and the rate that sales reps are able to convert owner prospects into owners.

 The following columns display in this section:

 Column
 Description

 Lost Prospects

 The number of owner prospects who are no longer interested in utilizing your property management services during the Date Range . Owner prospects can be converted to lost by changing Status on the Lead Information tile of the owner prospect's details page.

 Lost-Rejected

 The number of owner prospects whose portfolios you chose to not manage during the Date Range . Owner prospects can be converted to lost-rejected by changing Status on the Lead Information tile of the owner prospect's details page.

 Owners Converted

 The number of owner prospects who signed a contract and have been converted to owners during the Date Range .

 Conv. Breakdown

 The percentage of contracts signed by owner prospects for each sales rep using the following formula:

 Conversion Breakdown = Owners Converted for a rep / Total Owners Converted for all reps

 Conversion Rate

 The percentage of owner prospects who sign a contract for each sales rep using one of the formulas below.

 If Exclude rejected owners from conversion rate is unchecked, the following formula is used:

 Conversion Rate = Owners Converted / Total Owner Prospects

 If Exclude rejected owners from conversion rate is checked, the following formula is used:

 Conversion Rate = Owners Converted / (Total Owner Prospects - Lost-Rejected Owner Prospects)

 New Owner Prospects by Source

 This section tracks the effectiveness of your advertisement strategies by showing you how many new owner prospects were generated by each of the lead sources during the selected reporting period. A lead source can be selected when an owner prospect account is created, or from an existing owner prospect's details page.

 More Information

 If a lead source is not selected for an owner prospect, Rent Manager defaults in the report to the first source in the list (which is blank). Therefore, be sure to select the actual lead source for each owner prospect in order to generate accurate information.

 The following columns display in this section:

 Column
 Description

 Source

 Lead sources describe how the prospect found out about your business. This information can be helpful when trying to decide on future marketing strategies by examining successful and unsuccessful lead sources. For more information, refer to Prospect Lead Sources (Page) .

 Call

 The number of owner prospects who originally made contact with you by a Call and who cited this lead source as how they found out about your business.

 Email

 The number of owner prospects who originally made contact with you by Email and who cited this lead source as how they found out about your business.

 Text

 The number of owner prospects who originally made contact with you by Text and who cited this lead source as how they found out about your business.

 Walk-In/Visit

 The number of owner prospects who originally made contact with you by a Walk In/Visit and who cited this lead source as how they found out about your business.

 Web

 The number of owner prospects who originally made contact with you via Web Chat or guest card, which automatically cites this lead source when an owner prospect is created via Web Chat or by submission of a guest card. For more information, refer to My Conversations (Web Chat) (Page) and Guest Card Templates (Page) .

 Total Prospects

 The total number of owner prospects who became interested in your business for each lead source.

 Prospect Breakdown

 The percentage of owner prospects attracted by each lead source using the following formula:

 Owner Prospect Breakdown = Total Owner Prospects for the lead source / Total Owner Prospects

 Conv. To Visit

 The number of owner prospects who originally contacted you by phone call, email, or text who then later made an in-person visit during this reporting period.

 Contracts

 The number of owner prospects who signed a contract and were converted to owners.

 Lost

 The number of owner prospects who are no longer interested in utilizing your property management services during the Date Range . Owner prospects can be converted to lost by changing Status on the Lead Information tile of the owner prospect's details page.

 Lost-Rejected

 The number of owner prospects whose portfolios you chose to not manage during the Date Range . Owner prospects can be converted to lost-rejected by changing Status on the Lead Information tile of the owner prospect's details page.

 Conv. Breakdown

 The percentage of contracts signed by owner prospects for each lead source using the following formula:

 Conversion Breakdown = Contracts for a lead source / Total Contracts for all lead sources

 Conversion Rate

 The percentage of owner prospects who sign a contract for each lead source using one of the formulas below.

 If Exclude rejected owners from conversion rate is unchecked, the following formula is used:

 Conversion Rate = Contracts / Total Owner Prospects

 If Exclude rejected owners from conversion rate is checked, the following formula is used:

 Conversion Rate = Contracts / (Total Owner Prospects - Lost-Rejected Owner Prospects)

 Owner Prospects by Day of Week

 This section tracks the number of new owner prospects created during the selected Date Range , their original contact method, and the day of the week on which this contact occurred. This information can show you which days have the highest traffic of new owner prospects so that you can make informed decisions regarding when to schedule the work hours of your sales reps.

 The following columns display in this section:

 Column
 Description

 Day of Week

 The name of each day of the week.

 Call

 The number of owner prospects who originally made contact with you by a Call on each day of the week.

 Email

 The number of owner prospects who originally made contact with you by Email on each day of the week.

 Walk-In/Visit

 The number of owner prospects who originally made contact with you by a Visit on each day of the week.

 Text

 The number of owner prospects who originally made contact with you by Text on each day of the week.

 Web

 The number of owner prospects who originally made contact with you via Web Chat or a guest card on each day of the week.

 Total

 The total number of owner prospects who contacted you for each day.

 % by Day of Week

 The percentage of owner prospects who made original contact by each day using the following formula:

 % by Day of Week = Total for the day of the week / Total for all days of the week

 Property Types from New Owner Prospects

 This section tracks the different types of properties owned by owner prospects originally contacted during the specified reporting period, as well as the number of units at each property type. An owner prospect's properties can be defined after an owner prospect is created using the owner prospect's details page.

 The following columns display in this section:

 Column
 Description

 Property Type

 The name of each category of property that is selected when defining an owner prospect's properties.

 Total

 The total number of properties for each type that is selected when defining an owner prospect's properties.

 Unit Count

 The total number of units contained at all properties of each type, entered when defining an owner prospect's properties.
