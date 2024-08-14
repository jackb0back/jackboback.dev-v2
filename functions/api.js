require('dotenv').config();
const fetch = require('node-fetch');
const { Octokit } = require("@octokit/rest");
const serverless = require("serverless-http");
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = express.Router();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Use the environment variable
const REPO_OWNER = 'jackb0back'; // Your GitHub username
const REPO_NAME = 'streamingAssets'; // Your repository name
// const FILE_PATH = 'jackboback-dev/projects.db'; // Path to your file in the repo
const corsOptions = {
  origin: '*',
  methods: 'GET, POST, OPTIONS',
  allowedHeaders: 'Content-Type'
};
app.use(cors());
app.options('*', cors(corsOptions));
let projects = [];
let blog = [];
// Initialize Octokit
const octokit = new Octokit({ auth: GITHUB_TOKEN });

// Fetch the .db file from GitHub and process the JSON objects
async function fetchAndLoadJsonFile(type) {
  if (type === "projects") {
    const dbFileUrl = 'https://raw.githubusercontent.com/jackb0back/streamingAssets/main/jackboback-dev/projects.db';
  
    try {
      const response = await fetch(dbFileUrl);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const textData = await response.text();
      const lines = textData.trim().split('\n');
  
      projects = lines.map(line => {
        try {
          return JSON.parse(line);
        } catch (error) {
          console.error('Error parsing JSON line:', error);
          return null;
        }
      }).filter(item => item !== null);
    } catch (error) {
      console.error('Error fetching the .db file:', error);
    }
  }else {
    const dbFileUrl = 'https://raw.githubusercontent.com/jackb0back/streamingAssets/main/jackboback-dev/blog.db';
  
    try {
      const response = await fetch(dbFileUrl);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const textData = await response.text();
      const lines = textData.trim().split('\n');
      console.log(lines)
      blog = lines.map(line => {
        try {
          return JSON.parse(line);
        } catch (error) {
          console.error('Error parsing JSON line:', error);
          return null;
        }
      }).filter(item => item !== null);
    } catch (error) {
      console.error('Error fetching the .db file:', error);
    }
  }
}

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
  }
  return result;
}

// Update the .db file on GitHub
async function updateJsonFile(type,newContent) {

  if (type === "blog") {
    var FILE_PATH = "jackboback-dev/blog.db";
  }else {
    var FILE_PATH = "jackboback-dev/projects.db";    
  }

  try {
    const response = await octokit.repos.getContent({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path: FILE_PATH,
    });

    const sha = response.data.sha;

    await octokit.repos.createOrUpdateFileContents({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path: FILE_PATH,
      message: 'Update '+type+'.db file',
      content: Buffer.from(newContent).toString('base64'),
      sha: sha,
    });
  } catch (error) {
    console.error('Error updating the .db file:', error);
  }
}

// Example route to get projects
router.get("/projects", async (req, res) => {
  await fetchAndLoadJsonFile("projects");
  res.json(projects);
});

router.get("/blog", async (req, res) => {
  await fetchAndLoadJsonFile("blog");
  res.json(blog);
});

// Example route to add data
router.post("/", bodyParser.json(), async (req, res) => {
  const { action, data } = req.body;
  
  if (action === "addProject") {
    data._id = generateRandomString(16);
    projects.push(data);
    
    const newContent = projects.map(project => JSON.stringify(project)).join('\n');
    await updateJsonFile("projects",newContent);
    
    res.send('Project added and file updated');
  } else if (action === "deleteProject") {
    // Deletes item by using _id
    const { id } = data;
    projects = projects.filter(project => project._id !== id);
    
    const newContent = projects.map(project => JSON.stringify(project)).join('\n');
    await updateJsonFile("projects",newContent);
    
    res.send('Project deleted and file updated');
  } else if (action === "addBlog") {
    data._id = generateRandomString(16);
    blog.push(data);
    
    const newContent = blog.map(blog => JSON.stringify(blog)).join('\n');
    await updateJsonFile("blog",newContent);
    
    res.send('Blog post added and file updated');
  }else {
    res.send("Action not found");
  }
});

async function init() {
  await fetchAndLoadJsonFile("projects");
  await fetchAndLoadJsonFile("blog");

}

init();

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
