pizzaListArray = [];

function getmenu()
	{    
        
        var item = document.getElementById("pizzaName").value; 
       
        pizzaListArray.push(item);
        
        var removeCommas = pizzaListArray.join("<br># ");
        document.getElementById("displayMenu").innerHTML =  "# " + removeCommas;
	}
function add_suggestion(){

       var item = document.getElementById("addItem").value;
       pizzaListArray.push(item);
        
       }