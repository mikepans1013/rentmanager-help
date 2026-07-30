# Manage Queues (Web Chat) (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Web-Chat-Manage-Queues.htm

Rent Manager 's Web Chat feature allows you to place a chat button on your Tenant Web Access (TWA), Owner Web Access (OWA), and Web Template Suite sites, as well as custom websites. When a visitor clicks this button, they are connected with a Rent Manager user to begin a web chat. If you are setting up Web Chat for the first time, refer to Set Up Web Chat for more information.

 More Information

 This feature is licensed and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Web Chat queues allow you to direct incoming chats to the user(s) most appropriate to assist. Queues must be established as part of setting up Web Chat in Rent Manager and multiple queues can be added. For example, you may specify that property managers are the users who answer chats inbound from Tenant Web Access , while leasing agents should answer prospects who begin a chat on your property website.

 Within each queue, you determine the questions a visitor answers when they initiate a chat, the Rent Manager users who may act as communication agents for each queue and how many conversations they may take, and whether or not visitors can leave offline messages when no agents are available.

 Related Privileges

 Group
 Privilege
 Column

 Web Chat
 Queues
 View, Edit

 For more information, refer to Control User Access .

 To access the Manage Queues page, go to arrow_forward Communication arrow_forward Web Chat arrow_forward Manage Queues . Select a queue from the list on the left to adjust the settings for that web chat queue.

 General Information

 This section displays general information about the selected queue, and allows you to establish when the web chat can be accessed and the text that displays on the web chat window.

 The following fields are available in this section:

 Field
 Description

 Queue Name

 The unique name that identifies the Web Chat queue for internal reference.

 Display Name

 The name on the header of the chat pop-up that displays to website visitors (up to 25 characters).

 Online Button Text

 The text which displays on the website's button that begins a chat when clicked on by a visitor, such as Chat Now! .

 Maximum Conversations per Agent

 Related Privileges

 Group
 Privilege
 Column

 Web Chat
 Allow Agent to Exceed Maximum Conversations
 Enabled

 For more information, refer to Control User Access .

 The most conversations a Rent Manager Web Chat agent may actively handle at one time. If an agent reaches this maximum, they need to complete a chat or have a chat ended by the user before they may accept another Web Chat.

 To allow an agent to take an unlimited number of conversations, enter 0 .

 Allow client to email the chat transcript

 If enabled, allows the visitor to request and receive a transcript of the chat via email after the conversation is completed, closed, or times out.

 Show button when chat is offline

 If enabled, the Web Chat button still displays when no agents are logged in to the queue, but informs the visitors that no agents are online at this time.

 Additionally, the following options become available:

 Allow questions when no agents are logged in

 Allows visitors to submit a question via Web Chat even if no agents are online.

 If enabled, a Leave a Message button displays in the Web Chat pop-up and allows the visitor to submit a message that is sent to the Offline Conversations page where it can be followed up on later.

 Offline Button Text

 The text to display on the Web Chat button when no agents for the website's designated queue are online. This text displays in place of the Online Button Text .

 Offline Message

 When visitors click the website's Web Chat button and there are no agents logged into the designated queue, this text displays in the Web Chat window instead of being answered by an agent.

 Questions

 This section allows you to request and/or require visitors to submit certain information when they initiate a Web Chat for the selected queue. To add a question for the visitor to answer when initiating a Web Chat, click Add Question .

 The following columns are available in this section:

 Column
 Description

 Name

 The information being requested from the visitor as it displays on the Web Chat window.

 Required

 If this question must be answered by the visitor before the Web Chat can be initiated, displays.

 Chat Agents

 This section allows you to establish Rent Manager users as agents that can accept Web Chats for this queue and determine whether or not they have administrator Web Chat privileges. To add a Web Chat agent, click Add Agent .

 The following columns are available in this section:

 Column
 Description

 Name

 The Rent Manager user designated as a Web Chat agent.

 Agent

 If this user is an agent that can answer Web Chats, displays. Agents may only answer the next conversation in the queue on the Pending Conversations tile.

 If you uncheck this box and save the page, the user is removed from the list and is no longer able to answer Web Chats.

 Admin

 If this user has administrator access for Web Chats, displays. Admins can do the following on the My Conversations page:

 -
 Reorder conversations in queues.

 -
 Assign conversations to other users.

 -
 View all pending conversations in the queue.

 -
 Start conversations in any order.

 Saved Replies

 This section allows you to create standardized, preset replies that agents can quickly access and send in Web Chat. This allows agents to quickly provide answers for common questions without having to manually type the information every time. To add a saved reply for agents to use, click Add Saved Reply .

 The following columns are available in this section:

 Column
 Description

 Name

 The name of the saved reply as it displays on the My Conversations page when an agent accesses the list of saved replies.

 Reply

 A preview of the message that populates in the chat window's text box when this saved reply is selected.

 Actions

 This section allows you to determine what conversation actions can be performed by agents in this queue, such as creating a service issue if the Web Chat recipient is chatting in about a plumbing issue in their apartment.

 The following columns are available in this section:

 Column
 Description

 Action

 The Rent Manager actions that can be performed during Web Chats.

 Enabled

 If this action can be performed for the selected queue, displays.

 Available Actions

 The following options display in the list:

 Action

 Description

 Add Appointment

 Agents can create an appointment from the chat window that is then added to the calendar in Rent Manager . For more information, refer to Add an Appointment .

 Add Issue

 Agents can create a new service issue from the chat window. For more information, refer to Add an Issue .

 Add Owner Prospect

 Agents can add the chat recipient as an owner prospect with their name and email address pre-populated. For more information, refer to Add a Prospect .

 The name and email populate only if the System Questions for Name and Email Address are listed on the Questions tile and the recipient enters the information.

 Add Prospect

 Agents can add the chat recipient as a prospect with their name pre-populated. For more information, refer to Add a Prospect .

 The name populates only if the System Question for Name is listed on the Questions tile and the recipient enters a name.

 Add Task

 Agents can create a new task from the chat window that can be quickly referenced on your dashboard for users with the Task tile. For more information, refer to Add a Task or Memorized Task .

 Add Vendor

 Agents can add the chat recipient as a vendor with their name and email address pre-populated. For more information, refer to Add a Vendor .

 The name and email populate only if the System Questions for Name and Email Address are listed on the Questions tile and the recipient enters the information.
