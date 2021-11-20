import conectarBD from "./db/db";
import {UserModel} from "./modelos/user";
import { Enum_Rol, Enum_TipoObjetivo } from "./modelos/enums";
import { ProjectModel } from "./modelos/project";
import { ObjetivoModel } from "./modelos/objetivo";

const main = async () =>{
    await conectarBD();

    // const object = await ObjetivoModel.create({
    //     descripcion: "Esto es el objetivo especifico",
    //     tipo: Enum_TipoObjetivo.especifico,
    // });


//     ProjectModel.create({
//         nombre:"Proyecto 3",
//         presupuesto: 8000000,
//         fechaInicio: Date.now(),
//         fechaFin: new Date("2022/07/19"),
//         lider:"61971a6dfd00f05bec564674",
//         objetivos:["619853d09f65d42ed06f6835","6198541ff750d67d362c02ae"],

//     })
// }
}

//Abajo se encuentra el CRUD de usuario

// await UserModel.create({
//         correo: "gmontoya@gmail.com",
//         identificacion: "456",
//         nombre: "Guillermo",
//         apellido: "montoya",
//         rol: Enum_Rol.administrador
//     }).then((u) => {
//         console.log("Usuario creado",u)
//     }).catch((e) => {
//         console.error("Error creando el usuario",e);
//     })


// OBTENER LOS USUARIOS
// await UserModel.find()
//   .then((u) => {
//     console.log('usuarios', u);
//   })
//   .catch((e) => {
//     console.error('error obteniendo los usuarios', e);
//   });

// OBTENER UN SOLO USUARIO
// await UserModel.findOne({ identificacion: '16546' })
//   .then((u) => {
//     console.log('usuario encontrado', u);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

// EDITAR UN USUARIO
// await UserModel.findOneAndUpdate(
//   { correo: 'dsl@cc.com' },
//   {
//     nombre: 'Juan',
//     apellido: 'López',
//   }
// )
//   .then((u) => {
//     console.log('usuario actualizado', u);
//   })
//   .catch((e) => {
//     console.error('Error actualizando', e);
//   });

// ELIMINAR UN USUARIO
// await UserModel.findOneAndDelete({ correo: 'dsl@cc.com' })
//   .then((u) => {
//     console.log('usuario eliminado: ', u);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

main();