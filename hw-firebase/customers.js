var age=24;


function setupFireBase(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDCcaVSLtSHsEcjPhvJXZydaeOYsRiHBUs",
        authDomain: "mp2018-hwan.firebaseapp.com",
        databaseURL: "https://mp2018-hwan.firebaseio.com",
        projectId: "mp2018-hwan",
        storageBucket: "mp2018-hwan.appspot.com",
        messagingSenderId: "314748972341"
       
    };
    firebase.initializeApp(config);


    var ref = firebase.database().ref("products");
    
    //when child is added
    ref.on("child_added", function(snap){
        var list = document.querySelector("#list");
        const tr = document.createElement("tr");
        const td_id = document.createElement("td");
        const td_lastname = document.createElement("td");
        const td_firstname = document.createElement("td");
        const td_birthday = document.createElement("td");
        const td_age = document.createElement("td");
        const td_action = document.createElement("td");
        const action = document.createElement("a");
        
        td_id.innerText = snap.child("id").val()
        td_lastname.innerText = snap.child("lastname").val()
        td_firstname.innerText = snap.child("firstname").val()
        td_birthday.innerText = snap.child("birthday").val()
        td_age.innerHTML =age;

        action.innerText= "Delete";
        action.href="#";
        action.onclick = function (){
            var prod_id = this.parentElement.parentElement.id;
            var product = firebase.database().ref("products").child(prod_id);
            product.remove();
            var del_tr = document.querySelector("#" + prod_id);
            del_tr.remove();      
        }
        td_action.appendChild(action);

        tr.appendChild(td_id);
        tr.appendChild(td_lastname);
        tr.appendChild(td_firstname);
        tr.appendChild(td_birthday);
        tr.appendChild(td_age);
        tr.appendChild(td_action);
        
        tr.id = snap.key;
        list.appendChild(tr);
    });


}



window.onload = function(){
    
   
    setupFireBase();
    
    var btnSave = document.querySelector("#button_save");
      
    btnSave.addEventListener("click",function(){
        var id = document.querySelector("#id").value;
        var lastname = document.querySelector("#lastname").value;
        var firstname = document.querySelector("#firstname").value;
        var birthday = document.querySelector("#birthday").value;
        age = document.getElementById('birthday').value; 
        age = 2019 - new Date(age).getFullYear(); 
       
        console.log(id);
        console.log(lastname);
        console.log(firstname);
        console.log(birthday);
      //  console.log(age); // 입력한 년도 출력

        firebase.database().ref().child("products").push().set( //firbase에 데이터전송
            {
                id:id,
                lastname:lastname,
                firstname:firstname,
                birthday:birthday
            }
        );


    });


}