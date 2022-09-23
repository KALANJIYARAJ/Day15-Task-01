let container=document.createElement("div");
container.setAttribute("class","container");

let row=document.createElement("div");
row.setAttribute("class","row");

let col=document.createElement("div");
col.setAttribute("class","col-sm-12");

let table=document.createElement("table");
table.setAttribute("id","tab")

let thead=document.createElement("thead");
let tr=document.createElement("tr");

let th1=document.createElement("th");
th1.innerHTML="ID";
let th2=document.createElement("th");
th2.innerHTML="Name";
let th3=document.createElement("th");
th3.innerHTML="Email";

let tbody=document.createElement("tbody");
let buttondiv=document.createElement("div");
buttondiv.setAttribute("class","button");

element(1);

buttondiv.innerHTML=`  
<button type="submit" onclick="element(1)">&laquo;</button>
<button type="submit" onclick="element(1)">1</button>
<button type="submit" onclick="element(2)">2</button>
<button type="submit" onclick="element(3)">3</button>
<button type="submit" onclick="element(4)">4</button>
<button type="submit" onclick="element(5)">5</button>
<button type="submit" onclick="element(6)">6</button>
<button type="submit" onclick="element(7)">7</button>
<button type="submit" onclick="element(8)">8</button>
<button type="submit" onclick="element(9)">9</button>
<button type="submit" onclick="element(10)">10</button>
<button type="submitn" onclick="element(10)">&raquo;</button>
`;











function element(x){
    let request = new XMLHttpRequest();
request.open("GET","https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json",true);
request.send();
    request.onload = function(){
    var data = JSON.parse(request.response);
    console.log(data);

    
    tbody.innerHTML="";
   
for(i=(x-1)*10; i<(x*10); i++){
       console.log(i);

        tbody.innerHTML+=`<tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].email}</td>
    </tr>`;

      }

    }     
}

tr.append(th1,th2,th3);
thead.append(tr);
table.append(thead,tbody);
col.append(table,buttondiv);
row.append(col);
container.append(row);
document.body.append(container);  





