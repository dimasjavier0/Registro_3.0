import React from 'react'
import { Link } from 'react-router-dom'
function HeaderSolicitudes() {

return (
    <div className='h-full flex fixed'>
        <aside className=' bg-yellow-400'>
                <div className=' mt-5'>
                <Link
                to='/principalEstudiante' 
                className=" ml-72 ">
                <i className="text-white fa-regular fa-share-from-square fa-rotate-180 fa-2xl"></i>
                </Link>
                </div>
                <div className=' mr-16'>
                <div>
                <h1 className='text-4xl ml-8 
                font-black text-center text-white mt-10'>Solicitudes <br />
                <p>estudiante</p>
                </h1>
                <img className=' w-44 h-40 ml-20 mb-8 mt-10' src="/img/vista-estudiante.png" alt="Seguridad" /> 
                
                <nav>
                <Link to='/principalSolicitudes/cambioCentro'>
                    <button className='transition bg-gray-100 text-orange-900 ml-8 font-bold text-lg ease-in-out  hover:scale-110 shadow-md hover:shadow-white rounded-lg py-0 px-5 border-gray-500 border-2 pb-1'>
                        Cambio de centro
                    </button>
                </Link>

                <Link to='/principalSolicitudes/cambioCarrera'>
                    <button className='transition bg-gray-100 block mt-7 ml-8 text-orange-900 font-bold text-lg ease-in-out  hover:scale-110 shadow-md hover:shadow-white rounded-lg py-0 px-5 border-gray-500 border-2 pb-1'>
                        Cambio de carrera 
                    </button>
                </Link>

                <Link to='/principalSolicitudes/pagoReposicion'>
                    <button className='transition bg-gray-100 block mt-7 ml-8 text-orange-900 font-bold text-lg ease-in-out  hover:scale-110 shadow-md hover:shadow-white rounded-lg py-0 px-5 border-gray-500 border-2 pb-1'>
                        Pago de reposición
                    </button>
                </Link>

                <Link to='#'>
                    <button className='transition bg-gray-100 block mt-7 ml-8 text-orange-900 font-bold text-lg ease-in-out  hover:scale-110 shadow-md hover:shadow-white rounded-lg py-0 px-5 border-gray-500 border-2 pb-1'>
                        Cancelacion excepcional
                    </button>
                </Link>
            </nav>
            
            </div>
            </div>
        </aside>
    </div>
        
    )
}

export default HeaderSolicitudes