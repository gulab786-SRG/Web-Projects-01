
       document.getElementById('addData').addEventListener("click",AddaData);
       function AddaData(){
        let fname = document.getElementById('nameforDashboard').value;
        let femail = document.getElementById('emailForDashboard').value;
        let fcontactNumber = document.getElementById('contactNumberForDashboard').value;
       

       
        let datatobeadded={
            userName:fname,
            Mobile_Number:fcontactNumber,
            email_Address:femail



        }
        
     
        
        
            if(datatobeadded.userName){
                firebase.firestore().collection('Users').doc("doc_"+datatobeadded.userName)
            .set(datatobeadded).then((doc)=>{
                alert("User Data Added")
                readData()
            }).catch((e)=>{
                console.log(e);
            })
            }
            else{
                alert("User Name Empty")
            }
        }
        
        readData();
        function readData(){
            firebase.firestore().collection("Users").get().then((docs)=>{
                docs.forEach(element => {
                    console.log(element.data());
                    console.log(element.id);
                });

            })

           firebase.firestore().collection("Users").get().then((docs)=>{
            document.getElementById("res").innerHTML="";
                docs.forEach(element => {
                   
                    document.getElementById("res").innerHTML+=
                    `
                    <tr>
                    <td>${element.data().userName} </td>
                    <td>${element.data().Mobile_Number} </td>
                    <td>${element.data().email_Address} </td>
                    </tr>
                    `
                });

            })
            
            
        }


      