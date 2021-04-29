const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");
const Register = require("./models/register");

const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path))
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req,res) => {
    res.render("index")
});

app.get("/login", (req,res) => {
    res.render("login");
});


app.get("/register", (req,res) => {
    res.render("register");
});

app.post("/register", async (req,res) => {
    try {
        const registerstudent = new Register({
            uid : req.body.uid,
            password : req.body.password
        })
        const registered = await registerstudent.save();
        res.status(201).render("login");
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post("/login", async (req,res) => {
    try {
        const uid = req.body.uid;
        const password = req.body.password;
        const studentuid = await Register.findOne({uid:uid});
        if(studentuid.password === password){
            res.status(201).render("index2");
        }else{
            res.send("Invalid password");
        }
    } catch (error) {
        res.status(400).send("Invalid UID");
    }
});

app.listen(port, ()=> {
    console.log(`Server is running at port no. ${port}`);
})
