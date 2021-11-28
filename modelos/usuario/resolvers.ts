import { UserModel } from './user'

const resolversUser = {
    Query: {
        Usuarios: async (parent, args) => {
        const usuarios = await UserModel.find()
        return usuarios
        },
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
                correo: args.correo,
                password: args.password,
              },
              { new: true });
              return usuarioEditado
        }
    }
}

export { resolversUser }