const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `
type Query{
    info: String!
}`;

const resolvers = {
  Query: {
    info: () => `This is hackernews clone.`
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});
server.start(() => console.log(`Hello World`));
