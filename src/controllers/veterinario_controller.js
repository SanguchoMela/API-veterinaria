import Veterinario from "../models/Veterinario.js"

// Método para el login
const login =(req,res)=>{
    res.status(200).json({res:'login del veterinario'})
}

// Método para el registro
const perfil=(req,res)=>{
    res.status(200).json({res:'perfil del veterinario'})
}

// Método para el registro
const registro = async (req,res)=>{
    // Desestructurar los campos
    const {email,password} = req.body
    // Validar todos los campos llenos
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    // Obtener el usuario de la BDD en base al email
    const verificarEmailBDD = await Veterinario.findOne({email})
    // Validar que el email sea nuevo
    if(verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})
    // Crear la instancia del nuevo veterinario
    const nuevoVeterinario = new Veterinario(req.body)
    // Encriptar el password
    nuevoVeterinario.password = await nuevoVeterinario.encrypPassword(password)
    // Crear el token
    nuevoVeterinario.crearToken()
    // Guardar en BDD
    await nuevoVeterinario.save()
    // Responder 
    res.status(200).json({nuevoVeterinario})
}

// Método para 
const confirmEmail = (req,res)=>{
    res.status(200).json({res:'confirmar email de registro de veterinario'})
}

// Método para listar veterinarios
const listarVeterinarios = (req,res)=>{
    res.status(200).json({res:'lista de veterinarios registrados'})
}

// Método para mostrar el detalle de un veterinario en particular
const detalleVeterinario = (req,res)=>{
    res.status(200).json({res:'detalle de un veterinario registrado'})
}

// Método para actualizar un veterinario en particular
const actualizarPerfil = (req,res)=>{
    res.status(200).json({res:'actualizar perfil de un veterinario registrado'})
}

// Método para actualizar el password
const actualizarPassword = (req,res)=>{
    res.status(200).json({res:'actualizar password de un veterinario registrado'})
}
const recuperarPassword= (req,res)=>{
    res.status(200).json({res:'enviar mail recuperación'})
}
const comprobarTokenPasword= (req,res)=>{
    res.status(200).json({res:'verificar token mail'})
}
const nuevoPassword= (req,res)=>{
    res.status(200).json({res:'crear nuevo password'})
}

export {
    login,
    perfil,
    registro,
    confirmEmail,
    listarVeterinarios,
    detalleVeterinario,
    actualizarPerfil,
    actualizarPassword,
	recuperarPassword,
    comprobarTokenPasword,
	nuevoPassword
}