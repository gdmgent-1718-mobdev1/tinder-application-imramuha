console.log("main");
// IFFY
function App() {
    let _getAPerson,
    _aPersonElement,
    _aPersonData;
    //_currentIconElement = [];                                             // create a empty array to save wheater condition into it
    


function init(){		// om het app te initializeren.
    console.log('1 Initialize the application');
    console.log('1.1 Create a GetAPerson object');
    _getAPerson = new GetAPerson();
    console.log('1.2 Chache the active DOM-elements');
    _aPersonElement = document.querySelector('.container');
    _aYayElement = document.querySelector('.yayContainer');
    _btnYay = document.querySelector('.yay');
    _btnNay = document.querySelector('.nay');
    console.log('1.3 Load the parking states via _parkingStatesService object');
    loadRandomPersonData();
}
    function loadRandomPersonData(){                                            // where we run all our functions
        _getAPerson.loadAPerson()
        .then(function(data) {
            console.log('2.1 Save the loaded data in _randomPersonData');
            _aPersonData = data;
            console.log(_aPersonData);
            console.log('2.2 Update tinder user interface');             
            updateTinderInterface();
            
           var user = new UserMe();
           console.log(user);
 
        })
        .catch(function(reject) {
            alert("Please search something that actually exists.")
            console.log('SPIJTIG');
        });
    } 
    // to show profiles on html
    function updateTinderInterface(){
        tempStr= '';
        var i = Math.round(Math.random()*500) + 1;

        tempStr +=`
        <h1> ${i} </h1>
        <p>${_aPersonData.results[i].name.title}</p>
        <p>${_aPersonData.results[i].name.last}</p>
        <p>${_aPersonData.results[i].name.first}</p>
        <p>${_aPersonData.results[i].gender}</p>
        <image src="${_aPersonData.results[i].picture.medium}" <br>
        <p>${_aPersonData.results[i].nat}</p>
        `;
        _aPersonElement.innerHTML = tempStr;
    }


    // button yay in you like the person, whith gets the data stored from the localstorage if 
    // its null it create an array. It pushes data into that array and saves it in the 
    // localstorage. After that it refereshes and get a new random person.
    document.querySelector(".yay").addEventListener("click", function(){       
        function saveInLocal(){
            var eventData = JSON.parse(localStorage.getItem('tempStr'));
            if(eventData == null){
                eventData=[];
            }

           eventData.push(tempStr);
     
           localStorage.setItem('tempStr', JSON.stringify(eventData));
         }
        saveInLocal();
        updateTinderInterface();
        
     });
     document.querySelector(".far").addEventListener("click", function(){
        var retrievedObject = JSON.parse(localStorage.getItem('tempStr'));
        console.log('retrievedObject: ', retrievedObject);
        _aYayElement.innerHTML = retrievedObject;
     });

    // TO DO
    // an if and else button if person clicks on no, show another random person else save it inside the localstorag
    // if nay rerun the updateTinderInterface 
    document.querySelector(".nay").addEventListener("click", function(){
        updateTinderInterface();
     });
     
  
    return {
        init: init
    };  
   
};

const app = new App();
app.init();







