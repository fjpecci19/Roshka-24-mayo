import "./App.css"
import Casillas from "./components/casillas"
import McDonalds from "./data/datos"

function App() {
  const combos = McDonalds.map((c) => {
    return <Casillas combo = {c}/>
  })

  return (
    <div className="App">
      {combos}
    </div>
  )
}

export default App
