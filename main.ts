import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Query } from "./resolvers/query/query.ts";
import { typeDefs } from "./gql/schema.ts";
import { Episode } from "./resolvers/query/Episode.ts";
import { Character } from "./resolvers/query/Character.ts";

// A map of functions which return data for the schema.
const resolvers = {
  Query,
  Character,
  Episode
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);