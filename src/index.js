const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `
type Query{
    info: String!
    feed: [Link!]!
}

type Link{
    id: ID!
    url: String!
    description: String!
}`;

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
  typeDefs,
  resolvers
});
server.start(() => console.log(`Hello World`));
