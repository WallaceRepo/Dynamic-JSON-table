var content = {"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}
console.log(content);
console.log(content.cars[0]);
const userdata = {  
    "data":{  
       "userList":[  
          {  
             "id":1,
             "name":"soni",
             "school":"junior"
          },
          {  
            "id":2,
            "name":"bali",
            "school":"none"
         }
       ]
    },
    "status":200,
    "config":{  
       "method":"POST",
       "transformRequest":[  
          null
       ],
       "transformResponse":[  
          null
       ],
       "url":"/home/main/module/userlist",
       "headers":{  
          "rt":"ajax",
          "Tenant":"Id:null",
          "Access-Handler":"Authorization:null",
          "Accept":"application/json, text/plain, */*"
       }
    },
    "statusText":"OK"
 }
 //console.log(userdata.data.userList);
 const {status: OkStatus} = userdata;
 const { config: {url}} =userdata;
 const {data:{blueTunna = "yesYmuu"}, config:{url:yeppi}, config:{headers:{work = "Great"}}} = userdata;
 const { config: {method, transformRequest}, data:{userList:[{school},{school:school1}]}} = userdata;
 console.log(school, school1);

//  console.log(yeppi);
// console.log(work);
//  console.log(url);
//  console.log(OkStatus);
const tableData = {"employees":[
    {"name":"John Smith", "email":"john.smith@xyz.com", "Title":"Finance Staff 1", "Dept" : "Finance", "Location" : "San Jose", "Mgr": "F"},
    {"name":"Bob Ford", "email":"bob.ford@xyz.com", "Title":"HR Assistant", "Dept" : "Human Resources", "Location" : "Sunnyvale", "Mgr": "F"},
    {"name":"Tim Wray", "email":"tim.wray@xyz.com", "Title":"Vice President", "Dept" : "R&D", "Location" : "San Jose", "Mgr": "T"},
    {"name":"Don Smith", "email":"don.smith@xyz.com", "Title":"Engineering Manager", "Dept" : "R&D", "Location" : "San Jose", "Mgr": "T"},
    {"name":"Kelly Doe", "email":"kelly.doe@xyz.com", "Title":"Software Engineer", "Dept" : "R&D", "Location" : "San Jose", "Mgr": "F"},
]}; 

// const {employees:[arr1, arr2, ...rest]} = tableData;
// console.log(arr1, arr2, ...rest);


/* 
Is therefore not finding an element with class table.

This could happen if the DOM isn't loaded at the time of script execution. To avoid this, wrap all of your DOM-manipulating code in a window.onload block:

            window.onload = function(){
                // your JS here
            }
*/

 //console.log(keys);
 window.onload = function(){ 
//    function createTable(){
//       const keys = Object.keys(tableData.employees[0]);
//       let objMy = tableData.employees[4];
//       console.log("myObject " + objMy);
    
//       let table = document.querySelector('.table2');
//       let thead = table.createTHead();
//       let tbody = table.createTBody();
//       let row = thead.insertRow();  
//             keys.forEach((key, index)=>{
//              var cell = row.insertCell(index);
//                cell.innerHTML = key;
//            });
    
//         for( let obj of tableData.employees){
//           let bRow = tbody.insertRow();
//           const values = Object.values(obj); 
//             values.forEach((value, index)=>{
//                let bCell = bRow.insertCell(index);
//                 bCell.innerHTML = value;
//                })    
                
//          }
// } 


  function myTable(){
    let body = document.getElementsByTagName('body')[0];
     let table = document.createElement('table'); 
         table.setAttribute('id', 'better');
     let data = tableData.employees;
     let tableBody = document.createElement('tbody');
    
     for( let i = 0; i < data.length; i++){
       let tableRow = document.createElement('tr');
       let keys = Object.keys(data[0]);  
       let values = Object.values(data[i]);  
     
       for (let j = 0; j < keys.length; j++) {

          if(i == 0){
             
                    
            let tableHead = document.createElement('th');
            let header = keys[j];
            let textNode = document.createTextNode(header);
            tableHead.appendChild(textNode);
            tableRow.appendChild(tableHead);
            table.appendChild(tableHead);
            
             }
           
           let cell = document.createElement('td');
           let data = values[j];
             
           let cellText = document.createTextNode(data); 
             cell.appendChild(cellText);
             tableRow.appendChild(cell); 
            }
          
           tableBody.appendChild(tableRow);
           table.appendChild(tableRow);
           body.appendChild(table);
        
       }
            
 }
myTable();

//     var body = document.getElementsByClassName('mytable')[0];
//      // creates a <table> element and a <tbody> element
//     var tbl = document.createElement("table");
//     var tblBody = document.createElement("tbody");
  
//     // creating all cells
//     for (var i = 0; i < 2; i++) {
//       // creates a table row
//       var row = document.createElement("tr");
  
//       for (var j = 0; j < 2; j++) {
//         // Create a <td> element and a text node, make the text
//         // node the contents of the <td>, and put the <td> at
//         // the end of the table row
//         var cell = document.createElement("td");
//         var cellText = document.createTextNode("cell in row "+i+", column "+j);
//         cell.appendChild(cellText);
//         row.appendChild(cell);
//       }
  
//       // add the row to the end of the table body
//       tblBody.appendChild(row);
//     }
  
//     // put the <tbody> in the <table>
//     tbl.appendChild(tblBody);
//     console.log(tbl);
//     // appends <table> into <body>
//     body.appendChild(tbl);
//     // sets the border attribute of tbl to 2;
//     tbl.setAttribute("border", "2");

  }