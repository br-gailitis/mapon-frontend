// import { useState } from 'react'
import maponLogo from './assets/mapon.png'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import ReportForm from './components/Form/ReportForm'
import ActionBar from './components/ActionBar/ActionBar'
import Route from './components/Route/Route'

function App() {
  return (
    <Provider store={store}>
      <a href="https://www.mapon.com" target="_blank">
        <img src={maponLogo} className="logo" alt="Mapon logo" />
      </a>
      <div className="content">
        <ReportForm />
        <div className="routes">
          <Route />
        </div>
        <ActionBar />
      </div>
    </Provider>
  )
}

export default App
