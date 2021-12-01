import { gql } from 'apollo-server-express'

const typesInscripcion = gql`

type Inscripcion {
    _id: ID!
    proyecto: Proyecto!
    estudiante: Usuario!
    estado: Enum_EstadoInscripcion
    fechaInicio: Date
    fechaFin: Date
}

type Query {
    Inscripciones: [Inscripcion]
}

type Mutation {
    crearInscripcion(
        proyecto: String!
        estudiante: String!
    ): Inscripcion
}

`;

export { typesInscripcion }