const { GraphQLSchema } = require("graphql");
const RootQuery = require("./query/query");
const RootMutation = require("./mutation/mutation");

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});
module.exports = schema;
