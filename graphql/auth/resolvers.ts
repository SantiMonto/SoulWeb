import { UserModel } from "../../modelos/usuario/user";
import bcrypt from "bcrypt";
import { generateToken } from "../../utils/tokenUtils";


const resolversAutenticacion = {
    Mutation: {
        registro: async (parent,args) =>{
            const salt = await bcrypt.gensalt(10);
            const hashedPassword = await bcrypt.hash(args.password, salt);
            const usuarioCreado = await UserModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
                password: hashedPassword,
            });
            console.log('Usuario creado');
            return {
                token: generateToken({
                    
                }),
            }
        }
    }
};

export {resolversAutenticacion};