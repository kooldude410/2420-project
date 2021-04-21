let Database = require("../database");
const bcrypt = require('bcrypt')
const users = []

let authController = {
    login: (req, res) => {

        res.render("auth/login");
    },

    register: (req, res) => {
        res.render("auth/register");
    },

    loginSubmit: (req, res) => {
        res.redirect('/users/' + req.user.email);

    },

    registerSubmit: async(req, res) => {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            users.push = ({
                id: Date.now().toString(),
                email: req.body.email,
                password: hashedPassword
            })
            res.redirect("auth/login")
        } catch {
            res.redirect('auth/register')
        }
    },
};

module.exports = authController;