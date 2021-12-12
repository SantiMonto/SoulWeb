import { ProjectModel } from "./project.js"

const resolversProject = {
    Query: {
        Proyectos: async (parent, args) => {
            const proyectos = await ProjectModel.find().populate('lider').populate('inscripciones')
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
                    estado: 'ACTIVO'
                },
                { new: true })
                return usuarioEditado
        },
        actEstadoProyecto: async (parent, args) => {
            const cambioEstado = await ProjectModel.findByIdAndUpdate(args._id,{
                estado: 'INACTIVO'
            },
            {new: true})
            return cambioEstado
        },
        actFaseProyecto: async (parent, args) => {
            const cambioFase = await ProjectModel.findByIdAndUpdate(args._id, {
                fase: 'TERMINADO'
            },
            {new:true})
            return cambioFase
        },
        crearProyecto: async (parent, args) => {
            const proyectoNuevo = await ProjectModel.create({
                nombre: args.nombre,
                presupuesto: args.presupuesto,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
                estado: args.estado,
                fase: args.fase,
                lider: args.lider,
                objetivos: args.objetivos
            });
            return proyectoNuevo;
        }
    }
}

export { resolversProject }