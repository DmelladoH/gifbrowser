import './App.css'
import { Link, Route, Switch } from 'wouter'

import { GifsContextProvider } from 'context/GifsContext'
import ScrollToTop from 'utils/ScrollToTop'
import SearchForm from 'components/SearchForm'

import Home from 'pages/Home'
import Search from 'pages/Search'
import Details from 'pages/Details'
import Error from 'pages/Error'

function App () {
  return (
    <div className='App'>
      <section className='App-content'>
        <Link to='/'>
          <h1>Gifbrowser</h1>
        </Link>
        <header className='o-header'>
          <SearchForm />
        </header>
        <GifsContextProvider>
          <ScrollToTop>
            <Switch>
              <Route
                path='/'
                component={Home}
              />
              <Route
                path='/search/:keyword/:lang?/:rating?'
                component={Search}
              />
              <Route
                path='/gif/:id'
                component={Details}
              />
              <Route
                path='/:rest*'
                component={Error}
              />
            </Switch>
          </ScrollToTop>
        </GifsContextProvider>
      </section>
    </div>
  )
}

export default App
