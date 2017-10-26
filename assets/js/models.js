/*      model.js
        ==========================
        set of different models.
*/
function UserMe(){
    let _id;                                 // let declaratie varibele die onderweg kan veranderen. soorten om variabeles te declareren
    let _userName;                           // const gebruikt om constante de defniëren (met dezelfde type). Waarde moest direct gegeven worden.
    let _password;   

    return {
        get id(){
            return _id;
        },
        set id(value){
            _id = value;
        },
        get userName(){
            return _userName;
        },
        set userName(value){
            _userName = value;
        },
        get password(){
            return _password;
        },
        set password(value){
            _password = value;
        },
    }
}                                               