
import './App.css';
import Home from './Components/Home/Home';
import Form from './Components/Home/Form';
import { Routes,Route } from 'react-router-dom';
import DataProvider from './Context/Dataprovider';


function App() {
  return (
    <DataProvider>
   <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/signup' element={<Form/>}/>
    <Route path='/login' element={<Form/>}/>
    <Route path='/' element={<Form/>}/>
   </Routes>
   </DataProvider>
  );
}

export default App;
