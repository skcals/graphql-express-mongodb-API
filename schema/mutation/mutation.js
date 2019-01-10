const { GraphQLObjectType } = require("graphql");

const {
  UserType,
  UserInputArgs,
  UpdateUserInputArgs,
  GetUserById
} = require("../type");
const User = require("../../models/user");

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: () => ({
    // Create User
    createUser: {
      type: UserType,
      args: UserInputArgs,
      resolve: function(parent, args) {
        const userData = {
          name: args.name,
          username: args.username,
          email: args.email,
          age: args.age,
          city: args.city
        };
        const user = new User(userData);
        return user
          .save()
          .then(result => {
            return result;
          })
          .catch(err => {
            throw err;
          });
      }
    },

    // Edit User

    updateUser: {
      type: UserType,
      args: UpdateUserInputArgs,
      resolve: function(parent, args) {
        return User.findByIdAndUpdate(args._id, args)
          .then(result => {
            return result;
          })
          .catch(err => {
            throw err;
          });
      }
    },

    // Delete User

    deleteUser: {
      type: UserType,
      args: GetUserById,
      resolve: function(parent, args) {
        const userId = args._id;
        return User.findByIdAndDelete(userId)
          .then(result => {
            return result;
          })
          .catch(err => {
            throw err;
          });
      }
    }
  })
});

module.exports = RootMutation;
