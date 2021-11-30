import { ProjectModel } from "./project";
import { Enum_EstadoProyecto } from '../enums/enums'

const resolversProject = {
    Query: {
        Proyectos: async (parent, args) => {
            const proyectos = await ProjectModel.find().populate('lider')
            return proyectos
        },

        Proyecto: async (parent, args) => {
            const proyecto = await ProjectModel.findOne({ _id: args._id })
            return proyecto
        }
    },

    Mutation: {
        cambiarEstadoProyecto: async (parent, args) => {
            const usuarioEditado = await ProjectModel.findByIdAndUpdate(
                args._id,
                {
                    estado: Enum_EstadoProyecto.ACTIVO
                },
                { new: true })
                return usuarioEditado
        }
    }
}

export { resolversProject }