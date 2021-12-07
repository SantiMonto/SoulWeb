import {Schema, model} from 'mongoose';
import { Enum_Rol, Enum_EstadoUsuario } from '../enums/enums';

interface User{
    correo: string;
    identificacion: string;
    nombre: string;
    apellido: string;
    rol: Enum_Rol;
    estado: Enum_EstadoUsuario;
    password: string;
}

const userSchema = new Schema <User>({
    correo:{
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (email) =>{
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message: 'El formato del correo electrónico es inválido',
        }
    },
    password: {
        type: String,
        required: true,
    },
    identificacion:{
        type: String,
        required: true,
        unique: true
    },
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true,
        enum: Enum_Rol
    },
    estado:{
        type: String,
        enum: Enum_EstadoUsuario,
        default: Enum_EstadoUsuario.PENDIENTE
    },
    password: {
        type: String,
        required: true,
    },
},
  {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }
)

userSchema.virtual('proyectosLiderados', {
    ref: 'Proyecto',
    localField: '_id',
    foreignField: 'lider',
});

const UserModel = model('User', userSchema);

export {UserModel};