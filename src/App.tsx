import { useState } from 'react'
import './App.css'


function App() {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <div>
        <button onClick={() => setVisible(!visible)}>
          Click me
        </button>
        {visible && 
        <>
          <h1 className='Titulo'>Rosibel Campos/developer</h1>
        </>
        }
      </div>
    </>
  )
}

export default App
