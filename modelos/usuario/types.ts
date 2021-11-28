import { gql } from 'apollo-server-express'

const typesUser = gql`

type Usuario{
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    rol: Enum_Rol!
    estado: Enum_EstadoUsuario
    password: String!
}

type Query {
    Usuarios: [Usuario]
    Usuario(_id: String!): Usuario
}

type Mutation {
    crearUsuario(
        nombre: String!
        apellido: String!
        identificacion: String!
        correo: String!
        rol: Enum_Rol!
        password: String!
    ): Usuario

    editarUsuario(
        _id: String!
        correo: String!
        password: String!
    ): Usuario

    cambioEstadoUsuario(
        _id: String!
        estado: Enum_EstadoUsuario
    ): Usuario
}

`;

export { typesUser }