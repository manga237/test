//console.log("salut");
import express from 'express'
import http from "http"


const app = express();

app.get("/", async (req, res) => {
  const a=await req.headers
  console.log(req.hostname);
  
  
  console.log(a.host);

  return res.send({"message ":"bien joué"});
});

const server = http.createServer(app);

server.listen(
  3000,
  console.log("server démarré sur le port http://localhost:3000")
);
