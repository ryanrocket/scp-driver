const app = require("express")();
console.log("\n\nCOPYRIGHT RYAN WANS (C) 2021\n\nBOOTING APP...\n\n");
// const i2c = require('i2c-bus');
const sio = require('socket.io');
const { get } = require("http");



// Front end
app.get("/", (req, res) => {
    res.send("Internal Error Occured.<br/>TRACE: invalid-pth")
})
app.get("/a", (req, res) => {
    res.sendFile("./assets/a.html", {root: __dirname});
})
app.get("/b", (req, res) => {
    res.sendFile("./assets/b.html", {root: __dirname});
})
app.get("/styles.css", (req, res) => {
    res.sendFile('./assets/styles.css', {root: __dirname});
})
app.get("/front.js", (req, res) => {
    res.sendFile('./assets/front.js', {root: __dirname});
})

app.listen(80, () => {console.log("9qskp38ujodr8u8o4r\n");})
console.log("DONE!\n\n");