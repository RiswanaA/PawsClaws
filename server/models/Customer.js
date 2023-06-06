const mongoose= require('mongoose');
const CustomerSchema= new mongoose.Schema({
   
   
     C_name:{
      type:String,
       required:true,
     },
    C_email:{
        type:String,
        required:true,
    },
    C_catName:{
        type: String,
        required:true,

    },
    C_address:{
        type: String,
        required:true,

    }

});

const Customer = mongoose.model("Customer", CustomerSchema);
module.exports=Customer;



