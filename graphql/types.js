import { gql } from 'apollo-server-express'
import { typesEnum } from '../modelos/enums/types.js'
import { typesUser } from '../modelos/usuario/types.js'
import { typesProject } from '../modelos/proyecto/types.js'
import { typesInscripcion } from '../modelos/inscripcion/types.js'
import { typesAvances } from '../modelos/avance/types.js'
import { typesAutenticacion } from './auth/types.js'

const globalTypes = gql`
  scalar Date
`;

export const tipos = [
    globalTypes,
    typesEnum,
    typesUser,
    typesProject,
    typesInscripcion,
    typesAvances,
    typesAutenticacion
]
