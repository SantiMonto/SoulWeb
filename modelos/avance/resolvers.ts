import { AvanceModel } from "./avances"

const resolversAvance = {
    Query: {
        Avances: async (parent, args) => {
            const avances = await AvanceModel.find().populate('proyecto').populate('creadoPor');
            return avances;
        },
        filtrarAvance: async (parents, args) => {
            const avanceFiltrado = await AvanceModel.find({ proyecto: args._id })
                .populate('proyecto')
                .populate('creadoPor');
            return avanceFiltrado;
        },
    },
    Mutation: {
        crearAvance: async (parents, args) => {
            const avanceCreado = AvanceModel.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
            });
            return avanceCreado;
        },
        modificarAvance: async (parents, args) => {
            const avanceModificado = AvanceModel.findByIdAndUpdate(
                args._id, {
                fecha: args.fecha,
                descripcion: args.descripcion,
            },
            { new: true });
            return avanceModificado;
        },
    },
}

export { resolversAvance }