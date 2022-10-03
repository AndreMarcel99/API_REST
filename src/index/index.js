const { response } = require("express");
const express = require("express");
const createError = require('http-errors');

const { Response } = require("../common/response");

module.exports.IndexAPI = (app) => {
  const router = express.Router();

  router.get("/", (req, res) => {
    const menu = {
      products: `https://${req.header.host}/api/products`,
      users: `https://${req.header.host}/api/products`,
    };

    Response.success(res, 200, "API Stock", menu);
  });
  app.use("/", router);
};

module.exports.NotFoundAPI = (app) => {
    const router = express.Router();
    router.all("*",(req,res) => {
        Response.error(res, new createError.NotFound())
    })
    app.use("/",router)
};
