// import { initializeApp } from "firebase/app"
const express = require("express")
const firebase = require("firebase/app")
var app = express()
const cors = require("cors")
const test = require("./routes/test")


app.use(cors({ origin: true, credentials: true }))
app.use(express.json())


const firebaseConfig = {
  apiKey: "AIzaSyA1AsopjlE8DHJY5O5VKILP5tp5zu7ogqI",
  authDomain: "docchat-2105.firebaseapp.com",
  projectId: "docchat-2105",
  storageBucket: "docchat-2105.appspot.com",
  messagingSenderId: "652748713228",
  appId: "1:652748713228:web:a9e7480b9e5938712d2d29",
  measurementId: "G-4QR6TS8NFN",
};

const init = firebase.initializeApp(firebaseConfig)

// console.log(init)

app.get("/", (req, res) => {
  res.status(200).send("Hello")
})
app.use("/api/test", test)

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));