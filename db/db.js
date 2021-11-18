import { connect } from 'mongoose';

export const conectarBD = async () =>{
    return await connect(
        'mongodb+srv://smonto:smonto123456@proyectociclo4.d8zw9.mongodb.net/GestionProyectos?retryWrites=true&w=majority'
    )
    .then(() => {
        console.log('Conexion exitosa')
    })
    .catch((e) => {
        console.error('Error conectando a la BD',e);
    })
}