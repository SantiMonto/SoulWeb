import { UserModel } from "../modelos/user";

const resolvers = {
    Query: {
        Usuarios: async (parent, args) => {
            const usuarios = await UserModel.find();
            return usuarios;
        },
    },
    Mutation: {
        crearUsuario: async (parent, args) => {
            console.log('Estoy ejecutando la mutacion de crearUsuario')
        }
    }
};

export { resolvers };