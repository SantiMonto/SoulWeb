import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { consultarDocumentoDatabase, actualizarDocumentoDatabase } from '../conexion-bd/funciones';


function editarUsuario() {

    return (
        <>
            <div class="content-wrapper">
                <section class="content">
                    <div class="container">
                        <h1>Editar Usuario</h1>
                        <hr />
                        <table id="editarUsuarios" class="table table-striped">
                            <thead class="table-dark">
                                <tr>
                                    <th class="text-center">Nombre</th>
                                    <th class="text-center">Rol</th>
                                    <th class="text-center">Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-center">nombre</td>
                                    <td class="text-center">
                                        <select
                                            type="text" placeholder="Rol"
                                        >
                                            <option>Seleccionar</option>
                                            <option>Administrador</option>
                                            <option>Estudiante</option>
                                            <option>Vendedor</option>
                                        </select>
                                    </td>
                                    <td class="text-center">
                                        <select
                                            type="text" placeholder="Estado"
                                        >
                                            <option>Seleccionar</option>
                                            <option>Activo</option>
                                            <option>Inactivo</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button
                                    class="btn btn-success mt-2"
                                >
                                    Actualizar
                                </button>
                                <button
                                    class="btn btn-outline-danger mt-2"
                                >
                                    Cancelar
                                </button>
                            </tfoot>
                        </table>
                    </div>
                </section>

            </div>
        </>
    )
}
export default editarUsuario;