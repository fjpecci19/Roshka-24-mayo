import './App.css'
import Label from './components/label'
import datos from './data/label'

function App() {
  const card = datos.map((c) => {
    return <Label card = {c}/>
  })

  return (
    <div className="App">
      {card}
    </div>
  )
}

export default App
