import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes} from "react-router-dom"

import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './assets/context/contex.jsx'

import {SocketContextProvider} from "./context/SocketContext.jsx"

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <AuthContextProvider> 
    <SocketContextProvider>
               <App />
    </SocketContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
    
)
