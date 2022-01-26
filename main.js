var http = require("http");
var url = require("url");

var server = http.createServer(function (req, res) {
  var mainUrl = "http://property.byterhythms.com/super/single.php";

  var mainUrlObj = url.parse(mainUrl, true);
  var hostName = mainUrlObj.host;
  var pathName = mainUrlObj.pathname;
  var path = mainUrlObj.path;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(path);
  res.end();
  // header & body element write
  // if (req.url == "/") {
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.write("<h2>This is home page</h2>");
  //   res.end();
  // } else if (req.url == "/about") {
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.write("<h2>This is About page</h2>");
  //   res.end();
  // } else if (req.url == "/contact") {
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.write("<h2>This is Contact page</h2>");
  //   res.end();
  // }
});

server.listen(5050);
console.log("Success");
