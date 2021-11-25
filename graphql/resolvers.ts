import { UserModel } from "../modelos/user";

const resolvers = {
    Query: {
        Usuarios: async (parent, args) => {
            const usuarios = await UserModel.find();
            return usuarios;
        },
        Usuario: async (parent,args) =>{
            const usuario = await UserModel.findOne({_id:args.id});
            return usuario;
        }
    },
    Mutation: {
        crearUsuario: async (parent, args) => {
            const usuarioCreado = await UserModel.create ({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol
            });
            if (Object.keys(args).includes("estado")){
                usuarioCreado.estado = args.estado;
            }
            return usuarioCreado;
            console.log('Estoy ejecutando la mutacion de crearUsuario')
        },

        editarUsuario: async (parent, args) =>{
            const usuarioEditado = await UserModel.findByIdAndUpdate(args._id,{
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
                estado: args.estado
            });
            return usuarioEditado;
        },

        eliminarUsuario: async (parent, args) => {
            if (Object.keys(args).includes("_id")){
            const usuarioEliminado = await UserModel.findOneAndDelete({_id:args._id});
            return usuarioEliminado;
            }
            if (Object.keys(args).includes("correo")){
                const usuarioEliminado = await UserModel.findOneAndDelete({_id:args.correo});
            return usuarioEliminado;
            }
        }
    }
};

export { resolvers };