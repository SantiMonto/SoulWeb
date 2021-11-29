import { ProjectModel } from "./project";

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
    }
}

export { resolversProject }