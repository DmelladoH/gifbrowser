import './App.css'
import { Link, Route, Switch } from 'wouter'

import Home from 'pages/Home'
import Search from 'pages/Search'
import Details from 'pages/Details'
import Error from 'pages/Error'
import { GifsContextProvider } from 'context/GifsContext'

function App () {
  return (
    <div className='App'>
      <section className='App-content'>
        <Link to='/'>
          <h1>Gifbrowser</h1>
        </Link>
        <GifsContextProvider>
          <Switch>
            <Route
              path='/'
              component={Home}
            />
            <Route
              path='/search/:keyword'
              component={Search}
            />
            <Route
              path='/gif/:id'
              component={Details}
            />
            <Route
              path='/404'
              component={Error}
            />
          </Switch>
        </GifsContextProvider>
      </section>
    </div>
  )
}

export default App
