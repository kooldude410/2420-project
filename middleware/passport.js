const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const authcontroller = require("../controllers/auth_controller");
const localLogin = new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
    },
    (email, password, done) => {
        const user = authcontroller.getUserByEmailIdAndPassword(email, password);
        return user ?
            done(null, user) :
            done(null, false, {
                message: "Your login details are not valid. Please try again",
            });
    }
);


passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    let user = authcontroller.getUserById(id);
    if (user) {
        done(null, user);
    } else {
        done({ message: "User not found" }, null);
    }
});

module.exports = passport.use(localLogin);