import conectarBD from "./db/db";
import {UserModel} from "./modelos/usuario/user";
import { Enum_Rol, Enum_TipoObjetivo } from "./modelos/enums/enums";
import { ProjectModel } from "./modelos/proyecto/project";
import { ObjetivoModel } from "./modelos/objetivo/objetivo";
import { AvanceModel} from "./modelos/avance/avances"

const main = async () =>{
    await conectarBD();

    //CREAR UN NUEVO DOCUMENTO
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

    //OBTENER TODOS LOS DOCUMENTOS DE UNA COLECCIÓN
    // await UserModel.find()
    //     .then((u) => {
    //         console.log("Usuarios", u)
    //     })
    //     .catch((e) => {
    //         console.error("Error consultando los usuarios", e);
    // });

    //OBTENER UN SOLO DOCUMENTO BASADO EN UN FILTRO
    // await UserModel.findOne({identificacion: '123456'})
    //     .then((u) => {
    //         console.log("Usuario",u)
    //     })
    //     .catch((e) => {
    //         console.error("Error consultando el usuario",e);
    // });

    //ACTUALIZAR UN DOCUMENTO
    // await UserModel.findOneAndUpdate({correo: 'paco@gmail.com'},{
    //     nombre: "Lucho",
    //     }).then((u) => {
    //         console.log("Usuario modificado",u)
    //     })
    //     .catch((e) => {
    //         console.error("Error actualizando el usuario",e);
    // });

    //ELIMINAR UN DOCUMENTO
    // await UserModel.findOneAndDelete({correo: 'paco@gmail.com'})
    //     .then((u) => {
    //         console.log("Usuario eliminado",u)
    //     })
    //     .catch((e) => {
    //         console.error("Error eliminando el usuario",e);
    // });

    //CREAR UN PROYECTO EMPLEANDO UNA RELACIÓN ENTRE DOS SCHEMAS
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

    //ENCONTRAR UN PROYECTO Y POPULAR EL CAMPO LIDER (OBJECT ID)
    // await ProjectModel.findOne({nombre: "Proyecto 2"}).populate('lider')
    //     .then((u) => {
    //         console.log("Proyecto",u);
    //     })
    //     .catch((e) => {
    //         console.error("Error consultando el proyecto",e);
    // });

    //CREAR UN PROYECTO TENIENDO LOS OBJETIVOS COMO UN ARRAY DENTRO DEL DOCUMENTO
    // ProjectModel.create({
    //     nombre:"Proyecto 3",
    //     presupuesto: 8000000,
    //     fechaInicio: Date.now(),
    //     fechaFin: new Date("2022/07/19"),
    //     lider:"61971a6dfd00f05bec564674",
    //     objetivos:[{descripcion:"Crear una aplicación de gestión de proyectos", tipo:Enum_TipoObjetivo.general},
    //                {descripcion:"Utilizar stack MERN", tipo:Enum_TipoObjetivo.especifico}]
    // })

    //QUERY PARA IMPRIMIR LOS OBJETIVOS CONTENIDOS EN UN ARRAY
    // const Objetivos = await ProjectModel.findOne({nombre: "Proyecto 3"}).select('-_id objetivos')
    // for (var i = 0; i < Objetivos.objetivos.length; i++) {
    //     console.log(Objetivos.objetivos[i])
    // }

    //AÑADIR UN OBJETIVO AL ARRAY DEL DOCUMENTO
    // await ProjectModel.updateOne({nombre: "Proyecto 3"}, {$push: {objetivos: {descripcion:"Utilizar Express", tipo:Enum_TipoObjetivo.especifico}}})
    //     .then((u) => {
    //         console.log("Proyecto",u);
    //     })
    //     .catch((e) => {
    //         console.error("Error consultando el proyecto",e);
    // });

    //ELIMINAR UN OBJETIVO DEL ARRAY DEL DOCUMENTO
    // await ProjectModel.updateOne({nombre: "Proyecto 3"}, {$pull: {objetivos: {descripcion:"Utilizar Express", tipo:Enum_TipoObjetivo.especifico}}})
    //     .then((u) => {
    //         console.log("Proyecto",u);
    //     })
    //     .catch((e) => {
    //         console.error("Error consultando el proyecto",e);
    // });
}

main();