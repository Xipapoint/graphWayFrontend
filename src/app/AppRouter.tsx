
import {Navigate, Route, Routes} from 'react-router-dom';
import { privateRoutes, publicRoutes } from './router';

const AppRouter = () => {
    const auth:boolean = false
    return (
        auth
            ?
            <Routes>
                {privateRoutes.map((route) => (
                    <Route path={route.path}
                           element={<route.component/>}
                           key={route.path} />))}
                <Route path="*"
                       element={<Navigate to='/' replace/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route) => (
                    <Route path={route.path}
                           element={<route.component/>}
                           key={route.path} />))}
                <Route path="/"
                       element={<Navigate to='/home' replace/>}/>
                <Route path="*"
                       element={<Navigate to='/home' replace/>}/>
            </Routes>
    );
};

export default AppRouter;