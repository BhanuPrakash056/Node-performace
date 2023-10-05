const cluster = require("cluster");
const express = require("express");
const os = require("os");
const app = express();
const port = 3000;
function delays(duration) {
  const startTime = new Date();
  while (Date.now() - startTime < duration) {
    //event loop is blocked
  }
}
app.get("/", (req, res) => {
  //JSON.stringify({});
  //JSON.parse("{}");
  //[5,1,2,3,4].sort

  res.send("Performance test Example" + process.pid);
});
app.get("/timers", (req, res) => {
  //delay the response tim
  delays(9000);
  res.send("ding ding ding test Example" + process.pid);
});

if (cluster.isMaster) {
  console.log("master has been started");
  const NumberOfCPU = os.cpus().length;
  console.log(NumberOfCPU);
  for (let i = 0; i < 1; i++) {
    cluster.fork();
  }
} else {
  console.log("worker has been started");
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}
