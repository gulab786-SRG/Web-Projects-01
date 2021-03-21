
// for login with email and password 

document.getElementById("signInWithEmailAndPassword").addEventListener('click',callLogin);
function callLogin(){

    var email=document.getElementById('emailForSignIn').value;
    var pass=document.getElementById('passwordForSignIn').value;


    firebase.auth().signInWithEmailAndPassword(email,pass).then(()=>{
        alert("User Login");

    }).catch((e)=>{
        console.log(e);
    })
}

function checkState(){

    firebase.auth().onAuthStateChanged(user=>{
        if(user){
            window.location.href="./index.html"
            console.log(user);
        }
    })
}


checkState()
