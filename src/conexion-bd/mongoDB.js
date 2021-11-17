const mongoose = require('mongoose');
const url = 'mongodb://localhost/SoulWeb'

mongoose.connect(url,{

})
.then(()=>console.log('Conectado a mongo'))
.catch((e)=> console.log('El error de conexion es: '+ e))


const personaSchema = mongoose.Schema({
    nombre: String,
    edad: Number,
    pais: String
});

const PersonaModel = mongoose.model('personas',personaSchema)

const mostrar = async ()=>{
    const personas = await PersonaModel.find()
    console.log(personas)
}

mostrar();