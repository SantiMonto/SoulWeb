import { Enum_EstadoUsuario } from '../enums/enums'
import { Enum_Rol } from '../enums/enums'
import { UserModel } from './user'

const resolversUser = {
    Query: {
        Usuarios: async (parent, args) => {
            const usuarios = await UserModel.find()
            return usuarios
        },

        Usuario: async (parent, args) => {
            const usuario = await UserModel.findOne({ _id: args._id })
            return usuario
        },

        consultarEstudiantes: async (parent, args) => {
            const estudiantes = await UserModel.find({rol: Enum_Rol.ESTUDIANTE})
            return estudiantes
        }, 

        consultarProyectosLiderados: async (parent, args) => {
            const proyectosLiderados = await UserModel.find({ _id: args._id }).populate("proyectosLiderados")
            return proyectosLiderados
        }
    },

    Mutation: {
        crearUsuario: async (parent, args) => {
            const usuarioCreado = await UserModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
                password: args.password,
            })
            return usuarioCreado
        },

        editarUsuario: async (parent, args) => {
            const usuarioEditado = await UserModel.findByIdAndUpdate(
                args._id,
                {
                    nombre:args.nombre,
                    apellido:args.apellido,
                    identificacion: args.identificacion,
                    correo: args.correo,
                    estado: args.estado,
                },
                { new: true });
            return usuarioEditado
        },

        cambioEstadoUsuario: async (parent, args) => {
            const usuarioEditado = await UserModel.findByIdAndUpdate(
                args._id,
                {
                    estado: args.estado
                },
                { new: true })
            return usuarioEditado
        },

        cambioEstadoEstudiante: async (parent, args) => {
            const usuarioEditado = await UserModel.findByIdAndUpdate(
                args._id,
                {
                    estado: args.estado
                },
                { new: true })
            return usuarioEditado
        }
    }
}

export { resolversUser }