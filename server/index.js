const path = require("path");
const express = require("express");
const Pageres = require("pageres");

const PORT = process.env.PORT || 3001;

const app = express();

(async () => {
  await new Pageres({delay: 2, filename: "<%= url %>", incrementalName: false, 
  launchOptions: { args: ['--no-sandbox'] }})
    .src("http://www.sloneheatingandair.com", ["450x450"])
    .src("https://flamboyant-kalam-8ca516.netlify.app", ["450x450"])
    .src("https://suspicious-noether-2de41b.netlify.app", ["450x450"])
    .src("https://happy-curie-b68712.netlify.app", ["450x450"])
    .src("https://clarence-de-coder.github.io/fcc-random-quote-machine", ["450x450"])
    .src("https://quizzical-volhard-f6d8e1.netlify.app", ["450x450"])
    .dest(path.join(__dirname, "/images"))
    .run();
})();

// Have express serve our static image files generated by pageres
app.use(express.static(path.join(__dirname, "/images")));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// api that sends the active port in JSON format when a get request is made
app.get("/api", (req, res) => {
  res.json({port: PORT})
})

// All other GET requests not handled before will capture screenshots and return our React app
app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../client/build', 'index.html')); 
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});