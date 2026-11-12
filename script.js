//console.log("salut");
import express from "express";
import http from "http";
//import   from 'process'

const app = express();

app.get("/", async (req, res) => {
  const a = await req.headers;
  console.log(req.hostname);

  console.log(a.host);

  return res.send({ "message ": "bien joué" });
});
if(!process.env.CI){
  const server = http.createServer(app);

server.listen(
  4000,
  console.log("server démarré sur le port http://localhost:4000"),
);
}
else{
 console.log("CI démarré avec succès");
 
} 

