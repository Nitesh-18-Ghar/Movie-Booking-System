const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");

app.get("/getcookies", (req, res) => {
    res.cookie("greet", "hello");
    res.send("Sent You Some Cookies!");
});

app.get("/", (req, res) => {
    res.send("Hi, I Am Root!");
});

app.use("/users", users);
app.use("/posts", posts); 

app.listen(3000, () => {
    console.log("Server Is Listening To 3000");
})