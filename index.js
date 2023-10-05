const express = require("express");
const app = express();
const port = 3000;
function delays(duration) {
  const startTime = new Date();
  while (Date.now() - startTime < duration) {
    //event loop is blocked
  }
}
app.get("/", (req, res) => res.send("Performance test Example"));
app.get("/timers", (req, res) => {
  //delay the response tim
  delays(9000);
  res.send("ding ding ding test Example");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
