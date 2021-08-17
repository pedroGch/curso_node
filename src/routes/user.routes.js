const router = require("express").Router();

const { 
  getUsers, 
  deleteUser, 
  updateUser  
} = require('./../controller/user.controller')

const { authJwt } = require ('../middleware')

//router.get("/", [authJwt.check] , getUsers);
router.get("/", getUsers);

router.delete("/:id", deleteUser);

router.put("/:id", updateUser);



module.exports = router;