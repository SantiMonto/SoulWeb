import React from "react";

function Home() {
    return(
        <>
        <div class="content-wrapper d-flex justify-content-center">
            <section class="content">
                <div class="container-fluid">
                    <h1 className="text-center mt-2">Bienvenid@ a SoulWeb</h1>
                    <br/>
                    <p className="Paragraph_120 text-black">En esta plataforma conforme al rol que tenga asignado podra 
                    ver su informacion personal, los usuarios y sus distintos roles, los proyectos nuevos y actuales con
                    su respectiva información de estado, fase, avances y observaciones.               
                    </p>
                </div>
                <div className="Logo mb-3">
                    <img className="img-thumbnail border border-dark" src="TRender.png" alt="logo" />
                </div>
            </section>
        </div>
        </>
    )
}

export default Home;