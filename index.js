const express = require("express");
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));

const csrfProtection = csurf({ cookie: true });
app.use(cookieParser());



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
   console.log({ users })
   res.render('index', { users })
});

app.get("/create", csrfProtection, (req, res) => {
   res.render('create', {csrfToken:req.csrfToken()})
})

app.post("/create", csrfProtection, (req, res) => {

   let errors = [];
   for (let field in req.body) {
      console.log(field)
      if (!req.body[field]) {
         errors.push(`Please provide a ${field}.`)
      }
   }

   if (errors.length) {
      errors = errors.slice(1)
      res.render('create', {csrfToken:req.csrfToken(), errors})
   } else {
      users.push(req.body)
      res.redirect("/");
   }


})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
