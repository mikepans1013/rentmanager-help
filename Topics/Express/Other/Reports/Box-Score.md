# Prospect Box Score (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Box-Score.htm

The Prospect Box Score report is best utilized by businesses that manage multiple properties and leasing agents. Leasing agents can use this report to get a better understanding of which demographics and lead sources are most successful at any given period of time. This report examines correspondence with prospects, meetings and/or showings, applications, and signed leases.

 This report consists of several independent tables of information that track how prospects are contacting you or are being contacted first, the efforts of your leasing agents, the number of new prospects acquired through advertisements, which days of the week new prospects made first contact with your business, and even the types of rental units that interest your prospects.

 More Information

 Many columns of the Prospect Box Score report are impacted by the date the prospect had first contact with your business. This date is determined by the earliest Call , Email , or Visit type history/note item associated with the prospect.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Box Score .

 For more information, refer to Control User Access .

 To view the Box Score report, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Prospects arrow_forward Box Score .
The Reports: Box Score page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Properties to Include

 Select each property or a property Group to be included in the report.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 More Information

 Properties with the Property Type of RV/Campground or Short Term Rental do not display in this report. Short term rental property information is available in reports listed in the Short Term Rentals report category.

 Exclude Rejected Applications from Close Rate

 Check to remove rejected applications from each leasing agents' close rate using the following formula:

 Close Rate = Leases Signed / Total Prospects

 Otherwise, rejected applications are counted against the close rate using the following formula:

 Close Rate = Leases Signed / (Total Prospects - Lost-Rejected Prospects)

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Options

 Select an option to determine how prospect applications and signed leases are filtered in the report results. The option selected impacts the Close Rate and Apply Rate columns.

 Option
 Description

 Within the date range

 Examines all leases signed and applications submitted during the report date range, regardless of when the prospects who signed those leases or submitted those applications were originally contacted.

 After the start date for prospects first contacted within the date range

 Examines only leases signed and applications submitted at any time after the start date by prospects who were originally contacted during the date range.

 Within the date range for prospects first contacted within the date range

 Examines only leases signed and applications submitted during the date range by prospects who were also originally contacted during the same date range.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Leasing Agent Performance

 This section tracks the initial contact methods, number of follow-ups, and prospect statuses for each leasing agent over the Date Range .

 Original Contact

 These columns track the first contact between leasing agents and prospects over the Date Range .

 Column
 Description

 Agent

 The first and last name of the leasing agent user whose prospect-related activity is being reported.
 Rent Manager users are considered leasing agents when they are designated with the Sales Rep/Leasing Agent user option. For more information, refer to User Details (Page) .

 Transfer

 The number of prospect accounts generated by processing a transfer when the transfer method is set to Create a new prospect account during the date range. For more information, refer to Tenant Transfer Wizard .

 Call

 The number of prospects who made first contact with your business during the date range via phone call.

 In order to be counted in this column, the prospect must have, with Spoke with prospect checked, a Call type history/note item or an rmVoIP call linked to their account, or a call to the prospect made with Phone Broadcasting listed as the earliest item on their account's History/Notes tile. For more information, refer to Add a Prospect Call to History/Notes .

 Related Preferences

 If desired, you can make the Spoke with prospect option always be checked by checking the Enable "Spoke with prospect" on new calls by default option in system preferences. For more information, refer to Prospect (System Preferences) .

 Email

 The number of prospects who made first contact with your business during the date range via email.

 In order to be counted in this column, the prospect must have an Email (i.e., an inbound or outbound email or a bulk email) or a manually-entered Email Note type history/note item listed as the earliest item on their account's History/Notes tile. For more information, refer to Add a Prospect Email History/Note .

 Text

 The number of prospects who made first contact with your business during the date range via text message.

 In order for a text to be counted in this column, the prospect must have a Text Messages type history/note item (i.e., an inbound or outbound text, a bulk text, or a text sent with Text Broadcasting ) listed as the earliest item on their account's History/Notes tile. To count a text message from an unknown phone number, you need to go to the Text Messaging Center to link the text message to the prospect account. For more information, refer to Text Messaging Center (Page) .

 Walk In/Visit

 The number of prospects who made first contact with your business during the date range via an in-person visit.

 In order to be counted in this column, the prospect must have a Visit type history/note item listed as the earliest item on their account's History/Notes tile. For more information, refer to Add a Prospect Visit to History/Notes .

 Web

 The number of prospects who made first contact with your business via Web Chat or a guest card during the date range.

 In order to be counted in this column, the prospect must be created via Web Chat or by submitting a guest card from your website. For more information, refer to My Conversations (Web Chat) (Page) and Guest Card Templates (Page) .

 Application

 The number of prospects who made original contact by submitting an application using Apply Now during the date range. These prospects are not assigned to a leasing agent and are added to the <Unassigned> row.

 Applications that a prospect starts but does not submit are not counted in this column.

 Total Prospects

 The total number of prospects originally contacted by each of your leasing agents over the date range. This is calculated using the following formula:

 Total Prospects = Call + Email + Text + Walk In/Visit + Application

 Prospect Breakdown

 The percentage of prospects that each leasing agent contacted first using the following formula:

 Prospect Breakdown = Total Prospects for the leasing agent / Total Prospects in the report results

 Follow-ups

 These columns track any additional communication that is made with prospects after the original contact. This accounts for all added follow-ups on the account, including follow-up history/note items added as a tenant.

 Column
 Description

 Conv. To Visit

 The number of prospects who originally contacted you by Call , Email , Text , or by submitting an Application who then later made an in-person visit during the Date Range . Prospects who originally contacted you through a Visit do not increase the total of this column even if they later come back for another visit.

 Call

 The number of additional calls made to the prospects of this specified leasing agent (regardless of which agent actually makes the call) during the Date Range .
 In order for a Call type history/note item or a linked rmVoIP call to count, the Spoke with prospect option must be checked. A call to the prospect made with Phone Broadcasting is also counted.

 Related Preferences

 If desired, you can make the Spoke with prospect option always be checked by checking the Enable "Spoke with prospect" on new calls by default option in system preferences. For more information, refer to Prospect (System Preferences) .

 Email

 The number of additional emails sent to the prospects of this specified leasing agent (regardless of which agent actually sends the email) during the Date Range .

 This column value increases each time a new Email (i.e., an inbound or outbound email or a bulk email) or a manually-entered Email Note type history/note item is added to the prospect's account.

 Text

 The number of additional text messages sent to the prospects of this specified leasing agent (regardless of which agent actually sends the text) during the Date Range . This column value increases each time a new text message is received or sent using the Text Messaging Center , a bulk text is sent, or a text with Text Broadcasting is sent.

 Return Visits

 The number of return visits that prospects of this leasing agent have made during the Date Range .

 Keep in mind that the first time a prospect visits you, the visit either:

 -

 increases the Walk In/Visit column value if this is the prospect's original contact with you.

 -
 increases the Conv. To Visit column value if the prospect initially communicated with you via phone, email, text, and so on.

 All future visits after the first one are tracked by this column.

 Status

 These columns track how many prospects apply using Apply Now and their success rate as well as the number of leases being signed and how many prospects each leasing agent is able to convert to tenants.

 Column
 Description

 Submitted App.

 The number of applications submitted by prospects using Apply Now during the report Date Range .

 App. Breakdown

 The percentage of applications submitted by prospects for each leasing agent compared to the total number of applications submitted. The percentage is calculated using the following formula:

 App. Breakdown = Submitted App. for this agent / Total number of Submitted App. for all agents

 Apply Rate

 The percentage of prospects who submit an application for each leasing agent to help you track each agent's effectiveness in persuading prospects to submit an application. The percentage is calculated using the following formula:

 Apply Rate = Submitted App. for this leasing agent / Total number of prospects for this leasing agent

 Lost Prospects

 The number of prospects who are no longer interested in renting from you during the Date Range . Prospects can be converted to lost on the prospect's details page by updating their account Status . For more information, refer to Change a Prospect Status .

 Lost-Rejected

 The number of prospects that you chose to not let rent from you during the Date Range . Prospects can be converted to lost-rejected on the prospect's details page by updating their account Status .

 Leases Signed

 The number of prospects who signed a lease and were converted to tenants during the Date Range .

 Lease Breakdown

 The percentage of leases signed by prospects for each leasing agent using the following formula:

 Lease Breakdown = Leases Signed for an agent / Total Leases Signed for all agents

 Close Rate

 The percentage of prospects who sign a lease for each leasing agent. The formula used to calculate this value depends on whether you included or excluded rejected applications in the report options.

 Included

 If the Exclude rejected applications from close rate report option is not checked, the following formula is used:

 Close Rate = Leases Signed / Total Prospects

 Excluded

 If the Exclude rejected applications from close rate report option is checked, the following formula is used:

 Close Rate = Leases Signed / (Total Prospects - Lost-Rejected)

 Prospects by Source

 This section tracks the effectiveness of your advertisement strategies by showing you how many new prospects were generated by each of the lead sources during the Date Range . A lead source can be selected when a prospect account is created, or from an existing prospect's details page.

 More Information

 If a lead source is not selected for a prospect, Rent Manager defaults to the first source in the list (which is <Unassigned> ). You need to select the actual lead source for each prospect in order to generate accurate information.

 The following columns display in this section:

 Column
 Description

 Source

 Lead sources describe how the prospect found out about your business. This information can be helpful when trying to decide on future marketing strategies by examining successful and unsuccessful lead sources. For more information, refer to Prospect Lead Sources (Page) .

 Transfer

 The number of prospect accounts generated by processing a transfer when the transfer method is set to Create a new prospect account during the date range. For more information, refer to Tenant Transfer Wizard .

 Call

 The number of prospects who originally made contact with you via a Call and who cited this lead source as how they found out about your business.

 Email

 The number of prospects who originally made contact with you via Email and who cited this lead source as how they found out about your business.

 Text

 The number of prospects who originally made contact with you via Text and who cited this lead source as how they found out about your business.

 Walk In/Visit

 The number of prospects who originally made contact with you via a Visit and who cited this lead source as how they found out about your business.

 Web

 The number of prospects who originally made contact with you via Web Chat or guest card, which automatically cites this lead source when a prospect is created via Web Chat or by submission of a guest card. For more information, refer to My Conversations (Web Chat) (Page) and Guest Card Templates (Page) .

 Application

 The number of prospects who originally made contact with you via submitting an Application using Apply Now and who cited this lead source as how they found out about your business.

 Total Prospects

 The total number of prospects who became interested in your business for each lead source.

 Prospect Breakdown

 The percentage of prospects attracted by each lead source using the following formula:

 Prospect Breakdown = Total Prospects for the lead source / Total Prospects in the report results

 Conv. To Visit

 The number of prospects who originally contacted you by phone call, email, text, or by submitting an application who then later made an in-person visit during the Date Range .

 Submitted App.

 The number of applications submitted by prospects for each lead source.

 App. Breakdown

 The number of applications submitted by prospects for each lead source. The percentage is calculated using the following formula:

 App. Breakdown = Submitted App. for this agent / Total number of Submitted App. for all agents

 Apply Rate

 The percentage of prospects who submit an application using the following formula:

 Apply Rate = Submitted App. for this lead source / Total number of prospects for this lead source

 Lost

 The number of prospects who are no longer interested in renting from you during the report date range. Prospects can be converted to lost on the prospect's details page.

 Lost-Rejected

 The number of prospects that you chose to not let rent from you during the report date range. Prospects can be converted to lost-rejected on the prospect's details page.

 Leases Signed

 The number of prospects who signed a lease and are converted to tenants during the date range for each lead source.

 Lease Breakdown

 The percentage of leases signed by prospects for each lead source using the following formula:

 Lease Breakdown = Leases Signed for a lead source / Total Leases Signed for all lead sources

 Close Rate

 The percentage of prospects who sign a lease for each lead source using one of the formulas below. The formula used to calculate this value depends on whether you included or excluded rejected applications in the report options.

 Included

 If the Exclude rejected applications from close rate report option is not checked, the following formula is used:

 Close Rate = Leases Signed / Total Prospects

 Excluded

 If the Exclude rejected applications from close rate report option is checked, the following formula is used:

 Close Rate = Leases Signed / (Total Prospects - Lost-Rejected Prospects)

 Prospects by Day of Week

 This section tracks the number of new prospects created using the various forms of communication for each day of the week during the Date Range , their original contact method, and the day of the week on which this contact occurred. This information can show you which days have the highest traffic of new prospects so that you can make informed decisions regarding when to schedule the work hours of your leasing agents.

 The following columns display in this section:

 Column
 Description

 Day of Week

 The name of the day.

 Transfer

 The number of prospect accounts created via the Transfer a Tenant wizard during the date range. For more information, refer to Tenant Transfer Wizard .

 Call

 The number of prospects who originally made contact with you via a Call on each day of the week.

 Email

 The number of prospects who originally made contact with you via Email on each day of the week.

 Text

 The number of prospects who originally made contact with you via Text on each day of the week.

 Walk In/Visit

 The number of prospects who originally made contact with you via a Visit on each day of the week.

 Web

 The number of prospects who originally made contact with you via Web Chat or a guest card on each day of the week.

 Application

 The number of prospects who originally made contact with you by an Application on each day of the week.

 Total

 The total number of prospects who contacted you each day.

 % by Day of Week

 The percentage of prospects who make original contact by each day using the following formula:

 % by Day of Week = Total for the day of the week / Total for all days of the week

 Prospects by Interested Unit Type

 This section tracks how many new prospects are expressing interest in each category of unit during the Date Range . A unit preference can be selected when a prospect account is created, or from an existing prospect's details page.

 The following columns display in this section:

 Column
 Description

 Unit Type

 The name of each category of rental unit that is selected as a prospect's unit preference.

 Total

 The total number of units for each unit type that are selected as a unit preference by a prospect.
