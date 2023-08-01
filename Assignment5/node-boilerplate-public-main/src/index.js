var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {

  if (req.url === "/welcome") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Dominos!");
  } 

  else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const contactInfo = {
      phone: "18602100000",
      email: "guestcaredominos@jublfood.com",
    };
    res.end(JSON.stringify(contactInfo));
  } 
  
  else {
    res.writeHead(404);
    res.end();
  }

}

module.exports = httpServer;