let database = require("../database");

let remindersController = {
    list: (req, res) => {
        res.render("reminder/index", { reminders: database.user1.reminders });
    },

    new: (req, res) => {
        res.render("reminder/create");
    },

    listOne: (req, res) => {
        let reminderToFind = req.params.id;
        let searchResult = database.user1.reminders.find(function(reminder) {
            return reminder.id == reminderToFind;
        });
        if (searchResult != undefined) {
            res.render("reminder/single-reminder", { reminderItem: searchResult });
        } else {
            res.render("reminder/index", { reminders: database.user1.reminders });
        }
    },

    create: (req, res) => {
        let reminder = {
            id: database.user1.reminders.length + 1,
            title: req.body.title,
            description: req.body.description,
            completed: false,
        };
        database.user1.reminders.push(reminder);
        res.redirect("/reminder");
    },

    edit: function(req, res) {
        //gets the info from the dynamic link in index.js, req.params is the object with all the info
        let reminderToFind = req.params.id;
        //console.log(req.params.id)
        let searchResult = database.user1.reminders.find(function(i) {
            return i.id == reminderToFind;
        });
        //routes the user to the desired location
        res.render({ reminderItem: searchResult }, 'reminder/edit');
    },

    update: (req, res) => {
        // implement this code
    },

    delete: (req, res) => {
        // Implement this code
    },
};

module.exports = remindersController;