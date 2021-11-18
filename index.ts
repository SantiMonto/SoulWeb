import conectarBD from "./db/db";
import {UserModel} from "./modelos/user";

const main = async () =>{
    await conectarBD();

    await UserModel.create({
        correo: "smonto@gmail.com",
        identificacion: "123456",
        nombre: "santiago",
        apellido: "montoya"
    }).then((u) => {
        console.log("Usuario creado",u)
    }).catch((e) => {
        console.error("Error creando el usuario",e);
    })
}

main();