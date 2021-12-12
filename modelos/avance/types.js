import { gql } from 'apollo-server-express'

const typesAvances = gql`

type Avance {
    id: ID!
    fecha: Date!
    descripcion: String!
    observaciones: [String]
    proyecto: Proyecto!
    creadoPor: Usuario!
}
type Query {
    Avances: [Avance]
    filtrarAvance(_id: String!): [Avance]
  }
  type Mutation {
    crearAvance(fecha: Date!, descripcion: String!, proyecto: String!, creadoPor: String!): Avance
    modificarAvance(_id: String!, fecha: Date!, descripcion: String!): Avance
  }

`;

export { typesAvances }
