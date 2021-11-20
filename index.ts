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


    ProjectModel.create({
        nombre:"Proyecto 3",
        presupuesto: 8000000,
        fechaInicio: Date.now(),
        fechaFin: new Date("2022/07/19"),
        lider:"61971a6dfd00f05bec564674",
        objetivos:["619853d09f65d42ed06f6835","6198541ff750d67d362c02ae"],

    })
}

    


main();

//Abajo se encuentra el CRUD de usuario

// await UserModel.create({
    //     correo: "smonto@gmail.com",
    //     identificacion: "123456",
    //     nombre: "santiago",
    //     apellido: "montoya",
    //     rol: Enum_Rol.administrador
    // }).then((u) => {
    //     console.log("Usuario creado",u)
    // }).catch((e) => {
    //     console.error("Error creando el usuario",e);
    // })