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
    proyectosLiderados: [Proyecto]
}

type Query {
    Usuarios: [Usuario]
    Usuario(_id: String!): Usuario
    consultarEstudiantes: [Usuario]
    consultarProyectosLiderados(_id: String!): [Usuario]
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
        nombre: String!
        apellido: String!
        identificacion: String!
        correo: String!
        rol: Enum_Rol
        estado: Enum_EstadoUsuario!
    ): Usuario

    cambioEstadoUsuario(
        _id: String!
        estado: Enum_EstadoUsuario!
    ): Usuario

    cambioEstadoEstudiante(
        _id: String!
        estado: Enum_EstadoUsuario!
    ): Usuario
}

`;

export { typesUser }