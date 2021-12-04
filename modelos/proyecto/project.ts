import {Schema, model} from 'mongoose';
import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo } from '../enums/enums';
import { UserModel } from '../usuario/user';

interface Proyecto{
    nombre: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date;
    estado: Enum_EstadoProyecto;
    fase: Enum_FaseProyecto;
    lider: Schema.Types.ObjectId;
    objetivos: [{descripcion:string, tipo:Enum_TipoObjetivo}];
}

const projectSchema = new Schema<Proyecto>({
    nombre:{
        type: String,
        required: true,
    },
    presupuesto:{
        type: Number,
        required: true,
    },
    fechaInicio:{
        type: Date,
        required: true,
    },
    fechaFin:{
        type: Date,
        required: true,
    },
    estado:{
        type:String,
        enum: Enum_EstadoProyecto,
        default: Enum_EstadoProyecto.INACTIVO,
    },
    fase:{
        type: String,
        enum: Enum_FaseProyecto,
        default: Enum_FaseProyecto.NULO,
    },
    lider:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: UserModel,

    },
    objetivos:[
        {
            descripcion: {
                type: String,
                require: true,
            },
            tipo: {
                type: String,
                enum: Enum_TipoObjetivo,
                require: true,
            },
        },
    ]
},{
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }
);

const ProjectModel = model("Proyecto", projectSchema);

export {ProjectModel};