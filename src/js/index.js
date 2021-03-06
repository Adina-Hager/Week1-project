const btnAdd = document.getElementById("btnAdd");
const idChange = document.getElementById("patientId");
const showInTable = document.getElementById("changeId");
const tbl = document.getElementById("tableExposures");
const deleteEx = document.getElementById("btnEdit");
let isDescendingOrder = false;

class exposure {
    constructor(user, location) {
        this.user = user;
        this.location = location;
    }
}


class userLocation {
    constructor(start, end, city, location) {

        this.start = start;
        this.end = end;
        this.city = city;
        this.location = location;
    }
}

class user {
    constructor(patientId) {
        this.patientId = patientId;
        this.userLocations = [];
    }
}

let arrLocations = [
    new userLocation("2022-06-29T11:09", "2022-06-29T11:14", "Beit Shemesh", "Library"),
    new userLocation("2022-06-29T11:09", "2022-06-29T11:14", "Jerusalem", "Store"),
    new userLocation("2022-06-28T11:09", "2022-06-28T11:30", "Tzfat", "Library"),
    new userLocation("2022-06-29T11:09", "2022-06-29T11:14", "Beit Shemesh", "Library"),

];

let arrUsers = [
    new user("1"),
    new user("2"),
    new user("3"),
    new user("4"),
];
arrUsers[0].userLocations.push(arrLocations[0]);
arrUsers[1].userLocations.push(arrLocations[1]);
arrUsers[1].userLocations.push(arrLocations[2]);
arrUsers[2].userLocations.push(arrLocations[3]);





function addExposure() {
    console.log("after arrloc")
    let id = document.getElementById("patientId").value;
    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;
    let city = document.getElementById("city").value;
    let location = document.getElementById("location").value;
    let newLocation = new userLocation(start, end, city, location);
    fetch('https://localhost:44337/api/Locations/addExposure/' + id, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(newLocation),

    }).then(() => {
        console.log("success");
        // arrLocations.push(newLocation);
        // arrUsers.push(new user(id));
        // arrUsers.where(patientId === id).userLocations.push(newLocation);
        // console.log(arrExposures);
        console.log(arrUsers[id].userLocations);
        ShowById();
    }
    ).catch(error => { "Error:", error });
}




// btnAdd.onclick = addExposure();


function ShowById() {
    const id = document.getElementById("patientId").value;
    let arrData = [];
    console.log(id);
    fetch('https://localhost:44337/api/Locations/getByUserId/' + id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response =>
        response.json()
    ).then(data => {
        arrData = data;
        console.log(arrData);

        tbl.innerHTML = ` <tr>
    <th>Start date</th>
    <th>End date</th>
    <th>City</th>
    <th>Location</th>
    <th>Delete</th>
    </tr>`
        let table;


        // let sel=document.getElementById("CitySelect").options;
        arrData.forEach(itemL => {
            {

                console.log(itemL)
                table = tbl;
                let row = table.insertRow();
                let cell1 = row.insertCell();
                cell1.innerHTML = itemL.start;
                let cell2 = row.insertCell();
                cell2.innerHTML = itemL.end;
                let cell3 = row.insertCell();
                cell3.innerHTML = itemL.city;
                let cell4 = row.insertCell();
                cell4.innerHTML = itemL.location;
                let cell5 = row.insertCell();
                cell5.innerHTML = "<button  onclick='deleteExposure()'; id='btnEdit';>X</button>"

            }
        });


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
    let arrLoc = [];
    console.log("after arrloc")
    
    fetch('https://localhost:44337/api/Locations/getAllLocations', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response =>
        response.json())
        .then(data => {
            arrLoc = data;
            let list = document.getElementById("listExposures");
            list.innerHTML = "";
            arrLoc.forEach((item) => {
                let listItem = document.createElement("li");
                console.log(item);
                let newItem = JSON.stringify(item);
                delete (newItem.patientId);
                b = newItem.replace("{", "")
                b = b.replace("}", "")
                listItem.innerHTML = b;
                list.appendChild(listItem);

                console.log('Success');
            })
                .catch((error) => {
                    console.error('Error:', error);
                });

        })
}


function SortByDate() {

    if (isDescendingOrder) {
        arrLocations.sort((a, b) => (a.start > b.start ? 1 : -1));
        isDescendingOrder = false;
    }
    else {
        arrLocations.sort((a, b) => (a.start > b.start ? -1 : 1));
        isDescendingOrder = true;
    }
    AllExposures();
}

function FilterByCity() {
    let arrData = [];
    const city = document.getElementById("City").value;
    let list = document.getElementById("listExposures");
    fetch('https://localhost:44337/api/Locations/getByCity/' + city, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response =>
        response.json()
    ).then(data => {
        arrData = data;
        list.innerHTML = "";
        if (city === "filter by city") {
            AllExposures();
        }
        arrData.forEach((item) => {
            if (item.city === city) {
                let listItem = document.createElement("li");
                let b = JSON.stringify(item);
                b = b.replace("{", "")
                b = b.replace("}", "")
                listItem.innerHTML = b;
                list.appendChild(listItem);
            }
        })

    })


}
