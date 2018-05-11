var arr1 = new Array();

document.getElementById('btnSave').onclick=function(){
    var obj = new Object();
    LastName=document.getElementById('ln').value;
    FirstName=document.getElementById('fn').value;
    PhoneNumber=document.getElementById('phone').value;

    obj.LastName= LastName;
    obj.FirstName=FirstName;
    obj.PhoneNumber=PhoneNumber;

    arr1.push(obj);
    updatetable(obj);
    
   var j = JSON.stringify(arr1);
}
function updatetable(obj){

    table = document.getElementById('mytable'); //맨마지막테두리
    

    tr = document.createElement("tr");
    td1 = document.createElement("td"); //td1에 td라는 엘리먼트 생성
    td2 = document.createElement("td"); //td2에 td라는 엘리먼트 생성
    td3 = document.createElement("td"); //td3에 td라는 엘리먼트 생성
    td4 = document.createElement("td"); //td4에 td라는 엘리먼트 생성
    td1.innerText = obj.LastName;       //엘리먼트에 값 삽입
    td2.innerText = obj.FirstName;
    td3.innerText = obj.PhoneNumber;
    td4.innerHTML = "<input type='button'  value='delete' onClick='removeRow(this);' >"; 
    tr.appendChild(td1); //표현
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr); //얘까지 해줘야 표현됨 
}
function removeRow(r){ 
    var i=r.parentNode.parentNode.rowIndex; //parentnode 하나 지우면 성 이름 폰넘버 제목 날아감 
    document.getElementById('mytable').deleteRow(i);
}
function tablesort(n){ //성 정렬, 이름 정렬, 번호 정렬 총 3개만들기
    var table,  rows, switching, i, x, y,elementchange, dir, switchcount = 0;

    table  = document.getElementById("mytable");
    switching = true;
   
     dir = "일회용"; 
   
      while (switching) {
      switching = false; 
      rows =  table.getElementsByTagName("tr"); //rows를 유사배열로만듬
     
        for (i = 1; i < (rows.length - 1); i++) {  
          elementchange = false;
          x = rows[i].getElementsByTagName("td")[n];
          y = rows[i + 1].getElementsByTagName("td")[n];

            if (dir  == "일회용") {//크기비교 x가 클때 
              if (x.innerHTML.toLowerCase()  > y.innerHTML.toLowerCase()) { //tolowercase : 소문자로변경
                elementchange= true;
                break; //for종료

                    }
                      } 

                else if (dir == "비교") {//크기비교 y가 클때
                      if (x.innerHTML.toLowerCase()  < y.innerHTML.toLowerCase()) { //tolowercase : 소문자로변경 
                            elementchange= true; //elementchange = 엘리먼트 순서변경
                            break; //for종료
               }
             }
           }   
       if (elementchange) {//node순서변경
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);//rows[i+1]이라는 엘리먼트를 rows[i]위에 넣어라
          switching = true; 
          switchcount  ++; 
          } 
        else {
          if (switchcount == 0) {
                  dir = "비교";
                  switching = true;
          }
       }
     }
}