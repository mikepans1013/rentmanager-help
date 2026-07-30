# Owner Indexing

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Script-Index-Owner.htm

In scripting, an index is how instances of an entity or other record are counted in a script. Indexing manages the one-to-many relationship that occurs between two classes.

 When the Owner class is used as a child class in a script (e.g., Property.Owner. Function ), an index can be specified to uniquely identify owners that are associated with the preceding class. For example, a property can be associated with multiple owners, and indexing can be used to identify each of those owners.

 Owner Index Relationships

 Owners associated with the property are indexed based upon when the owner was added as an owner on the property. The first owner added to the property has an index of 0 , and the second owner added has an index of 1 , and so on.

 Property.Owner Indexing

 To determine an owner's index in relation to a property, go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select the property. Then on the action bar to the right, select arrow_forward Owners .

 [Property.Owner("2").Address.FullAddress]

 Using the information in the above image, this returns the full address of Eric Farfal , the third owner associated with the property.
