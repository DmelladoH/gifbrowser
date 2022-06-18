import './App.css'
import ListOfGift from './components/ListOfGifts'
import { useState } from 'react'

function App () {
  const [keyword, setKeyword] = useState('')
  return (
    <div className='App'>
      <section className='App-content'>
        <button onClick={() => setKeyword('Burgos')}>Change</button>
        <ListOfGift keyword={keyword} />
      </section>
    </div>
  )
}

export default App
