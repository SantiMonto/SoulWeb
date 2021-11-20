import conectarBD from "./db/db";
import {UserModel} from "./modelos/user";
import { Enum_Rol, Enum_TipoObjetivo } from "./modelos/enums";
import { ProjectModel } from "./modelos/project";
import { ObjetivoModel } from "./modelos/objetivo";
import { AvanceModel} from "./modelos/avances"

const main = async () =>{
    await conectarBD();

    // await UserModel.create({
    //     correo: "paco@gmail.com",
    //     identificacion: "5468874",
    //     nombre: "Luis",
    //     apellido: "Botero",
    //     rol: Enum_Rol.administrador
    // }).then((u) => {
    //     console.log("Usuario creado",u)
    // }).catch((e) => {
    //     console.error("Error creando el usuario",e);
    // })

    //Obtener todos los documentos
    // await UserModel.find()
    //     .then((u) => {
    //         console.log("Usuarios", u)
    //     })
    //     .catch((e) => {
    //         console.error("Error consultando los usuarios", e);
    // });

    //Obtener un documento basado en un filtro
    // await UserModel.findOne({identificacion: '123456'})
    //     .then((u) => {
    //         console.log("Usuario",u)
    //     })
    //     .catch((e) => {
    //         console.error("Error consultando el usuario",e);
    // });

    //Actualizar un documento
    // await UserModel.findOneAndUpdate({correo: 'paco@gmail.com'},{
    //     nombre: "Lucho",
    //     }).then((u) => {
    //         console.log("Usuario modificado",u)
    //     })
    //     .catch((e) => {
    //         console.error("Error actualizando el usuario",e);
    // });

    //Eliminar un documento
    // await UserModel.findOneAndDelete({correo: 'paco@gmail.com'})
    //     .then((u) => {
    //         console.log("Usuario eliminado",u)
    //     })
    //     .catch((e) => {
    //         console.error("Error eliminando el usuario",e);
    // });

    // const objective1 = await ObjetivoModel.create({
    //     descripcion: "Crear una aplicación de gestión de proyectos",
    //     tipo: Enum_TipoObjetivo.general,
    // });

    // const objective2 = await ObjetivoModel.create({
    //     descripcion: "Utilizar stack MERN",
    //     tipo: Enum_TipoObjetivo.especifico,
    // });

    // ProjectModel.create({
    //     nombre:"Proyecto 2",
    //     presupuesto: 8000000,
    //     fechaInicio: Date.now(),
    //     fechaFin: new Date("2022/07/19"),
    //     lider:"61971a6dfd00f05bec564674",
    //     objetivos:[objective1._id, objective2._id]
    // })

    // await ProjectModel.findOne({nombre: "Proyecto 2"}).populate('lider')
    //     .then((u) => {
    //         console.log("Proyecto",u);
    //     })
    //     .catch((e) => {
    //         console.error("Error consultando el proyecto",e);
    // });

    // ProjectModel.create({
    //     nombre:"Proyecto 3",
    //     presupuesto: 8000000,
    //     fechaInicio: Date.now(),
    //     fechaFin: new Date("2022/07/19"),
    //     lider:"61971a6dfd00f05bec564674",
    //     objetivos:[{descripcion:"Crear una aplicación de gestión de proyectos", tipo:Enum_TipoObjetivo.general},
    //                {descripcion:"Utilizar stack MERN", tipo:Enum_TipoObjetivo.especifico}]
    // })

    // const Objetivos = await ProjectModel.find({nombre: "Proyecto 3"}, 'objetivos')
    // console.log(Objetivos[0])
}

main();