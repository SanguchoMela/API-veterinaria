import {Router} from 'express'
const router = Router()

import {
    detalleTratamiento,
    registrarTratamiento,
    actualizarTratamiento,
    eliminarTratamiento,
    cambiarEstado
} from "../controllers/tratamiento_controller.js"

import verificarAutenticacion from "../middlewares/autenticacion.js"

// router.post('/tratamiento/registro',verificarAutenticacion,registrarTratamiento)
// router
//     .route('/tratamiento/:id')
//     .get(verificarAutenticacion,detalleTratamiento)
//     .put(verificarAutenticacion,actualizarTratamiento)
//     .delete(verificarAutenticacion,eliminarTratamiento)

// router.put('/tratamiento/estado/:id',verificarAutenticacion,cambiarEstado)

// Ruta para crear el tratamiento
router.post('/tratamiento/registro',verificarAutenticacion,registrarTratamiento)

// Ruta para ver el detalle del tratamiento
router.get('/tratamiento/:id',verificarAutenticacion,detalleTratamiento)

// Ruta para actualizar el tratamiento
router.put('/tratamiento/:id',verificarAutenticacion,actualizarTratamiento)

// Ruta para eliminar el tratamiento
router.delete('/tratamiento/:id',verificarAutenticacion,eliminarTratamiento)

// Ruta para cambiar el estado de los tratamientos
router.post('/tratamiento/estado/:id',verificarAutenticacion,cambiarEstado)


export default router