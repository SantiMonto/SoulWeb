import React, {useState, useEffect} from "react";
import {Link } from 'react-router-dom'

function Usuarios() {

   
    return (
        <>
            <div class="content-wrapper">
                <section class="content">
                    <div class="container-fluid">
                        <h1>Gestor de Usuarios y Roles</h1>
                        <hr/>
                        <table id="TablaUsuarios" class="table table-striped">
                            <thead class="table-dark">
                                <tr>
                                    <th class="text-center">Indice</th>
                                    <th class="text-center">Nombre</th>
                                    <th class="text-center">Correo</th>
                                    <th class="text-center">Rol</th>
                                    <th class="text-center">Estado</th>
                                    <th class="text-center">Accion</th>
                                </tr>
                            </thead>
                            <tbody>
                                        <tr>
                                        <th class="text-center">1</th>
                                        <td class="text-center">nombre</td>
                                        <td class="text-center">correo</td>
                                        <td class="text-center">rol</td>
                                        <td class="text-center">estado</td>
                                        <td class="text-center">
                                            {/* <Link class="btn btn-sm" 
                                            ><i class="fas fa-eye"></i>
                                            </Link> */}
                                            <Link class="btn btn-sm"
                                            to={`/usuarios/$}`}
                                            ><i class="fas fa-edit"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Usuarios;