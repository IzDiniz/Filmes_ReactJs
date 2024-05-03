import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Filmes from './pages/filmes.jsx'
import Sobre from './pages/sobre.jsx'
import Contato from './pages/contato.jsx'
import PageNotFound from './pages/pageNotFound.jsx'
import Home from './pages/home.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {index: true, element: <Home/>},
      {path: 'filmes', element: <Filmes/>},
      {path: 'Sobre', element: <Sobre/>},
      {path: 'Contato', element: <Contato/>},
      {path: '*', element: <PageNotFound/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
