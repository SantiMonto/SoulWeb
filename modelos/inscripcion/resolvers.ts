import { InscripcionModel } from "./inscription";
import { Enum_EstadoInscripcion } from "../enums/enums";

const resolversInscripcion = {
    Query: {
        Inscripciones: async (parent, args) => {
            const inscripciones = await InscripcionModel.find();
            return inscripciones;
        }
    },

    Mutation: {
        crearInscripcion: async (parent, args) => {
            const nuevaInscripcion = await InscripcionModel.create({
                proyecto: args.Proyecto,
                estudiante: args.Usuario,
            })
            return nuevaInscripcion;
        }
    }
}

export { resolversInscripcion }