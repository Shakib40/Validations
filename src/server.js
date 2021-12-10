const app = require(".");

const connect = require("./config/db");

app.listen(2345, async() => {
    console.log("listening port 2345");
    await connect();
});