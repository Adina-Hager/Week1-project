const btnAdd = document.getElementById("btnAdd");
const idChange = document.getElementById("patientId");
const showInTable = document.getElementById("changeId");
const tbl = document.getElementById("tableExposures");
const deleteEx = document.getElementById("btnEdit");
let isDescendingOrder = false;

class exposure {
    constructor(patientId, start, end, city, location) {
        this.patientId = patientId;
        this.start = start;
        this.end = end;
        this.city = city;
        this.location = location;
    }
}
let arrExposures = [
    new exposure('1', "2022-06-29T11:09", "2022-06-29T11:14", "Beit Shemesh", "Library"),
    new exposure('2', "2022-06-29T11:09", "2022-06-29T11:14", "Jerusalem", "Store"),
    new exposure('1', "2022-06-28T11:09", "2022-06-28T11:30", "Tzfat", "Library"),
    new exposure('3', "2022-06-29T11:09", "2022-06-29T11:14", "Beit Shemesh", "Library"),

];


function addExposure() {
    let id = document.getElementById("patientId").value;
    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;
    let city = document.getElementById("city").value;
    let location = document.getElementById("location").value;
    arrExposures.push(new exposure(id, start, end, city, location));
    console.log(arrExposures);
    ShowById();
}
btnAdd.onclick = addExposure;


function ShowById() {
    tbl.innerHTML=` <tr>
    <th>Start date</th>
    <th>End date</th>
    <th>City</th>
    <th>Location</th>
    <th>Delete</th>
</tr>`
    let table;
    let id = idChange.value;
    // let sel=document.getElementById("CitySelect").options;
    arrExposures.forEach(item => {
        if (item.patientId === id) {
            table = tbl;
            let row = table.insertRow();
            let cell1 = row.insertCell();
            cell1.innerHTML = item.start;
            let cell2 = row.insertCell();
            cell2.innerHTML = item.end;
            let cell3 = row.insertCell();
            cell3.innerHTML = item.city;
            let cell4 = row.insertCell();
            cell4.innerHTML = item.location;
            let cell5 = row.insertCell();
            cell5.innerHTML = "<button  onclick='deleteExposure()'; id='btnEdit';>X</button>"


        }
    });
}


function deleteExposure() {
    // event.target will be the input element.
    let td = event.target.parentNode;
    let tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
}
// deleteEx.onclick=deleteExposure;

function AllExposures() {
    let list = document.getElementById("listExposures");
    list.innerHTML = "";
    arrExposures.forEach((item) => {
        let listItem = document.createElement("li");
        console.log(item);
        let newItem = JSON.stringify(item);
         delete (newItem.patientId);
        b =newItem.replace("{","")
        b =b.replace("}","")
        listItem.innerHTML = b;
        list.appendChild(listItem);
    })
}


function SortByDate() {
    if (isDescendingOrder) {
        arrExposures.sort((a, b) => (a.start > b.start ? 1 : -1));
        isDescendingOrder = false;
    }
    else {
        arrExposures.sort((a, b) => (a.start > b.start ? -1 : 1));
        isDescendingOrder = true;
    }
    AllExposures();
}

function FilterByCity(){
    const city=document.getElementById("City").value;
    let list = document.getElementById("listExposures");
    list.innerHTML="";
    if(city==="filter by city"){
        AllExposures();
    }
    arrExposures.forEach((item)=>{
        if(item.city===city){
            let listItem = document.createElement("li");
            let b= JSON.stringify(item);
            b =b.replace("{","")
            b =b.replace("}","")
            listItem.innerHTML = b;
            list.appendChild(listItem);
        }
    })

    
}



