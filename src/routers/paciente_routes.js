import {Router} from 'express'
const router = Router()

import {
    actualizarPaciente,
    detallePaciente,
    eliminarPaciente,
    listarPacientes,
    registrarPaciente,
    loginPaciente,
    perfilPaciente 
} from "../controllers/paciente_controller.js";

import verificarAutenticacion from "../middlewares/autenticacion.js";

// Ruta para el proceso de login
router.post('/paciente/login',loginPaciente)

// TUra para ver el detalle de un paciente en particular
router.get('/paciente/perfil', verificarAutenticacion, perfilPaciente)

// Ruta para listar todos los pacientes
router.get('/pacientes', verificarAutenticacion, listarPacientes)

// Ruta para ver el detalle de un paciente en particular
router.get('/paciente/:id', verificarAutenticacion, detallePaciente)

// Ruta para registrar un paciente
router.post('/paciente/registro', verificarAutenticacion, registrarPaciente)

// Ruta para actualizar un paciente
router.put('/paciente/actualizar/:id', verificarAutenticacion, actualizarPaciente)

// Ruta para eliminiar (dar de baja) un paciente
router.delete('/paciente/eliminar/:id', verificarAutenticacion, eliminarPaciente)

export default router