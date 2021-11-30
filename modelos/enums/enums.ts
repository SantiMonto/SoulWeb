enum Enum_Rol{
    ESTUDIANTE = "ESTUDIANTE",
    LIDER = "LIDER",
    ADMINISTRADOR = "ADMINISTRADOR"
}

enum Enum_EstadoUsuario{
    PENDIENTE = "PENDIENTE",
    AUTORIZADO = "AUTORIZADO",
    NO_AUTORIZADO= "NO AUTORIZADO",
}

enum Enum_EstadoProyecto{
    ACTIVO = "ACTIVO",
    INACTIVO = "INACTIVO"
}

enum Enum_FaseProyecto{
    INICIADO = "INICIADO",
    EN_DESARROLLO = "EN_DESARROLLO",
    TERMINAOD = "TERMINADO",
    NULO = "NULO"
}

enum Enum_TipoObjetivo{
    GENERAL = "GENERAL",
    ESPECIFICO = "ESPECIFICO"
}

enum Enum_EstadoInscripcion{
    ACEPTADA = "ACEPTADA",
    RECHAZADA = "RECHAZADA"
}

export {
    Enum_Rol,
    Enum_EstadoProyecto,
    Enum_FaseProyecto,
    Enum_TipoObjetivo,
    Enum_EstadoInscripcion,
    Enum_EstadoUsuario
};