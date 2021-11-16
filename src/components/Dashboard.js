import React from 'react';
import { Link, withRouter } from "react-router-dom"



function Dashboard() {


    return (
        <>

            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav ml-auto">
                            <Link className="nav-item" to="/login">
                                <button type="button" className="btn btn-dark">
                                    <i class="fas fa-sign-in-alt"></i> LogIn
                                </button>
                            </Link>

                            <Link className="nav-item" to="/login">
                                <button type="button" className="btn btn-danger">LogOut</button>
                            </Link>
                </ul>
            </nav>

            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <Link className="brand-link" to="/home">
                    <img src="TRender.png" className="brand-image img-circle elevation-3" />
                    <span className="brand-text font-weight-light">Soul Web</span>
                </Link>

                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image"><img src="User1.jpg" className="img-circle elevation-2" alt="User Image" /></div>
                        <div className="info">
                            <label className="text-black">USUARIO LOGUEADO</label>
                        </div>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" />
                    <li className='nav-item'>
                        <Link className="nav-link" to="/proyectos">
                            <i className='nav-icon fas fa-chart-pie'></i>
                            <p>Proyectos<i className="right fas fa-angle-right"></i></p>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link" to="/Ventas">
                            <i className='nav-icon fas fa-tree'></i>
                            <p>Venta de Cursos<i className="right fas fa-angle-right"></i></p>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link" to="/usuarios">
                            <i className='nav-icon fas fa-edit'></i>
                            <p>Usuarios<i className="right fas fa-angle-right"></i></p>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link" to="/Solicitudes">
                            <i className='nav-icon fas fa-table'></i>
                            <p>Solicitudes<i className="right fas fa-angle-right"></i></p>
                        </Link>
                    </li>

                    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                        <ul className="navbar-nav ml-auto">
                                    <Link className="nav-item" to="/login">
                                        <button type="button" className="btn btn-dark">
                                            <i class="fas fa-sign-in-alt"></i> LogIn
                                        </button>
                                    </Link>)
                                    :
                                    (<Link className="nav-item" to="/login">
                                        <button type="button" className="btn btn-danger"
                                        >LogOut
                                        </button>
                                    </Link>)

                        </ul>
                    </nav>
                </nav>
            </aside>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <Link className="brand-link" to="/home">
                    <img src="TRender.png" className="brand-image img-circle elevation-3" />
                    <span className="brand-text font-weight-light">SoulWeb</span>
                </Link>
                    <div className="sidebar">
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image"><img src="User1.jpg" className="img-circle elevation-2" alt="User Image" /></div>
                            <div className="info">
                                <label className="text-white">Informacion Usuario</label>
                            </div>
                        </div>
                    </div>
                        {/* <div className="sidebar">
                            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                                <div className="image"><img src="User1.jpg" className="img-circle elevation-2" alt="User Image" /></div>
                                <div className="info">
                                    <label className="text-white">Nombre Usuario</label>
                                </div>
                            </div>
                        </div> */}
                <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                <li className='nav-item'>
                                    <Link className="nav-link" to="/proyectos">
                                        <i className='nav-icon fas fa-chart-pie'></i>
                                        <p>Proyectos<i className="right fas fa-angle-right"></i></p>
                                    </Link>
                                </li>

                                <li className='nav-item'>
                                    <Link className="nav-link" to="/estudiantes">
                                        <i className='nav-icon fas fa-user-graduate'></i>
                                        <p>Estudiantes<i className="right fas fa-angle-right"></i></p>
                                    </Link>
                                </li>

                                <li className='nav-item'>
                                    <Link className="nav-link" to="/usuarios">
                                        <i className='nav-icon fas fa-user'></i>
                                        <p>Usuarios<i className="right fas fa-angle-right"></i></p>
                                    </Link>
                                </li>
                            
                            
                                <li className='nav-item'>
                                    <Link className="nav-link" to="/Solicitudes">
                                        <i className='nav-icon fas fa-tasks'></i>
                                        <p>Solicitudes<i className="right fas fa-angle-right"></i></p>
                                    </Link>
                                </li>
                            
                        </ul>
                    
                </nav>
            </aside>

        </>
    )
}

export default withRouter(Dashboard);