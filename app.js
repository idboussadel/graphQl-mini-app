import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import mongoose from "mongoose";
import { typeDefs } from "./graphQl/typeDefs.js";
import resolvers from "./graphQl/resolvers.js";
import "dotenv/config";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// MONGODB_URI="uri of your mongodb" in a .env file
// or just past it in a const and use it directly
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Database connection successful!");
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
