import { gql } from 'apollo-server-express'

const typesInscripcion = gql`

type Inscripcion {
    id: ID!
    proyecto: Proyecto!
    estudiante: Usuario!
    estado: Enum_EstadoInscripcion!
    fechaInicio: Date!
    fechaFin: Date!
}

`;

export { typesInscripcion }