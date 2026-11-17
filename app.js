// Startup file for cPanel Application Manager (Phusion Passenger).
// Passenger runs this file and provides the port through process.env.PORT.
const { createServer } = require("http");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev: false, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, () => {
    console.log(`GMLinks ready on port ${port}`);
  });
});
