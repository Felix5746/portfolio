import ReactDOM from 'react-dom/client'
import {StrictMode} from 'react'
import {BrowserRouter} from 'react-router-dom'
import NavigationBar from './navigation/navigationBar.tsx'
import Routing from './navigation/routing.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
)

root.render(
    <StrictMode>
        <BrowserRouter>
            <NavigationBar/>
            <Routing/>
        </BrowserRouter>
    </StrictMode>,
)
