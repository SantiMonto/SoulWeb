import express, { application } from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import conectarBD from './db/db';
import { convertToObject } from 'typescript';
import {types} from './graphql/types'
import { resolversDefs } from './graphql/resolvers';

dotenv.config();

const server = new ApolloServer({
    typeDefs: types,
    resolvers: resolversDefs,
});

const app = express();

app.use(express.json());

app.use(cors());

app.listen({port: process.env.PORT || 4000}, async() =>{
    await conectarBD();
    await server.start();

    server.applyMiddleware({app});
    console.log("Servidor listo")
});