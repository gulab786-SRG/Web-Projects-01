
//
document.getElementById("signUpForm").style.display="block";
document.getElementById("loginWithGoogle").style.display="block";
document.getElementById("userInfo").style.display="none";

document.getElementById("signIn").addEventListener("click", callGoogleAuth);


function callGoogleAuth() {
    console.log("Hey google Auth");

    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((resp) => {
        console.log(resp.user);

    }).catch((e) => {
        console.log(e);
    });


}

function checkStateUser() {

    firebase.auth().onAuthStateChanged((user) => {
        displayUser(user);
        if(user){
            document.getElementById("loginWithGoogle").style.display="None";
document.getElementById("userInfo").style.display="block";
document.getElementById("LogOut").addEventListener('click',callLogOut);
signUpForm.style.display="None";
document.getElementById("orBox").style.display="none";

        }


    })
}
checkStateUser();

function displayUser(user) {
   if(user){
    console.log(user);
    document.getElementById("Name").value=user.displayName;
//email
document.getElementById("email").value=user.email;



const Image=document.getElementById("img").innerHTML=`<img src=${user.photoURL}  style=" border-radius:50%" >`

   }
   if(user){
    if(!user.emailVerified){

        sendVerificationMail()
    }               
}

}
function callLogOut(){
    firebase.auth().signOut().then(() => {
        alert(" Sign-out successful.")
      }).catch((error) => {
         alert("An error happened.")
      });

      document.getElementById("loginWithGoogle").style.display="block";
      document.getElementById("userInfo").style.display="none";
      signUpForm.style.display="block";
      document.getElementById("orBox").style.display="none";
      
      
}

var signButton=document.getElementById('signUpBtn');
signButton.addEventListener("click",callSignUpFunc);
function callSignUpFunc(){
    var email=document.getElementById('emailForSignUp').value;

   var pass=document.getElementById('passwordForSignUp').value;


firebase.auth().createUserWithEmailAndPassword(email,pass).then(()=>{
    alert("User created ");
    console.log("User created");

}).catch((e)=>{
    console.log(e);
})
}
function sendVerificationMail(){
 let user =firebase.auth().currentUser;
 user.sendEmailVerification().then(()=>{
     alert("Verification Mail Had Been Sent To User MailBox ")
 })  
    
}
//emailVerified

