import './App.css'
import Navbar from "./components/navbar/navbar"
import ItemListContainer from './containers/itemListContainer/itemListContainer'

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos al mundo del Mate'}/>
    </div>
  )
}

export default App
