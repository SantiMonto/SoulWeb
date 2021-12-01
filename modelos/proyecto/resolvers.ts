import { ProjectModel } from "./project";
import { Enum_EstadoProyecto, Enum_FaseProyecto } from '../enums/enums'

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
        },
        actEstadoProyecto: async (parent, args) => {
            const cambioEstado = await ProjectModel.findByIdAndUpdate(args._id,{
                estado: Enum_EstadoProyecto.INACTIVO
            },
            {new: true})
            return cambioEstado
        },
        actFaseProyecto: async (parent, args) => {
            const cambioFase = await ProjectModel.findOneAndUpdate(args._id, {
                fase: Enum_FaseProyecto.TERMINADO
            },
            {new:true})
            return cambioFase
        }
    }
}

export { resolversProject }