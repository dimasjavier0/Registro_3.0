import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


function HeaderDocente() {
    const navigate = useNavigate();


    const handleCerrarSesion = () => {
        const confirmar = window.confirm('¿Estás seguro de cerrar sesión?');
        if (confirmar) {
            navigate('/');
        }
    };

    return (
        <div className='h-full flex fixed'>
            <aside className=' bg-blue-500'>
                    <div className=' mt-5 ml-36'>
                    <button
                    className='transition bg-white text-gray-600 block mt-7 ml-8 font-bold text-lg ease-in-out  shadow-md hover:shadow-white rounded-lg py-0 px-5 border-gray-500 border-2 pb-1'
                    onClick={handleCerrarSesion}>Cerrar Sesión</button>    
                    {/* <Link
                    to='/' 
                    className=" ml-72 ">
                    <i className="text-white fa-regular fa-share-from-square fa-rotate-180 fa-2xl"></i>
                    </Link> */}
                    </div>
                <div className=' mr-16'>
                <div>
                <h1 className='text-4xl ml-8 
                font-black text-center text-white mt-10'>Área personal <br />
                <p>docente</p>
                </h1>
                <img className=' w-44 h-44 ml-20 mb-10 mt-2' src="/img/vista-docente.png" alt="Seguridad" /> 
                <nav className=''>
                    <Link to='/principalDocente/videosporasignatura'>
                        <button className='transition bg-white text-gray-600 ml-8 font-bold text-lg ease-in-out  hover:scale-110 shadow-md hover:shadow-white rounded-lg py-0 px-5 border-gray-500 border-2 pb-1'>
                        Agregar Video
                        </button>
                    </Link>

                    <Link to='/principalDocente/clasesAsignadas'>
                        <button className='transition bg-white text-gray-600 block mt-7 ml-8 font-bold text-lg ease-in-out  hover:scale-110 shadow-md hover:shadow-white rounded-lg py-0 px-5 border-gray-500 border-2 pb-1'>
                        Listado Estudiantes
                        </button>
                    </Link>

                    <Link to='/principalDocente/subirNotas'>
                        <button className='transition bg-white text-gray-600 block mt-7 ml-8 font-bold text-lg ease-in-out  hover:scale-110 shadow-md hover:shadow-white rounded-lg py-0 px-5 border-gray-500 border-2 pb-1'>
                        Ingresar Notas
                        </button>
                    </Link>
                </nav>
                </div>
                </div>
            </aside>
        </div>
        
    )
}

export default HeaderDocente