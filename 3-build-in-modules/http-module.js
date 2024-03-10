const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("wellCome to our home page");
  if (req.url === "/about") res.end("here is our short ");
  res.end(`<h1>Oops!</h1> <p> not page found </p>`);
});

server.listen(5000);
