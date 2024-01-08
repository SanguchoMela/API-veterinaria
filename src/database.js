import mongoose from 'mongoose'

// Permitir que solo los campos definidos en el schema sean almacenados en la BDD
mongoose.set('strictQuery', true) 

// Crear una función llamada connection()
const connection = async()=>{
    try {
        //Establecer la conexión con la BDD
        const {connection} = await mongoose.connect(process.env.MONGODB_URI)
        // Presentar la conexión en consola
        console.log(`Database is connected on ${connection.host} - ${connection.port}`)
    } catch (error) {
        // Capturar Error en la conexión
        console.log(error);
    }
}

export default connection