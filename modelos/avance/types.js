import { gql } from 'apollo-server-express'

const typesAvances = gql`
type Observacion{
  _id: ID!
  texto: String!
}
type Avance {
    _id: ID!
    fecha: Date!
    descripcion: String!
    observaciones: [Observacion]
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
    anadirObservacion(_id: String!, descripcion: String!): Avance
    modificarDescripcion(_id: String!, descripcion: String!): Avance
  }

`;

export { typesAvances }
