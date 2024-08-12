const repl = require("repl");
repl.start({
  eval: (cmd, context, filename, callback) => {
    with (context) callback(null, eval(cmd))
  }
});
const express = require("express");
const path = require('path');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
var db = {};
var Datastore = require('nedb');

db.projects = new Datastore({
    filename: "db/projects.db",
    autoload: true
});
db.blog = new Datastore({
    filename: "db/blog.db",
    autoload: true
});

db.projects.loadDatabase();
db.blog.loadDatabase();


app.use(express.static(path.join(__dirname, 'dist')));

router.get("/", (req, res) => {
    console.log(path.join(__dirname, 'dist', 'index.html'));
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
//get projects
router.get("/api/projects",async (req, res) => {
    await db.projects.loadDatabase();
    var d = await db.projects.getAllData();
    res.json(d);
});
//Get blob posts
router.get("/api/blog",async (req, res) => {
    await db.blog.loadDatabase();
    var d = await db.blog.getAllData();
    res.json(d);
});


function addToDB(_db,data) {
    return new Promise(async (resolve, reject) => {
        await _db.find(data, async (err, docs) => {
            if (docs.length == 0) {
                await _db.insert(data,(err, newDoc) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(newDoc);
                });
            }else {
                resolve("already posted");
            }
        });

    });
}

//Dev make posts
router.post("/api", bodyParser.json(), async (req, res) => {
    console.log(req.body);

    switch (req.body.action) {
        case "addProject":
            var g = await addToDB(db.projects,req.body.data);
            res.send(g);
        break;
        case "newPost":
            var g = await addToDB(db.blog,req.body.data);
            res.send(g);
        break;
        default:
            res.send("action not found");
    }

    // await db.projects.insert({"title":"balls"},function(err, newDoc) {
    //     console.log(newDoc);
    //     db.projects.loadDatabase();
    // });

    
});

// app.use("/.netlify/functions/api", router);
app.use("/.netlify/functions/api", router);

module.exports = {app};
