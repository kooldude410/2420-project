const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const server = express();
const reminderController = require("./controllers/reminder_controller");
const authController = require("./controllers/auth_controller");
const passport = require("passport");


server.use(express.static(__dirname + "/public"));
server.use(ejsLayouts);
//the line below is needed for express to get user input
server.use(express.urlencoded({ extended: false }));
server.set("view engine", "ejs");


server.get("/", function(req, res) {

    res.send("landing page")
})

server.get("/reminder", reminderController.list)

server.get("/reminder/new", reminderController.new)

server.post("/reminder", reminderController.create)

//: indicates variable, id is already established as attribute
server.get("/reminder/:id", reminderController.listOne)

server.get("/reminder/edit/:id", reminderController.edit)

server.post("/reminder/update/:id", reminderController.update)

server.post("/reminder/delete/:id", reminderController.delete)

server.get("/register", authController.register);
server.get("/login", authController.login);
server.post("/register", authController.registerSubmit);
server.post("/login", authController.loginSubmit);

server.listen(8080, function() {
    console.log('go to http://localhost:8080')
});

server.use(passport.initialize());
server.use(passport.session());