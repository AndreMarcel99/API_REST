const express = require("express");
const { UsersControlers } = require("./controller");
const router = express.Router();

module.exports.UsersAPI = (app) => {
  router
    .get("/", UsersControlers.getUsers)
    .get("/:id", UsersControlers.getUser)
    .post("/", UsersControlers.createUser);
    //upadate
    //delete


  app.use("/api/users", router);
};