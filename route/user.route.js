const userController = require("../controller/user.controller");


module.exports = (app) =>{
    app.post("/user/signup",userController.signup)
    app.post("/user/signin",userController.signin)
}