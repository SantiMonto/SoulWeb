import { gql } from 'apollo-server-express';
import { typesEnum } from '../modelos/enums/types'
import { typesUser } from '../modelos/usuario/types'
import { typesProject } from '../modelos/proyecto/types';
import { typesInscripcion } from '../modelos/inscripcion/types';
import { typesAvances } from '../modelos/avance/types';

const globalTypes = gql`
  scalar Date
`;

export const types = [
    globalTypes,
    typesEnum,
    typesUser,
    typesProject,
    typesInscripcion,
    typesAvances
]