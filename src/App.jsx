
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import StockCount from './components/StockCount/StockCount'; 

function App() {


  return (
    <div className = "App" >
<NavBar/>
<ItemListContainer saludo="Hi Im ItemListContainer" />
<StockCount stock={10} initial = {1} />


        </div >
)
}
export default App;
