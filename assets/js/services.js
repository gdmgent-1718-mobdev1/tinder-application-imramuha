console.log("services");
function GetAPerson() {
    
       
        const URL = 'https://api.randomuser.me/?results=500';
         console.log('4');
    
        function loadAPerson() {
           
            return AJAX.getJSONByPromise(URL);
    
        }
    
        
    
       return {
          loadAPerson: loadAPerson
        }
    };