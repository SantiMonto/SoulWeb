import { gql } from 'apollo-server-express';
import { typesEnum } from '../modelos/enums/types'
import { typesUser } from '../modelos/usuario/types'

export const types = [
    typesEnum,
    typesUser
]