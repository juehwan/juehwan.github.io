
document.getElementById('btnSave').onclick=function(){
    LastName=document.getElementById('ln').value;
    FirstName=document.getElementById('fn').value;
    PhoneNumber=document.getElementById('phone').value;

    table = document.getElementById('mytable');

    tr=document.createElement("tr");
    td1=document.createElement("td");
    td2=document.createElement("td");
    td3=document.createElement("td");
    td4=document.createElement("td");

    
    
    td1.innerText = LastName;
    td2.innerText = FirstName;
    td3.innerText = PhoneNumber;
    td4.innerHTML = "<input type='button'  value='delete' onClick='removeRow(this);' >"; 
    // innterHTML 은 자바스크립트에서 html태그들 사용 가능하게 해줌

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    

    table.appendChild(tr);
  
    
    

}
function removeRow(r){ 
    var i=r.parentNode.parentNode.rowIndex; //parentnode 하나 지우면 성 이름 폰넘버 제목 날아감 
    document.getElementById('mytable').deleteRow(i);
}
