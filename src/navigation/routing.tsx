import {FunctionComponent} from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/home.tsx'
import Resume from '../pages/resume.tsx'
import Experience from '../pages/experience.tsx'
import Interests from '../pages/interests.tsx'
import Contact from '../pages/contact.tsx'
import PageNotFound from '../pages/PageNotFound.tsx'

interface RoutingProps {

}

const Routing: FunctionComponent<RoutingProps> = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/resume'} element={<Resume/>}/>
            <Route path={'/experience'} element={<Experience/>}/>
            <Route path={'/interests'} element={<Interests/>}/>
            <Route path={'/contact'} element={<Contact/>}/>
            <Route path={'*'} element={<PageNotFound/>}/>
        </Routes>
    )
}

export default Routing
