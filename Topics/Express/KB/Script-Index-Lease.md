# Lease Indexing

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Script-Index-Lease.htm

In scripting, an index is how instances of an entity or other record are counted in a script. Indexing manages the one-to-many relationship that occurs between two classes.

 When the Lease class is used as a child class in a script (e.g., Tenant().Lease(). Function ), an index can be specified to uniquely identify leases that are associated with the tenant. Tenants may have multiple leases associated with their account, and indexing can be used to identify each of those leases.

 Lease Index Relationships

 The Lease class may use an index parameter when it is preceded by certain classes. Each class is described below.

 Tenant.Lease Indexing

 The Lease class may use an index parameter when it is preceded by the Tenant class.

 Leases associated with the tenant are indexed based upon the order in which the leases appear on the tenant's details page in the Leases tile. The topmost lease has an index of 0, the lease immediately below has an index of 1, and so on.

 Warning

 Units can be reordered on the Leases tile by clicking and using to move units up and down the list. Reordering the list alters the output of existing scripts. New units are added to the bottom of the section.

 [Tenant.Lease(1).Unit.Name]

 Using the information in the above image, this returns SW003 , the name of the second lease listed.
