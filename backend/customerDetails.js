const mongoose = require("mongoose");

const customerDetailsSchema = new mongoose.Schema(
    {
        companyname: String, 
        address1: String, 
        address2: String, 
        address3: String, 
        city: String,
        district: String,
        hotline: String, 
        smsnumber: String, 
        email: String,
        facebook: String, 
        twitter: String, 
        linkedin: String,
        companylogo: {
            data: Buffer,
            contentType: String
        }, 
        businesstype: String,
    }
);

mongoose.model("CustomerDetails", customerDetailsSchema);