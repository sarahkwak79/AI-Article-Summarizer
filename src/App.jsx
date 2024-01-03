import Intro from "./components/Intro"
import Summarize from "./components/Summarize"

import "./App.css"

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Intro />
        <Summarize />
      </div>
    </main>
  )
}

export default App