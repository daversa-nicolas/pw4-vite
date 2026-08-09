import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";



createRoot(document.getElementById('root')!).render(
        //En mode développement React,
        // `StrictMode` appelle intentionnellement
        // certaines méthodes de cycle de vie
        // ou la logique de rendu **deux fois**
        // afin de détecter les effets
        // de bord problématiques.
        /*donc :
        getDerivedStateFromProps
        getDerivedStateFromProps
        render
        render
        it's ORDINARY*/
        <StrictMode>
            <BrowserRouter>
                <App title={''} color={''} indexOfCars={0} />
            </BrowserRouter>
          </StrictMode>


)
