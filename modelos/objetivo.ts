import {Schema, model} from 'mongoose';
import { Enum_TipoObjetivo } from './enums';
import { ProjectModel } from './project';

interface Objetivo{
    descripcion:string;
    tipo:Enum_TipoObjetivo;
    //proyecto:Schema.Types.ObjectId;
}

const objetivoSchema = new Schema<Objetivo>({
    descripcion:{
        type:String,
        required:true,
    },
    tipo:{
        type:String,
        enum:Enum_TipoObjetivo,
        required:true,
    },
    // proyecto:{
    //     type:Schema.Types.ObjectId,
    //     ref: ProjectModel,
    // },
});

const ObjetivoModel = model("Objetivo", objetivoSchema)

export {ObjetivoModel};

