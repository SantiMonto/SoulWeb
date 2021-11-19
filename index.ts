import conectarBD from "./db/db";
import {UserModel} from "./modelos/user";
import { Enum_Rol } from "./modelos/enums";

const main = async () =>{
    await conectarBD();

    await UserModel.create({
        correo: "smonto@gmail.com",
        identificacion: "123456",
        nombre: "santiago",
        apellido: "montoya",
        rol: Enum_Rol.administrador
    }).then((u) => {
        console.log("Usuario creado",u)
    }).catch((e) => {
        console.error("Error creando el usuario",e);
    })
}

main();