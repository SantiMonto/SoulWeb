import { gql } from 'apollo-server-express'

const typesProject = gql`

type Objetivo {
    _id: ID!
    descripcion: String!
    tipo: Enum_TipoObjetivo!
}

type Proyecto {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    lider: Usuario!
    objetivos: [Objetivo]
}

type Query {
    Proyectos: [Proyecto]
    Proyecto(_id: String!): Proyecto
}

`;

export { typesProject }