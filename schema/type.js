const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLID
} = require("graphql");

exports.UserType = new GraphQLObjectType({
  name: "userType",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt },
    city: { type: GraphQLString }
  })
});

exports.UserInputArgs = {
  name: { type: new GraphQLNonNull(GraphQLString) },
  username: { type: new GraphQLNonNull(GraphQLString) },
  email: { type: new GraphQLNonNull(GraphQLString) },
  age: { type: new GraphQLNonNull(GraphQLInt) },
  city: { type: new GraphQLNonNull(GraphQLString) }
};

exports.UpdateUserInputArgs = {
  _id: { type: new GraphQLNonNull(GraphQLID) },
  name: { type: GraphQLString },
  username: { type: GraphQLString },
  email: { type: GraphQLString },
  age: { type: GraphQLInt },
  city: { type: GraphQLString }
};

exports.GetUserById = {
  _id: { type: new GraphQLNonNull(GraphQLID) }
};
