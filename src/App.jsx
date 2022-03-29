import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//import {lazy, Suspense} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './Context/CartContext';

//const ItemListContainer = lazy(()=>import ('./container/ItemListContainer'))
function App() {


  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App" >
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/*" element={<Navigate to='/' />} />
            <Route path="/category/:category/Detail/:detailId" element={<ItemDetailContainer />} />
          </Routes>
        </div >
      </CartContextProvider>
    </BrowserRouter>
  )

}
export default App;
