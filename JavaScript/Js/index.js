const btnUser = document.getElementById('listar-usuarios');
const btnAddUser = document.getElementById('agregar-usuarios');

//--------------------------------------------------------------------
//-------------------------------Events-------------------------------
//--------------------------------------------------------------------


btnUser.addEventListener('click', getModal);
btnAddUser.addEventListener('click', addModal);


//--------------------------------------------------------------------
//-------------------------------Modals-------------------------------
//--------------------------------------------------------------------


function getModal (){
    var modal = `<table class="default">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>

                    <tbody id="users">
                    </tbody>
                </table>`;

    document.getElementById('modal').innerHTML = modal;
    getUsers()
};

function addModal (){
    var modal = `<div class="container-all-modal">
                    <h1>Agregar Usuario</h1>
                    <div class="container-add-modal">
                        <label for="">Name</label>
                        <input id="name" type="text">

                        <label for="">Last Name</label>
                        <input id="lastName" type="text">

                        <label for="">Age</label>
                        <input id="age" type="number">
                    </div>

                    <button id="add-user" >Agregar</button>
                    
                </div>`

    document.getElementById('modal').innerHTML = modal;

    const btnAdd = document.getElementById('add-user')
    btnAdd.addEventListener('click',addUser)
};


//--------------------------------------------------------------------
//-------------------------------Methods-------------------------------
//--------------------------------------------------------------------


function getUsers(){
    fetch('http://localhost:4000/api/users')
    .then(response => response.json())
    .then(data => dataUser(data))

    const dataUser = (data)=>{
        let td = '';
        console.log(data)
        for(let i = 0; i < data.length; i++){
            td += `<tr>
                        <td>
                            ${data[i].Id}
                        </td>
                        <td>
                                ${data[i].Name}
                        </td>
                        <td>
                                ${data[i].LastName}
                        </td>
                        <td>
                                ${data[i].Number}
                        </td>
                    </tr>`
        };

        document.getElementById('users').innerHTML = td;
    };
};


function addUser (){
    const inputName = document.getElementById('name').value;
    const inputLastName = document.getElementById('lastName').value;
    const inputAge = document.getElementById('age').value;

    const data = {Name: inputName, LastName: inputLastName, Number: inputAge}

    console.log(data);
    fetch('http://localhost:4000/api/users/add', 
    {
        method: "POST",
        body: JSON.stringify(data), 
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(response => response.json())
    .then(data => {
        const newUser =[]
        newUser.push(data)
        console.log(data)
    })
};