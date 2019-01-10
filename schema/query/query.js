const { GraphQLObjectType, GraphQLList } = require("graphql");
const { UserType, GetUserById } = require("../type");
const User = require("../../models/user");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    // Get all users
    users: {
      type: new GraphQLList(UserType),
      resolve: function() {
        return User.find()
          .then(users => {
            return users.map(user => {
              return { ...user._doc, _id: user.id };
            });
          })
          .catch(err => {
            throw err;
          });
      }
    },

    // Get User By Id

    user: {
      type: UserType,
      args: GetUserById,
      resolve: function(parent, args) {
        return User.findById(args._id)
          .then(user => {
            return { ...user._doc, _id: user.id };
          })
          .catch(err => {
            throw err;
          });
      }
    }
  })
});

module.exports = RootQuery;
