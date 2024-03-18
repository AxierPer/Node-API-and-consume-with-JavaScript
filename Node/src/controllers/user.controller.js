import { getConnection } from "../database/database";

// SEARCH
const getUsers = (req, res) =>{
    const con = getConnection();

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");

        con.query("SELECT * FROM User", function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    });
};

// SPECIFIC SEARCH
const getUser = (req, res) =>{
    const con = getConnection();

    const {Id} = req.params;

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");

        con.query("SELECT * FROM User WHERE Id = "+Id+"", function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    });
};

// ADD ELEMENTS 
const addUser = (req, res) =>{
    const con = getConnection();
    
    con.connect(function(err) {
        if(err) throw err;
        console.log("Connected!");
        console.log(req.body)

        const {Name, LastName, Number} = req.body;

        if(Name === undefined || LastName === undefined || Number === undefined){
            res.status(400).json({message: "Bad Request, Please fill all fields."})
        }

        con.query("INSERT INTO User (Name, LastName, Number) VALUES ('"+Name+"', '"+LastName+"', "+Number+")", function (err, result){
            if(err) throw err;
            res.send(result)
        });
    })
};

// DELETE ELEMENTS
const deleteUser = (req, res) =>{
    const con = getConnection();

    const {Id} = req.params;

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");

        con.query("DELETE FROM User WHERE Id = "+Id+"", function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    });
};

// EDIT ELEMENTS
const updateUser = (req, res) =>{
    const con = getConnection()

    const {Id} = req.params;

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");

        const {Name, LastName, Number} = req.body;
        if(Id === undefined || Name === undefined || LastName === undefined || Number === undefined){
            res.status(400).json({message: "Bad Request, Please fill all fields."})
        }

        const user = {Name, LastName, Number}
        con.query("UPDATE User SET ? WHERE Id = "+Id+"", user, function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    });
};


export const methods = {
    getUsers,
    getUser,
    addUser,
    deleteUser,
    updateUser
};