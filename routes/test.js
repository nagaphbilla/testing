const database = require("firebase/database")
const getDatabase = database.getDatabase
const ref = database.ref
const set = database.set
const router = require("express").Router();

router.post("/test", async(req, res) => {
    try {
        const db = getDatabase()
        set(ref(db, 'users/'), {
            username: req.body.name,
            email: req.body.email,
            password : req.body.password
        })
        .then(() => res.status(200).send("Success"))
    }
    catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router