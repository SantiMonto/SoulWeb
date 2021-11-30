import { gql } from 'apollo-server-express'

const typesAvances = gql`

type Avances {
    id: ID!
    fecha: Date!
    descripcion: String!
    observaciones: [String]
    proyecto: Proyecto!
    creadoPor: Usuario!
}

`;

export { typesAvances }