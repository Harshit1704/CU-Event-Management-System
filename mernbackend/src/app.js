const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");
const Register = require("./models/register");
const Register2 = require("./models/register2");
const eventpost = require("./models/eventpost");
const events = eventpost.find({});

const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req,res) => {
    res.render("index")
});

app.get("/login", (req,res) => {
    res.render("login");
});
app.get("/login2", (req,res) => {
    res.render("login2");
});


app.get("/register", (req,res) => {
    res.render("register");
});

app.get("/register2", (req,res) => {
    res.render("register2");
});
app.get("/eventpost", (req,res) => {
    res.render("register2");
});
app.get("/eventdetails", (req,res) => {
    res.render("eventdetails");
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
app.post("/register2", async (req,res) => {
    try {
        const registeradmin = new Register2({
            id : req.body.id,
            password : req.body.password
        })
        const registered2 = await registeradmin.save();
        res.status(201).render("login2");
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post("/eventpost", async (req,res) => {
    try {
        const registerevent = new eventpost({
            myName : req.body.myName,
            myEvent : req.body.myEvent,
            eventType :req.body.eventType,
            myRemark :req.body.myRemark,
            myDate :req.body.myDate,
            appt :req.body.appt,
            myDate1 :req.body.myDate1,
            appt1 :req.body.appt1,
            myLink :req.body.myLink,
            myLink1 :req.body.myLink1,
            img :req.body.img
        })
        const registeredevent = await registerevent.save();
        res.status(201).render("index3");
    } catch (error) {
        res.status(400).send(error);
    }
});
/*eventpost.find({},function(err,events){
    if(err) console.warn(err);
    console.warn(events);
})*/


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
app.post("/login2", async (req,res) => {
    try {
        const id = req.body.id;
        const password = req.body.password;
        const adminid = await Register2.findOne({id:id});
        if(adminid.password === password){
            res.status(201).render("index3");
        }else{
            res.send("Invalid password");
        }
    } catch (error) {
        res.status(400).send("Invalid ID");
    }
});

app.listen(port, ()=> {
    console.log(`Server is running at port no. ${port}`);
})
