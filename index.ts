import express, { application } from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import conectarBD from './db/db';
import { convertToObject } from 'typescript';
import { types } from './graphql/types'
import { resolversDefs } from './graphql/resolvers';
import { validateToken } from './utils/tokenUtils';

dotenv.config();

const getUserData = (token) => {
    const verificacion = validateToken(token.split(' ')[1]);
    if (verificacion.data) {
        return verificacion.data;
    }
    else {
        return null;
    }
};

const server = new ApolloServer({
    typeDefs: types,
    resolvers: resolversDefs,
    context: ({ req, res }) => {
        const token = req.headers?.authorization ?? null;
        if (token) {
            const userData = getUserData(token);
            if (userData) {
                return { userData }
            }
        }
        return null;
    }
});

const app = express();

app.use(express.json());

app.use(cors());

app.listen({ port: process.env.PORT || 4000 }, async () => {
    await conectarBD();
    await server.start();

    server.applyMiddleware({ app });
    console.log("Servidor listo")
});