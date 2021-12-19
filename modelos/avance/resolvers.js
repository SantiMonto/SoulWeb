import { AvanceModel } from "./avances.js"

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
        anadirObservacion: async (parents, args) => {
            const observacion = await AvanceModel.findByIdAndUpdate(
                args._id, {
                $push: {observaciones: {texto: args.descripcion}}},
            { new: true });
            return observacion
        },
        modificarDescripcion: async (parents, args) => {
            const avance = await AvanceModel.findByIdAndUpdate(
                args._id, {
                    descripcion: args.descripcion
                },
                {new: true});
            return avance
        }
    },
}

export { resolversAvance }