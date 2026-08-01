import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";



createRoot(document.getElementById('root')!).render(

        <StrictMode>
            <BrowserRouter>
                <App title={''} color={''} indexOfCars={0} />
            </BrowserRouter>
          </StrictMode>


)
