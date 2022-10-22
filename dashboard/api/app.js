import { courseTypes, courses } from './services'

var express = require("express")
var app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/courseTypes", (req, res, next) => {
    const response = courseTypes.find()
    return res.json(response);
   });

app.get("/courses/:id", (req, res, next) => {
    const id = req.params.id
    const response = courses.findOne(id)
    return res.json(response);
   });

app.get("/courses", (req, res, next) => {
    const { typeId, date } = req.query
    const response = courses.find({ typeId, date })
    return res.json(response);
   });

app.listen(3000, () => {
    console.log("Server running on port 3000")
})