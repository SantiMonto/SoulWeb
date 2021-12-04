import { gql } from "apollo-server-express";

const typesAutenticacion = gql`
    type Mutation {
        registro(
            nombre: String!
            apellido: String!
            identificacion: String!
            correo: String!
            rol: Enum_Rol!
            password: String!
        ): String!
    }
`;

export { typesAutenticacion };