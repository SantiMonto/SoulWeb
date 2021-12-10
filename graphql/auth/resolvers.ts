import { UserModel } from "../../modelos/usuario/user";
import bcrypt from "bcrypt";
import { generateToken } from "../../utils/tokenUtils";

const resolversAutenticacion = {
    Mutation: {
        registro: async (parent, args) => {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(args.password, salt);
            const usuarioCreado = await UserModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
                password: hashedPassword,
            });
            console.log('Usuario creado', usuarioCreado);
            return {
                token: generateToken({
                    _id: usuarioCreado._id,
                    nombre: usuarioCreado.nombre,
                    apellido: usuarioCreado.apellido,
                    identificacion: usuarioCreado.identificacion,
                    correo: usuarioCreado.correo,
                    rol: usuarioCreado.rol,
                }),
            };
        },
        login: async (parent, args) => {
            const usuarioLogueado = await UserModel.findOne({ correo: args.correo });
            if (await bcrypt.compare(args.password, usuarioLogueado.password)) {
                console.log(usuarioLogueado);
                return {
                    token: generateToken({
                        _id: usuarioLogueado._id,
                        nombre: usuarioLogueado.nombre,
                        apellido: usuarioLogueado.apellido,
                        identificacion: usuarioLogueado.identificacion,
                        correo: usuarioLogueado.correo,
                        rol: usuarioLogueado.rol,
                    }),
                }
            }
        },
        refreshToken: async (parent, args, context) => {
            if (!context.userData) {
                return {
                    error: 'Token no valido'
                }
            }
            else {
                return {
                    token: generateToken({
                        _id: context.userData._id,
                        nombre: context.userData.nombre,
                        apellido: context.userData.apellido,
                        identificacion: context.userData.identificacion,
                        correo: context.userData.correo,
                        rol: context.userData.rol,
                    }),
                }
            }
        }
    },
};

export { resolversAutenticacion };
