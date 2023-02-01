const express = require('express')
const router = new express.Router()
const {User} = require('../mongodb')
const userController = require("../controller/user-controller")


  router.put('/:email', userController.updateUser);
  router.post('', userController.createUser);
  router.get("", userController.getUsers);
  router.delete('/:email', userController.deleteUser);

module.exports = router
