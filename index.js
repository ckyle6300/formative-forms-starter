const express = require("express");
const csurf = require('csurf');
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "pug");


const users = [
   {
      id: 1,
      firstName: "Jill",
      lastName: "Jack",
      email: "jill.jack@gmail.com"
   },
   {
      id: 1,
      firstName: "Jill2",
      lastName: "Jack2",
      email: "jill.jack@gmail.com2"
   },
];

app.get("/", (req, res) => {
   console.log({users})
   res.render('index', {users})
});

app.get("/create", (req, res) => {
   res.render('create')
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
