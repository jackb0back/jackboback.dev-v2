const repl = require("repl");
repl.start({
  eval: (cmd, context, filename, callback) => {
    with (context) callback(null, eval(cmd))
  }
});
const serverless = require("serverless-http");
const express = require("express");
const path = require('path');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
var db = {};
var Datastore = require('nedb');

db.projects = new Datastore({
  filename: path.join(__dirname, "../db/projects.db"),
  autoload: true
});
db.blog = new Datastore({
  filename: path.join(__dirname, "db/blog.db"),
  autoload: true
});


db.projects.loadDatabase();
db.blog.loadDatabase();


//app.use(express.static(path.join(__dirname, 'dist')));

// router.get("/", (req, res) => {
//     console.log(path.join(__dirname, 'dist', 'index.html'));
//     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });
// get projects
router.get("/projects",async (req, res) => {
  console.log(path.join(__dirname, "../db/projects.db"))
     await db.projects.loadDatabase();
    db.projects.find({}, (err, docs) => {
      if (err) {
          return res.status(500).send(err);
      }
      res.json(docs);
  });
});
//Get blob posts
router.get("/blog",async (req, res) => {
    // await db.blog.loadDatabase();
    // var d = await db.blog.getAllData();
    // res.json(d);
    console.log(path.join(__dirname, "../db/blog.db"))
    await db.blog.loadDatabase();
   db.blog.find({}, (err, docs) => {
     if (err) {
         return res.status(500).send(err);
     }
     res.json(docs);
 });
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
router.post("/", bodyParser.json(), async (req, res) => {
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

module.exports.handler = serverless(app);
