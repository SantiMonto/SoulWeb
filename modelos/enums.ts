enum Enum_Rol{
    ESTUDIANTE = 'Estudiante',
    LIDER = 'Lider',
    ADMINISTRADOR = 'Administrador'
}

enum Enum_EstadoUsuario{
    PENDIENTE = "PENDIENTE",
    AUTORIZADO = "AUTORIZADO",
    NO_AUTORIZADO= "NO AUTORIZADO",
}

enum Enum_EstadoProyecto{
    activo = "Activo",
    inactivo = "Inactivo"
}

enum Enum_FaseProyecto{
    iniciado = "Iniciado",
    desarrollado = "Desarrollado",
    terminado = "Terminado",
    nula = ""
}

enum Enum_TipoObjetivo{
    general ="General",
    especifico = "Especifico"
}
enum Enum_EstadoInscripcion{
    aceptada="Aceptada",
    rechazada="Rechazada"

}

export {Enum_Rol,Enum_EstadoProyecto,Enum_FaseProyecto,Enum_TipoObjetivo,Enum_EstadoInscripcion,Enum_EstadoUsuario};
