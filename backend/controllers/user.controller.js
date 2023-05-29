const User = require('../models/User'); 

const userCtrl =  {}; 

userCtrl.getUsers = async (req, res) =>  {
   
      const users = await User.find(); 
      res.json(users); 
   }

userCtrl.createUser = async (req, res) =>  {
      const user = new User(req.body); 
      await user.save(); 

      res.json( {'status':'User saved'}); 
   }

userCtrl.getUserById = async (req, res) =>  {
      const user = await User.findById(req.params.id); 

      res.json(user); 
   }

userCtrl.userEdit = async (req, res) =>  {
      const user =  {
         name:req.body.name, 
         username:req.body.username, 
         password:req.body.password, 
         updatedAt:req.body.updatedAt
      }; 
   await User.findByIdAndUpdate(req.params.id,  {$set:user },  {new:true }); 
      res.json( {status:'User Updated'}); 
   }

userCtrl.deleteUser = async (req, res) =>  {
      await User.findByIdAndDelete(req.params.id); 
      res.json( {status:'User Deleted'});
   }

   //exporto el módulo
module.exports = userCtrl; 
