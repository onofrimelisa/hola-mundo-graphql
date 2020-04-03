const express = require('express');
const compression = require('compression');
const cors = require('cors');
import schema from './schema/index';
import {ApolloServer} from 'apollo-server-express';
import { createServer } from 'http';

const app = express();

app.use('*', cors());

app.use(compression());

const server = new ApolloServer({
    schema, 
    introspection: true
});

server.applyMiddleware({ app });

// app.use('/', grapQLHTTP({
//     schema,
//     graphiql: true,
// }));

const PORT = 5300;
const httpServer = createServer(app);

httpServer.listen({
    port: PORT
}, ()=>{
    console.log(`Hola Mundo GraphQL http://localhost:${ PORT }/graphql`);
    
});