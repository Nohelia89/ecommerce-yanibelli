
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import Contador from './components/Contador/Contador';

function App() {


  return (
    <div className = "App" >
<NavBar/>
<ItemListContainer saludo="Hola soy ItemListContainer" />
<Contador stock="10" inicial = "1" onAdd="5"/>


        </div >
)
}
export default App;
