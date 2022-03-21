import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
//import {lazy, Suspense} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import Cart from './components/Cart/Cart';


function App() {


  return (
    <BrowserRouter>
    <div className="App" >
      <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/cart" element={<Cart /> }/>
    <Route path="/detalle/:detailId" element={<ItemDetailContainer /> }/>
    <Route path="/*" element={<Navigate to='/'/>}/>

      </Routes>
    </div >
    </BrowserRouter>
  )
  
}
export default App;
