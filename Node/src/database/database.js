import mysql from "mysql2";
import config from "../config";

const conn = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
    port: config.port
});

const getConnection = ()=>{
    return conn;
}

module.exports={
    getConnection
}