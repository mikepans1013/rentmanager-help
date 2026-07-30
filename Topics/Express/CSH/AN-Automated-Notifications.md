# Automated Notifications (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/AN-Automated-Notifications.htm

With automated notifications, you can send alerts to a customized list of recipients when a certain set of conditions are met, such as when a new service issue is created or an amenity reservation date is upcoming.

 In addition to specific users and user roles, certain automated notifications can be sent to tenants, prospects, owners, and even external recipients who do not have contact information saved in Rent Manager . Additionally, when using Rent Manager's scripting language, you can create email and text message templates that send personalized messages to recipients. These alerts can make sending reminders, status updates, notice of actionable items, and communication about events a completely automatic process to streamline workflows for your business.

 More Information

 Automated notification emails are sent from donotreply@rentmanager.com .

 Related Privileges

 Group
 Privilege
 Column

 System
 Automated Notifications
 Enabled

 For more information, refer to Control User Access .

 To view the available automated notifications, go to arrow_forward Administration , then go to Automation arrow_forward General arrow_forward Automated Notifications .

 Column Descriptions

 The following columns are available on the Automated Notifications page.

 Column
 Description

 Notification

 The name of the customizable notification.

 Active

 The number of configurations within the notification marked as Active . If no configurations are currently active, displays 0 .

 Recipients

 The name of each recipient of the notification, or the type of recipient who receives the notification (e.g., <Property Manager> , <Tenant> ).

 Triggered By

 Indicates whether the automated notification is triggered by an Event or is sent on a Schedule . Each notification trigger is described below.

 Event

 Notifications are sent immediately once the notification's conditions are met. For example, the Issue Assigned to User notification is sent to the selected recipient(s) as soon as an issue is assigned to any applicable users.

 Schedule

 Notifications are sent overnight on the day that the notification's conditions are met. For example, the Issue Due notification is sent to the selected recipient(s) based on the value entered in the Days until issue is due field of the notification setup. If the issue is due on January 31, 2026 , and the Days until issue is due value is 2 , the notification is sent on January 29, 2026 .
