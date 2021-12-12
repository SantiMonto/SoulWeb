import { InscripcionModel } from "./inscription.js"

const resolversInscripcion = {
    Query: {
        Inscripciones: async (parent, args) => {
            const inscripciones = await InscripcionModel.find();
            return inscripciones;
        },
        SolicitudesPendientes: async (parent, args) => {
            const solicitudes = await InscripcionModel.find({ estado: 'PENDIENTE' })
            return solicitudes

        }
    },

    Mutation: {
        crearInscripcion: async (parent, args) => {
            const nuevaInscripcion = await InscripcionModel.create({
                proyecto: args.Proyecto,
                estudiante: args.Usuario,
            })
            return nuevaInscripcion;
        },

        aprobarInscripcion: async (parent, args) => {
            const inscripcionAprobada = await InscripcionModel.findByIdAndUpdate(args.id, {
                estado: 'ACEPTADA',
                fechaIngreso: Date.now(),
            },
                { new: true }
            );
            return inscripcionAprobada;
        },
        rechazarInscripcion: async (parent, args) => {
            const inscripcionRechazada = await InscripcionModel.findByIdAndUpdate(args.id, {
                estado: 'RECHAZADA',
                fechaIngreso: Date.now(),
            },
                { new: true }
            );
            return inscripcionRechazada;
        },

    }
}

export { resolversInscripcion }