import { resolversUser } from '../modelos/usuario/resolvers.js'
import { resolversProject } from '../modelos/proyecto/resolvers.js'
import { resolversInscripcion } from '../modelos/inscripcion/resolvers.js'
import { resolversAvance } from '../modelos/avance/resolvers.js'
import { resolversAutenticacion } from './auth/resolvers.js'

export const resolvers = [
    resolversUser,
    resolversProject,
    resolversInscripcion, 
    resolversAvance,
    resolversAutenticacion
]