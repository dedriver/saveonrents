import './App.css'
import './reset.css'
import Heder from './heder/Heder.jsx'
import Flagman from './flagman/Flagman.jsx'
import Creates from './assets/creactor/Creates.jsx'
import './media.css'
function App() {
  return (
    <>
      <Heder/>
      <main>
        <Flagman/>
       <section> <h3 className='CreateMainSlogan'>Create infographics<br/>
for free</h3></section>
         <Creates/> 
      </main>
    </>
  )
}

export default App
