import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Create from './component/create';
import User from './component/user';
import Update from './component/update';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<User/>}></Route>
            <Route path='/create' element={<Create/>}></Route>
            <Route path='/update/:id' element={<Update/>}></Route>

         </Routes>
      </BrowserRouter>

    
      
    </div>
  );
}

export default App;
