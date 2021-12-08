import { UserModel } from "../../modelos/usuario/user";


const resolversAutenticacion = {
    Mutation: {
        registro: async (parent,args) =>{
            const usuarioCreado = await UserModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
                password: args.password,
            });
            console.log('Usuario creado', usuarioCreado)
            return 'Usuario creado'
        },
    },
};

export {resolversAutenticacion};
