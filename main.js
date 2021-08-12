window.onload = function(){

var model = {"employees":[
   {"name":"John Smith", "email":"john.smith@xyz.com", "Title":"Finance Staff 1", "Dept" : "Finance", "Location" : "San Jose", "Mgr": "F"},
   {"name":"Bob Ford", "email":"bob.ford@xyz.com", "Title":"HR Assistant", "Dept" : "Human Resources", "Location" : "Sunnyvale", "Mgr": "F"},
   {"name":"Tim Wray", "email":"tim.wray@xyz.com", "Title":"Vice President", "Dept" : "R&D", "Location" : "San Jose", "Mgr": "T"},
   {"name":"Don Smith", "email":"don.smith@xyz.com", "Title":"Engineering Manager", "Dept" : "R&D", "Location" : "San Jose", "Mgr": "T"},
   {"name":"Kelly Doe", "email":"kelly.doe@xyz.com", "Title":"Software Engineer", "Dept" : "R&D", "Location" : "San Jose", "Mgr": "F"},
   ]}; 
  var octopus = {
      createTable: function(){
         return model.employees;          
      },
      addEmployee: function(keys, values){
         let obj = {};
         keys.forEach((key, i) => { obj[key] = values[i]        
         });
         model.employees.push(obj);
      },
      deleteEmployee: function(obj){
          const objIndex = model.employees.findIndex( el => el.name ===obj.name);
          model.employees.splice(objIndex, 1);
         tableView.remove();
      },
      debounce: function(callback, wait){
        let timeout;
        return(...args) => {
          clearTimeout(timeout);
          timeout = setTimeout(function(){ callback.apply(this,args)}, wait);
        }
      },
      editEmployee: function(valueUpdated, i, key){
         const objUpdated = model.employees[i];
           objUpdated[key] = valueUpdated;
           model.employees.splice(i, 1, objUpdated);
           tableView.remove();
      },
      addLink: function(bool){
        if(bool == "T"){
          return "google.com";

        } else {
          return "N/A";
        }
      },
      objConstructor: function(){

      }
     };

    var tableView = {
        
    init: function(){
        
       this.body = document.getElementsByTagName('body')[0];
       this.container = document.createElement('div');
       this.container.setAttribute('id','cont');
       this.body.appendChild(this.container);
     
       this.button = document.createElement('button');
       this.button.setAttribute('id', 'add');
       this.button.innerHTML = 'Add New Row';
       this.button.addEventListener('click', (e)=> {this.add()});
       this.body.appendChild(this.button);

       this.button = document.createElement('button');
       this.button.setAttribute('id', 'save');
       this.button.innerHTML = 'Save New Row';
       this.button.addEventListener('click', (e)=> {this.save()});
       this.body.appendChild(this.button);
       

       this.render();
     },
 

    render: function(){
      this.table = document.createElement('table'); 
      this.table.setAttribute('id', 'better');
      
      let data = octopus.createTable();
      this.data = data;
      for( let i = 0; i < data.length; i++){

      this.tableRow = document.createElement('tr');
       let keys = Object.keys(data[0]);
       this.keys = keys;  
       let values = Object.values(data[i]);  
      
       for (let j = 0; j < keys.length; j++) {
          
          if(i == 0){
            let tableHead = document.createElement('th');
            let header = keys[j];
            let textNode = document.createTextNode(header);
            tableHead.appendChild(textNode);
            this.tableRow.appendChild(tableHead);
            this.table.appendChild(tableHead);
            
             }
           this.cell = document.createElement('td');
           let dataValue = values[j];
           if( j == keys.length -1) {
          
            lastCell = ("T" == dataValue ? 'google.com':'N/A');
            let cellText = document.createTextNode(lastCell);  
            this.cell.appendChild(cellText);
            this.tableRow.appendChild(this.cell); 
           } else {
             if( j > 1 && j < 5 ){
              this.cell.setAttribute('contenteditable', 'true');
              this.cell.addEventListener('keyup', octopus.debounce((e) => { 
                   
                 const valueUpdated = (e.target.innerText);
                octopus.editEmployee(valueUpdated, i, keys[j]);
               }, 5000)
               )
             } 
            let cellText = document.createTextNode(dataValue); 
             this.cell.appendChild(cellText);
             this.tableRow.appendChild(this.cell); 
            }
           }
           this.tableRow.setAttribute('class','rowDelete');
           
           this.tableRow.addEventListener('dblclick', function(e){
               octopus.deleteEmployee(data[i]);
            
           });

            this.table.appendChild(this.tableRow);
           this.container.appendChild(this.table); 
        
           }
         
       },
       remove: function(){
        this.table.remove();
        this.render();
       },
       add: function(){
      const tableRef = document.getElementById('better').insertRow(-1);
       for (let k = 0; k < this.keys.length; k++){
         
          this.cell = document.createElement('td');
          this.cell.setAttribute('contenteditable', 'true');
          this.cell.setAttribute('class', 'newcell');
          tableRef.appendChild(this.cell); 
          this.tableRef = tableRef;
         }
    
       },
      save: function(){
        const valuesArr = [];
        let td = this.tableRef.childNodes;
          for( let l = 0; l < td.length; l++){
            valuesArr.push(td[l].innerHTML);
          }
          octopus.addEmployee(this.keys, valuesArr);
          this.table.remove();
          this.render();
      }
   }

  tableView.init();

};
