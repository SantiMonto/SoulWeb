import { gql } from "apollo-server-express";

const typesAutenticacion = gql`
    type Token: {
        token: String
        error: String
    }
    type Mutation {
        registro(
            nombre: String!
            apellido: String!
            identificacion: String!
            correo: String!
            rol: Enum_Rol!
            password: String!
        ): Token!
    }
`;

export { typesAutenticacion };