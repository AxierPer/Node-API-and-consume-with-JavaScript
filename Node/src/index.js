import app from "./app";

const main = ()=>{
    app.listen(app.get("port"));
    console.log(`server and port ${app.get("port")}`);
};

main();