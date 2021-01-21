const express = require("express");
// const csurf = require('csurf');
// const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true }));

// const csrfProtection = csurf({ cookie: true });

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

app.get("/create", (req, res) => {
   res.render('create')
})

app.post("/create", (req, res) => {
   console.log(req.body);
   users.push(req.body)
   res.redirect("/");
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
