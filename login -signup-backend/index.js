const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const bcryptjs = require("bcryptjs");
const app = express()
app.use(cors())
app.use(express.urlencoded())
app.use(express.json())

mongoose.connect("mongodb://0.0.0.0:27017/codingorzoo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("connected to DB")
})
mongoose.connect("mongodb://0.0.0.0:27017/feedbackdatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("connected to feedbackDB")
})
mongoose.connect("mongodb://0.0.0.0:27017/challengesdatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("connected to feedbackDB")
})

//feedbackdb schema
const feedbackDbUserSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,

});
const challengesDbUserSchema = new mongoose.Schema({
    question: String,
    level: String,
    points: String,

});
const feedbackDbUser = mongoose.model("feedbackDbUser", feedbackDbUserSchema);
const challengesDbUser = mongoose.model("challengesDbUser", challengesDbUserSchema);




//user schema 
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    cpassword: String,
   
});
//questiondb svhema
const User = mongoose.model("User", userSchema);
app.post("/register", async (req, res) => {
    const { name, email, password, cpassword, secret, userType } = req.body
    if (!name || !email || !password || !cpassword) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {

        const preuser = await User.findOne({ email: email });

        if (preuser) {
            res.send({ message: "This Email is Already Exist" })
        } else if (password !== cpassword) {
            res.send({ message: "Password and Confirm Password Not Match" })
        } else {
            const finalUser = new User({
                name, email, password, cpassword
            });

            // here password hasing

            const storeData = await finalUser.save();
            const userId = await storeData._id;


            // console.log(storeData);
            res.send({ code: 201, message: "User Registered Successfully" })
        }

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }
});
//contactus feedback storing





app.post("/login", async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(422).json({ error: "fill all the details" })
    }

    User.findOne({ email: req.body.email })
        .then(result => {
            console.log(result, '11')

            // match password with req.body.password
            if (result.password !== req.body.password) {
                res.send({ code: 404, message: 'password wrong' })
            } else if (req.body.email == "aakanshasharma66871@gmail.com" && req.body.password == "aakanshasharma") {
                res.send({ code: 408, message: 'Login Successfully' })
            }
            else {
                res.send({
                    username: result.name,
                    code: 400,
                    message: 'User Login Successfully',

                })
            }

        })
        .catch(err => {
            res.send({ code: 500, message: 'user not found' })
        })
})
app.get('/count', async (req, res) => {
    try {
        const userCount = await User.countDocuments();
        res.json({ count: userCount });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user count', error });
    }
});

app.get('/data', async (req, res) => {


    try {
        // Fetch data for the specific user by their _id
        const item = await User.find({}, '_id name email password');

        res.json(item)
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user data', error });
    }
});
app.get('/maildata', async (req, res) => {


    try {
        // Fetch data for the specific user by their _id
        const contact = await feedbackDbUser.find({}, '_id name email message');

        res.json(contact)
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user data', error });
    }
});
// Create a model for the second database

//contactus feedback storing
app.post('/feedback', async (req, res) => {
    const { name, email, message } = req.body;
  
    try {
      const newContact = new feedbackDbUser({
        name,
        email,
        message,
      });
  
      await newContact.save();
  
      res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error submitting contact form', error });
    }
  });
app.get('/mailcount', async (req, res) => {
    try {
        const mailCount = await feedbackDbUser.countDocuments();
        res.json({ count: mailCount });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user count', error });
    }
});
//challenges data storing
app.post('/challenges', async (req, res) => {
    const { question,level,points} = req.body;
  
    try {
      const newChallenge = new challengesDbUser({
        question,
        level,
        points,
      });
  
      await newChallenge.save();
  
      res.status(201).json({ message: 'Challenge is added Successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error submitting Challenge', error });
    }
  });
  //challenges data on frontend
  app.get('/challengesdata', async (req, res) => {


    try {
        // Fetch data for the specific user by their _id
        const challenge = await challengesDbUser.find({}, ' question level points');

        res.json(challenge)
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user data', error });
    }
});
app.get('/challengecount', async (req, res) => {
    try {
        const challengeCount = await challengesDbUser.countDocuments();
        res.json({ count: challengeCount });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user count', error });
    }
});


app.listen(5000, () => {
    console.log(`Backend Running At Port 5000`)
})