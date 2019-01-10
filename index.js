const express = require("express");
const graphqlHttp = require("express-graphql");
const mongoose = require("mongoose");
const app = express();
const schema = require("./schema/schema");

mongoose
  .connect(
    "mongodb://localhost/gql",
    { useNewUrlParser: true }
  )
  .then(() => console.log("database connected.."))
  .catch(err => console.log(err));

app.use(
  "/graphql",
  graphqlHttp({
    schema,
    graphiql: true
  })
);

app.listen(3000, () => console.log("app is running on port 3000..."));
