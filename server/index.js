const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const CustomerModel = require("./models/Customer");
//const Customer = require("./models/Customer");
//const dbConnection = require('./db');
mongoose.connect('mongodb+srv://riswana2:riswana2@cluster0.aojxpld.mongodb.net/yubi?retryWrites=true&w=majority');
//mongoose.connect('mongodb+srv://riswana1:riswana1@cluster0.aojxpld.mongodb.net/yubi');
//mongoose.connect('mongodb+srv://riswana1:riswana1@cluster0.uhgwwji.mongodb.net/test',{useUnifiedTopology: true, useNewUrlParser: true})
//mongodb+srv://riswana1:<password>@cluster0.aojxpld.mongodb.net/?retryWrites=true&w=majority
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post("/update", async (req, res) => {

  const C_name = req.body.fullName;
  const C_email = req.body.email;
  const C_catName = req.body.catName;
  const C_address = req.body.address;
  const newCustomer = new CustomerModel({

    C_name: C_name,
    C_email: C_email,
    C_catName: C_catName,
    C_address: C_address,


  });
  await newCustomer.save();
  res.send(req.body.fullName);
  res.send('Entry Saved In The Database');


});

app.post("/login", async (req, res) => {
  res.send(req.body.email);
});

app.post("/fetch", async (req, res) => {
  var email = req.body.email;



  Customer.findOne({ email: email });
  res.send(
    " login successful as customer");
  if (err) {
    res.send(
      " err"
    );
  }


  else {

    res.send(
      " login successful as customer");

  }

});

app.listen(3002, () => { console.log("server started to listen at port http://localhost:3002 "); });