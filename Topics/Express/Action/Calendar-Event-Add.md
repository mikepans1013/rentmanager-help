# Add an Event to the Community Calendar

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Calendar-Event-Add.htm

From the Community Calendar page, you can easily create and schedule community-wide events, such as fundraisers, meetings, repairs, and parties to display to your residents in Tenant Web Access . If an event happens on a regular basis, such as an open house, you can set up an event to automatically recur without the need to manually add an event for each occurrence.

 Related Preferences

 In order for the Community Calendar page to display in Tenant Web Access , the Show Community Calendar option must be enabled in system web preferences. For more information, refer to Tenant Web Access Community Calendar Page Setup (System Web Preferences) .

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Manage Community Events
 Enabled

 For more information, refer to Control User Access .

 To add an event to the community calendar, do the following:

 -
 Go to   arrow_forward Services arrow_forward Community arrow_forward Community Calendars .
The Community Calendar page displays.

 -
 On the left, select the Property at which the event takes place from the drop-down list.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 -
 Click arrow_forward Add Event .

 -
 In the Event Details section, enter the event's information into the available fields described below.

 Field
 Description

 Subject

 The name of the event to display in both Rent Manager and Tenant Web Access (TWA) .

 Event Type

 The category that best describes the event, such as Open Houses . For more information, refer to Community Calendar Event Types (Page) .

 Description

 Additional information about the event to display in TWA. For example, you could inform tenants that they can invite a guest or provide parking instructions.

 Date

 The date that the event is taking place. If this is a recurring event, enter the first date on which the event occurs.

 Time

 The time that the event begins and ends. The start time is entered in the first field and the end time is entered in the second field.

 Location

 The specific place the event is taking place. For example, you can list the units that are part of an open house. This information displays in TWA.

 -
 If this is a recurring event, in the Recurrence section, check Recurring and enter the necessary information in the available fields described below.

 Field
 Description

 Pattern

 This interval measures how much time will pass between occurrences of the event, based on the selected Date on which the event first takes place and the value entered in the Every field (which calculates the frequency).

 For example, if the Date of the first event is on 1/10/ 2026 and you select Weekly , the first instance of the event is scheduled for 1/10/ 2026 , and the following occurrences are scheduled on a weekly basis.

 Every

 How often the event occurs based on the selected Pattern . This is calculated as a number of years, months, weeks, or days that elapse between each instance of the event, starting on the selected Date .

 This field and its effects vary depending on the interval selected in the Pattern drop-down. The following options are available to select:

 Daily

 The number of Days that pass between each occurrence of the event.

 For example, if the event starts on 1/10/ 2026 and you enter 4 , the event is scheduled on January 10 and every four days after: January 14, January 18, and so on.

 Weekly

 The number of Weeks that pass between each occurrence of the event. Additionally, in the On field, select each day of the week from the drop-down list on which the event will occur.

 For example, if you enter 2 for Weeks and in the On field, select Wednesday and Saturday , then the event is scheduled for both Wednesday and Saturday every two weeks.

 Monthly

 The number of Months that pass between each occurrence of the event. Additionally, in the On Day field, select the day of the month on which the event will occur.

 For example, if you enter 3 for Months and 20 for the On Day , the event is scheduled for the twentieth day of the month every three months.

 If the event always occurs at the end of the month, enter 31 in the On Day field. If a month does not have thirty-one days, the event is scheduled for the last day of the month.

 Yearly

 This option establishes that the event occurs once every year on the same date. In the Every field, select the month and date (in MM/DD format) on which the event will annually occur.

 End

 The date on which event occurrences stop. The following options are available:

 Never End

 The events are scheduled out indefinitely based on the established frequency.

 End After

 The number of instances of the event that will be scheduled. For example, if you enter 100 , the event is scheduled one hundred times into the future based on the established frequency.

 If you have selected Weekly and multiple days of the week are scheduled, each day of the week counts towards the entered value as an individual instance.

 End By

 The date by which the recurring event will no longer be scheduled. Events are scheduled in the future until the entered date based on the established frequency.

 The entered date is the last day on which the event can occur, if applicable. For example, if the End By date you enter falls on a Saturday, but the recurring event happens every Friday, the final event is scheduled for the Friday before the End By date.

 -
 Click Save .
The event is added to the calendar for the selected property.
