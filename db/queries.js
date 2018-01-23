var pgp = require('pg-promise')({});
var connectionString = 'postgres://localhost/userlist';
var db = pgp(connectionString);

function getAllUsers(req, res, next) {
    db.any(`SELECT * FROM users`)
        .then(
        function (data) {
            res.status(200)
                .json({
                    status: "success",
                    data: data,
                    message: "Got all users"
                })
        }
        )
}
//you should use catch to display a user-friendly error message
//catch throws an explicit error, without it it would throw "uncaught error", can display a user-friendly error for the user.

//Tasks:
//get single user
//change username
//add a new user

module.exports = {
    getAllUsers: getAllUsers
}