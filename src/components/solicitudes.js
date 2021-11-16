import { Link } from 'react-router-dom'

function Solicitudes() {


    return (
        <>
            <div class="content-wrapper">
                <section class="content">
                    <div class="container-fluid">
                        <h1>Solicitudes pendientes</h1>
                        <br />

                        <hr />
                        <table id="TablaUsuarios" class="table table-striped">
                            <thead class="table-dark">
                                <tr>
                                    <th class="text-center">Indice</th>
                                    <th class="text-center">Nombre</th>
                                    <th className="text-center">Acción</th>


                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Solicitudes;