import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Acceso from './pages/Estudiantes'
import Registrar from './pages/Registrar'
import Docentes from './pages/Docentes'
import Principal from './layout/Principal';
import SubirCsv from './pages/SubirCsv'
import OlvideContraseña from './pages/OlvideContraseña'
import LayoutAdmin from './layout/LayoutAdmin'
import Administrador from './pages/Administrador';

import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  

  return (
    
        <BrowserRouter>
      <Routes>

        <Route path='/' element={<Principal/>}> 
            <Route path='/estudiantes' element={<Acceso/> } />
            <Route path='/registrar' element={<Registrar/>} />
            <Route path='/docentes' element={<Docentes/>} /> 
            <Route path='/Administrador' element={<Administrador/>} /> 
             
              
        </Route>
        <Route>
        <Route path='/SubirCsv' element={<SubirCsv/>} /> 
        <Route path='/olvideContraseña' element={<OlvideContraseña/>} />
        <Route path='/administrador' element={<LayoutAdmin/>} />
        </Route>

      </Routes>
      <Routes>
      </Routes>
    </BrowserRouter>
    
    
  )
}

export default App
