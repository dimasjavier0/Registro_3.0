import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({seleccionOpcion,setSeleccionOpcion}) {

    const [opciones, setOpciones] = useState(false);

    const mostrarOpciones = () => {
        setOpciones(!opciones);
    };

    const cerrarOpciones = () => {
        setOpciones(false);
    };

    const handleOpcionClick = (option) => {
        setSeleccionOpcion(option);
        cerrarOpciones();
        localStorage.setItem('seleccionOpcion', option);
    };

return (
    <header className="bg-white p-3 border-2 rounded-t-none  rounded-b-lg w-full fixed">
        <div className=" flex justify-between ">

            <div className='flex '>

                <img className='transition ease-in-out delay-50 hover:scale-150  duration-250 w-12 ml-2' 
                src="src/img/Logo-Puma.png" 
                alt="Logo-Puma" />
            
                <Link to='/'>
                <button  className=" color-texto font-bold font-label text-xl hover:bg-gray-400  py-2 px-4 rounded ml-3" 
                onClick={() => handleOpcionClick(null)}
                >Inicio</button>
                </Link>
            </div>
            
            <div>
                <Link to='/registrar'>
                <button  className=" color-boton hover:bg-blue-700 font-bold font-label text-white  py-2 px-4 rounded mr-5"
                onClick={() => handleOpcionClick(null)}
                >Regístrate</button>
                </Link>

                <button type="button" className="color-boton  hover:bg-blue-700 font-bold font-label text-white  py-2 px-4 rounded mr-20" 
                onClick={mostrarOpciones}
                >
                Acceso <i className={`fas ${opciones ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </button> 

            

            <div className={`absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg w-44 p-2 mr-20  transition-all duration-300 ${opciones ? 'opacity-100' : 'opacity-0'} transform origin-top`}>
                
                <ul className="py-2  flex flex-col ">
                    <li className="flex items-center">
                    <Link to='/estudiantes' className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200"   
                    onClick={() => handleOpcionClick('Estudiantes')}>
                    <i className="fas fa-user mr-5"></i> Estudiantes
                    </Link>
                    </li>

                    <li className="flex items-center mr-3">
                    <Link to='/docentes' className="flex items-center px-4 py-2  text-gray-800 hover:bg-gray-200"  
                    onClick={() => handleOpcionClick('Docentes')}>
                    <i className="fas fa-chalkboard-teacher mr-4"></i> Docentes
                    </Link>
                    </li>
                </ul>

            </div>
            </div>
        </div>
    </header>
);
}

export default Header;
