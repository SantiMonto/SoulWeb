import {Schema, model} from 'mongoose';
import { Enum_EstadoInscripcion } from '../enums/enums';
import { ProjectModel } from '../proyecto/project';
import { UserModel } from '../usuario/user';

interface Inscripcion{
    proyecto: Schema.Types.ObjectId;
    estudiante: Schema.Types.ObjectId;
    estado: Enum_EstadoInscripcion;
    fechaInicio: Date;
    fechaFin: Date;
}

const inscripcionSchema = new Schema<Inscripcion>({
    proyecto:{
        type: Schema.Types.ObjectId,
        ref: ProjectModel,        
    },
    estudiante:{
        type: Schema.Types.ObjectId,
        ref: UserModel,
    },
    estado:{
        type: String,
        enum: Enum_EstadoInscripcion,
        required: false,
        default: Enum_EstadoInscripcion.PENDIENTE
    },
    fechaInicio:{
        type: Date,
        required: false,
    },
    fechaFin:{
        type: Date,
        required: false,
    },
});

const InscripcionModel = model("Inscripcion", inscripcionSchema)

export { InscripcionModel }
