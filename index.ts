import conectarBD from "./db/db";
import {UserModel} from "./modelos/user";
import { Enum_Rol } from "./modelos/enums";
import { ProjectModel } from "./modelos/project";

const main = async () =>{
    await conectarBD();

    ProjectModel.create({
        nombre:"Proyecto 1",
        presupuesto: 8000000,
        fechaInicio: Date.now(),
        fechaFin: new Date("2022/07/19"),
        lider:"61971a6dfd00f05bec564674",

    })

    
};

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