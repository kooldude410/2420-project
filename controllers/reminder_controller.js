let Database = require("../database");
const fetch = require('node-fetch');

let reminderController = {
    list: function(req, res) {
        res.render('reminder/index', { reminders: Database.user1.reminders });
    },

    new: function(req, res) {
        res.render('reminder/create');
    },

    create: function(req, res) {
        //let newindex = String(Database.user1.reminders.length + 1);
        let reminder = {
            id: Database.user1.reminders.length + 1,
            title: req.body.title,
            description: req.body.description,
            completed: false
        }
        Database.user1.reminders.push(reminder);
        //routes the user to the desired location after
        res.redirect('/reminder');
    },

    listOne: function(req, res) {
        //gets the info from the dynamic link in index.js, req.params is the object with all the info
        let reminderToFind = req.params.id;
        //console.log(req.params.id)
        let searchResult = Database.user1.reminders.find(function(i) {
            return i.id == reminderToFind;
        })
        if (searchResult != undefined) {
            res.render('reminder/single-reminder', { reminderItem: searchResult })
        } else {
            res.redirect("/reminder");
        }




    },

    edit: (req, res) => {
        //gets the info from the dynamic link in index.js, req.params is the object with all the info, id will fetch the index value
        let reminderToFind = req.params.id;
        let searchResult = Database.user1.reminders.find(function(reminder) {
            return reminder.id == reminderToFind;
        });
        //routes the user to the desired location
        res.render("reminder/edit", { reminderItem: searchResult });
    },

    update: function(req, res) {
        if (req.body.completed == "true") {
            radioBool = true;
        } else {
            radioBool = false;
        }

        let reminder = {
            id: req.params.id,
            title: req.body.title,
            description: req.body.description,
            completed: radioBool
        }

        Database.user1.reminders[parseInt(req.params.id) - 1] = reminder;

        //routes the user to the desired location
        res.redirect('/reminder');
    },

    delete: function(req, res) {
        Database.user1.reminders.splice(parseInt(req.params.id) - 1, 1)

        res.redirect('/reminder');
    }





}


module.exports = reminderController;