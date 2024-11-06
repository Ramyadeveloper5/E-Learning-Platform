const mongoose = require("mongoose");
const { v4 } = require("uuid");

const userSch = new mongoose.Schema(

{
    name:String,
    phonenumber: Number,
    age:Number,
    gender:String,
    email: String,
    address:String,
    designation: String,
    title: {
      type: [String],
      default: ["name","phonenumber","age","sex","email","designation"]
    },
    _id: {
      type: String,
      default: v4,
    },
    userId: {
      type: String
    }
  },
  { timestamps: true }
);

const userDetails = mongoose.model("UserDetails",userSch)

module.exports= userDetails