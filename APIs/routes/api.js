const express = require("express");
const Person = require("../models/person");

const router = express.Router();

router.get("/person" ,(req,res, next) => {
  Person.find({}).then((persons) =>{
    console.log("response send!!!");
    res.send(persons);
  }).catch(next);

});

router.post("/person" ,(req,res,next) => {
  Person.create(req.body).then((person)=>{
    console.log("person registered successfully into the database");
    res.send(person);
  }).catch(next);
});

router.delete("/person/:id" ,(req,res,next) => {
  Person.findByIdAndRemove({_id: req.params.id}).then((person) =>{
    res.send(person);
  }).catch(next);
});

router.put("/person/:id" ,(req,res, next) => {
  Person.findByIdAndUpdate({_id: req.params.id}, req.body).then(()=>{
    Person.findOne({_id:req.params.id}).then((person)=>{
      res.send(person);
    });
  }).catch(next);
});

module.exports = router;
