const express = require("express");
const app = express();
var exec = require("child_process").exec;
const os = require("os");
var request = require("request");
var fs = require("fs");
var path = require("path");
const auth = require("basic-auth");

app.get("/", function (req, res) {
  res.send("HelloWorld~");
});

app.get("/status", function (req, res) {
  let cmdStr = "ps -ef";
  exec(cmdStr, function (err, stdout, stderr) {
    if (err) {
      res.type("html").send("<pre>Status error: \n" + err + "</pre>");
    }
    else {
      res.type("html").send("<pre>Processes: \n" + stdout + "</pre>");
    }
  });
});

exec("python3 entry.py", function (err, stdout, stderr) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));