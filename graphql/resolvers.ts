import { resolversUser } from '../modelos/usuario/resolvers'
import { resolversProject } from '../modelos/proyecto/resolvers'
import { resolversInscripcion } from '../modelos/inscripcion/resolvers'
import { resolversAvance } from '../modelos/avance/resolvers'

export const resolversDefs = [
    resolversUser,
    resolversProject,
    resolversInscripcion, 
    resolversAvance
]