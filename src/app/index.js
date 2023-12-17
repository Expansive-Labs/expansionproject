const express = require("express");
const app = express();

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");

// Default value for visitor count stored inside lowDB
db.default({ visitorCount: 0 }).write();

app.get("/visitorCount", (req, res) => {
  const visitorCount = db.get("visitorCount").value();
  res.json({ visitorCount });
});

app.post("/visitorCount", (req, res) => {
  db.update("visitorCount", (n) => n + 1).write();
  const visitorCount = db.get("visitorCount").value();
  res.json({ visitorCount });
});

app.listen(3001, () => {
  console.log("Sever listening on port 3001");
});
