const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());
require("./customerDetails");

const mongo = "mongodb+srv://sulani:12345@cluster0.kf9zt5w.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongo, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connection Successful");
})
.catch((e) => console.log(e));

const User = mongoose.model("CustomerDetails");
  

app.post("/register", async(req, res) =>{
    const { companyname, address1, address2, address3, city, district, hotline, smsnumber, email, facebook, twitter, linkedin, companylogo, businesstype } = req.body;

    try {
        await User.create({
            companyname, address1, address2, address3, city, district, hotline, smsnumber, email, facebook, twitter, linkedin, companylogo, businesstype
        });
         res.send({ status: "Ok" });
    } catch (error) {
        res.send({ status: "Something went wrong" });
    }
});
 

app.listen(5000, () => {
    console.log("Server Started");
})

// app.post("/post", async(req, res) =>{
//     console.log(req.body);
//     const { data } = req.body;

//     try {
//         if (data == "sulani") {
//             res.send({ status: "ok" });
//         } else {
//             res.send({ status: "User not found" });
//         } 
//     } catch (error) {
//         res.send({ status: "Something went wrong" });
//     }
// });
 