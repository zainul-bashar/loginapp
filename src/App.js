
import { Route, Routes } from 'react-router';
import './App.css';
import Loginpage from './components/Loginpage';
import Nextpage from './components/Nextpage';

function App() {
  return (
    <div className="App">
      
     <Routes>
       <Route path='/' element={<Loginpage/>}/>
       <Route path='/page' element={<Nextpage/>}/>
     </Routes>
    </div>
  );
}

export default App;
