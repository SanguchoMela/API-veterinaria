// Importar JWT y el Modelo
import jwt from 'jsonwebtoken'
import Veterinario from '../models/Veterinario.js'

// Método para proteger rutas
const verificarAutenticacion = async (req,res,next)=>{
    // Validar si se está enviando el token
    if(!req.headers.authorization) return res.status(404).json({msg:"Lo sentimos, debes proprocionar un token"})    
        // Desestructurar el token del headers
        const {authorization} = req.headers
        // Capturar errores
        try {
            // Verificar el token recuperado con el almacenado
            const {id,rol} = jwt.verify(authorization.split(' ')[1],process.env.JWT_SECRET)
            // Verificar el rol
            if (rol==="veterinario"){
                // Obtener el usuario
                req.veterinarioBDD = await Veterinario.findById(id).lean().select("-password")
                // Continuar el proceso
                next()
            }
        } catch (error) {
            // Capturar errores y presentarlos
            const e = new Error("Formato del token no válido")
            return res.status(404).json({msg:e.message})
        }
}

// Exportar el método
export default verificarAutenticacion