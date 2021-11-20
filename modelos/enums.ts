

enum Enum_Rol{
    estudiante = 'Estudiante',
    lider = 'Lider',
    administrador = 'Administristrador'
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

export {Enum_Rol,Enum_EstadoProyecto,Enum_FaseProyecto,Enum_TipoObjetivo};
