import React, { useState } from 'react'
import logo from '@/assets/logo.svg'
import './style.scss'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((count) => {
      return count + 1
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + Typescript + React!</p>
        <p>
          <button type="button" onClick={ handleClick }>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App/index.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Typescript
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
