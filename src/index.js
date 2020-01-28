const { GraphQLServer } = require("graphql-yoga");

let links = [
  {
    id: "link-0",
    url: "https://osdc.netlify.com",
    description: "OSDC Website"
  }
];
const resolvers = {
  Query: {
    info: () => `This is hackernews clone.`,
    feed: () => links
  },
  Link: {
    id: parent => parent.id,
    url: parent => parent.url,
    description: parent => parent.description
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});
server.start(() => console.log(`Hello World`));
