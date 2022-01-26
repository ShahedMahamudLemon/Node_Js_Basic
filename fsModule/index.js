var fsModule = require("fs");
var http = require("http");
var Url = require("url");

var server = http.createServer(function (req, res) {
  if (req.url == "/") {
    // Sync file rename
    let error = fsModule.renameSync("test.txt", "testRename.txt");
    if (error) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("Error detected!!");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File rename Successfully!! Check current directory");
      res.end();
    }

    // Async file create
    // fsModule.writeFile("test.txt", "Hello! testing suceess", function (error) {
    //   if (error) {
    //     res.writeHead(200, { "Content-Type": "text/html" });
    //     res.write("Error detected!!");
    //     res.end();
    //   } else {
    //     res.writeHead(200, { "Content-Type": "text/html" });
    //     res.write("File created Successfully!! Check current directory");
    //     res.end();
    //   }
    // });

    // Async file read
    // fsModule.readFile("index.html", function (error, data) {
    //   res.writeHead(200, { "Content-Type": "text/html" });
    //   res.write(data);
    //   res.end();
    // });
    // Sync file read
    // var data = fsModule.readFileSync("index.html");
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.write(data);
    // res.end();
  }
});
server.listen(5050);
console.log("Success");
