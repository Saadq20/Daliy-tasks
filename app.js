
const  express = require("express");

const app = express();
const date = require(__dirname+"/date.js");



app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

app.use(express.static("public"));
let items= [   " !مثل  اصحى الصباح "];

app.get("/", function(req,res){

let today = new Date();
let options = {

    weekday: "long",

    day: "numeric",

    month: "long"

  };

  
let day = today.toLocaleString("en-US",options);
res.render("list", {kindofDate: day  ,newListItem: items });

});

app.post("/",function (req,res){

    var item = req.body.Newitme;
    
     items.push(item);
     res.redirect("/");
    });


app.listen(process.env.Port || 3000, function() {

    console.log("The server has been running !")
});

