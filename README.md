# JSON-Dynamic-Table-in-Vanilla-Javascript- https://wallacerepo.github.io/JSON-Dynamic-Table-in-Vanilla-Javascript-/
Here is the Sophia's way of solution to the dynamic table that displays data from JSON. Table is editable, add new row, delete any row, and all will be done in JSON as well. 
Clone the repo and open up index.html in your browser of choice. Leave a comment for suggestions. Thank you!

  Write a program Employee System UI which does the following:

     Sample JSON:
     let json = {"employees":[ 
     {"name":"John Smith", "email":"john.smith@xyz.com", "Title":"Finance Staff 1", "Dept" : "Finance", "Location" : "San Jose", "Mgr", "F"},
     {"name":"Bob Ford", "email":"bob.ford@xyz.com", "Title":"HR Assistant", "Dept" : "Human Resources", "Location" : "Sunnyvale", "Mgr", "F"},   
     {"name":"Tim Wray", "email":"tim.wray@xyz.com", "Title":"Vice President", "Dept" : "R&D", "Location" : "San Jose", "Mgr", "T"},
     {"name":"Don Smith", "email":"don.smith@xyz.com", "Title":"Engineering Manager", "Dept" : "R&D", "Location" : "San Jose", "Mgr", "T"},    
     {"name":"Kelly Doe", "email":"kelly.doe@xyz.com", "Title":"Software Engineer", "Dept" : "R&D", "Location" : "San Jose", "Mgr", "F"}, 
    ]}
    </ul>
    
Write a program using HTML, JQUERY, Angular(f you want to) and display the list of existing employees in a table
where you can add, edit, or delete the employee (You can only edit title, dept, and location)
Any changes should be reflect in the existing json
If the mgr field is T, then in the table, there should be link available, e.g: www.google.com. Otherwise, N/A should be  display in that field.
  

Dynamic Table in vanilla JS
Title, Dept, Location fields are only editable. Enter cursor to edit those field, your edited cells values will automically change JSON sample and will be seen on the table. 
Double-click on the row you want to delete, it will be deleted from JSON sample and table. To add New Employee, click on "Add New Row" button to incert new row in the table.
After filling table, click on "Save new Row" button to add it to the JSON and to see the change on table.
Focused on table cell editing easier by simpler and fewer interaction to achieve a goal. Iteration in code is least as possible, avoiding wrapped iteration as much as
possible, Time/Space complexity. Also JSON request for update invokes the least times or just after done editing to prevent multiple browser render and further server 
xhr requests. Instead of incerting "delete" button on each row, simply Double-click on the row will delete the row.
Further improvements to add to this table: Save only adds 1 new row currently. It needs to check if new row is more than one, then add all of it. 
Save new row saves empty row currently, it needs to check if all cell is filled and able to save multiple new rows. Happy Coding!! 

