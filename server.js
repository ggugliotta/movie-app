const http = require("http"),
  fs = require("fs"),
  url = require("url");

http.createServer((request, response) => {
  let addr = request.url;
  q = url.parse(addr, true);
  filePath = "";
});

fs.appendFile(
  "log.txt",
  "URL: " + addr + "\nTimeStamp: " + new Date() + "\n\n",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Added to log.");
    }
  }
);

if (q.pathname.includes("documentation")) {
  filePath = __dirname + "/documentation.html";
} else {
  filePath = "index.html";
}

fs.readFile(filePath, (err, data) => {
  if (err) {
    throw err;
  }

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(data);
  response.end();
});

listen(8080);
console.log("My first Node test server is running on Port 8080.");
