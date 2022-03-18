
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';


import ItemDetailContainer from './container/ItemDetailContainer';


function App() {


  return (
    <div className="App" >
      <NavBar />
    
      <ItemDetailContainer />


    </div >
  )
}
export default App;
