/*
    CIT 281 Project 3
    Name: Elliott Nichols
*/

const fs = require("fs");
const fastify = require("fastify")();
const { coinCount } = require("./p3-module");

//Default route
fastify.get("/", (request, reply) => {
  const filePath = `${__dirname}/index.html`;

  fs.readFile(filePath, (err, data) => {
    if (err) {
      reply.code(500).send("Internal Server Error");
    } else {
      reply
        .code(200)
        .header("Content-Type", "text/html; charset=utf-8")
        .send(data);
    }
  });
});
//Route for /coin
fastify.get("/coin", (request, reply) => {
  const { denom = 0, count = 0 } = request.query;
  const coinValue = coinCount({
    denom: parseInt(denom),
    count: parseInt(count),
  });

  const response = `<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`;

  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send(response);
});

//route for /coins
fastify.get("/coins", (request, reply) => {
  const { option } = request.query;
  let coinValue = 0;
  const coins = [
    { denom: 25, count: 2 },
    { denom: 1, count: 7 },
  ];
  switch (option) {
    case "1":
      coinValue = coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 });
      break;
    case "2":
      coinValue = coinCount(...coins);
      break;
    case "3":
      coinValue = coinCount(coins);
      break;
    default:
      break;
  }
  const response = `<h2>Option ${option} value is ${coinValue}</h2><br /><a href ="/">Home</a>`;

  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send(response);
});

// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
