require('dotenv').config();
const dataSources = require('./datasources/index');
const mongoose = require('mongoose');
const PostModel = require("./models/PostModel");
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { createStore } = require('./utils');
const resolvers = require('./resolvers');
const uri = "mongodb+srv://admin_user:admin123@cluster0.qfjnr.mongodb.net/reactSocial?retryWrites=true&w=majority";

const store = createStore();
const startServer = async () => {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await server.listen({ port: 5000 }).catch(err => console.log(err));
  const db = mongoose.connection;
  db.once('open', () => console.log('DB connected'));
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    launchAPI: new dataSources.LaunchData(),
    userAPI: new dataSources.UserData({ store }),
    postAPI: new dataSources.PostData(PostModel),
  })
});

startServer();
