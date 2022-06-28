import logo from './logo.svg'
import './App.css'
import Words from './Components/Words/Words'
import Button from './Components/Button/Button'

function App() {
  return (
    <div>
      <div className='display'>
        <h1>10 Formas de Escrever "Hello World"</h1>
        <Words />
        <Button />
      </div>
    </div>
  )
}

export default App
