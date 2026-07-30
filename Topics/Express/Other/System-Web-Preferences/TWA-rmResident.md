# Tenant Web Access rmResident (System Web Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Web-Preferences/TWA-rmResident.htm

These system web preferences allow you enable push notifications to be sent directly to each tenant, provided they have set up rmResident , on their mobile device. Additionally, if you are licensed for inspections, you can establish the settings for tenant self-inspections.

 More Information

 This feature is licensed and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 More Information

 If you already have Tenant Web Access (TWA) , your tenants can download the app from the App Store or Google Play and log in using their TWA credentials. rmResident is included with TWA, and no additional setup is needed for your tenants to use the app.

 Related Privileges

 Group
 Privilege
 Column

 System
 System Web Preferences
 Enabled

 Automated Notifications
 Enabled

 For more information, refer to Control User Access .

 Related Preferences

 To access Tenant Web Access settings, at least one location must be enabled for TWA. For more information, refer to Licensing (System Web Preferences) .

 To set these system web preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Web Preferences arrow_forward Tenant Web Access arrow_forward rmResident .

 -
 Edit the settings as desired. Each setting is described below.

 -
 Click Save to accept your changes.

 Preference Descriptions

 This preference group is divided into multiple sections. Each setting is described below.

 Push Notification

 This section allows you enable push notifications to be sent directly to each tenant. Each option is described below.

 Option
 Description

 Payment Due

 Check Enable Payment Due Notification to enable push notifications to be sent directly to each tenant on their mobile device when they have a payment due.

 Day of Month to Send

 The day the monthly push notification is to be sent. For example, if you enter 2 , the notification goes out on the second day of every month.

 More Information

 If you enter 31 , Rent Manager sends the notification on the last day of each month, regardless of the number of days in the month.

 Notification Text

 The custom text you want sent to all your tenants who use rmResident . By default, You have a payment due soon! displays.

 More Information

 Once the push notifications are enabled, the rmResident user must also meet the following conditions:

 -
 The tenant has a balance due as of the Day of Month to Send . Future dated charges are not included.

 -
 The tenant has an active Tenant Web Access (TWA) account.

 -
 The tenant has rmResident installed and is linked to their active TWA account.

 Also, if the tenant has more than one lease or more than one TWA account, they receive only one push notification.

 Tenant Self-Inspection Settings

 This section allows you to enable push notifications to be sent directly to each tenant and set the number of days before a self-inspection expires. Each option is described below.

 More Information

 This section display only if you are licensed for the Inspection feature. For more information, contact your sales representative at sales@rentmanager.com .

 Option
 Description

 Allow tenant to view self-inspection in rmResident after it has been completed

 When checked, the tenant can view previous inspections in rmResident .

 Default days until the inspection expires

 The self-inspection expires in the number of days entered, relative to the date the inspection was kicked off. For example, if you enter 7 , the default expiration date is seven days from the day the inspection is kicked off. By default, this value is set to 5 .

 Enable push notification for tenant self-inspection reminder

 Check to send a push notification to a tenant to remind them to complete their self-inspection. If enabled, the following fields become available:

 Send push notification X days before expiration

 The number of days a push notification is sent to a tenant before their self-inspection expires.

 Push Notification Text

 The notification message that displays to the tenant on their mobile device from rmResident (e.g., Don't forget to complete your inspection ).

 Inspection Opening Message

 The general directions or suggestions for the self-inspection. This text displays at the top of the tenant's inspection in rmResident .

 Signature Box Text

 The text that displays when the tenant is signing the self-inspection in rmResident to confirm its completion (e.g., By signing I confirm that I preformed the inspection and all information is true to my knowledge ).

 Tenant Self-Inspection Invitation Email

 In this section, click Customize Self-Inspection Invitation Email to customize the email that is sent to a tenant when they are assigned a self-inspection. A default message displays but can be changed to suit your needs. To customize the message using scripting, click arrow_forward Script Builder for scripting assistance. When you are finished editing the message, click OK .

 Check Enable push notification for tenant self-inspection email to send a notification to the tenant's mobile device when they are assigned a self-inspection. In the Push Notification Text field, enter the text that displays on the tenant's mobile device (e.g., You have been assigned an inspection ).
