const router = require("express").Router();

const { 
  getUsers, 
  addUser, 
  deleteUser, 
  updateUser  
} = require('./../controller/user.controller')

const { authJwt } = require ('../middleware')

router.get("/", [authJwt.check] , getUsers);

router.post("/", addUser);

router.delete("/:id", deleteUser);

router.put("/:id", updateUser);



module.exports = router;