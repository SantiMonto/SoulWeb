import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import "../style/formCursos.css"

function EditarCurso() {

    const history = useHistory();

    const {id} = useParams();

    const [Curso, setCurso] = useState("");
    const [Area, setArea] = useState("");
    const [Instructor, setInstructor] = useState("");
    const [Costo, setCosto] = useState("");
    const [Estado, setEstado] = useState("");

   
    return(
        <>
        <div className="content-wrapper">
            <section className="content">
                <div className="container">
                    <h1>Editar Curso</h1>
                    <hr />
                    <table id="editarCursos" className="table table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th className="text-center">Nombre del Curso</th>
                                <th className="text-center">Area</th>
                                <th className="text-center">Instructor</th>
                                <th className="text-center">Precio</th>
                                <th className="text-center">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td class="text-center">
                                <input className="form-control" type="text" value={Curso} onChange={e =>setCurso(e.target.value)}/>
                            </td>

                            <td class="text-center">
                                <select className="form-control" value={Area} onChange={e =>setArea(e.target.value)}>
                                    <option>OOP</option>
                                    <option>Móvil</option>
                                    <option>Web</option>
                                    <option>Desarrollo de Software</option>
                                </select>
                            </td>

                            <td class="text-center">
                                <input className="form-control" type="text" value={Instructor} onChange={e =>setInstructor(e.target.value)}/>
                            </td>

                            <td class="text-center">
                                <input className="form-control" type="text" value={Costo} onChange={e =>setCosto(e.target.value)}/>
                            </td>

                            <td class="text-center">
                                <select className="form-control" value={Estado} onChange={e =>setEstado(e.target.value)}>
                                    <option>Activo</option>
                                    <option>Cancelado</option>
                                </select>
                            </td>
                            </tr>
                        </tbody>
                        <tfoot className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button className="btn btn-success mt-2">Actualizar</button>
                            <button className="btn btn-danger mt-2">Cancelar</button>
                        </tfoot>
                    </table>
                </div>
            </section>
        </div>
        </>
    )
}

export default EditarCurso;