import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
//import { RecoilRoot } from 'recoil'
//import store from './store'
import App from './App'
import Draw1, {  } from './dia'
import Disp1 from './Disp'
import { store } from './store'
//import './index.css'

//const rootElement = document.getElementById("root");
//const root = createRoot(rootElement);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <Provider store={store}>
    <App />
    <div><Draw1></Draw1></div>
    <Disp1 />
    </Provider>

  </React.StrictMode>,
)
//do_draw();

