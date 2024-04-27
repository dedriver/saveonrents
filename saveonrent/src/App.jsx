import './App.css'
import './reset.css'
import Heder from './heder/Heder.jsx'
import Flagman from './flagman/Flagman.jsx'
import Creates from './assets/creactor/Creates.jsx'
function App() {
  return (
    <>
      <Heder/>
      <main>
        <Flagman/>
        <Creates/>
      </main>
    </>
  )
}

export default App
